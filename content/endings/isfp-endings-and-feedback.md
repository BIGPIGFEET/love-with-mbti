# ISFP 结局与反馈合同（Stage 05）

> 阶段：05。机制模式：`reuse`。本稿只绑定 ISFP 的展示内容、反馈文本和审计追溯；不修改 `src/game/rules.ts`、`src/content/schema.ts` 的状态、阈值、优先级、稳定 ID 或反馈键语义。
> 权威内容源：[isfp-ending-content-draft.json](isfp-ending-content-draft.json)，由 `src/content/isfp-endings.ts` 直接投影到运行时。题目输入：[ISFP 十题内容](../questions/isfp-ten-question-draft.json)。

## 1. 运行时映射与所有权

| semantic field | runtime field / companion artifact | 处理方式 |
|---|---|---|
| ending_id / family / title / core_copy / specific_reason / state_summary | `EndingContent` | 草案 JSON 使用 `id / kind / title / coreCopy / reasonCopy / stateSummary` 的同义字段。 |
| secondary result | `RelationshipEvaluationContent` | `romance_stable` 与 `romance_hidden_risk` 仅附属于 `confirmed_relationship`。 |
| feedback dictionary | `FuzzyFeedbackContent` | 复用 24 个稳定键和方向/强度语义，替换为 ISFP 展示文本。 |
| rule identity / precedence / actions / character basis | 本文审计表 | 运行时未暴露稳定 rule ID；以下 `ISFP-Rxx` 均为 audit-only，不能作为执行器或分析器 ID。 |

结局页统一动作：重新开始、返回类型选择、复制结果。Stage 05 不增加或改变运行时动作。

## 2. 规则到结局矩阵

规则按每次应用选项后的固定顺序执行。数值条件均来自 `src/game/rules.ts`；`>=`、`<=`、`<`、`>` 的边界含义与实现完全一致。

| priority | audit-only rule_id | checkpoint | condition | inclusive? | ending_id | secondary_result_id | tie-break notes |
|---:|---|---|---|---|---|---|---|
| 1 | ISFP-R01 | 每题后 | `conflict >= 80` | 是 | conflict_break | none | 高于所有其他规则。 |
| 2 | ISFP-R02 | 每题后 | `comfort <= 5` | 是 | strong_discomfort | none | 仅在 R01 不命中时检查。 |
| 3 | ISFP-R03 | 每题后 | `trust <= 5` | 是 | trust_broken | none | 仅在 R01-R02 不命中时检查。 |
| 4 | ISFP-R04 | Q02 后 | 不同时满足 `trust >= 20`、`attraction >= 25`、`comfort >= 20`、`conflict <= 20` | 混合 | no_second_meeting | none | 仅在全局规则均未命中时检查。 |
| 5 | ISFP-R05 | Q05 后 | 不同时满足 `trust >= 30`、`attraction >= 35`、`comfort >= 25`、`conflict <= 45` | 混合 | fade_out | none | 仅在全局规则均未命中时检查。 |
| 6 | ISFP-R06 | Q08 后 | 不同时满足 `attraction >= 45`、`trust >= 40`、`comfort >= 35`、`conflict <= 45` | 混合 | stay_acquaintances | none | 仅在全局规则均未命中时检查。 |
| 7 | ISFP-R07 | Q10 后 | `trust < 35 OR comfort < 35 OR conflict > 50` | 否 | strangers_after_all | none | 最终分类第一优先级。 |
| 8 | ISFP-R08 | Q10 后 | `attraction >= 85 AND trust >= 65 AND comfort >= 60 AND conflict <= 25` | 混合 | confirmed_relationship | romance_stable / romance_hidden_risk | 满足后不再检查 R09-R11。 |
| 8a | ISFP-R08A | R08 内部 | `trust >= 75 AND comfort >= 70 AND conflict <= 15` | 是 | confirmed_relationship | romance_stable | R08 的高质量二级分类。 |
| 8b | ISFP-R08B | R08 内部 | 不满足 R08A | 混合 | confirmed_relationship | romance_hidden_risk | R08 的默认二级分类。 |
| 9 | ISFP-R09 | Q10 后 | `attraction >= 90 AND (trust < 65 OR comfort < 60)` | 混合 | dangerous_lovers | none | 仅在 R07-R08 不命中时检查。 |
| 10 | ISFP-R10 | Q10 后 | `attraction < 65 AND trust >= 50 AND comfort >= 45 AND conflict <= 40` | 混合 | friends | none | 仅在 R07-R09 不命中时检查。 |
| 11 | ISFP-R11 | Q10 后 | 以上最终分类均不命中 | n/a | unresolved_ambiguity | none | 最终兜底。 |

### 阴影与优先级审计

- `ISFP-R01` 可遮蔽同一次选择后其余所有结果；`R02` 可遮蔽 R03 和后续阶段门槛；`R03` 可遮蔽门槛。
- `ISFP-R07` 可遮蔽任何同时满足高吸引或朋友条件的状态；`R08` 在 R09 之前，因此先满足确认恋爱条件时不会被分类为失衡恋爱。
- Stage 06 已使用真实 `applyEffects` 与 `resolveEnding` 穷举 `4^10` 条完整选择路径；11 个基础结局和 12 个完整结果均已验证可达。运行时尚未暴露稳定 rule ID，因此规则阴影状态仍为 `unknown`。

## 3. 结局目录

| ending_id | family | title | reachability | character basis | content focus |
|---|---|---|---|---|---|
| conflict_break | global | 冲突分开 | verified | ISFP-B06、B07、B12；Q05、Q07、Q10 | 强迫、指责和回谈失败的累积后果。 |
| strong_discomfort | global | 停止相处 | verified | ISFP-B01、B07、B09；Q02、Q07、Q09 | 披露节奏、暂停权和明确同意被持续压缩。 |
| trust_broken | global | 信任断裂 | verified | ISFP-B04、B09、B12；Q03、Q08、Q10 | 托付、保密、说明和修复能力耗尽。 |
| no_second_meeting | stage_gate | 不再约见 | verified | ISFP-B01、B02；Q01、Q02 | 初识阶段未形成共同兴趣和安全感。 |
| fade_out | stage_gate | 渐失联络 | verified | ISFP-B04、B05、B06；Q03-Q05 | 关心、安排与价值边界没有形成稳定往来。 |
| stay_acquaintances | stage_gate | 止于相识 | verified | ISFP-B07-B10；Q06-Q08 | 支持、隐私和修复未转为亲密基础。 |
| strangers_after_all | final | 回到陌生 | verified | ISFP-B07-B12；Q07-Q10 | 终局仍缺少可继续托付的安全和可靠。 |
| confirmed_relationship | final | 确认相恋 | verified | ISFP-B04、B09、B11、B12；Q03、Q08-Q10 | 双向明确同意，以及行动、边界和修复共同支持关系。 |
| dangerous_lovers | final | 失衡恋爱 | verified | ISFP-B04、B08、B11；Q03、Q06、Q09 | 双方确认恋爱，但高吸引不能代替信任、舒适与修复。 |
| friends | final | 成为朋友 | verified | ISFP-B01、B02、B06；Q01-Q06 | 双方明确保留低冲突、可信与自在的非恋爱关系。 |
| unresolved_ambiguity | final | 关系未定 | verified | ISFP-B10-B12；Q09-Q10 | 仍有靠近与协商空间，尚无共同分类。 |

二级评价：`confirmed_relationship:romance_stable` 显示为“稳定相恋”；`confirmed_relationship:romance_hidden_risk` 显示为“相恋有隙”。二者是不同完整结果，不能在路径分析中合并丢失。

## 4. 反馈字典

反馈键、数值方向和强度规则复用现有合同：绝对值 `5` 为 slight、`10` 为 medium、`15` 或 `20` 为 strong；`conflict` 的数值下降表示互动张力改善。若一个选项改变多个维度，展示 1 至 2 条最能说明即时后果的反馈，不显示精确数值。

| dimension | health direction | zero-change behavior | supported keys | combined-hint policy |
|---|---|---|---|---|
| attraction | 数值上升更有利 | 不展示吸引提示 | up/down × slight/medium/strong | 与信任或舒适并变时，优先展示关系意义更清楚的一项。 |
| trust | 数值上升更有利 | 不展示信任提示 | up/down × slight/medium/strong | 隐私、兑现或修复优先展示信任提示。 |
| comfort | 数值上升更有利 | 不展示舒适提示 | up/down × slight/medium/strong | 压力、拒绝权和披露节奏优先展示舒适提示。 |
| conflict | 数值下降更有利 | 不展示冲突提示 | up/down × slight/medium/strong | 冲突升级或缓和是即时后果时可与主维度并列展示。 |

完整 24 个键、文本、方向和强度见 JSON；其 ID 必须与 Stage-04 题目中的 `feedbackIds` 精确对应。

## 5. 完整性与边界审计

- 运行时全部 11 个 `EndingId` 各有且仅有一条展示记录；2 个 `RelationshipEvaluationId` 各有一条展示记录；全部 24 个反馈键均已覆盖。
- 中文结局和评价标题均为 4 个汉字，且标题本身可识别为分开、停止相处、失信、未再见、淡出、熟人、陌生、确认相恋、失衡恋爱、朋友或未定等关系状态。
- 文案依据 ISFP 行为模型及 Q01-Q10 已建立的互动，不把四字母标签、艺术偏好、安静、敏感或随性当作人格诊断、伤害理由或道德判断。
- 题目选项只改变四维状态；没有选项持有 ending ID 或故事停止字段。所有退出由共享 `resolveEnding` 规则产生。
- 本阶段未修改共享机制。结局可达性、阈值分布、策略支配和示例路径已由 Stage 06 报告验证；规则阴影因运行时缺少稳定 rule ID/诊断 hook 而继续明确标为 `unknown`。
