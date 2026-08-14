# Love with MBTI balance contract

Use this contract for ENTP and INTP production-equivalent enumeration. Import production questions, state application, stable result IDs, and `resolveEnding`; never copy thresholds into an adapter-side evaluator.

## Outcome flow

An option changes relation state only. After each choice, apply the canonical sequence:

1. global danger: `conflict_break`, `strong_discomfort`, `trust_broken`;
2. stage gates at Q2, Q5, and Q8;
3. the Q10 final classifier, including separate complete outcomes for `confirmed_relationship:romance_stable` and `confirmed_relationship:romance_hidden_risk`.

There is no option-authored direct ending and no extra ending family outside `global`, `stage_gate`, and `final`.

## Effect constraints

- Legal values remain `-20, -15, -10, -5, 0, 5, 10, 15, 20`.
- Reserve `±20` for clearly severe behavior.
- Recommend total absolute change at or below `40` for ordinary choices.
- Reject total absolute change above `60`.
- Warn when more than two dimensions reach magnitude `15` or `20`.
- Give each danger behavior one primary axis: trust violation lowers trust; pressure/discomfort lowers comfort; argument, humiliation, or retaliation raises conflict.
- Avoid maximum simultaneous trust and comfort loss, which makes `trust_broken` and `strong_discomfort` compete for the same paths.

## Probability and acceptance metrics

Treat `weightedPathPercentages` as the primary equal-choice probability model. Treat `trajectoryPercentages` only as truncated-route share and route diversity.

Global danger:

- each result: recommended `3%–8%`, hard maximum `10%`, and reachable;
- combined: target `12%–18%`, hard maximum `20%`.

Stage gates use eligible weighted paths at that checkpoint as the denominator after higher-priority danger rules:

- Q2 `no_second_meeting`: `5%–15%`;
- Q5 `fade_out`: `10%–20%`, with values above `25%` anomalous;
- Q8 `stay_acquaintances`: `10%–20%`, with values above `25%` anomalous.

Final classifier:

- paths reaching Q10 final classification: `35%–55%` of the complete game;
- every complete final outcome: at least `5%` of Q10-classified paths, recommended `10%–25%`;
- warn above `40%`; treat above `45%` as anomalous;
- all base final endings and both relationship evaluations must be reachable.

## Tuning order

Capture a baseline, then change one bounded batch at a time and fully enumerate ENTP and INTP after every batch.

The supplied in-memory baseline after removing option-authored ending selection but before rewriting the severe vectors was:

| type | global danger combined | conflict break | strong discomfort | trust broken | stage endings combined |
|---|---:|---:|---:|---:|---:|
| ENTP | 16.33% | 0.17% | 8.64% | 7.52% | 40.60% |
| INTP | 15.55% | 0.002% | 10.94% | 4.61% | 62.89% |

Use these figures only as the supplied before-state for comparison. Recompute the production-equivalent baseline whenever source data or rules differ, and use eligible checkpoint denominators—not the combined all-game stage share—for stage acceptance.

1. Remove any option-authored ending mechanism and rewrite over-strength severe vectors while keeping global danger thresholds at comfort `<= 5`, trust `<= 5`, and conflict `>= 80`.
2. Prefer target-specific effect changes: add conflict to genuine escalation in middle/late questions, stop lowering trust and comfort together without need, and repair INTP accumulation before Q8.
3. Only if reasonable ENTP and INTP effect changes still leave `conflict_break` below `3%`, test conflict `>= 75` and regress every playable type.
4. Do not lower directly to `70` without redesigning the Q10 `strangers_after_all` conflict condition and precedence because it would otherwise be shadowed.
5. Do not globally loosen a shared stage gate for one personality. Migrate it only when multiple playable personalities show the same persistent deviation.
6. Tune Q10 thresholds last, after global danger and stage-gate shares are stable.

Do not force percentages by breaking the behavioral meaning of a choice. Record unmet targets and their evidence.

## Required handoff

Preserve before/after tables, individual and combined global danger shares, eligible-denominator stage rates, Q10 reach, Q10-conditional complete outcomes, unreachable IDs, measured or unknown shadowing, fixed-position and fixed-strategy runs, local dominance findings with narrative dispositions, and at least one path per reachable complete outcome.
