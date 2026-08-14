export const initialState = { bond: 0, conflict: 0 };

export const dimensionDirections = { bond: "max", conflict: "min" };

export const effectConstraints = {
  allowedValues: [-1, 0, 1, 2],
  hardTotalAbsoluteChange: 4,
  recommendedTotalAbsoluteChange: 2,
  highMagnitudeAtOrAbove: 2,
  recommendedMaxHighMagnitudeDimensions: 1,
};

export const balanceConfig = {
  globalDanger: {
    endingIds: ["ending_break"],
    recommendedEachRange: [20, 80],
    hardEachMaximum: 90,
    recommendedCombinedRange: [20, 80],
    hardCombinedMaximum: 90,
  },
  stageGates: [
    {
      questionId: "q1",
      endingId: "ending_gate",
      recommendedRange: [40, 60],
    },
  ],
  finalClassifier: {
    questionId: "q2",
    outcomeIds: ["ending_close", "ending_never"],
    recommendedReachRange: [10, 80],
    minimumOutcomeConditionalPercentage: 5,
    recommendedOutcomeConditionalRange: [10, 80],
    warningOutcomeConditionalPercentage: 90,
    maximumOutcomeConditionalPercentage: 95,
  },
};

export const expectedEndingIds = [
  "ending_break",
  "ending_close",
  "ending_gate",
  "ending_never",
];

export const expectedOutcomeIds = [
  "ending_break:hard",
  "ending_close",
  "ending_gate",
  "ending_never",
];

export const expectedRuleIds = [
  "rule_break",
  "rule_close",
  "rule_gate",
  "rule_warning",
  "rule_never",
];

export const questions = [
  {
    id: "q1",
    options: [
      { id: "q1_safe", strategy: "steady", effects: { bond: 1 } },
      { id: "q1_distant", strategy: "withdraw", effects: { bond: 0 } },
      { id: "q1_risky", strategy: "risk", effects: { conflict: 2 } },
    ],
  },
  {
    id: "q2",
    options: [
      { id: "q2_repair", strategy: "steady", effects: { bond: 1, conflict: -1 } },
      { id: "q2_provoke", strategy: "risk", effects: { conflict: 2 } },
    ],
  },
];

export function evaluateAfterChoice({ state, question }) {
  if (state.conflict >= 2) {
    return {
      endingId: "ending_break",
      outcomeId: "ending_break:hard",
      ruleIds: ["rule_break"],
    };
  }
  if (question.id === "q1" && state.bond === 0) {
    return { endingId: "ending_gate", ruleIds: ["rule_gate"] };
  }
  return null;
}

export function evaluateFinal() {
  return {
    endingId: "ending_close",
    outcomeId: "ending_close",
    ruleIds: ["rule_close"],
  };
}

export function evaluateApplicableRuleIds({ phase, state }) {
  if (phase === "afterChoice" && state.conflict >= 2) {
    return ["rule_break", "rule_warning"];
  }
  if (phase === "afterChoice" && state.bond === 0) return ["rule_gate"];
  if (phase === "final") return ["rule_close"];
  return [];
}
