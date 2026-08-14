import {
  ALLOWED_EFFECT_VALUES,
  ENDING_IDS,
  RELATIONSHIP_EVALUATION_IDS,
} from "../../../../src/content/schema.ts";

const GLOBAL_DANGER_ENDING_IDS = [
  "conflict_break",
  "strong_discomfort",
  "trust_broken",
];

const STAGE_GATE_ENDING_IDS = [
  "no_second_meeting",
  "fade_out",
  "stay_acquaintances",
];

export const expectedEndingIds = [...ENDING_IDS];

export const expectedOutcomeIds = [
  ...ENDING_IDS.filter((id) => id !== "confirmed_relationship"),
  ...RELATIONSHIP_EVALUATION_IDS.map(
    (evaluationId) => `confirmed_relationship:${evaluationId}`,
  ),
];

const finalOutcomeIds = expectedOutcomeIds.filter(
  (id) =>
    !GLOBAL_DANGER_ENDING_IDS.includes(id) &&
    !STAGE_GATE_ENDING_IDS.includes(id),
);

export const effectConstraints = {
  allowedValues: [...ALLOWED_EFFECT_VALUES],
  hardTotalAbsoluteChange: 60,
  recommendedTotalAbsoluteChange: 40,
  highMagnitudeAtOrAbove: 15,
  recommendedMaxHighMagnitudeDimensions: 2,
};

export const balanceConfig = {
  globalDanger: {
    endingIds: GLOBAL_DANGER_ENDING_IDS,
    recommendedEachRange: [3, 8],
    hardEachMaximum: 10,
    recommendedCombinedRange: [12, 18],
    hardCombinedMaximum: 20,
  },
  stageGates: [
    {
      questionId: "Q02",
      endingId: "no_second_meeting",
      recommendedRange: [5, 15],
    },
    {
      questionId: "Q05",
      endingId: "fade_out",
      recommendedRange: [10, 20],
      anomalyAbove: 25,
    },
    {
      questionId: "Q08",
      endingId: "stay_acquaintances",
      recommendedRange: [10, 20],
      anomalyAbove: 25,
    },
  ],
  finalClassifier: {
    questionId: "Q10",
    outcomeIds: finalOutcomeIds,
    recommendedReachRange: [35, 55],
    minimumOutcomeConditionalPercentage: 5,
    recommendedOutcomeConditionalRange: [10, 25],
    warningOutcomeConditionalPercentage: 40,
    maximumOutcomeConditionalPercentage: 45,
  },
};

export function toAnalyzerResult(result) {
  if (!result) return null;
  return {
    endingId: result.endingId,
    outcomeId: result.evaluationId
      ? `${result.endingId}:${result.evaluationId}`
      : result.endingId,
  };
}
