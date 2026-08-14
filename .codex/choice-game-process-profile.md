# Love with MBTI choice-game process profile

This repository profile narrows the reusable `01`–`06` choice-game Skills. Read it before producing or changing project artifacts. It may add project constraints but never relax a Skill's evidence, traceability, stage-boundary, or validation requirements.

## Canonical project sources

- `src/content/schema.ts`: runtime content types, stable vocabularies, and structural validation.
- `src/content/questions.ts`: current ENTP runtime question data.
- `src/content/endings.ts`: current runtime ending, evaluation, and fuzzy-feedback content.
- `src/game/rules.ts`: shared state initialization, clamping, stage thresholds, rule precedence, and ending resolution.
- `scripts/validate-content.mjs`: required structural validation after production content changes.
- `scripts/analyze-question-paths.mjs`: current production-equivalent ENTP path analysis.

TypeScript runtime data is authoritative. Markdown under `docs/` and `content/` is a design, research, audit, or handoff artifact; the application must not parse it as production content.

## Artifact routes

- Stage 01 research: `docs/research/<type>-stereotype-data.md`.
- Stage 02 model: `content/<type>-behavior-model.md`; candidate events: `content/scenes/<type>-candidate-scenes.md` for new types.
- Stage 03 formal selection: a target-specific design file under `content/scenes/` plus `content/traceability/<type>-formal-sequence.json` as the machine-readable selected-scene registry.
- Stages 04–05 design drafts and balance reports: target-specific files under `content/questions/` and `content/endings/`.
- Production content for a new MBTI type requires an explicit runtime routing/schema implementation. Do not overwrite the ENTP exports in `src/content/questions.ts` or `src/content/endings.ts` to make another type appear complete.

## Existing-artifact status

The current INFP research, behavior model, and candidate-scene files predate the closed 01–03 contracts. Treat them as legacy inputs, not accepted handoffs: stage 01 must classify mixed source rows as `evidence_source`, `surface_record`, or `lead`; stage 02 must add stable behavior IDs and direct feature/source links; stage 03 must carry the full candidate-to-scene traceability set. Preserve existing IDs where their meaning is unchanged. Do not begin stage 04 for INFP until these migrations pass the corresponding stage audits.

## Runtime projection

Map reusable stage-04 semantics to the current runtime as follows:

| Semantic field | Runtime field |
|---|---|
| `question_id` | `Question.id` |
| `order` / `stage` / `prompt` / `options` | same semantic fields on `Question` |
| `setup` | `Question.scene` |
| `npc_behavior` | `Question.npcQuote` |
| conflict IDs | `Question.conflictDimensions` |
| evidence/source IDs | `Question.researchRefs` |
| design rationale | `Question.designNote` |
| `option_id`, strategy, text, effects | corresponding `QuestionOption` fields |
| `immediate_response` | `QuestionOption.npcResponse` |
| fuzzy hint keys and copy | `QuestionOption.feedbackIds` and `feedbackText` |

The runtime does not currently store `scene_id`, candidate IDs, behavior IDs, feature IDs, or state IDs. Stage 03 must preserve the selected sequence in `content/traceability/<type>-formal-sequence.json`; stage 04 must preserve the runtime projection in `content/traceability/<type>-question-traceability.json`, keyed by the exact runtime question ID. Never join by display order alone.

Each formal-sequence record must contain the Stage-03 `order`, `stage`, `scene_id`, `candidate_id`, `behavior_ids`, `feature_ids`, `source_ids`, `conflict_ids`, and `state_ids`. These fields form the authoritative selected-scene registry for downstream reference validation. The validator must confirm that each scene projects to a runtime question with the same order and stage as well as the same upstream ID sets.

Each record must contain:

```json
{
  "question_id": "Q01",
  "order": 1,
  "stage": "first_meeting",
  "scene_id": "scene_example",
  "candidate_id": "candidate_example",
  "behavior_ids": ["behavior_example"],
  "feature_ids": ["feature_example"],
  "source_ids": ["source_example"],
  "conflict_ids": ["conflict_example"],
  "state_ids": ["attraction", "trust", "comfort", "conflict"]
}
```

Every production question must have exactly one record, and no companion record may reference a missing runtime question or disagree with its Stage-03 scene registry entry. Run the stage-04 bundled validator after production projection:

```powershell
node scripts/validate-question-traceability.mjs <question-traceability.json> <questions-module> <formal-sequence.json>
```

## Shared mechanics ownership

Stage 05 defaults to `reuse` mode. Do not change `INITIAL_STATE`, clamping, `STAGE_THRESHOLDS`, rule precedence, stable ending IDs, state directions, legal effects, strategy vocabulary, or fuzzy-key semantics while adding a target type. Such changes require a separately approved mechanics migration with regression analysis across every playable type.

`src/game/rules.ts` does not currently expose stable runtime rule IDs. Stage 05 may assign clearly prefixed audit-only IDs in its documentation, but must not present them as runtime IDs or export them as Skill-06 `expectedRuleIds`. Rule coverage and shadowing remain unknown until the runtime exposes stable IDs and an applicable-rule diagnostic hook.

Preserve the runtime's base `endingId` plus optional `evaluationId`; path analysis should use the full outcome key without losing the base ending.

## Required validation

After production content or shared mechanics changes, run:

```powershell
node scripts/validate-content.mjs
node scripts/analyze-question-paths.mjs
npm test -- --run
npm run build
```

For Skill 06, use `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-adapter.mjs`. It imports real question data and calls the real `applyEffects` and `resolveEnding`; do not replace it with copied thresholds or effects. Until `src/game/rules.ts` exposes stable rule IDs or a diagnostic hook, declare expected base endings and full outcomes but leave rule coverage and shadowing explicitly unknown.

Preserve both path-distribution views in reports: truncated terminal-trajectory percentages treat every observed terminal leaf equally, while weighted-path percentages preserve the equivalent complete choice space and match equal-probability choices at each question. Label both explicitly; do not present terminal-leaf share as player probability.
