# ISTJ 选择路径平衡报告（Stage 06）

## 1. 范围与方法

- 分析日期：2026-09-04
- 题目权威源：`src/content/istj-questions.ts`
- 结局文案权威源：`src/content/istj-endings.ts`
- 固定生产规则：`src/game/rules.ts` 的 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-istj-adapter.mjs`
- 分析器：`.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- 机器报告：`content/questions/istj-balance-report.json`
- 确定性刷新脚本：`scripts/refresh-istj-balance-report.mjs`

十题均有四个选项，分析器完整枚举 `4^10 = 1,048,576` 条等价完整路径。最终报告包含 284,551 条截断终端轨迹，其中 14,087 条在 Q10 前结束；提前结束路径按尚未作答题目的选项乘积补足后，`weightedTotal` 仍为 1,048,576。

本报告严格区分两种分布：`weightedPathPercentages` 是所有可选答案等概率时的完整路径概率模型；`trajectoryPercentages` 只表示截断终端叶的路线份额与多样性，不等同于玩家概率。阶段门和 Q10 漏斗判断均以加权路径为主；这些数值是游戏设计诊断，不是人群统计。

复现命令：

```powershell
node scripts/refresh-istj-balance-report.mjs
```

## 2. 基线、调整与最终结果

| 指标 | Stage 04 基线 | Stage 06 最终 | 参考状态 |
|---|---:|---:|---|
| 全局危险合计 | 11.387% | 10.579% | 低于 11%–17% 下界 0.421 点，低于 20% 硬上限 |
| Q2 `no_second_meeting` 条件失败率 | 13.333% | 20.000% | 在 20%–25% 内 |
| Q5 `fade_out` 条件失败率 | 17.812% | 33.791% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` 条件失败率 | 54.693% | 44.742% | 在 35%–45% 内 |
| Q10 分类器到达率 | 28.265% | 25.763% | 在 20%–30% 内 |
| Q10 `confirmed_relationship` 合计 | 4.007% | 16.309% | 高于 10%–15% 上界 1.309 点 |
| Q10 `dangerous_lovers` | 0.487% | 6.172% | 在 5%–10% 内 |
| Q10 `friends` | 33.856% | 20.468% | 在 18%–25% 内 |
| Q10 `unresolved_ambiguity` | 56.485% | 51.546% | 高于 35%–45% |
| 缺失完整 outcome | 无 | 无 | 12 个完整 outcome 全部可达 |
| 效果预算警告 | 0 | 0 | 40 个选项均不超过普通建议值 40 |

本轮只调整 ISTJ 的 11 个选项效果及与之对应的反馈键或反馈文案，没有修改共享初始状态、clamp、阶段阈值、规则顺序、稳定 ID 或分类器：

- Q01 把“修改草案”的吸引增量由 5 收回到 0，使协作首先体现为信任与舒适；把真心选择现有方案的吸引由 10 提到 15。
- Q02 把明确接受下一次约会的吸引由 10 提到 15；Q03 的有限任务协助不再自动增加吸引。
- Q04 把接住个人关心的吸引由 10 提到 15，单纯请求言语或翻译信号不再自动增加吸引。由此把 Q5 前的吸引积累从均匀加分改为可区分路径，同时让已过 Q5 的高吸引路线更有机会通过 Q8。
- Q09 的永久保证要求改为 `20 / -20 / 0 / 0`，表达强烈靠近与承诺可信度崩塌的并存；Q10 的共同协议、隐藏限制和牺牲测试分别强化确认、低安全高吸引与退出分流。

## 3. 完整结果的两种分布

| 完整 outcome | 完整路径加权占比 | 截断终端轨迹占比 |
|---|---:|---:|
| `confirmed_relationship:romance_hidden_risk` | 1.366% | 5.033% |
| `confirmed_relationship:romance_stable` | 2.836% | 10.450% |
| `conflict_break` | 0.185% | 0.030% |
| `dangerous_lovers` | 1.590% | 5.859% |
| `fade_out` | 24.023% | 0.086% |
| `friends` | 5.273% | 19.432% |
| `no_second_meeting` | 18.750% | 0.001% |
| `stay_acquaintances` | 20.885% | 4.810% |
| `strangers_after_all` | 1.418% | 5.226% |
| `strong_discomfort` | 3.918% | 0.022% |
| `trust_broken` | 6.476% | 0.114% |
| `unresolved_ambiguity` | 13.280% | 48.936% |

例如 `no_second_meeting` 只有 3 条截断终端轨迹，却代表 196,608 条等价完整路径；因此 0.001% 的终端轨迹份额不能替代 18.750% 的加权完整路径概率。

## 4. 覆盖与全局危险

- 11 个声明的基础结局全部可达，没有缺失或意外 ID。
- 12 个声明的完整 outcome 全部可达，包括 `confirmed_relationship` 下两个独立关系评价。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 明确保持 `unknown`，不能从缺失计数推断规则遮蔽。

| 全局结局 | 加权路径数 | 完整路径占比 | 参考状态 |
|---|---:|---:|---|
| `conflict_break` | 1,936 | 0.185% | 低于 3%–5% |
| `strong_discomfort` | 41,088 | 3.918% | 低于 4%–6% 下界 0.082 点 |
| `trust_broken` | 67,904 | 6.476% | 高于 4%–6% 上界 0.476 点，低于 10% 硬上限 |
| 合计 | 110,928 | 10.579% | 低于 11%–17% 下界 0.421 点，低于 20% 硬上限 |

残余偏差被明确保留。`conflict_break` 只由持续羞辱、逼迫与攻击等组合触发；为了追到 3% 而给普通的拒绝、协商或修复行为追加高冲突，会破坏场景含义。`trust_broken` 略高主要来自早期推卸责任后继续用沉默测试，以及末段永久保证要求；继续削弱这些行为会模糊其边界后果。

## 5. 阶段门

阶段门分母只包含在该检查点未被更高优先级全局结局截断的加权路径。

| 检查点 | 合格加权路径 | 失败加权路径 | 条件失败率 | 参考状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 983,040 | 196,608 | 20.000% | 在 20%–25% 内 |
| Q5 `fade_out` | 745,472 | 251,904 | 33.791% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` | 489,456 | 218,992 | 44.742% | 在 35%–45% 内 |

Q2 失败来自低吸引或低信任的具体前缀；Q5 通过吸引路径区分“沟通质量良好”与“已经形成现实靠近”；Q8 再要求吸引、信任、舒适与冲突修复共同达到熟悉阶段门槛。三个阶段门都没有异常高值。

## 6. Q10 最终分类器

有 270,144 条加权路径到达 Q10 分类器，占完整等概率空间的 25.763%。在这些路径内部：

| 完整结果组 | Q10 条件占比 | 参考状态 |
|---|---:|---|
| `strangers_after_all` | 5.505% | 低于 15%–20% |
| `confirmed_relationship` 合计 | 16.309% | 高于 10%–15% 上界 1.309 点；完整空间占比约 4.202% |
| `dangerous_lovers` | 6.172% | 在 5%–10% 内 |
| `friends` | 20.468% | 在 18%–25% 内 |
| `unresolved_ambiguity` | 51.546% | 高于 35%–45% |

两个关系评价分别为：

| 完整 outcome | Q10 条件占比 | 加权路径数 |
|---|---:|---:|
| `confirmed_relationship:romance_stable` | 11.008% | 29,737 |
| `confirmed_relationship:romance_hidden_risk` | 5.301% | 14,321 |

陌生结局偏低、未定关系偏高是本轮保留的主要偏差。能够到达 Q10 的路径已经通过三个四维阶段门，普遍保有较高信任与舒适；把普通的诚实限制或共同协议强行打到信任低于 35、舒适低于 35 或冲突高于 50，会把边界表达误写成伤害。`unresolved_ambiguity` 又是未满足其他分类器时的剩余结果，因此承接了“关系安全但吸引或承诺条件未同时达标”的大量路径。后续若有真实选择遥测，应按观察到的选项权重重算，而不是继续用更极端的末题效果追齐等概率参考区间。

## 7. 每个完整 outcome 的示例路径

下列路径与终态均由最终 JSON 保存；状态顺序为 `吸引/信任/舒适/冲突`。

| 完整 outcome | 加权路径数 | 示例选项路径 | 示例终态 |
|---|---:|---|---|
| `confirmed_relationship:romance_hidden_risk` | 14,321 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_confirm_return_details → q08_accept_the_repair → q09_demand_unconditional_proof → q10_define_current_agreement | `85/65/90/0` |
| `confirmed_relationship:romance_stable` | 29,737 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_confirm_return_details → q08_choose_repair_and_prevention → q09_demand_unconditional_proof → q10_define_current_agreement | `85/75/90/0` |
| `conflict_break` | 1,936 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_return_a_type_insult → q07_force_the_argument → q08_attack_the_type_identity | `45/25/25/90` |
| `dangerous_lovers` | 16,672 | q01_adjust_the_draft → q02_name_context_need → q03_split_support_steps → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_force_the_argument → q08_accept_the_repair → q09_demand_unconditional_proof → q10_define_current_agreement | `90/45/60/30` |
| `fade_out` | 251,904 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_ask_for_words → q05_call_them_inflexible | `30/55/60/25` |
| `friends` | 55,294 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_force_the_argument → q08_accept_the_repair → q09_reject_the_loyalty_script → q10_state_unready_parts | `50/90/80/30` |
| `no_second_meeting` | 196,608 | q01_adjust_the_draft → q02_test_with_silence | `20/25/25/10` |
| `stay_acquaintances` | 218,992 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_force_the_argument → q08_attack_the_type_identity | `45/40/45/65` |
| `strangers_after_all` | 14,871 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_force_the_argument → q08_accept_the_repair → q09_reject_the_loyalty_script → q10_require_sacrifice | `50/60/65/55` |
| `strong_discomfort` | 41,088 | q01_adjust_the_draft → q02_name_context_need → q03_demand_full_rescue → q04_receive_the_action → q05_call_them_inflexible → q06_return_a_type_insult → q07_force_the_argument | `40/20/0/70` |
| `trust_broken` | 67,904 | q01_adjust_the_draft → q02_accept_current_pace → q03_demand_full_rescue → q04_receive_the_action → q05_admit_current_capacity → q06_return_a_type_insult → q07_name_waiting_limit → q08_attack_the_type_identity → q09_demand_unconditional_proof → q10_accept_everything_unsure | `90/5/35/40` |
| `unresolved_ambiguity` | 139,249 | q01_adjust_the_draft → q02_name_context_need → q03_request_listening → q04_receive_the_action → q05_call_them_inflexible → q06_name_fact_and_impact → q07_force_the_argument → q08_accept_the_repair → q09_reject_the_loyalty_script → q10_define_current_agreement | `70/80/75/25` |

## 8. 固定位置、固定策略与局部支配

固定位置运行结果：

| 固定位置 | 结果 | 终止点或终态 |
|---:|---|---|
| 1 | `no_second_meeting` | Q2，`20/25/25/10` |
| 2 | `stay_acquaintances` | Q8，`40/70/50/0` |
| 3 | `unresolved_ambiguity` | Q10，`75/80/95/15` |
| 4 | `fade_out` | Q5，`30/35/30/10` |

四个位置在不同检查点得到不同结果，没有答案位置形成通用成功或确认恋爱的捷径。

固定策略运行结果：

- `honest` 在 Q5 得到 `fade_out`，终态 `30/80/80/0`；原因是固定标签组合没有积累足够吸引，不代表诚实被惩罚。
- `negotiate` 在 Q8 得到 `stay_acquaintances`，终态 `35/100/100/0`；协议质量高但吸引不足，符合四维阶段门。
- `risky` 在 Q2 得到 `trust_broken`。
- `accommodate` 缺少 Q5 对应选项，`confront` 缺少 Q1 对应选项，因此两者标记为不适用。
- 分析器没有报告跨十题的全局原始效果策略支配。

分析器报告 42 对逐题原始效果局部支配：Q01–Q10 分别为 `3 / 4 / 5 / 4 / 6 / 5 / 4 / 6 / 1 / 4` 对。它们只是向量比较，不证明完整路径或叙事选择被支配；保留处置如下：

| 题号 | 叙事处置 |
|---|---|
| Q01 | 修改草案、真心选择、另提时间和推卸责任分别测试共同决定、真实偏好、可兑现拒绝与责任。 |
| Q02 | 说明语境、接受节奏、建立规则与沉默测试不是同一种兴趣表达。 |
| Q03 | 倾听、拆分支持、有限任务和要求全面接管保留容量与支持方式差异。 |
| Q04 | 接住行动、请求言语、翻译信号与把帮助变成关系债务保留同意边界。 |
| Q05 | 承担损失、区分草案、承认容量和重订规则分别处理事实边界与修复深度。 |
| Q06 | 承认事实、指出措辞、暂停和反向类型羞辱保留反馈方式差异。 |
| Q07 | 返回细节、接受暂停、等待上限和强迫当下争论测试不同的调节协议。 |
| Q08 | 接受补救、说明受伤、协商预防和攻击类型身份保留修复要求差异。 |
| Q09 | 现实承诺核对与拒绝类型担保的向量差异不取消公开边界和私下协议的叙事差异。 |
| Q10 | 当前协议、诚实限制、隐藏限制和牺牲测试分别承担确认、朋友、低安全高吸引与退出分流。 |

## 9. 效果预算、来源状态与验证

所有效果值均来自允许集合；40 个选项的绝对变化总和都不超过 40，没有非法值、硬上限错误、普通预算警告或过多高强度维度警告。反馈键与定稿效果的方向及 `5/10/15–20` 强度保持一致。

最终报告对应以下来源状态：

- `src/content/istj-questions.ts`：SHA-256 `3C2E4CA7CE1D02474F4B3DEDFD404DDC50703A32E44EAB22D8258797845F1A8E`。
- `src/content/istj-endings.ts`：SHA-256 `7E5369A9140C8FC15BE308C38C5B48AE6B85D5FD5F4189777103FA9E1C752C02`。
- `src/game/rules.ts`：SHA-256 `C4A744D810F463EE1695263590E5DC3E8037163B064E6B6522D1794B24573D03`。

最终验证结果：

- `refresh-istj-balance-report.mjs` 连续重建得到相同 JSON 哈希；定向校验确认 40 行效果表、80 个反馈引用、12 个完整 outcome 和 12 项报告指标与权威源一致，ISTJ 内容预算警告为 0。
- Stage 03/04 追溯验证通过：10 个运行时问题、10 条 companion 记录与 10 个正式场景按精确 ID 一一对应。
- 九个注册包通过 `validate-content` 与全类型路径分析；Vitest 的 14 个测试文件、77 项测试全部通过，生产构建成功。
- 仓库内容校验仍显示其他既有内容包的普通预算复核警告；构建仍显示压缩前 JavaScript 分块超过 500 kB 的非阻塞提示。这些均不来自 ISTJ。
- ISTJ 当前仍未注册进 `src/content/packs.ts`，因此生产级 `all` 回归不包含 ISTJ；本报告的 ISTJ 结论来自独立生产等价适配器。
