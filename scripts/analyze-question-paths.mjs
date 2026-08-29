import { contentPacks } from "../src/content/packs.ts";
import { ENDING_IDS, RELATIONSHIP_EVALUATION_IDS, validateContent } from "../src/content/schema.ts";
import { applyEffects, endingResultKey, INITIAL_STATE, resolveEnding } from "../src/game/rules.ts";

const GLOBAL_DANGER = ["conflict_break", "strong_discomfort", "trust_broken"];
const GLOBAL_DANGER_TARGETS = {
  conflict_break: [3, 5],
  strong_discomfort: [4, 6],
  trust_broken: [4, 6],
};
const STAGE_GATES = [
  ["Q02", "no_second_meeting", [20, 25], 30],
  ["Q05", "fade_out", [30, 38], 45],
  ["Q08", "stay_acquaintances", [35, 45], 55],
];
const FINAL_OUTCOMES = [
  "strangers_after_all",
  "confirmed_relationship:romance_stable",
  "confirmed_relationship:romance_hidden_risk",
  "dangerous_lovers",
  "friends",
  "unresolved_ambiguity",
];
const FINAL_GROUPS = {
  strangers_after_all: { outcomeIds: ["strangers_after_all"], recommendedRange: [15, 20] },
  confirmed_relationship: {
    outcomeIds: [
      "confirmed_relationship:romance_stable",
      "confirmed_relationship:romance_hidden_risk",
    ],
    recommendedRange: [10, 15],
  },
  dangerous_lovers: { outcomeIds: ["dangerous_lovers"], recommendedRange: [5, 10] },
  friends: { outcomeIds: ["friends"], recommendedRange: [18, 25] },
  unresolved_ambiguity: { outcomeIds: ["unresolved_ambiguity"], recommendedRange: [35, 45] },
};
const EXPECTED_OUTCOMES = [
  ...ENDING_IDS.filter((id) => id !== "confirmed_relationship"),
  ...RELATIONSHIP_EVALUATION_IDS.map((id) => `confirmed_relationship:${id}`),
];
const PACKS = contentPacks;

function percent(numerator, denominator) {
  return denominator ? Number(((numerator / denominator) * 100).toFixed(3)) : null;
}

function add(map, key, weight, path, state) {
  const entry = map.get(key) ?? { trajectories: 0, weightedPaths: 0, examplePath: path, exampleState: state };
  entry.trajectories += 1;
  entry.weightedPaths += weight;
  map.set(key, entry);
}

function objectFrom(map) {
  return Object.fromEntries([...map.entries()].sort(([a], [b]) => a.localeCompare(b)));
}

function distribution(map, denominator, property) {
  return Object.fromEntries([...map.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, value]) => [id, percent(value[property], denominator)]));
}

function resultData(result) {
  return { endingId: result.endingId, outcomeId: endingResultKey(result) };
}

function dominates(first, second) {
  const a = first.effects;
  const b = second.effects;
  return a.attraction >= b.attraction && a.trust >= b.trust && a.comfort >= b.comfort && a.conflict <= b.conflict &&
    (a.attraction > b.attraction || a.trust > b.trust || a.comfort > b.comfort || a.conflict < b.conflict);
}

function simulate(questions, pick) {
  let state = { ...INITIAL_STATE };
  const path = [];
  for (let index = 0; index < questions.length; index += 1) {
    const question = questions[index];
    const option = pick(question, index);
    if (!option) return { applicable: false, missingAt: question.id };
    state = applyEffects(state, option.effects);
    path.push(option.id);
    const ending = resolveEnding(question.order, state);
    if (ending) return { applicable: true, ending: endingResultKey(ending), baseEnding: ending.endingId, path, state, stoppedAfter: question.order };
  }
  throw new Error("Production resolver did not return an ending at Q10");
}

function status(value, [minimum, maximum], options = {}) {
  if (value === null) return "no_denominator";
  if (options.reachable && value === 0) return "unreachable";
  if (options.hardMaximum !== undefined && value > options.hardMaximum) return "above_hard_maximum";
  if (options.anomalyAbove !== undefined && value > options.anomalyAbove) return "anomalous_high";
  if (options.warningAbove !== undefined && value > options.warningAbove) return "above_preferred_maximum";
  if (options.minimum !== undefined && value < options.minimum) return "below_minimum";
  if (value < minimum) return "below_recommended";
  if (value > maximum) return "above_recommended";
  return "within_recommended";
}

function analyzePack(type, pack) {
  const { questions } = pack;
  const effectBudgetWarnings = validateContent(pack);
  const fullChoiceSpace = questions.reduce((product, question) => product * question.options.length, 1);
  const outcomes = new Map();
  const baseEndings = new Map();
  const gateStats = new Map(STAGE_GATES.map(([questionId, endingId]) => [questionId, { endingId, eligibleTrajectories: 0, failureTrajectories: 0, eligibleWeightedPaths: 0, failureWeightedPaths: 0 }]));
  const finalOutcomes = new Map();
  let terminalTrajectories = 0;
  let earlyTerminalTrajectories = 0;

  function finish(result, weight, path, state, early) {
    const normalized = resultData(result);
    add(outcomes, normalized.outcomeId, weight, path, state);
    add(baseEndings, normalized.endingId, weight, path, state);
    terminalTrajectories += 1;
    if (early) earlyTerminalTrajectories += 1;
  }

  function visit(index, state, path) {
    const question = questions[index];
    for (const option of question.options) {
      const nextState = applyEffects(state, option.effects);
      const nextPath = [...path, option.id];
      const result = resolveEnding(question.order, nextState);
      const weight = questions.slice(index + 1).reduce((product, item) => product * item.options.length, 1);
      const gate = gateStats.get(question.id);
      if (gate && (!result || result.endingId === gate.endingId)) {
        gate.eligibleTrajectories += 1;
        gate.eligibleWeightedPaths += weight;
        if (result?.endingId === gate.endingId) {
          gate.failureTrajectories += 1;
          gate.failureWeightedPaths += weight;
        }
      }
      if (index === questions.length - 1) {
        if (!result) throw new Error(`${type} Q10 did not resolve for ${nextPath.join(", ")}`);
        finish(result, 1, nextPath, nextState, false);
        const normalized = resultData(result);
        if (FINAL_OUTCOMES.includes(normalized.outcomeId)) add(finalOutcomes, normalized.outcomeId, 1, nextPath, nextState);
      } else if (result) {
        finish(result, weight, nextPath, nextState, true);
      } else {
        visit(index + 1, nextState, nextPath);
      }
    }
  }

  visit(0, { ...INITIAL_STATE }, []);
  const outcomeData = objectFrom(outcomes);
  const baseEndingData = objectFrom(baseEndings);
  const weightedTotal = Object.values(outcomeData).reduce((total, item) => total + item.weightedPaths, 0);
  if (weightedTotal !== fullChoiceSpace) throw new Error(`${type}: weighted total ${weightedTotal} does not match ${fullChoiceSpace}`);

  const globalByEnding = Object.fromEntries(GLOBAL_DANGER.map((id) => {
    const data = baseEndingData[id] ?? { trajectories: 0, weightedPaths: 0 };
    const weightedPercentage = percent(data.weightedPaths, fullChoiceSpace);
    return [id, { ...data, weightedPercentage, reachable: data.weightedPaths > 0, status: status(weightedPercentage, GLOBAL_DANGER_TARGETS[id], { hardMaximum: 10, reachable: true }) }];
  }));
  const globalWeightedPaths = Object.values(globalByEnding).reduce((total, item) => total + item.weightedPaths, 0);
  const globalTrajectories = Object.values(globalByEnding).reduce((total, item) => total + item.trajectories, 0);
  const stageGates = STAGE_GATES.map(([questionId, endingId, range, anomalyAbove]) => {
    const data = gateStats.get(questionId);
    const weightedConditionalFailurePercentage = percent(data.failureWeightedPaths, data.eligibleWeightedPaths);
    return { questionId, endingId, ...data, trajectoryPrefixFailurePercentage: percent(data.failureTrajectories, data.eligibleTrajectories), weightedConditionalFailurePercentage, status: status(weightedConditionalFailurePercentage, range, { anomalyAbove }) };
  });
  const finalData = objectFrom(finalOutcomes);
  const finalWeightedPaths = Object.values(finalData).reduce((total, item) => total + item.weightedPaths, 0);
  const finalTrajectories = Object.values(finalData).reduce((total, item) => total + item.trajectories, 0);
  const finalByOutcome = Object.fromEntries(FINAL_OUTCOMES.map((id) => {
    const data = finalData[id] ?? { trajectories: 0, weightedPaths: 0, examplePath: null, exampleState: null };
    const weightedConditionalPercentage = percent(data.weightedPaths, finalWeightedPaths);
    return [id, { ...data, weightedConditionalPercentage, trajectoryConditionalPercentage: percent(data.trajectories, finalTrajectories), reachable: data.weightedPaths > 0, status: data.weightedPaths > 0 ? "reported_only" : "unreachable" }];
  }));
  const finalByGroup = Object.fromEntries(Object.entries(FINAL_GROUPS).map(([id, config]) => {
    const weightedPaths = config.outcomeIds.reduce((total, outcomeId) => total + (finalData[outcomeId]?.weightedPaths ?? 0), 0);
    const trajectories = config.outcomeIds.reduce((total, outcomeId) => total + (finalData[outcomeId]?.trajectories ?? 0), 0);
    const weightedConditionalPercentage = percent(weightedPaths, finalWeightedPaths);
    return [id, {
      outcomeIds: config.outcomeIds,
      trajectories,
      weightedPaths,
      weightedConditionalPercentage,
      trajectoryConditionalPercentage: percent(trajectories, finalTrajectories),
      status: status(weightedConditionalPercentage, config.recommendedRange, { reachable: true }),
    }];
  }));
  const allStrategies = [...new Set(questions.flatMap((question) => question.options.map((option) => option.strategy)))].sort();
  const fixedStrategies = allStrategies.map((strategy) => ({ strategy, ...simulate(questions, (question) => question.options.find((option) => option.strategy === strategy)) }));
  const localDominance = questions.flatMap((question) => question.options.flatMap((candidate) => question.options.filter((other) => other !== candidate && dominates(candidate, other)).map((other) => ({ questionId: question.id, dominantOption: candidate.id, dominatedOption: other.id }))));
  const globalStrategyDominance = allStrategies.flatMap((first) => allStrategies.filter((second) => first !== second && questions.every((question) => {
    const a = question.options.find((option) => option.strategy === first);
    const b = question.options.find((option) => option.strategy === second);
    return a && b && dominates(a, b);
  })).map((second) => ({ dominantStrategy: first, dominatedStrategy: second })));
  const observedEndingIds = [...baseEndings.keys()].sort();
  const observedOutcomeIds = [...outcomes.keys()].sort();

  return {
    type,
    questionCount: questions.length,
    optionCounts: questions.map((question) => question.options.length),
    completeChoiceSpace: fullChoiceSpace,
    terminalTrajectories,
    earlyTerminalTrajectories,
    weightedTotal,
    endings: outcomeData,
    baseEndings: baseEndingData,
    trajectoryPercentages: distribution(outcomes, terminalTrajectories, "trajectories"),
    weightedPathPercentages: distribution(outcomes, fullChoiceSpace, "weightedPaths"),
    baseEndingTrajectoryPercentages: distribution(baseEndings, terminalTrajectories, "trajectories"),
    baseEndingWeightedPathPercentages: distribution(baseEndings, fullChoiceSpace, "weightedPaths"),
    balance: {
      globalDanger: { byEnding: globalByEnding, combined: { trajectories: globalTrajectories, weightedPaths: globalWeightedPaths, weightedPercentage: percent(globalWeightedPaths, fullChoiceSpace), status: status(percent(globalWeightedPaths, fullChoiceSpace), [11, 17], { hardMaximum: 20 }) } },
      stageGates,
      finalClassifier: { questionId: "Q10", reachedTrajectories: finalTrajectories, reachedWeightedPaths: finalWeightedPaths, weightedReachPercentage: percent(finalWeightedPaths, fullChoiceSpace), reachStatus: status(percent(finalWeightedPaths, fullChoiceSpace), [20, 30]), byOutcome: finalByOutcome, byGroup: finalByGroup },
    },
    coverage: {
      endings: { expected: [...ENDING_IDS], observed: observedEndingIds, missing: ENDING_IDS.filter((id) => !baseEndings.has(id)), unexpected: observedEndingIds.filter((id) => !ENDING_IDS.includes(id)) },
      outcomes: { expected: EXPECTED_OUTCOMES, observed: observedOutcomeIds, missing: EXPECTED_OUTCOMES.filter((id) => !outcomes.has(id)), unexpected: observedOutcomeIds.filter((id) => !EXPECTED_OUTCOMES.includes(id)) },
      ruleDiagnostics: { shadowingStatus: "unknown", reason: "Production rules do not expose stable rule IDs or applicable-rule diagnostics." },
    },
    fixedPositions: [0, 1, 2, 3].map((index) => ({ position: index + 1, ...simulate(questions, (question) => question.options[index]) })),
    fixedStrategies,
    localDominance,
    globalStrategyDominance,
    effectBudgetWarnings,
    examples: Object.fromEntries([...outcomes.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, item]) => [id, { path: item.examplePath, state: item.exampleState }])),
  };
}

function printHuman(report) {
  for (const pack of Object.values(report.packs)) {
    console.log(`\n${pack.type}: ${pack.completeChoiceSpace} complete weighted paths; ${pack.terminalTrajectories} terminal trajectories (${pack.earlyTerminalTrajectories} early).`);
    console.log("Weighted path percentages are the equal-choice probability model; trajectory percentages are terminal-route shares only.");
    console.log(JSON.stringify({ globalDanger: pack.balance.globalDanger, stageGates: pack.balance.stageGates, finalClassifier: pack.balance.finalClassifier, coverage: pack.coverage, fixedPositions: pack.fixedPositions, fixedStrategies: pack.fixedStrategies, localDominance: pack.localDominance, globalStrategyDominance: pack.globalStrategyDominance, effectBudgetWarnings: pack.effectBudgetWarnings }, null, 2));
  }
}

const args = process.argv.slice(2);
const json = args.includes("--json");
const selection = args.find((arg) => arg !== "--json")?.toUpperCase() ?? "ALL";
if (!["ALL", ...Object.keys(PACKS)].includes(selection)) {
  throw new Error(`Usage: node scripts/analyze-question-paths.mjs [${Object.keys(PACKS).join("|")}|all] [--json]`);
}
const selected = selection === "ALL" ? Object.entries(PACKS) : [[selection, PACKS[selection]]];
const report = { packs: Object.fromEntries(selected.map(([type, pack]) => [type, analyzePack(type, pack)])) };
if (json) console.log(JSON.stringify(report, null, 2)); else printHuman(report);
