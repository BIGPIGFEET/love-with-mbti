---
name: 05-design-choice-game-endings
description: Create complete target-specific ending, relationship-evaluation, and fuzzy-feedback copy for a choice game's fixed canonical outcomes and rules. Use as stage 05 after questions exist and before exhaustive path balancing; do not use it to create or change mechanics.
---

# 05 Write Choice Game Ending Content

## Overview

Create complete, target-specific player-facing content for every result already declared by the canonical runtime schema and fixed ending resolver. Treat rule order, thresholds, state semantics, stable IDs, secondary classifiers, and fuzzy-feedback keys as read-only inputs.

Consume the questions from `$04-write-choice-game-questions` and pass complete ending and feedback content to `$06-balance-choice-game-paths` for reachability and distribution analysis.

## Required inputs

Collect or confirm:

- the canonical runtime ending implementation and result types;
- the fixed base ending IDs, ending kinds, secondary evaluation IDs, and evaluation order;
- the approved fuzzy-feedback key dictionary and direction/intensity semantics;
- the target MBTI's approved behavior model, established characterization, and evidence boundaries;
- the completed question interactions that the ending copy may reference;
- desired voice, content boundaries, state-summary policy, and restart behavior;
- the canonical production ending module, structural validator, and target content-pack route.

Read [references/ending-schema.md](references/ending-schema.md) before producing content.

If the repository provides `.codex/choice-game-process-profile.md`, read it before resolving canonical files, target routes, runtime field mappings, or validation commands. The profile may narrow this reusable content contract but cannot authorize mechanics changes.

## Output contract

Persist both the target-specific audit handoff and the canonical runtime ending content. A chat response, Markdown-only draft, or executable rule copy does not complete this stage.

- For Love with MBTI, write or update `content/endings/<type>-endings-and-feedback.md` and `src/content/<type>-endings.ts`, using a lowercase type token in both filenames. Add any companion traceability artifact required by the repository profile rather than inventing a parallel route.
- The Markdown file must contain the complete ending/evaluation coverage matrix, target-specific characterization basis, fuzzy-feedback coverage, content or sensitivity notes, and a clear Stage-06 reachability handoff. It may reference canonical rules but must not redefine them.
- The TypeScript module is the authoritative production source for ending copy, relationship-evaluation copy, and fuzzy-feedback copy. It must export the target-specific collections and be registered through `src/content/packs.ts` when the target is playable.
- JSON or MJS drafts are optional audit or migration projections and must never be imported as production ending content.
- Do not report Stage 05 complete until every canonical base ending, secondary evaluation, and fuzzy-feedback key has exactly the required target content in the TypeScript module, the Markdown audit agrees with the fixed ID vocabulary, structural validation passes, and the acceptance checks below pass. Reachability remains pending until Stage 06.

## Fixed-mechanics boundary

Stage 05 writes content only. Do not create, tune, migrate, or reinterpret:

- initial state, clamping, state directions, or legal effect values;
- global-danger thresholds, stage-gate thresholds, checkpoints, or inclusivity;
- rule precedence, final classifiers, or tie-break behavior;
- stable ending IDs, ending kinds, or secondary evaluation IDs;
- strategy vocabulary or fuzzy-feedback key semantics.

Read these contracts from the canonical implementation. If they are missing or the requested content cannot be represented by them, stop and report the mechanics dependency as a separate task; do not solve it inside Stage 05.

## Workflow

1. Read the canonical schema and resolver and inventory every fixed base ending, ending kind, and secondary evaluation result in exact runtime order. Use this inventory only as a content-coverage checklist; do not reproduce an executable rule system in documentation.
2. Map every fixed base ending and secondary evaluation to the target's production content fields and any companion audit fields required by the repository profile.
3. Create complete player-facing content for every fixed result. Include the title, core copy, specific reason, state summary, and any product-supported actions, tone, content notes, and characterization basis.
4. Draft each title so it identifies the resulting relationship state without relying on body copy. For Chinese titles, use 4–8 Chinese characters. Literary phrasing may add tone, but it must not obscure the outcome.
5. Tailor titles and copy to the target MBTI's approved behavior model and established in-game interactions. Preserve the fixed outcome semantics across types; do not infer copy from the four-letter label alone or from unsupported stereotypes.
6. Write reasons as consequences of the interaction history, not as personality diagnoses. Refer to concrete patterns or triggering acts that the questions can actually produce.
7. Fill the player-facing fuzzy-feedback copy for every fixed key. Preserve each key's dimension, raw direction, and intensity; for conflict-like dimensions, verify the inverse player meaning explicitly.
8. Preserve the base `endingId` and any secondary `evaluationId` separately. Never collapse complete outcomes such as stable and hidden-risk relationship evaluations into one content record.
9. Write the target's inline TypeScript ending content and any required companion audit matrix. Do not leave Markdown or JSON as the production source.
10. Run structural validation and hand the unchanged production rules plus completed content to Stage 06. Stage 06, not Stage 05, determines reachability and balance.

## Copy principles

- Make the player-facing title directly communicate the current outcome, such as separation, fading contact, acquaintanceship, friendship, unresolved ambiguity, unstable romance, or confirmed romance.
- For Chinese player-facing content, keep the title to 4–8 Chinese characters. A player who has not read the body copy should still recognize the relationship state.
- Literary imagery and target-specific voice are welcome only when the outcome remains immediately legible. Do not use an atmospheric metaphor as the sole carrier of meaning.
- Adapt titles, imagery, dialogue, and emotional emphasis through the approved behavior model and established question interactions. Avoid generic type slogans, unsupported clichés, and personality diagnosis.
- Titles for the same stable ending may differ across MBTI targets, but every variant must describe the same canonical result.
- Explain the outcome without revealing implementation formulas.
- Name concrete patterns in the player's choices.
- Distinguish benevolent intent from harmful effect.
- Use firm language for coercion, contempt, threats, humiliation, or abandonment.
- Keep low-intensity outcomes proportionate; do not make every failure catastrophic.
- Give final endings a distinct emotional and narrative shape, not only different titles.

## Acceptance checks

- Every canonical base ending ID has exactly one complete target-specific content record with the fixed ending kind.
- Every canonical secondary evaluation ID has complete content and remains distinct in the full outcome key.
- No extra, missing, renamed, or repurposed ending or evaluation IDs exist.
- Every Chinese player-facing title contains 4–8 Chinese characters and passes the title-only relationship-state test.
- Every target-specific title and copy records its approved behavior-model or question-interaction basis, preserves canonical outcome semantics, and avoids unsupported stereotypes.
- Every fixed fuzzy-feedback key has copy whose dimension, direction, and intensity match the canonical dictionary.
- Conflict-like dimensions use correct inverse player meaning.
- Options contain no direct-ending selector; all content remains bound to canonical resolver results.
- Production content is inline TypeScript and the target is registered through the canonical content-pack route.
- Shared mechanics and fixed ID vocabularies are unchanged.
- The project structural validator passes, and reachability is explicitly handed to Stage 06 rather than guessed or repaired in Stage 05.
