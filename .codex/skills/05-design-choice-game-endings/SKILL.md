---
name: 05-design-choice-game-endings
description: Design an exhaustive catalog of global-danger, stage-gate, and final-classifier endings without option-authored direct results, plus relationship-state feedback, stable IDs, evaluation priority, trigger rules, copy, actions, and traceability. Use as stage 05 after questions and preliminary state rules exist and before exhaustive path balancing.
---

# 05 Design Choice Game Endings

## Overview

Make every possible exit path intentional and explainable before attempting numerical balance. Separate rule identity from display copy so tuning thresholds does not break content references.

Consume the questions and preliminary mechanics from `$04-write-choice-game-questions` and pass the complete rule/ending contract to `$06-balance-choice-game-paths`.


## Required inputs

Collect or confirm:

- state dimensions and their meanings;
- whether this run is defining shared mechanics for the first time or binding a new content set to existing mechanics;
- the canonical rule implementation, result types, and rule evaluation order when they already exist;
- global thresholds and stage-gate checks;
- final ending classifiers and tie-break rules;
- the approved feedback-key semantics created before or during stage 04;
- the target MBTI's approved behavior model, established characterization, and evidence boundaries;
- desired voice, content boundaries, and restart behavior.

Read [references/ending-schema.md](references/ending-schema.md) before producing the catalog.

If the repository provides `.codex/choice-game-process-profile.md`, read it before choosing the mechanics mode, resolving canonical files, projecting semantic fields, or running validators. The profile may narrow this reusable contract but cannot authorize silent mechanics changes.

## Mechanics ownership

Use one of three explicit modes:

- **establish mode**: create shared state, threshold, precedence, result, and feedback contracts because the project does not have them yet;
- **reuse mode**: reuse the existing contracts and add only the ending content or target-specific presentation that the project permits;
- **migrate mode**: intentionally change shared mechanics under separately approved migration scope and regression checks.

Default to reuse mode whenever production rules exist. Changing a shared threshold, precedence rule, state direction, or stable result ID requires migrate mode and must not be smuggled into ending-copy work.

## Workflow

1. Inventory every ending family in exact runtime order: global thresholds after each choice, stage gates at their declared checkpoints, the final classifier, and any secondary classification. In reuse mode, derive this inventory from the real rule implementation rather than rewriting it from prose.
2. Assign stable rule IDs and ending IDs. Keep them distinct from titles and prose.
   If the runtime has no stable rule IDs, label companion IDs as audit-only. Do not claim they are executable runtime IDs or declare them to path analysis until the runtime exposes a matching identifier.
3. State precedence and tie-break behavior when multiple conditions are true after the same choice.
4. Create one ending record for every declared rule result, including results whose reachability is still unknown. Include title, core copy, specific reason, state summary policy, actions, tone, content notes, and the approved characterization basis used for MBTI-specific wording.
5. Draft the player-facing title so it identifies the resulting relationship state without relying on the body copy. For Chinese titles, use 4–8 Chinese characters. Literary phrasing may add tone, but it must not replace or obscure the outcome.
6. Tailor the title and ending copy to the target MBTI's approved behavior model and established in-game characterization. Preserve the stable ending semantics across types; do not infer copy from the four-letter label alone or from unsupported stereotypes.
7. Write the reason as a consequence of the interaction history, not a personality diagnosis.
8. Verify fuzzy feedback coverage for each state dimension, direction, and supported intensity. In reuse mode, preserve the approved keys and semantics; fill missing player-facing copy without silently changing direction or intensity rules.
9. Connect checkpoints, runtime rules, endings, and feedback keys in a traceability matrix.
10. Run a completeness review before balance work. Mark endings whose reachability is unknown rather than assuming they can occur.

## Copy principles

- Make the player-facing title directly communicate the current outcome, such as separation, fading contact, acquaintanceship, friendship, unresolved ambiguity, unstable romance, or confirmed romance.
- For Chinese player-facing content, keep the title to 4–8 Chinese characters. Apply a title-only test: a player who has not read the body copy should still be able to identify the relationship state.
- Literary imagery and target-specific voice are welcome only when the outcome remains immediately legible. Do not use an atmospheric metaphor as the sole carrier of meaning.
- Adapt titles, imagery, dialogue, and emotional emphasis to the target MBTI through its approved behavior model and the interactions established by the questions. Avoid generic type slogans, unsupported clichés, and personality diagnosis.
- Titles for the same stable ending across different MBTI targets may differ, and should avoid mechanical duplication when a clear target-specific phrasing is available. They must still describe the same canonical result.
- Explain the outcome without revealing implementation formulas.
- Name concrete patterns in the player's choices.
- Distinguish benevolent intent from harmful effect.
- Use firm language for coercion, contempt, threats, humiliation, or abandonment.
- Keep low-intensity outcomes proportionate; do not make every failure catastrophic.
- Give final endings a distinct emotional and narrative shape, not only different titles.

## Rule principles

- Let options change state only. Never make one option directly select an ending; route every result through the canonical global rules, stage gates, and final classifier.
- Evaluate higher-priority ending rules once and stop unless the product explicitly supports layered endings.
- Define whether thresholds are inclusive or exclusive.
- Define stage gates by exact checkpoint and state snapshot.
- Make final tie-break order explicit and deterministic.
- Never reuse an ending ID for changed semantics.
- For Love with MBTI, ending kinds are limited to `global`, `stage_gate`, and `final`; do not create a separate kind for option-authored endings.

## Acceptance checks

- Every rule result maps to exactly one ending ID.
- Every stable ending is reachable through a canonical rule or explicitly marked for removal/migration; no stable catalog entry exists solely because an option names it.
- Secondary classifiers such as evaluation IDs are represented in a stable outcome ID and never collapsed accidentally.
- Every ending ID has complete player-facing content and actions.
- Every Chinese player-facing title contains 4–8 Chinese characters and passes the title-only relationship-state test.
- Every target-specific title and copy records its approved MBTI behavior-model or question-interaction basis, preserves canonical ending semantics, and avoids unsupported stereotypes.
- Evaluation order matches the runtime contract.
- Fuzzy hints cover every legal dimension, direction, and intensity.
- Conflict-like dimensions use correct inverse semantics.
- Unknown or unreachable endings are visibly flagged for path analysis.
- In reuse mode, shared mechanics are unchanged and the project validator passes.
