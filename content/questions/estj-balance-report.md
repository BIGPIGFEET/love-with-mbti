# ESTJ 选择路径平衡报告（Stage 06）

## 1. 范围、来源与方法

- 分析日期：2026-09-04
- 题目权威源：`src/content/estj-questions.ts`
- 固定生产规则：`src/game/rules.ts` 的 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-estj-adapter.mjs`
- 分析器：`.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- Stage 04 基线：`content/questions/estj-balance-baseline.json`
- 最终机器报告：`content/questions/estj-balance-report.json`
- 最终题目 LF 规范化 SHA-256：`A42748CBE1FDD6D9E51F140D29F3E102CC47F7187EED247C4E597B094641E769`
- 固定规则 LF 规范化 SHA-256：`C4A744D810F463EE1695263590E5DC3E8037163B064E6B6522D1794B24573D03`
- 适配器 LF 规范化 SHA-256：`D06DAD51AB9B315393118855C74102DCA8F9595EE4AAF87FB409F7442E572B78`

十题均有四个选项，完整选择空间为 `4^10 = 1,048,576`。最终枚举得到 303,334 条截断终端轨迹，其中 13,718 条在 Q10 前结束；提前终止轨迹按未作答题目的选项数量乘积补足，最终 `weightedTotal` 精确等于 1,048,576。

本报告严格区分两种分布：

- `weightedPathPercentages` 是每道已到达题目的四个选项等概率时的完整选择空间占比，是本报告的主要概率模型。
- `trajectoryPercentages` 让每条截断终端叶获得相同权重，只说明终端路线的数量与多样性，不代表玩家概率。

复现最终 JSON：

```powershell
node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs .codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-estj-adapter.mjs --json
```

## 2. 基线与最终结果

| 指标 | Stage 04 基线 | Stage 06 最终 | 最终状态 |
|---|---:|---:|---|
| 全局危险合计 | 10.681% | 10.032% | 低于 11%–17% 参考区间，低于 20% 硬上限 |
| Q2 `no_second_meeting` 条件失败率 | 6.667% | 20.000% | 进入 20%–25% 区间 |
| Q5 `fade_out` 条件失败率 | 11.744% | 32.745% | 进入 30%–38% 区间 |
| Q8 `stay_acquaintances` 条件失败率 | 26.184% | 42.243% | 进入 35%–45% 区间 |
| Q10 分类器到达率 | 53.970% | 27.482% | 进入 20%–30% 区间 |
| `strangers_after_all` 条件占比 | 5.768% | 7.568% | 低于 15%–20% |
| `confirmed_relationship` 条件占比 | 6.746% | 15.079% | 高于 10%–15% 上限 0.079 个百分点 |
| `dangerous_lovers` 条件占比 | 0.218% | 2.827% | 低于 5%–10% |
| `friends` 条件占比 | 28.160% | 21.439% | 进入 18%–25% 区间 |
| `unresolved_ambiguity` 条件占比 | 59.108% | 53.087% | 高于 35%–45% |
| 缺失基础结局 / 完整 outcome | 无 / 无 | 无 / 无 | 全部可达 |
| 全局原始效果策略支配 | `negotiate > risky` | 无 | 已消除 |
| 效果预算警告 | 0 | 0 | 40 个选项均不超过普通建议值 40 |

调优没有修改共享初始状态、clamp、阶段阈值、全局危险阈值、规则顺序、最终分类器或稳定 ID。主要变化是减少“清楚表达边界”自动增加浪漫吸引的情况，让转移决定责任主要损害信任，让逼迫、报复与监控分别落在最直接的舒适或冲突轴上，并在 Q9–Q10 保留“高吸引但缺少真实选择空间”的危险路径。

## 3. 覆盖与全局危险

- 11 个声明的基础结局全部可达，没有缺失或意外 ID。
- 12 个声明的完整 outcome 全部可达，包括 `confirmed_relationship` 下两个独立关系评价。
- 运行时没有稳定 rule ID，也没有 applicable-rule 诊断钩子；因此规则覆盖未声明，具体规则 shadowing 保持 `unknown`。不能从某个低占比结果反推规则被遮蔽。

| 全局结局 | 加权路径数 | 完整空间占比 | 参考状态 |
|---|---:|---:|---|
| `conflict_break` | 1,392 | 0.133% | 低于 3%–5% |
| `strong_discomfort` | 21,878 | 2.086% | 低于 4%–6% |
| `trust_broken` | 81,920 | 7.813% | 高于 4%–6%，低于 10% 硬上限 |
| 合计 | 105,190 | 10.032% | 低于 11%–17%，低于 20% 硬上限 |

偏差被明确保留。`trust_broken` 的主要来源是 Q1 已经替他人指定角色后，Q2 又把决定与错误责任整体交给 TA；这是清楚的信任伤害组合。若为了压低该结果而削弱 Q2 的责任转移，Q2 阶段门会重新失去区分力。反过来，把普通的诚实限制、取消安排或修复行为追加严重冲突与不适，会扭曲选择含义。三项全局结果均可达且没有超过硬上限，因此不为凑参考配额继续制造伤害。

## 4. 阶段门

阶段门分母只包含在该检查点未被更高优先级全局结局截断的加权路径。三个条件失败率都进入项目参考区间且没有异常高值。

| 检查点 | 合格加权路径 | 失败加权路径 | 条件失败率 | 参考状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 983,040 | 196,608 | 20.000% | 在 20%–25% 内 |
| Q5 `fade_out` | 753,664 | 246,784 | 32.745% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` | 501,440 | 211,824 | 42.243% | 在 35%–45% 内 |

Q2 由是否把支持变成单方决定责任形成分流；Q5 主要检查前三次联系是否真正累积了足够吸引，而不是把可信边界表达自动算作浪漫推进；Q8 则要求计划、行动照顾、隐私修复与变更协商共同支持更熟悉的关系。

## 5. Q10 最终分类器

共有 288,170 条加权路径到达 Q10 分类器，占完整等概率选择空间的 27.482%。该集合内部的完整结果组如下：

| 完整结果组 | Q10 条件占比 | 参考状态 |
|---|---:|---|
| `strangers_after_all` | 7.568% | 低于 15%–20% |
| `confirmed_relationship` 合计 | 15.079% | 高于上限 0.079 个百分点；完整空间占比 4.144% |
| `dangerous_lovers` | 2.827% | 低于 5%–10% |
| `friends` | 21.439% | 在 18%–25% 内 |
| `unresolved_ambiguity` | 53.087% | 高于 35%–45% |

两个关系评价分开保留：

| 完整 outcome | 加权路径数 | Q10 条件占比 |
|---|---:|---:|
| `confirmed_relationship:romance_stable` | 30,131 | 10.456% |
| `confirmed_relationship:romance_hidden_risk` | 13,322 | 4.623% |

最终分布的残余偏差不隐藏也不继续强行调平。到达 Q10 的多数路径已经通过三个四维阶段门，若要把更多安全路径改写为陌生或危险恋爱，必须进一步惩罚诚实保留、真实取消或边界修复，或者让单个风险选项同时最大幅度破坏信任与舒适；两者都违反叙事含义和单一主伤害轴原则。`confirmed_relationship` 仅超过参考上限 0.079 个百分点，`friends` 已进入区间；剩余路径由未同时满足其他分类条件的 `unresolved_ambiguity` 承接。等概率选项模型是设计诊断，不是人群预测；有真实选择遥测后应按观察权重重算。

## 6. 每个完整 outcome 的示例路径

以下路径与终态均来自最终 JSON。状态顺序为 `吸引/信任/舒适/冲突`。

| 完整 outcome | 加权路径数 | 示例选项路径 | 示例终态 |
|---|---:|---|---|
| `confirmed_relationship:romance_hidden_risk` | 13,322 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_build_a_new_ritual → q07_pause_before_details → q08_take_the_simpler_day → q09_claim_the_loyalty_guarantee → q10_accept_while_unsure | `90/100/60/0` |
| `confirmed_relationship:romance_stable` | 30,131 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_build_a_new_ritual → q07_pause_before_details → q08_take_the_simpler_day → q09_claim_the_loyalty_guarantee → q10_define_current_agreement | `90/100/85/0` |
| `conflict_break` | 1,392 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_demand_total_priority → q06_erase_their_effort → q07_reveal_their_secret_back → q08_force_the_original_shape | `40/35/10/80` |
| `dangerous_lovers` | 8,146 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_build_a_new_ritual → q07_pause_before_details → q08_force_the_original_shape → q09_claim_the_loyalty_guarantee → q10_accept_while_unsure | `90/90/40/20` |
| `fade_out` | 246,784 | q01_share_the_coordination → q02_ask_for_listening → q03_mark_fixed_and_flexible → q04_give_up_all_ownership → q05_name_your_minimum | `30/60/50/5` |
| `friends` | 61,780 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_build_a_new_ritual → q07_pause_before_details → q08_take_the_simpler_day → q09_name_the_pressure → q10_state_unready_parts | `60/100/100/0` |
| `no_second_meeting` | 196,608 | q01_share_the_coordination → q02_hand_over_the_problem | `35/15/30/10` |
| `stay_acquaintances` | 211,824 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_erase_their_effort → q07_pause_before_details → q08_take_the_simpler_day | `40/80/80/5` |
| `strangers_after_all` | 21,810 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_build_a_new_ritual → q07_reveal_their_secret_back → q08_force_the_original_shape → q09_name_the_pressure → q10_demand_proof_and_access | `60/75/55/55` |
| `strong_discomfort` | 21,878 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_give_up_all_ownership → q05_name_your_minimum → q06_erase_their_effort → q07_reveal_their_secret_back → q08_force_the_original_shape | `35/30/5/60` |
| `trust_broken` | 81,920 | q01_make_them_the_boss → q02_hand_over_the_problem | `35/0/10/10` |
| `unresolved_ambiguity` | 152,981 | q01_share_the_coordination → q02_ask_for_listening → q03_accept_the_plan → q04_name_the_overreach → q05_name_your_minimum → q06_build_a_new_ritual → q07_pause_before_details → q08_take_the_simpler_day → q09_name_the_pressure → q10_define_current_agreement | `80/100/100/0` |

## 7. 固定位置、固定策略与局部支配

固定位置 1–4 分别得到 `unresolved_ambiguity`、`no_second_meeting`、`stay_acquaintances` 和 `trust_broken`。没有答案位置形成通用成功或确认恋爱的捷径；不同位置在不同检查点终止，也说明选项顺序没有把同一价值方向固定在单一槽位。

固定策略结果：

- `honest` 在 Q5 得到 `fade_out`，终态为 `25/75/90/5`。这不是诚实受罚，而是跨题固定选择诚实限制没有累积足够浪漫吸引。
- `negotiate` 到达 `confirmed_relationship:romance_stable`，终态为 `85/100/100/0`；它是有效完整策略，但不再在每一题原始效果上支配 `risky`。
- `risky` 在 Q2 得到 `trust_broken`。
- `accommodate` 缺少 Q4 对应选项，`confront` 缺少 Q1 对应选项，两者明确标为不适用。
- 分析器没有报告跨十题的全局原始效果策略支配。

局部原始效果报告 36 对支配关系。这些是单题四维向量警告，不证明全局结局支配；保留处置如下：

| 题号 | 局部支配对数 | 叙事处置 |
|---|---:|---|
| Q01 | 2 | 共同修改、独立角色、接受草案与替他人定角色是不同的参与自主选择。 |
| Q02 | 4 | 倾听、分时支持、一个实际步骤与转移全部决定责任不能互换。 |
| Q03 | 3 | 接受计划、标注弹性、松节奏和不承担预订成本保留不同承诺含义。 |
| Q04 | 4 | 直接指出、权限协议、拿回任务和放弃全部责任对应不同授权修复。 |
| Q05 | 6 | 最低需要、真实接受、复盘点与牺牲证明分别测试容量和承诺。 |
| Q06 | 6 | 新仪式、说明孤独、一次轻量尝试与抹去实际付出保留表达错位差异。 |
| Q07 | 3 | 暂停、具体补救、隐私规则和公开报复具有不可替代的修复语义。 |
| Q08 | 4 | 轻量替代、保留核心、真实取消和强迫复刻测试不同承诺边界。 |
| Q09 | 1 | 先离开公开起哄再私下谈，与共同核对真实证据的完成度不同但都可成立。 |
| Q10 | 3 | 当前协议、诚实保留、勉强答应和监控证明分别承担确认、朋友、隐藏风险与退出语义。 |

## 8. 效果预算、同步与验收

- 所有效果值均属于固定允许集合；40 个选项的绝对变化总和均不超过 40，没有非法值、硬上限错误、普通预算警告或过多高强度维度警告。
- 每个选项的反馈键均与最终效果方向及 `5/10/15–20` 强度一致；40 行 Markdown 效果表与生产 TypeScript 完全同步。
- 基础 `endingId` 与可选 `evaluationId` 分开保存；12 个可达完整 outcome 均保留至少一条示例路径。
- JSON 由 `scripts/refresh-estj-balance-report.mjs` 调用同一生产等价分析器生成，不手工编辑计算字段。
- `node scripts/validate-estj-stage06.mjs` 已通过，覆盖效果表、反馈引用、报告指标、示例路径、来源指纹、新鲜枚举与 Stage 03/04 追溯一致性。
- `node scripts/analyze-question-paths.mjs all --json` 已完成十个生产内容包的全量路径回归。
- 15 个测试文件中的 80 项测试全部通过；`npm run build` 成功，仅保留压缩后 JavaScript 分块超过 500 kB 的非阻塞提示。
- 后续若修改 ESTJ 效果、选项顺序或共享规则，必须重新生成本报告；共享规则变化还必须重跑全部十个生产内容包。
