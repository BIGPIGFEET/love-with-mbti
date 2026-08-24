# ENTJ 正式十题（Stage 04 非运行时草案）

- 状态：Stage 04 题稿已完成 Stage 06 全路径平衡
- 日期：2026-08-24
- 机器可读题稿：[`entj-ten-question-draft.json`](./entj-ten-question-draft.json)
- 上游正式序列：[`entj-formal-sequence.json`](../traceability/entj-formal-sequence.json)
- 题目追溯表：[`entj-question-traceability.json`](../traceability/entj-question-traceability.json)
- 说明：本稿未接入运行时路由，也未覆盖其他人格题库；当前分值对应 Stage 06 最终枚举报告。

## 运行时字段映射

| 草案字段 | 运行时含义 |
|---|---|
| `id` / `order` / `stage` | 题号、顺序、关系阶段 |
| `scene` / `npcQuote` / `prompt` | 场景、ENTJ 台词、玩家决策提示 |
| `conflictDimensions` / `researchRefs` | 冲突维度与研究证据追溯 |
| `strategy` / `strategyLabel` | 选项策略身份与玩家可见标签 |
| `effects` | `attraction`、`trust`、`comfort`、`conflict` 四轴变化 |
| `npcResponse` | 选择后的局部角色回应 |
| `feedbackIds` / `feedbackText` | 共享反馈词典键与精确文案快照 |

## 十题叙事骨架

| 题号 | 阶段 | 场景 | 决策核心 |
|---|---|---|---|
| Q01 | first_meeting | 先别给我配办公室 | 被类型标签概括时，是承认、共探、停聊还是继续评分 |
| Q02 | first_meeting | 九十分钟，三个地点 | 面对高密度约会安排，如何处理效率、偏好与主导权 |
| Q03 | contact | 不是猜谜的第二次见面 | 对方明确邀约时，怎样同时表达兴趣与真实节奏 |
| Q04 | contact | 一份没有附带条款的清单 | 实用帮助何时是支持，何时需要边界与介入规则 |
| Q05 | contact | 现在先别修 | 情绪低落时，如何在倾听需求和解决问题之间对齐 |
| Q06 | familiarity | 先别把偏好填进底线栏 | 共同计划中的高标准、硬约束与自主权怎样共存 |
| Q07 | familiarity | 暂停不是失踪 | 冲突暂停如何兼顾冷静空间和可预期的回返 |
| Q08 | familiarity | 回来以后，不只交新方案 | 修复关系时，方案、道歉、补救与原谅如何拆开 |
| Q09 | ambiguity | 明天前还可以取消 | 未来投入是否等于关系承诺，以及边界如何确认 |
| Q10 | ambiguity | 这次不替关系做决定 | 双方如何协商排他、公开、联系频率与个人时间 |

## 选项与平衡后效果

数值顺序为 `吸引 / 信任 / 舒适 / 冲突`；总幅度为四轴绝对值之和。

| 题号 | 选项 | 策略 | 效果 | 总幅度 |
|---|---|---|---:|---:|
| Q01 | `q01_wait_for_proof` | risky | `-5 / -10 / -15 / 10` | 40 |
| Q01 | `q01_own_the_label` | honest | `5 / 10 / 10 / -5` | 30 |
| Q01 | `q01_compare_examples` | negotiate | `10 / 5 / 10 / 0` | 25 |
| Q01 | `q01_drop_the_topic` | accommodate | `5 / 5 / 10 / -5` | 25 |
| Q02 | `q02_keep_two_parts` | negotiate | `5 / 10 / 5 / -5` | 25 |
| Q02 | `q02_follow_for_today` | accommodate | `10 / 5 / 10 / 0` | 25 |
| Q02 | `q02_choose_one_place` | honest | `5 / 10 / 10 / 5` | 30 |
| Q02 | `q02_make_them_responsible` | risky | `-5 / -5 / 0 / 15` | 25 |
| Q03 | `q03_answer_and_reschedule` | honest | `10 / 5 / 5 / 0` | 20 |
| Q03 | `q03_accept_the_invite` | accommodate | `10 / 0 / 5 / 0` | 15 |
| Q03 | `q03_set_a_slower_pace` | negotiate | `5 / 10 / 5 / -5` | 25 |
| Q03 | `q03_delay_as_a_test` | risky | `-5 / -15 / -5 / 15` | 40 |
| Q04 | `q04_take_what_helps` | accommodate | `0 / 0 / 5 / 0` | 5 |
| Q04 | `q04_name_the_boundary` | honest | `0 / 10 / 5 / 5` | 20 |
| Q04 | `q04_make_a_help_rule` | negotiate | `0 / 10 / 5 / -5` | 20 |
| Q04 | `q04_expand_the_assignment` | risky | `-5 / -10 / -20 / 10` | 45 ⚠ |
| Q05 | `q05_ask_for_ten_minutes` | honest | `0 / 10 / 10 / -5` | 25 |
| Q05 | `q05_call_them_heartless` | confront | `-10 / -5 / -15 / 20` | 50 ⚠ |
| Q05 | `q05_choose_support_together` | negotiate | `0 / 10 / 10 / -10` | 30 |
| Q05 | `q05_take_the_plan_for_now` | accommodate | `0 / 0 / 5 / 0` | 5 |
| Q06 | `q06_merge_the_constraints` | negotiate | `0 / 10 / 10 / -10` | 30 |
| Q06 | `q06_accept_their_standard` | accommodate | `10 / 0 / -5 / 0` | 15 |
| Q06 | `q06_reject_everything` | confront | `-5 / -10 / -10 / 20` | 45 ⚠ |
| Q06 | `q06_name_the_management_feeling` | honest | `5 / 10 / 5 / 5` | 25 |
| Q07 | `q07_accept_the_pause` | accommodate | `0 / 5 / 15 / -15` | 35 |
| Q07 | `q07_state_the_waiting_limit` | honest | `5 / 10 / 10 / -5` | 30 |
| Q07 | `q07_define_the_return` | negotiate | `5 / 10 / 5 / -10` | 30 |
| Q07 | `q07_force_an_answer_now` | risky | `-10 / -5 / -20 / 20` | 55 ⚠ |
| Q08 | `q08_separate_repair_steps` | negotiate | `5 / 10 / 10 / -15` | 40 |
| Q08 | `q08_not_ready_to_forgive` | honest | `0 / 10 / 5 / 5` | 20 |
| Q08 | `q08_demand_total_control` | confront | `-10 / -10 / -15 / 20` | 55 ⚠ |
| Q08 | `q08_skip_with_flirting` | risky | `15 / -15 / 5 / 5` | 40 |
| Q09 | `q09_accept_as_an_activity` | accommodate | `20 / 0 / 5 / 0` | 25 |
| Q09 | `q09_confirm_the_terms` | negotiate | `5 / 15 / 10 / -5` | 35 |
| Q09 | `q09_talk_before_investing` | honest | `5 / 10 / 10 / 5` | 30 |
| Q09 | `q09_announce_a_relationship` | risky | `-10 / -20 / -10 / 20` | 60 ⚠ |
| Q10 | `q10_give_a_real_answer` | honest | `20 / 15 / 5 / 0` | 40 |
| Q10 | `q10_build_an_agreement` | negotiate | `0 / 15 / 15 / -5` | 35 |
| Q10 | `q10_follow_everything` | accommodate | `20 / -20 / 0 / 10` | 50 ⚠ |
| Q10 | `q10_test_by_disappearing` | risky | `0 / -20 / -10 / 20` | 50 ⚠ |

## 人工 QA

| 题号 | 主要特征 / 冲突 | 至少两条可信路线 |
|---|---|---|
| Q01 | F01/F03/F11 · K01 | 承认标签过度；互换反例；尊重停聊 |
| Q02 | F01/F02/F04 · K02/K06 | 合并行程；这次跟随；只选一站 |
| Q03 | F01/F05 · K02/K03 | 回应并改期；接受邀约；协商慢节奏 |
| Q04 | F02/F06 · K02/K04 | 接受帮助；说明边界；制定介入规则 |
| Q05 | F03/F05/F09 · K05 | 请求先陪伴；共同选择支持方式；暂收方案 |
| Q06 | F01/F02/F08 · K02/K07 | 合并约束；说明被管理感；有限接受标准 |
| Q07 | F05/F07/F09 · K08 | 接受暂停；说明等待上限；约定回返时间 |
| Q08 | F02/F05/F08/F09 · K08 | 拆分修复步骤；诚实保留原谅节奏 |
| Q09 | F01/F04/F06/F10 · K04/K06/K10 | 接受活动；确认条件；投入前谈含义 |
| Q10 | F06/F07/F10 · K04/K09/K10 | 给真实答案；逐项共建协议；保留不同节奏 |

## 自动验收结论

- 结构：10 题、40 个唯一选项；阶段分布为 `2 / 3 / 3 / 2`。
- 追溯：每题与 Stage 03 的场景、候选事件、行为、特征、来源、冲突和状态集合精确对应。
- 效果：四轴齐全，数值均来自允许集合；没有选项总幅度超过 60，也没有选项出现超过两个高幅度轴。
- 策略：`honest`、`negotiate`、`accommodate`、`risky` 与必要的 `confront` 分散在不同位置，未形成固定答案槽位。
- 反馈：每个选项含 1–2 个共享反馈键；方向、强度和文本快照与效果值一致。
- 幅度提示：32 个选项总幅度不高于 40；8 个高压选项为 45–60，已在 Stage 06 全路径枚举中复核并作为明确风险路线保留。
- 结局：题目选项不携带 `ending` 或等价字段，不在局部选择中直接决定结局。

## 风险与下一步

- ENTJ 证据描述的是网络叙事倾向，不是对个体人格的事实判断；题面通过反例、协商、可拒绝性和多条可信路线避免把“高效、强势、理性”写成唯一脚本。
- Q04–Q10 的八个高压选项数值超过普通建议幅度；Stage 06 已确认均不超过硬上限且没有超过两个高幅维度。
- Stage 05 结局合同与 Stage 06 全路径平衡均已完成；任何后续效果、选项顺序、阈值或优先级变化都必须重新枚举。
