# ENFP 正式十题（Stage 04 非运行时草案）

- 状态：Stage 04 题稿已完成，Stage 06 全路径平衡已验证
- 日期：2026-08-24
- 机器可读题稿：[`enfp-ten-question-draft.json`](./enfp-ten-question-draft.json)
- 上游正式序列：[`enfp-formal-sequence.json`](../traceability/enfp-formal-sequence.json)
- 题目追溯表：[`enfp-question-traceability.json`](../traceability/enfp-question-traceability.json)
- 说明：本稿未接入运行时路由，也未覆盖其他人格题库；当前分值为 Stage 06 平衡后的非运行时版本。

## 运行时字段映射

| 草案字段 | 运行时含义 |
|---|---|
| `id` / `order` / `stage` | 题号、顺序、关系阶段 |
| `scene` / `npcQuote` / `prompt` | 场景、ENFP 台词、玩家决策提示 |
| `conflictDimensions` / `researchRefs` | 冲突维度与研究证据追溯 |
| `strategy` / `strategyLabel` | 选项策略身份与玩家可见标签 |
| `effects` | `attraction`、`trust`、`comfort`、`conflict` 四轴变化 |
| `npcResponse` | 选择后的局部角色回应 |
| `feedbackIds` / `feedbackText` | 共享反馈词典键与精确文案快照 |

## 十题叙事骨架

| 题号 | 阶段 | 场景 | 决策核心 |
|---|---|---|---|
| Q01 | first_meeting | 给彼此留个入口 | 如何回应主动纳入、群体节奏和可退出空间 |
| Q02 | first_meeting | 笑着说的也值得认真听 | 幽默表达的创意是否获得真实评估 |
| Q03 | contact | 临时发现的岔路 | 探索欲、原计划与时间容量如何取舍 |
| Q04 | contact | 消息像烟花 | 高频表达、回复节奏与关系意图如何拆开 |
| Q05 | contact | 能聊很多，不代表什么都要说 | 公开表达与私人披露边界能否并存 |
| Q06 | familiarity | 别急着把我修好 | 支持方式是否由接收者需要和双方容量决定 |
| Q07 | familiarity | 今晚不用当小太阳 | 活跃者的低能量时刻是否被允许保持私密 |
| Q08 | familiarity | 热心不能抵掉迟到 | 善意、失约结果与修复责任如何分别判断 |
| Q09 | ambiguity | 热度之外，我们是什么 | 真实热度如何转化为清楚而可修改的承诺 |
| Q10 | ambiguity | 关系不是社交禁令 | 社交自主与对等关系边界如何共同成立 |

## 选项与平衡后效果

数值顺序为 `吸引 / 信任 / 舒适 / 冲突`；总幅度为四轴绝对值之和。

| 题号 | 选项 | 策略 | 效果 | 总幅度 |
|---|---|---|---:|---:|
| Q01 | `q01_set_pace` | negotiate | `5 / 10 / 10 / -5` | 30 |
| Q01 | `q01_join_energy` | accommodate | `15 / 0 / 5 / 0` | 20 |
| Q01 | `q01_take_quiet_exit` | honest | `0 / 10 / 15 / -5` | 30 |
| Q01 | `q01_claim_special` | risky | `5 / -5 / -10 / 10` | 30 |
| Q02 | `q02_laugh_it_off` | risky | `-5 / -5 / 0 / 10` | 20 |
| Q02 | `q02_ask_for_one_case` | honest | `5 / 10 / 5 / 0` | 20 |
| Q02 | `q02_compare_constraints` | negotiate | `10 / 10 / 5 / -5` | 30 |
| Q02 | `q02_attack_the_group` | confront | `10 / -5 / -5 / 15` | 35 |
| Q03 | `q03_follow_the_detour` | accommodate | `15 / -5 / 5 / 0` | 25 |
| Q03 | `q03_keep_original_plan` | honest | `0 / 5 / 10 / -5` | 20 |
| Q03 | `q03_hide_the_deadline` | risky | `10 / -10 / -5 / 10` | 35 |
| Q03 | `q03_try_twenty_minutes` | negotiate | `10 / 5 / 10 / -5` | 30 |
| Q04 | `q04_name_reply_window` | honest | `10 / 5 / 10 / 0` | 25 |
| Q04 | `q04_public_partner_label` | risky | `15 / -15 / -10 / 10` | 50 ⚠ |
| Q04 | `q04_reply_when_able` | accommodate | `15 / -5 / 5 / 0` | 25 |
| Q04 | `q04_separate_pace_and_intent` | negotiate | `5 / 10 / 5 / -5` | 25 |
| Q05 | `q05_change_topic` | accommodate | `0 / 0 / 10 / -5` | 15 |
| Q05 | `q05_accuse_avoidance` | confront | `-5 / -10 / -15 / 15` | 45 ⚠ |
| Q05 | `q05_offer_support_menu` | negotiate | `5 / 10 / 10 / -5` | 30 |
| Q05 | `q05_state_care_without_claim` | honest | `5 / 5 / 10 / 0` | 20 |
| Q06 | `q06_demand_mind_reading` | confront | `-5 / -10 / -15 / 20` | 50 ⚠ |
| Q06 | `q06_request_listening` | honest | `0 / 5 / 15 / -5` | 25 |
| Q06 | `q06_choose_silent_walk` | accommodate | `10 / 0 / 10 / -5` | 25 |
| Q06 | `q06_split_today_tomorrow` | negotiate | `10 / 10 / 5 / -5` | 30 |
| Q07 | `q07_confirm_check_in` | negotiate | `5 / 10 / 10 / -5` | 30 |
| Q07 | `q07_share_offline_photo` | risky | `-10 / -20 / -10 / 20` | 60 ⚠ |
| Q07 | `q07_offer_thirty_minutes` | honest | `5 / 5 / 15 / 0` | 25 |
| Q07 | `q07_leave_room_without_questions` | accommodate | `10 / 0 / 10 / -5` | 25 |
| Q08 | `q08_name_cost_and_deadline` | honest | `0 / 5 / 5 / -10` | 20 |
| Q08 | `q08_absorb_the_work` | accommodate | `-5 / -10 / -10 / 5` | 30 |
| Q08 | `q08_reduce_them_to_a_label` | confront | `-15 / -10 / -10 / 20` | 55 ⚠ |
| Q08 | `q08_replan_with_checkpoints` | negotiate | `0 / 10 / 10 / -10` | 30 |
| Q09 | `q09_keep_it_undefined` | accommodate | `15 / -10 / 0 / 5` | 30 |
| Q09 | `q09_state_exclusive_need` | honest | `-5 / 15 / 10 / 0` | 30 |
| Q09 | `q09_demand_social_proof` | risky | `0 / -15 / -15 / 10` | 40 |
| Q09 | `q09_define_four_axes` | negotiate | `5 / 15 / 5 / -5` | 30 |
| Q10 | `q10_demand_total_cutoff` | confront | `-10 / -15 / -15 / 10` | 50 ⚠ |
| Q10 | `q10_write_equal_rules` | negotiate | `15 / 15 / 10 / -5` | 45 ⚠ |
| Q10 | `q10_name_specific_boundary` | honest | `-5 / 15 / 5 / 0` | 25 |
| Q10 | `q10_hide_jealousy` | accommodate | `10 / -10 / -5 / 5` | 30 |

## 人工 QA

| 题号 | 主要特征 / 冲突 | 至少两条可信路线 |
|---|---|---|
| Q01 | F01/F04 · K01 | 调节节奏；顺势加入；坦白旁听 |
| Q02 | F02/F03 · K02 | 请讲一个方案；按共同条件比较 |
| Q03 | F03 · K03 | 本次即兴；守住原计划；限定试探 |
| Q04 | F06 · K06/K10 | 说明回复窗口；暂不定义；拆开意图 |
| Q05 | F01/F04/F05 · K01/K09 | 不追问换题；确认支持方式；表达有限知情需求 |
| Q06 | F01/F06/F09 · K07/K13 | 明确只听；安静散步；两阶段支持 |
| Q07 | F01/F04/F05 · K08/K09 | 约定回访；说明陪伴容量；安静留白 |
| Q08 | F01/F03/F09 · K03/K04/K07/K12 | 讲清成本；重排任务与检查点 |
| Q09 | F07/F08 · K05/K10 | 坦白排他诉求；逐项定义关系 |
| Q10 | F04/F06/F08/F09 · K05/K11/K12 | 对等规则；具体边界；允许暂不确认 |

## 自动验收结论

- 结构：10 题、40 个唯一选项；阶段分布为 `2 / 3 / 3 / 2`。
- 追溯：每题与 Stage 03 的场景、候选事件、行为、特征、来源、冲突和状态集合精确对应。
- 效果：四轴齐全，数值均来自允许集合；没有选项总幅度超过 60，也没有选项出现超过两个高幅度轴。
- 策略：`honest`、`negotiate`、`accommodate`、`risky` 与必要的 `confront` 分散在不同位置，未形成固定答案槽位。
- 反馈：每个选项含两个共享反馈键；方向、强度和文本快照与效果值一致。
- 幅度提示：33 个选项总幅度不高于 40；7 个预算提示为 45–60，其中 6 个是明确边界侵犯或人格贬损，`q10_write_equal_rules` 的 45 来自双向规则带来的两项高正向变化。
- 结局：题目选项不携带 `ending` 或等价字段，不在局部选择中直接决定结局。

## 风险与下一步

- 本题集把网络刻板印象当作待检验叙事，不当作 ENFP 个体事实；题面持续加入明确拒绝、容量说明、履约责任和关系定义，以免把“热情、跳跃、外向”写成单一人格脚本。
- Q04-Q08 与 Q10 的高压选项均保持明确的主要伤害方向；没有选项超过 60 硬上限，也没有超过两个高幅维度。
- Stage 06 已验证全部 11 个基础结局与 12 个完整 outcome 可达。下一步若接入产品，需要单独实现 ENFP 运行时路由并重新执行生产验证。
