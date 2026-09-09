# ISFJ 十题正式问题交接（Stage 04）

> 状态：v1 question-complete，数值仍为待 Stage 06 枚举的初始假设。  
> 运行时题目源：[isfj-questions.ts](../../src/content/isfj-questions.ts)；逐题追溯：[isfj-question-traceability.json](../traceability/isfj-question-traceability.json)；上游锁定序列：[isfj-formal-sequence.json](../traceability/isfj-formal-sequence.json)。  
> ISFJ 当前不是已注册可玩类型。本阶段创建目标题目模块，但不修改 `content-pack.ts`、`packs.ts`、共享规则、结局或现有类型内容。

## 1. 运行时字段映射

| semantic field | runtime field or companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 使用 `Q01`–`Q10` 精确 ID | schema + traceability validator |
| `order` / `stage` / `prompt` / `options` | `Question` 同名语义字段 | 固定 2/3/3/2 阶段分配，每题四项 | schema + traceability validator |
| `setup` | `Question.scene` | 玩家可见的具体时间、地点和触发 | schema |
| `npc_behavior` | `Question.npcQuote` | 只写可观察言行 | schema |
| `conflict_ids` | `Question.conflictDimensions` | 完整保留 Stage 03 冲突 ID | traceability validator |
| `evidence_refs` | `Question.researchRefs` | 完整保留 Stage 03 合格来源 ID | traceability validator |
| `author_notes` | `Question.designNote` | 非玩家可见设计理由 | TypeScript review |
| `option_id` / strategy / text / effects | `QuestionOption` 对应字段 | 四项显示顺序独立于策略分类 | schema + companion check |
| `immediate_response` | `QuestionOption.npcResponse` | 保持可继续游戏，不声明永久离开 | content review |
| `fuzzy_hints` | `feedbackIds` + `feedbackText` | 使用共享方向/强度键，不展示数值 | schema check |
| scene/candidate/behavior/feature/state IDs | companion JSON | 按精确 `question_id`/`scene_id` 绑定 | traceability validator |

## 2. 十题概览

| question | stage | scene / candidate | primary test | feature IDs | conflict IDs | stakes |
|---|---|---|---|---|---|---|
| Q01 | first_meeting | SC01 / C01 | 把安静和参与视为可协商节奏，而非冷淡或好感证明 | F07 | K01 | low |
| Q02 | first_meeting | SC02 / C02 | 一次实际帮助能否保留许可、拒绝和有限范围 | F01、F11 | K02、K12 | low-medium |
| Q03 | contact | SC03 / C08 | 撤回“实际、无聊、没创造力”的类型预设 | F09 | K11 | medium |
| Q04 | contact | SC04 / C07 | 礼物与触碰能否逐项确认，不自动升级关系 | F03 | K03、K13 | medium |
| Q05 | contact | SC05 / C09 | 私人整理与关系可见性之间建立复谈和等待边界 | F04 | K05 | medium-high |
| Q06 | familiarity | SC06 / C10 | 长期默认事务能否按容量与互惠重新分工 | F02 | K04、K10 | high |
| Q07 | familiarity | SC07 / C13 | 稳定安排、探索意愿与分开行动能否并存 | F06 | K07 | medium-high |
| Q08 | familiarity | SC08 / C14 | 冲突暂停能否包含明确返回、最低联系和等待范围 | F04、F05 | K06、K08 | high |
| Q09 | ambiguity | SC09 / C16 | 拒绝由类型或性别默认分配照顾劳动 | F02、F08 | K04、K10 | high |
| Q10 | ambiguity | SC10 / C15 | 把稳定投入拆成好感、约会、排他与可兑现承诺 | F10 | K09、K13 | high |

关系推进从当下参与和一次帮助，进入兴趣、表达与披露，再处理长期责任、变化和冲突修复，最后讨论角色自主与关系定义。没有场景以接受照顾、维持稳定、避免冲突或确认恋爱作为唯一建设性结果。

## 3. 初始效果清单

效果顺序统一为 `attraction / trust / comfort / conflict`；绝对值总和用于预算复核。

| question | option_id | strategy | effects | total abs |
|---|---|---|---|---:|
| Q01 | `q01_name_your_pace` | honest | `0 / 10 / 10 / 0` | 20 |
| Q01 | `q01_join_the_small_table` | accommodate | `10 / 5 / 5 / 0` | 20 |
| Q01 | `q01_demand_proof_of_interest` | risky | `-5 / -15 / -5 / 0` | 25 |
| Q01 | `q01_offer_a_quieter_followup` | negotiate | `5 / 10 / 10 / 0` | 25 |
| Q02 | `q02_turn_help_into_a_role` | risky | `0 / -15 / -10 / 0` | 25 |
| Q02 | `q02_set_the_borrowing_scope` | negotiate | `5 / 15 / 10 / 0` | 30 |
| Q02 | `q02_accept_one_small_help` | accommodate | `10 / 5 / 5 / 0` | 20 |
| Q02 | `q02_decline_without_apology` | honest | `0 / 10 / 10 / 0` | 20 |
| Q03 | `q03_rebuild_the_plan_together` | negotiate | `0 / 10 / 10 / -5` | 25 |
| Q03 | `q03_demand_an_interesting_performance` | risky | `-5 / -15 / -5 / 15` | 40 |
| Q03 | `q03_share_and_ask_real_preferences` | honest | `5 / 10 / 10 / 0` | 25 |
| Q03 | `q03_try_one_of_their_interests` | accommodate | `5 / 5 / 5 / 0` | 15 |
| Q04 | `q04_accept_the_gift_only` | accommodate | `5 / 5 / 5 / 0` | 15 |
| Q04 | `q04_name_your_affection_preferences` | honest | `0 / 10 / 15 / 0` | 25 |
| Q04 | `q04_make_a_check_in_rule` | negotiate | `0 / 15 / 10 / 0` | 25 |
| Q04 | `q04_claim_the_relationship_from_gesture` | risky | `5 / -10 / -20 / 0` | 35 |
| Q05 | `q05_press_for_every_detail_now` | risky | `0 / -10 / -10 / 20` | 40 |
| Q05 | `q05_name_your_waiting_limit` | honest | `0 / 10 / 15 / -5` | 30 |
| Q05 | `q05_accept_the_later_call` | accommodate | `0 / 5 / 10 / -5` | 20 |
| Q05 | `q05_define_urgent_and_later_topics` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q06 | `q06_name_the_imbalance` | confront | `0 / 10 / 10 / -5` | 25 |
| Q06 | `q06_call_help_their_love_language` | risky | `0 / -20 / -5 / 15` | 40 |
| Q06 | `q06_build_a_rotation` | negotiate | `5 / 15 / 10 / -10` | 40 |
| Q06 | `q06_admit_benefit_and_capacity` | honest | `5 / 15 / 10 / -5` | 35 |
| Q07 | `q07_keep_plans_and_go_separately` | accommodate | `5 / 5 / 10 / -5` | 25 |
| Q07 | `q07_make_change_a_loyalty_test` | risky | `-5 / -10 / -5 / 20` | 40 |
| Q07 | `q07_decline_and_keep_curiosity` | honest | `0 / 10 / 10 / -5` | 25 |
| Q07 | `q07_design_a_partial_trial` | negotiate | `10 / 15 / 10 / -5` | 40 |
| Q08 | `q08_block_the_pause` | risky | `0 / -5 / -5 / 20` | 30 |
| Q08 | `q08_confirm_the_return_protocol` | negotiate | `0 / 15 / 10 / -15` | 40 |
| Q08 | `q08_accept_the_clear_pause` | accommodate | `0 / 5 / 10 / -10` | 25 |
| Q08 | `q08_state_your_waiting_boundary` | honest | `0 / 10 / 15 / -5` | 30 |
| Q09 | `q09_admit_your_benefit` | honest | `15 / 15 / 10 / 0` | 40 |
| Q09 | `q09_stop_the_default_assignment` | confront | `10 / 10 / 10 / -10` | 40 |
| Q09 | `q09_use_care_as_a_love_test` | risky | `20 / -10 / -10 / 0` | 40 |
| Q09 | `q09_build_a_capacity_based_roster` | negotiate | `5 / 15 / 10 / -10` | 40 |
| Q10 | `q10_define_the_current_agreement` | negotiate | `15 / 15 / 10 / 0` | 40 |
| Q10 | `q10_state_what_is_not_ready` | honest | `0 / 15 / 10 / -5` | 30 |
| Q10 | `q10_agree_to_everything_unsure` | accommodate | `20 / -20 / 0 / 0` | 40 |
| Q10 | `q10_demand_a_loyalty_guarantee` | risky | `0 / 0 / -20 / 20` | 40 |

## 4. 效果预算复核

- 40 个选项全部使用允许值 `-20 / -15 / -10 / -5 / 0 / 5 / 10 / 15 / 20`。
- 最大四维绝对变化总和为 40；没有超过普通建议值 40，也没有触及硬上限 60。
- 没有选项在三个以上维度使用 `15` 或 `20`，效果预算分析警告为 0。
- 每个选项只在 Stage 03 登记的 `state_ids` 上使用非零变化；运行时对象仍完整提供四维字段。
- 高压行为保留单一主伤害方向：强迫披露与越界主要降低舒适，角色施压主要损害信任或舒适，升级争论主要提高冲突。
- 数值只是 Stage 04 初始假设。只有 Stage 06 使用真实 `applyEffects`、阶段门槛和 `resolveEnding` 完整枚举后，才能判断支配策略、早退比例与结果可达性。

## 5. Set-level QA

| 题号 | stage | primary feature / conflict | strategy-to-position mapping | effect range | response checked | hints checked | humanization checked | 至少两条可信路线 |
|---|---|---|---|---|---|---|---|---|
| Q01 | first_meeting | F07 / K01 | 1=H, 2=A, 3=R, 4=N | 20–25 | pass | pass | pass | 说明节奏；接住话题；约更安静入口 |
| Q02 | first_meeting | F01 / K02 | 1=R, 2=N, 3=A, 4=H | 20–30 | pass | pass | pass | 限定借用；接受一次；直接拒绝 |
| Q03 | contact | F09 / K11 | 1=N, 2=R, 3=H, 4=A | 20–40 | pass | pass | pass | 共同重排；交换兴趣；尝试一次 |
| Q04 | contact | F03 / K03 | 1=A, 2=H, 3=N, 4=R | 20–35 | pass | pass | pass | 只收礼物；说明偏好；逐项约定 |
| Q05 | contact | F04 / K05 | 1=R, 2=H, 3=A, 4=N | 20–40 | pass | pass | pass | 说明等待；接受复谈；拆分信息 |
| Q06 | familiarity | F02 / K04 | 1=C, 2=R, 3=N, 4=H | 25–40 | pass | pass | pass | 承认失衡；建立轮换；说明容量 |
| Q07 | familiarity | F06 / K07 | 1=A, 2=R, 3=H, 4=N | 25–40 | pass | pass | pass | 分开行动；真实拒绝；部分尝试 |
| Q08 | familiarity | F05 / K08 | 1=R, 2=N, 3=A, 4=H | 25–40 | pass | pass | pass | 补全协议；接受暂停；说明等待 |
| Q09 | ambiguity | F08 / K10 | 1=H, 2=C, 3=R, 4=N | 30–40 | pass | pass | pass | 承认受益；叫停默认；重排责任 |
| Q10 | ambiguity | F10 / K09 | 1=N, 2=H, 3=A, 4=R | 30–40 | pass | pass | pass | 建立协议；说明未准备；承认差异 |

缩写：`N=negotiate`、`A=accommodate`、`H=honest`、`R=risky`、`C=confront`。四个主要策略都覆盖了四个显示位置；`confront` 只用于 Q06/Q09 对具体失衡和类型化分工的直接设界。

## 6. 追溯、反馈与内容边界

- 每个运行时问题以精确 `question_id` 绑定一个 Stage 03 `scene_id`；order、stage、candidate、behavior、feature、source、conflict 和 state ID 集由 companion JSON 完整保留。
- 40 个选项均是玩家当下可以执行的行动，不包含 `endingId`、故事停止字段或直接结局选择；严重选项的回应也保持与继续游戏兼容。
- 每个选项引用两条共享模糊反馈键；维度、方向与强度对应其非零效果，玩家可见文案不显示数值。
- Q01/Q02/Q04 的 Stage 03 状态集合不含 `conflict`，因此冲突变化保持 0；Q05/Q06/Q08/Q09 不含 `attraction`，因此吸引变化保持 0。
- 类型标签只在 Q03/Q09/Q10 作为需要核对或拒绝的投射出现；后果来自具体预设、施压、分工或控制行为，而不是四字母本身。
- 接受帮助、礼物、触碰、实际劳动、稳定联系、冲突暂停和讨论未来均不自动等于浪漫兴趣、排他、同意、忠诚或关系成功。
- 玩家可以拒绝帮助、拒绝身体接触、选择不同活动、要求复谈、拒绝照顾角色、维持非排他或承认不兼容；这些行动不因“不够顺从”自动受罚。

## 7. 尚待 Stage 06 验证的平衡风险

- Q01/Q02 的初识正向路线对 `afterQ02` 三个正向门槛支持不同，需要枚举确认显示位置与策略标签没有形成稳定通关捷径。
- Q03/Q04 的 `negotiate` 路线都同时提升三项正向状态，但测试对象分别是计划修正与亲密权限；若数值形成局部支配，应调整幅度而不是合并事件。
- Q05–Q09 多个建设性选项集中提升信任、舒适并降低冲突，可能让中后段的 `negotiate` 获得机械优势；`honest`、`accommodate` 和健康 `confront` 的可行路径需单独检查。
- Q09 不改变吸引，是有意把反角色化判断放在信任、舒适和冲突上；仍需确认它不会因缺少吸引变化而成为最终分类中的系统性劣势。
- Q10 同时保留高吸引但低舒适的顺从路线，以及高信任的真实差异路线，需要验证 `confirmed_relationship`、`friends`、`unresolved_ambiguity` 与风险结果的实际可达性。
- 运行时没有稳定规则 ID 或 applicable-rule 诊断钩子，因此后续规则覆盖与 shadowing 必须保持 `unknown`。

## 8. 自动验收状态

- Stage 03/04 追溯验证已通过：10 个运行时问题、10 条 companion 记录和 10 个正式场景一一对应，完整上游 ID 集一致。
- TypeScript 检查已通过；独立结构与预算检查确认 10 题、40 个唯一选项、80 个反馈引用、最大总幅度 40、预算警告 0、非法效果值 0。
- 仓库级回归已通过：`validate-content` 确认现有九个内容包有效，全类型路径分析成功完成，Vitest 为 14 个文件、77 项测试全部通过，生产构建成功。
- `validate-content` 仍报告现有内容包早已存在的普通预算复核警告，构建仍报告单个 JavaScript chunk 超过 500 kB；两者均为非阻断提示，本轮未修改相关内容。
- ISFJ 尚未注册，因此现有九类型路径分析只证明共享仓库无回归，不能替代 ISFJ 的 Stage 06 全路径枚举。

## 9. Stage 05/06 交接

- Stage 05 可依据固定共享结局 ID、关系评价 ID 和模糊反馈键，为 ISFJ 编写目标特定结局、关系评价和反馈文案；不得修改初始状态、阈值、规则优先级或分类器。
- Stage 06 必须新增 ISFJ 的生产等价适配器，导入 `isfjQuestions` 并调用真实 `applyEffects` / `resolveEnding`，完整枚举 `4^10` 等价路径。
- 在 Stage 05 内容、Stage 06 报告和必要注册改动完成并验证前，不应把 ISFJ 加入可玩类型入口。
