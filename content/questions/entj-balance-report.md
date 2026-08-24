# ENTJ 十题全路径平衡报告

> 生成日期：2026-08-24。分析对象为 ENTJ 非运行时题目草案；适配器直接调用共享 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`。机器基线见 [entj-balance-baseline.json](entj-balance-baseline.json)，终局调优前快照见 [entj-balance-before-danger-tuning.json](entj-balance-before-danger-tuning.json)，本轮调参前快照见 [entj-balance-before-danger-increase.json](entj-balance-before-danger-increase.json)，最终快照见 [entj-balance-report.json](entj-balance-report.json)。

## 1. 枚举口径

- 十题均有四个选项，完整选择空间为 `4^10 = 1,048,576`；最终加权路径总数与之相等。
- 最终形成 `285,439` 条截断终止轨迹，其中 `14,495` 条在 Q10 前结束。
- `weightedPathPercentages` 按未走问题的四选一后缀扩展提前结局，是主要等权选择模型；只有各题可见选项等概率时才近似玩家概率。
- `trajectoryPercentages` 给每条截断终止叶相同权重，只描述路线构成与多样性，不是玩家概率。
- 适配器声明 11 个基础结局与 12 个完整 outcome；运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此 `expectedRuleIds` 未声明，规则阴影保持 `unknown`。

## 2. 本轮调整前后

| 指标 | 调整前 | 最终 | 变化 | 目标 | 结果 |
|---|---:|---:|---:|---:|---|
| Q02 条件失败 | 25.000% | 25.000% | 0.000pp | 20%–25% | 达标 |
| Q05 条件失败 | 30.623% | 31.425% | +0.802pp | 30%–38% | 达标 |
| Q08 条件失败 | 44.272% | 44.714% | +0.442pp | 35%–45% | 达标 |
| 到达 Q10 分类器 | 26.976% | 25.406% | -1.570pp | 20%–30% | 达标 |
| Q10 内确认恋爱 | 11.349% | 13.369% | +2.020pp | 10%–15% | 达标 |
| Q10 内危险恋人 | 6.018% | 6.681% | +0.663pp | 5%–10% | 达标 |
| Q10 内朋友 | 21.467% | 19.937% | -1.530pp | 18%–25% | 达标 |
| Q10 内最终陌路 | 10.299% | 11.590% | +1.291pp | 15%–20% | 偏低 |
| Q10 内关系未定 | 50.868% | 48.423% | -2.445pp | 35%–45% | 偏高 |
| 全局危险合计 | 4.250% | 6.723% | +2.473pp | 11%–17% | 偏低 |

本轮把全局危险提高 `2.473` 个百分点（相对增加约 58%），并把关系未定降低 `2.445` 个百分点；阶段闸门、Q10 到达率、确认恋爱、危险恋人与朋友仍在建议区间。陌路、未定和全局危险尚未完全达到建议值，继续保留为明确未达项。

## 3. 调优原则与结果

效果顺序均为 `attraction / trust / comfort / conflict`。本轮仅修改 ENTJ 草案效果和匹配的反馈强度，没有修改共享初始状态、阈值、优先级或稳定结果 ID。

- Q01–Q02：把普遍的强正向奖励收为轻度或中度，使通过初识门槛的状态不再拥有过高余量；`q02_make_them_responsible` 改为冲突主轴，避免同时重罚信任和舒适导致两题即触发全局危险。
- Q03–Q06：只加强已有明确伤害语义的故意失联试探、把帮助升级成义务、人格化指责和无替代方案的全面反对；普通直率、边界说明与协商选项不增加伤害。
- Q09：投入前谈清关系小幅增加吸引；未经同意公开定义关系提高冲突，形成更清晰的终局风险分支。
- Q10：真实回答提高吸引；共同协议不自动制造浪漫吸引，但显著提高信任和舒适；空白顺从进一步降低信任并积累冲突。
- 八个叙事上明确的高压选项超过普通建议幅度 40，但全部不超过硬上限 60，也没有超过两个高幅维度。

## 4. 最终完整结果分布

| 完整 outcome | 加权路径 | 等权完整空间占比 | 截断轨迹占比 |
|---|---:|---:|---:|
| no_second_meeting | 262,144 | 25.000% | 0.001% |
| fade_out | 230,400 | 21.973% | 0.079% |
| stay_acquaintances | 219,136 | 20.898% | 4.798% |
| conflict_break | 2,158 | 0.206% | 0.108% |
| strong_discomfort | 37,664 | 3.592% | 0.142% |
| trust_broken | 30,671 | 2.925% | 1.541% |
| strangers_after_all | 30,877 | 2.945% | 10.817% |
| confirmed_relationship:romance_stable | 22,842 | 2.178% | 8.002% |
| confirmed_relationship:romance_hidden_risk | 12,773 | 1.218% | 4.475% |
| dangerous_lovers | 17,799 | 1.697% | 6.236% |
| friends | 53,113 | 5.065% | 18.607% |
| unresolved_ambiguity | 128,999 | 12.302% | 45.193% |

加权路径合计 `1,048,576`；截断轨迹占比以 `285,439` 条终止叶为分母。两种分布不可互换解释。

## 5. 危险、门槛与终局条件率

### 全局危险

| ending_id | 加权路径 | 完整空间占比 | 目标 | 状态 |
|---|---:|---:|---:|---|
| conflict_break | 2,158 | 0.206% | 3%–5% | 偏低、可达 |
| strong_discomfort | 37,664 | 3.592% | 4%–6% | 偏低、可达 |
| trust_broken | 30,671 | 2.925% | 4%–6% | 偏低、可达 |
| 合计 | 70,493 | 6.723% | 11%–17% | 偏低 |

阶段门槛会先终止大量低质量组合，全局危险因此主要保留给跨题累积的强迫、控制、未经同意公开关系与信任测试。本轮不把普通不匹配扩大成严重伤害来提高比例。

### 阶段门槛

| checkpoint | eligible weighted paths | failures | 条件失败率 | 目标 |
|---|---:|---:|---:|---:|
| Q02 | 1,048,576 | 262,144 | 25.000% | 20%–25% |
| Q05 | 733,184 | 230,400 | 31.425% | 30%–38% |
| Q08 | 490,080 | 219,136 | 44.714% | 35%–45% |

每个分母只包含通过更早规则，并在当前检查点未被更高优先级全局规则截断的加权路径。

### Q10 分类器

共有 `266,403` 条加权路径进入 Q10 最终分类，占完整空间 `25.406%`。

| outcome group | Q10 条件占比 | 目标 | 状态 |
|---|---:|---:|---|
| strangers_after_all | 11.590% | 15%–20% | 偏低 |
| confirmed_relationship | 13.369% | 10%–15% | 达标 |
| └ romance_stable | 8.574% | 单独报告 | 可达 |
| └ romance_hidden_risk | 4.795% | 单独报告 | 可达 |
| dangerous_lovers | 6.681% | 5%–10% | 达标 |
| friends | 19.937% | 18%–25% | 达标 |
| unresolved_ambiguity | 48.423% | 35%–45% | 偏高 |

## 6. 可达路径证据

终态顺序为 `attraction / trust / comfort / conflict`。示例只证明可达，不代表推荐答案。

- `no_second_meeting`：`q01_wait_for_proof > q02_keep_two_parts`；`25/25/15/15`。
- `fade_out`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_call_them_heartless`；`30/20/15/40`。
- `stay_acquaintances`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_accept_the_pause > q08_not_ready_to_forgive`；`40/60/70/5`。
- `conflict_break`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_name_the_boundary > q05_ask_for_ten_minutes > q06_reject_everything > q07_force_an_answer_now > q08_demand_total_control`；`15/20/0/80`。
- `strong_discomfort`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_accept_their_standard > q07_force_an_answer_now > q08_demand_total_control`；`30/20/0/55`。
- `trust_broken`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_state_the_waiting_limit > q08_skip_with_flirting > q09_announce_a_relationship > q10_follow_everything`；`70/0/55/35`。
- `strangers_after_all`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_accept_the_pause > q08_separate_repair_steps > q09_announce_a_relationship > q10_follow_everything`；`55/20/65/30`。
- `confirmed_relationship:romance_stable`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_accept_the_pause > q08_separate_repair_steps > q09_accept_as_an_activity > q10_give_a_real_answer`；`85/75/85/0`。
- `confirmed_relationship:romance_hidden_risk`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_state_the_waiting_limit > q08_skip_with_flirting > q09_confirm_the_terms > q10_give_a_real_answer`；`85/70/80/0`。
- `dangerous_lovers`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_state_the_waiting_limit > q08_separate_repair_steps > q09_accept_as_an_activity > q10_follow_everything`；`90/45/75/10`。
- `friends`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_accept_the_pause > q08_separate_repair_steps > q09_confirm_the_terms > q10_build_an_agreement`；`50/90/100/0`。
- `unresolved_ambiguity`：`q01_wait_for_proof > q02_follow_for_today > q03_answer_and_reschedule > q04_take_what_helps > q05_ask_for_ten_minutes > q06_merge_the_constraints > q07_accept_the_pause > q08_separate_repair_steps > q09_accept_as_an_activity > q10_build_an_agreement`；`65/75/95/0`。

## 7. 固定位置、固定策略与支配审查

固定位置结果：位置 1 为 `no_second_meeting`，位置 2 为 `friends`，位置 3 为 `stay_acquaintances`，位置 4 为 `trust_broken`。没有固定位置自动获得确认恋爱。

固定策略结果：

- `honest`：`unresolved_ambiguity`，终态 `80/100/100/20`。
- `negotiate`：`friends`，终态 `60/100/100/0`。
- `risky`：Q02 后进入 `no_second_meeting`。
- `accommodate` 与 `confront` 并非每题都提供，固定策略测试不适用。

分析器报告 39 组局部原始效果支配警告。明显伤害选项继续作为标签评分、责任测试、人格指责、控制、公开替关系作答或消失测试保留；`take_what_helps`、`name_the_boundary`、`ask_for_ten_minutes`、`take_the_plan_for_now`、`not_ready_to_forgive` 等合理选项即使被局部覆盖，也承载不同的同意、节奏和表达意义。局部支配不证明全局路径支配，完整配对清单保存在最终 JSON。

## 8. 效果预算与剩余限制

全部效果值合法，没有选项超过绝对变化硬上限 `60`，也没有超过两个高幅维度。八个已审阅的普通预算警告为：

- `q04_expand_the_assignment = 45`：把一次帮助扩张为持续义务。
- `q05_call_them_heartless = 50`：把支持错位上升为对整个人的否定。
- `q06_reject_everything = 45`：以全面反对夺回控制，不提供替代方案。
- `q07_force_an_answer_now = 55`：持续轰炸并强迫即时结论。
- `q08_demand_total_control = 55`：借道歉要求全面交出决定权。
- `q09_announce_a_relationship = 60`：未经同意公开定义关系。
- `q10_follow_everything = 50`：以空白服从回避真实选择与需求。
- `q10_test_by_disappearing = 50`：以突然失联测试感情。

最终接受的未达项：全局危险合计 `6.723%` 偏低；Q10 内陌路 `11.590%` 偏低；关系未定 `48.423%` 偏高。三者较调整前均向目标移动，且全部可达，没有缺失或意外 ID。它们是等权选项压力测试结果，不是 MBTI 人群统计；上线后应以实际点击权重重新计算。

任何后续题目效果、选项顺序、阈值或优先级变化都会使本报告失效，必须重新运行 `node scripts/refresh-entj-balance-report.mjs`。
