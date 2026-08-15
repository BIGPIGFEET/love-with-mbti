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
    recommendedEachRanges: {
      conflict_break: [3, 5],
      strong_discomfort: [4, 6],
      trust_broken: [4, 6],
    },
    hardEachMaximum: 10,
    recommendedCombinedRange: [11, 17],
    hardCombinedMaximum: 20,
  },
  stageGates: [
    {
      questionId: "Q02",
      endingId: "no_second_meeting",
      recommendedRange: [20, 25],
      anomalyAbove: 30,
    },
    {
      questionId: "Q05",
      endingId: "fade_out",
      recommendedRange: [30, 38],
      anomalyAbove: 45,
    },
    {
      questionId: "Q08",
      endingId: "stay_acquaintances",
      recommendedRange: [35, 45],
      anomalyAbove: 55,
    },
  ],
  finalClassifier: {
    questionId: "Q10",
    outcomeIds: finalOutcomeIds,
    recommendedReachRange: [20, 30],
    outcomeGroups: {
      strangers_after_all: {
        outcomeIds: ["strangers_after_all"],
        recommendedRange: [15, 20],
      },
      confirmed_relationship: {
        outcomeIds: [
          "confirmed_relationship:romance_stable",
          "confirmed_relationship:romance_hidden_risk",
        ],
        recommendedRange: [10, 15],
      },
      dangerous_lovers: {
        outcomeIds: ["dangerous_lovers"],
        recommendedRange: [5, 10],
      },
      friends: {
        outcomeIds: ["friends"],
        recommendedRange: [18, 25],
      },
      unresolved_ambiguity: {
        outcomeIds: ["unresolved_ambiguity"],
        recommendedRange: [35, 45],
      },
    },
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
