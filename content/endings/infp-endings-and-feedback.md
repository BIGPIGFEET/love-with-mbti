# INFP 选择游戏：结局、关系评价与模糊反馈

> 阶段：05 — Design Choice Game Endings  
> 状态：非运行时草稿，等待阶段 06 穷举与平衡  
> 机制模式：`reuse`

## 机制边界

本稿复用 `src/game/rules.ts` 与 `src/content/schema.ts`，没有修改初始状态、状态截断、关卡阈值、规则优先级、稳定结局 ID、关系评价 ID、状态方向或反馈键语义。

文档中的 `AUDIT-*` 只是审计标签。当前共享运行时没有稳定的规则 ID，因此这些标签不得写入 `expectedRuleIds` 或伪装成运行时输出。

## 规则优先级

同一步同时满足多个条件时，只采用表中最先命中的规则。比较符号按共享代码原样保留；`<`、`>` 与 `<=`、`>=` 的边界差异不得互换。

| 顺序 | 审计标签 | 触发条件 | 结果 |
|---:|---|---|---|
| 1 | `AUDIT-R-GLOBAL-CONFLICT-80` | `conflict >= 80` | `conflict_break` |
| 2 | `AUDIT-R-GLOBAL-COMFORT-05` | `comfort <= 5` | `strong_discomfort` |
| 3 | `AUDIT-R-GLOBAL-TRUST-05` | `trust <= 5` | `trust_broken` |
| 4 | `AUDIT-R-GATE-Q02` | Q02 后不满足 `attraction >= 25 && trust >= 20 && comfort >= 20 && conflict <= 20` | `no_second_meeting` |
| 5 | `AUDIT-R-GATE-Q05` | Q05 后不满足 `attraction >= 35 && trust >= 30 && comfort >= 25 && conflict <= 45` | `fade_out` |
| 6 | `AUDIT-R-GATE-Q08` | Q08 后不满足 `attraction >= 45 && trust >= 40 && comfort >= 35 && conflict <= 45` | `stay_acquaintances` |
| 7 | `AUDIT-R-FINAL-STRANGERS` | Q10 后 `trust < 35 || comfort < 35 || conflict > 50` | `strangers_after_all` |
| 8 | `AUDIT-R-FINAL-CONFIRMED` | Q10 后 `attraction >= 85 && trust >= 65 && comfort >= 60 && conflict <= 25` | `confirmed_relationship` |
| 9 | `AUDIT-R-FINAL-DANGEROUS` | Q10 后 `attraction >= 90 && (trust < 65 || comfort < 60)` | `dangerous_lovers` |
| 10 | `AUDIT-R-FINAL-FRIENDS` | Q10 后 `attraction < 65 && trust >= 50 && comfort >= 45 && conflict <= 40` | `friends` |
| 11 | `AUDIT-R-FINAL-AMBIGUOUS` | Q10 后没有更早规则命中 | `unresolved_ambiguity` |

确认关系后的二级评价不改变基础结局：`trust >= 75 && comfort >= 70 && conflict <= 15` 时为 `romance_stable`，否则为 `romance_hidden_risk`。

## 结局目录

| 稳定 ID | 标题 | 家族 | 可达性状态 |
|---|---|---|---|
| `conflict_break` | 冲突中分开 | global | Stage 06 已验证可达 |
| `strong_discomfort` | 相处不再继续 | global | Stage 06 已验证可达 |
| `trust_broken` | 失信后告别 | global | Stage 06 已验证可达 |
| `no_second_meeting` | 没有第二次见面 | stage gate | Stage 06 已验证可达 |
| `fade_out` | 联系渐渐淡出 | stage gate | Stage 06 已验证可达 |
| `stay_acquaintances` | 关系止于相识 | stage gate | Stage 06 已验证可达 |
| `strangers_after_all` | 最终成为陌生人 | final | Stage 06 已验证可达 |
| `confirmed_relationship` | 正式确认恋爱 | final | 两种关系评价均已验证可达 |
| `dangerous_lovers` | 强烈但不稳的恋爱 | final | Stage 06 已验证可达 |
| `friends` | 成为稳定朋友 | final | Stage 06 已验证可达 |
| `unresolved_ambiguity` | 关系仍未说定 | final fallback | Stage 06 已验证可达 |

每个结局都提供 `coreCopy`、`reasonCopy` 和 `stateSummary`；完整正文以 `infp-ending-content-draft.json` 为准。结局页保留重新开始、分享、返回类型选择三个动作，不把动作写进共享内容 schema。

## 确认关系的二级评价

| 稳定 ID | 标题 | 徽章 | 使用条件 |
|---|---|---|---|
| `romance_stable` | 稳定恋爱关系 | 关系评价：稳定恋爱 | 确认关系后，信任与舒适更高且冲突更低 |
| `romance_hidden_risk` | 恋爱仍有隐患 | 关系评价：恋爱已确认，仍有隐患 | 确认关系但未达到稳定评价阈值 |

关系评价是 `confirmed_relationship` 的补充说明，不取代或重命名基础结局。

## INFP 文案依据

文案不从 “INFP” 四个字母直接推断，而是引用已批准行为模型与实际题目互动。逐结局的 `behaviorIds`、`questionIds`、语气、内容边界和状态摘要策略记录在 `../traceability/infp-ending-rule-contract.json`。

- 初识与淡出结局主要依据 B01–B06：披露节奏、真实回应、低压力邀约、个性化表达以及愿景落地。
- 全局危险结局主要依据 B01、B02、B07–B10、B13：拒绝权、暂停与返回、边界表达、安排兑现和逐项确认。
- 最终关系结局主要依据 B08、B10–B13：修复、可靠性、关系确认、现实校正与互惠边界。
- 文案只描述玩家选择形成的互动后果，不把沉默、理想化、敏感或冲突方式写成人格诊断。

## 模糊反馈语义

反馈全集为四个维度 × 两个方向 × 三档强度，共 24 个稳定键。强度映射沿用现有约定：绝对值 5 为 `slight`，10 为 `medium`，15 或 20 为 `strong`。零变化不显示提示；每个选项显示 1–2 条，顺序以问题稿中的 `feedbackIds` 为准。

- `attraction`、`trust`、`comfort` 上升表示关系更健康，下降表示受损。
- `conflict` 方向相反：下降表示缓和，上升表示恶化。
- 文案描述可观察到的关系变化，不暴露数值、阈值或 MBTI 术语。

24 条正式文案及其 `dimension`、`direction`、`strength` 字段存放在 `infp-ending-content-draft.json`。40 个选项到反馈键、检查点规则与最终规则的逐项映射存放在 `../traceability/infp-ending-rule-contract.json`。

## 可达性声明

Stage 06 已使用真实 `applyEffects` 与 `resolveEnding` 穷举全部 `4^10 = 1,048,576` 条等价路径。11 个基础结局和 `romance_stable`、`romance_hidden_risk` 两个关系评价均有至少一条实例路径。运行时没有“所有同时适用规则”的诊断钩子，因此规则遮蔽仍明确标记为未知；完整指标见 `../questions/infp-balance-report.json`。
