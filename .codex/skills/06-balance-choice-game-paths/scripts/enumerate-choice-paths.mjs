#!/usr/bin/env node

import path from "node:path";
import { pathToFileURL } from "node:url";

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const json = argv.includes("--json");
  const positional = argv.filter((arg) => arg !== "--json");
  if (positional.length !== 1) {
    fail("Usage: node enumerate-choice-paths.mjs <adapter.mjs> [--json]");
  }
  return { adapterPath: positional[0], json };
}

function validateIdArray(value, exportName) {
  if (value === undefined) return;
  if (!Array.isArray(value)) {
    fail(`${exportName} must be an array when provided`);
  }
  const ids = new Set();
  for (const id of value) {
    if (typeof id !== "string" || id.length === 0 || ids.has(id)) {
      fail(`${exportName} must contain unique non-empty strings: ${id}`);
    }
    ids.add(id);
  }
}

function validateRange(value, label) {
  if (
    !Array.isArray(value) ||
    value.length !== 2 ||
    value.some((entry) => !Number.isFinite(entry)) ||
    value[0] > value[1]
  ) {
    fail(`${label} must be a two-number ascending range`);
  }
}

function validateEffectConstraints(constraints) {
  if (constraints === undefined) return;
  if (!constraints || typeof constraints !== "object" || Array.isArray(constraints)) {
    fail("effectConstraints must be an object when provided");
  }
  const {
    allowedValues,
    hardTotalAbsoluteChange,
    recommendedTotalAbsoluteChange,
    highMagnitudeAtOrAbove,
    recommendedMaxHighMagnitudeDimensions,
  } = constraints;
  if (
    !Array.isArray(allowedValues) ||
    allowedValues.length === 0 ||
    allowedValues.some((value) => !Number.isFinite(value)) ||
    new Set(allowedValues).size !== allowedValues.length
  ) {
    fail("effectConstraints.allowedValues must contain unique finite numbers");
  }
  for (const [label, value] of Object.entries({
    hardTotalAbsoluteChange,
    recommendedTotalAbsoluteChange,
    highMagnitudeAtOrAbove,
    recommendedMaxHighMagnitudeDimensions,
  })) {
    if (!Number.isFinite(value) || value < 0) {
      fail(`effectConstraints.${label} must be a non-negative finite number`);
    }
  }
  if (recommendedTotalAbsoluteChange > hardTotalAbsoluteChange) {
    fail("Recommended total absolute change cannot exceed the hard cap");
  }
  if (!Number.isInteger(recommendedMaxHighMagnitudeDimensions)) {
    fail("recommendedMaxHighMagnitudeDimensions must be an integer");
  }
}

function validateBalanceConfig(config, questionIds) {
  if (config === undefined) return;
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    fail("balanceConfig must be an object when provided");
  }
  if (config.globalDanger) {
    if (
      !Array.isArray(config.globalDanger.endingIds) ||
      config.globalDanger.endingIds.length === 0
    ) {
      fail("balanceConfig.globalDanger.endingIds must be a non-empty array");
    }
    validateIdArray(config.globalDanger.endingIds, "balanceConfig.globalDanger.endingIds");
    if (config.globalDanger.recommendedEachRanges !== undefined) {
      for (const endingId of config.globalDanger.endingIds) {
        validateRange(
          config.globalDanger.recommendedEachRanges[endingId],
          `balanceConfig.globalDanger.recommendedEachRanges.${endingId}`,
        );
      }
    } else {
      validateRange(
        config.globalDanger.recommendedEachRange,
        "balanceConfig.globalDanger.recommendedEachRange",
      );
    }
    validateRange(
      config.globalDanger.recommendedCombinedRange,
      "balanceConfig.globalDanger.recommendedCombinedRange",
    );
    for (const key of ["hardEachMaximum", "hardCombinedMaximum"]) {
      if (!Number.isFinite(config.globalDanger[key]) || config.globalDanger[key] < 0) {
        fail(`balanceConfig.globalDanger.${key} must be non-negative`);
      }
    }
    if (
      config.globalDanger.endingIds.some((endingId) =>
        (config.globalDanger.recommendedEachRanges?.[endingId] ??
          config.globalDanger.recommendedEachRange)[1] >
          config.globalDanger.hardEachMaximum) ||
      config.globalDanger.recommendedCombinedRange[1] >
        config.globalDanger.hardCombinedMaximum
    ) {
      fail("Global-danger recommended ranges cannot exceed hard maxima");
    }
  }
  if (config.stageGates !== undefined) {
    if (!Array.isArray(config.stageGates)) {
      fail("balanceConfig.stageGates must be an array");
    }
    const seenQuestions = new Set();
    const seenEndings = new Set();
    for (const gate of config.stageGates) {
      if (!gate || typeof gate !== "object") fail("Each stage gate must be an object");
      if (!questionIds.has(gate.questionId)) {
        fail(`Stage gate references unknown question ${gate.questionId}`);
      }
      if (seenQuestions.has(gate.questionId) || seenEndings.has(gate.endingId)) {
        fail(`Stage gate question and ending IDs must be unique: ${gate.questionId}`);
      }
      if (typeof gate.endingId !== "string" || gate.endingId.length === 0) {
        fail("Stage gate endingId must be a non-empty string");
      }
      seenQuestions.add(gate.questionId);
      seenEndings.add(gate.endingId);
      validateRange(gate.recommendedRange, `${gate.questionId}.recommendedRange`);
      if (
        gate.anomalyAbove !== undefined &&
        (!Number.isFinite(gate.anomalyAbove) || gate.anomalyAbove < 0)
      ) {
        fail(`${gate.questionId}.anomalyAbove must be non-negative when provided`);
      }
    }
  }
  if (config.finalClassifier) {
    const finalConfig = config.finalClassifier;
    if (!questionIds.has(finalConfig.questionId)) {
      fail(`Final classifier references unknown question ${finalConfig.questionId}`);
    }
    if (!Array.isArray(finalConfig.outcomeIds) || finalConfig.outcomeIds.length === 0) {
      fail("balanceConfig.finalClassifier.outcomeIds must be a non-empty array");
    }
    validateIdArray(finalConfig.outcomeIds, "balanceConfig.finalClassifier.outcomeIds");
    validateRange(
      finalConfig.recommendedReachRange,
      "balanceConfig.finalClassifier.recommendedReachRange",
    );
    if (finalConfig.outcomeGroups !== undefined) {
      if (!finalConfig.outcomeGroups || typeof finalConfig.outcomeGroups !== "object" || Array.isArray(finalConfig.outcomeGroups)) {
        fail("balanceConfig.finalClassifier.outcomeGroups must be an object");
      }
      const grouped = [];
      for (const [groupId, group] of Object.entries(finalConfig.outcomeGroups)) {
        validateIdArray(group.outcomeIds, `balanceConfig.finalClassifier.outcomeGroups.${groupId}.outcomeIds`);
        validateRange(group.recommendedRange, `balanceConfig.finalClassifier.outcomeGroups.${groupId}.recommendedRange`);
        grouped.push(...group.outcomeIds);
      }
      if (new Set(grouped).size !== grouped.length || grouped.length !== finalConfig.outcomeIds.length || finalConfig.outcomeIds.some((id) => !grouped.includes(id))) {
        fail("Final-classifier outcome groups must cover every outcome exactly once");
      }
    } else {
      validateRange(
        finalConfig.recommendedOutcomeConditionalRange,
        "balanceConfig.finalClassifier.recommendedOutcomeConditionalRange",
      );
      for (const key of [
        "minimumOutcomeConditionalPercentage",
        "warningOutcomeConditionalPercentage",
        "maximumOutcomeConditionalPercentage",
      ]) {
        if (!Number.isFinite(finalConfig[key]) || finalConfig[key] < 0) {
          fail(`balanceConfig.finalClassifier.${key} must be non-negative`);
        }
      }
      if (
        finalConfig.minimumOutcomeConditionalPercentage >
          finalConfig.recommendedOutcomeConditionalRange[0] ||
        finalConfig.recommendedOutcomeConditionalRange[1] >
          finalConfig.warningOutcomeConditionalPercentage ||
        finalConfig.warningOutcomeConditionalPercentage >
          finalConfig.maximumOutcomeConditionalPercentage
      ) {
        fail("Final-classifier minimum/recommended/warning/maximum values are inconsistent");
      }
    }
  }
}

function validateAdapter(adapter) {
  if (!adapter.initialState || typeof adapter.initialState !== "object") {
    fail("initialState must be an object");
  }
  if (!adapter.dimensionDirections || typeof adapter.dimensionDirections !== "object") {
    fail("dimensionDirections must be an object");
  }
  if (!Array.isArray(adapter.questions) || adapter.questions.length === 0) {
    fail("questions must be a non-empty array");
  }
  if (typeof adapter.evaluateAfterChoice !== "function") {
    fail("evaluateAfterChoice must be a function");
  }
  if (typeof adapter.evaluateFinal !== "function") {
    fail("evaluateFinal must be a function");
  }
  if (
    adapter.evaluateApplicableRuleIds !== undefined &&
    typeof adapter.evaluateApplicableRuleIds !== "function"
  ) {
    fail("evaluateApplicableRuleIds must be a function when provided");
  }

  validateIdArray(adapter.expectedEndingIds, "expectedEndingIds");
  validateIdArray(adapter.expectedOutcomeIds, "expectedOutcomeIds");
  validateIdArray(adapter.expectedRuleIds, "expectedRuleIds");
  validateEffectConstraints(adapter.effectConstraints);

  const questionIds = new Set();
  const optionIds = new Set();
  for (const question of adapter.questions) {
    if (!question.id || questionIds.has(question.id)) {
      fail(`Question IDs must be present and unique: ${question.id}`);
    }
    questionIds.add(question.id);
    if (!Array.isArray(question.options) || question.options.length === 0) {
      fail(`Question ${question.id} has no options`);
    }
    for (const option of question.options) {
      if (!option.id || optionIds.has(option.id)) {
        fail(`Option IDs must be present and globally unique: ${option.id}`);
      }
      optionIds.add(option.id);
      if (!option.effects || typeof option.effects !== "object") {
        fail(`Option ${option.id} must have an effects object`);
      }
      for (const [dimension, delta] of Object.entries(option.effects)) {
        if (!(dimension in adapter.initialState)) {
          fail(`Option ${option.id} uses unknown state dimension ${dimension}`);
        }
        if (!(dimension in adapter.dimensionDirections)) {
          fail(`Missing direction for dimension ${dimension}`);
        }
        if (!Number.isFinite(delta)) {
          fail(`Effect ${option.id}.${dimension} must be finite`);
        }
        if (
          adapter.effectConstraints &&
          !adapter.effectConstraints.allowedValues.includes(delta)
        ) {
          fail(`Effect ${option.id}.${dimension} uses disallowed value ${delta}`);
        }
      }
      if (adapter.effectConstraints) {
        const totalAbsoluteChange = Object.values(option.effects).reduce(
          (sum, delta) => sum + Math.abs(delta),
          0,
        );
        if (totalAbsoluteChange > adapter.effectConstraints.hardTotalAbsoluteChange) {
          fail(
            `Option ${option.id} total absolute change ${totalAbsoluteChange} exceeds hard cap ${adapter.effectConstraints.hardTotalAbsoluteChange}`,
          );
        }
      }
    }
  }

  for (const [dimension, value] of Object.entries(adapter.initialState)) {
    if (!Number.isFinite(value)) {
      fail(`Initial state ${dimension} must be finite`);
    }
    if (!["max", "min"].includes(adapter.dimensionDirections[dimension])) {
      fail(`Direction for ${dimension} must be max or min`);
    }
  }
  validateBalanceConfig(adapter.balanceConfig, questionIds);
  if (
    adapter.balanceConfig?.finalClassifier &&
    adapter.balanceConfig.finalClassifier.questionId !== adapter.questions.at(-1).id
  ) {
    fail("The final classifier question must be the last enumerated question");
  }
}

function normalizeEvaluationResult(value) {
  if (typeof value === "string" && value.length > 0) {
    return { endingId: value, outcomeId: value, ruleIds: [] };
  }
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail("Evaluators must return a non-empty ending ID or a result object");
  }
  const { endingId } = value;
  const outcomeId = value.outcomeId ?? endingId;
  const ruleIds = value.ruleIds ?? [];
  if (typeof endingId !== "string" || endingId.length === 0) {
    fail("Evaluation result endingId must be a non-empty string");
  }
  if (typeof outcomeId !== "string" || outcomeId.length === 0) {
    fail("Evaluation result outcomeId must be a non-empty string");
  }
  if (
    !Array.isArray(ruleIds) ||
    ruleIds.some((id) => typeof id !== "string" || id.length === 0) ||
    new Set(ruleIds).size !== ruleIds.length
  ) {
    fail("Evaluation result ruleIds must contain unique non-empty strings");
  }
  return { endingId, outcomeId, ruleIds };
}

function defaultApplyChoice(state, _question, option) {
  const next = { ...state };
  for (const [dimension, delta] of Object.entries(option.effects)) {
    next[dimension] += delta;
  }
  return next;
}

function validateState(state, initialState, context) {
  if (!state || typeof state !== "object" || Array.isArray(state)) {
    fail(`${context} returned an invalid state object`);
  }
  const required = Object.keys(initialState);
  const actual = Object.keys(state);
  const missing = required.filter((dimension) => !(dimension in state));
  const unexpected = actual.filter((dimension) => !(dimension in initialState));
  if (missing.length > 0 || unexpected.length > 0) {
    fail(
      `${context} returned a state with missing [${missing.join(", ")}] or unexpected [${unexpected.join(", ")}] dimensions`,
    );
  }
  for (const dimension of required) {
    if (!Number.isFinite(state[dimension])) {
      fail(`${context} returned non-finite state ${dimension}`);
    }
  }
}

function suffixWeight(questions, nextIndex) {
  return questions
    .slice(nextIndex)
    .reduce((product, question) => product * question.options.length, 1);
}

function addAggregate(aggregates, id, weight, pathIds, state) {
  const current = aggregates.get(id) ?? {
    trajectories: 0,
    weightedPaths: 0,
    examplePath: pathIds,
    exampleState: state,
  };
  current.trajectories += 1;
  current.weightedPaths += weight;
  aggregates.set(id, current);
}

function addOutcome(enumeration, result, weight, pathIds, state) {
  addAggregate(enumeration.outcomes, result.outcomeId, weight, pathIds, state);
  addAggregate(enumeration.baseEndings, result.endingId, weight, pathIds, state);
  for (const ruleId of result.ruleIds) {
    addAggregate(enumeration.rules, ruleId, weight, pathIds, state);
    enumeration.selectedRuleIds.add(ruleId);
  }
}

function recordApplicableRules(adapter, result, context, enumeration) {
  if (!adapter.evaluateApplicableRuleIds) return;
  const applicable = adapter.evaluateApplicableRuleIds(context);
  if (
    !Array.isArray(applicable) ||
    applicable.some((id) => typeof id !== "string" || id.length === 0) ||
    new Set(applicable).size !== applicable.length
  ) {
    fail("evaluateApplicableRuleIds must return unique non-empty rule IDs");
  }
  for (const ruleId of applicable) enumeration.applicableRuleIds.add(ruleId);
  if (!result && applicable.length > 0) {
    fail("Applicable terminal rules were reported but the evaluator returned no outcome");
  }
  if (result) {
    for (const ruleId of result.ruleIds) {
      if (!applicable.includes(ruleId)) {
        fail(`Selected rule ${ruleId} was not reported as applicable`);
      }
    }
    for (const ruleId of applicable) {
      if (!result.ruleIds.includes(ruleId)) enumeration.shadowedRuleIds.add(ruleId);
    }
  }
}

function enumerate(adapter) {
  const applyChoice = adapter.applyChoice ?? defaultApplyChoice;
  const stageGateByQuestion = new Map(
    (adapter.balanceConfig?.stageGates ?? []).map((gate) => [gate.questionId, gate]),
  );
  const finalOutcomeIds = new Set(
    adapter.balanceConfig?.finalClassifier?.outcomeIds ?? [],
  );
  const enumeration = {
    outcomes: new Map(),
    baseEndings: new Map(),
    rules: new Map(),
    selectedRuleIds: new Set(),
    applicableRuleIds: new Set(),
    shadowedRuleIds: new Set(),
    terminalTrajectories: 0,
    earlyTerminalTrajectories: 0,
    stageGates: new Map(
      (adapter.balanceConfig?.stageGates ?? []).map((gate) => [
        gate.questionId,
        {
          eligibleTrajectories: 0,
          failureTrajectories: 0,
          eligibleWeightedPaths: 0,
          failureWeightedPaths: 0,
        },
      ]),
    ),
    finalClassifierOutcomes: new Map(),
  };

  function visit(questionIndex, state, chosen) {
    const question = adapter.questions[questionIndex];
    for (const option of question.options) {
      const nextState = applyChoice({ ...state }, question, option);
      validateState(nextState, adapter.initialState, `applyChoice for ${option.id}`);
      const nextPath = [
        ...chosen,
        {
          questionId: question.id,
          optionId: option.id,
          strategy: option.strategy ?? null,
        },
      ];
      const evaluationContext = {
        state: { ...nextState },
        question,
        questionIndex,
        option,
        path: nextPath,
        phase: "afterChoice",
      };
      const rawEarlyEnding = adapter.evaluateAfterChoice(evaluationContext);
      const earlyEnding = rawEarlyEnding == null
        ? null
        : normalizeEvaluationResult(rawEarlyEnding);
      recordApplicableRules(adapter, earlyEnding, evaluationContext, enumeration);
      const branchWeight = suffixWeight(adapter.questions, questionIndex + 1);
      const stageGate = stageGateByQuestion.get(question.id);
      if (stageGate) {
        const isGateFailure = earlyEnding?.endingId === stageGate.endingId;
        if (!earlyEnding || isGateFailure) {
          const gateStats = enumeration.stageGates.get(question.id);
          gateStats.eligibleTrajectories += 1;
          gateStats.eligibleWeightedPaths += branchWeight;
          if (isGateFailure) {
            gateStats.failureTrajectories += 1;
            gateStats.failureWeightedPaths += branchWeight;
          }
        }
      }
      if (earlyEnding) {
        enumeration.terminalTrajectories += 1;
        if (questionIndex < adapter.questions.length - 1) {
          enumeration.earlyTerminalTrajectories += 1;
        }
        addOutcome(
          enumeration,
          earlyEnding,
          branchWeight,
          nextPath.map((step) => step.optionId),
          nextState,
        );
      } else if (questionIndex === adapter.questions.length - 1) {
        const finalContext = {
          state: { ...nextState },
          path: nextPath,
          phase: "final",
        };
        const finalEnding = normalizeEvaluationResult(
          adapter.evaluateFinal(finalContext),
        );
        recordApplicableRules(adapter, finalEnding, finalContext, enumeration);
        enumeration.terminalTrajectories += 1;
        addOutcome(
          enumeration,
          finalEnding,
          1,
          nextPath.map((step) => step.optionId),
          nextState,
        );
        if (finalOutcomeIds.has(finalEnding.outcomeId)) {
          addAggregate(
            enumeration.finalClassifierOutcomes,
            finalEnding.outcomeId,
            1,
            nextPath.map((step) => step.optionId),
            nextState,
          );
        }
      } else {
        visit(questionIndex + 1, nextState, nextPath);
      }
    }
  }

  visit(0, { ...adapter.initialState }, []);
  return enumeration;
}

function simulatePolicy(adapter, pickOption) {
  const applyChoice = adapter.applyChoice ?? defaultApplyChoice;
  let state = { ...adapter.initialState };
  const chosen = [];

  for (
    let questionIndex = 0;
    questionIndex < adapter.questions.length;
    questionIndex += 1
  ) {
    const question = adapter.questions[questionIndex];
    const option = pickOption(question, questionIndex);
    if (!option) {
      return { applicable: false, missingAt: question.id };
    }
    state = applyChoice({ ...state }, question, option);
    validateState(state, adapter.initialState, `applyChoice for ${option.id}`);
    chosen.push({
      questionId: question.id,
      optionId: option.id,
      strategy: option.strategy ?? null,
    });
    const rawEnding = adapter.evaluateAfterChoice({
      state: { ...state },
      question,
      questionIndex,
      option,
      path: chosen,
      phase: "afterChoice",
    });
    if (rawEnding != null) {
      const ending = normalizeEvaluationResult(rawEnding);
      return {
        applicable: true,
        ending: ending.outcomeId,
        baseEnding: ending.endingId,
        ruleIds: ending.ruleIds,
        path: chosen.map((step) => step.optionId),
        state,
      };
    }
  }

  const finalEnding = normalizeEvaluationResult(
    adapter.evaluateFinal({
      state: { ...state },
      path: chosen,
      phase: "final",
    }),
  );
  return {
    applicable: true,
    ending: finalEnding.outcomeId,
    baseEnding: finalEnding.endingId,
    ruleIds: finalEnding.ruleIds,
    path: chosen.map((step) => step.optionId),
    state,
  };
}

function fixedPositionRuns(adapter) {
  const maxOptions = Math.max(
    ...adapter.questions.map((question) => question.options.length),
  );
  return Array.from({ length: maxOptions }, (_, position) => ({
    position: position + 1,
    ...simulatePolicy(adapter, (question) => question.options[position]),
  }));
}

function fixedStrategyRuns(adapter) {
  const strategies = [
    ...new Set(
      adapter.questions.flatMap((question) =>
        question.options
          .map((option) => option.strategy)
          .filter(Boolean),
      ),
    ),
  ].sort();
  return strategies.map((strategy) => ({
    strategy,
    ...simulatePolicy(adapter, (question) =>
      question.options.find((option) => option.strategy === strategy),
    ),
  }));
}

function compareEffects(a, b, initialState, directions) {
  let strictlyBetter = false;
  for (const dimension of Object.keys(initialState)) {
    const aValue = a.effects[dimension] ?? 0;
    const bValue = b.effects[dimension] ?? 0;
    const relation =
      directions[dimension] === "max" ? aValue - bValue : bValue - aValue;
    if (relation < 0) return false;
    if (relation > 0) strictlyBetter = true;
  }
  return strictlyBetter;
}

function localDominance(adapter) {
  const warnings = [];
  for (const question of adapter.questions) {
    for (const candidate of question.options) {
      for (const other of question.options) {
        if (
          candidate.id !== other.id &&
          compareEffects(
            candidate,
            other,
            adapter.initialState,
            adapter.dimensionDirections,
          )
        ) {
          warnings.push({
            questionId: question.id,
            dominantOption: candidate.id,
            dominatedOption: other.id,
          });
        }
      }
    }
  }
  return warnings;
}

function globalStrategyDominance(adapter) {
  const strategies = [
    ...new Set(
      adapter.questions.flatMap((question) =>
        question.options.map((option) => option.strategy).filter(Boolean),
      ),
    ),
  ];
  const warnings = [];
  for (const dominantStrategy of strategies) {
    for (const dominatedStrategy of strategies) {
      if (dominantStrategy === dominatedStrategy) continue;
      const dominatesEveryQuestion = adapter.questions.every((question) => {
        const dominant = question.options.find(
          (option) => option.strategy === dominantStrategy,
        );
        const dominated = question.options.find(
          (option) => option.strategy === dominatedStrategy,
        );
        return (
          dominant &&
          dominated &&
          compareEffects(
            dominant,
            dominated,
            adapter.initialState,
            adapter.dimensionDirections,
          )
        );
      });
      if (dominatesEveryQuestion) {
        warnings.push({ dominantStrategy, dominatedStrategy });
      }
    }
  }
  return warnings;
}

function effectBudgetWarnings(adapter) {
  if (!adapter.effectConstraints) return [];
  const warnings = [];
  const constraints = adapter.effectConstraints;
  for (const question of adapter.questions) {
    for (const option of question.options) {
      const magnitudes = Object.values(option.effects).map(Math.abs);
      const totalAbsoluteChange = magnitudes.reduce((sum, value) => sum + value, 0);
      const highMagnitudeDimensions = magnitudes.filter(
        (value) => value >= constraints.highMagnitudeAtOrAbove,
      ).length;
      if (totalAbsoluteChange > constraints.recommendedTotalAbsoluteChange) {
        warnings.push({
          type: "total_absolute_change",
          questionId: question.id,
          optionId: option.id,
          actual: totalAbsoluteChange,
          recommendedMaximum: constraints.recommendedTotalAbsoluteChange,
        });
      }
      if (
        highMagnitudeDimensions >
        constraints.recommendedMaxHighMagnitudeDimensions
      ) {
        warnings.push({
          type: "high_magnitude_dimensions",
          questionId: question.id,
          optionId: option.id,
          actual: highMagnitudeDimensions,
          recommendedMaximum: constraints.recommendedMaxHighMagnitudeDimensions,
        });
      }
    }
  }
  return warnings;
}

function sortedObject(map) {
  return Object.fromEntries(
    [...map.entries()].sort(([a], [b]) => a.localeCompare(b)),
  );
}

function coverageSection(expected, observed) {
  const observedIds = [...observed].sort();
  if (expected === undefined) {
    return {
      declared: false,
      expected: [],
      observed: observedIds,
      missing: [],
      unexpected: [],
    };
  }
  const expectedIds = [...expected].sort();
  const expectedSet = new Set(expectedIds);
  const observedSet = new Set(observedIds);
  return {
    declared: true,
    expected: expectedIds,
    observed: observedIds,
    missing: expectedIds.filter((id) => !observedSet.has(id)),
    unexpected: observedIds.filter((id) => !expectedSet.has(id)),
  };
}

function percentageObject(aggregates, total, field) {
  if (total <= 0) fail(`Cannot calculate ${field} percentages with total ${total}`);
  return Object.fromEntries(
    Object.entries(aggregates).map(([id, data]) => [
      id,
      Number(((data[field] / total) * 100).toFixed(3)),
    ]),
  );
}

function percentage(numerator, denominator) {
  return denominator > 0
    ? Number(((numerator / denominator) * 100).toFixed(3))
    : null;
}

function rangeStatus(value, recommendedRange, options = {}) {
  if (value === null) return "no_denominator";
  if (options.requireReachable && value === 0) return "unreachable";
  if (options.hardMaximum !== undefined && value > options.hardMaximum) {
    return "above_hard_maximum";
  }
  if (options.minimum !== undefined && value < options.minimum) {
    return "below_minimum";
  }
  if (options.anomalyAbove !== undefined && value > options.anomalyAbove) {
    return "anomalous_high";
  }
  if (options.warningAbove !== undefined && value > options.warningAbove) {
    return "above_preferred_maximum";
  }
  if (value < recommendedRange[0]) return "below_recommended";
  if (value > recommendedRange[1]) return "above_recommended";
  return "within_recommended";
}

function buildBalanceReport(adapter, enumeration, completeChoiceSpace, baseEndings) {
  const config = adapter.balanceConfig;
  if (!config) return { configured: false };
  const report = { configured: true };

  if (config.globalDanger) {
    const byEnding = {};
    let combinedWeightedPaths = 0;
    let combinedTrajectories = 0;
    for (const endingId of config.globalDanger.endingIds) {
      const data = baseEndings[endingId] ?? { trajectories: 0, weightedPaths: 0 };
      const weightedPercentage = percentage(data.weightedPaths, completeChoiceSpace);
      combinedWeightedPaths += data.weightedPaths;
      combinedTrajectories += data.trajectories;
      byEnding[endingId] = {
        trajectories: data.trajectories,
        weightedPaths: data.weightedPaths,
        weightedPercentage,
        reachable: data.weightedPaths > 0,
        status: rangeStatus(
          weightedPercentage,
          config.globalDanger.recommendedEachRanges?.[endingId] ??
            config.globalDanger.recommendedEachRange,
          {
            hardMaximum: config.globalDanger.hardEachMaximum,
            requireReachable: true,
          },
        ),
      };
    }
    const combinedWeightedPercentage = percentage(
      combinedWeightedPaths,
      completeChoiceSpace,
    );
    report.globalDanger = {
      byEnding,
      combined: {
        trajectories: combinedTrajectories,
        weightedPaths: combinedWeightedPaths,
        weightedPercentage: combinedWeightedPercentage,
        status: rangeStatus(
          combinedWeightedPercentage,
          config.globalDanger.recommendedCombinedRange,
          { hardMaximum: config.globalDanger.hardCombinedMaximum },
        ),
      },
    };
  }

  if (config.stageGates) {
    report.stageGates = config.stageGates.map((gate) => {
      const data = enumeration.stageGates.get(gate.questionId);
      const weightedConditionalFailurePercentage = percentage(
        data.failureWeightedPaths,
        data.eligibleWeightedPaths,
      );
      return {
        questionId: gate.questionId,
        endingId: gate.endingId,
        eligibleTrajectoryPrefixes: data.eligibleTrajectories,
        failureTrajectoryPrefixes: data.failureTrajectories,
        trajectoryPrefixFailurePercentage: percentage(
          data.failureTrajectories,
          data.eligibleTrajectories,
        ),
        eligibleWeightedPaths: data.eligibleWeightedPaths,
        failureWeightedPaths: data.failureWeightedPaths,
        weightedConditionalFailurePercentage,
        status: rangeStatus(
          weightedConditionalFailurePercentage,
          gate.recommendedRange,
          { anomalyAbove: gate.anomalyAbove },
        ),
      };
    });
  }

  if (config.finalClassifier) {
    const outcomes = sortedObject(enumeration.finalClassifierOutcomes);
    const reachedWeightedPaths = Object.values(outcomes).reduce(
      (sum, outcome) => sum + outcome.weightedPaths,
      0,
    );
    const reachedTrajectories = Object.values(outcomes).reduce(
      (sum, outcome) => sum + outcome.trajectories,
      0,
    );
    const byOutcome = {};
    for (const outcomeId of config.finalClassifier.outcomeIds) {
      const data = outcomes[outcomeId] ?? { trajectories: 0, weightedPaths: 0 };
      const weightedConditionalPercentage = percentage(
        data.weightedPaths,
        reachedWeightedPaths,
      );
      byOutcome[outcomeId] = {
        trajectories: data.trajectories,
        weightedPaths: data.weightedPaths,
        weightedConditionalPercentage,
        trajectoryConditionalPercentage: percentage(
          data.trajectories,
          reachedTrajectories,
        ),
        reachable: data.weightedPaths > 0,
        examplePath: data.examplePath ?? null,
        exampleState: data.exampleState ?? null,
        status: config.finalClassifier.outcomeGroups
          ? (data.weightedPaths > 0 ? "reported_only" : "unreachable")
          : rangeStatus(
              weightedConditionalPercentage,
              config.finalClassifier.recommendedOutcomeConditionalRange,
              {
                minimum:
                  config.finalClassifier.minimumOutcomeConditionalPercentage,
                anomalyAbove:
                  config.finalClassifier.maximumOutcomeConditionalPercentage,
                warningAbove:
                  config.finalClassifier.warningOutcomeConditionalPercentage,
                requireReachable: true,
              },
            ),
      };
    }
    const byGroup = config.finalClassifier.outcomeGroups
      ? Object.fromEntries(Object.entries(config.finalClassifier.outcomeGroups).map(([groupId, group]) => {
          const weightedPaths = group.outcomeIds.reduce((sum, outcomeId) => sum + (outcomes[outcomeId]?.weightedPaths ?? 0), 0);
          const trajectories = group.outcomeIds.reduce((sum, outcomeId) => sum + (outcomes[outcomeId]?.trajectories ?? 0), 0);
          const weightedConditionalPercentage = percentage(weightedPaths, reachedWeightedPaths);
          return [groupId, {
            outcomeIds: group.outcomeIds,
            trajectories,
            weightedPaths,
            weightedConditionalPercentage,
            trajectoryConditionalPercentage: percentage(trajectories, reachedTrajectories),
            status: rangeStatus(weightedConditionalPercentage, group.recommendedRange, { requireReachable: true }),
          }];
        }))
      : undefined;
    const weightedReachPercentage = percentage(
      reachedWeightedPaths,
      completeChoiceSpace,
    );
    report.finalClassifier = {
      questionId: config.finalClassifier.questionId,
      reachedTrajectories,
      reachedWeightedPaths,
      weightedReachPercentage,
      reachStatus: rangeStatus(
        weightedReachPercentage,
        config.finalClassifier.recommendedReachRange,
      ),
      byOutcome,
      ...(byGroup ? { byGroup } : {}),
    };
  }

  return report;
}

function serialiseReport(adapter, enumeration) {
  const completeChoiceSpace = adapter.questions.reduce(
    (product, question) => product * question.options.length,
    1,
  );
  const endings = sortedObject(enumeration.outcomes);
  const baseEndings = sortedObject(enumeration.baseEndings);
  const rules = sortedObject(enumeration.rules);
  const weightedTotal = Object.values(endings).reduce(
    (sum, ending) => sum + ending.weightedPaths,
    0,
  );
  const terminalTrajectoryTotal = Object.values(endings).reduce(
    (sum, ending) => sum + ending.trajectories,
    0,
  );
  if (terminalTrajectoryTotal !== enumeration.terminalTrajectories) {
    fail(
      `Aggregated terminal trajectories ${terminalTrajectoryTotal} do not match enumeration total ${enumeration.terminalTrajectories}`,
    );
  }
  if (weightedTotal !== completeChoiceSpace) {
    fail(
      `Weighted total ${weightedTotal} does not match choice space ${completeChoiceSpace}`,
    );
  }
  const coverage = {
    declared:
      adapter.expectedEndingIds !== undefined ||
      adapter.expectedOutcomeIds !== undefined ||
      adapter.expectedRuleIds !== undefined,
    endings: coverageSection(
      adapter.expectedEndingIds,
      enumeration.baseEndings.keys(),
    ),
    outcomes: coverageSection(
      adapter.expectedOutcomeIds,
      enumeration.outcomes.keys(),
    ),
    rules: coverageSection(
      adapter.expectedRuleIds,
      enumeration.selectedRuleIds,
    ),
    ruleDiagnostics: {
      shadowingStatus: adapter.evaluateApplicableRuleIds
        ? "measured"
        : "unknown",
      applicable: [...enumeration.applicableRuleIds].sort(),
      selected: [...enumeration.selectedRuleIds].sort(),
      shadowed: [...enumeration.shadowedRuleIds].sort(),
    },
  };
  return {
    questionCount: adapter.questions.length,
    optionCounts: adapter.questions.map(
      (question) => question.options.length,
    ),
    completeChoiceSpace,
    terminalTrajectories: enumeration.terminalTrajectories,
    earlyTerminalTrajectories: enumeration.earlyTerminalTrajectories,
    weightedTotal,
    endings,
    baseEndings,
    outcomes: endings,
    rules,
    trajectoryPercentages: percentageObject(
      endings,
      terminalTrajectoryTotal,
      "trajectories",
    ),
    weightedPathPercentages: percentageObject(
      endings,
      completeChoiceSpace,
      "weightedPaths",
    ),
    baseEndingTrajectoryPercentages: percentageObject(
      baseEndings,
      terminalTrajectoryTotal,
      "trajectories",
    ),
    baseEndingWeightedPathPercentages: percentageObject(
      baseEndings,
      completeChoiceSpace,
      "weightedPaths",
    ),
    coverage,
    fixedPositions: fixedPositionRuns(adapter),
    fixedStrategies: fixedStrategyRuns(adapter),
    localDominance: localDominance(adapter),
    globalStrategyDominance: globalStrategyDominance(adapter),
    effectBudgetWarnings: effectBudgetWarnings(adapter),
    balance: buildBalanceReport(
      adapter,
      enumeration,
      completeChoiceSpace,
      baseEndings,
    ),
  };
}

function printHuman(report) {
  console.log(`Questions: ${report.questionCount}`);
  console.log(`Option counts: ${report.optionCounts.join(" x ")}`);
  console.log(`Complete choice-space weight: ${report.completeChoiceSpace}`);
  console.log(
    `Terminal trajectories: ${report.terminalTrajectories} (${report.earlyTerminalTrajectories} early)`,
  );
  console.log("\nEndings:");
  for (const [endingId, data] of Object.entries(report.endings)) {
    const trajectoryPercent = report.trajectoryPercentages[endingId].toFixed(2);
    const weightedPercent = report.weightedPathPercentages[endingId].toFixed(2);
    console.log(
      `- ${endingId}: ${data.trajectories} trajectories (${trajectoryPercent}% leaf share), ${data.weightedPaths} weighted paths (${weightedPercent}% choice-space share), example ${data.examplePath.join(" > ")}`,
    );
  }
  if (report.balance.configured) {
    console.log("\nBalance acceptance diagnostics (weighted equal-choice model):");
    if (report.balance.globalDanger) {
      for (const [endingId, data] of Object.entries(
        report.balance.globalDanger.byEnding,
      )) {
        console.log(
          `- global ${endingId}: ${data.weightedPercentage.toFixed(2)}% (${data.status})`,
        );
      }
      const combined = report.balance.globalDanger.combined;
      console.log(
        `- global combined: ${combined.weightedPercentage.toFixed(2)}% (${combined.status})`,
      );
    }
    for (const gate of report.balance.stageGates ?? []) {
      const value = gate.weightedConditionalFailurePercentage;
      console.log(
        `- ${gate.questionId} ${gate.endingId}: ${value === null ? "n/a" : `${value.toFixed(2)}%`} of ${gate.eligibleWeightedPaths} eligible weighted paths (${gate.status})`,
      );
    }
    if (report.balance.finalClassifier) {
      const final = report.balance.finalClassifier;
      console.log(
        `- ${final.questionId} final-classifier reach: ${final.weightedReachPercentage.toFixed(2)}% (${final.reachStatus})`,
      );
      for (const [outcomeId, data] of Object.entries(final.byOutcome)) {
        const value = data.weightedConditionalPercentage;
        console.log(
          `- final ${outcomeId}: ${value === null ? "n/a" : `${value.toFixed(2)}%`} of classified paths (${data.status})`,
        );
      }
      for (const [groupId, data] of Object.entries(final.byGroup ?? {})) {
        const value = data.weightedConditionalPercentage;
        console.log(
          `- final group ${groupId}: ${value === null ? "n/a" : `${value.toFixed(2)}%`} of classified paths (${data.status})`,
        );
      }
    }
  }
  console.log("\nDeclared coverage:");
  for (const key of ["endings", "outcomes", "rules"]) {
    const section = report.coverage[key];
    if (!section.declared) {
      console.log(`- ${key}: not declared`);
      continue;
    }
    console.log(
      `- ${key}: ${section.observed.length}/${section.expected.length} observed; missing ${section.missing.join(", ") || "none"}; unexpected ${section.unexpected.join(", ") || "none"}`,
    );
  }
  console.log(
    `- rule shadowing: ${report.coverage.ruleDiagnostics.shadowingStatus}${
      report.coverage.ruleDiagnostics.shadowed.length > 0
        ? ` (${report.coverage.ruleDiagnostics.shadowed.join(", ")})`
        : ""
    }`,
  );
  console.log("\nFixed positions:");
  for (const run of report.fixedPositions) {
    console.log(
      `- position ${run.position}: ${run.applicable ? run.ending : `not applicable at ${run.missingAt}`}`,
    );
  }
  console.log("\nFixed strategies:");
  if (report.fixedStrategies.length === 0) {
    console.log("- no strategy tags");
  }
  for (const run of report.fixedStrategies) {
    console.log(
      `- ${run.strategy}: ${run.applicable ? run.ending : `not applicable at ${run.missingAt}`}`,
    );
  }
  console.log("\nLocal effect dominance warnings:");
  if (report.localDominance.length === 0) {
    console.log("- none");
  }
  for (const warning of report.localDominance) {
    console.log(
      `- ${warning.questionId}: ${warning.dominantOption} dominates ${warning.dominatedOption}`,
    );
  }
  console.log("\nGlobal raw-effect strategy dominance warnings:");
  if (report.globalStrategyDominance.length === 0) {
    console.log("- none");
  }
  for (const warning of report.globalStrategyDominance) {
    console.log(
      `- ${warning.dominantStrategy} dominates ${warning.dominatedStrategy} in every question`,
    );
  }
  console.log("\nEffect budget warnings:");
  if (report.effectBudgetWarnings.length === 0) {
    console.log("- none");
  }
  for (const warning of report.effectBudgetWarnings) {
    console.log(
      `- ${warning.questionId}/${warning.optionId}: ${warning.type} ${warning.actual} > ${warning.recommendedMaximum}`,
    );
  }
}

const { adapterPath, json } = parseArgs(process.argv.slice(2));
const resolvedAdapter = path.resolve(process.cwd(), adapterPath);
const adapter = await import(pathToFileURL(resolvedAdapter).href);
validateAdapter(adapter);
const report = serialiseReport(adapter, enumerate(adapter));
if (json) {
  console.log(JSON.stringify(report, null, 2));
} else {
  printHuman(report);
}
