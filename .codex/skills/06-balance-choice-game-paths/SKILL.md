---
name: 06-balance-choice-game-paths
description: Exhaustively enumerate branching choice-game paths with early-exit suffix weighting, conditional stage-gate failure rates, final-classifier reach and conditional outcomes, effect-budget diagnostics, ending reachability, rule precedence, fixed-position or fixed-strategy behavior, and local dominance review. Use as stage 06 after questions and ending rules exist and whenever effects, thresholds, option order, or rule priority change.
---

# 06 Balance Choice Game Paths

## Overview

Use deterministic exhaustive analysis as the source of truth for small finite choice spaces. Diagnose whether a problem comes from content, effect values, thresholds, or rule precedence before changing anything.

Consume the production-equivalent question and ending contracts from stages 04-05. Feed numerical or feedback problems back to `$04-write-choice-game-questions`, rule problems to `$05-design-choice-game-endings`, and structural scene problems to `$03-curate-choice-game-scenarios`.

If the repository provides `.codex/choice-game-process-profile.md`, read it before locating production data, building the adapter, or choosing validation commands. The profile may specify canonical sources and project projections but cannot weaken exhaustive coverage or production equivalence.


## Prepare the adapter

Read [references/adapter-contract.md](references/adapter-contract.md). Create a project adapter that imports the real question and rule data and exports the required pure interface. Do not duplicate production numbers by hand when they can be imported.

For Love with MBTI balance work, also read [references/love-with-mbti-balance-contract.md](references/love-with-mbti-balance-contract.md). It fixes the effect budget, probability denominators, acceptance ranges, and tuning order for ENTP and INTP.

Keep the adapter side-effect free. A run with the same inputs must produce the same output.

## Run the analyzer

From this Skill directory, run:

```powershell
node scripts/enumerate-choice-paths.mjs <path-to-adapter.mjs>
node scripts/enumerate-choice-paths.mjs <path-to-adapter.mjs> --json
```

The report includes truncated terminal-trajectory counts and percentages, complete choice-space weights and percentages, declared coverage gaps, rule coverage when rule IDs are available, ending examples, fixed-position runs, fixed-strategy runs, and local effect dominance.

For the bundled production-equivalent adapters, run both playable types separately:

```powershell
node scripts/enumerate-choice-paths.mjs scripts/love-with-mbti-adapter.mjs --json
node scripts/enumerate-choice-paths.mjs scripts/love-with-mbti-intp-adapter.mjs --json
```

## Balance workflow

1. Capture a baseline report before edits.
2. Verify the enumerated complete choice-space size equals the product of option counts.
3. Inspect declared missing base endings, full outcomes, and rules. Missing coverage proves only that an ID was not selected. Distinguish impossible conditions from precedence shadowing only when the adapter exposes all applicable rule IDs; otherwise report shadowing as unknown.
4. Use `weightedPathPercentages` as the primary equal-choice probability model. Use `trajectoryPercentages` only to describe truncated route counts and route diversity; never label it player probability.
5. For each stage gate, use only paths eligible for that gate after higher-priority rules as the denominator. Inspect the weighted conditional failure rate, not the share of all initial paths.
6. Define Q10 final-classifier outcomes explicitly. Report the weighted share of the complete game that reaches that classifier, then calculate each complete final outcome inside that reached set. Keep secondary relationship evaluations separate.
7. Inspect fixed-position and fixed-strategy runs for accidental universal success or failure. Review the cross-question raw-effect strategy-dominance warning when every question exposes the same compared strategies.
8. Inspect local dominance. Treat it as a warning, not proof of global dominance, because later rules and state interactions may change value. Preserve a locally dominated option only with a concrete narrative distinction.
9. Review effect budgets before tuning: illegal magnitudes and total absolute change above the hard cap are errors; ordinary-budget and excessive high-magnitude-axis findings require explanation.
10. Change the smallest defensible element in the approved order. Preserve behavioral meaning and document the rationale.
11. Re-run the complete analyzer after every batch. Never replace full enumeration with sampling. Compare against the baseline and confirm no ending or rule became unintentionally unreachable.
12. Synchronize approved mechanics, ending documentation, fuzzy feedback semantics, tests, and examples.

## Interpretation rules

- A nonzero ending count proves reachability only for the analyzed configuration.
- A zero count may reflect precedence shadowing rather than a bad threshold.
- An omitted expected-ID declaration prevents completeness claims; observed results alone do not define the intended catalog.
- `trajectoryPercentages` gives every distinct truncated terminal route equal weight; do not call it player probability unless routes themselves are sampled uniformly.
- `weightedPathPercentages` describes equivalent complete paths and matches player probability only when every available option at each visited question is equally likely.
- Stage-gate conditional rates divide gate failures by the weighted paths still eligible for that gate after higher-priority rules at the same checkpoint.
- Final conditional rates divide complete final outcomes by weighted paths that survive all earlier rules and reach the Q10 final classifier.
- An option that is locally dominated on raw effects can still matter because of its narrative behavior or later state interactions. Review before editing.
- A fixed strategy tag is meaningful only if every question offers that tag; otherwise report it as not applicable.
- Do not tune only for equal ending percentages. Narrative rarity may be intentional, but it must be explicit.

## Acceptance checks

- Enumeration is deterministic and covers the full finite choice space.
- Truncated terminal-trajectory counts sum to the reported terminal-trajectory total and their percentages represent the complete terminal leaf set.
- Early-exit suffix weighting is correct.
- Every intended ending is reachable or explicitly approved as unreachable.
- Every reachable complete outcome preserves at least one example path, including both relationship evaluations under a shared base ending.
- Global-danger outcomes are reported individually and in aggregate against configured recommended and hard ranges.
- Every stage gate reports an eligible-path denominator and weighted conditional failure rate.
- Q10 reach and every complete final outcome's Q10-conditional percentage are reported.
- Expected base endings and secondary outcomes are declared separately and coverage has no unexplained missing or unexpected IDs.
- Rule precedence and tie-breaks match production behavior.
- Rule shadowing is either measured through an applicable-rule diagnostic hook or explicitly reported as unknown.
- No answer position or universal strategy trivially dominates without intent.
- Effect changes remain consistent with immediate responses and fuzzy hints.
- A machine-readable report and at least one example path per reachable ending are preserved.
- The report records any unmet target without changing thresholds or narrative meaning merely to force a percentage.
