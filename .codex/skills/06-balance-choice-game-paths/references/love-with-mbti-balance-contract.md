# Love with MBTI balance contract

Use this contract for production-equivalent enumeration of all eight playable types: INTJ, ENTJ, ENTP, ENFP, INTP, INFJ, INFP, and ISFP. Import each target's inline TypeScript questions, state application, stable result IDs, and `resolveEnding`; never copy thresholds into an adapter-side evaluator.

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

These are game-design funnel targets, not population statistics. Once real choice telemetry exists, rerun with observed option weights before making claims about player probability.

Global danger:

- `conflict_break`: `3%–5%`;
- `strong_discomfort`: `4%–6%`;
- `trust_broken`: `4%–6%`;
- combined: target `11%–17%`, hard maximum `20%`;
- every result remains reachable. If the low-conflict stage gates make these aspirational ranges incompatible with narrative effect sizes, report the miss instead of inflating ordinary choices into severe harm.

Stage gates use eligible weighted paths at that checkpoint as the denominator after higher-priority danger rules:

- Q2 `no_second_meeting`: `20%–25%`, with values above `30%` anomalous;
- Q5 `fade_out`: `30%–38%`, with values above `45%` anomalous;
- Q8 `stay_acquaintances`: `35%–45%`, with values above `55%` anomalous.

Final classifier:

- paths reaching Q10 final classification: `20%–30%` of the complete game;
- `strangers_after_all`: `15%–20%` of Q10-classified paths;
- `confirmed_relationship` combined across both evaluations: `10%–15%` of Q10-classified paths, or roughly `2%–4%` of the complete equal-choice space;
- `dangerous_lovers`: `5%–10%` of Q10-classified paths;
- `friends`: `18%–25%` of Q10-classified paths;
- `unresolved_ambiguity`: `35%–45%` of Q10-classified paths;
- report `romance_stable` and `romance_hidden_risk` separately for reachability, but evaluate probability against the combined relationship group;
- all base final endings and both relationship evaluations must be reachable.

## Tuning order

Capture the target's current report as the baseline, then change one bounded batch at a time and fully enumerate every affected type after each batch. A target-specific content change requires that target's enumeration; a shared-rule change requires all eight types. Recompute from inline production TypeScript whenever source data or rules differ, and use eligible checkpoint denominators—not the combined all-game stage share—for stage acceptance.

1. Keep global danger thresholds at comfort `<= 5`, trust `<= 5`, and conflict `>= 80`.
2. Keep the locked four-dimension stage and final rules in the production resolver; do not create a commitment score or adapter-only threshold.
3. Prefer target-specific effect changes, stop lowering trust and comfort together without need, and preserve one primary harm axis per severe choice.
4. Do not globally loosen a shared stage gate for one personality.
5. Tune Q9–Q10 effects only after checkpoint shares are stable; combine the two relationship evaluations when judging confirmation frequency.

Do not force percentages by breaking the behavioral meaning of a choice. Record unmet targets and their evidence.

## Required handoff

For each affected type, preserve before/after tables, individual and combined global danger shares, eligible-denominator stage rates, Q10 reach, Q10-conditional complete outcomes, unreachable IDs, measured or unknown shadowing, fixed-position and fixed-strategy runs, local dominance findings with narrative dispositions, and at least one path per reachable complete outcome. A complete release handoff contains current reports for all eight registered production packs.
