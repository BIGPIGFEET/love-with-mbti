# ESTP 选择路径平衡报告（Stage 06）

## 1. 范围与方法

- 分析日期：2026-09-11
- 题目权威源：`src/content/estp-questions.ts`
- 固定生产规则：`src/game/rules.ts` 的 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-estp-adapter.mjs`
- 分析器：`.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- 最终机器报告：`content/questions/estp-balance-report.json`

十题均有四个选项，分析器完整枚举 `4^10 = 1,048,576` 条等价完整路径。最终共有 326,491 条截断终端轨迹，其中 11,115 条在 Q10 前结束；提前结束轨迹按尚未作答题目的选项乘积补足后，`weightedTotal` 仍为 1,048,576。

本报告严格区分两种分布：`weightedPathPercentages` 是所有选项等概率时的完整路径概率模型；`trajectoryPercentages` 只表示截断终端叶的路线份额和多样性，不等同于玩家概率。两组百分比在 JSON 中各自合计 100%。

## 2. 基线与最终结果

| 指标 | Stage 04 基线 | Stage 06 最终 | 结论 |
|---|---:|---:|---|
| 全局危险合计 | 16.329% | 3.790% | 全部可达，但低于 11%–17% 参考区间 |
| `conflict_break` | 不可达 | 0.062% | 恢复可达，低于 3%–5% |
| `strong_discomfort` | 16.329% | 0.114% | 消除超过 10% 硬上限的问题 |
| `trust_broken` | 不可达 | 3.613% | 恢复可达，略低于 4%–6% |
| Q2 `no_second_meeting` 条件失败率 | 21.429% | 25.000% | 在 20%–25% 内 |
| Q5 `fade_out` 条件失败率 | 21.270% | 34.610% | 进入 30%–38% 区间 |
| Q8 `stay_acquaintances` 条件失败率 | 18.230% | 35.410% | 进入 35%–45% 区间 |
| Q10 分类器到达率 | 41.548% | 30.015% | 高于建议上限 0.015 个百分点 |
| 缺失完整 outcome | `conflict_break`、`trust_broken` | 无 | 12 个完整 outcome 全部可达 |
| 效果预算警告 | 0 | 1 | Q10 监控选项为叙事匹配的高强度例外，未越过硬上限 |

调整没有修改共享初始状态、clamp、阈值、规则顺序、稳定 ID、题序、策略或玩家可见文案。效果重分配让公开还击、未经同意的决定、强迫解决与监控分别落到冲突、信任和舒适的直接伤害轴；健康的同意、复核和协议行为则支持修复。反馈键随最终效果方向与强度同步。

## 3. 覆盖、危险结局与规则诊断

- 11 个声明的基础结局全部可达，没有缺失或意外 ID。
- 12 个声明的完整 outcome 全部可达，包括 `confirmed_relationship` 下两个独立关系评价。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 保持 `unknown`，不能从结局覆盖反推规则遮蔽。

| 全局结局 | 完整路径加权占比 | 参考状态 |
|---|---:|---|
| `conflict_break` | 0.062% | 低于 3%–5%，可达 |
| `strong_discomfort` | 0.114% | 低于 4%–6%，可达 |
| `trust_broken` | 3.613% | 略低于 4%–6%，可达 |
| 合计 | 3.790% | 低于 11%–17%，低于 20% 硬上限 |

这些区间是等概率选项模型下的诊断参考，不是伤害配额。继续抬高冲突与不适结局，需要让普通的边界表达、同意或修复行为承担与情节不符的严重惩罚；本轮优先保证因果语义、所有结局可达和三个阶段门健康，因此保留偏低结果。

## 4. 完整结果分布

| 完整 outcome | 截断终端轨迹 | 终端轨迹占比 | 完整路径加权数 | 完整路径占比 |
|---|---:|---:|---:|---:|
| `confirmed_relationship:romance_hidden_risk` | 7,905 | 2.421% | 7,905 | 0.754% |
| `confirmed_relationship:romance_stable` | 24,316 | 7.448% | 24,316 | 2.319% |
| `conflict_break` | 650 | 0.199% | 650 | 0.062% |
| `dangerous_lovers` | 1,915 | 0.587% | 1,915 | 0.183% |
| `fade_out` | 253 | 0.077% | 259,072 | 24.707% |
| `friends` | 74,831 | 22.920% | 74,831 | 7.136% |
| `no_second_meeting` | 4 | 0.001% | 262,144 | 25.000% |
| `stay_acquaintances` | 10,806 | 3.310% | 172,896 | 16.489% |
| `strangers_after_all` | 16,403 | 5.024% | 16,403 | 1.564% |
| `strong_discomfort` | 45 | 0.014% | 1,200 | 0.114% |
| `trust_broken` | 7 | 0.002% | 37,888 | 3.613% |
| `unresolved_ambiguity` | 189,356 | 57.997% | 189,356 | 18.058% |

提前结局在终端轨迹表中只计一次，但在完整路径模型中包含所有未展开后缀，因此 `no_second_meeting` 的 4 条终端轨迹对应 262,144 条完整选择路径。两种口径不能互换。

## 5. 阶段门

阶段门分母只包含在该检查点尚未被更高优先级全局结局截断的加权路径。

| 检查点 | 合格加权路径 | 失败加权路径 | 条件失败率 | 参考状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 1,048,576 | 262,144 | 25.000% | 在 20%–25% 内 |
| Q5 `fade_out` | 748,544 | 259,072 | 34.610% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` | 488,272 | 172,896 | 35.410% | 在 35%–45% 内 |

三个阶段门均无异常高值。Q2 区分公开玩笑后的边界处理；Q5 要求接触期积累足够吸引与可靠性；Q8 则要求亲密同意、风险协议和冲突暂停共同形成继续发展的基础。

## 6. Q10 最终分类器

共有 314,726 条加权路径到达 Q10，占完整空间 30.015%。在这些路径内部：

| 完整结果组 | Q10 条件占比 | 参考状态 |
|---|---:|---|
| `strangers_after_all` | 5.212% | 低于 15%–20% |
| `confirmed_relationship` 合计 | 10.238% | 在 10%–15% 内 |
| `dangerous_lovers` | 0.608% | 低于 5%–10% |
| `friends` | 23.777% | 在 18%–25% 内 |
| `unresolved_ambiguity` | 60.165% | 高于 35%–45% |

两个关系评价分别为：

| 完整 outcome | Q10 条件占比 | 加权路径数 |
|---|---:|---:|
| `confirmed_relationship:romance_stable` | 7.726% | 24,316 |
| `confirmed_relationship:romance_hidden_risk` | 2.512% | 7,905 |

Q10 到达率仅比建议上限高 0.015 个百分点，视为技术性边界偏差但仍按规则标记为 `above_recommended`。最终分类器把未同时满足其他条件的路径归入 `unresolved_ambiguity`；若强行增加陌生或危险恋人占比，就需把普通澄清行为变得有害，或给冒险、标签化与监控行为补高吸引。本轮不做这种语义反转。真实玩家选项权重出现后，应基于遥测重算，而非把等概率模型当做人群预测。

## 7. 每个完整 outcome 的示例路径

以下路径和终态均来自最终 JSON；状态顺序为 `吸引/信任/舒适/冲突`。

| 完整 outcome | 加权路径数 | 示例选项路径 | 示例终态 |
|---|---:|---|---|
| `confirmed_relationship:romance_hidden_risk` | 7,905 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_name_material_difference → q06_accept_both_willingly → q07_join_after_review → q08_define_pause_return → q09_leave_and_defer → q10_agree_despite_doubt | `85/65/75/5` |
| `confirmed_relationship:romance_stable` | 24,316 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_name_material_difference → q06_accept_both_willingly → q07_join_after_review → q08_define_pause_return → q09_review_behavior_together → q10_define_current_agreement | `85/100/100/0` |
| `conflict_break` | 650 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_typecast_in_group → q06_accept_both_willingly → q07_join_after_review → q08_force_resolution_now → q09_make_danger_the_charm → q10_demand_monitoring | `60/10/35/85` |
| `dangerous_lovers` | 1,915 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_ask_to_be_heard → q05_typecast_in_group → q06_accept_both_willingly → q07_join_after_review → q08_force_resolution_now → q09_leave_and_defer → q10_agree_despite_doubt | `90/50/65/50` |
| `fade_out` | 259,072 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_change_both_tickets → q04_hand_over_everything → q05_name_material_difference | `25/25/45/5` |
| `friends` | 74,831 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_name_material_difference → q06_accept_both_willingly → q07_book_now_plan_later → q08_define_pause_return → q09_name_real_evidence → q10_state_exclusivity_limit | `60/95/85/0` |
| `no_second_meeting` | 262,144 | q01_set_limits_then_choose → q02_hit_back_harder | `35/35/30/30` |
| `stay_acquaintances` | 172,896 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_name_material_difference → q06_accept_gift_decline_hug → q07_set_trial_and_exit → q08_define_pause_return | `40/90/90/0` |
| `strangers_after_all` | 16,403 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_name_material_difference → q06_accept_both_willingly → q07_book_now_plan_later → q08_force_resolution_now → q09_make_danger_the_charm → q10_agree_despite_doubt | `75/30/25/50` |
| `strong_discomfort` | 1,200 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_typecast_in_group → q06_surprise_hug_test → q07_book_now_plan_later → q08_force_resolution_now | `35/15/5/55` |
| `trust_broken` | 37,888 | q01_set_limits_then_choose → q02_laugh_it_off → q03_change_both_tickets → q04_hand_over_everything | `30/5/20/20` |
| `unresolved_ambiguity` | 189,356 | q01_set_limits_then_choose → q02_name_public_discomfort → q03_switch_with_consent → q04_hand_over_everything → q05_name_material_difference → q06_accept_both_willingly → q07_book_now_plan_later → q08_define_pause_return → q09_name_real_evidence → q10_define_current_agreement | `75/90/80/0` |

## 8. 固定位置、固定策略与局部支配

固定位置 1–4 分别得到 `unresolved_ambiguity`、`no_second_meeting`、`fade_out`、`fade_out`。没有答案位置形成通用成功或确认恋爱的捷径；位置 2 在 Q2 提前结束，位置 3 和 4 在 Q5 结束，位置 1 才到达 Q10。

固定策略结果：

- `honest` 在 Q5 得到 `fade_out`，终态 `25/80/95/0`；固定标签跨场景拼接不等于完整关系策略。
- `negotiate` 到达 `unresolved_ambiguity`，终态 `75/100/100/0`；协议质量很高，但共享恋爱分类仍要求更高吸引力。
- `risky` 在 Q2 得到 `no_second_meeting`，终态 `30/20/15/30`。
- `accommodate` 缺少 Q5 对应选项，`confront` 缺少 Q1 对应选项，因此两者明确标记为不适用。
- 分析器没有报告跨十题的全局原始效果策略支配。

局部原始效果共报告 37 对，只是逐题向量警告，不证明全局结局支配：

| 题号 | 局部支配对数 | 叙事处置 |
|---|---:|---|
| Q01 | 3 | 有条件尝鲜、跟随兴趣、改期和把边界变成挑战保留不同自主性与公开风险。 |
| Q02 | 3 | 指出影响、还击、约定停止信号与淡化冲突保留不同修复方式。 |
| Q03 | 4 | 改约、守约、擅改双方安排与保留原计划分别测试同意和可靠性。 |
| Q04 | 6 | 接管、倾听、拆分支持与暂时独处对应不同支持边界。 |
| Q05 | 5 | 暂停借用、标签化、核验差异与重写条件具有不同授权含义。 |
| Q06 | 3 | 接受、部分接受、突然触碰测试与长期许可规则不能互换。 |
| Q07 | 1 | 先订票、可逆试水、评估后参加与拒绝高成本版本保留风险语义。 |
| Q08 | 4 | 暂停协议、强迫当晚解决、说明等待上限与按约降温对应不同修复风险。 |
| Q09 | 5 | 行为证据、危险魅力、共同复核与延后讨论保留不同判断依据。 |
| Q10 | 3 | 当前协议、排他底线、压下疑问与监控要求分别检验确认、保留和控制。 |

## 9. 效果预算、复现与验证

40 个选项都使用允许的离散效果值，且没有超过绝对变化总和 60 的硬上限。唯一普通预算警告是 Q10 `q10_demand_monitoring` 的总和 50；它只在信任与冲突两个维度达到高强度，匹配“以监控换保证”的严重控制行为，因此保留。其余选项总和不超过 40，反馈键与最终效果方向及强度一致。

定向验证已通过：ESTP schema（10 题、40 选项、11 结局、2 评价、24 条反馈）、题目追溯、Markdown 效果表与运行时 40 个向量一致性、适配器 JSON 确定性重建、ESTP 全路径分析及 `git diff --check`。`npm run check` 与 `npm run build` 也通过；构建仅有既有的大 chunk 非阻塞提示。全包 `validate-content`、`analyze-question-paths all` 与完整测试在当前工作区被独立的 ISTP `q10_define_agreement` 反馈错误阻断（`trust_up_strong` 对应 +10，应为 medium）；该错误不属于 ESTP，本次没有跨类型改动。

复现最终 JSON：

```powershell
node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs .codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-estp-adapter.mjs --json
```

ESTP 已注册进生产内容包；`node scripts/analyze-question-paths.mjs all` 会把它纳入全注册包回归。后续若修改 ESTP 效果、选项顺序或共享规则，必须重新生成机器报告并执行全类型路径分析、测试与生产构建。
