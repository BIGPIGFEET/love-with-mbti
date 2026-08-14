# Analyzer adapter contract

Export the following values from an ECMAScript module (`.mjs` or ESM `.js`).

## Required exports

```js
export const initialState = { attraction: 0, trust: 0, comfort: 0, conflict: 0 };

export const dimensionDirections = {
  attraction: "max",
  trust: "max",
  comfort: "max",
  conflict: "min",
};

export const questions = [
  {
    id: "q01",
    options: [
      { id: "q01_a", strategy: "negotiate", effects: { trust: 1, conflict: -1 } },
    ],
  },
];

export function evaluateAfterChoice({ state, question, questionIndex, option, path }) {
  // Run production global-danger rules and any stage gate for this checkpoint.
  // Return a stable ending result for an early exit, otherwise null.
  return null;
}

export function evaluateFinal({ state, path }) {
  // Return exactly one stable final ending ID.
  return "ending_example";
}
```

Every question must have at least one option. IDs must be unique. Effects must be finite numbers, and each effect key must exist in `initialState` and `dimensionDirections`.

Options must not select endings directly. The adapter must call the production state application and ending evaluators after each choice; do not inspect an option for an ending ID or story-stop flag.

## Optional export

```js
export function applyChoice(state, question, option) {
  // Return a new state object. Do not mutate the input.
}
```

If omitted, the analyzer adds each option's numeric `effects` to a cloned state.

Export effect constraints when the project has a closed numeric contract:

```js
export const effectConstraints = {
  allowedValues: [-20, -15, -10, -5, 0, 5, 10, 15, 20],
  hardTotalAbsoluteChange: 60,
  recommendedTotalAbsoluteChange: 40,
  highMagnitudeAtOrAbove: 15,
  recommendedMaxHighMagnitudeDimensions: 2,
};
```

The analyzer rejects an illegal value or a total absolute change above the hard cap. It reports, without aborting, ordinary-budget excess and too many high-magnitude dimensions so a severe but defensible choice can be reviewed.

## Evaluation semantics

- `evaluateAfterChoice` must implement production order for global thresholds and stage gates.
- It must return the first applicable ending ID or `null`/`undefined`.
- `evaluateFinal` runs only when every question has been answered without an early ending.
- Both evaluators must be deterministic and side-effect free.

## Optional balance contract

Export `balanceConfig` to obtain project-specific conditional metrics and acceptance diagnostics:

```js
export const balanceConfig = {
  globalDanger: {
    endingIds: ["conflict_break", "strong_discomfort", "trust_broken"],
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
  ],
  finalClassifier: {
    questionId: "Q10",
    outcomeIds: ["friends", "confirmed_relationship:romance_stable"],
    recommendedReachRange: [35, 55],
    minimumOutcomeConditionalPercentage: 5,
    recommendedOutcomeConditionalRange: [10, 25],
    warningOutcomeConditionalPercentage: 40,
    maximumOutcomeConditionalPercentage: 45,
  },
};
```

Stage-gate eligibility excludes paths selected by a higher-priority rule at that checkpoint. The gate ending plus paths that continue form the denominator. Final-classifier reach includes only configured complete final outcomes; a higher-priority global result after the last choice does not count as reaching the final classifier.

## Report distribution semantics

The analyzer reports both distributions; do not substitute one for the other:

- `trajectoryPercentages`: divide the number of truncated terminal trajectories selecting an outcome by all terminal trajectories. Every terminal leaf has equal weight, regardless of depth.
- `weightedPathPercentages`: give an early terminal trajectory the product of all skipped question option counts, then divide by the complete choice-space product. This matches sequential player probability only when each available option is equally likely.

Use `weightedPathPercentages` for probability claims under that equal-choice model. Use `trajectoryPercentages` only for route-count and truncation diversity. Conditional stage and final metrics follow the same distinction and expose weighted percentages as the primary values.

For a two-option first question where A ends immediately and B reaches a two-option second question, there are three terminal trajectories. Their trajectory shares are one third each. Their weighted path shares are one half, one quarter, and one quarter.

## Structured results and declared coverage

String results remain supported for simple or legacy adapters. Use a structured result when the runtime has base endings, secondary classifiers, or stable rule IDs:

```js
return {
  endingId: "confirmed_relationship",
  outcomeId: "confirmed_relationship:romance_stable",
  ruleIds: ["final_confirmed_relationship", "evaluation_romance_stable"],
};
```

- `endingId` is the base player-facing ending.
- `outcomeId` is the complete stable result including secondary classification; it defaults to `endingId`.
- `ruleIds` lists the selected rules that produced the result; it defaults to an empty array.

Declare the intended result universe so the analyzer can report missing and unexpected IDs instead of silently omitting them:

```js
export const expectedEndingIds = ["confirmed_relationship", "friends"];
export const expectedOutcomeIds = [
  "confirmed_relationship:romance_stable",
  "confirmed_relationship:romance_hidden_risk",
  "friends",
];
export const expectedRuleIds = [
  "final_confirmed_relationship",
  "evaluation_romance_stable",
  "evaluation_romance_hidden_risk",
  "final_friends",
];
```

All three arrays are optional for backward compatibility. If an array is absent, the report marks that coverage dimension as undeclared and does not call observed IDs unexpected.

## Optional rule-shadowing diagnostics

Missing rule coverage alone cannot tell whether a rule is impossible or shadowed by higher-priority logic. If the production rule system can expose every rule that is true at a checkpoint, export:

```js
export function evaluateApplicableRuleIds(context) {
  // context.phase is "afterChoice" or "final".
  // Return every true terminal rule in production evaluation vocabulary.
  return [];
}
```

The selected evaluator result's `ruleIds` must be a subset of these applicable IDs. With this hook, the report distinguishes selected and shadowed rules. Without it, `coverage.ruleDiagnostics.shadowingStatus` is `unknown`; do not claim that a missing rule is shadowed.

## What the generic analyzer does not infer

- narrative quality or psychological validity;
- cross-option dominance caused by bespoke rules;
- random events, timers, inventory, or hidden external state;
- whether a rare ending is desirable.

Extend the project adapter or write project-specific assertions for those cases rather than weakening the production rules.
