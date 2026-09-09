# ENFJ 选择路径平衡报告（Stage 06）

## 1. 范围与方法

- 分析日期：2026-09-08（按 Stage-03 v2、Stage-04 当前题目与 Stage-05 当前结局重新验证）
- 题目权威源：`src/content/enfj-questions.ts`
- 固定生产规则：`src/game/rules.ts` 的 `INITIAL_STATE`、`applyEffects` 与 `resolveEnding`
- 生产等价适配器：`.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-enfj-adapter.mjs`
- 分析器：`.codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs`
- 基线：`content/questions/enfj-balance-baseline.json`
- 最终机器报告：`content/questions/enfj-balance-report.json`

十题均有四个选项，分析器完整枚举 `4^10 = 1,048,576` 条等价完整路径。最终报告包含 301,741 条截断终端轨迹，其中 12,461 条在 Q10 前结束；提前结束路径按尚未作答题目的选项乘积补足后，`weightedTotal` 仍为 1,048,576。

2026-09-08 的新鲜适配器输出与保存的 `enfj-balance-report.json` 结构级逐项一致。Stage-04 本轮只调整 Q03 玩家可见澄清文案并补充研究引用，没有改变选项、顺序、效果或反馈键，因此无需重写机器报告中的计算结果。

本报告把两种分布严格分开：`weightedPathPercentages` 是所有可选答案等概率时的完整路径概率模型；`trajectoryPercentages` 只表示截断终端叶的路线份额和多样性，不等同于玩家概率。两组百分比在 JSON 中各自合计 100%。

## 2. 基线与最终结果

| 指标 | Stage 04 基线 | Stage 06 最终 | 结论 |
|---|---:|---:|---|
| 全局危险合计 | 15.040% | 8.676% | 低于 11%–17% 参考区间，低于 20% 硬上限 |
| `strong_discomfort` | 13.232% | 2.383% | 消除超过 10% 硬上限的问题 |
| Q2 `no_second_meeting` 条件失败率 | 0.000% | 20.000% | 从不可达恢复到 20%–25% 区间 |
| Q5 `fade_out` 条件失败率 | 13.111% | 36.582% | 进入 30%–38% 区间 |
| Q8 `stay_acquaintances` 条件失败率 | 16.024% | 39.842% | 进入 35%–45% 区间 |
| Q10 分类器到达率 | 61.641% | 27.545% | 进入 20%–30% 区间 |
| 缺失完整 outcome | `no_second_meeting` | 无 | 12 个完整 outcome 全部可达 |
| 效果预算警告 | 7 | 0 | 40 个选项全部不超过普通建议值 40 |

调整没有修改共享初始状态、clamp、阈值、规则顺序、稳定 ID 或分类器。主要变化是让早期“责任转移”以信任为主轴，让不应自动推进浪漫的回应减少吸引力增量，并把多轴重罚收敛到行为最直接的伤害轴；Q9–Q10 再按真实协议、隐藏限制与牺牲测试分流最终结果。反馈键随效果的方向和强度同步更新。

## 3. 覆盖与全局危险

- 11 个声明的基础结局全部可达，没有缺失或意外 ID。
- 12 个声明的完整 outcome 全部可达，包括 `confirmed_relationship` 下两个独立关系评价。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 明确保持 `unknown`，不能从缺失计数反推规则遮蔽。

| 全局结局 | 完整路径加权占比 | 参考状态 |
|---|---:|---|
| `conflict_break` | 0.043% | 低于 3%–5% |
| `strong_discomfort` | 2.383% | 低于 4%–6% |
| `trust_broken` | 6.250% | 高于 4%–6%，但低于 10% 硬上限 |
| 合计 | 8.676% | 低于 11%–17%，低于 20% 硬上限 |

这些参考区间是等概率选项模型下的漏斗诊断，不是必须制造伤害的配额。继续提高冲突与不适结局需要给普通的边界表达或修复行为追加不符合题意的严重惩罚，因此保留偏低结果；`trust_broken` 的 6.250% 则来自 Q1 公开加意后继续把课程决定与责任整体交给 TA 的一条四选一前缀组合，保留其清楚的行为因果，而不为了降低 0.250 个百分点削弱 Q2 的阶段门作用。

## 4. 阶段门

阶段门分母只包含在该检查点未被更高优先级全局结局截断的加权路径。

| 检查点 | 合格加权路径 | 失败加权路径 | 条件失败率 | 参考状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 983,040 | 196,608 | 20.000% | 在 20%–25% 内 |
| Q5 `fade_out` | 766,976 | 280,576 | 36.582% | 在 30%–38% 内 |
| Q8 `stay_acquaintances` | 480,864 | 191,584 | 39.842% | 在 35%–45% 内 |

Q2 失败由把决定和错误责任整体交给 TA 驱动；Q5 主要区分是否积累了足够的现实靠近，而不是把边界表达判作失败；Q8 则要求吸引、信任、舒适与冲突修复共同达到熟悉阶段门槛。三个阶段门均无异常高值。

## 5. Q10 最终分类器

有 288,829 条加权路径到达 Q10 分类器，占完整等概率空间的 27.545%。在这些路径内部：

| 完整结果组 | Q10 条件占比 | 参考状态 |
|---|---:|---|
| `strangers_after_all` | 5.481% | 低于 15%–20% |
| `confirmed_relationship` 合计 | 15.154% | 高于上限 0.154 个百分点；完整空间占比 4.174% |
| `dangerous_lovers` | 2.411% | 低于 5%–10% |
| `friends` | 24.330% | 在 18%–25% 内 |
| `unresolved_ambiguity` | 52.624% | 高于 35%–45% |

两个关系评价分别为：

| 完整 outcome | Q10 条件占比 | 加权路径数 |
|---|---:|---:|
| `confirmed_relationship:romance_stable` | 11.286% | 32,596 |
| `confirmed_relationship:romance_hidden_risk` | 3.868% | 11,172 |

最终分布的残余偏差被明确保留。到达 Q10 的路径中，信任和舒适中位数较高，单个末题选项在 40 点效果预算内不能合理地把大量安全路径直接改写为陌生结局；把命定角色、隐藏限制或牺牲测试进一步奖励为高吸引，也会扭曲题目含义。`confirmed_relationship` 只高出参考上限 0.154 个百分点，朋友在区间内，而未定关系承担了没有共同满足其他分类条件的剩余路径。后续如有真实选择遥测，应以观察到的选项权重重算，不应把当前等概率模型当作人群预测。

## 6. 每个完整 outcome 的示例路径

以下每条路径和终态均由最终 JSON 自动保存；状态顺序为 `吸引/信任/舒适/冲突`。

| 完整 outcome | 加权路径数 | 示例选项路径 | 示例终态 |
|---|---:|---|---|
| `confirmed_relationship:romance_hidden_risk` | 11,172 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_accept_both_today → q08_force_the_night → q09_brush_off_the_chat → q10_define_current_agreement | `90/65/65/20` |
| `confirmed_relationship:romance_stable` | 32,596 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_accept_both_today → q08_force_the_night → q09_compare_real_evidence → q10_define_current_agreement | `85/85/70/10` |
| `conflict_break` | 451 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_diagnose_manipulation → q06_admit_low_capacity → q07_accept_book_decline_hug → q08_force_the_night → q09_accept_the_destiny_role → q10_demand_proof_by_sacrifice | `55/40/10/80` |
| `dangerous_lovers` | 6,964 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_accept_both_today → q08_force_the_night → q09_brush_off_the_chat → q10_join_every_plan | `90/50/45/25` |
| `fade_out` | 280,576 | q01_choose_small_entry → q02_ask_to_be_heard → q03_define_current_scope → q04_make_them_fix_it → q05_name_the_specific_pressure | `30/60/50/5` |
| `friends` | 70,273 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_accept_both_today → q08_force_the_night → q09_reject_the_pairing_script → q10_decline_unready_plan | `60/90/75/10` |
| `no_second_meeting` | 196,608 | q01_choose_small_entry → q02_hand_over_the_decision | `35/15/30/10` |
| `stay_acquaintances` | 191,584 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_grab_without_answer → q08_force_the_night | `35/45/30/20` |
| `strangers_after_all` | 15,831 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_accept_both_today → q08_force_the_night → q09_accept_the_destiny_role → q10_demand_proof_by_sacrifice | `65/50/30/55` |
| `strong_discomfort` | 24,992 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_claim_the_listener_role → q07_grab_without_answer → q08_force_the_night | `35/25/0/40` |
| `trust_broken` | 65,536 | q01_turn_it_into_flirting → q02_hand_over_the_decision | `30/0/10/10` |
| `unresolved_ambiguity` | 151,993 | q01_choose_small_entry → q02_ask_to_be_heard → q03_match_the_momentum → q04_make_them_fix_it → q05_name_the_specific_pressure → q06_rebuild_support_rhythm → q07_accept_both_today → q08_force_the_night → q09_reject_the_pairing_script → q10_define_current_agreement | `80/85/70/10` |

## 7. 固定位置、固定策略与局部支配

固定位置 1–4 分别得到 `unresolved_ambiguity`、`no_second_meeting`、`stay_acquaintances` 和 `fade_out`。没有答案位置形成通用成功或确认恋爱的捷径；四个位置在不同检查点结束也说明选项顺序没有把同一价值方向固定在一个槽位。

固定策略结果：

- `honest` 在 Q5 得到 `fade_out`，因为这组诚实选项始终没有积累足够吸引力；这不是诚实被惩罚，而是固定标签跨场景组合不等同于完整关系策略。
- `negotiate` 到达 `unresolved_ambiguity`，终态为 `75/100/100/0`；协议质量很高，但共享恋爱分类仍要求更高吸引力。
- `risky` 在 Q2 得到 `trust_broken`。
- `accommodate` 缺少 Q5 对应选项，`confront` 缺少 Q1 对应选项，因此两者明确标记为不适用。
- 分析器没有报告跨十题的全局原始效果策略支配。

局部原始效果共报告 37 对，只是逐题向量警告，不证明全局结局支配。保留理由如下：

| 题号 | 局部支配对数 | 叙事处置 |
|---|---:|---|
| Q01 | 3 | 小范围参与、顺势加入、旁听和当众加意是不同的参与自主行为；较弱选项保留其公开投射风险。 |
| Q02 | 2 | 被倾听、限定建议与转移决定责任不是同一种需求表达。 |
| Q03 | 3 | 接住热度、定义当前范围、放慢节奏和抢先官宣分别测试好感、协议与公开同意。 |
| Q04 | 5 | 倾听、拆分支持、独处和要求接管保留不同容量边界。 |
| Q05 | 6 | 具体指出越线、保留决定、建立建议开关和人格诊断具有不同修复含义。 |
| Q06 | 5 | 暂停重话题、重订互惠、承认低容量与固定倾听角色不是可互换动作。 |
| Q07 | 3 | 接受礼物、拒绝拥抱、逐项许可与跳过确认保留同意语义差异。 |
| Q08 | 4 | 接受暂停、补全返回细节、说明等待上限与强迫当晚解决对应不同修复风险。 |
| Q09 | 3 | 拒绝命定脚本、核对证据、延后讨论和接受固定照顾角色产生不同关系依据。 |
| Q10 | 3 | 当前协议、诚实保留、全部答应和牺牲测试分别导向确认、朋友、隐藏风险或退出条件。 |

## 8. 效果预算与复现

所有效果值均来自固定允许集合；40 个选项的绝对变化总和都不超过 40，没有非法值、硬上限错误、普通预算警告或过多高强度维度警告。每个选项的反馈键与最终效果方向及 `5/10/15–20` 强度一致。

最终验证结果：

- ENFJ 最终 JSON 可由适配器确定性重建，保存文件与新鲜输出逐字一致。
- ENFJ 定向内容、40 行 Markdown 效果表、80 个反馈引用、Stage 03/04 追溯和 12 个 outcome 示例路径均通过一致性校验。
- 12 个注册包通过 `validate-content` 与全类型路径分析；ENFJ 的项目级结果与独立适配器报告一致。
- `npm run check`、17 个测试文件中的 89 项测试和 `npm run build` 均通过。
- 构建仅保留压缩后 JavaScript 分块超过 500 kB 的非阻塞提示，与本次 ENFJ 内容平衡无关。

复现最终 JSON：

```powershell
node .codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs .codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-enfj-adapter.mjs --json
```

ENFJ 已注册进 `src/content/packs.ts`，`node scripts/analyze-question-paths.mjs all` 会把它纳入 12 个生产包的完整回归。后续若修改 ENFJ 题目效果、选项顺序或共享规则，必须重新生成本报告并执行全注册包路径分析、测试与生产构建。
