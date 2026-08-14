---
name: 04-write-choice-game-questions
description: Turn a locked scenario sequence into complete interactive choice questions whose options change state without selecting endings directly, with concrete context, NPC behavior, differentiated strategies, budgeted multidimensional effects, continuation-compatible reactions, fuzzy hints, references, and tags. Use as stage 04 after scenario curation and before ending design or exhaustive path balancing.
---

# 04 Write Choice Game Questions

## Overview

Write playable questions without losing the behavioral model or making the scoring visible as design jargon. Treat all initial effect values as hypotheses until exhaustive path analysis validates them.

Consume the locked sequence from `$03-curate-choice-game-scenarios` and pass complete question records plus preliminary mechanics to `$05-design-choice-game-endings`.


## Required inputs

Collect or confirm:

- the locked formal scene order and stage allocation;
- feature, conflict, and evidence mappings;
- the canonical runtime question schema, data source, validator, and target-character output route when they already exist;
- state dimensions, initial values, bounds/clamping, legal effect values, and stage checkpoints;
- the option-effect budget, severe-behavior criteria, and any analyzer warnings required by the project;
- the approved feedback-key dictionary or deterministic rule that maps effects to feedback keys;
- content boundaries and voice guidelines;
- any approved strategy taxonomy;

Read [references/question-schema.md](references/question-schema.md) before drafting structured output.

If the repository provides `.codex/choice-game-process-profile.md`, read it before resolving artifact paths, runtime field mappings, mechanics ownership, or validation commands. The profile may narrow this reusable contract but cannot remove traceability or stage boundaries.

## Runtime integration

Treat an existing production schema and rule module as authoritative. Map the semantic fields in the reference schema to the real runtime fields before drafting, and preserve any design-only fields in a companion traceability record keyed by the exact runtime question and option IDs. Do not leave Markdown as the only output when the task requires production content.

When a repository profile defines a companion JSON route, validate its one-to-one question binding with the bundled script:

```powershell
node scripts/validate-question-traceability.mjs <path-to-traceability.json> <path-to-question-module> <path-to-formal-sequence.json>
```

Keep answer count separate from strategy taxonomy: four displayed choices do not imply that the whole project has only four legal strategy tags.

## Draft each question

1. Preserve stable question and scene IDs, order, stage, source references, and mapped features.
2. Establish a concrete time, place, trigger, and observable NPC action. Express the modeled trait through behavior or dialogue rather than labels.
3. Ask one clear player-facing decision question.
4. Write the required number of choices. Make each choice an action the player could actually take now.
5. Differentiate choices by approach, such as accommodating, asserting, negotiating, or risk-taking, but adapt the behavior to the scene and shuffle positions across the set.
6. Assign preliminary multidimensional effects using only legal values and the production apply/clamp semantics. Keep ordinary choices within the recommended total absolute-change budget, reserve the largest magnitudes for narratively severe behavior, and record design rationale separately from player-facing copy.
7. Write the immediate NPC response so it explains the social consequence through reaction, tone, or follow-up action. A severe option may devastate trust or worsen the relationship, but do not claim permanent departure, permanent silence, or immediate story termination unless the canonical rule system actually ends at that checkpoint.
8. Reference fuzzy state-change keys from the approved feedback contract. If no contract exists, define and approve its dimensions, direction, intensity bands, and zero-change behavior before continuing; do not invent keys that stage 05 must later reinterpret.

## Whole-set pass

- Verify stakes and intimacy rise with the planned stages.
- Check that strategy families do not occupy a fixed answer position.
- Ensure each question has at least two psychologically credible choices.
- Remove options that differ only in wording but produce the same action.
- Check every effect key and magnitude against the state contract.
- Check each option's sum of absolute changes and the number of dimensions at high magnitude. Treat over-budget ordinary choices and diffuse multi-axis punishment as review findings, not opportunities to change the behavior's meaning silently.
- Give severe behaviors one clear primary direction: privacy or trust violations primarily reduce trust; pressure or discomfort primarily reduces comfort; arguments, humiliation, or retaliation primarily increase conflict. Avoid simultaneously applying maximum trust and comfort losses merely to make an option dangerous.
- Check every feedback key against the approved dictionary and its effect-to-direction/intensity rule.
- Check feature, conflict, and evidence traceability.
- Flag values that are speculative or likely to create a dominant strategy.
- If production data was written, run the project validator and retain the companion traceability mapping for fields the runtime does not store.
- Validate that every runtime question has exactly one companion record, its order and stage match the Stage-03 scene registry, every companion state ID exists in the runtime effects contract, and every upstream ID set exactly matches its Stage-03 scene registry entry.

## Humanization pass

After the structured draft is stable, humanize only the player-facing text:

- replace abstract design terms with concrete speech, gesture, timing, and consequence;
- vary sentence rhythm and avoid repetitive option templates;
- keep responses concise enough for the game surface;
- preserve IDs, order, effects, mappings, and rule semantics exactly;
- re-run a field-level diff after rewriting.

## Writing constraints

- Do not diagnose the NPC or use a type label as an excuse for harm.
- Distinguish intention from impact in feedback.
- Do not make the most polite-sounding choice automatically optimal.
- Do not hide coercion, humiliation, threats, or abandonment inside playful wording.
- Do not attach an ending selector, ending ID, or story-stop tag to an option. Choices change state; canonical global rules, stage gates, and the final classifier decide outcomes.
- Keep author notes out of player-facing fields.

## Acceptance checks

- Every record conforms to the schema and uses stable IDs.
- Semantic fields are mapped to the canonical runtime schema, or a clearly labeled non-runtime draft is produced without overwriting another character's data.
- Every option is immediately actionable and meaningfully distinct.
- Effects are legal, multidimensional, and justified.
- No option exceeds a hard total absolute-change cap; warnings above the ordinary budget or across too many high-magnitude dimensions are reviewed and explained.
- Options contain no direct-ending field, and severe responses remain narratively compatible with continued play when no canonical ending rule fires.
- Immediate responses and fuzzy hints agree with the effects.
- Strategy positions vary across the set.
- Humanization changed no mechanics or traceability fields.
- The handoff clearly labels scores as preliminary pending path balance.
- Existing project validation passes after production changes.
