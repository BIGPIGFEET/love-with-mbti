# INFJ 十题全路径平衡报告（Stage 06）

> 状态：complete，2026-08-24。  
> 基线机器报告：[infj-balance-baseline.json](infj-balance-baseline.json)。  
> 最终机器报告：[infj-balance-report.json](infj-balance-report.json)。  
> 分析适配器：[infj-choice-paths-adapter.mjs](../../scripts/infj-choice-paths-adapter.mjs)。

## 1. 方法与口径

适配器导入 INFJ 的真实问题数组，并直接调用共享 `applyEffects`、`resolveEnding` 与 `endingResultKey`。本次确定性穷举覆盖 `4^10 = 1,048,576` 条完整选择组合；最终加权总数同为 `1,048,576`，没有抽样。

- `weightedPathPercentages`：提前结束路径按未走后缀的选择数量加权，是本报告采用的主要等概率选择模型。
- `trajectoryPercentages`：每个截断终止叶等权，只描述终止路线构成，不代表玩家概率。
- 阶段失败率：只以通过同检查点更高优先级规则后仍有资格接受门槛检查的加权路径为分母。
- 终局条件比例：只以实际抵达 Q10 分类器的路径为分母。

最终报告包含 `302,182` 个截断终止叶，其中 `12,294` 个提前结束；机器报告为每个可达完整 outcome 保存了至少一条示例路径和最终状态。

## 2. 基线诊断与最终结果

| 指标 | 推荐范围 | 基线 | 最终 | 结论 |
|---|---:|---:|---:|---|
| conflict_break / 完整空间 | 3–5% | 0.046% | 0.508% | 可达，低于建议 |
| strong_discomfort / 完整空间 | 4–6% | 8.043% | 5.626% | 进入范围 |
| trust_broken / 完整空间 | 4–6% | 8.485% | 2.148% | 可达，低于建议 |
| 三类全局危险合计 | 11–17% | 16.574% | 8.282% | 低于建议 |
| Q2 条件失败率 | 20–25% | 40.000% | 25.000% | 进入范围 |
| Q5 条件失败率 | 30–38% | 25.523% | 31.350% | 进入范围 |
| Q8 条件失败率 | 35–45% | 25.978% | 39.461% | 进入范围 |
| 抵达 Q10 分类器 / 完整空间 | 20–30% | 25.157% | 27.604% | 进入范围 |
| 最终陌生 / Q10 条件 | 15–20% | 9.823% | 15.459% | 进入范围 |
| 确认恋爱合计 / Q10 条件 | 10–15% | 0% | 14.305% | 从不可达进入范围 |
| 危险恋人 / Q10 条件 | 5–10% | 0% | 8.101% | 从不可达进入范围 |
| 朋友 / Q10 条件 | 18–25% | 29.146% | 21.145% | 进入范围 |
| 未定关系 / Q10 条件 | 35–45% | 61.031% | 40.990% | 进入范围 |

全局危险合计未达到建议下限，但三类均可达且合计远低于 20% 硬上限。低冲突的 Q2/Q5/Q8 门槛会优先截走许多负面路径；继续为普通分歧追加严重伤害会破坏选项含义，因此保留此偏差，不以失真的数值强行凑齐比例。

## 3. 阶段门槛分母

| checkpoint | eligible weighted paths | failed weighted paths | conditional failure | status |
|---|---:|---:|---:|---|
| Q02 / no_second_meeting | 1,048,576 | 262,144 | 25.000% | within recommended |
| Q05 / fade_out | 705,536 | 221,184 | 31.350% | within recommended |
| Q08 / stay_acquaintances | 478,848 | 188,960 | 39.461% | within recommended |

这些比例不能替换成结局占完整空间的份额：例如 `fade_out` 的完整空间加权占比为 21.094%，但其正确的 Q5 条件失败率是 31.350%。

## 4. 终局分类与完整 outcome

Q10 分类器收到 `289,446` 条加权路径，占完整空间 27.604%。

| complete outcome / group | Q10 paths | Q10 conditional | complete-space weighted |
|---|---:|---:|---:|
| strangers_after_all | 44,745 | 15.459% | 4.267% |
| confirmed_relationship:romance_stable | 19,351 | 6.686% | 1.845% |
| confirmed_relationship:romance_hidden_risk | 22,054 | 7.619% | 2.103% |
| confirmed_relationship combined | 41,405 | 14.305% | 3.949% |
| dangerous_lovers | 23,449 | 8.101% | 2.236% |
| friends | 61,202 | 21.145% | 5.837% |
| unresolved_ambiguity | 118,645 | 40.990% | 11.315% |

11 个基础结局和 12 个完整 outcome 全部可达，无缺失或意外 ID。两种恋爱评价没有被合并丢失。

## 5. 两种全局分布视图

| complete outcome | weighted complete paths | terminal-leaf trajectories |
|---|---:|---:|
| no_second_meeting | 25.000% | 0.001% |
| fade_out | 21.094% | 0.071% |
| stay_acquaintances | 18.021% | 3.908% |
| conflict_break | 0.508% | 0.221% |
| strong_discomfort | 5.626% | 0.008% |
| trust_broken | 2.148% | 0.004% |
| strangers_after_all | 4.267% | 14.807% |
| confirmed_relationship:romance_stable | 1.845% | 6.404% |
| confirmed_relationship:romance_hidden_risk | 2.103% | 7.298% |
| dangerous_lovers | 2.236% | 7.760% |
| friends | 5.837% | 20.253% |
| unresolved_ambiguity | 11.315% | 39.263% |

两列分母不同，不能把终止叶占比称作玩家概率。提前两题结束的路径在终止叶中只有极少数，却代表大量等价完整选择后缀，这正是加权口径必须保留的原因。

## 6. 固定位置与固定策略

固定显示位置的四条路径分别得到：位置 1 为稳定恋爱，位置 2 为朋友，位置 3 停在熟人，位置 4 没有第二次见面。不存在固定位置万能答案。

| strategy | applicable | result |
|---|---|---|
| accommodate | 是 | fade_out |
| honest | 是 | friends |
| negotiate | 是 | confirmed_relationship:romance_stable |
| risky | 是 | no_second_meeting |
| confront | 否；Q01 无该策略 | n/a |

跨题原始效果策略支配为空。固定策略结果不同不代表某策略对真实玩家具有因果概率，只说明没有一条适用策略统一成功或统一失败。

## 7. 局部支配与效果预算

分析器报告 47 条成对局部支配警告，不等于 47 个独立问题。大部分被支配项是明确越界行为，或“把需求全部收回”“只顺从对方”等具有独立叙事意义的自我压抑路线；它们保留是为了让行为后果可比较。局部原始效果不能证明跨题全局支配，机器报告保留了完整明细供后续改动复审。

最终只有 `q09_declare_soulmates` 超过普通建议预算：绝对变化总和 `55`，仍低于硬上限 `60`，且只有吸引与冲突两个高幅维度。该选项同时制造强烈心动和严重命定化冲突，属于有明确双轴理由的例外。其余 39 个选项均不超过普通建议预算，所有效果都是合法五点步长。

## 8. 调整原则与未改内容

- Q2 的读心测试移除重复舒适伤害，保留信任损伤和冲突上升。
- 严重选项改为单一主伤害轴，避免信任与舒适同时触底并互相抢占结局。
- 自我压抑选项保留短期缓和，但增加信任或未解决冲突代价。
- 先稳定 Q2/Q5/Q8，再调整 Q9/Q10；后两题用吸引差异区分朋友、稳定恋爱、隐患恋爱和危险恋人。
- 没有修改 `INITIAL_STATE`、截断、阶段阈值、规则顺序、稳定结果 ID、状态方向、策略词汇或共享反馈语义。
- 规则阴影仍标记为 unknown：运行时不暴露稳定 rule ID 或 applicable-rule 诊断钩子，不能从选中结果反推所有同时成立规则。
