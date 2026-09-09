# ISTJ 正式十题（Stage 04）

- 状态：Stage 04 内容与 Stage 06 效果定稿均已完成；完整结果见 `istj-balance-report.json` 与 `istj-balance-report.md`。
- 日期：2026-09-02
- 运行时问题模块：[istj-questions.ts](../../src/content/istj-questions.ts)
- 上游正式序列：[istj-formal-sequence.json](../traceability/istj-formal-sequence.json)
- 题目追溯表：[istj-question-traceability.json](../traceability/istj-question-traceability.json)
- 接入边界：ISTJ 当前不在可玩类型注册表中；本阶段生成独立运行时题目模块，但不修改 `content-pack.ts`、`packs.ts`、共享规则或现有内容包。

## 1. 运行时字段映射

| semantic field | runtime field or companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 固定为 `Q01`–`Q10`，以精确 ID 关联，不按显示顺序猜测 | `validate-question-traceability.mjs` + 独立结构检查 |
| `order` / `stage` | `Question.order` / `Question.stage` | 精确继承 Stage 03 的 `2/3/3/2` 顺序 | 同上 |
| `setup` | `Question.scene` | 写成具体时间、地点、触发与可观察行动 | TypeScript 检查 + 人工 QA |
| `npc_behavior` | `Question.npcQuote` | 只写 TA 当前可说或可做的内容 | 人工 QA |
| `prompt` | `Question.prompt` | 每题只提出一个当下可执行决定 | 人工 QA |
| conflict IDs | `Question.conflictDimensions` | 精确继承 Stage 03 `conflict_ids` | 追溯检查 |
| source IDs | `Question.researchRefs` | 精确继承 Stage 03 `source_ids` | 追溯检查 |
| design rationale | `Question.designNote` | 保留场景映射并标记效果已完成 Stage 06 定稿 | 结构检查 |
| option semantics | `QuestionOption` 八个允许字段 | 每题四项，策略位置跨题打散 | 结构、预算与人工 QA |
| fuzzy hints | `feedbackIds` / `feedbackText` | 由非零效果的方向及 `5/10/15–20` 强度确定 | 反馈一致性检查 |
| `scene_id` / `candidate_id` / behavior / feature / state IDs | `istj-question-traceability.json` | 以 `question_id` 为键完整保留 | 追溯验证器 |

## 2. 十题叙事骨架

| 题号 | 阶段 | 标题 | 决策核心 |
|---|---|---|---|
| Q01 | first_meeting | 先把草案摆在桌面上 | 结构化安排能否保留修改、拒绝和共同决定权 |
| Q02 | first_meeting | 字少不替关系作答 | 简短表达能否通过核对与沟通规则减少误读 |
| Q03 | contact | 先问这次需要哪一种帮忙 | 倾听、分析、实际协助和暂停由谁决定 |
| Q04 | contact | 事情解决了，信号还要说清 | 行动型关心、言语确认与关系定义如何拆开 |
| Q05 | contact | 变化要落到实际影响上 | 草案、变故和已确认承诺怎样按实际成本处理 |
| Q06 | familiarity | 事实和措辞要分开处理 | 事实问题、措辞影响和下一步请求能否并列讨论 |
| Q07 | familiarity | 暂停要带着返回条件 | 调节空间、返回时间、必要联系和等待边界如何协商 |
| Q08 | familiarity | 可靠也包括承认没做到 | TA 犯错后如何说明影响、补救并重建信任 |
| Q09 | ambiguity | 忠诚不是类型附带的保证书 | “忠诚到底”脚本能否退回互惠、修改和退出权 |
| Q10 | ambiguity | 把关系拆成今天能回答的部分 | 好感、约会、排他、投入和复谈如何逐项定义 |

## 3. Stage 06 定稿选项效果

以下数值已通过真实 `applyEffects`、阶段门槛和 `resolveEnding` 的 `4^10` 完整路径枚举定稿。顺序为 `吸引 / 信任 / 舒适 / 冲突`；总幅度为四轴绝对值之和。

| 题号 | 选项 | 策略 | 效果 | 总幅度 |
|---|---|---|---:|---:|
| Q01 | `q01_adjust_the_draft` | negotiate | `0 / 10 / 10 / 0` | 20 |
| Q01 | `q01_choose_a_real_option` | accommodate | `15 / 5 / 5 / 0` | 25 |
| Q01 | `q01_offer_another_time` | honest | `0 / 10 / 10 / 0` | 20 |
| Q01 | `q01_shift_all_responsibility` | risky | `0 / -15 / -5 / 0` | 20 |
| Q02 | `q02_test_with_silence` | risky | `-5 / -10 / -10 / 0` | 25 |
| Q02 | `q02_name_context_need` | honest | `5 / 10 / 10 / 0` | 25 |
| Q02 | `q02_accept_current_pace` | accommodate | `15 / 5 / 5 / 0` | 25 |
| Q02 | `q02_set_a_signal_rule` | negotiate | `5 / 15 / 10 / 0` | 30 |
| Q03 | `q03_request_listening` | honest | `0 / 10 / 15 / 0` | 25 |
| Q03 | `q03_demand_full_rescue` | risky | `-5 / -10 / -15 / 0` | 30 |
| Q03 | `q03_split_support_steps` | negotiate | `5 / 10 / 10 / 0` | 25 |
| Q03 | `q03_accept_one_task` | accommodate | `0 / 5 / 5 / 0` | 10 |
| Q04 | `q04_receive_the_action` | accommodate | `15 / 5 / 5 / 0` | 25 |
| Q04 | `q04_ask_for_words` | honest | `0 / 10 / 10 / -5` | 25 |
| Q04 | `q04_map_preferred_signals` | negotiate | `0 / 15 / 10 / -5` | 30 |
| Q04 | `q04_turn_help_into_a_claim` | risky | `0 / -10 / -15 / 10` | 35 |
| Q05 | `q05_call_them_inflexible` | risky | `0 / -10 / -10 / 20` | 40 |
| Q05 | `q05_separate_drafts_and_promises` | confront | `0 / 10 / 5 / -5` | 20 |
| Q05 | `q05_admit_current_capacity` | honest | `0 / 15 / 10 / -5` | 30 |
| Q05 | `q05_repair_and_set_confirmation` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q06 | `q06_name_fact_and_impact` | confront | `0 / 10 / 10 / -5` | 25 |
| Q06 | `q06_return_a_type_insult` | risky | `0 / -5 / -10 / 20` | 35 |
| Q06 | `q06_admit_hurt_and_pause` | honest | `0 / 10 / 15 / -5` | 30 |
| Q06 | `q06_rebuild_the_feedback` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q07 | `q07_force_the_argument` | risky | `0 / -5 / -15 / 20` | 40 |
| Q07 | `q07_confirm_return_details` | negotiate | `0 / 15 / 10 / -15` | 40 |
| Q07 | `q07_accept_the_pause` | accommodate | `0 / 5 / 10 / -10` | 25 |
| Q07 | `q07_name_waiting_limit` | honest | `0 / 10 / 15 / -5` | 30 |
| Q08 | `q08_accept_the_repair` | accommodate | `0 / 5 / 10 / -5` | 20 |
| Q08 | `q08_say_trust_was_hurt` | honest | `0 / 10 / 10 / -5` | 25 |
| Q08 | `q08_attack_the_type_identity` | risky | `0 / -15 / -5 / 20` | 40 |
| Q08 | `q08_choose_repair_and_prevention` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q09 | `q09_reject_the_loyalty_script` | honest | `5 / 15 / 10 / -5` | 35 |
| Q09 | `q09_demand_unconditional_proof` | risky | `20 / -20 / 0 / 0` | 40 |
| Q09 | `q09_compare_real_commitments` | negotiate | `10 / 15 / 10 / -5` | 40 |
| Q09 | `q09_leave_the_joke_for_later` | accommodate | `15 / -5 / 5 / 5` | 30 |
| Q10 | `q10_define_current_agreement` | negotiate | `20 / 5 / 5 / -10` | 40 |
| Q10 | `q10_state_unready_parts` | honest | `0 / 15 / 10 / -5` | 30 |
| Q10 | `q10_accept_everything_unsure` | accommodate | `20 / -15 / -5 / 0` | 40 |
| Q10 | `q10_require_sacrifice` | risky | `0 / -15 / -5 / 20` | 40 |

## 4. 效果预算复核

- 40 个选项全部使用允许值 `-20 / -15 / -10 / -5 / 0 / 5 / 10 / 15 / 20`。
- 所有选项总幅度均不超过普通建议值 40，因此没有超过 40 的复核警告，也没有触及硬上限 60。
- 没有选项在三个以上维度使用 `15` 或 `20`；高压行为保持一条主要伤害方向：责任推卸主要降低信任，施压主要降低舒适，羞辱与逼迫主要提高冲突。
- 每题只在 Stage 03 登记的 `state_ids` 上使用非零效果；运行时对象仍完整提供四维字段。
- Stage 06 最终报告确认 11 个基础结局与 12 个完整 outcome 全部可达；40 个选项仍无预算警告。

## 5. Set-level QA

| 题号 | stage | primary feature / conflict | strategy-to-position mapping | effect range | response checked | hints checked | humanization checked | 至少两条可信路线 |
|---|---|---|---|---|---|---|---|---|
| Q01 | first_meeting | F01 / K01 | 1=N, 2=A, 3=H, 4=R | 20–25 | pass | pass | pass | 修改草案；真实选择；另提时间 |
| Q02 | first_meeting | F05 / K04 | 1=R, 2=H, 3=A, 4=N | 20–30 | pass | pass | pass | 说明语境需要；接受当前节奏；约定重要信号 |
| Q03 | contact | F04 / K03 | 1=H, 2=R, 3=N, 4=A | 15–30 | pass | pass | pass | 请求倾听；拆分步骤；接受有限协助 |
| Q04 | contact | F03 / K05 | 1=A, 2=H, 3=N, 4=R | 20–35 | pass | pass | pass | 接住行动；请求言语；协商表达方式 |
| Q05 | contact | F01 / K01 | 1=R, 2=C, 3=H, 4=N | 20–40 | pass | pass | pass | 区分草案；承认容量；补偿并重订规则 |
| Q06 | familiarity | F05 / K07 | 1=C, 2=R, 3=H, 4=N | 25–35 | pass | pass | pass | 指出影响；短暂停顿；重建反馈结构 |
| Q07 | familiarity | F06 / K06 | 1=R, 2=N, 3=A, 4=H | 25–40 | pass | pass | pass | 补全返回协议；接受暂停；说明等待上限 |
| Q08 | familiarity | F09 / K08 | 1=A, 2=H, 3=R, 4=N | 20–40 | pass | pass | pass | 接受补救；说明信任受损；协商预防 |
| Q09 | ambiguity | F08 / K09 | 1=H, 2=R, 3=N, 4=A | 30–40 | pass | pass | pass | 拒绝类型担保；核对现实承诺；暂离公开压力 |
| Q10 | ambiguity | F01 / K12 | 1=N, 2=H, 3=A, 4=R | 30–40 | pass | pass | pass | 建立当前协议；说明未准备部分；讨论不兼容 |

缩写：`N=negotiate`、`A=accommodate`、`H=honest`、`R=risky`、`C=confront`。四个主要策略都出现在第 1–4 位；`confront` 只在 Q05/Q06 用于针对具体责任或措辞的健康边界表达。

## 6. 追溯、反馈与内容边界

- 每个运行时问题以精确 `question_id` 绑定一个 Stage 03 `scene_id`；order、stage、candidate、behavior、feature、source、conflict 和 state ID 集由 companion JSON 完整保留。
- 40 个选项均是玩家当下可以执行的行动，不包含 `endingId`、故事停止字段或直接结局选择；即时回应保持与继续游戏兼容。
- 每个选项引用两条模糊反馈。反馈维度、方向与强度严格对应非零效果，玩家可见文本不展示数值。
- Q01–Q03 的 Stage 03 状态集合不含 `conflict`，对应冲突变化保持为 0；Q05–Q08 不含 `attraction`，对应吸引变化保持为 0。
- 类型标签只在 Q06、Q08、Q09 作为需要拒绝的投射或羞辱出现；后果来自具体行为对信任、舒适和冲突的影响，而不是标签本身。
- 接受帮助、简短回复、计划一致、暂停返回、可靠修复或讨论未来均不自动等于浪漫、排他、同意或关系确认。

## 7. Stage 06 平衡结论

- Q2、Q5、Q8 的合格路径条件失败率分别为 `20.000% / 33.791% / 44.742%`，均在项目参考区间内。
- Q10 分类器到达率为 `25.763%`；危险恋人和朋友的 Q10 条件占比在区间内，确认恋爱略高，陌生与未定关系保留有证据的偏差。
- 四个固定位置分别落到 `no_second_meeting / stay_acquaintances / unresolved_ambiguity / fade_out`，没有统一位置捷径。
- 分析器报告 42 对逐题原始效果局部支配，但没有跨十题的全局策略支配；这些向量警告不等于叙事选项可互换。
- 运行时仍无稳定规则 ID 和 applicable-rule 诊断钩子，因此规则覆盖与 shadowing 明确保持 `unknown`。

## 8. 自动验收状态

- 已通过 Stage 03/04 追溯验证：10 个运行时问题、10 条 companion 记录、10 个正式场景一一对应，完整上游 ID 集一致。
- 已通过独立结构与预算检查：10 题、40 个唯一选项、80 个反馈引用；最大总幅度 40，预算警告 0，高强度多轴警告 0。
- 已确认四个主要策略均覆盖四个显示位置，`confront` 覆盖两个位置；选项策略和 companion 理由逐项一致。
- 仓库级回归已通过：`validate-content` 确认现有九个内容包有效；全类型路径分析成功完成；Vitest 为 14 个文件、77 项测试全部通过；生产构建成功。
- `validate-content` 仍报告若干现有内容包早已存在的普通预算复核警告，构建仍报告单个 JavaScript chunk 超过 500 kB；两者均为非阻断提示，本轮未修改相关内容。
- ISTJ 独立 Stage 06 适配器与报告已经完成；ISTJ 尚未注册，因此现有九类型生产回归仍不包含它。

## 9. Stage 06 完成与接入边界

- Stage 05 文案和 Stage 06 平衡均已完成；适配器导入 `istjQuestions` 并调用真实 `applyEffects` / `resolveEnding`，完整枚举 `4^10` 等价路径。
- 本阶段没有修改共享初始状态、阈值、规则优先级、分类器或稳定 ID。
- ISTJ 仍未加入 `content-pack.ts` 与 `packs.ts`；正式接入可玩入口需要单独执行并验证。
