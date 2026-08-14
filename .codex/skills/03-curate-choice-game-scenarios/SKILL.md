---
name: 03-curate-choice-game-scenarios
description: Select a formal scenario set from an evidence-mapped candidate event library, then sequence it by narrative stage, relationship progression, feature coverage, conflict coverage, and difficulty. Use as stage 03 after behavior/event modeling and before writing dialogue, options, scores, feedback, or endings for a choice game, interactive fiction, dating sim, or personality quiz.
---

# 03 Curate Choice Game Scenarios

## Overview

Turn a broad candidate-event library into a locked, traceable scenario spine. Preserve evidence links and behavioral meaning while keeping prose, options, scores, and ending rules out of this stage.

Consume the handoff from `$02-build-stereotype-event-model` and pass the locked formal sequence to `$04-write-choice-game-questions`.

If the repository provides `.codex/choice-game-process-profile.md`, read it before resolving project contracts, artifact paths, runtime constraints, or validators. The profile may narrow this reusable contract but cannot weaken traceability or the stage boundary.

## Required inputs

Collect or confirm:

- the behavior/feature model and evidence ledger;
- candidate events with stable IDs and feature/conflict mappings;
- target question count and stage allocation;
- content boundaries, prohibited framing, and desired relationship arc;
- downstream state dimensions if already known.

Read an existing project mechanism contract before selection when available. Its official content schema, rule implementation, and current content establish the IDs, stages, and fixed constraints that the selected sequence must respect.

If candidate events are not yet evidence-mapped, stop and invoke `$02-build-stereotype-event-model`; if its evidence inputs are missing, return further upstream to `$01-research-stereotype-evidence`.


## Workflow

1. Validate every candidate's canonical `candidate_id`, concrete trigger, observable behavior, behavior/feature/source/conflict/state IDs, and suitability for player choice.
2. Build the coverage matrix from [references/selection-schema.md](references/selection-schema.md).
3. Exclude events that are only preferences, trivia, personality labels, private backstory, duplicate tests, or situations with no meaningful player agency.
4. Assign eligible events to stages. Increase intimacy, ambiguity, consequence, and repair difficulty gradually; do not treat chronology alone as progression.
5. Select the formal sequence. Satisfy stage quotas, feature/conflict coverage, tonal variety, and pacing. Avoid adjacent events that test the same underlying decision.
6. Reserve alternates for each weakly covered feature, conflict family, or stage so later balance work can swap scenes without restarting research.
7. Produce a handoff containing the locked order, selection rationale, coverage summary, excluded-event reasons, alternates, open risks, complete source traceability, and a selection change log.
8. When a repository profile defines a machine-readable formal-sequence registry, write the same locked rows to that route and treat it as the downstream ID universe; Markdown remains the human-readable rationale.

## Decision rules

- Prefer observable interaction over abstract type descriptions.
- Prefer scenes that distinguish at least two plausible approaches, not one obvious correct answer plus decoys.
- Use several scenes to express a recurring feature; do not force one scene to carry the entire model.
- Separate representativeness from playability. A well-sourced stereotype may still be a poor choice-game scene.
- Keep formal scenes independent enough that later writers can change wording without changing what is being tested.
- Document judgment calls and uncertainties instead of silently presenting them as evidence.

## Locked sequence and changes

`locked` means a controlled baseline for downstream writing and balance work, not an irreversible decision. Keep `scene_id` stable while its selected meaning is unchanged. When a replacement is necessary, use a new `scene_id`, retain the prior row, and log the old and new candidate IDs, reason, evidence/coverage impact, and downstream work required. Do not silently reuse a scene ID for a different test.

## Stage boundary

Do not write final dialogue, answer choices, score deltas, immediate feedback, fuzzy hints, ending copy, or thresholds. You may state the decision pressure and desired discriminating behavior only.

## Acceptance checks

- Formal count and stage allocation match the brief.
- Each scene has one primary test and any secondary tests are explicit.
- Coverage gaps and deliberate overrepresentation are explained.
- Similar conflict types are not unintentionally clustered.
- The sequence shows a defensible progression in stakes.
- Every formal scene retains its candidate, behavior, feature, source, conflict, and state IDs.
- Stable IDs, evidence references, and a change log survive into the handoff.
- Any profile-required formal-sequence registry contains exactly the selected scenes and their complete upstream ID sets.
