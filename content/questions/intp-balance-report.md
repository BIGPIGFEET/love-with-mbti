# INTP 十题全路径平衡报告 v0.1

> 完成日期：2026-08-12  
> 分析器：[技能通用枚举器](../../.codex/skills/balance-choice-game-paths/scripts/enumerate-choice-paths.mjs)  
> 项目适配器：[INTP 路径适配器](../../scripts/intp-choice-paths-adapter.mjs)  
> 机器报告：[最终枚举 JSON](intp-balance-report.json)  
> 题目版本：[INTP 正式十题内容草案](intp-ten-question-draft.md)  
> 规则与题目来源：适配器直接导入 `src/game/rules.ts` 和 `src/content/intp-questions.ts`，不手抄机械数值。

## 1. 枚举完整性

- 题目与选项数：`4 × 4 × 4 × 4 × 4 × 4 × 4 × 4 × 4 × 4`；
- 完整选择空间：`1,048,576`；
- 加权结局总数：`1,048,576`，与完整选择空间完全相等；
- 实际提前结束轨迹：`24,460`；提前结束按所有未作答后缀选择数加权；
- 13 个运行时结果 key（含两种恋爱评价）全部非零，当前均为 `verified`；
- 每个可达结果都保留了选项 ID 路径与结算状态示例。

## 2. 基线诊断与最小调整

初稿基线的 13 个结果均可达，但两类确认恋爱合计仅 `614 / 1,048,576`（约 `0.059%`），示例过度依赖绝对迎合、单方宣布或放空玩家时间等高吸引/高风险行为。该稀有度和路径偏向没有上游叙事依据，因此未调整规则门槛，而是修正少量选项的关系含义。

| 选项 | 调整 | 叙事与平衡理由 |
|---|---|---|
| `q02_ask_intent` | attraction `0 → +5` | 确认双方还想再见，应有轻微靠近动力 |
| `q02_call_it_confession` | attraction `+10 → +15` | 给冒险玩笑独特的高火花交换价值 |
| `q07_laugh_off` | conflict `0 → -10` | 全部忍下缓解即时冲突，但继续损害信任与舒适 |
| `q09_let_ta_define` | conflict `0 → -10` | 交出定义避免即时争执，但不奖励放弃共同定义 |
| `q09_define_terms` | attraction `0 → +10` | 双方确认伴侣称呼构成明确恋爱投入 |
| `q09_announce_unilaterally` | attraction `+10 → 0` | 越过共同同意不获得吸引奖励；保留信任、舒适和冲突代价 |
| `q10_build_rhythm` | attraction `0 → +10` | 双方保留固定约会时间，同时贡献维护能力和恋爱投入 |

调整后，两类确认恋爱合计为 `2,652` 条（约 `0.253%`）；稳定关系存在以 `q09_define_terms` 为核心的健康可达示例。所有原有结局保持可达，阶段阈值、最终阈值、规则顺序和 Q07 terminal 均未修改。

## 3. 最终加权结果

下列等概率比例只用于结构压力测试，不预测真实玩家分布。

| 运行时结果 key | 轨迹数 | 加权路径数 | 完整空间占比 |
|---|---:|---:|---:|
| `blocked_immediately` | 2,942 | 188,288 | 17.957% |
| `no_second_meeting` | 1 | 65,536 | 6.250% |
| `fade_out` | 144 | 147,456 | 14.063% |
| `stay_acquaintances` | 20,302 | 324,832 | 30.978% |
| `conflict_break` | 24 | 24 | 0.002% |
| `strong_discomfort` | 3,808 | 67,183 | 6.407% |
| `trust_broken` | 339 | 42,549 | 4.058% |
| `strangers_after_all` | 13,879 | 13,879 | 1.324% |
| `confirmed_relationship:romance_stable` | 1,393 | 1,393 | 0.133% |
| `confirmed_relationship:romance_hidden_risk` | 1,259 | 1,259 | 0.120% |
| `dangerous_lovers` | 195 | 195 | 0.019% |
| `friends` | 112,815 | 112,815 | 10.759% |
| `unresolved_ambiguity` | 83,167 | 83,167 | 7.931% |

六种 Q10 最终结果合计 `212,708` 条，占完整空间 `20.285%`。其中“止于熟人”占比最高，是因为 Q08 门槛新增吸引要求，而多条边界健康路线主要积累信任和舒适；这是当前模型的明确结果，仍需试玩观察是否过度压低后半段曝光。

## 4. 可达示例

状态顺序为 `吸引 / 信任 / 舒适 / 冲突`。中途结局只列实际作答前缀。

| 结果 | 示例路径 | 结算状态 |
|---|---|---|
| `blocked_immediately` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return` | `35 / 40 / 40 / 20` |
| `no_second_meeting` | `q01_call_it_interview → q02_call_it_confession` | `30 / 15 / 10 / 25` |
| `fade_out` | `q01_edit_together → q02_ask_intent → q03_truth_always → q04_wave_off → q05_hold_evening` | `65 / 20 / 35 / 15` |
| `stay_acquaintances` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_attack_empathy → q07_stop_in_room → q08_pause_with_anchor` | `30 / 65 / 65 / 10` |
| `conflict_break` | `q01_edit_together → q02_ask_intent → q03_truth_always → q04_wave_off → q05_cancel_if_undecided → q06_attack_empathy → q07_stop_in_room → q08_force_now → q09_announce_unilaterally → q10_demand_all_weekends` | `45 / 15 / 0 / 85` |
| `strong_discomfort` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_book_for_them → q06_take_solution → q07_laugh_off → q08_force_now → q09_let_ta_define → q10_demand_all_weekends` | `45 / 5 / 0 / 25` |
| `trust_broken` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_book_for_them → q06_attack_empathy → q07_laugh_off → q08_pause_with_anchor → q09_let_ta_define → q10_demand_all_weekends` | `30 / 5 / 15 / 20` |
| `strangers_after_all` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_laugh_off → q08_force_now → q09_let_ta_define → q10_demand_all_weekends` | `35 / 20 / 15 / 25` |
| `confirmed_relationship:romance_stable` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_stop_in_room → q08_accept_pause → q09_define_terms → q10_accept_independence` | `85 / 90 / 90 / 0` |
| `confirmed_relationship:romance_hidden_risk` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_book_for_them → q06_take_solution → q07_stop_in_room → q08_accept_pause → q09_let_ta_define → q10_build_rhythm` | `85 / 65 / 65 / 0` |
| `dangerous_lovers` | `q01_edit_together → q02_ask_intent → q03_truth_always → q04_wave_off → q05_book_for_them → q06_take_solution → q07_stop_in_room → q08_pause_with_anchor → q09_let_ta_define → q10_accept_independence` | `95 / 45 / 50 / 5` |
| `friends` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_stop_in_room → q08_pause_with_anchor → q09_need_answer → q10_accept_independence` | `60 / 95 / 90 / 0` |
| `unresolved_ambiguity` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_stop_in_room → q08_pause_with_anchor → q09_let_ta_define → q10_accept_independence` | `70 / 70 / 80 / 0` |

## 5. 固定套路检查

| 固定策略 | 结果 |
|---|---|
| 始终选择位置 1 | Q07 `blocked_immediately` |
| 始终选择位置 2 | Q10 `strangers_after_all` |
| 始终选择位置 3 | Q08 `stay_acquaintances` |
| 始终选择位置 4 | Q05 `fade_out` |
| 每题选择 `accommodate` | Q05 `fade_out` |
| 每题选择 `honest` | Q08 `stay_acquaintances` |
| 每题选择 `confront` | 不适用：Q02 无该策略 |
| 每题选择 `negotiate` | 不适用：Q01 无该策略 |
| 每题选择 `risky` | 不适用：Q03 无该策略 |

没有固定位置或覆盖全题的策略能自动进入恋爱结局。固定位置 1 会命中唯一 terminal，但这是因为 Q07 的严重隐私泄露恰好位于第一个选项，并非普通槽位奖励。

## 6. 局部支配审查

枚举器最终报告的 raw-effect 支配关系全部指向明确危险行为：贬低表达者、人格动机指控、报复性失联、人格攻击、公开泄露隐私、持续消息轰炸，以及以关系身份取消对方独立时间。

这些警告被明确接受：危险选项保留黑色叙事、终止或压力测试功能，不通过虚构奖励来消除数学支配。调整前存在的 Q02 玩笑、Q07 表面忍让、Q09 非危险选项之间的局部支配已经消除。

## 7. 规则优先级与遮蔽

- Q07 terminal 在数值规则前停止；
- 全局顺序保持 `conflict >= 80 → comfort <= 5 → trust <= 5`；
- Q02、Q05、Q08 阶段门槛只在全局规则未命中时检查；
- Q10 先执行全局规则，再依次分类陌路、确认恋爱及评价、危险恋人、朋友和暧昧兜底；
- 通用分析器只输出最终生效结果，没有记录“忽略高优先级后本来会命中什么”，因此本报告不伪造精确遮蔽路径数。如需该统计，应扩展分析器的候选规则诊断接口。

## 8. 验收与复验条件

- [x] 确定性枚举覆盖完整 `4^10` 空间，早退后缀加权正确；
- [x] 13 种预期运行时结果全部可达并具有示例；
- [x] 判定优先级和 tie-break 直接复用生产规则；
- [x] 没有固定位置或普适策略自动进入恋爱；
- [x] 非危险选项间的局部全面支配已消除；
- [x] 所有已改效果均同步修订 rationale、模糊反馈 ID 和结局追踪矩阵；
- [x] 结果比例不以均匀分布为调参目标。

后续修改任何题目效果、terminal、选项顺序、阶段/最终阈值或判定优先级后，必须重新运行本适配器并更新本报告。正式迁移一致性现由 `src/content/intp-migration.test.ts` 自动复验。
