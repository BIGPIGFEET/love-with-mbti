import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import {
  ALLOWED_EFFECT_VALUES,
  ENDING_IDS,
  RELATIONSHIP_EVALUATION_IDS,
} from "../src/content/schema.ts";
import {
  applyEffects,
  INITIAL_STATE,
  resolveEnding,
} from "../src/game/rules.ts";

const questionPath = fileURLToPath(
  new URL("../content/questions/isfp-ten-question-draft.json", import.meta.url),
);
const questionDocument = JSON.parse(readFileSync(questionPath, "utf8"));

export const initialState = { ...INITIAL_STATE };

export const dimensionDirections = {
  attraction: "max",
  trust: "max",
  comfort: "max",
  conflict: "min",
};

export const questions = questionDocument;

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
    outcomeIds: [
      "strangers_after_all",
      "confirmed_relationship:romance_stable",
      "confirmed_relationship:romance_hidden_risk",
      "dangerous_lovers",
      "friends",
      "unresolved_ambiguity",
    ],
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
  if (question.order === questions.length) return null;
  return toAnalyzerResult(resolveEnding(question.order, state));
}

export function evaluateFinal({ state }) {
  const result = resolveEnding(questions.at(-1).order, state);
  if (!result) throw new Error("Production rules did not return a final result");
  return toAnalyzerResult(result);
}
