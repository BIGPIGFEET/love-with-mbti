# ISFP 十题问题草案（Stage 04）

> 状态：Stage-06 平衡完成并已接入共享运行时；JSON 是 ISFP 题目的权威内容源。
> 权威题目记录：[isfp-ten-question-draft.json](isfp-ten-question-draft.json)。上游序列：[isfp-formal-sequence.md](../scenes/isfp-formal-sequence.md)。逐题追溯与选项理由：[isfp-question-traceability.json](../traceability/isfp-question-traceability.json)。

## 1. 运行时映射

| semantic field | runtime field / companion artifact | transformation |
|---|---|---|
| question_id / order / stage / prompt / options | `Question` 同名字段 | `id`、顺序、阶段和结构保持语义一致 |
| setup | `Question.scene` | 直接使用具体时间、地点和触发描述 |
| npc_behavior | `Question.npcQuote` | 由一句可观察台词承载 |
| conflict_ids | `Question.conflictDimensions` | 使用 ISFP Stage-02 冲突 ID |
| evidence_refs | `Question.researchRefs` | 使用 Stage-01 合格来源 ID |
| author_notes | `Question.designNote` | 保存阶段护栏和平衡说明 |
| option_id / strategy / text / effects | `QuestionOption` 对应字段 | 四项可立即执行的行动；策略位置跨题变化 |
| immediate_response | `QuestionOption.npcResponse` | 说明当下社会后果，不直接结束故事 |
| fuzzy_hints | `feedbackIds` + `feedbackText` | 复用现有四维、方向和强度字典 |
| scene_id / candidate_id / behavior_ids / feature_ids / source_ids / conflict_ids / state_ids | `isfp-question-traceability.json` | 以精确 `question_id` 连接 Stage-03 注册 |
| option rationale | `isfp-question-traceability.json.options` | 以精确 `option_id` 保存设计理由 |

## 2. 题目脊柱与策略位置

| 题目 | scene / candidate | primary test | 选项策略位置 1 → 4 |
|---|---|---|---|
| Q01 | ISFP-SC01 / ISFP-C01 | 具体体验与标签化期待 | honest / accommodate / negotiate / risky |
| Q02 | ISFP-SC02 / ISFP-C03 | 安静与披露节奏 | accommodate / honest / risky / negotiate |
| Q03 | ISFP-SC03 / ISFP-C05 | 行动表达与语言确认 | risky / negotiate / honest / accommodate |
| Q04 | ISFP-SC04 / ISFP-C07 | 当下体验与可靠安排 | honest / risky / negotiate / accommodate |
| Q05 | ISFP-SC05 / ISFP-C09 | 温和气氛与明确边界 | accommodate / negotiate / risky / honest |
| Q06 | ISFP-SC06 / ISFP-C08 | 支持方式互译 | negotiate / risky / accommodate / honest |
| Q07 | ISFP-SC07 / ISFP-C11 | 暂停与可预期回谈 | risky / honest / negotiate / accommodate |
| Q08 | ISFP-SC08 / ISFP-C14 | 隐私受损与具体修复 | negotiate / accommodate / honest / risky |
| Q09 | ISFP-SC09 / ISFP-C16 | 亲近与关系定义 | honest / negotiate / accommodate / risky |
| Q10 | ISFP-SC10 / ISFP-C18 | 回谈与长期修复 | honest / accommodate / risky / negotiate |

## 3. 选项与反馈 QA

- 所有选项均为玩家此刻可执行的具体行动，不含结局 ID、故事停止标记或阈值判断。
- 选项策略位置没有固定在同一列；每题至少有两条心理上可信的回应路径。
- 所有影响值只使用 `-20、-15、-10、-5、0、5、10、15、20`；普通选项总绝对变化控制在 40 以内。`q09_demand_exclusivity` 将关系定义改为控制通知，信任与舒适各下降 `15`，冲突上升 `10`；总绝对变化为 40，满足硬上限和建议上限。
- 严重行为保持单一主伤害方向：隐私问题优先降低信任，强迫优先降低舒适，羞辱/迁怒优先提高冲突。
- `feedbackIds` 与四维效果方向、5/10/15+ 强度已通过 Stage-06 适配器校验；运行时由 `src/content/isfp-questions.ts` 投影并通过共享内容校验。
- `Q07` 与 `Q10` 形成“暂停—回谈”前后对照；`Q08`、`Q09` 分别承担隐私责任与关系定义，不把“敏感”“神秘”当作伤害原因。

## 4. 运行时状态与维护边界

- 题目效果已经过 `4^10 = 1,048,576` 全路径枚举；结局可达性、阶段门槛和策略诊断见 `isfp-balance-report.md`，不将参考区间误读为硬性发布门槛。
- ISFP 已加入运行时 `contentPacks`，题目与结局分别由 `src/content/isfp-questions.ts`、`src/content/isfp-endings.ts` 投影；不会覆盖 ENTP/INTP/INFP 内容。
- 修改题目、选项效果或追溯记录后，需运行 `scripts/validate-question-traceability.mjs`、`scripts/validate-content.mjs`、ISFP 全路径枚举、完整测试和构建，并同步刷新平衡报告。
