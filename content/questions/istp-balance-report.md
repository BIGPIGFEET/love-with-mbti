# ISTP 选择路径平衡报告（Stage 06）

## 1. 范围、来源与方法

- 分析日期：2026-09-11
- 题目权威源：`src/content/istp-questions.ts`
- 固定生产规则：`src/game/rules.ts` 的 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-istp-adapter.mjs`
- 分析器：`.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- Stage 04 基线：`content/questions/istp-balance-baseline.json`
- 最终机器报告：`content/questions/istp-balance-report.json`
- 最终题目 LF 规范化 SHA-256：`1414F4A38BB243FEBEED545E55E95C5E515D163638BF5F7C21D07CC1A36FD0FD`
- 固定规则 LF 规范化 SHA-256：`C4A744D810F463EE1695263590E5DC3E8037163B064E6B6522D1794B24573D03`
- 适配器 LF 规范化 SHA-256：`79BE343FEA6F7E511C1C3940D9A2A3320D9D01B85C48A0AE75F2D5488EECE11E`

十题均有四个选项，完整选择空间为 `4^10 = 1,048,576`。最终完整枚举得到 298,321 条截断终端轨迹，其中 12,673 条在 Q10 前结束。提前终止轨迹按未作答题目的选项数量乘积补足，`weightedTotal` 精确等于 1,048,576。

本报告严格区分两种分布：

- `weightedPathPercentages` 是每道已到达题目的四个选项等概率时，路径在完整选择空间中的占比，是主要概率模型。
- `trajectoryPercentages` 让每条截断终端叶获得相同权重，只描述终端路线数量与多样性，不代表玩家概率。

复现最终 JSON：

```powershell
node scripts/refresh-istp-balance-report.mjs
```

直接复现分析器输出：

```powershell
node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs .codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-istp-adapter.mjs --json
```

## 2. 基线与最终结果

| 指标 | Stage 04 基线 | Stage 06 最终 | 最终状态 |
|---|---:|---:|---|
| 全局危险合计 | 21.064% | 7.276% | 消除超过 20% 硬上限的问题；低于 11%—17% 参考区间 |
| Q2 `no_second_meeting` 条件失败率 | 21.429% | 25.000% | 在 20%—25% 内 |
| Q5 `fade_out` 条件失败率 | 23.539% | 33.661% | 在 30%—38% 内 |
| Q8 `stay_acquaintances` 条件失败率 | 38.174% | 39.885% | 在 35%—45% 内 |
| Q10 分类器到达率 | 28.146% | 26.213% | 在 20%—30% 内 |
| `strangers_after_all` 条件占比 | 11.933% | 18.976% | 在 15%—20% 内 |
| `confirmed_relationship` 条件占比 | 9.132% | 12.475% | 在 10%—15% 内 |
| `dangerous_lovers` 条件占比 | 0.317% | 5.418% | 在 5%—10% 内 |
| `friends` 条件占比 | 11.634% | 4.742% | 低于 18%—25% |
| `unresolved_ambiguity` 条件占比 | 66.984% | 58.389% | 高于 35%—45% |
| 缺失基础结局 / 完整结果 | `conflict_break` / `conflict_break` | 无 / 无 | 11 个基础结局与 12 个完整结果全部可达 |
| 效果预算警告 | 1 | 0 | 40 个选项均不超过普通建议值 40 |
| 局部原始效果支配对 | 50 | 47 | 全部逐题保留叙事处置；无全局策略支配 |

调优只改变目标专属选项效果及与效果强度绑定的即时反馈。题目 ID、题目顺序、选项 ID、显示顺序、策略、场景、台词、选项文案、稳定结果 ID、共享初始状态、clamp、阶段门、全局阈值、结局优先级和最终分类器均未改变。

## 3. 效果调优明细

状态向量顺序为 `吸引/信任/舒适/冲突`。所有变化均使用固定合法值，并保留选项原有行为方向。

| 选项 | 基线 → 最终 | 调整理由 |
|---|---|---|
| `q01_fill_every_pause` | `+5/-5/-10/+10` → `+5/0/-10/+10` | 不尊重安静首先造成压力和摩擦，不把一次抢话提前写成信任崩坏。 |
| `q01_name_uncertainty` | `0/+10/+5/0` → `+5/+10/+5/0` | 坦白无法读懂短句并允许直接回答，保留轻微靠近。 |
| `q02_praise_reversal` | `+5/-10/-10/+10` → `+5/-15/-5/+10` | “反差也很酷”仍是类型归类，主要伤害信任而非最大化不适。 |
| `q02_dismiss_concern` | `-5/-15/-10/+10` → `-5/-15/-5/+10` | 否定异议以信任损失为主，避免与 Q1 压力叠加成过早全局退出。 |
| `q03_define_scope` | `+5/+15/+10/-5` → `0/+15/+10/-5` | 清楚协作首先建立信任与自在，不自动增加浪漫吸引。 |
| `q03_hand_over_phone` | `+5/-5/-5/+5` → `0/-10/-5/+5` | 交出密码与最终决定不是浪漫认可，主要暴露操作和责任边界。 |
| `q03_demand_fix` | `-5/-10/-10/+15` → `-5/-10/-5/+20` | 把 TA 当默认维修服务更直接地升级对抗。 |
| `q04_repay_immediately` | `+5/0/-5/+5` → `0/0/-5/+5` | 立即结算保留关系但不自动增加心动。 |
| `q05_accuse_avoidance` | `-5/-5/-15/+15` → `-5/-5/-10/+20` | 把独处判成“不认真”以指责升级为主要后果。 |
| `q06_praise_without_listening` | `+5/-5/0/+5` → `0/-5/0/+5` | 没有听过程的空泛夸奖不再被当作吸引增益。 |
| `q06_dismiss_process` | `-5/-10/-10/+15` → `-5/-10/-5/+20` | 贬低兴趣过程主要把差异推成冲突。 |
| `q07_retaliate` | `-5/-10/-10/+15` → `-5/-10/-5/+20` | 报复性回应以冲突升级为主要伤害。 |
| `q08_force_now` | `-10/-10/-15/+15` → `0/-5/-20/+15` | 强迫当场谈完主要挤压暂停权；总绝对变化由 50 降为 40。 |
| `q09_name_remaining_need` | `+5/+15/+5/-5` → `+10/+15/+5/-5` | 准确说出仍需验证的改变，让修复同时支持靠近。 |
| `q09_close_topic` | `+5/-5/+5/+5` → `+15/-15/+10/0` | “回来就够了”保留强烈靠近与即时轻松，但跳过验证明显削弱信任。 |
| `q09_demand_perfect` | `-5/-5/-15/+15` → `0/-5/-20/+15` | 要求永不犯错主要制造不可承受的修复压力。 |
| `q10_agree_unsaid` | `+10/0/-5/+5` → `+20/0/-20/0` | 为确认关系隐藏全部需要，形成高吸引与低自在并存的失衡路径。 |
| `q10_all_or_nothing` | `0/-10/-15/+15` → `0/-5/-20/+15` | “随时在线”首先挤压选择空间，不把压力重复写成最大信任损失。 |

反馈同步包括：移除不再存在的吸引提示；把 `-5/-10/-15` 与 `+20` 对应到 slight/medium/strong；保留 `conflict` 上升为恶化、下降为缓和的反向健康语义。选项即时反应没有改写成直接结局。

## 4. 覆盖与全局危险

- 11 个声明的基础结局全部可达，无缺失或意外 ID。
- 12 个声明的完整结果全部可达，包括 `confirmed_relationship` 下两个独立评价。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖未声明，规则阴影状态保持 `unknown`。

| 全局结局 | 加权路径数 | 完整空间占比 | 参考状态 |
|---|---:|---:|---|
| `conflict_break` | 2,240 | 0.214% | 低于 3%—5% |
| `strong_discomfort` | 37,156 | 3.543% | 低于 4%—6% |
| `trust_broken` | 36,896 | 3.519% | 低于 4%—6% |
| 合计 | 76,292 | 7.276% | 低于 11%—17%，且低于 20% 硬上限 |

这些偏差被明确保留。Q2、Q5、Q8 的低冲突阶段门会先截断许多连续伤害组合，因此全局结果很难在不夸大普通失误的情况下达到建议频率。继续提高 `conflict_break` 需要让更早的类型投射或沟通失误带上接近极值的冲突，继续提高另外两项则需要把信任与舒适同时重罚；两者都违背单一主要伤害轴和题目叙事。三个结果均已可达、没有硬上限违规，因此不为填满参考配额继续制造严重效果。

## 5. 阶段门

阶段门分母只包含在对应检查点没有被更高优先级全局结果截断的加权路径。三个条件失败率均进入参考区间。

| 检查点 | 合格加权路径 | 失败加权路径 | 条件失败率 | 参考状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 1,048,576 | 262,144 | 25.000% | 在 20%—25% 内 |
| Q5 `fade_out` | 730,112 | 245,760 | 33.661% | 在 30%—38% 内 |
| Q8 `stay_acquaintances` | 475,168 | 189,520 | 39.885% | 在 35%—45% 内 |

Q2 由是否继续把类型梗套回 TA 身上形成分流；Q5 检查帮助范围、心意解释与共同时间是否积成可靠往来；Q8 要求兴趣分享、直接反馈和暂停修复共同支持更深关系。失败条件来自可观察行为，而不是 ISTP 标签。

## 6. Q10 最终分类器

共有 274,860 条加权路径到达 Q10 分类器，占完整等概率选择空间的 26.213%，进入 20%—30% 参考区间。

| 完整结果组 | 加权路径数 | Q10 条件占比 | 参考状态 |
|---|---:|---:|---|
| `strangers_after_all` | 52,157 | 18.976% | 在 15%—20% 内 |
| `confirmed_relationship` 合计 | 34,289 | 12.475% | 在 10%—15% 内；完整空间占比 3.270% |
| `dangerous_lovers` | 14,891 | 5.418% | 在 5%—10% 内 |
| `friends` | 13,035 | 4.742% | 低于 18%—25% |
| `unresolved_ambiguity` | 160,488 | 58.389% | 高于 35%—45% |

两个恋爱评价分别保留：

| 完整结果 | 加权路径数 | Q10 条件占比 |
|---|---:|---:|
| `confirmed_relationship:romance_stable` | 22,622 | 8.230% |
| `confirmed_relationship:romance_hidden_risk` | 11,667 | 4.245% |

`friends` 与 `unresolved_ambiguity` 的偏差不隐藏。锁定的 Q10 四个选项分别是隐藏需要后同意、共同确认协议、提出全有全无条件、诚实说明投入范围；没有一个明确选择非恋爱友谊。若仅为达到朋友配额而让“确认关系”选项大幅降低吸引，结局会与玩家刚作出的选择冲突。多数已通过前三道四维门槛、又未满足更窄最终条件的状态因此进入兜底的 `unresolved_ambiguity`。本阶段保留两项可达并记录偏差，不改题意或共享分类器。

## 7. 完整空间分布

| 完整结果 | 截断终端轨迹 | 终端轨迹占比 | 加权路径 | 完整空间占比 |
|---|---:|---:|---:|---:|
| `confirmed_relationship:romance_hidden_risk` | 11,667 | 3.911% | 11,667 | 1.113% |
| `confirmed_relationship:romance_stable` | 22,622 | 7.583% | 22,622 | 2.157% |
| `conflict_break` | 125 | 0.042% | 2,240 | 0.214% |
| `dangerous_lovers` | 14,891 | 4.992% | 14,891 | 1.420% |
| `fade_out` | 240 | 0.080% | 245,760 | 23.438% |
| `friends` | 13,035 | 4.369% | 13,035 | 1.243% |
| `no_second_meeting` | 4 | 0.001% | 262,144 | 25.000% |
| `stay_acquaintances` | 11,845 | 3.971% | 189,520 | 18.074% |
| `strangers_after_all` | 52,157 | 17.484% | 52,157 | 4.974% |
| `strong_discomfort` | 11,233 | 3.765% | 37,156 | 3.543% |
| `trust_broken` | 14 | 0.005% | 36,896 | 3.519% |
| `unresolved_ambiguity` | 160,488 | 53.797% | 160,488 | 15.305% |

例如 `no_second_meeting` 只有 4 条截断终端路线，却代表完整等概率空间的 25%；这正是不能把终端轨迹占比当作玩家概率的原因。

## 8. 每个完整结果的示例路径

以下路径和终态均由最终机器报告生成。终态顺序为 `吸引/信任/舒适/冲突`。

| 完整结果 | 示例选项路径 | 示例终态 |
|---|---|---|
| `confirmed_relationship:romance_hidden_risk` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_agree_depth → q07_redo_silently → q08_set_return_time → q09_close_topic → q10_define_agreement | `95/70/85/0` |
| `confirmed_relationship:romance_stable` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_agree_depth → q07_redo_silently → q08_set_return_time → q09_name_remaining_need → q10_define_agreement | `90/100/80/0` |
| `conflict_break` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_accuse_avoidance → q06_dismiss_process → q07_retaliate → q08_force_now | `30/15/5/85` |
| `dangerous_lovers` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_agree_depth → q07_redo_silently → q08_set_return_time → q09_name_remaining_need → q10_agree_unsaid | `95/90/50/0` |
| `fade_out` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_repay_immediately → q05_accuse_avoidance | `30/45/40/25` |
| `friends` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_praise_without_listening → q07_name_impact → q08_name_minimum → q09_name_remaining_need → q10_all_or_nothing | `60/85/45/15` |
| `no_second_meeting` | q01_walk_quietly → q02_praise_reversal | `35/10/30/20` |
| `stay_acquaintances` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_praise_without_listening → q07_redo_silently → q08_force_now | `50/40/25/35` |
| `strangers_after_all` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_agree_depth → q07_redo_silently → q08_set_return_time → q09_demand_perfect → q10_agree_unsaid | `85/70/25/15` |
| `strong_discomfort` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_agree_depth → q07_redo_silently → q08_force_now → q09_demand_perfect → q10_agree_unsaid | `80/50/0/40` |
| `trust_broken` | q01_walk_quietly → q02_own_assumption → q03_hand_over_phone → q04_tease_romance → q05_split_schedule → q06_dismiss_process → q07_retaliate → q08_force_now | `45/5/10/70` |
| `unresolved_ambiguity` | q01_walk_quietly → q02_own_assumption → q03_define_scope → q04_tease_romance → q05_state_need → q06_agree_depth → q07_redo_silently → q08_set_return_time → q09_name_remaining_need → q10_all_or_nothing | `75/85/50/15` |

## 9. 固定位置、固定策略与局部支配

固定位置 1—4 分别得到 `dangerous_lovers`、`fade_out`、`stay_acquaintances` 和 `fade_out`。第一位置并非通用成功捷径，而是高吸引、低舒适的失衡恋爱；其余三个位置在不同阶段门退出。选项顺序没有形成“始终选同一按钮即可稳定恋爱”的模式，因此不为美化位置结果而改动已经跨题变化的策略顺序。

固定策略结果：

- `honest` 到达 `unresolved_ambiguity`，终态 `80/100/90/0`。
- `negotiate` 到达 `confirmed_relationship:romance_stable`，终态 `95/100/100/0`。
- `risky` 在 Q2 得到 `no_second_meeting`。
- `accommodate` 缺少 Q2 对应选项，`confront` 缺少 Q1 对应选项，两者标为不适用。
- 分析器没有报告跨十题的全局原始效果策略支配。

局部原始效果分析仍报告 47 对支配关系。这只是单题四维向量警告，不证明全局结局支配；最终吸引分类也不是单调效用。逐题处置如下：

| 题号 | 支配对数 | 叙事处置 |
|---|---:|---|
| Q01 | 5 | 安静同行、确认节奏、抢填沉默和坦白不确定分别测试顺应、协商、施压与诚实；被支配项保留不同沟通责任。 |
| Q02 | 6 | 收回假设、反差夸奖、提供话题边界和否定异议是四种可观察的反刻板回应，不能合并。 |
| Q03 | 6 | 定义协作、交出手机、改走客服和要求修好保留操作权、容量与工具化差异。 |
| Q04 | 3 | 暧昧玩笑、直接感谢、确认含义和立即结算区分心意解释，不用数值强弱替代选择。 |
| Q05 | 5 | 说明失落、指控逃避、退出共同时间和拆分安排具有不同的空间与承诺含义。 |
| Q06 | 6 | 协商分享深度、空泛夸奖、贬低过程和询问个人意义保留共同注意差异。 |
| Q07 | 5 | 默默重做、指出影响、反击和重订反馈方式分别承担回避、修复、报复与协作。 |
| Q08 | 6 | 有返回点的暂停、强迫继续、有限报平安和无限等待区分可靠空间与失联风险。 |
| Q09 | 2 | 说出未决需要、直接翻篇、建立协议和要求完美分别测试修复是否可验证。 |
| Q10 | 3 | 隐藏需要后同意、共同协议、全有全无和说明投入范围保留四种关系定义方式。 |

所有局部被支配选项均有不可替代的叙事行为，因此保留。未出现全局策略支配，也没有改变题目或选项顺序来影响等概率分布。

## 10. 同步与验收

- 所有效果值属于固定允许集合；40 个选项的绝对变化总和均不超过 40，没有非法值、硬上限错误、普通预算警告或过多高强度维度警告。
- 每个反馈 ID 均指向同一选项中方向、维度和强度一致的非零效果；冲突提示保持反向健康语义。
- JSON 报告由 `scripts/refresh-istp-balance-report.mjs` 调用生产等价分析器生成，没有手工编辑计算字段。
- Stage 03/04 追溯仍以精确 `question_id`、`scene_id` 和 `option_id` 对齐；题目和选项 ID 未改变。
- 规则覆盖与阴影保持 `unknown`，没有把审计标签伪装成运行时 rule ID。
- 后续若修改 ISTP 效果、选项顺序或共享规则，必须重新生成本报告；共享规则变化还必须重跑所有已注册内容包。
