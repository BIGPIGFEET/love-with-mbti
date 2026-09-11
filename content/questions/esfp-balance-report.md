# ESFP 选择路径平衡报告（Stage 06）

## 1. 范围与方法

- 分析日期：2026-09-11。
- 题目源：`src/content/esfp-questions.ts`，SHA-256 `9013938ce8414bad9f843353f0ed24011740d8133ec15a1f9c71bca50dac0269`。
- 结局内容：`src/content/esfp-endings.ts`，SHA-256 `fa7e11e9b5158df594fa62be2de2392b41bc982fda087f126e02417b7e97e858`。
- 固定机制：`src/game/rules.ts`，SHA-256 `c4a744d810f463ee1695263590e5dc3e8037163b064e6b6522d1794b24573d03`。
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-esfp-adapter.mjs`，SHA-256 `c73ef0d2776ffb58b301cf77f34147c8729b8efc45bac9084840a48110fd7e86`。
- 机器报告：`content/questions/esfp-balance-report.json`，由 bundled analyzer 的 JSON 输出直接生成，未手工改写计算字段。

复现命令：

```powershell
node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs .codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-esfp-adapter.mjs --json
```

适配器直接导入 ESFP 内联题目，并调用真实 `applyEffects` 与 `resolveEnding`。分析完整枚举 `4^10 = 1,048,576` 条等价完整选择路径；早退轨迹按未作答后缀的选项数加权，最终 `weightedTotal` 同为 `1,048,576`。实际形成 `319,159` 条截断 terminal trajectory。

本报告以 `weightedPathPercentages` 作为“每次遇到的四个选项等概率”时的路径概率模型。`trajectoryPercentages` 只描述截断终止叶的数量占比，不表示玩家概率。ESFP 尚未注册为可玩内容包，因此本报告使用独立生产等价适配器，不把未注册状态误写为可玩状态。

## 2. 基线、调整与最终决定

基线已在修改前完整枚举。只调整了 Q02 两个选项的 `comfort` 档位和对应模糊反馈：

- `q02_take_over_the_room`：`comfort +5 → +15`，反馈由 `comfort_up_slight` 同步为 `comfort_up_strong`。主动接过话题能提供明显的即时喘息，但其余维度仍没有被协商方案全面改善。
- `q02_read_silence_as_rejection`：`comfort -10 → -5`，反馈由 `comfort_down_medium` 同步为 `comfort_down_slight`。误读沉默仍以 `conflict +15` 为主要伤害轴，不再让一次初识追问直接叠成舒适度全局早退。

| metric | baseline | final | disposition |
|---|---:|---:|---|
| terminal trajectories | 317,875 | 319,159 | 早退结构随 Q02 调整变化；完整加权空间不变。 |
| `conflict_break` weighted share | 0.009% | 0.009% | 可达但低于 3%–5%；不为填充罕见冲突而放大普通分歧。 |
| `strong_discomfort` weighted share | 13.740% | 5.534% | 从超过 10% 硬上限降至 4%–6% 推荐区间。 |
| `trust_broken` weighted share | 2.078% | 2.849% | 可达但低于 4%–6%；不把初识误读改造成信任崩塌。 |
| global danger combined | 15.828% | 8.392% | 低于 11%–17%；接受该缺口，避免用无证据的重罚补足总量。 |
| Q02 `no_second_meeting` eligible failure | 20.000% | 25.000% | 仍在 20%–25%，并把低强度初识失败留给阶段门槛。 |
| Q05 `fade_out` eligible failure | 30.145% | 31.098% | 仍在 30%–38%。 |
| Q08 `stay_acquaintances` eligible failure | 35.352% | 35.370% | 仍在 35%–45%。 |
| Q10 classifier reach | 29.146% | 29.276% | 仍在 20%–30%。 |
| global strategy dominance | negotiate > accommodate | none | Q02 的局部收益分化移除了跨十题原始效果支配。 |

没有修改共享阈值、结局优先级、题目顺序、选项顺序、策略 ID 或叙事行为。其余分布偏差保留并在下文逐项披露；继续调整需要改变更多后期效果，当前没有足够叙事依据。

## 3. 覆盖与两种分布

11 个声明的基础 ending ID 和 12 个声明的完整 outcome key 全部可达；`missing=[]`、`unexpected=[]`。两个 `confirmed_relationship` 二级评价分别保存，没有合并丢失。

| complete outcome | weighted path % | terminal trajectory % | reference note |
|---|---:|---:|---|
| `conflict_break` | 0.009% | 0.002% | 全局危险；低于推荐但可达。 |
| `strong_discomfort` | 5.534% | 0.288% | 全局危险；在推荐区间。 |
| `trust_broken` | 2.849% | 0.162% | 全局危险；低于推荐但可达。 |
| `no_second_meeting` | 25.000% | 0.001% | Q02 阶段门槛；早退权重解释两列差异。 |
| `fade_out` | 21.289% | 0.068% | Q05 阶段门槛。 |
| `stay_acquaintances` | 16.043% | 3.294% | Q08 阶段门槛。 |
| `strangers_after_all` | 3.596% | 11.814% | Q10 完整结果。 |
| `confirmed_relationship:romance_stable` | 3.867% | 12.704% | Q10 完整结果；稳定评价可达。 |
| `confirmed_relationship:romance_hidden_risk` | 1.327% | 4.361% | Q10 完整结果；隐患评价可达。 |
| `dangerous_lovers` | 0.677% | 2.223% | Q10 完整结果。 |
| `friends` | 3.039% | 9.984% | Q10 完整结果。 |
| `unresolved_ambiguity` | 16.771% | 55.099% | Q10 完整结果。 |

`trajectory %` 给每个不同深度的终止叶相同权重，因此会显著压低早退结局、放大 Q10 结果。等概率选择下的概率判断必须使用 `weighted path %`。

## 4. 全局危险与阶段门槛

| global ending | weighted paths | weighted share | status |
|---|---:|---:|---|
| `conflict_break` | 96 | 0.009% | below recommended, reachable |
| `strong_discomfort` | 58,026 | 5.534% | within recommended |
| `trust_broken` | 29,872 | 2.849% | below recommended, reachable |
| combined | 87,994 | 8.392% | below recommended, below 20% hard maximum |

全局危险合计低于参考范围，原因不是漏报：三个结局均有实际路径。若把 Q02 的“误读沉默”继续作为中等舒适伤害，它会与 Q01 的表演压力叠加，使一次初识组合直接贡献 6.25% 的 `strong_discomfort`，并将该结局推到硬上限之上。最终调整把这类路径交还给 `no_second_meeting`，符合低阶段、低烈度的关系语义。其余冲突断裂和信任断裂不通过放大普通选择来补量。

阶段门槛分母只包括在对应 checkpoint 未被更高优先级全局规则选中的加权路径：

| gate | eligible weighted paths | failure weighted paths | conditional failure | status |
|---|---:|---:|---:|---|
| Q02 `no_second_meeting` | 1,048,576 | 262,144 | 25.000% | within 20%–25% |
| Q05 `fade_out` | 717,824 | 223,232 | 31.098% | within 30%–38% |
| Q08 `stay_acquaintances` | 475,616 | 168,224 | 35.370% | within 35%–45% |

## 5. Q10 最终分类器

共有 `306,982` 条加权路径到达 Q10 最终分类器，占完整选择空间 `29.276%`，处于 20%–30% 参考区间。Q10 条件分布如下：

| outcome group | Q10-conditional share | reference | disposition |
|---|---:|---:|---|
| `strangers_after_all` | 12.283% | 15%–20% | 偏低；仍可达，不额外惩罚后期选项。 |
| `confirmed_relationship` combined | 17.742% | 10%–15% | 偏高；两个二级评价均可达，未为压低确认率削弱明确同意与修复。 |
| `dangerous_lovers` | 2.311% | 5%–10% | 偏低；仍要求高吸引与较弱信任/舒适，不放宽共享分类器。 |
| `friends` | 10.380% | 18%–25% | 偏低；朋友条件与高吸引存在非单调关系，不将诚实靠近机械改成低吸引。 |
| `unresolved_ambiguity` | 57.284% | 35%–45% | 偏高；保留为当前 ESFP 效果模型的主要终局偏差。 |

`confirmed_relationship` 在完整等概率空间中的合计为 `5.194%`，高于约 2%–4% 的参考提示。继续把后期大量路径从“关系未定”拆向陌生、危险恋爱或朋友，需要同时改变 Q09–Q10 的吸引、信任或舒适效果；本轮不在缺少新的行为依据时为分布目标扩大修改。

## 6. 固定位置与固定策略

| fixed position | terminal outcome | stopped after | review |
|---:|---|---:|---|
| 1 | `stay_acquaintances` | Q08 | 没有稳定恋爱捷径。 |
| 2 | `fade_out` | Q05 | 中段结束。 |
| 3 | `no_second_meeting` | Q02 | 初识结束。 |
| 4 | `unresolved_ambiguity` | Q10 | 可到达最终分类器。 |

四个固定位置产生四种不同结果，没有一个位置普遍成功或失败，也没有固定位置直接锁定确认恋爱。

| fixed strategy | applicable | terminal outcome | review |
|---|---|---|---|
| `accommodate` | yes | `trust_broken` at Q05 | 连续隐藏偏好和代价会损害可靠性；不是对顺从的奖励。 |
| `honest` | yes | `unresolved_ambiguity` at Q10 | 诚实保留排他与信任未决，不自动确认恋爱。 |
| `negotiate` | yes | `confirmed_relationship:romance_stable` at Q10 | 连续明确边界、兑现和双向修复形成稳定关系。 |
| `risky` | yes | `no_second_meeting` at Q02 | 连续要求表演并误读沉默在初识阶段终止关系。 |
| `confront` | no | missing at Q01 | 并非每题都有该策略，不能解释为固定策略路径。 |

最终没有跨十题的原始效果策略支配。固定策略只说明相同标签的重复选择结果，不代表真实玩家会等概率或机械地重复一种策略。

## 7. 局部支配与效果预算

机器报告保留全部 53 组局部原始效果支配。局部支配不是全局结局支配，因为朋友结局对吸引存在非单调条件，且阶段门槛与优先级会改变后续价值。

| question | dominance pairs | narrative disposition |
|---|---:|---|
| Q01 | 5 | 限时体验、坦诚拒绝、模糊顺从与要求表演是不同的初识行为；保留被支配项作为可识别风险。 |
| Q02 | 3 | 主动接话提供强舒适收益但不增加吸引或信任；协商安静空间仍有不同的关系功能。 |
| Q03 | 5 | 全盘配合、人格化定性、保留核心和坦诚守约分别测试隐藏代价与可靠安排。 |
| Q04 | 6 | 清楚安排支持最强，但接管工作、具体求助和模糊需求仍是不同的支持边界。 |
| Q05 | 5 | 预算替代方案有意较强；嘲讽、勉强支付和坦诚拒绝不可互换。 |
| Q06 | 6 | 连接案例与原则有意较强；贬低、直接提问和回避分歧保留不同对话行为。 |
| Q07 | 6 | 小信号是建设性协商；坦诚失落、压下需要和指责动机有独立叙事意义。 |
| Q08 | 6 | 有边界的回谈有意较强；无限等待、强迫当场解决与说明自身暂停测试不同修复风险。 |
| Q09 | 5 | 逐项确认有意较强；坦诚不排他、交出决定与默认全套授权是不同关系立场。 |
| Q10 | 6 | 双向协议有意较强；保留不确定、假装翻篇与监控要求产生不同终局含义。 |

6 条建议预算警告均未超过 60 的硬上限，也没有超过两个高强度轴：

| option | total absolute change | disposition |
|---|---:|---|
| `q05_mock_the_price` | 45 | 保留；公开羞辱消费动机，以冲突为主要伤害。 |
| `q06_call_it_shallow` | 50 | 保留；智力/深度贬低同时损害信任并推高冲突。 |
| `q07_accuse_attention_seeking` | 45 | 保留；把失落转为动机指责，以冲突为主要伤害。 |
| `q08_block_the_exit` | 60 | 保留；明确取消离场权，是本组最严重的强迫行为。 |
| `q09_assume_full_permission` | 50 | 保留；既往牵手不能打包授权公开与排他。 |
| `q10_demand_surveillance` | 50 | 保留；以修复为名要求定位和随时回复，核心风险是控制。 |

这些选项的即时回应、`feedbackIds` 与效果方向/强度保持一致。它们虽然在原始向量上被建设性选择支配，但行为边界清楚，且最终所有结局可达，因此保留并在报告中显式处置。

## 8. 每个完整结果的示例路径

以下示例均由最终 JSON 自动记录；状态顺序为 `attraction / trust / comfort / conflict`。

| complete outcome | example option-ID path | final state |
|---|---|---|
| `conflict_break` | `q01_try_ten_minutes → q02_read_silence_as_rejection → q03_call_change_unreliable → q04_ask_for_concrete_help → q05_name_budget_and_alternative → q06_call_it_shallow → q07_accuse_attention_seeking → q08_block_the_exit` | `5 / 0 / 0 / 80` |
| `strong_discomfort` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_call_it_shallow → q07_accuse_attention_seeking → q08_block_the_exit` | `15 / 0 / 5 / 65` |
| `trust_broken` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_call_it_shallow → q07_accuse_attention_seeking → q08_allow_unbounded_pause` | `25 / 0 / 30 / 50` |
| `no_second_meeting` | `q01_decline_with_alternative → q02_read_silence_as_rejection` | `20 / 30 / 25 / 25` |
| `fade_out` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_dump_and_demand_fix → q05_mock_the_price` | `35 / 20 / 15 / 30` |
| `stay_acquaintances` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_call_it_shallow → q07_name_disconnection → q08_allow_unbounded_pause` | `40 / 20 / 50 / 30` |
| `strangers_after_all` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_call_it_shallow → q07_name_disconnection → q08_set_return_scope → q09_defer_all_to_them → q10_erase_the_conflict` | `50 / 30 / 55 / 15` |
| `confirmed_relationship:romance_stable` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_name_abstract_need → q07_create_check_in_signal → q08_set_return_scope → q09_define_each_boundary → q10_keep_uncertainty_visible` | `85 / 95 / 90 / 0` |
| `confirmed_relationship:romance_hidden_risk` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_name_abstract_need → q07_create_check_in_signal → q08_state_own_pause → q09_defer_all_to_them → q10_keep_uncertainty_visible` | `85 / 70 / 75 / 5` |
| `dangerous_lovers` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_name_budget_and_alternative → q06_name_abstract_need → q07_name_disconnection → q08_allow_unbounded_pause → q09_assume_full_permission → q10_keep_uncertainty_visible` | `90 / 55 / 80 / 10` |
| `friends` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_call_it_shallow → q07_name_disconnection → q08_set_return_scope → q09_define_each_boundary → q10_erase_the_conflict` | `50 / 50 / 70 / 5` |
| `unresolved_ambiguity` | `q01_try_ten_minutes → q02_notice_without_label → q03_drop_plan_silently → q04_sequence_support → q05_mock_the_price → q06_call_it_shallow → q07_name_disconnection → q08_set_return_scope → q09_define_each_boundary → q10_keep_uncertainty_visible` | `65 / 70 / 70 / 5` |

## 9. 规则诊断与发布边界

- 生产 resolver 没有稳定 rule ID，也没有返回所有适用规则的诊断 hook；因此 rule coverage 未声明，precedence shadowing 状态为 `unknown`。本报告不把审计标签伪装成运行时规则 ID。
- 适配器保持生产顺序：每题应用效果后调用真实 resolver；Q10 由同一个 resolver 返回最终基础 ending 与可选 evaluation。
- ESFP 报告已满足 Stage-06 的完整枚举、加权校验、覆盖、示例和诊断交付，但 ESFP 仍未注册为可玩类型。上线注册属于独立的内容包集成步骤，需要更新 canonical registry 并再次运行全项目验证。
