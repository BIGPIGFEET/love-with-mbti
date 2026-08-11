export const STAGE_IDS = ["first_meeting", "contact", "familiarity", "ambiguity"] as const;
export const STRATEGY_IDS = ["accommodate", "honest", "negotiate", "risky", "confront"] as const;
export const RELATION_KEYS = ["attraction", "trust", "comfort", "conflict"] as const;
export const ALLOWED_EFFECT_VALUES = [-20, -15, -10, -5, 0, 5, 10, 15, 20] as const;

export type StageId = (typeof STAGE_IDS)[number];
export type StrategyId = (typeof STRATEGY_IDS)[number];
export type RelationKey = (typeof RELATION_KEYS)[number];
export type EffectValue = (typeof ALLOWED_EFFECT_VALUES)[number];
export type FuzzyFeedbackId = `${RelationKey}_${"up" | "down"}_${"slight" | "medium" | "strong"}`;

export type RelationState = Record<RelationKey, number>;
export type RelationEffects = Record<RelationKey, EffectValue>;

export interface QuestionOption {
  readonly id: string;
  readonly strategy: StrategyId;
  readonly strategyLabel: string;
  readonly text: string;
  readonly effects: RelationEffects;
  readonly npcResponse: string;
  readonly feedbackIds: readonly FuzzyFeedbackId[];
  readonly feedbackText: readonly string[];
  readonly terminalEndingId?: "blocked_immediately";
}

export interface Question {
  readonly id: string;
  readonly order: number;
  readonly stage: StageId;
  readonly title: string;
  readonly scene: string;
  readonly npcQuote: string;
  readonly prompt: string;
  readonly conflictDimensions: readonly string[];
  readonly researchRefs: readonly string[];
  readonly tags: readonly string[];
  readonly designNote: string;
  readonly options: readonly QuestionOption[];
}

export const ENDING_IDS = [
  "blocked_immediately",
  "conflict_break",
  "strong_discomfort",
  "trust_broken",
  "no_second_meeting",
  "fade_out",
  "stay_acquaintances",
  "strangers_after_all",
  "confirmed_relationship",
  "dangerous_lovers",
  "friends",
  "unresolved_ambiguity",
] as const;

export const RELATIONSHIP_EVALUATION_IDS = ["romance_stable", "romance_hidden_risk"] as const;

export type EndingId = (typeof ENDING_IDS)[number];
export type RelationshipEvaluationId = (typeof RELATIONSHIP_EVALUATION_IDS)[number];
export type EndingKind = "scripted" | "global" | "stage_gate" | "final";

export interface EndingContent {
  id: EndingId;
  kind: EndingKind;
  title: string;
  coreCopy: string;
  reasonCopy: string;
  stateSummary: string;
}

export interface RelationshipEvaluationContent {
  id: RelationshipEvaluationId;
  title: string;
  copy: string;
  badge: string;
}

export interface FuzzyFeedbackContent {
  id: FuzzyFeedbackId;
  dimension: RelationKey;
  direction: "up" | "down";
  strength: "slight" | "medium" | "strong";
  text: string;
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertUnique(values: string[], label: string): void {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  assert(duplicates.length === 0, `${label} 存在重复 ID：${[...new Set(duplicates)].join(", ")}`);
}

function expectedStage(order: number): StageId {
  if (order <= 2) return "first_meeting";
  if (order <= 5) return "contact";
  if (order <= 8) return "familiarity";
  return "ambiguity";
}

export function validateContent(input: {
  questions: readonly Question[];
  endings: readonly EndingContent[];
  relationshipEvaluations: readonly RelationshipEvaluationContent[];
  fuzzyFeedback: readonly FuzzyFeedbackContent[];
}): void {
  const { questions, endings, relationshipEvaluations, fuzzyFeedback } = input;
  const allowedEffects = new Set<number>(ALLOWED_EFFECT_VALUES);
  const endingIds = new Set<string>(ENDING_IDS);
  const strategyIds = new Set<string>(STRATEGY_IDS);
  const evaluationIds = new Set<string>(RELATIONSHIP_EVALUATION_IDS);
  const feedbackIds = new Set<string>(fuzzyFeedback.map((item) => item.id));

  assert(questions.length === 10, `正式题目必须恰好为 10 道，当前为 ${questions.length} 道`);
  assertUnique(questions.map((question) => question.id), "题目");
  assertUnique(questions.flatMap((question) => question.options.map((option) => option.id)), "选项");
  assertUnique(endings.map((ending) => ending.id), "结局");
  assertUnique(relationshipEvaluations.map((evaluation) => evaluation.id), "关系评价");
  assertUnique(fuzzyFeedback.map((item) => item.id), "模糊提示");

  assert(
    endings.length === ENDING_IDS.length && endings.every((ending) => endingIds.has(ending.id)),
    "结局数据必须完整覆盖全部稳定结局 ID",
  );
  assert(
    relationshipEvaluations.length === RELATIONSHIP_EVALUATION_IDS.length &&
      relationshipEvaluations.every((evaluation) => evaluationIds.has(evaluation.id)),
    "关系评价数据不完整",
  );

  questions.forEach((question, index) => {
    const expectedOrder = index + 1;
    assert(question.order === expectedOrder, `${question.id} 的 order 应为 ${expectedOrder}`);
    assert(question.id === `Q${String(expectedOrder).padStart(2, "0")}`, `题目 ID 与顺序不一致：${question.id}`);
    assert(question.stage === expectedStage(question.order), `${question.id} 的阶段与 2/3/3/2 顺序不一致`);
    assert(question.options.length === 4, `${question.id} 必须恰好有 4 个选项`);
    assert(question.scene.trim().length > 0, `${question.id} 缺少场景描述`);
    assert(question.npcQuote.trim().length > 0, `${question.id} 缺少 TA 原话`);
    assert(question.conflictDimensions.length > 0, `${question.id} 缺少冲突维度`);
    assert(question.researchRefs.length > 0, `${question.id} 缺少研究来源`);
    assert(question.tags.length > 0, `${question.id} 缺少内容标签`);

    question.options.forEach((option) => {
      assert(option.id.startsWith(`q${String(question.order).padStart(2, "0")}_`), `${option.id} 未使用所属题目的 ID 前缀`);
      assert(strategyIds.has(option.strategy), `${option.id} 使用了不存在的策略 ID：${option.strategy}`);
      RELATION_KEYS.forEach((key) => {
        assert(key in option.effects, `${option.id} 缺少 ${key} 数值`);
        assert(allowedEffects.has(option.effects[key]), `${option.id}.${key} 使用了非法变化值 ${option.effects[key]}`);
      });
      assert(option.feedbackIds.length > 0 && option.feedbackIds.length <= 2, `${option.id} 应引用 1～2 个模糊提示 ID`);
      assert(option.feedbackText.length > 0 && option.feedbackText.length <= 2, `${option.id} 应包含 1～2 条模糊提示文案`);
      assertUnique([...option.feedbackIds], `${option.id} 的模糊提示`);
      option.feedbackIds.forEach((feedbackId) => {
        assert(feedbackIds.has(feedbackId), `${option.id} 引用了不存在的提示 ID：${feedbackId}`);
        const [dimension, direction, strength] = feedbackId.split("_") as [
          RelationKey,
          "up" | "down",
          "slight" | "medium" | "strong",
        ];
        const effect = option.effects[dimension];
        const expectedDirection = effect > 0 ? "up" : "down";
        const expectedStrength = Math.abs(effect) === 5 ? "slight" : Math.abs(effect) === 10 ? "medium" : "strong";
        assert(effect !== 0, `${option.id} 的 ${feedbackId} 对应维度没有数值变化`);
        assert(direction === expectedDirection, `${option.id} 的 ${feedbackId} 方向与数值变化不一致`);
        assert(strength === expectedStrength, `${option.id} 的 ${feedbackId} 强度与数值变化不一致`);
      });
      if (option.terminalEndingId) {
        assert(option.terminalEndingId === "blocked_immediately", `${option.id} 使用了不允许的剧情指定结局`);
      }
    });
  });

  const terminalOptions = questions.flatMap((question) => question.options).filter((option) => option.terminalEndingId);
  assert(
    terminalOptions.length === 1 && terminalOptions[0]?.id === "q04_expose_in_return",
    "第一版只能由 q04_expose_in_return 触发剧情指定结束",
  );
}
