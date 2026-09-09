# ISFJ 选择路径平衡报告（Stage 06）

## 1. 范围与方法

- 分析日期：2026-09-04
- 题目权威源：`src/content/isfj-questions.ts`
- 结局文案权威源：`src/content/isfj-endings.ts`
- 固定生产规则：`src/game/rules.ts` 的 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-isfj-adapter.mjs`
- 分析器：`.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- 机器报告：`content/questions/isfj-balance-report.json`
- 确定性刷新脚本：`scripts/refresh-isfj-balance-report.mjs`

十题均有四个选项，分析器完整枚举 `4^10 = 1,048,576` 条等价完整路径。最终报告包含 303,028 条截断终端轨迹，其中 11,444 条在 Q10 前结束；提前结束路径按尚未作答题目的选项乘积补足后，`weightedTotal` 仍为 1,048,576。

本报告严格区分两种分布：`weightedPathPercentages` 是所有可选答案等概率时的完整路径概率模型；`trajectoryPercentages` 只表示截断终端叶的路线份额与多样性，不等同于玩家概率。阶段门和 Q10 漏斗判断均以加权路径为主；这些数值是游戏设计诊断，不是人群统计。

复现命令：

```powershell
node scripts/refresh-isfj-balance-report.mjs
```

## 2. 基线、调整与最终结果

| 指标 | Stage 04 基线 | Stage 06 最终 | 参考状态 |
|---|---:|---:|---|
| 全局危险合计 | 15.322% | 11.430% | 在 11%–17% 内，低于 20% 硬上限 |
| Q2 `no_second_meeting` 条件失败率 | 13.333% | 20.000% | 在 20%–25% 内 |
| Q5 `fade_out` 条件失败率 | 15.241% | 35.883% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` 条件失败率 | 18.010% | 37.691% | 在 35%–45% 内 |
| Q10 分类器到达率 | 50.030% | 27.804% | 在 20%–30% 内 |
| Q10 `confirmed_relationship` 合计 | 4.777% | 14.074% | 在 10%–15% 内 |
| Q10 `dangerous_lovers` | 0.426% | 3.038% | 低于 5%–10% |
| Q10 `friends` | 39.691% | 21.893% | 在 18%–25% 内 |
| Q10 `unresolved_ambiguity` | 50.475% | 57.828% | 高于 35%–45% |
| 缺失完整 outcome | `conflict_break`、`trust_broken` | 无 | 12 个完整 outcome 全部可达 |
| 效果预算警告 | 0 | 0 | 40 个选项均不超过普通建议值 40 |

本轮只调整 ISFJ 的 22 个选项效果及对应反馈键或反馈文案，没有修改共享初始状态、clamp、阶段阈值、规则顺序、稳定 ID 或分类器：

- Q01–Q08 将强迫证明、披露施压、照顾角色和忠诚测试分别投向信任、舒适或冲突，避免所有危险路径只落入 `strong_discomfort`。
- Q01、Q03、Q04 把“说清规则”和“产生浪漫吸引”拆开；Q05 前不再由每个成熟回答自动叠加高吸引，因此 Q5 阶段门能区分安全沟通与现实靠近。
- Q06 只让承担责任或建立可执行轮换带来有限吸引；Q07–Q08 继续用共同试行和返回协议决定能否通过熟悉阶段门。
- Q09 把承认既得便利、公开重分责任和容量排班写成不同强度的靠近；把“照顾就是爱”写成高吸引投射与信任损伤并存，为 `dangerous_lovers` 提供语义一致的入口。
- Q10 的表面全答应改为强吸引、强信任损伤；永久忠诚保证改为强不适与强冲突。正式协议和诚实未准备项保留原有效果。

## 3. 完整结果的两种分布

| 完整 outcome | 完整路径加权占比 | 截断终端轨迹占比 |
|---|---:|---:|
| `confirmed_relationship:romance_hidden_risk` | 1.360% | 4.705% |
| `confirmed_relationship:romance_stable` | 2.554% | 8.836% |
| `conflict_break` | 0.148% | 0.028% |
| `dangerous_lovers` | 0.845% | 2.923% |
| `fade_out` | 25.195% | 0.085% |
| `friends` | 6.087% | 21.063% |
| `no_second_meeting` | 18.750% | 0.001% |
| `stay_acquaintances` | 16.821% | 3.638% |
| `strangers_after_all` | 0.880% | 3.047% |
| `strong_discomfort` | 1.566% | 0.017% |
| `trust_broken` | 9.715% | 0.020% |
| `unresolved_ambiguity` | 16.078% | 55.637% |

例如 `no_second_meeting` 只有 3 条截断终端轨迹，却代表 196,608 条等价完整路径；因此 0.001% 的终端轨迹份额不能替代 18.750% 的加权完整路径概率。

## 4. 覆盖与全局危险

- 11 个声明的基础结局全部可达，没有缺失或意外 ID。
- 12 个声明的完整 outcome 全部可达，包括 `confirmed_relationship` 下两个独立关系评价。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 明确保持 `unknown`，不能从缺失计数推断规则遮蔽。

| 全局结局 | 加权路径数 | 完整路径占比 | 参考状态 |
|---|---:|---:|---|
| `conflict_break` | 1,552 | 0.148% | 低于 3%–5% |
| `strong_discomfort` | 16,423 | 1.566% | 低于 4%–6% |
| `trust_broken` | 101,872 | 9.715% | 高于 4%–6%，仍低于 10% 硬上限 |
| 合计 | 119,847 | 11.430% | 在 11%–17% 内，低于 20% 硬上限 |

危险结局内部构成保留为明确偏差。连续把参与节奏、一次帮助和兴趣表达改造成证明义务，会在早段直接耗尽信任，因此 `trust_broken` 接近单项硬上限；若仅为降占比而减轻这些行为，会模糊同意与角色自主边界。相反，`conflict_break` 需要在通过较早阶段门后继续多次升级对抗，`strong_discomfort` 只由触碰、强迫披露等高压组合触发。继续追齐单项推荐区间，会要求给普通拒绝、等待边界或修复行为追加不合语义的高冲突或强不适。

## 5. 阶段门

阶段门分母只包含在该检查点未被更高优先级全局结局截断的加权路径。

| 检查点 | 合格加权路径 | 失败加权路径 | 条件失败率 | 参考状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 983,040 | 196,608 | 20.000% | 在 20%–25% 内 |
| Q5 `fade_out` | 736,256 | 264,192 | 35.883% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` | 467,968 | 176,384 | 37.691% | 在 35%–45% 内 |

Q2 由吸引、信任与舒适的具体前缀决定是否还有下一次；Q5 把安全交流与实际靠近分开；Q8 再要求长期分工、变化协商和暂停返回共同达到熟悉阶段门槛。三个阶段门均处于参考区间且没有异常高值。

## 6. Q10 最终分类器

有 291,545 条加权路径到达 Q10 分类器，占完整等概率空间的 27.804%。在这些路径内部：

| 完整结果组 | Q10 条件占比 | 参考状态 |
|---|---:|---|
| `strangers_after_all` | 3.167% | 低于 15%–20% |
| `confirmed_relationship` 合计 | 14.074% | 在 10%–15% 内；完整空间占比约 3.914% |
| `dangerous_lovers` | 3.038% | 低于 5%–10% |
| `friends` | 21.893% | 在 18%–25% 内 |
| `unresolved_ambiguity` | 57.828% | 高于 35%–45% |

两个关系评价分别为：

| 完整 outcome | Q10 条件占比 | 加权路径数 |
|---|---:|---:|
| `confirmed_relationship:romance_stable` | 9.184% | 26,776 |
| `confirmed_relationship:romance_hidden_risk` | 4.890% | 14,257 |

最终分类器仍保留三项偏差。到达 Q10 的路径已经通过三个四维阶段门，通常保有较高信任和舒适；把 `strangers_after_all` 强推到 15%–20%，必须让正常的诚实限制或共同协议把信任、舒适打到 35 以下或把冲突推过 50。`dangerous_lovers` 已由“照顾就是爱”的高吸引投射和隐藏限制组合从 0.426% 提升到 3.038%，继续增加需要把 TA 明确拒绝的控制行为写成更高的相互吸引。`unresolved_ambiguity` 作为剩余分类器承接了安全但尚未同时满足吸引、承诺和退出条件的路径，因此保持偏高。后续若有真实选择遥测，应按观察到的选项权重重算，而不是继续用极端效果追齐等概率参考区间。

## 7. 每个完整 outcome 的示例路径

下列路径与终态均由最终 JSON 保存；状态顺序为 `吸引/信任/舒适/冲突`。

| 完整 outcome | 加权路径数 | 示例选项路径 | 示例终态 |
|---|---:|---|---|
| `confirmed_relationship:romance_hidden_risk` | 14,257 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_build_a_rotation → q07_design_a_partial_trial → q08_block_the_pause → q09_admit_your_benefit → q10_agree_to_everything_unsure | `85/65/80/20` |
| `confirmed_relationship:romance_stable` | 26,776 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_build_a_rotation → q07_design_a_partial_trial → q08_confirm_the_return_protocol → q09_admit_your_benefit → q10_agree_to_everything_unsure | `85/80/95/0` |
| `conflict_break` | 1,552 | q01_name_your_pace → q02_set_the_borrowing_scope → q03_rebuild_the_plan_together → q04_accept_the_gift_only → q05_press_for_every_detail_now → q06_call_help_their_love_language → q07_make_change_a_loyalty_test → q08_block_the_pause | `30/20/35/80` |
| `dangerous_lovers` | 8,858 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_build_a_rotation → q07_design_a_partial_trial → q08_block_the_pause → q09_use_care_as_a_love_test → q10_agree_to_everything_unsure | `90/40/60/20` |
| `fade_out` | 264,192 | q01_name_your_pace → q02_turn_help_into_a_role → q03_rebuild_the_plan_together → q04_accept_the_gift_only → q05_press_for_every_detail_now | `30/25/30/25` |
| `friends` | 63,827 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_name_the_imbalance → q07_design_a_partial_trial → q08_block_the_pause → q09_admit_your_benefit → q10_state_what_is_not_ready | `60/95/90/15` |
| `no_second_meeting` | 196,608 | q01_join_the_small_table → q02_turn_help_into_a_role | `35/15/20/10` |
| `stay_acquaintances` | 176,384 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_name_the_imbalance → q07_keep_plans_and_go_separately → q08_block_the_pause | `40/55/70/20` |
| `strangers_after_all` | 9,232 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_call_help_their_love_language → q07_design_a_partial_trial → q08_confirm_the_return_protocol → q09_use_care_as_a_love_test → q10_agree_to_everything_unsure | `85/25/60/0` |
| `strong_discomfort` | 16,423 | q01_name_your_pace → q02_turn_help_into_a_role → q03_rebuild_the_plan_together → q04_claim_the_relationship_from_gesture → q05_press_for_every_detail_now | `30/10/5/25` |
| `trust_broken` | 101,872 | q01_name_your_pace → q02_turn_help_into_a_role → q03_demand_an_interesting_performance | `20/5/20/25` |
| `unresolved_ambiguity` | 168,595 | q01_name_your_pace → q02_turn_help_into_a_role → q03_share_and_ask_real_preferences → q04_accept_the_gift_only → q05_name_your_waiting_limit → q06_name_the_imbalance → q07_design_a_partial_trial → q08_block_the_pause → q09_admit_your_benefit → q10_define_the_current_agreement | `75/95/90/20` |

## 8. 固定位置、固定策略与支配检查

固定位置运行结果：

| 固定位置 | 结果 | 终止点或终态 |
|---:|---|---|
| 1 | `fade_out` | Q5，`30/25/30/25` |
| 2 | `stay_acquaintances` | Q8，`30/35/65/40` |
| 3 | `no_second_meeting` | Q2，`30/15/25/10` |
| 4 | `friends` | Q10，`60/100/65/20` |

四个位置在不同检查点得到不同结果，没有答案位置形成通用成功或确认恋爱的捷径。

固定策略运行结果：

- `honest` 在 Q5 得到 `fade_out`，终态 `30/75/85/5`；原因是固定标签组合没有积累足够吸引，不代表诚实被惩罚。
- `negotiate` 得到 `unresolved_ambiguity`，终态 `70/100/100/0`；协议质量高但吸引未达确认恋爱阈值。
- `risky` 在 Q2 得到 `trust_broken`。
- `accommodate` 缺少 Q6 对应选项，`confront` 缺少 Q1 对应选项，因此两者标记为不适用。
- 分析器没有报告跨十题的全局原始效果策略支配。

分析器报告 35 对逐题原始效果局部支配：Q01–Q10 分别为 `4 / 4 / 4 / 1 / 5 / 6 / 5 / 4 / 0 / 2` 对。它们只是向量比较，不证明完整路径或叙事选择被支配；同题选项分别承担真实偏好、有限接受、明确拒绝、协议深度、容量边界或风险分流，不能仅因一个效果向量更大就删去。

## 9. 效果预算、来源状态与验证

所有效果值均来自允许集合；40 个选项的绝对变化总和都不超过 40，没有非法值、硬上限错误、普通预算警告或过多高强度维度警告。80 个反馈键引用与定稿效果的方向及 `5/10/15–20` 强度保持一致。

最终报告对应以下来源状态：

- `src/content/isfj-questions.ts`：SHA-256 `B6832C0919AC7D82BC74AE5CBF2A9B9F0A962910240D945CA7096600F1DDE590`。
- `src/content/isfj-endings.ts`：SHA-256 `BFEBD655F69157A090583C3D8B69EF9E42DD1FA4EF74A06E7D941AFF60A0E2D1`。
- `src/game/rules.ts`：SHA-256 `C4A744D810F463EE1695263590E5DC3E8037163B064E6B6522D1794B24573D03`。

最终验证命令：

```powershell
node scripts/refresh-isfj-balance-report.mjs
node scripts/validate-isfj-stage06.mjs
node scripts/validate-content.mjs
node scripts/analyze-question-paths.mjs all
npm.cmd test -- --run
npm.cmd run build
```

最终验证结果：

- 确定性刷新前后 JSON 的 SHA-256 均为 `C43B140D8BA72235CD93B38873F3897ECF8578FCC3FCE6961910287DC68F4CA3`。
- ISFJ Stage 06 定向校验通过：40 条效果表、80 个反馈引用、12 个完整 outcome、12 个报告指标和 0 条 ISFJ 内容警告。
- ISFJ 题目追踪校验通过：10 题、10 条追踪记录、10 个正式场景，四个状态维度一致。
- 仓库内容校验通过；十一个已注册类型的全路径分析命令通过，ISFJ 完成 1,048,576 条路径枚举。
- Vitest 的 16 个测试文件、84 项测试全部通过。
- TypeScript 与 Vite 生产构建通过；仅保留压缩后 JavaScript 分块超过 500 kB 的既有非阻塞提示。

ISFJ 已注册进网页内容包；类型选择、题目、反馈、中途结局和最终结局均使用本报告验证过的生产内容。
