# Evidence research schemas

## Query ledger

| query_id | platform/source cluster | query or route | search round | result | access/status | fallback | notes |
|---|---|---|---:|---|---|---|---|

Record blocked login, paywall, robots restrictions, unavailable results, and abandoned routes. Do not silently substitute a different platform.

## Source ledger

| source_id | record_class | direct URL | page/title | platform | date | content type | original/derivative | inspectable? | permitted use | narrow claim / audit note |
|---|---|---|---|---|---|---|---|---|---|---|

Use stable source IDs and one of these classes:

- `evidence_source`: inspectable evidence eligible to support a narrowly worded feature;
- `surface_record`: visible discourse packaging, trope, or risk material; eligible only for discourse/risk audit;
- `lead`: search snippet, inaccessible route, summary, or unverified pointer; eligible only to guide research.

For a legacy mixed ledger, retain its ID and add the missing class, permitted use, and audit note. Do not silently upgrade a lead or surface record into feature evidence.

## Feature-evidence table

| feature_id | neutral recurring representation | evidence source IDs | independent clusters | counterevidence | discourse confidence | creative value | risk/qualification | permitted use |
|---|---|---|---:|---|---|---|---|---|

Confidence describes support in observed online discourse, never prevalence in the target population.

`surface_record` IDs may be cited in the risk/qualification column, never in `evidence source IDs`.

## Representative-statistics branch

Complete this table only when the task actually requires a representative estimate. Otherwise state that the research concerns online discourse, not prevalence.

| statistic_id | claim | population | sampling frame/method | field dates | denominator/sample | uncertainty/limitations | source ID | representative? |
|---|---|---|---|---|---|---|---|---|

Self-selected polls, post counts, and engagement metrics may be recorded as surface records but are not representative statistics.

## Limitations and coverage

Record:

- languages, regions, platforms, and time ranges searched;
- inaccessible or weakly covered clusters;
- source-selection and self-report bias;
- derivative or coordinated sources;
- unresolved disagreements;
- claims requiring further research.

## Stage-01 audit

- Every feature resolves only to `evidence_source` IDs.
- Evidence sources, surface records, and leads are distinguished.
- Independent clusters are not inflated by reposts.
- Legacy mixed records retain their IDs and receive an audit classification.
- Surface records affect only discourse/risk analysis; leads affect only search routing.
- Any claimed representative statistic documents its sampling basis, or is removed from prevalence language.
- Negative tropes include counterevidence or a documented unsuccessful search.
- Low-confidence memes are marked mechanically unusable.
- No behavior stages, conflicts, state variables, or events appear in the output.
