# Question and option schema

Use a machine-readable format when the questions will feed code or automated analysis. The following fields are semantic requirements, not mandatory property spellings. When a runtime schema already exists, record the field mapping and write the canonical runtime shape.

## Question record

| Field | Type | Meaning |
|---|---|---|
| question_id | string | Stable ID; never derive it from display order alone |
| scene_id | string | Upstream formal scene ID |
| order | integer | Current play order |
| stage | string | Narrative/relationship stage |
| setup | string | Concrete context shown to the player |
| npc_behavior | string | Observable speech or action |
| prompt | string | One player-facing decision question |
| options | array | Choice records in display order |
| primary_feature_id | string | Main modeled feature |
| secondary_feature_ids | array | Optional supporting features |
| behavior_ids | array | Upstream modeled behaviors retained for traceability |
| conflict_ids | array | Tested interaction/conflict IDs |
| state_ids | array | Approved state dimensions affected by the scene |
| evidence_refs | array | Traceability to the research ledger |
| author_notes | string | Non-player-facing design rationale |

## Choice record

| Field | Type | Meaning |
|---|---|---|
| option_id | string | Stable within the project |
| text | string | Concrete player action or line |
| strategy | string | Analytical tag; do not expose unless intended |
| effects | object | Numeric deltas keyed by approved state dimensions |
| immediate_response | string | NPC reaction or immediate consequence |
| fuzzy_hints | array | Directional, nonnumeric state feedback |
| rationale | string | Why the effects represent the interaction |

`fuzzy_hints` must reference an approved feedback dictionary. They are not free-form keys created independently per question.

An option changes state and presentation only. Do not add a direct-ending selector, an ending ID, or a story-stop tag to the choice schema. Ending selection belongs to the canonical global-danger, stage-gate, and final-classifier rules.

## Effect budget

For Love with MBTI, use only `-20, -15, -10, -5, 0, 5, 10, 15, 20`; do not expand the set with `±25` or `±30`.

- Reserve `±20` for behavior whose narrative meaning is explicitly severe.
- Keep the sum of absolute changes at or below `40` for ordinary choices when possible.
- Reject any option whose sum of absolute changes exceeds `60`.
- Warn when more than two dimensions have magnitude `15` or `20`; require a concrete rationale before retaining it.
- Prefer one primary harm direction. Trust violations primarily lower trust, pressure primarily lowers comfort, and arguments, humiliation, or retaliation primarily raise conflict.
- Avoid maximum simultaneous trust and comfort losses because they make distinct global-danger outcomes compete for the same paths.

Automated checks can enforce legal values and the hard `60` cap. They should report the ordinary `40` budget and high-magnitude-axis rule as review warnings because a severe option can reasonably exceed `40` without exceeding `60`.

## Runtime mapping contract

Before writing production content, record a mapping with these columns:

| semantic field | runtime field or companion artifact | transformation | validator |
|---|---|---|---|

If the runtime omits `scene_id`, feature IDs, behavior IDs, or other design traceability, retain them in a companion table keyed by `question_id` and `option_id`. The companion record and runtime IDs must be validated together; do not rely on display order as the join key.

When the repository profile chooses a JSON companion, include the upstream `candidate_id` and `state_ids` as well as scene, behavior, feature, source, and conflict IDs. Validate them against the profile's Stage-03 formal-sequence registry, not only for non-emptiness, and verify that the runtime question order and stage match the selected scene. Use the exact profile routes and validator instead of inventing another parallel mapping.

For Love with MBTI, representative mappings include:

| Semantic field | Current runtime field |
|---|---|
| `question_id` | `Question.id` |
| `setup` | `Question.scene` |
| `npc_behavior` | `Question.npcQuote` |
| `immediate_response` | `QuestionOption.npcResponse` |
| `fuzzy_hints` | `QuestionOption.feedbackIds` plus `feedbackText` |
| evidence references | `Question.researchRefs` |

Fields without a direct `src/content/schema.ts` property belong in the formal-selection or companion traceability artifact. Production output must also respect `ALLOWED_EFFECT_VALUES`, the shared strategy vocabulary, and the one-target-type routing constraint.

For Love with MBTI, the runtime choice field allowlist is exactly `id`, `strategy`, `strategyLabel`, `text`, `effects`, `npcResponse`, `feedbackIds`, and `feedbackText`. Treat any extra direct-ending or story-stop property as a schema error.

## Example shape

```json
{
  "question_id": "q03",
  "scene_id": "scene_shared_plan",
  "order": 3,
  "stage": "early_trust",
  "setup": "...",
  "npc_behavior": "...",
  "prompt": "...",
  "options": [
    {
      "option_id": "q03_a",
      "text": "...",
      "strategy": "negotiate",
      "effects": {"attraction": 5, "trust": 10, "comfort": 5, "conflict": -5},
      "immediate_response": "...",
      "fuzzy_hints": ["trust_up_medium", "conflict_down_small"],
      "rationale": "..."
    }
  ],
  "primary_feature_id": "feature_debate_as_connection",
  "secondary_feature_ids": [],
  "behavior_ids": ["behavior_debate_as_connection"],
  "conflict_ids": ["pace_and_control"],
  "state_ids": ["attraction", "trust", "comfort", "conflict"],
  "evidence_refs": ["src_12", "src_19"],
  "author_notes": "Preliminary effects; rebalance after enumeration."
}
```

## Set-level QA table

Track one row per question with columns for stage, primary feature, conflict family, strategy-to-position mapping, effect range, response checked, hints checked, and humanization diff checked.
