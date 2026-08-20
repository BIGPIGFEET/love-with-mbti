# ISFP Choice-Path Balance Report

## Scope and Method

- Analysis date: 2026-08-20
- Question source: `content/questions/isfp-ten-question-draft.json`
- Production-equivalent mechanics: `src/game/rules.ts` (`INITIAL_STATE`, `applyEffects`, `resolveEnding`)
- Adapter: `scripts/isfp-choice-paths-adapter.mjs`
- Analyzer: `.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- Probability model: `weightedPathPercentages`; each available option is treated as equally likely. Terminal-route percentages are retained in the JSON only as route-diversity metrics, not player probability.

The analyzer enumerated `4^10 = 1,048,576` complete choice paths. Early endings use suffix weights, so the final weighted total is also `1,048,576`.

## Changes Since Baseline

The baseline is preserved in `isfp-balance-baseline.json`. The final report is `isfp-balance-report.json`.

| Area | Baseline | Final | Decision |
| --- | ---: | ---: | --- |
| Global-danger combined | 20.298% | 9.795% | Removed the hard-limit breach without changing shared thresholds. |
| Q02 `no_second_meeting` | 6.667% | 20.000% | Restored the intended first-meeting boundary gate. |
| Q05 `fade_out` | 23.488% | 31.843% | Made repeated dismissal and disengagement, rather than the ISFP label, drive the gate. |
| Q08 `stay_acquaintances` | 29.917% | 38.569% | Made failure to repair a public-boundary breach materially consequential. |
| Q10 reach | 44.438% | 29.757% | Reduced unresolved late-game accumulation while preserving all earlier exits. |
| `q09_demand_exclusivity` budget | 50 | 40 | Brought the option within the recommended effect budget while keeping coercive exclusivity clearly harmful. |
| Fixed position 1 | `romance_stable` at `100/100/100/0` | `friends` | Removed the first-answer stable-romance shortcut by reordering options only. |
| Fixed positions reaching Q10 | 2 of 4 | 3 of 4 | Removed the Q2 position failure; only the mathematically unavoidable Q8 failure remains, without changing any path probability. |

Effect changes keep each option's narrative direction: the Q02 repeated questioning, Q04/Q06 blame, Q07 forced immediacy, Q08 public minimization/deflection, Q09 exclusivity demand, and Q10 perfect-apology demand still reduce the relationship state and/or raise conflict. Q09 distinguishes explicit mutual agreement from merely tolerating ambiguity, and Q10 distinguishes repair from withdrawing from the shared relationship. Feedback IDs and wording were synchronized with every changed effect band.

## Coverage and Safety

- All 11 declared base endings are reachable; none are missing or unexpected.
- All 12 declared complete outcomes are reachable, including both `confirmed_relationship` evaluations.
- No effect-budget warning remains; all effect values are legal and every option is at or below the 40-point recommended total.
- Rule coverage and shadowing are `unknown`: the production resolver has no stable rule-ID/applicable-rule diagnostic API. This analysis does not represent audit labels as executable rule IDs.

Global-danger weighted shares after tuning:

| Ending | Share | Reference status |
| --- | ---: | --- |
| `conflict_break` | 0.021% | Below recommended range |
| `strong_discomfort` | 8.381% | Above recommended range, below its 10% hard maximum |
| `trust_broken` | 1.393% | Below recommended range |
| Combined | 9.795% | Below the 11-17% reference range, below the 20% hard maximum |

The reference ranges are retained as diagnostics, not ISFP-specific release gates. Raising the rare global endings merely to fill those ranges would require adding penalties or changing shared thresholds, neither of which follows from the scene evidence.

## Stage Gates

Stage-gate rates use only weighted paths still eligible at each gate after higher-priority global exits.

| Gate | Eligible paths | Failure rate | Reference status |
| --- | ---: | ---: | --- |
| Q02 `no_second_meeting` | 983,040 | 20.000% | Within 20-25% |
| Q05 `fade_out` | 755,712 | 31.843% | Within 30-38% |
| Q08 `stay_acquaintances` | 509,712 | 38.569% | Within 35-45% |

All three stage gates now fall inside their reference intervals. The triggering paths still require behavior that is observable in the scene—repeated questioning, dismissing concrete impact, or failing to repair a public-boundary breach—rather than treating the ISFP label itself as a failure condition.

## Q10 Final Classifier

29.757% of complete paths reach Q10, within the 20-30% reference range. Within that reached set:

| Outcome group | Conditional share | Reference status |
| --- | ---: | --- |
| `strangers_after_all` | 14.833% | 0.167 percentage points below 15-20% |
| `confirmed_relationship` (both evaluations) | 14.255% | Within 10-15% |
| `dangerous_lovers` | 8.293% | Within 5-10% |
| `friends` | 18.237% | Within 18-25% |
| `unresolved_ambiguity` | 44.383% | Within 35-45% |

The machine-readable report retains one concrete option-ID path and final state for every reachable ending and every Q10 outcome. Four of five final groups are inside their reference intervals; `strangers_after_all` misses its lower bound by only 0.167 percentage points. That residual is accepted rather than assigning a narratively unsupported penalty solely to cross a diagnostic boundary. `dangerous_lovers` requires very high attraction while trust or comfort remains below the romance threshold, after surviving all earlier gates.

## Option and Strategy Review

- After option reordering, fixed positions 1-4 terminate in `friends`, `stay_acquaintances`, `strangers_after_all`, and `unresolved_ambiguity`. Positions 1, 3, and 4 reach Q10; position 2 first exits at Q8. No fixed position now produces confirmed romance or an early Q2/Q5 shortcut.
- Four fixed positions cannot all pass Q8 without changing effects: across all four paths, the maximum aggregate attraction available after Q8 is `165`, while four simultaneous passes require at least `4 × 45 = 180`. The chosen order therefore maximizes Q10 reach at 3 of 4 fixed positions and places the unavoidable failure at the latest stage gate.
- Fixed strategies remain intentionally distinct: repeated `negotiate` reaches `romance_stable`, repeated `honest` reaches `unresolved_ambiguity`, repeated `accommodate` reaches `trust_broken`, and repeated `risky` reaches `strong_discomfort`. Strategy tags are analysis metadata and are not displayed as answer labels in the UI. The analyzer reports no cross-question raw-effect strategy dominance; `confront` is not applicable.
- Reordering does not change the 45 local raw-effect dominance pairs, so each warning was reviewed by behavior rather than dismissed as a probability artifact:

| Question | Pairs | Narrative disposition |
| --- | ---: | --- |
| Q01 | 3 | Joining or honestly declining is mechanically safer than stereotyping or turning taste into a test; the dominated choices are retained as distinct observable harms. |
| Q02 | 4 | A gentle check, an offered exit, and ending the meeting express different willingness to continue; repeated questioning remains the pressure failure. |
| Q03 | 3 | Receiving care, clarifying intent, converting care into debt, and forcing romantic meaning test different interpretations of the same gesture. |
| Q04 | 6 | The split plan is deliberately strongest; keeping the plan, over-accommodating, and blaming change preserve three distinct responses to reliability pressure. |
| Q05 | 5 | Asking about impact, finding common ground, dismissing harm, and avoiding the topic separate engagement from moral judgment or withdrawal. |
| Q06 | 5 | Naming a support need or sequence differs from passive delegation and requiring mind-reading. |
| Q07 | 6 | An anchored pause is deliberately strongest; bounded space, an unbounded wait, and forced immediacy encode different repair risks. |
| Q08 | 5 | Scope checking and immediate deletion represent different stages of privacy repair; minimization and blame deflection preserve separate responsibility failures. |
| Q09 | 3 | Explicit definition, a friendship boundary, tolerated ambiguity, and coercive exclusivity produce distinct relationship positions even where raw effects are ordered. |
| Q10 | 5 | A shared repair rule, naming residual need, withdrawing from repair, and demanding perfect explanation remain distinct final responses. |

These warnings are retained intentionally. They do not change equal-choice outcome probabilities, and the reordered UI prevents their valence from aligning with a single answer letter. Final attraction thresholds are also non-monotonic because `friends` requires attraction below `65`, so raw-vector dominance is not treated as proof of global outcome dominance.

## Reproduction

```powershell
node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs scripts/isfp-choice-paths-adapter.mjs --json
```

Write the command output to `content/questions/isfp-balance-report.json` to refresh the final report after any question effects, option order, or shared rule change.
