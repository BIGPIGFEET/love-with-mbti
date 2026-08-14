# ENTP 十题生产路径平衡报告

> 生成日期：2026-08-14。数据源为当前 `src/content/questions.ts`、`src/game/rules.ts` 与 [项目分析器](../../scripts/analyze-question-paths.mjs) 的完整枚举；不使用手抄阈值或抽样。

## 口径与完整性

- 完整选择空间：`4^10 = 1,048,576`；加权总数：`1,048,576`，一致。
- 终止轨迹：`584,884`，其中提前截断 `14,852`。
- `weightedPathPercentages` 是每次可选答案等概率时的玩家概率模型；下表的“加权比例”均用它计算。
- `trajectoryPercentages` 仅是截断终止路线的数量占比，用于观察路线多样性，**不是玩家概率**。
- 11 个稳定基础结局、12 个完整 outcome（将两种 relationship evaluation 分开）均可达；无 unexpected/missing ID。

## 完整结果分布

| 完整结果 | 加权路径 | 加权比例 | 路线比例 |
|---|---:|---:|---:|
| `no_second_meeting` | 65,536 | 6.250% | 0.000% |
| `fade_out` | 178,176 | 16.992% | 0.030% |
| `stay_acquaintances` | 147,072 | 14.026% | 1.572% |
| `conflict_break` | 32,778 | 3.126% | 3.393% |
| `strong_discomfort` | 41,992 | 4.005% | 2.323% |
| `trust_broken` | 45,853 | 4.373% | 0.840% |
| `strangers_after_all` | 90,850 | 8.664% | 15.533% |
| `confirmed_relationship:romance_stable` | 47,768 | 4.556% | 8.167% |
| `confirmed_relationship:romance_hidden_risk` | 68,735 | 6.555% | 11.752% |
| `dangerous_lovers` | 107,755 | 10.276% | 18.423% |
| `friends` | 49,970 | 4.766% | 8.544% |
| `unresolved_ambiguity` | 172,091 | 16.412% | 29.423% |

## 全局危险与阶段门槛

全局危险合计为 `120,623 / 1,048,576 = 11.504%`：低于 12%–18% 推荐区间，但低于 20% 硬上限，三个结局均可达。

| 全局结局 | 加权路径 | 等概率比例 | 状态 |
|---|---:|---:|---|
| `conflict_break` | 32,778 | 3.126% | 推荐区间内 |
| `strong_discomfort` | 41,992 | 4.005% | 推荐区间内 |
| `trust_broken` | 45,853 | 4.373% | 推荐区间内 |

阶段失败率的分母仅包含该检查点仍有效的加权路径：同一检查点已被更高优先级全局规则截断的路径不会进入分母。

| 门槛 | 有效加权路径 | 失败加权路径 | 条件失败率 | 状态 |
|---|---:|---:|---:|---|
| Q2 `no_second_meeting` | 1,048,576 | 65,536 | 6.250% | 推荐区间内 |
| Q5 `fade_out` | 931,840 | 178,176 | 19.121% | 推荐区间内 |
| Q8 `stay_acquaintances` | 735,072 | 147,072 | 20.008% | 略高于推荐 10%–20% |

## Q10 最终分类器

到达真正 Q10 最终分类器的路径为 `537,169 / 1,048,576 = 51.228%`，在 35%–55% 推荐范围内。下表分母为这 537,169 条路径；两种确认恋爱评价是独立完整结果。

| Q10 完整结果 | 条件比例 | 状态 |
|---|---:|---|
| `strangers_after_all` | 16.913% | 推荐区间内 |
| `confirmed_relationship:romance_stable` | 8.893% | 低于 10% 推荐值，但高于 5% 最低值 |
| `confirmed_relationship:romance_hidden_risk` | 12.796% | 推荐区间内 |
| `dangerous_lovers` | 20.060% | 推荐区间内 |
| `friends` | 9.302% | 低于 10% 推荐值，但高于 5% 最低值 |
| `unresolved_ambiguity` | 32.037% | 高于推荐值，未超过 40% 警告线 |

## 可达示例

状态顺序为“吸引 / 信任 / 舒适 / 冲突”；路径均为当前枚举器保存的第一条可达路径。

| 结果 | 示例路径 | 状态 |
|---|---|---|
| `no_second_meeting` | `q01_go_now → q02_accept_all` | `45 / 10 / 25 / 15` |
| `fade_out` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_expose_in_return → q05_withdraw_silently` | `50 / 15 / 45 / 25` |
| `stay_acquaintances` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_follow_rule → q08_dismiss_care` | `30 / 20 / 30 / 30` |
| `conflict_break` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_follow_rule → q08_dismiss_care → q09_control → q10_chase_thrill` | `40 / 10 / 0 / 80` |
| `strong_discomfort` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_follow_rule → q08_force_confession → q09_control → q10_chase_thrill` | `60 / 15 / 5 / 75` |
| `trust_broken` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_expose_in_return → q05_keep_playing` | `50 / 5 / 40 / 25` |
| `strangers_after_all` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_redesign_together → q08_treat_as_service → q09_keep_ambiguous → q10_chase_thrill` | `85 / 15 / 45 / 45` |
| `confirmed_relationship:romance_stable` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_redesign_together → q08_recognize_and_request → q09_trial_agreement → q10_flexible_ritual` | `80 / 80 / 90 / 0` |
| `confirmed_relationship:romance_hidden_risk` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_redesign_together → q08_recognize_and_request → q09_keep_ambiguous → q10_flexible_ritual` | `85 / 55 / 80 / 5` |
| `dangerous_lovers` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_redesign_together → q08_recognize_and_request → q09_keep_ambiguous → q10_chase_thrill` | `90 / 30 / 55 / 35` |
| `friends` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_redesign_together → q08_recognize_and_request → q09_state_boundary → q10_fix_everything` | `55 / 65 / 60 / 20` |
| `unresolved_ambiguity` | `q01_go_now → q02_roll_dice → q03_request_pause → q04_talk_privately → q05_keep_playing → q06_reject_logic → q07_redesign_together → q08_recognize_and_request → q09_control → q10_chase_thrill` | `65 / 30 / 35 / 50` |

## 固定位置、策略与支配检查

| 固定选择 | 结果 |
|---|---|
| 始终位置 1 | Q5 `trust_broken` |
| 始终位置 2 | Q8 `stay_acquaintances` |
| 始终位置 3 | Q5 `fade_out` |
| 始终位置 4 | Q10 `unresolved_ambiguity` |
| 全程 `accommodate` | Q2 `no_second_meeting` |
| 全程 `negotiate` | `confirmed_relationship:romance_stable` |
| 全程 `risky` | Q5 `fade_out` |
| `confront` / `honest` | 分别在 Q1 / Q7 缺失，不能构成固定全程策略 |

没有跨全部题目的 raw-effect 全局策略支配。局部 raw-effect 支配仍存在，需保留叙事理由后再决定是否改值：Q01 `make_fallback>keep_original`；Q02 `choose_and_reserve>roll_dice,state_limit`；Q03 `request_pause>counter_ridicule,agree_to_end` 与 `counter_with_reason>counter_ridicule,agree_to_end`；Q04 的 `talk_privately`/`laugh_it_off`/`name_boundary_now` 对严重公开越界选项；Q05 `invite_with_clarity` 对另外三项；Q06 的 `ask_for_presence`、`sequence_needs` 对拒绝方案或较弱方案；Q07 `redesign_together` 对 `follow_rule,mock_publicly`；Q08 `recognize_and_request`、`treat_as_service`、`force_confession` 对 `dismiss_care`；Q09 的 `keep_ambiguous`、`trial_agreement`、`state_boundary` 对 `control`，以及 `trial_agreement>state_boundary`；Q10 `flexible_ritual>fix_everything,let_it_drift`。这些仅是局部数值警告，不能单独证明全局叙事策略无价值。

## 规则遮蔽与结论

生产规则未暴露稳定 rule ID 或“所有同时满足规则”诊断钩子，故规则遮蔽状态为 **unknown**；本报告不把未覆盖错误归因为遮蔽。当前无不可达结局。重点未达项是全局危险合计略低、Q8 略高、稳定恋爱与朋友略低于推荐值、暧昧未决偏高；它们应在后续按既定 effect-first 顺序处理，不能为追求比例破坏行为含义。

effect-budget 分析提示 `q04_expose_in_return` 总强度 45、`q09_control` 为 60、`q10_chase_thrill` 为 55、`q10_flexible_ritual` 为 50；均未超过 60 硬上限，也没有超过两个维度达到 `|15|`。前三项分别对应公开泄密报复、强制控制与高风险刺激，强度有明确行为依据；`q10_flexible_ritual` 是最终题中同时建立吸引、信任、舒适和降冲突的完整双向协议，作为非阻断警告保留。
