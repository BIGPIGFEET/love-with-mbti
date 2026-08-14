# Scenario selection schemas

Use these tables as a minimum handoff contract. Add project-specific columns only when they change a decision.

## Candidate eligibility

| Field | Meaning |
|---|---|
| candidate_id | Stable upstream ID |
| short_name | Neutral event label |
| trigger | Concrete situation that starts the event |
| observable_behavior | What the NPC actually says or does |
| player_decision_pressure | What the player must decide |
| primary_feature_id | Main modeled feature tested |
| secondary_feature_ids | Optional supporting features |
| behavior_ids | Upstream behavior-model IDs exercised |
| feature_ids | Primary and secondary feature IDs retained without abbreviation |
| source_ids | Eligible evidence-source IDs backing the candidate |
| conflict_ids | Upstream conflict-dictionary IDs / recurring conflict family |
| state_ids | Project state dimensions affected or observed |
| agency_quality | strong / usable / weak |
| eligibility | select / alternate / exclude |
| reason | Brief decision rationale |

## Formal sequence

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|

`candidate_id` is the canonical upstream ID. Keep `scene_id` stable after handoff only while its selected meaning remains unchanged. Source IDs must be eligible evidence-source IDs; surface records belong in risk notes only.

If the repository profile requires a machine-readable registry, serialize one record per formal-sequence row with `order`, `stage`, `scene_id`, `candidate_id`, `behavior_ids`, `feature_ids`, `source_ids`, `conflict_ids`, and `state_ids`. This registry is the Stage-04 reference universe; keep it synchronized with the human-readable table and change log.

## Coverage matrix

Use rows for formal scenes and columns for feature IDs and conflict families. Mark `P` for primary coverage and `S` for secondary coverage. Summarize:

- uncovered features or conflict families;
- repeated primary tests;
- adjacent repetitions;
- stage concentration;
- intentional omissions and their rationale.

## Alternate pool

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|

## Selection handoff

End with:

1. locked formal order;
2. stage and difficulty rationale;
3. coverage summary;
4. alternates and swap guidance;
5. unresolved evidence or representation risks;
6. explicit reminder that options and numbers are not yet approved.

## Selection change log

Treat the first locked sequence as the controlled baseline. Append a row for every later addition, removal, reorder, or replacement.

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|

For a replacement, create a new `scene_id`; do not reuse the old ID for a new test. Record `none` where no prior candidate exists.
