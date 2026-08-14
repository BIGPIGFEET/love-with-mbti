---
name: 01-research-stereotype-evidence
description: Conduct multi-round web research on online stereotype discourse and produce an inspectable source/query ledger, neutral feature-evidence table, counterexamples, confidence labels, access limitations, and bounded creative-use notes. Use as stage 01 for persona research, interactive fiction, dating sims, or choice games before building behavior models, conflict structures, or candidate events.
---

# 01 Research Stereotype Evidence

Collect and qualify online discourse evidence without converting it into game behavior or scenes. Treat the result as evidence about recurring online representation, never as population prevalence or psychological fact.

If the repository provides `.codex/choice-game-process-profile.md`, read it before resolving project context, artifact paths, canonical schemas, or validation requirements. The profile may narrow this reusable contract but cannot weaken evidence eligibility or the stage boundary.

## Workflow

1. Set the boundary: target label/community, languages and regions, time sensitivity, intended creative output, and whether the user needs representative statistics or recurring online narratives.
2. Build a source plan before searching. Cover at least three independent clusters when feasible: primary community self-reports, public social/video platforms, and explanatory or official/type-reference pages.
3. Search in rounds. Start broad, then use recurring claims, disagreements, relationship contexts, and counter-stereotypes to form narrower follow-up queries.
4. Keep a query ledger for every platform. Record failed access, login walls, paywalls, robots restrictions, and fallback decisions.
5. Classify each finding before using it: an `evidence_source` can support a feature; a `surface_record` can describe visible discourse or trope packaging only; a `lead` is a route to investigate, not evidence.
6. Record stable IDs, URL, title/page, platform, date when available, content type, concise summary, and the narrow permitted claim. Treat snippets and AI-generated summaries as leads until an original page is inspectable.
7. Synthesize a neutral feature-evidence table. Give each feature a scope, source set, online-discourse confidence, counterevidence, creative value, risk, and permitted use.
8. If the user asks for representative statistics, open the statistics branch: record the population, sampling frame, method, field dates, denominator, uncertainty, and whether the estimate is actually representative. Otherwise report recurring discourse only; never infer population frequency from platform counts or self-selected polls.
9. Audit independence and disagreement. Retain counterexamples and critiques instead of forcing consensus.
10. Produce the stage-01 handoff using [references/research-schemas.md](references/research-schemas.md).

## Evidence rules

- Use labels such as `cross-platform recurring`, `repeated`, `context-specific`, and `low-confidence meme`; these describe discourse support, not real-world frequency.
- Do not convert self-selected polls or post counts into population percentages.
- Prefer direct pages and primary self-reports where available.
- Cite sources beside claims and keep sourced observations separate from inference.
- Mark copied, derivative, coordinated, or mutually dependent sources.
- State uncertainty and missing coverage explicitly.
- `evidence_source` requires an inspectable, direct enough source and may support a narrowly stated feature.
- `surface_record` may be inspectable, derivative, or platform-specific. It may document trope visibility, negative packaging, or representation risk, but cannot establish a behavior feature or mechanical basis.
- `lead` may be a search result, inaccessible page, summary, or unverified pointer. It may guide later research only.

## Existing or mixed research artifacts

When artifacts already exist, audit and migrate them in place before searching again. Preserve stable IDs and prior text where possible; add `record_class`, `permitted_use`, inspectability, provenance, and an audit note instead of silently treating every old row as evidence.

Do not require a full redo merely because an older ledger mixed links, snippets, and discourse observations. Re-search only the rows needed to resolve a decision-critical gap, and leave unresolved rows classified as `lead` or `surface_record` with an explicit limitation.

## Stage boundary

Stop after the evidence ledger, neutral feature table, limitations, and handoff. Do not create relationship-stage behaviors, conflict dimensions, state variables, candidate scenes, dialogue, options, scores, or endings.

If the user also requests modeling, finish and preserve the evidence artifacts first, then invoke `$02-build-stereotype-event-model` as a separate stage.

## Acceptance checks

- Every feature resolves only to eligible `evidence_source` IDs.
- Source independence and access failures are documented.
- Surface records and leads have bounded, non-evidentiary permitted uses.
- Any representative statistic has a documented population and method; otherwise the output makes no prevalence claim.
- Confidence labels describe online discourse only.
- Negative tropes include counterevidence or an explicit search for it.
- Low-confidence memes cannot determine scoring, morality, or endings.
- The handoff distinguishes evidence, interpretation, and open questions.
- No behavior model or event catalogue has leaked into stage 01.
