# Behavior and event modeling schemas

## Behavior model

| behavior_id | stage | observable tendency | constructive potential | situational risk | feature IDs | source IDs | evidence/inference status | interpretation to avoid |
|---|---|---|---|---|---|---|---|---|

Assign a stage only when supported or explicitly marked as bounded creative inference.

## Conflict dictionary

| conflict_id | tension | legitimate need A | legitimate need B | linked behavior IDs | misuse to avoid |
|---|---|---|---|---|---|

Phrase tensions as competing needs, not a correct side and a defective side.

## State semantics

| state_id | observable meaning | increase means | decrease means | misuse to avoid |
|---|---|---|---|---|

Do not equate messaging frequency with intimacy or consent.

## Candidate-event mapping

| candidate_id | stage | concrete trigger | observable NPC behavior | player decision pressure | behavior IDs | feature IDs | source IDs | conflict IDs | state IDs | player agency | narrative guardrail |
|---|---|---|---|---|---|---|---|---|---|---|---|

`candidate_id` is the only candidate-event identifier across stages 02 and 03. Keep candidate events broader than final questions. Do not write answer choices or score deltas here.

Source IDs in this table must be eligible `evidence_source` IDs. Put related `surface_record` IDs in a risk note, not in the evidence chain.

## Existing project mechanism contract

| contract source | fields to reuse | change policy |
|---|---|---|
| content schema | stage, state, strategy, content/ending IDs and validation constraints | reuse; do not redefine in this stage |
| rule implementation | initial state, thresholds, trigger order, ending priority | reuse; do not redefine in this stage |
| existing content | occupied IDs and coverage | inspect for compatibility; do not treat as evidence |

## Stage-02 audit

- Every behavior and candidate traces to feature and eligible evidence-source IDs.
- Evidence and creative inference are distinguishable.
- Constructive potential and situational risk are both present.
- Conflicts preserve both parties' legitimate needs.
- Events are not duplicates under different wording.
- Each event contains meaningful player agency.
- Every candidate retains behavior, feature, source, conflict, and state IDs under its canonical `candidate_id`.
- No final selection, dialogue, options, score deltas, thresholds, or endings appear.
