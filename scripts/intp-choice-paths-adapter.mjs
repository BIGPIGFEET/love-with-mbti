import { intpQuestions } from "../src/content/intp-questions.ts";
import {
  ALLOWED_EFFECT_VALUES,
  ENDING_IDS,
  RELATIONSHIP_EVALUATION_IDS,
} from "../src/content/schema.ts";
import {
  INITIAL_STATE,
  applyEffects,
  resolveEnding,
} from "../src/game/rules.ts";

export const initialState = { ...INITIAL_STATE };

export const dimensionDirections = {
  attraction: "max",
  trust: "max",
  comfort: "max",
  conflict: "min",
};

export const questions = intpQuestions;

export const expectedEndingIds = [...ENDING_IDS];

export const expectedOutcomeIds = [
  ...ENDING_IDS.filter((id) => id !== "confirmed_relationship"),
  ...RELATIONSHIP_EVALUATION_IDS.map(
    (evaluationId) => `confirmed_relationship:${evaluationId}`,
  ),
];

export const effectConstraints = {
  allowedValues: [...ALLOWED_EFFECT_VALUES],
  hardTotalAbsoluteChange: 60,
  recommendedTotalAbsoluteChange: 40,
  highMagnitudeAtOrAbove: 15,
  recommendedMaxHighMagnitudeDimensions: 2,
};

export const balanceConfig = {
  globalDanger: {
    endingIds: ["conflict_break", "strong_discomfort", "trust_broken"],
    recommendedEachRange: [3, 8],
    hardEachMaximum: 10,
    recommendedCombinedRange: [12, 18],
    hardCombinedMaximum: 20,
  },
  stageGates: [
    { questionId: "Q02", endingId: "no_second_meeting", recommendedRange: [5, 15] },
    { questionId: "Q05", endingId: "fade_out", recommendedRange: [10, 20], anomalyAbove: 25 },
    { questionId: "Q08", endingId: "stay_acquaintances", recommendedRange: [10, 20], anomalyAbove: 25 },
  ],
  finalClassifier: {
    questionId: "Q10",
    outcomeIds: [
      "strangers_after_all",
      "confirmed_relationship:romance_stable",
      "confirmed_relationship:romance_hidden_risk",
      "dangerous_lovers",
      "friends",
      "unresolved_ambiguity",
    ],
    recommendedReachRange: [35, 55],
    minimumOutcomeConditionalPercentage: 5,
    recommendedOutcomeConditionalRange: [10, 25],
    warningOutcomeConditionalPercentage: 40,
    maximumOutcomeConditionalPercentage: 45,
  },
};

export function applyChoice(state, _question, option) {
  return applyEffects(state, option.effects);
}

function toAnalyzerResult(result) {
  if (!result) return null;
  return {
    endingId: result.endingId,
    outcomeId: result.evaluationId
      ? `${result.endingId}:${result.evaluationId}`
      : result.endingId,
  };
}

export function evaluateAfterChoice({ state, question }) {
  if (question.order === 10) return null;
  return toAnalyzerResult(resolveEnding(question.order, state));
}

export function evaluateFinal({ state }) {
  const question = questions.at(-1);
  const result = resolveEnding(question.order, state);
  if (!result) throw new Error("Production rules did not return a Q10 ending");
  return toAnalyzerResult(result);
}
