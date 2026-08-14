# INTP 十题生产路径平衡报告

> 生成日期：2026-08-14。数据源为当前 `src/content/intp-questions.ts`、`src/game/rules.ts` 与 [项目分析器](../../scripts/analyze-question-paths.mjs) 的完整枚举；机器快照见 [intp-balance-report.json](intp-balance-report.json)。

## 口径与完整性

- 完整选择空间和加权总数均为 `1,048,576`；终止轨迹为 `605,332`，其中提前截断 `11,540`。
- `weightedPathPercentages` 是每题等概率选择时的概率模型，下文的比例、目标比较均采用该口径。
- `trajectoryPercentages` 是终止路线数量的比例，仅用来观察早退路线和多样性，**不能称为玩家概率**。
- 11 个稳定基础结局和 12 个完整 outcome（恋爱两种评价独立统计）全部可达；无缺失或意外 ID。

## 完整结果分布

| 完整结果 | 加权路径 | 加权比例 | 路线比例 |
|---|---:|---:|---:|
| `no_second_meeting` | 65,536 | 6.250% | 0.000% |
| `fade_out` | 145,408 | 13.867% | 0.023% |
| `stay_acquaintances` | 137,680 | 13.130% | 1.422% |
| `conflict_break` | 25,373 | 2.420% | 1.441% |
| `strong_discomfort` | 31,517 | 3.006% | 1.090% |
| `trust_broken` | 62,437 | 5.954% | 0.105% |
| `strangers_after_all` | 41,845 | 3.991% | 6.913% |
| `confirmed_relationship:romance_stable` | 95,498 | 9.107% | 15.776% |
| `confirmed_relationship:romance_hidden_risk` | 56,408 | 5.379% | 9.319% |
| `dangerous_lovers` | 40,525 | 3.865% | 6.695% |
| `friends` | 143,478 | 13.683% | 23.702% |
| `unresolved_ambiguity` | 202,871 | 19.347% | 33.514% |

## 全局危险与阶段门槛

全局危险合计为 `119,327 / 1,048,576 = 11.380%`：低于 12%–18% 推荐区间，未超过 20% 硬上限，三个结局都可达。

| 全局结局 | 加权路径 | 等概率比例 | 状态 |
|---|---:|---:|---|
| `conflict_break` | 25,373 | 2.420% | 低于 3% 推荐值 |
| `strong_discomfort` | 31,517 | 3.006% | 推荐区间内 |
| `trust_broken` | 62,437 | 5.954% | 推荐区间内 |

阶段分母只包括到达该门槛、且没有先被同一检查点更高优先级全局规则截断的有效加权路径。

| 门槛 | 有效加权路径 | 失败加权路径 | 条件失败率 | 状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 1,048,576 | 65,536 | 6.250% | 推荐区间内 |
| Q5 `fade_out` | 912,384 | 145,408 | 15.937% | 推荐区间内 |
| Q8 `stay_acquaintances` | 737,776 | 137,680 | 18.661% | 推荐区间内 |

## Q10 最终分类器

到达 Q10 真正最终分类器为 `580,625 / 1,048,576 = 55.373%`，略高于 55% 推荐上限。以下是到达者内部条件比例，六个结果均可达。

| Q10 完整结果 | 条件比例 | 状态 |
|---|---:|---|
| `strangers_after_all` | 7.207% | 低于 10% 推荐值，满足 5% 最低值 |
| `confirmed_relationship:romance_stable` | 16.447% | 推荐区间内 |
| `confirmed_relationship:romance_hidden_risk` | 9.715% | 低于 10% 推荐值，满足 5% 最低值 |
| `dangerous_lovers` | 6.980% | 低于 10% 推荐值，满足 5% 最低值 |
| `friends` | 24.711% | 推荐区间内 |
| `unresolved_ambiguity` | 34.940% | 高于推荐值，未超过 40% 警告线 |

## 可达示例

状态顺序为“吸引 / 信任 / 舒适 / 冲突”。

| 结果 | 示例路径 | 状态 |
|---|---|---|
| `no_second_meeting` | `q01_call_it_interview → q02_call_it_confession` | `30 / 15 / 10 / 30` |
| `fade_out` | `q01_edit_together → q02_ask_intent → q03_truth_always → q04_wave_off → q05_hold_evening` | `65 / 20 / 35 / 15` |
| `stay_acquaintances` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_book_for_them → q06_attack_empathy → q07_expose_in_return → q08_accept_pause` | `55 / 20 / 40 / 55` |
| `conflict_break` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_force_now → q09_announce_unilaterally → q10_demand_all_weekends` | `50 / 25 / 15 / 80` |
| `strong_discomfort` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_attack_empathy → q07_laugh_off → q08_force_now → q09_announce_unilaterally → q10_demand_all_weekends` | `30 / 20 / 5 / 70` |
| `trust_broken` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_attack_empathy → q07_expose_in_return → q08_force_now → q09_let_ta_define → q10_demand_all_weekends` | `35 / 5 / 20 / 70` |
| `strangers_after_all` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_force_now → q09_let_ta_define → q10_demand_all_weekends` | `55 / 20 / 25 / 50` |
| `confirmed_relationship:romance_stable` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_pause_with_anchor → q09_need_answer → q10_accept_independence` | `85 / 70 / 80 / 10` |
| `confirmed_relationship:romance_hidden_risk` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_pause_with_anchor → q09_let_ta_define → q10_state_minimum` | `70 / 60 / 65 / 0` |
| `dangerous_lovers` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_pause_with_anchor → q09_let_ta_define → q10_accept_independence` | `95 / 40 / 70 / 0` |
| `friends` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_force_now → q09_need_answer → q10_state_minimum` | `45 / 75 / 55 / 40` |
| `unresolved_ambiguity` | `q01_edit_together → q02_ask_intent → q03_set_context → q04_wave_off → q05_narrow_and_deadline → q06_take_solution → q07_expose_in_return → q08_pause_with_anchor → q09_need_answer → q10_state_minimum` | `60 / 90 / 75 / 10` |

## 固定位置、策略与支配检查

| 固定选择 | 结果 |
|---|---|
| 始终位置 1 | `unresolved_ambiguity` |
| 始终位置 2 | `dangerous_lovers` |
| 始终位置 3 | `unresolved_ambiguity` |
| 始终位置 4 | Q5 `fade_out` |
| 全程 `accommodate` | Q5 `fade_out` |
| 全程 `honest` | `friends` |
| `confront` / `negotiate` / `risky` | 分别在 Q2 / Q1 / Q3 缺失，不能构成固定全程策略 |

不存在跨全部题目的 raw-effect 全局策略支配。局部支配均为待审查警告：Q01 三个选项对 `call_it_interview`；Q03 三个选项对 `accuse_winning`；Q04 三个选项对 `disappear_back`；Q05 `narrow_and_deadline` 对 `book_for_them,hold_evening`；Q06 三个选项对 `attack_empathy`；Q07 `stop_in_room,private_repair` 对 `expose_in_return`；Q08 `pause_with_anchor` 对 `accept_pause,force_now`、`accept_pause`/`adjust_time` 对 `force_now`；Q09 `define_terms>announce_unilaterally`；Q10 三个选项对 `demand_all_weekends`。局部数值支配不自动否定叙事差异，但需要在后续 effect 调整时逐项说明保留理由。

## 规则遮蔽、预算与结论

规则遮蔽为 **unknown**：生产规则尚未提供稳定 rule ID 或“所有适用规则”的诊断接口，不能把不可达性或比例问题归因为遮蔽。当前没有不可达结局。effect-budget 分析提示 `q03_accuse_winning`、`q04_disappear_back`、`q06_attack_empathy`、`q07_expose_in_return`、`q08_force_now` 各为总强度 45，`q10_demand_all_weekends` 为 55，`q10_build_rhythm` 为 45；均未超过 60 硬上限。

当前未达项明确保留：全局危险合计略低，`conflict_break` 低于推荐，Q10 到达率略高，且多项 Q10 结果低于推荐、`unresolved_ambiguity` 偏高。应继续遵循 effect-first 调整顺序，而非直接放宽共享门槛或为对齐百分比破坏选项行为含义。
