# INTJ 结局与反馈合同（Stage 05）

> 阶段：05 内容合同，已由 Stage 06 完整枚举验证。机制模式：`reuse`。本稿只包含 INTJ 的非运行时展示草案与审计追溯，不修改共享状态、阈值、优先级、稳定 ID、反馈键语义或当前 ENTP 运行时导出。
> 权威草案：[intj-ending-content-draft.json](intj-ending-content-draft.json)。题目输入：[INTJ 十题草案](../questions/intj-ten-question-draft.json)。完整机器追溯：[INTJ 结局规则合同](../traceability/intj-ending-rule-contract.json)。

## 1. 运行时投影与所有权

| 设计语义 | 运行时投影 / 伴随文件 | 本轮处理 |
|---|---|---|
| `ending_id`、family、标题、正文、原因、状态摘要 | `EndingContent` | 草案 JSON 使用 `id / kind / title / coreCopy / reasonCopy / stateSummary`。 |
| 二级关系评价 | `RelationshipEvaluationContent` | `romance_stable` 与 `romance_hidden_risk` 只附属于 `confirmed_relationship`。 |
| 模糊反馈 | `FuzzyFeedbackContent` | 完整复用 24 个稳定键、方向、强度和已批准文案，与 Stage 04 的 `feedbackText` 保持一致。 |
| 规则身份、优先级、动作、类型化依据、可达性 | 伴随审计合同 | `INTJ-AUDIT-*` 全部仅供审计；运行时没有稳定 rule ID，不能传给 Stage 06 的 `expectedRuleIds`。 |

结局页动作沿用既有产品意图：重新开始、分享结果、返回类型选择。本阶段不新增动作字段或运行时行为。

## 2. 规则到结局矩阵

每个选项先结算并截断四维状态，再按下表顺序求值；首个命中结果立即停止。边界与 `src/game/rules.ts` 完全一致。

| priority | audit-only rule_id | checkpoint | condition | inclusive? | ending_id | secondary_result_id | tie-break notes |
|---:|---|---|---|---|---|---|---|
| 1 | INTJ-AUDIT-R-GLOBAL-CONFLICT-80 | 每题后 | `conflict >= 80` | 是 | conflict_break | none | 高于同一状态下的所有结果。 |
| 2 | INTJ-AUDIT-R-GLOBAL-COMFORT-05 | 每题后 | `comfort <= 5` | 是 | strong_discomfort | none | 仅在冲突规则未命中时检查。 |
| 3 | INTJ-AUDIT-R-GLOBAL-TRUST-05 | 每题后 | `trust <= 5` | 是 | trust_broken | none | 仅在前两条全局规则未命中时检查。 |
| 4 | INTJ-AUDIT-R-GATE-Q02 | Q02 后 | 不同时满足 `attraction >= 25`、`trust >= 20`、`comfort >= 20`、`conflict <= 20` | 混合 | no_second_meeting | none | 全局规则均未命中后检查。 |
| 5 | INTJ-AUDIT-R-GATE-Q05 | Q05 后 | 不同时满足 `attraction >= 35`、`trust >= 30`、`comfort >= 25`、`conflict <= 45` | 混合 | fade_out | none | 全局规则均未命中后检查。 |
| 6 | INTJ-AUDIT-R-GATE-Q08 | Q08 后 | 不同时满足 `attraction >= 45`、`trust >= 40`、`comfort >= 35`、`conflict <= 45` | 混合 | stay_acquaintances | none | 全局规则均未命中后检查。 |
| 7 | INTJ-AUDIT-R-FINAL-STRANGERS | Q10 后 | `trust < 35 OR comfort < 35 OR conflict > 50` | 否 | strangers_after_all | none | 最终分类第一优先级。 |
| 8 | INTJ-AUDIT-R-FINAL-CONFIRMED | Q10 后 | `attraction >= 85 AND trust >= 65 AND comfort >= 60 AND conflict <= 25` | 是 | confirmed_relationship | 见 8a/8b | 命中后不再检查危险恋人、朋友或兜底。 |
| 8a | INTJ-AUDIT-R-EVAL-ROMANCE-STABLE | 确认恋爱内部 | `trust >= 75 AND comfort >= 70 AND conflict <= 15` | 是 | confirmed_relationship | romance_stable | 完整 outcome 为 `confirmed_relationship:romance_stable`。 |
| 8b | INTJ-AUDIT-R-EVAL-ROMANCE-HIDDEN-RISK | 确认恋爱内部 | 8a 未命中 | n/a | confirmed_relationship | romance_hidden_risk | 完整 outcome 为 `confirmed_relationship:romance_hidden_risk`。 |
| 9 | INTJ-AUDIT-R-FINAL-DANGEROUS | Q10 后 | `attraction >= 90 AND (trust < 65 OR comfort < 60)` | 混合 | dangerous_lovers | none | 仅在陌路与确认恋爱均未命中时检查。 |
| 10 | INTJ-AUDIT-R-FINAL-FRIENDS | Q10 后 | `attraction < 65 AND trust >= 50 AND comfort >= 45 AND conflict <= 40` | 混合 | friends | none | 仅在此前最终分类均未命中时检查。 |
| 11 | INTJ-AUDIT-R-FINAL-AMBIGUOUS | Q10 后 | 以上最终分类均未命中 | n/a | unresolved_ambiguity | none | 确定性兜底。 |

Stage 06 已通过生产 `resolveEnding` 验证全部基础结局与完整 outcome 可达。阴影审计仍只能陈述优先级关系：冲突规则会遮蔽同次选择后的其他结果，舒适规则会遮蔽信任与后续规则，终局陌路会遮蔽同时满足的较低优先级分类。运行时没有 applicable-rule 诊断钩子，因此不能把未选中的审计规则进一步断言为“已被遮蔽”或“条件不可能”。

### 检查点追溯

| checkpoint | applicable audit-only rules | result IDs | feedback mapping |
|---|---|---|---|
| 每个选项结算后 | 三条 GLOBAL 规则 | conflict_break、strong_discomfort、trust_broken | 当前选项的 `feedbackIds`；40 项逐条映射见 JSON 合同。 |
| Q02 后 | GLOBAL 后接 GATE-Q02 | no_second_meeting | Q02 四个选项的提示键。 |
| Q05 后 | GLOBAL 后接 GATE-Q05 | fade_out | Q05 四个选项的提示键。 |
| Q08 后 | GLOBAL 后接 GATE-Q08 | stay_acquaintances | Q08 四个选项的提示键。 |
| Q10 后 | GLOBAL 后接五条 FINAL 规则与确认恋爱二级分类 | 5 个基础最终结局、6 个完整 outcome | Q10 四个选项的提示键。 |

## 3. 完整结局目录

| ending_id | family | INTJ 标题 | reachability | character basis | 文案重点 |
|---|---|---|---|---|---|
| conflict_break | global | 冲突关系终止 | verified_stage_06 | B07、B08、B12；Q04、Q07、Q08、Q10 | 纠错、暂停与修复被压制和反击取代。 |
| strong_discomfort | global | 停止继续相处 | verified_stage_06 | B04、B06、B08；Q03、Q05、Q07、Q08、Q10 | 帮助边界、空间和暂停权被持续取消。 |
| trust_broken | global | 信任关系断裂 | verified_stage_06 | B04、B08、B09、B11、B12；Q04、Q05、Q08-Q10 | 兑现、保密、共同决定和修复能力耗尽。 |
| no_second_meeting | stage_gate | 不再安排见面 | verified_stage_06 | B01、B02；Q01-Q02 | 初识的结构与简短信号未形成下一次共同意愿。 |
| fade_out | stage_gate | 联系逐渐淡出 | verified_stage_06 | B04、B06、B07；Q03-Q05 | 行动关心、直接表达与个人空间未形成稳定往来。 |
| stay_acquaintances | stage_gate | 关系止于熟人 | verified_stage_06 | B04、B05、B08、B12；Q06-Q08 | 支持错位、暂停与回谈尚未变成亲密基础。 |
| strangers_after_all | final | 最终回到陌生 | verified_stage_06 | B08-B12；Q07-Q10 | 已有投入不能替代终局的信任、舒适和可修复性。 |
| confirmed_relationship | final | 正式确认恋爱 | verified_stage_06 | B04、B08-B12；Q07-Q10 | 行动、空间、修复和四项关系条件获得双向明确同意。 |
| dangerous_lovers | final | 失衡进入恋爱 | verified_stage_06 | B04、B09、B11；Q08-Q10 | 高吸引推动恋爱，但计划不能替信任、舒适与边界。 |
| friends | final | 明确成为朋友 | verified_stage_06 | B01、B04-B06；Q02、Q03、Q05、Q06、Q10 | 可靠、自在地继续来往，并明确不默认浪漫承诺。 |
| unresolved_ambiguity | final | 暧昧关系未定 | verified_stage_06 | B09-B12；Q08-Q10 | 下一步与关系名称仍需双方继续协商。 |

每条记录均包含完整的 `coreCopy`、`reasonCopy` 和 `stateSummary`，正文见 JSON。标题均为 6 个汉字，单独展示时也能识别终止、停止相处、失信、不再见、淡出、熟人、陌生、确认恋爱、失衡恋爱、朋友或未定等关系状态。

### 二级关系评价

| outcome_id | title | 语义 | reachability |
|---|---|---|---|
| confirmed_relationship:romance_stable | 稳定恋爱关系 | 已确认恋爱，且信任、舒适和冲突状态支持可持续维护。 | verified_stage_06 |
| confirmed_relationship:romance_hidden_risk | 恋爱仍有隐患 | 已确认恋爱，但维护方式仍有未充分验证的风险。 | verified_stage_06 |

二者共享基础 `ending_id`，却是两个不可丢失的完整 outcome。展示时先呈现“正式确认恋爱”，再附对应关系评价。

## 4. 类型化文案边界

INTJ 文案只使用行为模型和十题已经建立的互动：简短而可核对的信号、把条件写清、以行动帮助、直接指出分歧、说明空间容量、区分方案与陪伴、约定暂停返回、分段修复、可退出的未来安排，以及明确谈排他、公开、联系和个人时间。

以下内容不参与判定，也不作为结局理由：冷血天才、棋手或反派意象，天然忠诚，完美规划，读心能力，职业、性别、智力或所谓真假 INTJ。理由只描述本局互动的可观察后果，不诊断玩家或 TA。

## 5. 模糊反馈合同

本轮不另写一套 INTJ 反馈语义。24 个稳定键与 `src/content/endings.ts` 及 Stage 04 已批准文案逐字一致：绝对变化 `5` 对应 `slight`，`10` 对应 `medium`，`15` 或 `20` 对应 `strong`；零变化不展示该维度提示。

| dimension | 健康方向 | 支持范围 | 组合提示策略 |
|---|---|---|---|
| attraction | 数值上升 | up/down × slight/medium/strong | 优先说明继续靠近意愿的变化。 |
| trust | 数值上升 | up/down × slight/medium/strong | 兑现、保密、共同决定和修复优先展示信任。 |
| comfort | 数值上升 | up/down × slight/medium/strong | 压力、暂停、拒绝和支持方式优先展示舒适。 |
| conflict | 数值下降 | up/down × slight/medium/strong | 数值下降代表张力改善；升级或缓和明显时可与主维度并列。 |

每个选项展示 1 至 2 条最能解释即时关系后果的提示，不暴露具体分数。40 个选项到反馈键、Q02/Q05/Q08 检查点与 Q10 分类器的映射见机器追溯合同。

## 6. 完整性审计与 Stage 06 验证

- 11 个稳定 `EndingId` 各有且仅有一条展示内容，family 与运行时合同一致。
- 2 个 `RelationshipEvaluationId` 均有完整内容，并保留为两个独立 outcome。
- 24 个模糊反馈键覆盖四维、双方向和三档强度；冲突下降的反向健康语义已明确。
- 题目选项只改变四维状态，不含 ending ID、直接结果或故事停止字段。
- 共享规则、schema、阈值、优先级、稳定 ID 与当前运行时导出均未修改。
- Stage 06 已导入 INTJ 题目草案并调用真实 `applyEffects`、`resolveEnding`、`endingResultKey`，完整枚举 `4^10 = 1,048,576` 条等价完整路径。
- 11 个基础结局和 12 个完整 outcome 全部可达；机器报告为 `content/questions/intj-balance-report.json`，`expectedRuleIds` 仍按合同留空。
- 可达性已验证不等于比例全部达标；全局危险、终局陌路、危险恋人和未定关系的目标偏差记录在平衡报告中。
