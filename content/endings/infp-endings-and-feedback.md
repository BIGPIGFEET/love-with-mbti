# INFP 选择游戏：结局、关系评价与模糊反馈

> 阶段：05 — Design Choice Game Endings  
> 状态：非运行时草稿，等待阶段 06 穷举与平衡  
> 机制模式：`reuse`

## 机制边界

本稿复用 `src/game/rules.ts` 与 `src/content/schema.ts`，没有修改初始状态、状态截断、关卡阈值、规则优先级、稳定结局 ID、关系评价 ID、状态方向或反馈键语义。

文档中的 `AUDIT-*` 只是审计标签。当前共享运行时没有稳定的规则 ID，因此这些标签不得写入 `expectedRuleIds` 或伪装成运行时输出。

## 规则优先级

同一步同时满足多个条件时，只采用表中最先命中的规则。比较符号按共享代码原样保留：`>=` 和 `<=` 都包含边界；朋友线的 `attraction < 60` 不包含 60。

| 顺序 | 审计标签 | 触发条件 | 结果 |
|---:|---|---|---|
| 1 | `AUDIT-R-GLOBAL-CONFLICT-80` | `conflict >= 80` | `conflict_break` |
| 2 | `AUDIT-R-GLOBAL-COMFORT-05` | `comfort <= 5` | `strong_discomfort` |
| 3 | `AUDIT-R-GLOBAL-TRUST-05` | `trust <= 5` | `trust_broken` |
| 4 | `AUDIT-R-GATE-Q02` | Q02 后不满足 `trust >= 15 && comfort >= 15 && conflict <= 50` | `no_second_meeting` |
| 5 | `AUDIT-R-GATE-Q05` | Q05 后不满足 `trust >= 25 && comfort >= 20 && conflict <= 60` | `fade_out` |
| 6 | `AUDIT-R-GATE-Q08` | Q08 后不满足 `attraction >= 35 && trust >= 25 && comfort >= 20 && conflict <= 65` | `stay_acquaintances` |
| 7 | `AUDIT-R-FINAL-STRANGERS` | Q10 后 `trust <= 20 || comfort <= 20 || conflict >= 70` | `strangers_after_all` |
| 8 | `AUDIT-R-FINAL-CONFIRMED` | Q10 后 `attraction >= 70 && trust >= 50 && comfort >= 45 && conflict <= 45` | `confirmed_relationship` |
| 9 | `AUDIT-R-FINAL-DANGEROUS` | Q10 后 `attraction >= 70` | `dangerous_lovers` |
| 10 | `AUDIT-R-FINAL-FRIENDS` | Q10 后 `trust >= 45 && comfort >= 45 && conflict <= 45 && attraction < 60` | `friends` |
| 11 | `AUDIT-R-FINAL-AMBIGUOUS` | Q10 后没有更早规则命中 | `unresolved_ambiguity` |

确认关系后的二级评价不改变基础结局：`trust >= 65 && comfort >= 60 && conflict <= 25` 时为 `romance_stable`，否则为 `romance_hidden_risk`。

## 结局目录

| 稳定 ID | 标题 | 家族 | 可达性状态 |
|---|---|---|---|
| `conflict_break` | 话只剩下防御 | global | 待阶段 06 穷举 |
| `strong_discomfort` | 相处开始需要防备 | global | 待阶段 06 穷举 |
| `trust_broken` | 重要的话不再交给你 | global | 待阶段 06 穷举 |
| `no_second_meeting` | 雨停以后，没有下次 | stage gate | 待阶段 06 穷举 |
| `fade_out` | 愿景没有落到下一次 | stage gate | 待阶段 06 穷举 |
| `stay_acquaintances` | 停在熟悉的边缘 | stage gate | 待阶段 06 穷举 |
| `strangers_after_all` | 说过很多，还是走散 | final | 待阶段 06 穷举 |
| `confirmed_relationship` | 把下次写进日历 | final | 待阶段 06 穷举 |
| `dangerous_lovers` | 很想靠近，还没有站稳 | final | 待阶段 06 穷举 |
| `friends` | 还会记得你说过的小事 | final | 待阶段 06 穷举 |
| `unresolved_ambiguity` | 答案还留在信封里 | final fallback | 待阶段 06 穷举 |

每个结局都提供 `coreCopy`、`reasonCopy` 和 `stateSummary`；完整正文以 `infp-ending-content-draft.json` 为准。结局页保留重新开始、分享、返回类型选择三个动作，不把动作写进共享内容 schema。

## 确认关系的二级评价

| 稳定 ID | 标题 | 徽章 | 使用条件 |
|---|---|---|---|
| `romance_stable` | 会回来把话说完 | 关系评价：稳定而有呼吸 | 确认关系后，信任与舒适更高且冲突更低 |
| `romance_hidden_risk` | 协议之外，还有空白 | 关系评价：靠近已确认，维护待验证 | 确认关系但未达到稳定评价阈值 |

关系评价是 `confirmed_relationship` 的补充说明，不取代或重命名基础结局。

## 模糊反馈语义

反馈全集为四个维度 × 两个方向 × 三档强度，共 24 个稳定键。强度映射沿用现有约定：绝对值 5 为 `slight`，10 为 `medium`，15 或 20 为 `strong`。零变化不显示提示；每个选项显示 1–2 条，顺序以问题稿中的 `feedbackIds` 为准。

- `attraction`、`trust`、`comfort` 上升表示关系更健康，下降表示受损。
- `conflict` 方向相反：下降表示缓和，上升表示恶化。
- 文案描述可观察到的关系变化，不暴露数值、阈值或 MBTI 术语。

24 条正式文案及其 `dimension`、`direction`、`strength` 字段存放在 `infp-ending-content-draft.json`。40 个选项到反馈键、检查点规则与最终规则的逐项映射存放在 `../traceability/infp-ending-rule-contract.json`。

## 可达性声明

11 个基础结局、两个关系评价以及任何遮蔽关系，在阶段 06 完成全部路径枚举前统一标记为“未知”，本阶段不凭直觉声称可达或均衡。
