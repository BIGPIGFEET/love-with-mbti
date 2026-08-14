# Ending and feedback schemas

## Mechanics mode

Declare exactly one mode before editing rules:

| mode | use |
|---|---|
| `establish` | No canonical mechanics exist; create them and identify their future source of truth |
| `reuse` | Canonical mechanics exist; bind content to them without changing thresholds, precedence, directions, or stable IDs |
| `migrate` | Intentionally change shared mechanics under a separately approved migration with regression analysis |

Default to `reuse` whenever a project rule implementation exists.

## Rule-to-ending matrix

| priority | rule_id | checkpoint | condition | inclusive? | ending_id | secondary_result_id | tie-break notes |
|---:|---|---|---|---|---|---|---|

Write conditions in implementation-ready terms. Avoid prose such as "trust is low" unless the corresponding numeric or categorical definition is also recorded.

In `reuse` mode, distinguish runtime rule IDs from audit-only documentation IDs. Prefix or explicitly label audit-only IDs, and do not export them as analyzer `expectedRuleIds` unless the production evaluator returns the same IDs.

## Ending record

| Field | Meaning |
|---|---|
| ending_id | Stable machine-facing ID |
| secondary_result_ids | Optional stable sub-classifiers or evaluations under the base ending |
| family | `global` / `stage_gate` / `final` only |
| title | Player-facing title. For Chinese content, use 4–8 Chinese characters and name the relationship outcome clearly enough to understand without body copy. Literary and MBTI-specific wording must preserve that clarity. |
| core_copy | Main narrative result |
| specific_reason | Concrete interaction pattern or triggering act |
| state_summary_policy | Which dimensions or qualitative states to reveal |
| actions | Restart, continue, review, share, or exit controls |
| tone | Emotional target and severity |
| content_notes | Safety or sensitivity guidance |
| character_basis | Approved behavior-model IDs, question interaction references, or established voice notes that justify MBTI-specific wording |
| rule_ids | Rules that can produce this ending |
| reachability | unknown / verified / unreachable |
| example_path | Filled by balance work when available |

## Fuzzy feedback dictionary

| hint_key | dimension | raw direction | player meaning | intensity | sample copy |
|---|---|---|---|---|---|

For each dimension, define:

- whether higher or lower is healthier;
- zero-change behavior;
- small, medium, and large intensity bands actually used by options;
- wording that describes felt change without exposing raw numbers;
- combined-hint policy when several dimensions change together.

For conflict-like dimensions, a negative numeric delta normally means improvement. Test the semantic direction explicitly.

## Traceability matrix

| checkpoint | rule_id | ending_id | secondary_result_id | feedback keys |
|---|---|---|---|---|

## Completeness review

- List all runtime return values and confirm each has content.
- Confirm every Chinese player-facing title contains 4–8 Chinese characters and makes the resulting relationship state recognizable without the body copy.
- Confirm target-specific titles and copy are grounded in the approved MBTI behavior model and established question interactions rather than the four-letter label or unsupported stereotypes.
- Compare titles for the same ending across MBTI targets: allow distinct wording and imagery, but confirm that every variant preserves the same stable result semantics.
- Confirm options contain no direct-ending selector and that every result is produced by global danger evaluation, a stage gate, or the final classifier.
- List base ending IDs and secondary result/outcome IDs separately so nested classifications are not lost.
- List all ending records and confirm each has at least one rule.
- Identify rules shadowed by a higher-priority rule.
- Identify duplicate conditions with different endings.
- Record unknown reachability for downstream exhaustive enumeration.
- In `reuse` mode, diff the canonical rule implementation before and after work and confirm no shared mechanics changed.

For Love with MBTI, evaluate in this order after applying an option: global danger rules; the Q2, Q5, or Q8 gate when the current checkpoint matches; and the Q10 final classifier only after earlier rules do not select an ending. Keep `confirmed_relationship:romance_stable` and `confirmed_relationship:romance_hidden_risk` as separate complete outcomes even though they share one base ending.

## Runtime projection

The tables above are the audit contract. When the production ending interface has different property names or omits design-only fields, map the semantic fields to the canonical runtime schema and keep the remainder in a companion matrix keyed by stable ending and rule IDs. Do not create a second executable rule system in Markdown.
