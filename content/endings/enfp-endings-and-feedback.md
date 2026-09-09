# ENFP 结局与反馈合同（Stage 05）

> 阶段：05 内容合同，已由 Stage 06 完整枚举验证。机制模式：`reuse`。本稿只包含 ENFP 的非运行时展示草案与审计追溯，不修改共享状态、阈值、优先级、稳定 ID、反馈键语义或当前 ENTP 运行时导出。  
> 权威草案：[enfp-ending-content-draft.json](enfp-ending-content-draft.json)。题目输入：[ENFP 十题草案](../questions/enfp-ten-question-draft.json)。完整机器追溯：[ENFP 结局规则合同](../traceability/enfp-ending-rule-contract.json)。

## 1. 运行时投影与所有权

| 设计语义 | 运行时投影 / 伴随文件 | 本轮处理 |
|---|---|---|
| `ending_id`、family、标题、正文、原因、状态摘要 | `EndingContent` | 草案 JSON 使用 `id / kind / title / coreCopy / reasonCopy / stateSummary`。 |
| 二级关系评价 | `RelationshipEvaluationContent` | `romance_stable` 与 `romance_hidden_risk` 只附属于 `confirmed_relationship`。 |
| 模糊反馈 | `FuzzyFeedbackContent` | 完整复用 24 个稳定键、方向、强度和已批准文案，与 Stage 04 的 `feedbackText` 保持一致。 |
| 规则身份、优先级、动作、类型化依据、可达性 | 伴随审计合同 | `ENFP-AUDIT-*` 全部仅供审计；运行时没有稳定 rule ID，不能传给 Stage 06 的 `expectedRuleIds`。 |

结局页动作沿用既有产品意图：重新开始、分享结果、返回类型选择。本阶段不新增动作字段或运行时行为。

## 2. 规则到结局矩阵

每个选项先结算并截断四维状态，再按下表顺序求值；首个命中结果立即停止。边界与 `src/game/rules.ts` 完全一致。

| priority | audit-only rule_id | checkpoint | condition | inclusive? | ending_id | secondary_result_id | tie-break notes |
|---:|---|---|---|---|---|---|---|
| 1 | ENFP-AUDIT-R-GLOBAL-CONFLICT-80 | 每题后 | `conflict >= 80` | 是 | conflict_break | none | 高于同一状态下的所有结果。 |
| 2 | ENFP-AUDIT-R-GLOBAL-COMFORT-05 | 每题后 | `comfort <= 5` | 是 | strong_discomfort | none | 仅在冲突规则未命中时检查。 |
| 3 | ENFP-AUDIT-R-GLOBAL-TRUST-05 | 每题后 | `trust <= 5` | 是 | trust_broken | none | 仅在前两条全局规则未命中时检查。 |
| 4 | ENFP-AUDIT-R-GATE-Q02 | Q02 后 | 不同时满足 `attraction >= 25`、`trust >= 20`、`comfort >= 20`、`conflict <= 20` | 混合 | no_second_meeting | none | 全局规则均未命中后检查。 |
| 5 | ENFP-AUDIT-R-GATE-Q05 | Q05 后 | 不同时满足 `attraction >= 35`、`trust >= 30`、`comfort >= 25`、`conflict <= 45` | 混合 | fade_out | none | 全局规则均未命中后检查。 |
| 6 | ENFP-AUDIT-R-GATE-Q08 | Q08 后 | 不同时满足 `attraction >= 45`、`trust >= 40`、`comfort >= 35`、`conflict <= 45` | 混合 | stay_acquaintances | none | 全局规则均未命中后检查。 |
| 7 | ENFP-AUDIT-R-FINAL-STRANGERS | Q10 后 | `trust < 35 OR comfort < 35 OR conflict > 50` | 否 | strangers_after_all | none | 最终分类第一优先级。 |
| 8 | ENFP-AUDIT-R-FINAL-CONFIRMED | Q10 后 | `attraction >= 85 AND trust >= 65 AND comfort >= 60 AND conflict <= 25` | 是 | confirmed_relationship | 见 8a/8b | 命中后不再检查危险恋人、朋友或兜底。 |
| 8a | ENFP-AUDIT-R-EVAL-ROMANCE-STABLE | 确认恋爱内部 | `trust >= 75 AND comfort >= 70 AND conflict <= 15` | 是 | confirmed_relationship | romance_stable | 完整 outcome 为 `confirmed_relationship:romance_stable`。 |
| 8b | ENFP-AUDIT-R-EVAL-ROMANCE-HIDDEN-RISK | 确认恋爱内部 | 8a 未命中 | n/a | confirmed_relationship | romance_hidden_risk | 完整 outcome 为 `confirmed_relationship:romance_hidden_risk`。 |
| 9 | ENFP-AUDIT-R-FINAL-DANGEROUS | Q10 后 | `attraction >= 90 AND (trust < 65 OR comfort < 60)` | 混合 | dangerous_lovers | none | 仅在陌路与确认恋爱均未命中时检查。 |
| 10 | ENFP-AUDIT-R-FINAL-FRIENDS | Q10 后 | `attraction < 65 AND trust >= 50 AND comfort >= 45 AND conflict <= 40` | 混合 | friends | none | 仅在此前最终分类均未命中时检查。 |
| 11 | ENFP-AUDIT-R-FINAL-AMBIGUOUS | Q10 后 | 以上最终分类均未命中 | n/a | unresolved_ambiguity | none | 确定性兜底。 |

Stage 06 已通过真实状态结算与结局解析器枚举 `4^10 = 1,048,576` 条等价完整路径，全部基础结局和完整 outcome 均可达。运行时仍没有 stable rule ID 或 applicable-rule 诊断钩子，因此规则阴影状态保持 `unknown`。

### 检查点追溯

| checkpoint | applicable audit-only rules | result IDs | feedback mapping |
|---|---|---|---|
| 每个选项结算后 | 三条 GLOBAL 规则 | conflict_break、strong_discomfort、trust_broken | 当前选项的 `feedbackIds`；40 项逐条映射见 JSON 合同。 |
| Q02 后 | GLOBAL 后接 GATE-Q02 | no_second_meeting | Q02 四个选项的提示键。 |
| Q05 后 | GLOBAL 后接 GATE-Q05 | fade_out | Q05 四个选项的提示键。 |
| Q08 后 | GLOBAL 后接 GATE-Q08 | stay_acquaintances | Q08 四个选项的提示键。 |
| Q10 后 | GLOBAL 后接五条 FINAL 规则与确认恋爱二级分类 | 5 个基础最终结局、6 个完整 outcome | Q10 四个选项的提示键。 |

## 3. 完整结局目录

| ending_id | family | ENFP 标题 | reachability | character basis | 文案重点 |
|---|---|---|---|---|---|
| conflict_break | global | 冲突终止关系 | verified_stage_06 | B02/B04/B09/B12；Q02/Q05/Q07/Q08/Q10 | 快速表达、公开定义与反击累积成不可修复伤害。 |
| strong_discomfort | global | 不再继续相处 | verified_stage_06 | B01/B07/B09/B10/B12；Q01/Q04/Q05/Q07/Q09/Q10 | 回复、独处、披露与社交边界被持续取消。 |
| trust_broken | global | 信任彻底断裂 | verified_stage_06 | B04-B06/B09/B11/B12；Q03/Q04/Q07-Q10 | 计划、隐私、关系命名与修复能力失去可信度。 |
| no_second_meeting | stage_gate | 没有下次见面 | verified_stage_06 | B01/B02；Q01-Q02 | 初识热场没有形成单独继续了解的共同意愿。 |
| fade_out | stage_gate | 联系慢慢退场 | verified_stage_06 | B05/B07/B09；Q03-Q05 | 消息与新鲜感没有落成节奏、边界和兑现。 |
| stay_acquaintances | stage_gate | 只做普通熟人 | verified_stage_06 | B06-B09；Q06-Q08 | 支持、低能量空间和失约修复未形成亲密基础。 |
| strangers_after_all | final | 最后回到陌生 | verified_stage_06 | B04/B06/B09/B11/B12；Q07-Q10 | 终局基础不足，过去热度不覆盖低信任或高冲突。 |
| confirmed_relationship | final | 正式成为恋人 | verified_stage_06 | B04-B09/B11/B12；Q03/Q04/Q06-Q10 | 探索、热情、支持、社交与承诺获得双向规则。 |
| dangerous_lovers | final | 失衡开始恋爱 | verified_stage_06 | B07/B09/B11/B12；Q04/Q07/Q09/Q10 | 高吸引推动恋爱，但边界与可靠性仍未站稳。 |
| friends | final | 确定成为朋友 | verified_stage_06 | B01/B02/B05/B08/B09；Q01-Q03/Q06-Q08/Q10 | 保留分享与支持，明确不把友善自动解释为浪漫。 |
| unresolved_ambiguity | final | 暧昧仍未落定 | verified_stage_06 | B04/B07/B11/B12；Q04/Q09/Q10 | 热度仍在，关系条件尚未共同确认。 |

每条记录均包含完整的 `coreCopy`、`reasonCopy` 和 `stateSummary`，正文见 JSON。11 个基础标题均为 6 个汉字，单独展示即可识别关系终止、不再相处、失信、不再见、淡出、熟人、陌生、恋爱、失衡恋爱、朋友或未定状态。

### 二级关系评价

| outcome_id | title | 语义 | reachability |
|---|---|---|---|
| confirmed_relationship:romance_stable | 稳定恋爱关系 | 已确认恋爱，且探索与变化有可执行边界、兑现和修复方式。 | verified_stage_06 |
| confirmed_relationship:romance_hidden_risk | 恋爱仍藏风险 | 已确认恋爱，但联系节奏、社交边界、履约或修复仍未充分验证。 | verified_stage_06 |

二者共享基础 `ending_id`，但必须作为两个独立完整 outcome 保留。展示时先呈现“正式成为恋人”，再附对应关系评价。

## 4. 类型化文案边界

ENFP 文案只使用行为模型和十题已建立的可观察互动：把人拉进话题、认真评估跳跃点子、临时方案的成本、密集消息的回复容量、选择性披露、支持菜单、低能量空间、过度承诺后的修复，以及对排他、公开、社交和联系节奏的逐项确认。

以下内容不参与判定，也不作为结局理由：快乐小狗或金毛、永远开心、天然花心或绝对忠诚、三分钟热度人格、ADHD、BPD、自恋、依恋类型、“高阶/低阶”ENFP，以及任何职业、性别、创伤或道德推断。理由只描述本局互动的可观察后果。

## 5. 模糊反馈合同

本轮不另写一套 ENFP 反馈语义。24 个稳定键与 `src/content/entp-endings.ts` 及 Stage 04 文案逐字一致：绝对变化 `5` 对应 `slight`，`10` 对应 `medium`，`15` 或 `20` 对应 `strong`；零变化不展示该维度提示。

| dimension | 健康方向 | 支持范围 | 组合提示策略 |
|---|---|---|---|
| attraction | 数值上升 | up/down × slight/medium/strong | 优先说明继续了解或浪漫靠近意愿的变化。 |
| trust | 数值上升 | up/down × slight/medium/strong | 兑现、隐私、关系命名和修复优先展示信任。 |
| comfort | 数值上升 | up/down × slight/medium/strong | 回复节奏、独处、披露、支持与社交边界优先展示舒适。 |
| conflict | 数值下降 | up/down × slight/medium/strong | 数值下降代表张力改善；升级或缓和明显时可与主维度并列。 |

每个选项展示 1 至 2 条最能解释即时关系后果的提示，不暴露具体分数。40 个选项到反馈键、Q02/Q05/Q08 检查点与 Q10 分类器的映射见机器追溯合同。

## 6. 完整性审计与 Stage 06 交接

- 11 个稳定 `EndingId` 各有且仅有一条展示内容，family 与运行时合同一致。
- 2 个 `RelationshipEvaluationId` 均有完整内容，并保留为两个独立 outcome。
- 24 个模糊反馈键覆盖四维、双方向和三档强度；冲突下降的反向健康语义已明确。
- 题目选项只改变四维状态，不含 ending ID、直接结果或故事停止字段。
- 共享规则、schema、阈值、优先级、稳定 ID 与当前运行时导出均未修改。
- 全部 11 个基础结局与 12 个完整 outcome 已由 Stage 06 验证可达，并保存确定性示例路径。
- Stage 06 已导入 ENFP 题目草案并调用真实 `applyEffects`、`resolveEnding` 与 `endingResultKey`；`expectedRuleIds` 保持 `null`。
