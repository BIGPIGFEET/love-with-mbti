# Ending and feedback content schemas

## Fixed canonical contract

Read the stable result vocabulary and ending kinds from the canonical runtime schema, and read evaluation order and conditions from the canonical resolver. These are read-only Stage-05 inputs.

Do not copy thresholds into a second executable or normative rule table. A companion document may record an audit-only reference to the canonical result, but it must not redefine conditions, precedence, stable IDs, or feedback semantics.

If the runtime has no stable rule IDs, do not invent executable-looking identifiers or export audit labels as analyzer `expectedRuleIds`.

## Content coverage matrix

| ending_id | secondary_result_id | fixed family | production content route | character basis | content complete? |
|---|---|---|---|---|---|

Use one row for every canonical base ending and every complete secondary outcome. Preserve base ending IDs and secondary result IDs separately so nested classifications are not lost.

## Ending content record

| Field | Meaning |
|---|---|
| ending_id | Fixed machine-facing base ending ID |
| secondary_result_ids | Fixed sub-classifiers or evaluations under the base ending, when applicable |
| family | Fixed `global` / `stage_gate` / `final` kind read from the runtime schema |
| title | Player-facing title; for Chinese content, use 4–8 Chinese characters and make the relationship outcome recognizable without body copy |
| core_copy | Main narrative result |
| specific_reason | Concrete interaction pattern or triggering act supported by the questions |
| state_summary_policy | Which dimensions or qualitative states to reveal |
| actions | Restart, continue, review, share, or exit controls supported by the product |
| tone | Emotional target and severity |
| content_notes | Safety or sensitivity guidance |
| character_basis | Approved behavior-model IDs, question interaction references, or established voice notes that justify target-specific wording |
| production_route | Inline TypeScript module and runtime fields that store the content |
| stage06_status | Reachability or balance status imported from Stage 06, never guessed during Stage 05 |

When the runtime interface stores fewer fields, keep design-only fields in a companion audit record keyed by the exact stable ending and secondary result IDs.

## Fuzzy-feedback content dictionary

| hint_key | fixed dimension | fixed raw direction | player meaning | fixed intensity | target-specific copy |
|---|---|---|---|---|---|

For every canonical key:

- preserve its dimension, raw direction, and intensity;
- write felt, nonnumeric player-facing language;
- preserve the canonical zero-change behavior;
- preserve the approved combined-hint policy;
- verify conflict-like inverse semantics explicitly.

Stage 05 may change only the player-facing wording permitted by the target content pack. It may not add keys or reinterpret existing keys.

## Completeness review

- List all canonical base ending IDs and confirm each has exactly one content record.
- List all secondary evaluation IDs and confirm each has complete, separate content.
- Confirm fixed ending kinds match the runtime schema.
- Confirm every Chinese title contains 4–8 Chinese characters and makes the resulting relationship state recognizable without body copy.
- Confirm target-specific wording is grounded in the approved behavior model and established question interactions rather than the four-letter label or unsupported stereotypes.
- Compare titles for the same fixed outcome across MBTI targets: allow distinct wording and imagery, but preserve identical outcome semantics.
- Confirm reasons name interactions that can occur in the target's questions.
- Confirm every canonical fuzzy-feedback key has target content with unchanged semantics.
- Confirm options contain no direct-ending selector and content introduces no additional ending family.
- Confirm production content is inline TypeScript and no production module imports a JSON or Markdown draft.
- Defer reachability, rule coverage, and distribution judgments to Stage 06.

For Love with MBTI, the fixed runtime result order is global danger after each applied option; the Q2, Q5, or Q8 gate at its matching checkpoint; and the Q10 final classifier when no earlier result ends the run. Keep `confirmed_relationship:romance_stable` and `confirmed_relationship:romance_hidden_risk` as separate complete outcomes even though they share one base ending. This paragraph describes the canonical resolver for content coverage and does not authorize Stage-05 rule changes.

## Runtime projection

The tables above are the audit contract. Map player-facing fields to the canonical inline TypeScript ending interface and keep omitted design-only fields in a companion matrix keyed by stable ending and evaluation IDs. Do not create a second executable rule system in Markdown, JSON, or the content module.
