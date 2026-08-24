# INTJ 十题全路径平衡报告

> 生成日期：2026-08-24。分析对象为 INTJ 非运行时题目草案；适配器直接调用共享 `INITIAL_STATE`、`applyEffects`、`resolveEnding` 与 `endingResultKey`。机器基线见 [intj-balance-baseline.json](intj-balance-baseline.json)，本轮微调前快照见 [intj-balance-before-danger-tuning.json](intj-balance-before-danger-tuning.json)，最终快照见 [intj-balance-report.json](intj-balance-report.json)。

## 1. 枚举口径

- 十题均有四个选项，完整选择空间为 `4^10 = 1,048,576`，最终报告的加权路径总数与之完全相等。
- 最终形成 `304,462` 条截断终止轨迹，其中 `11,998` 条在 Q10 前结束。
- `weightedPathPercentages` 把提前结束路径按未走题目的四选一后缀扩展，是本报告的主要等权选择模型；只有每个实际可见选项都等概率选择时，才可近似理解为玩家概率。
- `trajectoryPercentages` 给每条截断终止轨迹相同权重，只描述终止叶子的构成与路线多样性，不是玩家概率。
- 适配器声明了 11 个基础结局和 12 个完整 outcome，没有声明 `expectedRuleIds`。共享运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则阴影状态仍为 `unknown`。

## 2. 基线与最终结果

| 指标 | 初始基线 | 本轮微调前 | 最终 | 目标 | 结果 |
|---|---:|---:|---:|---:|---|
| Q02 条件失败 | 18.750% | 25.000% | 25.000% | 20%–25% | 达标 |
| Q05 条件失败 | 21.929% | 32.621% | 32.621% | 30%–38% | 达标 |
| Q08 条件失败 | 26.915% | 36.731% | 37.930% | 35%–45% | 达标 |
| 到达 Q10 分类器 | 40.487% | 28.318% | 27.726% | 20%–30% | 达标 |
| Q10 内确认恋爱 | 24.373% | 14.783% | 15.707% | 10%–15% | 略高 0.707pp |
| Q10 内朋友 | 6.209% | 20.211% | 19.186% | 18%–25% | 达标 |
| Q10 内最终陌路 | 9.352% | 7.322% | 8.173% | 15%–20% | 偏低 |
| Q10 内危险恋人 | 2.562% | 0.750% | 2.652% | 5%–10% | 上升、仍偏低 |
| Q10 内关系未定 | 57.504% | 56.935% | 54.282% | 35%–45% | 下降、仍偏高 |
| 全局危险合计 | 9.551% | 7.806% | 7.866% | 11%–17% | 偏低 |

本轮按需求把危险恋人从 `0.750%` 提升到 `2.652%`，同时把关系未定从 `56.935%` 降到 `54.282%`。阶段漏斗、Q10 到达率和朋友结局仍在合同范围；代价是确认恋爱轻微超过建议上限 `0.707` 个百分点。没有修改共享阈值或把普通直率、空间需求扩大成严重伤害。

## 3. 调优内容

效果顺序均为 `attraction / trust / comfort / conflict`。所有调整保持原方向或把弱正向收为中性，没有修改共享阈值和优先级。

| option_id | before | after | 理由 |
|---|---|---|---|
| q01_say_anything | `0/-10/-5/10` | `-5/-10/-5/10` | 隐藏限制并准备临时改动，会轻微削弱继续了解的兴趣。 |
| q02_receive_link | `5/5/10/0` | `0/5/10/0` | 只接住链接主要降低表达压力，不自动增加浪漫吸引。 |
| q03_name_the_help | `10/5/10/0` | `5/5/10/0` | 具体感谢是一条温和靠近路线，不等同强烈心动。 |
| q03_ask_the_meaning | `10/10/5/5` | `5/10/5/5` | 直接确认含义提高可信度，也保留短期压力。 |
| q04_separate_tone | `0/10/15/-5` | `0/10/10/-5` | 区分事实与语气明显改善相处，但不产生最高档舒适。 |
| q04_check_together | `10/10/5/-10` | `5/10/5/-10` | 共同核验的主收益是信任和降冲突。 |
| q05_set_checkin | `5/15/10/-10` | `5/10/10/-10` | 最低报备协议提高可靠性，但不需要最高档信任奖励。 |
| q05_give_full_space | `5/0/10/-5` | `0/0/10/-5` | 完整留白降低压力，却没有确认浪漫或玩家需要。 |
| q05_name_your_limit | `10/10/5/5` | `5/10/5/5` | 兼容底线的价值主要在信息真实，而非强吸引。 |
| q08_skip_with_closeness | `10/-10/5/5` | `15/-15/5/5` | 用亲近回避修复形成更强的短期吸引，同时显著削弱信任，使危险恋人路线更清晰。 |
| q09_accept_as_activity | `15/5/10/0` | `20/0/5/0` | 接受数月后的共同活动保持高吸引，但不再自动增加信任，舒适只保留轻度上升。 |
| q09_define_before_investing | `5/10/5/5` | `0/10/5/5` | 投入前先定义边界保持吸引中性，突出信任与短期张力。 |
| q10_follow_their_terms | `10/-10/5/5` | `5/-10/5/5` | 空白服从只带来轻微即时吸引，并继续损害答案可信度。 |

另将 Q04 的前两个选项、Q08 的首尾选项互换位置；本轮再将 Q09 的 `q09_define_before_investing` 与 `q09_confirm_terms` 换位。重排不改变总分布，并消除了固定选择第 1 或第 2 项自动获得确认恋爱的捷径。

## 4. 最终完整结果分布

| 完整 outcome | 加权路径 | 等权完整空间占比 | 截断轨迹占比 |
|---|---:|---:|---:|
| no_second_meeting | 262,144 | 25.000% | 0.001% |
| fade_out | 234,496 | 22.363% | 0.075% |
| stay_acquaintances | 178,720 | 17.044% | 3.669% |
| conflict_break | 3,134 | 0.299% | 0.108% |
| strong_discomfort | 60,160 | 5.737% | 0.138% |
| trust_broken | 19,189 | 1.830% | 0.518% |
| strangers_after_all | 23,762 | 2.266% | 7.805% |
| confirmed_relationship:romance_stable | 33,347 | 3.180% | 10.953% |
| confirmed_relationship:romance_hidden_risk | 12,318 | 1.175% | 4.046% |
| dangerous_lovers | 7,711 | 0.735% | 2.533% |
| friends | 55,779 | 5.319% | 18.321% |
| unresolved_ambiguity | 157,816 | 15.051% | 51.834% |

上表加权路径合计 `1,048,576`；截断轨迹占比合计对应 `304,462` 条终止叶子。二者分母不同，不能互换解释。

## 5. 危险、门槛与终局条件率

### 全局危险

| ending_id | 加权路径 | 完整空间占比 | 目标 | 状态 |
|---|---:|---:|---:|---|
| conflict_break | 3,134 | 0.299% | 3%–5% | 偏低、可达 |
| strong_discomfort | 60,160 | 5.737% | 4%–6% | 达标、可达 |
| trust_broken | 19,189 | 1.830% | 4%–6% | 偏低、可达 |
| 合计 | 82,483 | 7.866% | 11%–17% | 偏低 |

冲突决裂和彻底失信通常需要跨题累积严重行为，而阶段门槛会先终止不少低质量路径。本轮保留这项偏低结果，不把普通直率、空间需求或诚实边界扩大成严重伤害。

### 阶段门槛

| checkpoint | eligible weighted paths | failures | 条件失败率 | 目标 |
|---|---:|---:|---:|---:|
| Q02 | 1,048,576 | 262,144 | 25.000% | 20%–25% |
| Q05 | 718,848 | 234,496 | 32.621% | 30%–38% |
| Q08 | 471,184 | 178,720 | 37.930% | 35%–45% |

分母只包含通过更早规则，并在当前检查点未被更高优先级全局规则截断的加权路径。

### Q10 分类器

共有 `290,733` 条加权路径进入 Q10 最终分类，占完整空间 `27.726%`。

| outcome group | Q10 条件占比 | 目标 | 状态 |
|---|---:|---:|---|
| strangers_after_all | 8.173% | 15%–20% | 偏低 |
| confirmed_relationship | 15.707% | 10%–15% | 略高 |
| └ romance_stable | 11.470% | 单独报告 | 可达 |
| └ romance_hidden_risk | 4.237% | 单独报告 | 可达 |
| dangerous_lovers | 2.652% | 5%–10% | 上升、仍偏低 |
| friends | 19.186% | 18%–25% | 达标 |
| unresolved_ambiguity | 54.282% | 35%–45% | 下降、仍偏高 |

## 6. 可达路径证据

最终 JSON 为每个 outcome 保存了完整选项路径和终态。以下是各结果的一条确定性示例：

- `no_second_meeting`：`q01_keep_it_loose > q02_call_it_cold`；终态 `20/25/25/20`。
- `fade_out`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_keep_testing`；终态 `40/40/20/40`。
- `stay_acquaintances`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_state_deadline > q08_demand_surrender`；终态 `50/60/30/35`。
- `conflict_break`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_give_full_space > q06_accuse_indifference > q07_force_answer > q08_demand_surrender`；终态 `20/25/0/80`。
- `strong_discomfort`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_force_answer > q08_demand_surrender`；终态 `35/45/5/60`。
- `trust_broken`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_ask_for_ten_minutes > q07_force_answer > q08_skip_with_closeness > q09_announce_commitment > q10_disappear_test`；终态 `60/5/20/70`。
- `strangers_after_all`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_accept_pause > q08_demand_surrender > q09_define_before_investing > q10_disappear_test`；终态 `45/45/35/55`。
- `confirmed_relationship:romance_stable`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_accept_pause > q08_skip_with_closeness > q09_confirm_terms > q10_state_your_answer`；终态 `95/80/75/10`。
- `confirmed_relationship:romance_hidden_risk`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_accept_pause > q08_skip_with_closeness > q09_accept_as_activity > q10_state_your_answer`；终态 `100/65/70/15`。
- `dangerous_lovers`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_accept_pause > q08_skip_with_closeness > q09_accept_as_activity > q10_follow_their_terms`；终态 `95/40/70/20`。
- `friends`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_accept_pause > q08_demand_surrender > q09_define_before_investing > q10_state_your_answer`；终态 `60/80/50/35`。
- `unresolved_ambiguity`：`q01_share_constraints > q02_ask_if_invited > q03_name_the_help > q04_attack_the_person > q05_set_checkin > q06_hide_the_hurt > q07_accept_pause > q08_demand_surrender > q09_accept_as_activity > q10_state_your_answer`；终态 `80/70/50/30`。

终态顺序为 `attraction / trust / comfort / conflict`。示例只证明可达，不代表推荐路线；较早的伤害可以与后续修复共同出现在一条最终路径中。

## 7. 固定位置、固定策略与支配审查

固定位置结果：位置 1、2 均为 `unresolved_ambiguity`，位置 3 为 `no_second_meeting`，位置 4 为 `trust_broken`。没有固定位置自动获得确认恋爱；选项重排不改变总体分布。

固定策略结果：

- `honest`：`unresolved_ambiguity`，终态 `80/100/90/15`。
- `negotiate`：`confirmed_relationship:romance_stable`，终态 `90/100/100/0`；这是持续共同决定和修复的预期结果，但分析器未发现跨题原始效果的全局策略支配。
- `risky`：Q02 后进入 `no_second_meeting`。
- `accommodate` 与 `confront` 并非每题都提供，固定策略测试不适用。

分析器报告 44 组局部原始效果支配警告。处理结论：

- 被支配的明显伤害选项继续作为具体的边界测试、攻击、公开替关系作答或消失测试保留；它们不是伪装成合理解的数值陷阱。
- `follow_the_plan`、`receive_link`、`name_the_help`、`ask_the_meaning`、`give_full_space`、`name_your_limit`、`state_deadline`、`not_ready_to_forgive`、`define_before_investing` 等合理选项具有不同的同意、节奏或表达含义，即使原始四维被另一方案局部覆盖，也保留叙事选择权。
- 局部支配不证明全局路径支配；门槛、截断、状态上限和后续选择会改变结果。完整配对清单保存在最终 JSON。

## 8. 效果预算与剩余限制

全部效果值合法，没有选项超过绝对变化硬上限 `60`，也没有超过两个高幅维度的警告。四个已审阅的普通预算警告保持不变：`q07_force_answer = 55`、`q08_demand_surrender = 55`、`q09_announce_commitment = 50`、`q10_disappear_test = 50`；它们分别对应强迫即时回答、要求全面服从、未经同意公开关系和消失测试。

最终接受的未达目标与取舍：

- 全局危险合计 `7.866%`，低于 `11%–17%`；冲突决裂与彻底失信偏低，但均可达。
- Q10 内危险恋人已从 `0.750%` 提升至 `2.652%`，仍低于 `5%–10%`；关系未定已从 `56.935%` 降至 `54.282%`，仍高于 `35%–45%`。
- Q10 内陌路为 `8.173%`，仍偏低；确认恋爱为 `15.707%`，略高于建议上限。
- 这些比例是等权选项压力测试，不是 MBTI 人群或真实玩家统计。上线后需要按实际点击权重重新计算。
- 共享规则没有稳定 rule ID 或诊断钩子，无法测量具体规则被更高优先级规则遮蔽的次数；shadowing 保持 `unknown`。

任何后续题目效果、选项顺序、阈值或优先级改动都会使本报告失效，必须重新运行 `node scripts/refresh-intj-balance-report.mjs`。
