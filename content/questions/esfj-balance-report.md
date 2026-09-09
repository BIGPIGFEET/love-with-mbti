# ESFJ 全路径平衡报告（Stage 06）

> 状态：完成。机器可读结果见 [esfj-balance-report.json](esfj-balance-report.json)，调参前基线见 [esfj-balance-baseline.json](esfj-balance-baseline.json)。  
> 分析输入：src/content/esfj-questions.ts、src/game/rules.ts 与生产等价适配器 [love-with-mbti-esfj-adapter.mjs](../../.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-esfj-adapter.mjs)。  
> 源文件 SHA-256：题目 0B5F3C5A55D2D2B8D4BE79F8F6EEEDC0EB0808BF0362C3CEA5E9E804A34F73BA；规则 C4A744D810F463EE1695263590E5DC3E8037163B064E6B6522D1794B24573D03；适配器 EA0841B5BC2E058CFB635F318D9C71CD4281F26E8C016F944A05402FE856D378。

执行命令：

    node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs .codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-esfj-adapter.mjs --json

## 1. 枚举范围与概率口径

- 10 题均有 4 个选项，完整选择空间为 4^10 = 1,048,576；weightedTotal 也是 1,048,576，证明早退后缀权重完整覆盖了全部等价路径。
- 分析得到 335,116 条截断终端轨迹，其中 11,996 条在 Q10 之前结束。
- weighted-path 百分比把早退轨迹按尚未作答问题的选项乘积补权；只有在每题选项等概率时，它才对应玩家概率模型。
- terminal-trajectory 百分比只描述截断终端叶子的构成和路线多样性，不能解释为玩家概率。
- 适配器直接导入 INITIAL_STATE、applyEffects、resolveEnding 和 ESFJ 运行时题目，没有复制阈值或另写判定器。

## 2. 调参前后对比

| metric | baseline | final | final status |
|---|---:|---:|---|
| conflict_break / complete paths | 0.000% | 0.061% | reachable, below recommended |
| strong_discomfort / complete paths | 7.129% | 3.613% | below recommended |
| trust_broken / complete paths | 17.851% | 4.780% | within recommended |
| global danger combined | 24.980% | 8.454% | below recommended |
| Q2 no_second_meeting / eligible paths | 26.667% | 18.750% | below recommended |
| Q5 fade_out / eligible paths | 46.243% | 34.040% | within recommended |
| Q8 stay_acquaintances / eligible paths | 50.789% | 35.570% | within recommended |
| Q10 classifier reach / complete paths | 13.033% | 30.686% | 0.686 percentage points above recommended |
| strangers_after_all / Q10 paths | 10.116% | 10.948% | below recommended |
| confirmed_relationship / Q10 paths | 1.087% | 10.237% | within recommended |
| dangerous_lovers / Q10 paths | 0.410% | 3.965% | below recommended |
| friends / Q10 paths | 31.854% | 21.635% | within recommended |
| unresolved_ambiguity / Q10 paths | 56.534% | 53.215% | above recommended |

基线让 Q03 的一次坏安排直接把信任压到终止线，导致信任破裂过多、Q5/Q8 漏斗过严，且 conflict_break 完全不可达。最终数值完成以下修正：

- Q01/Q02 降低普通边界尴尬的舒适惩罚，并让尊重社交节奏的回应获得与叙事相符的吸引增量。
- Q03/Q05 把失约的信任损失从直接终止改为可修复损害；明确替代时段和联系规则提供强信任修复。
- Q04 提高双向兴趣分享的吸引效果，并让贬低兴趣以舒适损害为主，减少无意的多轴重罚。
- Q06–Q08 将升级性行为分别落在冲突或信任主轴，保留 conflict_break 路径；健康的正面设界只获得小幅信任，避免中段正向叠加过快。
- Q09/Q10 提高双方协商公开口径和关系协议时的吸引效果，让全协商路线能够进入稳定恋爱；迎合与关系债务路线仍保留信任或冲突代价。

所有调整均保留原选项行为、ID、顺序、策略、即时回应和 Stage 03 状态范围。最终没有非法效果值、超过 40 的普通预算或三轴高幅度变化。

## 3. 全局危险结果

| ending | weighted paths | complete-space share | target | status |
|---|---:|---:|---:|---|
| conflict_break | 640 | 0.061% | 3%–5% | reachable, below recommended |
| strong_discomfort | 37,888 | 3.613% | 4%–6% | below recommended |
| trust_broken | 50,120 | 4.780% | 4%–6% | within recommended |
| combined | 88,648 | 8.454% | 11%–17% | below recommended |

三个危险结果均可达。conflict_break 很少，是因为 Q8 门槛会先截断大多数中等冲突路线，只有连续测试、指责和转嫁责任才能在 Q8 前达到全局冲突线。把普通拒绝或一次直接设界提高到严重冲突会破坏行为含义，因此保留此低占比。

strong_discomfort 距建议下限 0.387 个百分点。它已经从基线的 7.129% 降至 3.613%，避免初识中一次不够周到的回应直接结束相处。combined 低于建议值也由同一选择造成：普通不匹配主要进入阶段门槛，严重退出只留给持续越界。

## 4. 阶段门槛

| checkpoint | ending | eligible weighted paths | failure weighted paths | conditional failure | target | status |
|---|---|---:|---:|---:|---:|---|
| Q02 | no_second_meeting | 1,048,576 | 196,608 | 18.750% | 20%–25% | below recommended |
| Q05 | fade_out | 773,120 | 263,168 | 34.040% | 30%–38% | within recommended |
| Q08 | stay_acquaintances | 501,504 | 178,384 | 35.570% | 35%–45% | within recommended |

Q2 的分母只有 16 个等权前缀；当前 3 个失败前缀对应 18.750%，再增加 1 个就会跳到 25%。保留 18.750%，因为第四个候选前缀包含明确边界或有限参与，不应只为命中比例而判成初识失败。Q5 与 Q8 已进入目标区间。

## 5. Q10 最终分类

321,768 条完整路径抵达 Q10 分类，占完整空间 30.686%，比建议上限高 0.686 个百分点。Q5/Q8 已稳定在目标区间，继续压低到达率会要求削弱有明确边界的中段路线，因此保留并记录偏差。

| outcome group | Q10 paths | conditional share | target | status |
|---|---:|---:|---:|---|
| strangers_after_all | 35,228 | 10.948% | 15%–20% | below recommended |
| confirmed_relationship | 32,938 | 10.237% | 10%–15% | within recommended |
| dangerous_lovers | 12,757 | 3.965% | 5%–10% | below recommended |
| friends | 69,616 | 21.635% | 18%–25% | within recommended |
| unresolved_ambiguity | 171,229 | 53.215% | 35%–45% | above recommended |

confirmed_relationship 在完整等概率空间中占 3.141%，符合约 2%–4% 的参考范围；其中 romance_stable 占 Q10 路径 6.479%，romance_hidden_risk 占 3.757%，两者均可达。

未定关系偏高、陌生与危险恋爱偏低。现有最终分类器把大量 attraction 介于朋友与恋爱阈值之间、同时又保持基本信任和舒适的状态归入 unresolved_ambiguity。继续把这些中间路线强推向断联或危险恋爱，需要夸大 Q09/Q10 普通选择的伤害或吸引，本轮保留行为含义并如实记录偏差。

## 6. 完整分布

| complete outcome | weighted-path share | terminal-trajectory share |
|---|---:|---:|
| conflict_break | 0.061% | 0.012% |
| strong_discomfort | 3.613% | 0.006% |
| trust_broken | 4.780% | 0.561% |
| no_second_meeting | 18.750% | 0.001% |
| fade_out | 25.098% | 0.077% |
| stay_acquaintances | 17.012% | 3.327% |
| strangers_after_all | 3.360% | 10.512% |
| confirmed_relationship:romance_stable | 1.988% | 6.221% |
| confirmed_relationship:romance_hidden_risk | 1.153% | 3.608% |
| dangerous_lovers | 1.217% | 3.807% |
| friends | 6.639% | 20.774% |
| unresolved_ambiguity | 16.330% | 51.095% |

weighted-path share 才能在等概率假设下相加为完整玩家概率；terminal-trajectory share 只表示 335,116 条截断叶子的组成。

## 7. 每个完整 outcome 的示例路径

| outcome | example path | terminal state |
|---|---|---|
| conflict_break | q01_negotiate → q02_honest → q03_negotiate → q04_accommodate → q05_risky → q06_risky → q07_risky → q08_risky | attraction 55 / trust 0 / comfort 35 / conflict 85 |
| strong_discomfort | q01_negotiate → q02_honest → q03_risky → q04_risky → q05_risky | attraction 30 / trust 0 / comfort 5 / conflict 25 |
| trust_broken | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_risky | attraction 55 / trust 0 / comfort 30 / conflict 25 |
| no_second_meeting | q01_negotiate → q02_risky | attraction 20 / trust 25 / comfort 25 / conflict 10 |
| fade_out | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_accommodate | attraction 55 / trust 20 / comfort 50 / conflict 5 |
| stay_acquaintances | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_risky | attraction 55 / trust 35 / comfort 60 / conflict 25 |
| strangers_after_all | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_accommodate → q09_risky → q10_accommodate | attraction 80 / trust 15 / comfort 50 / conflict 5 |
| confirmed_relationship:romance_stable | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_accommodate → q09_negotiate → q10_negotiate | attraction 90 / trust 80 / comfort 85 / conflict 5 |
| confirmed_relationship:romance_hidden_risk | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_negotiate → q09_negotiate → q10_accommodate | attraction 90 / trust 65 / comfort 80 / conflict 0 |
| dangerous_lovers | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_accommodate → q09_negotiate → q10_accommodate | attraction 90 / trust 50 / comfort 75 / conflict 5 |
| friends | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_accommodate → q09_honest → q10_honest | attraction 55 / trust 80 / comfort 90 / conflict 0 |
| unresolved_ambiguity | q01_negotiate → q02_honest → q03_risky → q04_accommodate → q05_honest → q06_confront → q07_honest → q08_accommodate → q09_honest → q10_negotiate | attraction 75 / trust 80 / comfort 85 / conflict 5 |

覆盖检查没有缺失或额外的基础 ending ID，也没有缺失或额外的完整 outcome ID。

## 8. 固定位置、固定策略与支配检查

| fixed answer position | result | stopped after |
|---:|---|---:|
| 1 | trust_broken | Q05 |
| 2 | stay_acquaintances | Q08 |
| 3 | no_second_meeting | Q02 |
| 4 | stay_acquaintances | Q08 |

四个固定显示位置得到不同路径，没有任何位置形成自动通关。固定策略检查中 accommodate 缺少 Q07、confront 缺少 Q01、honest 缺少 Q06，因此不适用全程策略结论；全 negotiate 得到 confirmed_relationship:romance_stable，全 risky 在 Q02 得到 no_second_meeting。

原始效果比较报告 52 组局部支配：Q01 4、Q02 6、Q03 6、Q04 5、Q05 6、Q06 6、Q07 6、Q08 6、Q09 4、Q10 3。大部分是建设性路线对明确越界路线的支配，或完整协商对局部回应的数值支配。被支配选项仍表达拒绝、有限帮助、直接设界、迎合或测试等不同玩家行为，因此保留叙事区别。

跨题原始效果只报告 negotiate 支配 risky。两种策略恰好出现在全部十题，而 risky 被有意定义为测试、贬低、失信或越界行为；该警告符合内容意图，不表示所有场景只能选择 negotiate。其他建设性策略没有完整十题覆盖，不能作全局比较。

## 9. 规则与发布结论

- 11 个基础结局和 12 个完整 outcome 全部可达；两个恋爱评价分别保留示例路径。
- effectBudgetWarnings 为空，全部数值合法且总幅度不超过 40。
- 适配器遵循生产优先级：每次选择后先检查全局危险，再检查 Q2/Q5/Q8 门槛，最后由 Q10 分类器返回完整结果。
- src/game/rules.ts 没有稳定 rule ID，也没有 evaluateApplicableRuleIds 诊断钩子；规则覆盖未声明，shadowing 保持 unknown，不能从缺失计数推断遮蔽。
- 本报告记录全部未命中建议区间，没有修改共享阈值、判定顺序、初始状态或结局词汇来强行对齐比例。
