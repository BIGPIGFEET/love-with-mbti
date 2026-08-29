# Love with MBTI choice-game process profile

This repository profile narrows the reusable `01`–`06` choice-game Skills. Read it before producing or changing project artifacts. It may add project constraints but never relax a Skill's evidence, traceability, stage-boundary, or validation requirements.

## Playable types

The production application currently ships eight content packs:

- `INTJ`
- `ENTJ`
- `ENTP`
- `ENFP`
- `INTP`
- `INFJ`
- `INFP`
- `ISFP`

`src/content/content-pack.ts` declares the available type vocabulary, and `src/content/packs.ts` is the canonical registry that binds every playable type to its production questions, endings, relationship evaluations, and fuzzy feedback.

## Canonical project sources

- `src/content/schema.ts`: runtime content types, stable vocabularies, and structural validation.
- `src/content/content-pack.ts`: the eight playable MBTI type IDs and content-pack interface.
- `src/content/packs.ts`: the canonical registry for all eight production content packs.
- `src/content/questions.ts` and `src/content/endings.ts`: ENTP production content.
- `src/content/<type>-questions.ts` and `src/content/<type>-endings.ts`: production content for the other seven types.
- `src/game/rules.ts`: fixed shared state initialization, clamping, stage thresholds, rule precedence, and ending resolution.
- `scripts/validate-content.mjs`: required structural validation for all eight production packs.
- `scripts/analyze-question-paths.mjs`: production-equivalent exhaustive path analysis for all eight production packs.

Inline TypeScript modules under `src/content/` are authoritative for production content. JSON, MJS, and Markdown under `docs/` and `content/` are research, design, audit, migration, or handoff artifacts; the application must not import them as production question or ending data.

## Artifact routes

- Stage 01 research: `docs/research/<type>-stereotype-data.md`.
- Stage 02 model: `content/<type>-behavior-model.md`; candidate events: `content/scenes/<type>-candidate-scenes.md`.
- Stage 03 formal selection: a target-specific design file under `content/scenes/` plus `content/traceability/<type>-formal-sequence.json` as the machine-readable selected-scene registry.
- Stage 04 question drafts and balance handoff material: target-specific files under `content/questions/`.
- Stage 05 ending-copy drafts and audit material: target-specific files under `content/endings/` and `content/traceability/`.
- Stage 06 reports: `content/questions/<type>-balance-report.json` and `content/questions/<type>-balance-report.md`; the existing ENTP report retains its legacy basename `balance-report`.
- Production content: inline TypeScript in the target-specific `src/content/*-questions.ts` and `src/content/*-endings.ts` modules registered by `src/content/packs.ts`.

## Existing-artifact status

All eight playable types have production question and ending content and have completed Stage-06 path analysis. Preserve the existing reports as the approved analysis handoff for their recorded source state. When a production question, effect, option order, shared rule, or ending classifier changes, regenerate the affected report; a shared-rule change requires rerunning all eight types.

Design and migration artifacts may retain older JSON, MJS, or Markdown projections for audit history. They are not production sources and must not be imported by the application.

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

The runtime does not currently store `scene_id`, candidate IDs, behavior IDs, feature IDs, or state IDs. Stage 03 preserves the selected sequence in `content/traceability/<type>-formal-sequence.json`; Stage 04 preserves the runtime projection in `content/traceability/<type>-question-traceability.json`, keyed by the exact runtime question ID. Never join by display order alone.

Each formal-sequence record must contain the Stage-03 `order`, `stage`, `scene_id`, `candidate_id`, `behavior_ids`, `feature_ids`, `source_ids`, `conflict_ids`, and `state_ids`. These fields form the authoritative selected-scene registry for downstream reference validation. The validator must confirm that each scene projects to a runtime question with the same order and stage and the same upstream ID sets.

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

Every production question must have exactly one companion record, and no companion record may reference a missing runtime question or disagree with its Stage-03 scene registry entry. Validate each target's Stage-03 and Stage-04 companion artifacts against its production TypeScript question module:

```powershell
node .codex/skills/04-write-choice-game-questions/scripts/validate-question-traceability.mjs <question-traceability.json> <questions-module> <formal-sequence.json>
```

## Fixed rules and Stage-05 ownership

Stage 05 is a content-writing stage. It reads the fixed contracts from `src/content/schema.ts` and `src/game/rules.ts`, then creates complete target-specific ending, relationship-evaluation, and fuzzy-feedback copy for every canonical result.

Stage 05 must not change `INITIAL_STATE`, clamping, `STAGE_THRESHOLDS`, global-danger thresholds, rule precedence, final classifiers, stable ending or evaluation IDs, state directions, legal effects, strategy vocabulary, or fuzzy-feedback key semantics. A request to change shared mechanics is outside Stage 05 and requires a separately scoped change plus regression analysis across all eight playable types.

`src/game/rules.ts` does not currently expose stable runtime rule IDs. Companion documents may use clearly prefixed audit-only labels, but must not present them as runtime IDs or export them as Skill-06 `expectedRuleIds`. Rule shadowing remains unknown until the runtime exposes stable IDs and an applicable-rule diagnostic hook.

Preserve the runtime's base `endingId` plus optional `evaluationId`; path analysis must use the complete outcome key without losing the base ending.

## Stage-06 coverage

The production-equivalent Stage-06 adapters cover all eight playable types:

| type | adapter |
|---|---|
| ENTP | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-adapter.mjs` |
| INTJ | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-intj-adapter.mjs` |
| ENTJ | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-entj-adapter.mjs` |
| ENFP | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-enfp-adapter.mjs` |
| INTP | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-intp-adapter.mjs` |
| INFJ | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-infj-adapter.mjs` |
| INFP | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-infp-adapter.mjs` |
| ISFP | `.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-isfp-adapter.mjs` |

Every adapter imports its target's inline production questions and calls the real `applyEffects` and `resolveEnding`. Do not replace production behavior with copied thresholds or adapter-only rules.

Preserve both path-distribution views in reports: truncated terminal-trajectory percentages treat every observed terminal leaf equally, while weighted-path percentages preserve the equivalent complete choice space and match equal-probability choices at each question. Label both explicitly; do not present terminal-leaf share as player probability.

## Required validation

After production content changes, run:

```powershell
node scripts/validate-content.mjs
node scripts/analyze-question-paths.mjs all
npm test -- --run
npm run build
```

After any shared mechanics change, the all-type path analysis is mandatory. Until `src/game/rules.ts` exposes stable rule IDs or a diagnostic hook, declare expected base endings and complete outcomes but leave rule coverage and shadowing explicitly unknown.
