---
name: 02-build-stereotype-event-model
description: Convert a completed stereotype evidence ledger and neutral feature table into an evidence-aware relationship-stage behavior model, conflict dictionary, state-variable mapping, and candidate-event library. Use as stage 02 after evidence research and before selecting formal scenarios for an interactive fiction, dating sim, personality quiz, or branching choice game.
---

# 02 Build Stereotype Event Model

Transform bounded research findings into observable, playable narrative-design structures. Preserve traceability and uncertainty while keeping formal scene selection, dialogue, options, scores, and endings out of this stage.

If the repository provides `.codex/choice-game-process-profile.md`, read it before resolving project contracts, artifact paths, runtime constraints, or validators. The profile may narrow this reusable contract but cannot weaken traceability or the stage boundary.

## Output contract

Persist Stage 02 as two human-readable design artifacts; a prose summary in chat or a single mixed document does not replace them when the repository profile defines separate routes.

- Resolve the exact routes from the repository profile. For Love with MBTI, write `content/<type>-behavior-model.md` and `content/scenes/<type>-candidate-scenes.md`, using a lowercase type token in both filenames.
- The behavior-model file must contain the behavior model, conflict dictionary, state semantics, evidence-versus-inference qualifications, limitations, and the Stage-03 handoff basis.
- The candidate-scenes file must contain the complete candidate-event mapping keyed by canonical `candidate_id`, including every behavior, feature, eligible source, conflict, and state ID required by [references/model-schemas.md](references/model-schemas.md).
- Markdown is authoritative for this stage. JSON or TypeScript projections are optional audit aids and must not introduce formal `scene_id` values, final selection, choices, effects, or endings.
- Do not report Stage 02 complete until both files exist, their cross-references resolve, every candidate has the complete upstream ID set, and the acceptance checks below pass.

## Required inputs

Collect or confirm:

- the stage-01 source/query ledger and neutral feature-evidence table;
- confidence, counterevidence, limitations, and permitted-use fields;
- intended relationship or narrative progression;
- project content boundaries;
- provisional state dimensions, if the project already defines them.

Before modeling, read the existing project mechanism contract when one exists: its content schema, rule implementation, and content guidelines. Treat it as a constraint, not an invitation to redesign shared mechanics.

If evidence artifacts are missing or a core feature lacks support, stop and invoke `$01-research-stereotype-evidence`. Do not silently fill evidence gaps from memory.

## Workflow

1. Validate that each feature has stable IDs, eligible `evidence_source` references, a bounded confidence label, and permitted creative use. Preserve linked surface-record IDs only as representation-risk context.
2. Select only features that are sufficiently supported and narratively useful. Keep low-confidence memes decorative and mechanically inert.
3. Convert each selected feature into an observable tendency with constructive potential, situational risk, qualifications, and interpretations to avoid.
4. Arrange behaviors by relationship or narrative stage only when the timing is supported or clearly marked as bounded creative inference.
5. Build a conflict dictionary by pairing competing but legitimate needs. Avoid framing one party as correct and the other as defective.
6. Reuse observable state dimensions from the project contract when available; define them only when no contract exists. Explain what changes in each dimension mean without changing its thresholds or resolution priority.
7. Derive candidate events from behavior and conflict combinations. Assign one canonical `candidate_id` and retain behavior, feature, source, conflict, and state IDs directly on every candidate, along with its concrete trigger, observable behavior, meaningful player decision pressure, and guardrails.
8. Audit duplicates, phase progression, player agency, and traceability.
9. Produce the stage-02 handoff using [references/model-schemas.md](references/model-schemas.md).

## Modeling rules

- Attribute harm to specific actions and consequences, not to a personality label.
- Preserve the difference between sourced evidence and creative inference.
- Give each conflict more than one valid response.
- Do not let frequent messaging automatically mean intimacy, commitment, or consent.
- Prefer observable behavior over abstract traits.
- Reject candidate events that are merely preferences, trivia, or situations with no meaningful player agency.
- Do not use `event_id` for candidate events. `candidate_id` is the cross-stage identifier; later stages add a distinct `scene_id` only for a selected position.

## Stage boundary

Stop after the behavior model, conflict dictionary, state semantics, and candidate-event library. Do not select the final scenario sequence, write dialogue or options, assign score deltas, design endings, or tune thresholds.

Pass the completed candidate library to `$03-curate-choice-game-scenarios`.

## Acceptance checks

- Every modeled behavior and candidate traces back to feature and eligible evidence-source IDs.
- Constructive potential and situational risk are both represented.
- Conflict entries state both parties' legitimate needs.
- Candidate events contain a concrete trigger and player decision pressure.
- Stage progression does not imply consent or commitment without story evidence.
- Low-confidence memes do not control mechanics.
- Candidate IDs are canonical and carry behavior, feature, source, conflict, and state IDs directly.
- Formal scenario selection has not begun.
