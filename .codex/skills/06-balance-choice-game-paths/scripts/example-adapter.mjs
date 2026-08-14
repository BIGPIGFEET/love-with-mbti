export const initialState = { bond: 0, conflict: 0 };

export const dimensionDirections = { bond: "max", conflict: "min" };

export const effectConstraints = {
  allowedValues: [-1, 0, 1, 2],
  hardTotalAbsoluteChange: 4,
  recommendedTotalAbsoluteChange: 2,
  highMagnitudeAtOrAbove: 2,
  recommendedMaxHighMagnitudeDimensions: 1,
};

export const questions = [
  {
    id: "q1",
    options: [
      {
        id: "q1_safe",
        strategy: "steady",
        effects: { bond: 1, conflict: 0 },
      },
      {
        id: "q1_risky",
        strategy: "risk",
        effects: { bond: 2, conflict: 2 },
      },
    ],
  },
  {
    id: "q2",
    options: [
      {
        id: "q2_repair",
        strategy: "steady",
        effects: { bond: 1, conflict: -1 },
      },
      {
        id: "q2_provoke",
        strategy: "risk",
        effects: { bond: 0, conflict: 2 },
      },
    ],
  },
];

export function evaluateAfterChoice({ state }) {
  return state.conflict >= 2 ? "ending_early" : null;
}

export function evaluateFinal({ path }) {
  return path.at(-1)?.optionId === "q2_repair"
    ? "ending_close"
    : "ending_distant";
}
