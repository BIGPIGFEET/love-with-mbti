# ENFP 十题全路径平衡报告

> 生成日期：2026-08-24。分析对象为 ENFP 非运行时题目草案；适配器直接调用共享 `INITIAL_STATE`、`applyEffects`、`resolveEnding` 与 `endingResultKey`。机器基线见 [enfp-balance-baseline.json](enfp-balance-baseline.json)，最终快照见 [enfp-balance-report.json](enfp-balance-report.json)。

## 1. 枚举口径

- 十题均有四个选项，完整选择空间为 `4^10 = 1,048,576`，最终报告的加权路径总数与之完全相等。
- 最终形成 `294,574` 条截断终止轨迹，其中 `13,774` 条在 Q10 前结束。
- `weightedPathPercentages` 把提前结束路径按未走题目的四选一后缀扩展，是本报告的主要等权选择模型；只有每个实际可见选项都等概率选择时，才可近似理解为玩家概率。
- `trajectoryPercentages` 给每条截断终止轨迹相同权重，只描述终止叶子的构成与路线多样性，不是玩家概率。
- 适配器声明了 11 个基础结局和 12 个完整 outcome，没有声明 `expectedRuleIds`。共享运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则阴影状态仍为 `unknown`。

## 2. 基线与最终结果

| 指标 | 初始基线 | 最终 | 目标 | 结果 |
|---|---:|---:|---:|---|
| Q02 条件失败 | 50.000% | 25.000% | 20%–25% | 达标 |
| Q05 条件失败 | 11.390% | 30.618% | 30%–38% | 达标 |
| Q08 条件失败 | 20.443% | 41.574% | 35%–45% | 达标 |
| 到达 Q10 分类器 | 29.588% | 26.770% | 20%–30% | 达标 |
| Q10 内最终陌路 | 8.373% | 15.856% | 15%–20% | 达标 |
| Q10 内确认恋爱 | 32.303% | 11.308% | 10%–15% | 达标 |
| Q10 内危险恋人 | 7.778% | 8.779% | 5%–10% | 达标 |
| Q10 内朋友 | 7.856% | 18.720% | 18%–25% | 达标 |
| Q10 内关系未定 | 43.691% | 45.337% | 35%–45% | 高 0.337pp |
| 全局危险合计 | 14.171% | 7.885% | 11%–17% | 偏低 |

基线的主要问题不是“整体太容易”，而是漏斗错位：一半路径在 Q02 被截断，Q05/Q08 却过于宽松；进入终局后，规则沟通和支持行为又叠加了过高浪漫吸引，使确认恋爱远高于朋友。最终版本让初识、中段与终局分别承担各自的筛选职责。

全局危险合计低于建议范围，主要来自 `conflict_break` 与 `strong_discomfort` 偏低。三个危险结果均已可达；若继续提高，只能把普通边界表达、直接说明或一次失误扩大为严重伤害，故保留该偏差。

## 3. 调优内容

效果顺序为 `attraction / trust / comfort / conflict`。共享阈值、状态方向、优先级和稳定结局 ID 均未修改。

### 初识：拆开伤害主轴

| option_id | 调整 | 理由 |
|---|---|---|
| `q01_set_pace` | `conflict 0 → -5` | 清楚约定稍后接话会轻微缓和节奏摩擦。 |
| `q01_claim_special` | `trust -10 → -5`，`comfort -15 → -10` | 当众误读主要制造不适，不在第一次互动就同时摧毁多项基础。 |
| `q02_laugh_it_off` | `-10/-10/-5/10 → -5/-5/0/10` | 跟随起哄主要增加分歧并轻微削弱信任，不直接造成强烈不适。 |
| `q02_attack_the_group` | `comfort -10 → -5` | 强硬替 TA 出头的主要问题是冲突升级。 |

### 接触：让热度不自动累积信任

| option_id | 调整 | 理由 |
|---|---|---|
| `q03_keep_original_plan` | `trust 10 → 5` | 守住单次计划可靠，但只形成轻度信任。 |
| `q03_try_twenty_minutes` | `trust 10 → 5` | 可逆试行兼顾双方，不等于高强度承诺。 |
| `q04_name_reply_window` | `trust 10 → 5` | 说明回复窗口主要改善舒适与可预期性。 |
| `q04_reply_when_able` | `trust 0 → -5` | 继续享受未定义热度会留下轻微信任成本。 |
| `q04_separate_pace_and_intent` | `trust 15 → 10` | 拆分意图显著改善可信度，但不需最高档奖励。 |
| `q05_change_topic` | `trust 5 → 0` | 不追问首先保护舒适，不自动建立更深托付。 |
| `q05_offer_support_menu` | `trust 15 → 10` | 尊重披露范围形成中度信任。 |
| `q05_state_care_without_claim` | `trust 10 → 5` | 有限知情需求诚实且克制，但仍是初步约定。 |

### 熟悉：支持与修复不自动等于恋爱

| option_id | 调整 | 理由 |
|---|---|---|
| `q06_demand_mind_reading` | `comfort -10 → -15`，`conflict 15 → 20` | 以读心检验关心会明显增加压力和争执。 |
| `q06_request_listening` | `attraction 5 → 0`，`trust 10 → 5` | 明确倾听需要主要提高舒适，不应自动产生浪漫奖励。 |
| `q06_choose_silent_walk` | `trust 5 → 0` | 接受陪伴提升舒适与吸引，但不形成额外承诺。 |
| `q06_split_today_tomorrow` | `trust 15 → 10` | 两阶段支持可靠，但保持中度信任增益。 |
| `q07_confirm_check_in` | `trust 15 → 10` | 回访协议提供可预期性，不需最高档信任。 |
| `q07_share_offline_photo` | `conflict 15 → 20` | 未经同意公开低落时刻属于明确隐私冲突。 |
| `q07_offer_thirty_minutes` | `trust 10 → 5` | 说明陪伴容量主要保护舒适。 |
| `q07_leave_room_without_questions` | `trust 5 → 0` | 留出空间不应被写成自动加深托付。 |
| `q08_name_cost_and_deadline` | `trust 10 → 5` | 指出成本是修复入口，不等于修复已经完成。 |
| `q08_replan_with_checkpoints` | `attraction 5 → 0`，`trust 15 → 10` | 可验证修复主要改善信任与冲突，不自动增加浪漫吸引。 |

### 暧昧：区分清晰、浪漫与不兼容

| option_id | 调整 | 理由 |
|---|---|---|
| `q09_state_exclusive_need` | `attraction 5 → -5` | 明确排他诉求提高信任，但“不匹配则退回朋友”会轻微收束浪漫动能。 |
| `q09_define_four_axes` | `attraction 15 → 5` | 逐项定义首先是可靠沟通，不应仅因协商就产生强烈心动。 |
| `q10_write_equal_rules` | `attraction 10 → 15` | 双方把对等边界实际应用于彼此，是明确的关系靠近与高信任组合。 |
| `q10_name_specific_boundary` | `attraction 5 → -5` | 具体说明不安提高信任，但保留“不一致则不正式确认”的真实浪漫取舍。 |

## 4. 最终完整结果分布

| 完整 outcome | 加权路径 | 等权完整空间占比 | 截断轨迹占比 |
|---|---:|---:|---:|
| no_second_meeting | 262,144 | 25.000% | 0.001% |
| fade_out | 223,232 | 21.289% | 0.074% |
| stay_acquaintances | 199,808 | 19.055% | 4.239% |
| conflict_break | 32 | 0.003% | 0.001% |
| strong_discomfort | 22,635 | 2.159% | 0.055% |
| trust_broken | 60,016 | 5.724% | 0.336% |
| strangers_after_all | 44,508 | 4.245% | 15.109% |
| confirmed_relationship:romance_stable | 20,365 | 1.942% | 6.913% |
| confirmed_relationship:romance_hidden_risk | 11,378 | 1.085% | 3.863% |
| dangerous_lovers | 24,644 | 2.350% | 8.366% |
| friends | 52,549 | 5.011% | 17.839% |
| unresolved_ambiguity | 127,265 | 12.137% | 43.203% |

加权路径合计 `1,048,576`；截断轨迹占比对应 `294,574` 条终止叶子。两者分母不同，不能互换解释。

## 5. 危险、门槛与终局条件率

### 全局危险

| ending_id | 加权路径 | 完整空间占比 | 目标 | 状态 |
|---|---:|---:|---:|---|
| conflict_break | 32 | 0.003% | 3%–5% | 偏低、可达 |
| strong_discomfort | 22,635 | 2.159% | 4%–6% | 偏低、可达 |
| trust_broken | 60,016 | 5.724% | 4%–6% | 达标、可达 |
| 合计 | 82,683 | 7.885% | 11%–17% | 偏低 |

### 阶段门槛

| checkpoint | eligible weighted paths | failures | 条件失败率 | 目标 |
|---|---:|---:|---:|---:|
| Q02 | 1,048,576 | 262,144 | 25.000% | 20%–25% |
| Q05 | 729,088 | 223,232 | 30.618% | 30%–38% |
| Q08 | 480,608 | 199,808 | 41.574% | 35%–45% |

分母只包含通过更早规则，并在当前检查点未被更高优先级全局规则截断的加权路径。

### Q10 分类器

共有约 `26.770%` 的完整等权选择空间进入 Q10 最终分类。

| outcome group | Q10 条件占比 | 目标 | 状态 |
|---|---:|---:|---|
| strangers_after_all | 15.856% | 15%–20% | 达标 |
| confirmed_relationship | 11.308% | 10%–15% | 达标 |
| └ romance_stable | 7.255% | 单独报告 | 可达 |
| └ romance_hidden_risk | 4.053% | 单独报告 | 可达 |
| dangerous_lovers | 8.779% | 5%–10% | 达标 |
| friends | 18.720% | 18%–25% | 达标 |
| unresolved_ambiguity | 45.337% | 35%–45% | 高 0.337pp |

## 6. 可达路径证据

最终 JSON 为每个 outcome 保存了完整选项路径与终态。以下列出各结果的一条确定性示例；终态顺序为 `attraction / trust / comfort / conflict`。

- `no_second_meeting`：`q01_join_energy > q02_attack_the_group`；`50/20/25/25`。
- `fade_out`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_accuse_avoidance`；`45/20/35/30`。
- `stay_acquaintances`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_change_topic > q06_demand_mind_reading > q07_confirm_check_in > q08_name_cost_and_deadline`；`50/35/60/15`。
- `conflict_break`：`q01_set_pace > q02_attack_the_group > q03_hide_the_deadline > q04_separate_pace_and_intent > q05_offer_support_menu > q06_demand_mind_reading > q07_share_offline_photo > q08_reduce_them_to_a_label`；`30/0/5/80`。
- `strong_discomfort`：`q01_set_pace > q02_ask_for_one_case > q03_follow_the_detour > q04_separate_pace_and_intent > q05_accuse_avoidance > q06_demand_mind_reading > q07_confirm_check_in > q08_name_cost_and_deadline > q09_demand_social_proof > q10_demand_total_cutoff`；`40/15/5/40`。
- `trust_broken`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_change_topic > q06_demand_mind_reading > q07_share_offline_photo`；`35/0/35/50`。
- `strangers_after_all`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_change_topic > q06_demand_mind_reading > q07_confirm_check_in > q08_replan_with_checkpoints > q09_keep_it_undefined > q10_demand_total_cutoff`；`55/15/50/30`。
- `confirmed_relationship:romance_stable`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_change_topic > q06_choose_silent_walk > q07_confirm_check_in > q08_name_cost_and_deadline > q09_define_four_axes > q10_write_equal_rules`；`85/75/100/0`。
- `confirmed_relationship:romance_hidden_risk`：上一路径将 Q07 改为 `q07_offer_thirty_minutes`；`85/70/100/0`。
- `dangerous_lovers`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_change_topic > q06_request_listening > q07_leave_room_without_questions > q08_name_cost_and_deadline > q09_keep_it_undefined > q10_write_equal_rules`；`90/45/100/0`。
- `friends`：`q01_set_pace > q02_laugh_it_off > q03_follow_the_detour > q04_name_reply_window > q05_change_topic > q06_demand_mind_reading > q07_confirm_check_in > q08_replan_with_checkpoints > q09_state_exclusive_need > q10_write_equal_rules`；`60/70/85/10`。
- `unresolved_ambiguity`：上一条路径将 Q09 改为 `q09_keep_it_undefined`；`80/45/75/15`。

示例只证明可达，不代表推荐路线。较早的伤害可以与后续修复共同出现在一条最终路径中。

## 7. 固定位置、固定策略与支配审查

固定位置结果：位置 1 与 3 为 `stay_acquaintances`，位置 2 为 `fade_out`，位置 4 为 `no_second_meeting`。没有固定位置自动获得确认恋爱或其他高阶结果。

固定策略结果：

- `honest`：`friends`，终态 `40/100/100/0`。
- `negotiate`：`confirmed_relationship:romance_stable`，终态 `95/100/100/0`；这是持续共同决定和修复的预期结果，但分析器未发现跨题原始效果的全局策略支配。
- `risky`：Q02 后进入 `no_second_meeting`。
- `accommodate` 与 `confront` 并非每题都提供，固定策略测试不适用。

分析器报告 34 组局部原始效果支配警告。明显伤害选项保留为公开越界、强迫、读心测试或人格贬损路线；合理但被局部覆盖的顺应、诚实与协商选项仍具有不同的同意、节奏、容量或关系诉求。局部支配不等于全局路径支配，完整配对清单保存在最终 JSON。

## 8. 效果预算与剩余限制

- 全部效果值合法，没有选项超过绝对变化硬上限 `60`，也没有超过两个高幅维度。
- 7 个普通预算提示已审阅：`q04_public_partner_label = 50`、`q05_accuse_avoidance = 45`、`q06_demand_mind_reading = 50`、`q07_share_offline_photo = 60`、`q08_reduce_them_to_a_label = 55`、`q10_demand_total_cutoff = 50`、`q10_write_equal_rules = 45`。前六项是明确越界或贬损；最后一项来自吸引与信任的双高正向效果。
- 全局危险合计 `7.885%`，低于 `11%–17%`；冲突终止与强烈不适偏低，但均可达。
- Q10 内关系未定 `45.337%`，比建议上限高 `0.337` 个百分点，其余 Q10 结果组全部达标。
- 这些比例是等权选项压力测试，不是 MBTI 人群或真实玩家统计。上线后需要按真实点击权重重新计算。
- 共享规则没有稳定 rule ID 或诊断钩子，无法测量具体规则被更高优先级规则遮蔽的次数；shadowing 保持 `unknown`。

任何后续题目效果、选项顺序、阈值或优先级改动都会使本报告失效，必须重新运行 `node scripts/refresh-enfp-balance-report.mjs`。
