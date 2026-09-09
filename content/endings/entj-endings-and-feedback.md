# ENTJ 结局与反馈合同（Stage 05）

> 状态：Stage 05 非运行时内容合同，已由 Stage 06 完整枚举验证。机制模式：`reuse`。本稿只新增 ENTJ 类型化结局展示与审计追溯，不修改共享状态、阈值、优先级、稳定 ID、反馈语义或当前 ENTP 运行时导出。
>
> 权威草案：[entj-ending-content-draft.json](entj-ending-content-draft.json)；题目输入：[ENTJ 十题草案](../questions/entj-ten-question-draft.json)；机器追溯：[ENTJ 结局规则合同](../traceability/entj-ending-rule-contract.json)。

## 1. 运行时投影与所有权

| 设计语义 | 投影位置 | 本轮处理 |
|---|---|---|
| 基础结局 | `EndingContent` | 使用 11 个稳定 `endingId`，草案字段为 `id / kind / title / coreCopy / reasonCopy / stateSummary`。 |
| 二级关系评价 | `RelationshipEvaluationContent` | `romance_stable` 与 `romance_hidden_risk` 仅附属于 `confirmed_relationship`。 |
| 即时模糊反馈 | `FuzzyFeedbackContent` | 逐字复用 24 个共享键、方向、强度和文案。 |
| 规则标签、优先级、动作、类型化依据、可达性 | 伴随审计合同 | `ENTJ-AUDIT-*` 仅供文档审计，不是运行时 rule ID，也不得作为 Stage 06 的 `expectedRuleIds`。 |

结局页动作沿用既有产品意图：重新开始、分享结果、返回类型选择。本轮不实现新的运行时动作。

## 2. 规则到结局矩阵

每个选项先应用并截断四维状态，再按下表顺序求值；首个命中结果立即停止。条件与 `src/game/rules.ts` 保持一致。

| 优先级 | audit-only rule_id | 检查点 | 条件 | 边界 | 结果 |
|---:|---|---|---|---|---|
| 1 | ENTJ-AUDIT-R-GLOBAL-CONFLICT-80 | 每题后 | `conflict >= 80` | 包含 80 | conflict_break |
| 2 | ENTJ-AUDIT-R-GLOBAL-COMFORT-05 | 每题后 | `comfort <= 5` | 包含 5 | strong_discomfort |
| 3 | ENTJ-AUDIT-R-GLOBAL-TRUST-05 | 每题后 | `trust <= 5` | 包含 5 | trust_broken |
| 4 | ENTJ-AUDIT-R-GATE-Q02 | Q02 后 | 未同时满足 `A>=25, T>=20, C>=20, X<=20` | 混合 | no_second_meeting |
| 5 | ENTJ-AUDIT-R-GATE-Q05 | Q05 后 | 未同时满足 `A>=35, T>=30, C>=25, X<=45` | 混合 | fade_out |
| 6 | ENTJ-AUDIT-R-GATE-Q08 | Q08 后 | 未同时满足 `A>=45, T>=40, C>=35, X<=45` | 混合 | stay_acquaintances |
| 7 | ENTJ-AUDIT-R-FINAL-STRANGERS | Q10 后 | `trust < 35 OR comfort < 35 OR conflict > 50` | 不含等号 | strangers_after_all |
| 8 | ENTJ-AUDIT-R-FINAL-CONFIRMED | Q10 后 | `A>=85 AND T>=65 AND C>=60 AND X<=25` | 包含 | confirmed_relationship |
| 8a | ENTJ-AUDIT-R-EVAL-ROMANCE-STABLE | 确认恋爱内部 | `T>=75 AND C>=70 AND X<=15` | 包含 | confirmed_relationship:romance_stable |
| 8b | ENTJ-AUDIT-R-EVAL-ROMANCE-HIDDEN-RISK | 确认恋爱内部 | 8a 未命中 | n/a | confirmed_relationship:romance_hidden_risk |
| 9 | ENTJ-AUDIT-R-FINAL-DANGEROUS | Q10 后 | `A>=90 AND (T<65 OR C<60)` | 混合 | dangerous_lovers |
| 10 | ENTJ-AUDIT-R-FINAL-FRIENDS | Q10 后 | `A<65 AND T>=50 AND C>=45 AND X<=40` | 混合 | friends |
| 11 | ENTJ-AUDIT-R-FINAL-AMBIGUOUS | Q10 后 | 此前最终分类均未命中 | n/a | unresolved_ambiguity |

这里的 `A/T/C/X` 仅用于审计表压缩，依次代表 `attraction / trust / comfort / conflict`，不会出现在玩家文案里。同一状态同时满足多条条件时，严格按表中优先级选择第一条；全局危险规则始终高于阶段门槛和最终分类。

## 3. 完整结局目录

| ending_id | family | ENTJ 标题 | 可达性 | 类型化依据 | 文案重点 |
|---|---|---|---|---|---|
| conflict_break | global | 关系冲突终止 | verified_stage_06 | B02/B07/B08/B10/B12；Q02/Q06-Q08/Q10 | 解决问题滑向争胜、逼迫和单方面控制。 |
| strong_discomfort | global | 不再继续相处 | verified_stage_06 | B01/B02/B04/B08/B10；Q01/Q04/Q07/Q08/Q10 | 表面配合不等于同意，拒绝和暂停必须有效。 |
| trust_broken | global | 信任耗尽告别 | verified_stage_06 | B04/B06/B10-B12；Q04/Q07-Q10 | 共同决定、兑现、公开边界和回返约定失效。 |
| no_second_meeting | stage_gate | 初识没有下次 | verified_stage_06 | B01/B02/B06；Q01-Q02 | 标签、行程与时间容量没有形成下一次共同意愿。 |
| fade_out | stage_gate | 联系逐渐淡去 | verified_stage_06 | B02-B05；Q03-Q05 | 主动、帮助和方案没有变成双方可持续的联系。 |
| stay_acquaintances | stage_gate | 关系停在熟人 | verified_stage_06 | B05/B07/B08/B10/B12；Q05-Q08 | 标准、暂停与修复没有积累成亲密基础。 |
| strangers_after_all | final | 最终不再往来 | verified_stage_06 | B09-B12；Q07-Q10 | 既有投入不能替代终局的安全、信任和修复。 |
| confirmed_relationship | final | 双方确认恋爱 | verified_stage_06 | B04/B09-B12；Q07-Q10 | 四项关系条件获得双方明确、可修改的同意。 |
| dangerous_lovers | final | 热恋仍未站稳 | verified_stage_06 | B04/B07/B10-B12；Q06-Q10 | 高吸引已推动恋爱，基础协议却没有同步站稳。 |
| friends | final | 明确成为朋友 | verified_stage_06 | B01/B04-B07；Q01/Q04-Q06/Q10 | 可靠合作与实际帮助被明确保留为友谊。 |
| unresolved_ambiguity | final | 暧昧尚无定论 | verified_stage_06 | B09-B12；Q07-Q10 | 未来投入和关系名称仍需双方继续确认。 |

所有标题均为 6 个汉字，单独显示即可识别终止相处、没有下次、淡出、熟人、陌生、确认恋爱、不稳恋爱、朋友或未定暧昧等关系状态。

### 二级关系评价

| outcome_id | 标题 | 语义 | 可达性 |
|---|---|---|---|
| confirmed_relationship:romance_stable | 恋爱稳步落地 | 已确认恋爱，双方能补充条件、拒绝不合适版本并按约修复。 | verified_stage_06 |
| confirmed_relationship:romance_hidden_risk | 恋爱仍有隐患 | 已确认恋爱，但隐藏需要、边界或修复方式仍未充分检验。 | verified_stage_06 |

两个评价共享基础 `endingId`，但必须作为两个完整 outcome 分别统计和展示。

## 4. 类型化文案边界

ENTJ 文案仅使用行为模型与十题已经建立的互动：拆解类型标签、共同修改计划、明确邀约和容量、询问帮助范围、区分方案与陪伴、区分偏好与底线、约定暂停返回、分步修复、保留可取消的未来安排，以及共同确认排他、公开、联系频率和个人时间。

以下内容不参与判定，也不作为结局理由：霸总、CEO、天生领导、永远高效、天然正确、必然控制、选中后绝对忠诚、职业地位或所谓真假 ENTJ。所有原因只描述本局可观察的互动后果，不诊断玩家或 TA。

## 5. 模糊反馈合同

本轮不创建 ENTJ 专属反馈语义。24 个稳定键与 `src/content/entp-endings.ts` 及 Stage 04 题稿逐字一致：绝对变化 `5` 对应 `slight`，`10` 对应 `medium`，`15` 或 `20` 对应 `strong`；零变化不展示该维度提示。

| dimension | 健康方向 | 覆盖 | 组合提示策略 |
|---|---|---|---|
| attraction | 上升 | up/down × slight/medium/strong | 优先说明继续靠近意愿的变化。 |
| trust | 上升 | up/down × slight/medium/strong | 兑现、共同决定、公开和修复优先展示信任。 |
| comfort | 上升 | up/down × slight/medium/strong | 被管理感、暂停、拒绝和支持方式优先展示舒适。 |
| conflict | 下降 | up/down × slight/medium/strong | 数值下降代表改善；明显升级或缓和时可与主维度并列。 |

每个选项显示 1–2 条最能解释即时后果的提示，不暴露具体分数。40 个选项到反馈键、阶段检查点和最终分类器的精确映射记录在机器追溯合同中。

## 6. 完整性审计与 Stage 06 交接

- 11 个稳定 `EndingId` 均有且仅有一条完整展示内容，family 与运行时一致。
- 2 个 `RelationshipEvaluationId` 均有完整内容，并保留为两个独立完整 outcome。
- 24 个反馈键覆盖四维、两个方向和三档强度；`conflict` 下降为健康方向。
- 40 个题目选项只改变四维状态，不含 `ending`、直接结果或故事停止字段。
- 共享规则、schema、阈值、优先级、稳定 ID 和当前运行时导出未修改。
- Stage 06 已通过真实 `applyEffects`、`resolveEnding` 与 `endingResultKey` 完整枚举 `4^10 = 1,048,576` 条等价完整路径；11 个基础结局和 12 个完整 outcome 全部可达。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此 `expectedRuleIds` 必须为 `null`，规则覆盖和具体遮蔽情况继续标记为未知。
- 最终机器报告见 [`entj-balance-report.json`](../questions/entj-balance-report.json)，同时保留初始基线、终局调优前和本轮危险增量调参前快照；终止叶占比和等概率加权路径占比分开报告。
