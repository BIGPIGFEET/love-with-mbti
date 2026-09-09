# ENFJ 正式十题（Stage 04）

- 状态：Stage 04 已按 Stage-03 v2 同步；选项、效果、反馈和顺序保持既有平衡版本
- 日期：2026-09-08
- 生产问题模块：[enfj-questions.ts](../../src/content/enfj-questions.ts)
- 上游正式序列：[enfj-formal-sequence.json](../traceability/enfj-formal-sequence.json)
- 题目追溯表：[enfj-question-traceability.json](../traceability/enfj-question-traceability.json)
- 集成状态：ENFJ 已注册为可玩内容包；本次没有修改共享规则。

## 1. 运行时字段映射

| semantic field | runtime field or companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 固定为 `Q01`–`Q10` | `validate-question-traceability.mjs` + `validateContent` |
| `order` / `stage` | `Question.order` / `Question.stage` | 精确继承 Stage 03 的 `2/3/3/2` 顺序 | 同上 |
| `setup` | `Question.scene` | 改写为具体时间、地点、触发与可观察行动 | TypeScript 检查 + 人工 QA |
| `npc_behavior` | `Question.npcQuote` | 只写 TA 当下可说或可做的内容 | 人工 QA |
| `prompt` | `Question.prompt` | 每题一个玩家当前可执行的决策 | 人工 QA |
| conflict IDs | `Question.conflictDimensions` | 精确继承 Stage 03 `conflict_ids` | 追溯验证器 |
| source IDs | `Question.researchRefs` | 精确继承 Stage 03 `source_ids` | 追溯验证器 |
| design rationale | `Question.designNote` | 保留非玩家可见设计说明与初始数值状态 | 结构检查 |
| option semantics | `QuestionOption` 八个允许字段 | 每题四项，策略位置打散 | `validateContent` + 人工 QA |
| fuzzy hints | `feedbackIds` / `feedbackText` | 由非零效果的方向与 `5/10/15–20` 强度确定 | 反馈一致性检查 |
| `scene_id` / `candidate_id` / behavior / feature / state IDs | `enfj-question-traceability.json` | 以 `question_id` 为键完整保留 | 追溯验证器 |

## 2. 十题叙事骨架

| 题号 | 阶段 | 标题 | 决策核心 |
|---|---|---|---|
| Q01 | first_meeting | 不必抢着进入热闹 | 主动纳入能否保留参与、旁听和稍后交流的自主 |
| Q02 | first_meeting | 建议之前，先问一句 | 建议许可、倾听需求与目标决定权如何同时成立 |
| Q03 | contact | 热度还不是关系名称 | 好感表达可能笨拙时，如何先澄清含义，再区分约会、排他与承诺 |
| Q04 | contact | 先问你需要哪一种陪伴 | 倾听、建议、实际帮助和独处由谁决定 |
| Q05 | contact | 好意也要看落在哪里 | 建议已造成压力后如何处理意图、影响和调整 |
| Q06 | familiarity | 树洞也需要另一端 | 长期单向情绪劳动如何重订容量、互惠和支持来源 |
| Q07 | familiarity | 心意可以分开回答 | 礼物与身体接触如何逐项确认，不产生持续许可 |
| Q08 | familiarity | 暂停要带着返回时间 | 降温空间、最低联系、返回时间与等待边界如何协商 |
| Q09 | ambiguity | 配对梗不能替你们作答 | 外部“黄金配对/救赎组”脚本如何退回真实相处证据 |
| Q10 | ambiguity | 愿景要拆成今天能答的事 | 共同未来如何拆成当前约会、排他、投入与复谈协议 |

## 3. 平衡后选项效果

以下数值已经按真实 `applyEffects` 与 `resolveEnding` 穷举验证。顺序为 `吸引 / 信任 / 舒适 / 冲突`；总幅度为四轴绝对值之和。

| 题号 | 选项 | 策略 | 效果 | 总幅度 |
|---|---|---|---:|---:|
| Q01 | `q01_choose_small_entry` | negotiate | `5 / 10 / 10 / 0` | 25 |
| Q01 | `q01_join_the_group` | accommodate | `10 / 5 / 5 / 0` | 20 |
| Q01 | `q01_keep_listening` | honest | `0 / 10 / 15 / 0` | 25 |
| Q01 | `q01_turn_it_into_flirting` | risky | `0 / -5 / -10 / 0` | 15 |
| Q02 | `q02_ask_to_be_heard` | honest | `0 / 10 / 10 / 0` | 20 |
| Q02 | `q02_hand_over_the_decision` | risky | `5 / -20 / -5 / 0` | 30 |
| Q02 | `q02_try_one_suggestion` | accommodate | `5 / 5 / 5 / 0` | 15 |
| Q02 | `q02_set_advice_scope` | negotiate | `0 / 10 / 15 / 0` | 25 |
| Q03 | `q03_match_the_momentum` | accommodate | `15 / 0 / 5 / 0` | 20 |
| Q03 | `q03_define_current_scope` | negotiate | `5 / 15 / 10 / 0` | 30 |
| Q03 | `q03_call_it_official` | risky | `5 / -15 / -10 / 0` | 30 |
| Q03 | `q03_say_need_slow` | honest | `0 / 10 / 10 / 0` | 20 |
| Q04 | `q04_make_them_fix_it` | risky | `-5 / -10 / -15 / 0` | 30 |
| Q04 | `q04_request_listening` | honest | `0 / 10 / 15 / 0` | 25 |
| Q04 | `q04_split_support_steps` | negotiate | `5 / 10 / 10 / 0` | 25 |
| Q04 | `q04_take_space` | accommodate | `0 / 5 / 10 / 0` | 15 |
| Q05 | `q05_name_the_specific_pressure` | confront | `0 / 10 / 10 / -5` | 25 |
| Q05 | `q05_diagnose_manipulation` | risky | `0 / -5 / -10 / 20` | 35 |
| Q05 | `q05_keep_original_choice` | honest | `0 / 10 / 10 / 0` | 20 |
| Q05 | `q05_agree_on_advice_signal` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q06 | `q06_rebuild_support_rhythm` | negotiate | `0 / 15 / 15 / -10` | 40 |
| Q06 | `q06_pause_heavy_topics` | accommodate | `0 / 5 / 15 / -10` | 30 |
| Q06 | `q06_claim_the_listener_role` | risky | `0 / -5 / -15 / 15` | 35 |
| Q06 | `q06_admit_low_capacity` | honest | `0 / 15 / 10 / -5` | 30 |
| Q07 | `q07_accept_both_today` | accommodate | `15 / 5 / 10 / 0` | 30 |
| Q07 | `q07_accept_book_decline_hug` | honest | `5 / 10 / 15 / 0` | 30 |
| Q07 | `q07_grab_without_answer` | risky | `-5 / -10 / -15 / 0` | 30 |
| Q07 | `q07_set_future_permissions` | negotiate | `5 / 15 / 10 / 0` | 30 |
| Q08 | `q08_force_the_night` | risky | `0 / -5 / -15 / 20` | 40 |
| Q08 | `q08_set_return_details` | negotiate | `0 / 15 / 10 / -15` | 40 |
| Q08 | `q08_accept_the_pause` | accommodate | `0 / 5 / 10 / -10` | 25 |
| Q08 | `q08_name_waiting_limit` | honest | `0 / 10 / 15 / -5` | 30 |
| Q09 | `q09_reject_the_pairing_script` | honest | `5 / 15 / 10 / -5` | 35 |
| Q09 | `q09_accept_the_destiny_role` | risky | `10 / -10 / -5 / 15` | 40 |
| Q09 | `q09_compare_real_evidence` | negotiate | `10 / 15 / 10 / -5` | 40 |
| Q09 | `q09_brush_off_the_chat` | accommodate | `15 / -5 / 5 / 5` | 30 |
| Q10 | `q10_define_current_agreement` | negotiate | `20 / 10 / 5 / -5` | 40 |
| Q10 | `q10_decline_unready_plan` | honest | `0 / 15 / 10 / -5` | 30 |
| Q10 | `q10_join_every_plan` | accommodate | `20 / -5 / -15 / 0` | 40 |
| Q10 | `q10_demand_proof_by_sacrifice` | risky | `0 / 0 / -20 / 20` | 40 |

## 4. 效果预算复核

- 40 个选项的总幅度全部不高于普通建议值 40，没有普通预算或硬上限警告。
- 高压选项按主要伤害轴收敛：责任转移主要降低信任，逼迫继续主要增加冲突并降低舒适，牺牲测试只使用舒适与冲突两个高强度轴。
- 没有选项在三个以上维度使用 `15` 或 `20`；每个高压选项都有清楚的主要伤害方向。
- 每题只在 Stage 03 登记的 `state_ids` 上使用非零效果；运行时仍完整提供四轴对象。

## 5. Set-level QA

| 题号 | stage | primary feature / conflict | strategy-to-position mapping | effect range | response checked | hints checked | humanization diff checked | 至少两条可信路线 |
|---|---|---|---|---|---|---|---|---|
| Q01 | first_meeting | F01 / K01 | 1=N, 2=A, 3=H, 4=R | 15–25 | pass | pass | pass | 小范围参与；顺势加入；坦白旁听 |
| Q02 | first_meeting | F02 / K03 | 1=H, 2=R, 3=A, 4=N | 15–30 | pass | pass | pass | 只想被听见；听一条建议；限定建议范围 |
| Q03 | contact | F03 / K06 | 1=A, 2=N, 3=R, 4=H | 20–30 | pass | pass | pass | 接住热度；定义当前范围；坦白慢节奏 |
| Q04 | contact | F06 / K05 | 1=R, 2=H, 3=N, 4=A | 15–30 | pass | pass | pass | 请求倾听；拆分支持；选择独处 |
| Q05 | contact | F07 / K10 | 1=C, 2=R, 3=H, 4=N | 20–35 | pass | pass | pass | 具体指出越线；说明影响；建立建议开关 |
| Q06 | familiarity | F05 / K04 | 1=N, 2=A, 3=R, 4=H | 30–40 | pass | pass | pass | 重订节奏；暂停重话题；承认低容量 |
| Q07 | familiarity | F04 / K07 | 1=A, 2=H, 3=R, 4=N | 30 | pass | pass | pass | 真心接受两项；部分拒绝；约定未来权限 |
| Q08 | familiarity | F07 / K09 | 1=R, 2=N, 3=A, 4=H | 25–40 | pass | pass | pass | 补全协议；接受暂停；说明等待上限 |
| Q09 | ambiguity | F08 / K13 | 1=H, 2=R, 3=N, 4=A | 30–40 | pass | pass | pass | 说出真实差异；核对相处证据；延后讨论 |
| Q10 | ambiguity | F03 / K12 | 1=N, 2=H, 3=A, 4=R | 30–40 | pass | pass | pass | 建立当前协议；保留未准备部分；诚实讨论不兼容 |

缩写：`N=negotiate`、`A=accommodate`、`H=honest`、`R=risky`、`C=confront`。策略位置没有固定答案槽位；`confront` 在 Q05 被用于健康的具体边界表达，礼貌语气也不会自动获得最佳效果。

## 6. 追溯与反馈检查

- 每个运行时问题以精确 `question_id` 绑定一个 Stage 03 `scene_id`；order、stage、candidate、behavior、feature、source、conflict 和 state ID 集均由 companion JSON 保留。
- Q01、Q04、Q06 已分别同步新增来源 S42、S46，以及 S42/S43/S46；Q03 沿用 S36，并把中文原文中的表达失误与后续澄清投射到玩家可见场景。小红书表层记录 S44 和类型攻略字幕 S45 未进入题目证据链。
- 每题四项选择均是玩家当下可以执行的行动，不包含 `endingId`、故事停止字段或直接结局选择。
- 每个选项含两个反馈键；键的维度、方向和强度与对应非零效果一致。玩家可见反馈只描述姿态、信任、舒适或张力变化，不显示数值。
- Q01–Q04 与 Q07 的 Stage 03 状态集合不含 `conflict`，对应选项的冲突变化保持为 0；Q05、Q06、Q08 的状态集合不含 `attraction`，对应吸引变化保持为 0。
- 人格类型只在 Q09 作为外部投射出现；选项后果来自是否施加照顾义务、是否核对现实相处，而不是玩家赞成或反对某个配对梗。

## 7. 自动验收结论

- ENFJ 目标模块结构检查通过：10 题、40 个唯一选项，阶段分布为 `2 / 3 / 3 / 2`，全部效果来自允许集合且四轴字段完整。
- Stage 03/04 追溯验证通过：10 个运行时问题、10 条 companion 记录和 10 个正式场景一一对应，全部上游 ID 集一致。
- 选项 companion 检查通过：40 个 `option_id`、策略和非空设计理由与 TypeScript 逐项一致；Markdown 效果表与平衡后的运行时模块一致。
- 反馈检查通过：80 个反馈引用的维度、方向与强度均符合效果值；所有非零效果只落在对应 Stage 03 `state_ids` 内。
- 效果预算检查无警告：所有数值合法、总幅度不超过 40，也没有过多高强度维度。
- 2026-09-08 仓库回归通过：ENFJ 追溯校验、12 个当前已注册内容包校验、全类型路径分析、89 项测试和生产构建全部成功。构建仍报告既有的单个 JavaScript chunk 超过 500 kB 提示。
- ENFJ 独立适配器完整枚举 `4^10 = 1,048,576` 条等价完整路径；11 个基础结局和 12 个完整 outcome 全部可达。

## 8. Stage 06 结论与接入边界

- Q2、Q5、Q8 条件失败率为 20.000%、36.582%、39.842%，Q10 到达率为 27.545%，均在共享参考区间内。
- 所有完整结果均可达；规则覆盖与 shadowing 因运行时没有稳定 rule ID 和 applicable-rule 钩子而保持 `unknown`。
- 固定答案位置没有形成全成功捷径；跨题全局策略支配为空。局部原始效果支配只作为叙事复核警告保留。
- 末段参考分布仍有偏差，详见 `enfj-balance-report.md`；没有为凑比例修改共享阈值或给普通行为追加不合题意的严重惩罚。
- ENFJ 已进入类型选择页和统一内容包注册表；运行时继续共用固定关系规则与结局分类器。

## 9. Stage-03 v2 同步记录

- Q01、Q04、Q06 的 `researchRefs` 与问题 companion 已精确继承 v2 正式序列；新增引用只补充反例和容量风险，不改变题目机制。
- Q03 的场景加入一次自然的表达失误和当场重述，使玩家面对的是可观察的澄清行为。标题、问题 ID、选项 ID、策略、效果、即时回应及反馈全部保留。
- Stage-03 v2 没有替换候选或改变顺序，因此继续使用 `Q01`–`Q10` 和 `ENFJ-SC01`–`ENFJ-SC10`。
- 本次没有设计结局或调整平衡参数；既有 Stage-06 分布只有在验证确认选项和效果完全未变后才继续适用。
