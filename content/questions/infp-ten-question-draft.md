# INFP 正式十题 Stage 04–06 交接

> 状态：已完成 Stage 05 结局绑定与 Stage 06 全路径平衡的非运行时草案，2026-08-15。
> 权威题目记录：[infp-ten-question-draft.json](infp-ten-question-draft.json)。  
> 上游正式序列：[infp-formal-sequence.json](../traceability/infp-formal-sequence.json)。  
> 逐题与逐选项设计追踪：[infp-question-traceability.json](../traceability/infp-question-traceability.json)。

当前数值已通过 `4^10` 全路径平衡，并绑定 INFP 独立结局、关系评价和模糊反馈草案。INFP 尚未加入运行时类型路由，因此仍未写入 `src/content/`；完整分布见 [infp-balance-report.md](infp-balance-report.md)。

## 1. 运行时字段映射

| semantic field | runtime field / companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 原样保留 Q01～Q10 | 结构检查 + 追踪校验器 |
| `order` / `stage` / `prompt` / `options` | `Question` 同名语义字段 | 原样投影 | `validateContent`（接入后） |
| `setup` | `Question.scene` | 草案 JSON 已使用 runtime 名称 `scene` | 结构检查 |
| `npc_behavior` | `Question.npcQuote` | 用一句可观察发言承载 | 结构检查 |
| `conflict_ids` | `Question.conflictDimensions` | 与 Stage 03 ID 集完全一致 | 追踪校验器 |
| `evidence_refs` | `Question.researchRefs` | 只允许 `evidence_source` | 追踪校验器 |
| `author_notes` | `Question.designNote` | 记录场景护栏与 Stage 06 平衡状态 | 结构检查 |
| `option_id` / strategy / text / effects | `QuestionOption` 对应字段 | 四选项、合法策略、四维合法步长 | 结构检查 |
| `immediate_response` | `QuestionOption.npcResponse` | 直接回应玩家当下行动 | 人工一致性审查 |
| `fuzzy_hints` | `feedbackIds` + `feedbackText` | 按维度、方向、5/10/15+ 强度确定 | 反馈方向/强度检查 |
| `scene_id`、candidate/B/F/S/C/state IDs | `infp-question-traceability.json` | 以精确 `question_id` 连接，不按顺序猜测 | Stage 04 bundled validator |
| 选项 rationale | 追踪 JSON 的 `options` | 以精确 `option_id` 连接 | 自定义一致性检查 |

## 2. 十题叙事脊柱

| 题目 | 正式场景 | 场景与 TA 的可观察行为 | 玩家主要决定 |
|---|---|---|---|
| Q01 | INFP-S01 / I01 | 初次见面谈到玩家没读过的冷门小说；TA 想听真实观点，不要求共鸣。 | 不懂对方兴趣时，如何真实参与而不装懂。 |
| Q02 | INFP-S02 / I02 | 聚会散场后 TA 明确不想继续说话，但没有把沉默定义为拒绝。 | 如何确认状态、尊重披露节奏并避免读心。 |
| Q03 | INFP-S03 / I04 | TA 送出对应上次谈话细节的小书签，却没有替礼物定义关系含义。 | 如何接住个性化表达而不把礼物自动当承诺。 |
| Q04 | INFP-S04 / I06 | TA 想参加展览，但清楚说明整日社交会耗竭。 | 如何同时保留共同体验、玩家计划和真实退出权。 |
| Q05 | INFP-S05 / I08 | TA 描述明年去海边住一个月的愿景，现实条件尚未确认。 | 如何保护浪漫想象，同时让现实获得回答权。 |
| Q06 | INFP-S06 / I09 | 玩家受挫时 TA 已认真倾听，并主动询问接下来需要倾听还是行动。 | 如何表达支持需求并承担自己的截止任务。 |
| Q07 | INFP-S07 / I10 | TA 在冲突中请求暂停，双方需要补上返回时间和修复方式。 | 如何保护暂停权，同时避免它滑成冷处理。 |
| Q08 | INFP-S08 / I12 | 玩家面对报酬高但宣传话术夸张的工作；TA 因真实性价值反对原方案。 | 如何在现实压力、个人决定权和价值差异间取舍。 |
| Q09 | INFP-S09 / I14 | TA 用长信表达在乎，却没有回答排他关系问题。 | 如何区分浪漫表达、私密托付和关系同意。 |
| Q10 | INFP-S10 / I17 | 双方已谈关系定义，开始讨论随性、联系和见面频率。 | 如何把吸引落实为双方都能兑现的维护协议。 |

## 3. 选项与平衡后效果总览

效果顺序为 `attraction / trust / comfort / conflict`。完整玩家行动、TA 即时反应、模糊提示文本和设计理由保存在 JSON 与追踪文件中。

| 题目 | 选项位置 1 → 4 | option effects |
|---|---|---|
| Q01 | honest / accommodate / negotiate / risky | `q01_admit_and_ask 5/10/5/0`<br>`q01_vague_agreement 0/-10/-5/5`<br>`q01_trade_references 10/5/10/-5`<br>`q01_thirty_second_pitch 10/0/-5/5` |
| Q02 | accommodate / honest / risky / negotiate | `q02_end_gently -5/5/10/-5`<br>`q02_check_without_pressure 0/10/5/-5`<br>`q02_message_until_answer -10/-5/-10/10`<br>`q02_offer_two_exits 5/5/15/-5` |
| Q03 | risky / honest / accommodate / negotiate | `q03_tease_in_public -5/-15/-5/15`<br>`q03_ask_lightly 0/10/5/0`<br>`q03_receive_without_label 10/5/10/0`<br>`q03_set_gift_tone 5/10/10/-5` |
| Q04 | negotiate / confront / accommodate / honest | `q04_build_exit_point 5/10/15/-5`<br>`q04_push_through -5/0/-20/15`<br>`q04_cancel_everything 0/-5/5/-5`<br>`q04_keep_own_plan 10/15/10/0` |
| Q05 | accommodate / risky / negotiate / honest | `q05_promise_the_month 15/-5/5/0`<br>`q05_mock_the_fantasy -5/0/-5/20`<br>`q05_make_small_version 5/15/10/-5`<br>`q05_name_uncertainty -5/10/5/5` |
| Q06 | negotiate / accommodate / honest / confront | `q06_sequence_support 10/10/10/-10`<br>`q06_keep_venting 5/-5/10/10`<br>`q06_request_structure 5/15/5/-5`<br>`q06_blame_for_not_fixing -5/0/-10/20` |
| Q07 | honest / risky / negotiate / accommodate | `q07_name_limit 5/10/5/0`<br>`q07_force_resolution -5/0/-15/20`<br>`q07_pause_with_anchor -5/15/10/-10`<br>`q07_wait_without_anchor 0/-5/5/-5` |
| Q08 | negotiate / accommodate / confront / honest | `q08_negotiate_claims 5/15/10/-5`<br>`q08_refuse_immediately 0/-5/5/-10`<br>`q08_take_and_dismiss 0/-20/0/20`<br>`q08_keep_decision_right 0/10/5/10` |
| Q09 | risky / negotiate / accommodate / honest | `q09_treat_as_yes 0/-10/-10/20`<br>`q09_define_three_terms 15/15/5/-5`<br>`q09_wait_without_need 20/-10/5/-5`<br>`q09_set_answer_window -5/20/5/5` |
| Q10 | accommodate / honest / risky / negotiate | `q10_follow_their_impulse 20/-20/0/5`<br>`q10_state_minimum -10/15/5/5`<br>`q10_disappear_to_test 0/-20/-10/20`<br>`q10_build_flexible_rhythm 15/15/10/0` |

## 4. 整套 QA

| 题目 | 主特征 | 主冲突 | 至少两条可信路线 | 即时反应 | 提示一致 | 人性化复核 |
|---|---|---|---|---|---|---|
| Q01 | F02 | C02 | 坦诚好奇 / 交换入口 | 已检查 | 已检查 | 已检查 |
| Q02 | F01 | C01 | 轻量确认 / 提供选择 / 温和结束 | 已检查 | 已检查 | 已检查 |
| Q03 | F03 | C08 | 接住心意 / 轻量确认 / 约定表达 | 已检查 | 已检查 | 已检查 |
| Q04 | F10 | C09 | 设置退出点 / 保留各自计划 | 已检查 | 已检查 | 已检查 |
| Q05 | F05 | C03 | 拆成下一步 / 说明保留 / 浪漫承诺（有代价） | 已检查 | 已检查 | 已检查 |
| Q06 | F04 | C04 | 安排顺序 / 直接求助 / 继续倾诉（有代价） | 已检查 | 已检查 | 已检查 |
| Q07 | F06 | C05 | 说明底线 / 修复锚点 / 暂时让步 | 已检查 | 已检查 | 已检查 |
| Q08 | F07 | C11 | 修改宣传边界 / 保留决定权 / 拒绝项目（有代价） | 已检查 | 已检查 | 已检查 |
| Q09 | F12 | C08 | 拆解协议 / 设置期限 / 继续等待（有代价） | 已检查 | 已检查 | 已检查 |
| Q10 | F09 | C07 | 说明底线 / 弹性协议 / 顺应节奏（有代价） | 已检查 | 已检查 | 已检查 |

### 验收结论

- 题目数与阶段分配为 10 和 `2/3/3/2`；Q01～Q10 精确对应 INFP-S01～INFP-S10。
- 每题恰好四个立即可执行的选择；`honest`、`accommodate`、`negotiate`、`risky` 均出现在四种位置，`confront` 分布在第 2、3、4 位。
- 所有效果包含 `attraction / trust / comfort / conflict`，且只使用 `-20～20` 的合法五点步长。
- 每个选项引用 1～2 个反馈键；方向和强度与其对应效果完全一致，相同反馈键的临时文案没有漂移。
- 普通拒绝、不匹配、要求暂停或保留价值分歧均通过四维状态进入统一判定。
- 局部支配检查已执行；每题至少保留两条不存在全维明显优劣的可信路线。被明显支配的路线只用于具体表现持续追问、否定边界、迁怒、擅自定义或消失测试等高风险行为。
- Stage 06 只调整目标类型的选项效果与对应反馈强度；ID、顺序、策略、来源和上游追踪集合保持不变，共享规则未修改。

## 5. 开放风险

- Q01 的“限时挑战”需要保持为略带压力但仍可接住的玩笑，不能写成羞辱兴趣。
- Q02 必须让结束约会成为正当选择；不要在后续反馈中把回复短解释成冷淡。
- Q03 的小书签只是该场景中的表达，不是 INFP 固定爱语或告白密码。
- Q05 的海边愿景应保持可爱但现实上尚未确认，避免夸张到只有一个显然正确答案。
- Q06 中 TA 已主动询问支持方式，防止全套变成只有玩家负责元沟通；后续选项反馈应保留 TA 的学习与调整。
- Q07 的高信任来自 TA 按约返回，不来自玩家无限给空间。
- Q08 的宣传工作必须保持灰度：产品合法、玩家有现实压力，但夸张话术确有误导风险；不能把 TA 写成天然正确的道德裁判。
- Q09、Q10 需要叙事连续：前者至少确认一项关系协议，后者才讨论长期维护。具体路径不应假设玩家一定选择了单一“最佳选项”。
- 当前反馈文本已与 Stage 05 的 24 键独立内容包逐字对齐。
- Stage 06 已验证 11 个基础结局和 12 个完整结果全部可达；规则遮蔽仍因运行时没有诊断钩子而保持未知。

## 6. 下一步交接

设计阶段 01–06 已形成闭环。下一步如需上线，应在明确授权后把本草案投影为独立 `src/content/infp-questions.ts` 与 INFP 结局模块，加入类型路由，并运行内容验证、生产路径分析、测试和构建。

**本阶段批准的是 INFP 目标内容效果与反馈强度；没有修改共享门槛、规则优先级或稳定结果 ID。**
