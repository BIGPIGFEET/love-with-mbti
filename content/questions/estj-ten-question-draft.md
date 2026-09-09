# ESTJ 正式十题（Stage 04）

> 状态：v1 Stage 06 balanced。运行时题目见 `src/content/estj-questions.ts`，追踪注册见 `content/traceability/estj-question-traceability.json`，全路径报告见 `content/questions/estj-balance-report.json` 与 `.md`。
>
> Stage 06 已在不修改共享阈值、分类优先级或稳定 ID 的前提下完成效果调优与生产等价全路径复核。

## 1. 运行时字段映射

| semantic field | runtime field or companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 保留 Q01～Q10 | TypeScript 结构审计、追踪验证器 |
| `order` / `stage` / `prompt` / `options` | `Question` 同义字段 | 直接投影 | schema 规则与追踪验证器 |
| `setup` | `Question.scene` | 玩家可见场景 | 非空与人工复核 |
| `npc_behavior` | `Question.npcQuote` | 玩家可见 TA 原话 | 非空与人工复核 |
| `conflict_ids` | `Question.conflictDimensions` | 完整保留 | Stage 03 / Stage 04 精确比对 |
| `source_ids` | `Question.researchRefs` | 完整保留 | Stage 03 / Stage 04 精确比对 |
| `scene_id` / `candidate_id` / behavior、feature、state IDs | `estj-question-traceability.json` | 按精确 `question_id` 绑定 | `validate-question-traceability.mjs` |
| `option_id` / `strategy` | `QuestionOption.id` / `strategy` | 直接投影 | 运行时—伴随 JSON 精确比对 |
| `immediate_response` | `QuestionOption.npcResponse` | 玩家可见即时反应 | 非空、继续叙事兼容复核 |
| `fuzzy_hints` | `feedbackIds` + `feedbackText` | 只引用 schema 定义的方向/强度键 | 效果—提示一致性审计 |
| option rationale | 伴随 JSON 的 `options[].rationale` | 非玩家可见 | option ID / strategy 精确比对 |

运行时选项只使用 `id`、`strategy`、`strategyLabel`、`text`、`effects`、`npcResponse`、`feedbackIds`、`feedbackText`。没有直接结局、故事停止或场景替换字段。

## 2. 十题叙事骨架

| question | stage | title | primary decision pressure |
|---|---|---|---|
| Q01 | first_meeting | 先别急着把谁推到前面 | 主动协调能否保留共同决定、拒绝角色和不同参与方式 |
| Q02 | first_meeting | 你想让我怎么陪 | 倾听、方案、实际帮助、空间或不确定能否由当事人说明 |
| Q03 | contact | 计划里要留几个空格 | 计划细度、可调整项和取消条件如何共同确认 |
| Q04 | contact | 接手之后，边界在哪 | 已经发生的接手如何按具体影响重订权限与责任 |
| Q05 | contact | 忙的时候，承诺要缩到多小 | 现实容量、最低联系和复盘时间如何协商 |
| Q06 | familiarity | 事情都做了，为什么还是孤单 | 实际照顾的表达意图与接收方的情感缺口如何并存 |
| Q07 | familiarity | 真话也有不该公开的部分 | 完整反馈造成隐私伤害后如何更正、暂停与修复 |
| Q08 | familiarity | 计划变了，承诺还剩什么 | 外部变化后如何区分承诺核心、形式和合理取消 |
| Q09 | ambiguity | “认定了就不会走” | 忠诚神话和类型投射如何退回真实关系证据与退出权 |
| Q10 | ambiguity | 把我们说清楚 | 好感、继续约会、排他、现实投入和复谈能否逐项定义 |

## 3. 最终选项效果

以下顺序均为 `attraction / trust / comfort / conflict`。所有数值均为 Stage 06 最终生产值，并已由真实 `applyEffects` / `resolveEnding` 完整枚举。

| question | option_id | strategy | effects | absolute total |
|---|---|---|---|---:|
| Q01 | `q01_share_the_coordination` | negotiate | `5 / 10 / 10 / 0` | 25 |
| Q01 | `q01_keep_a_separate_role` | honest | `0 / 10 / 15 / 0` | 25 |
| Q01 | `q01_follow_the_draft` | accommodate | `10 / 5 / 5 / 0` | 20 |
| Q01 | `q01_make_them_the_boss` | risky | `5 / -10 / -10 / 0` | 25 |
| Q02 | `q02_ask_for_listening` | honest | `0 / 10 / 10 / 0` | 20 |
| Q02 | `q02_hand_over_the_problem` | risky | `5 / -20 / -5 / 0` | 30 |
| Q02 | `q02_split_now_and_later` | negotiate | `5 / 15 / 10 / 0` | 30 |
| Q02 | `q02_try_one_practical_step` | accommodate | `5 / 5 / 5 / 0` | 15 |
| Q03 | `q03_accept_the_plan` | accommodate | `10 / 5 / 5 / 0` | 20 |
| Q03 | `q03_mark_fixed_and_flexible` | negotiate | `5 / 15 / 10 / 0` | 30 |
| Q03 | `q03_name_a_looser_pace` | honest | `0 / 10 / 15 / 0` | 25 |
| Q03 | `q03_keep_all_options_open` | risky | `0 / -15 / -10 / 0` | 25 |
| Q04 | `q04_name_the_overreach` | confront | `0 / 10 / 10 / -5` | 25 |
| Q04 | `q04_set_change_permissions` | negotiate | `0 / 15 / 10 / -5` | 30 |
| Q04 | `q04_give_up_all_ownership` | risky | `-5 / -10 / -15 / 0` | 30 |
| Q04 | `q04_take_back_your_part` | honest | `0 / 10 / 15 / 0` | 25 |
| Q05 | `q05_name_your_minimum` | honest | `0 / 10 / 10 / -5` | 25 |
| Q05 | `q05_accept_the_quieter_weeks` | accommodate | `0 / 5 / 10 / 0` | 15 |
| Q05 | `q05_set_a_review_point` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q05 | `q05_demand_total_priority` | risky | `0 / -5 / -10 / 20` | 35 |
| Q06 | `q06_build_a_new_ritual` | negotiate | `10 / 15 / 10 / -5` | 40 |
| Q06 | `q06_admit_the_loneliness` | honest | `5 / 15 / 10 / -5` | 35 |
| Q06 | `q06_erase_their_effort` | risky | `0 / -5 / -15 / 15` | 35 |
| Q06 | `q06_try_one_quiet_evening` | accommodate | `5 / 5 / 10 / -5` | 25 |
| Q07 | `q07_pause_before_details` | honest | `0 / 10 / 15 / -5` | 30 |
| Q07 | `q07_reveal_their_secret_back` | risky | `0 / -10 / -10 / 20` | 40 |
| Q07 | `q07_request_concrete_repair` | confront | `0 / 15 / 10 / -10` | 35 |
| Q07 | `q07_separate_fact_and_privacy` | negotiate | `0 / 15 / 10 / -10` | 35 |
| Q08 | `q08_take_the_simpler_day` | accommodate | `0 / 5 / 10 / -5` | 20 |
| Q08 | `q08_keep_the_core_rebuild_the_form` | negotiate | `0 / 15 / 10 / -5` | 30 |
| Q08 | `q08_cancel_without_pretending` | honest | `0 / 10 / 15 / 0` | 25 |
| Q08 | `q08_force_the_original_shape` | risky | `0 / -5 / -15 / 20` | 40 |
| Q09 | `q09_name_the_pressure` | honest | `10 / 15 / 10 / -5` | 40 |
| Q09 | `q09_claim_the_loyalty_guarantee` | risky | `20 / 0 / -20 / 0` | 40 |
| Q09 | `q09_check_the_real_evidence` | negotiate | `15 / 10 / 10 / -5` | 40 |
| Q09 | `q09_defer_the_public_joke` | accommodate | `15 / -5 / -5 / 5` | 30 |
| Q10 | `q10_define_current_agreement` | negotiate | `20 / 10 / 5 / -5` | 40 |
| Q10 | `q10_state_unready_parts` | honest | `0 / 15 / 10 / -5` | 30 |
| Q10 | `q10_accept_while_unsure` | accommodate | `20 / 0 / -20 / 0` | 40 |
| Q10 | `q10_demand_proof_and_access` | risky | `0 / -10 / -10 / 20` | 40 |

## 4. 效果预算复核

- 40 个选项全部使用 `ALLOWED_EFFECT_VALUES`，且四维字段完整。
- 所有选项绝对变化总和均不超过普通建议上限 40，因此也没有触及硬上限 60。
- 没有选项在三个以上维度使用绝对值 15 或 20；最大值 20 只用于 Q07 的隐私报复冲突、Q10 的明确吸引或强制交出空间。
- 风险选项保留单一主要伤害方向：未经授权主要损害信任/舒适；价值证明与强制主要降低舒适；公开报复主要提高冲突。
- 每个正向场景至少有两条可信路径。`honest`、`negotiate` 和真心愿意的 `accommodate` 都可能有效，最客气的措辞不自动获得最高效果。

## 5. Set-level QA

缩写：`A=accommodate`、`H=honest`、`N=negotiate`、`R=risky`、`C=confront`。

| question | stage | primary feature / conflict | strategy positions | budget range | responses | hints | humanization | credible non-risk approaches |
|---|---|---|---|---|---|---|---|---|
| Q01 | first_meeting | F01 / K01 | N, H, A, R | 20–25 | pass | pass | pass | 共同修改；独立角色；真心接受 |
| Q02 | first_meeting | F05 / K04 | H, R, N, A | 15–30 | pass | pass | pass | 只听；分时支持；一个步骤 |
| Q03 | contact | F02 / K02 | A, N, H, R | 20–30 | pass | pass | pass | 接受安排；标出弹性；松节奏 |
| Q04 | contact | F06 / K05 | C, N, R, H | 25–35 | pass | pass | pass | 具体指出；权限协议；拿回任务 |
| Q05 | contact | F08 / K08 | H, A, N, R | 20–40 | pass | pass | pass | 最低需要；真实体谅；复盘点 |
| Q06 | familiarity | F04 / K04 | N, H, R, A | 20–40 | pass | pass | pass | 新仪式；说明孤独；先试一次 |
| Q07 | familiarity | F03 / K11 | H, R, C, N | 30–40 | pass | pass | pass | 暂停返回；具体修复；信息规则 |
| Q08 | familiarity | F07 / K07 | A, N, H, R | 20–40 | pass | pass | pass | 轻量替代；保留核心；真实取消 |
| Q09 | ambiguity | F10 / K12 | H, R, N, A | 20–40 | pass | pass | pass | 说明压力；核对事实；私下再谈 |
| Q10 | ambiguity | F09 / K10 | N, H, A, R | 35–40 | pass | pass | pass | 当前协议；说明未准备；讨论差异 |

策略没有固定在同一显示位置。`confront` 只在已经发生具体越界、需要直接指出影响的 Q04/Q07 使用；其余题目不为了凑标签强行加入对抗策略。

## 6. 反馈键与人性化检查

- 提示键沿用 schema 的 `<dimension>_<up|down>_<slight|medium|strong>` 词典；`5 / 10 / 15或20` 分别映射 `slight / medium / strong`，零变化不生成提示键。
- 每个选项只展示 1～2 条最关键反馈，方向和强度均与对应效果一致；玩家可见文案不出现分数或设计术语。
- 即时反应只描述 TA 当下的语气、动作或下一步，不宣称永久离开、永久沉默或直接选中结局。
- 人性化处理只改写了 `title`、`scene`、`npcQuote`、`prompt`、选项 `text`、`npcResponse` 与 `feedbackText`；稳定 ID、顺序、阶段、效果和追踪集合以结构化文件为准。

## 7. Stage 06 平衡结论

- Stage 06 已完整枚举 `4^10 = 1,048,576` 条等价完整路径；11 个基础结局和 12 个完整 outcome 均可达。
- Q2/Q5/Q8 条件失败率分别为 `20.000% / 32.745% / 42.243%`，均在项目参考区间内；Q10 分类器到达率为 `27.482%`，也在区间内。
- `negotiate` 不再在十题上全局原始效果支配 `risky`；固定位置和固定策略运行均没有形成通用恋爱捷径。
- Q09 的 F09/F10 只提供要拆解的外部脚本；类型、忠诚神话和“稳定的一对”本身没有数值效果。
- Q10 的四项选择不直接指定恋爱、朋友或分开结局；最终结果只能由共享分类器读取累计状态。
- 全局危险合计和部分 Q10 条件结果仍偏离参考区间，具体证据与保留理由见 `estj-balance-report.md`；未为了追平比例破坏行为含义。

## 8. Stage 05 / 06 交接

1. Stage 05 已为全部稳定结局、两种关系评价和完整模糊反馈键写入 ESTJ 专属文案，且未改变本题效果、共享阈值或分类优先级。
2. Stage 05 已完成完整内容接入；若结局文案或题目效果后续变化，必须重新运行内容验证与 Stage 06 路径分析。
3. Stage 06 已使用真实 `applyEffects` 与 `resolveEnding` 穷举路径，并分别保存截断终局叶占比和等权选择空间占比。
4. 任何效果调整都要同步 `src/content/estj-questions.ts`、本表和后续平衡报告；任何场景替换必须先回到 Stage 03 分配新 `scene_id`。
