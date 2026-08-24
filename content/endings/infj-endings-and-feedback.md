# INFJ 结局与反馈合同（Stage 05 / 运行时内容）

> 状态：Stage 05 complete；Stage 06 已于 2026-08-24 验证可达性。  
> 展示内容：[infj-ending-content-draft.json](infj-ending-content-draft.json)。  
> 机器审计合同：[infj-ending-rule-contract.json](../traceability/infj-ending-rule-contract.json)。

本阶段使用 `reuse` 模式。`src/content/infj-endings.ts` 已把批准后的展示 JSON 投影到 `contentPacks.INFJ`；接入仍沿用现有 `EndingContent`、`RelationshipEvaluationContent`、`FuzzyFeedbackContent` 结构，没有修改 `src/game/rules.ts`、`src/content/schema.ts`、共享结局 ID、阈值、优先级或反馈语义。

## 1. 运行时投影与所有权

| 内容 | 权威来源 | 本阶段处理 |
|---|---|---|
| 初始状态、截断、阶段阈值、判定顺序 | `src/game/rules.ts` | 原样复用，不另建规则实现。 |
| 11 个 `EndingId`、family、2 个 `RelationshipEvaluationId` | `src/content/schema.ts` | 原样复用稳定 ID 与类型。 |
| INFJ 展示文案 | `infj-ending-content-draft.json` → `src/content/infj-endings.ts` | 为每个稳定结果提供标题、正文、具体理由和状态摘要，并投影给网页运行时。 |
| 结局动作 | 伴随审计合同 | 记录 `restart`、`share`、`return_to_type_selection`，不新增运行时动作字段。 |
| 规则标签、优先级、类型化依据、可达性 | `infj-ending-rule-contract.json` | `INFJ-AUDIT-*` 全部仅供审计，不是运行时 rule ID。 |
| 模糊反馈 | 共享字典与 INFJ 展示 JSON | 完整复用 24 个稳定键、方向、强度和文案。 |

## 2. 规则到结局矩阵

每次选择后先应用效果并将四维状态截断到 `0..100`，再按下表顺序求值；首个命中结果立即停止。

| priority | audit-only rule_id | checkpoint | condition | inclusive? | ending_id | secondary_result_id |
|---:|---|---|---|---|---|---|
| 1 | INFJ-AUDIT-R-GLOBAL-CONFLICT-80 | 每题后 | `conflict >= 80` | 是 | conflict_break | none |
| 2 | INFJ-AUDIT-R-GLOBAL-COMFORT-05 | 每题后 | `comfort <= 5` | 是 | strong_discomfort | none |
| 3 | INFJ-AUDIT-R-GLOBAL-TRUST-05 | 每题后 | `trust <= 5` | 是 | trust_broken | none |
| 4 | INFJ-AUDIT-R-GATE-Q02 | Q02 后 | 不同时满足 `attraction >= 25`、`trust >= 20`、`comfort >= 20`、`conflict <= 20` | 混合 | no_second_meeting | none |
| 5 | INFJ-AUDIT-R-GATE-Q05 | Q05 后 | 不同时满足 `attraction >= 35`、`trust >= 30`、`comfort >= 25`、`conflict <= 45` | 混合 | fade_out | none |
| 6 | INFJ-AUDIT-R-GATE-Q08 | Q08 后 | 不同时满足 `attraction >= 45`、`trust >= 40`、`comfort >= 35`、`conflict <= 45` | 混合 | stay_acquaintances | none |
| 7 | INFJ-AUDIT-R-FINAL-STRANGERS | Q10 后 | `trust < 35 OR comfort < 35 OR conflict > 50` | 否 | strangers_after_all | none |
| 8 | INFJ-AUDIT-R-FINAL-CONFIRMED | Q10 后 | `attraction >= 85 AND trust >= 65 AND comfort >= 60 AND conflict <= 25` | 是 | confirmed_relationship | 见 8a/8b |
| 8a | INFJ-AUDIT-R-EVAL-ROMANCE-STABLE | 确认恋爱内部 | `trust >= 75 AND comfort >= 70 AND conflict <= 15` | 是 | confirmed_relationship | romance_stable |
| 8b | INFJ-AUDIT-R-EVAL-ROMANCE-HIDDEN-RISK | 确认恋爱内部 | 8a 未命中 | n/a | confirmed_relationship | romance_hidden_risk |
| 9 | INFJ-AUDIT-R-FINAL-DANGEROUS | Q10 后 | `attraction >= 90 AND (trust < 65 OR comfort < 60)` | 混合 | dangerous_lovers | none |
| 10 | INFJ-AUDIT-R-FINAL-FRIENDS | Q10 后 | `attraction < 65 AND trust >= 50 AND comfort >= 45 AND conflict <= 40` | 混合 | friends | none |
| 11 | INFJ-AUDIT-R-FINAL-AMBIGUOUS | Q10 后 | 以上最终分类均未命中 | n/a | unresolved_ambiguity | none |

同一状态同时满足多条条件时，前项遮蔽后项：冲突优先于舒适与信任，舒适优先于信任，三条全局规则优先于检查点与终局；终局先判陌路，再判确认恋爱、危险恋人、朋友，最后进入未定关系。Stage 06 已验证全部结果可达；运行时仍没有 applicable-rule 诊断钩子，因此具体规则阴影保持未知，审计标签也不能冒充分析器可见规则。

## 3. 检查点与反馈追溯

| checkpoint | rules | result IDs | feedback keys |
|---|---|---|---|
| 每个选项后 | 三条 GLOBAL | conflict_break、strong_discomfort、trust_broken | 十题所有选项的 `feedbackIds`；平衡后实际使用 22 个稳定键。 |
| Q02 后 | GLOBAL → GATE-Q02 | no_second_meeting | Q02 四个选项的 8 个去重键。 |
| Q05 后 | GLOBAL → GATE-Q05 | fade_out | Q05 四个选项的 7 个去重键。 |
| Q08 后 | GLOBAL → GATE-Q08 | stay_acquaintances | Q08 四个选项的 6 个去重键。 |
| Q10 后 | GLOBAL → 五条 FINAL 与二级评价 | 5 个基础最终结局、6 个完整 outcome | Q10 四个选项的 7 个去重键。 |

精确键数组及其问题数据来源保存在机器审计合同中。反馈只说明刚发生的关系变化；不会暴露分数，也不会由选项直接指定结局。

## 4. 完整结局目录

| ending_id | family | INFJ 标题 | reachability | character basis | 文案重点 |
|---|---|---|---|---|---|
| conflict_break | global | 冲突终止关系 | verified | B02/B06/B08/B09/B12；Q02/Q04/Q07/Q08/Q10 | 猜测、调查、逼答与全面认输把沟通变成持续伤害。 |
| strong_discomfort | global | 相处无法继续 | verified | B01/B02/B04/B08；Q01/Q04/Q06/Q07 | 披露、拒绝、支持容量和暂停权失去空间。 |
| trust_broken | global | 信任彻底断裂 | verified | B02/B06/B09/B11/B12；Q02/Q04/Q05/Q08/Q10 | 准确、隐私、兑现、同意与共同决定失去依据。 |
| no_second_meeting | stage_gate | 不再约第二次 | verified | B01/B06；Q01/Q02 | 深聊或轻聊都不自动等于愿意再见。 |
| fade_out | stage_gate | 联系逐渐淡去 | verified | B02/B04/B05/B07；Q03-Q05 | 帮助、有限披露和边界没有形成稳定往来。 |
| stay_acquaintances | stage_gate | 关系停在熟人 | verified | B04/B07/B08/B09；Q06-Q08 | 互惠、暂停和回谈尚未成为可靠修复习惯。 |
| strangers_after_all | final | 最终归于陌生 | verified | B08-B12；Q07-Q10 | 过去的深度与投入不能替代终局基础。 |
| confirmed_relationship | final | 正式确认恋爱 | verified | B04/B08-B12；Q06-Q10 | 深聊、支持、暂停、修复和关系条件获得双向同意。 |
| dangerous_lovers | final | 失衡进入恋爱 | verified | B02/B10-B12；Q04/Q08-Q10 | 高吸引推动恋爱，但深度与理想不能替代信任和舒适。 |
| friends | final | 明确成为朋友 | verified | B01/B04-B06/B12；Q01-Q03/Q06/Q10 | 深聊与照顾不被默认解释为浪漫承诺。 |
| unresolved_ambiguity | final | 暧昧仍未定案 | verified | B09-B12；Q08-Q10 | 靠近仍在，关系名称与条件仍需共同确认。 |

每条记录均包含 `coreCopy`、`reasonCopy` 和 `stateSummary`，正文见展示 JSON。11 个标题均为 6 或 7 个汉字，并能在不读正文时识别终止、停止相处、信任断裂、不再见、淡出、熟人、陌生、确认恋爱、失衡恋爱、朋友或未定关系。

### 二级关系评价

| outcome_id | title | 语义 | reachability |
|---|---|---|---|
| confirmed_relationship:romance_stable | 稳定恋爱关系 | 已确认恋爱，且边界、互惠、返回和修复方法支持稳定维护。 | verified |
| confirmed_relationship:romance_hidden_risk | 恋爱仍有隐患 | 已确认恋爱，但披露、支持、节奏或修复仍未充分验证。 | verified |

二者共享基础 `ending_id`，但必须作为两个完整 outcome 保留。展示时先呈现“正式确认恋爱”，再附相应关系评价。

## 5. 类型化文案边界

INFJ 文案只使用行为模型与十题已经建立的互动：自愿深入话题、把观察说成可错假设、可拒绝的实际帮助、有限披露、延迟后明确边界、支持容量与互惠、带返回时间的暂停、分段修复、接受现实检验的愿景，以及逐项确认关系条件。

下列内容不参与判定，也不作为结局理由：读心能力、命定灵魂伴侣、天然共情或牺牲、神秘稀缺、提门或断联神话、真假 INFJ、性别和职业假设。结局理由只描述本局可观察互动，不诊断玩家或 TA。

## 6. 模糊反馈合同

本轮不创建第二套反馈语义。24 个稳定键与共享字典逐字一致：绝对变化 `5` 对应 `slight`，`10` 对应 `medium`，`15` 或 `20` 对应 `strong`；零变化不展示该维度提示。

| dimension | 健康方向 | 完整覆盖 | 组合提示策略 |
|---|---|---|---|
| attraction | 数值上升 | up/down × slight/medium/strong | 优先表达继续靠近意愿的变化。 |
| trust | 数值上升 | up/down × slight/medium/strong | 准确、保密、兑现、边界与同意优先体现为信任。 |
| comfort | 数值上升 | up/down × slight/medium/strong | 披露压力、支持容量、拒绝和暂停优先体现为舒适。 |
| conflict | 数值下降 | up/down × slight/medium/strong | 数值下降表示张力改善；明显升级或缓和可与主维度并列。 |

INFJ 平衡后 40 个选项实际使用其中 22 个键；未被选项使用的键仍保留在完整共享字典，不能据此删除或改义。

## 7. 完整性审计与 Stage 06 交接

- 11 个稳定 `EndingId` 各有且仅有一条展示内容，family 与运行时一致。
- 2 个 `RelationshipEvaluationId` 均有完整内容，并保留为两个独立 outcome。
- 24 个反馈键覆盖四维、双方向和三档强度；冲突下降的反向健康语义已明确。
- 40 个题目选项只改变状态，不含 ending ID、直接结果或故事停止字段。
- 共享规则、schema、阈值、优先级、稳定 ID 和共享反馈语义均未修改。
- Stage 06 已导入真实 INFJ 题目与共享规则，完整枚举 `4^10 = 1,048,576` 条等价完整路径；11 个基础结局和 12 个完整 outcome 全部可达且各有示例路径。
- 三个阶段门槛、Q10 抵达率及五类终局分布均进入项目建议范围；全局危险合计 8.282%，低于建议范围但不存在不可达结果。
- `expectedRuleIds` 保持空值，规则阴影明确记为未知；机器报告同时保留终止叶占比与加权完整路径占比。

**INFJ 结局与反馈现已接入生产路由；接入没有修改任何共享机制。**
