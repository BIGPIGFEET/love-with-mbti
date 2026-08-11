import { endings, fuzzyFeedback, relationshipEvaluations } from "../src/content/endings.ts";
import { questions } from "../src/content/questions.ts";
import { validateContent } from "../src/content/schema.ts";
import {
  applyEffects,
  endingResultKey,
  INITIAL_STATE,
  resolveEnding,
} from "../src/game/rules.ts";

validateContent({ questions, endings, relationshipEvaluations, fuzzyFeedback });

function dominates(first, second) {
  const a = first.effects;
  const b = second.effects;
  const noWorse =
    a.attraction >= b.attraction &&
    a.trust >= b.trust &&
    a.comfort >= b.comfort &&
    a.conflict <= b.conflict;
  const strictlyBetter =
    a.attraction > b.attraction ||
    a.trust > b.trust ||
    a.comfort > b.comfort ||
    a.conflict < b.conflict;
  return noWorse && strictlyBetter;
}

const locallyDominant = questions.flatMap((question) => {
  const dominant = question.options.filter((candidate) =>
    question.options.every((other) => candidate === other || dominates(candidate, other)),
  );
  return dominant.map((candidate) => ({
    question: question.id,
    option: candidate.id,
    strategy: candidate.strategy,
  }));
});

const endingCounts = new Map();
const weightedEndingCounts = new Map();
const endingExamples = new Map();
let completedTrajectories = 0;

function visit(questionIndex, state, choices) {
  const question = questions[questionIndex];
  for (let optionIndex = 0; optionIndex < question.options.length; optionIndex += 1) {
    const option = question.options[optionIndex];
    const nextState = applyEffects(state, option.effects);
    const nextChoices = [...choices, optionIndex];
    const result = resolveEnding(question.order, option, nextState);

    if (result) {
      const resultKey = endingResultKey(result);
      endingCounts.set(resultKey, (endingCounts.get(resultKey) ?? 0) + 1);
      const remainingQuestions = questions.length - questionIndex - 1;
      const rawPathWeight = 4 ** remainingQuestions;
      weightedEndingCounts.set(resultKey, (weightedEndingCounts.get(resultKey) ?? 0) + rawPathWeight);
      if (!endingExamples.has(resultKey)) {
        endingExamples.set(resultKey, {
          choices: nextChoices.map((index) => index + 1),
          state: nextState,
        });
      }
      completedTrajectories += 1;
      continue;
    }

    visit(questionIndex + 1, nextState, nextChoices);
  }
}

visit(0, { ...INITIAL_STATE }, []);

function simulateOptionIndexes(optionIndexes) {
  let state = { ...INITIAL_STATE };
  for (let questionIndex = 0; questionIndex < questions.length; questionIndex += 1) {
    const question = questions[questionIndex];
    const option = question.options[optionIndexes[questionIndex]];
    state = applyEffects(state, option.effects);
    const result = resolveEnding(question.order, option, state);
    if (result) {
      return {
        ending: endingResultKey(result),
        stoppedAfter: question.order,
        state,
      };
    }
  }
  throw new Error("A ten-question path must end after Q10.");
}

const samePositionResults = [0, 1, 2, 3].map((optionIndex) => ({
  position: optionIndex + 1,
  ...simulateOptionIndexes(Array(10).fill(optionIndex)),
}));

const negotiateIndexes = questions.map((question) =>
  question.options.findIndex((option) => option.strategy === "negotiate"),
);
const alwaysNegotiate = simulateOptionIndexes(negotiateIndexes);

const report = {
  questionCount: questions.length,
  rawFullChoiceSpace: 4 ** questions.length,
  actualTerminalTrajectories: completedTrajectories,
  locallyDominant,
  samePositionResults,
  alwaysNegotiate,
  endingCounts: Object.fromEntries([...endingCounts.entries()].sort()),
  weightedEndingCounts: Object.fromEntries([...weightedEndingCounts.entries()].sort()),
  weightedEndingPercentages: Object.fromEntries(
    [...weightedEndingCounts.entries()]
      .sort()
      .map(([ending, count]) => [ending, Number(((count / 4 ** questions.length) * 100).toFixed(3))]),
  ),
  endingExamples: Object.fromEntries([...endingExamples.entries()].sort()),
};

console.log(JSON.stringify(report, null, 2));
