# INFJ 正式十题（Stage 04 / 运行时内容）

> 状态：Stage 04 complete；Stage 06 已于 2026-08-24 完成全路径平衡。  
> 权威题目记录：[infj-ten-question-draft.json](infj-ten-question-draft.json)。  
> 上游正式序列：[infj-formal-sequence.json](../traceability/infj-formal-sequence.json)。  
> 逐题与逐选项追踪：[infj-question-traceability.json](../traceability/infj-question-traceability.json)。

INFJ 已通过 `src/content/infj-questions.ts` 接入 `contentPacks.INFJ`。批准后的 JSON 仍是单一内容源，网页运行时直接投影同一份十题数据；没有覆盖其他类型数据，也没有修改共享规则、门槛或结局。

## 1. 运行时字段映射

| semantic field | runtime field / companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 使用 Q01～Q10，并由追踪记录绑定稳定 `scene_id` | `validateContent` + 追踪校验器 |
| `order` / `stage` / `prompt` / `options` | `Question` 同名语义字段 | 原样投影 | `validateContent` |
| `setup` | `Question.scene` | 草案 JSON 使用运行时名称 `scene` | `validateContent` |
| `npc_behavior` | `Question.npcQuote` | 使用可观察发言承载 | 结构检查 + 人工审查 |
| `conflict_ids` | `Question.conflictDimensions` | 与 Stage 03 注册表完全一致 | Stage 04 bundled validator |
| `evidence_refs` | `Question.researchRefs` | 仅使用 Stage 01 的 `evidence_source` | 追踪校验器 |
| `author_notes` | `Question.designNote` | 记录主测试、护栏和待平衡状态 | 结构检查 |
| `option_id` / strategy / text / effects | `QuestionOption` 对应字段 | 四选项、合法策略、四维合法步长 | `validateContent` + 自定义 QA |
| `immediate_response` | `QuestionOption.npcResponse` | 回应当下行动，不宣告永久离开或直接结束 | 人工一致性审查 |
| `fuzzy_hints` | `feedbackIds` + `feedbackText` | 复用共享 24 键的方向、强度和当前文案 | `validateContent` + 逐键文本检查 |
| scene/candidate/behavior/feature/source/conflict/state IDs | `infj-question-traceability.json` | 以精确 `question_id` 连接，不按显示顺序猜测 | Stage 04 bundled validator |
| 选项 rationale | 追踪 JSON 的 `options` | 以精确 `option_id` 连接 | 逐选项一致性检查 |

## 2. 十题叙事脊柱

| 题目 | 正式场景 | 场景与 TA 的可观察行为 | 玩家主要决定 |
|---|---|---|---|
| Q01 | INFJ-SC01 / C02 | 初次见面聊到一本小说，TA询问玩家是否愿意谈个人意义，也允许只聊书。 | 如何在深入、轻松和自愿披露之间说明当下节奏。 |
| Q02 | INFJ-SC02 / C03 | TA注意到玩家变得安静，把理解说成可错假设并允许不解释。 | 如何校正观察，而不把交流变成读心测试。 |
| Q03 | INFJ-SC03 / C05 | TA记得玩家的电脑问题，发来可拒绝的维修资料。 | 如何接住实际帮助，并确认意图与行动边界。 |
| Q04 | INFJ-SC04 / C08 | TA说明近期需要减少社交，但不愿披露涉及他人的细节。 | 如何同时尊重隐私和表达对可预期安排的需要。 |
| Q05 | INFJ-SC05 / C10 | TA事后说明公开玩笑让自己不适，也承认表达有所延迟。 | 如何回应当前边界，而不要求玩家为未说内容读心。 |
| Q06 | INFJ-SC06 / C11 | 长期承担倾听后，TA明确提出容量和互惠需要。 | 如何重做支持结构，而不把共情设为义务。 |
| Q07 | INFJ-SC07 / C12 | 争论升级时，TA提出两小时暂停、必要联系入口和返回时间。 | 如何同时保护处理空间和可预期联系。 |
| Q08 | INFJ-SC08 / C13 | TA按时回来，区分事实、影响、责任和下次调整。 | 如何完成真实修复，而不把返回等同一切已解决。 |
| Q09 | INFJ-SC09 / C17 | TA把真实、成长和深度连接说成愿景，而非玩家必须通过的考试。 | 如何让理想接受现实条件、不匹配和不同节奏。 |
| Q10 | INFJ-SC10 / C16 | TA逐项询问恋爱、排他、联系和独处，不用既有默契替双方作答。 | 如何给出可拒绝、可协商、可兑现的关系答案。 |

## 3. 选项与平衡后效果总览

效果顺序为 `attraction / trust / comfort / conflict`。完整玩家行动、TA 即时反应、模糊提示和设计理由保存在 JSON 与追踪文件中。

| 题目 | 选项位置 1 → 4 | balanced effects |
|---|---|---|
| Q01 | negotiate / accommodate / honest / risky | `q01_share_one_layer 15/0/5/0`<br>`q01_follow_deeper 10/0/-5/0`<br>`q01_keep_it_light 5/0/15/0`<br>`q01_mock_the_question -10/0/-10/0` |
| Q02 | honest / negotiate / risky / accommodate | `q02_name_your_state 0/10/10/-5`<br>`q02_correct_the_method 0/15/5/-5`<br>`q02_make_them_guess 0/-5/0/10`<br>`q02_agree_to_avoid_awkwardness 0/-5/5/5` |
| Q03 | accommodate / honest / negotiate / confront | `q03_receive_the_help 10/5/10/0`<br>`q03_ask_what_it_means 15/10/5/0`<br>`q03_set_a_help_boundary 10/15/10/0`<br>`q03_call_it_a_debt -10/-5/-20/0` |
| Q04 | negotiate / honest / risky / accommodate | `q04_confirm_relevant_facts 0/10/10/-5`<br>`q04_name_your_need 0/10/5/5`<br>`q04_investigate_anyway 0/-15/-5/15`<br>`q04_never_ask_again 0/-5/5/0` |
| Q05 | honest / accommodate / negotiate / confront | `q05_own_the_assumption 0/10/5/-5`<br>`q05_stop_without_discussion 0/0/10/-5`<br>`q05_build_a_signal 0/10/10/-10`<br>`q05_use_the_laugh_as_proof 0/-5/-5/20` |
| Q06 | negotiate / confront / honest / accommodate | `q06_make_support_mutual 0/10/10/-10`<br>`q06_call_it_scorekeeping 0/-5/-5/20`<br>`q06_find_other_support 0/5/5/-5`<br>`q06_never_share_again 0/-10/0/5` |
| Q07 | accommodate / honest / confront / negotiate | `q07_accept_the_pause 0/5/10/-15`<br>`q07_state_your_waiting_limit 0/5/5/-5`<br>`q07_force_an_answer_now 0/0/-20/20`<br>`q07_confirm_the_return 0/5/5/-15` |
| Q08 | honest / negotiate / accommodate / confront | `q08_not_ready_to_forgive 0/10/0/10`<br>`q08_three_part_repair 0/10/10/-15`<br>`q08_skip_to_closeness 0/0/5/5`<br>`q08_demand_total_surrender 0/-5/-5/20` |
| Q09 | negotiate / honest / accommodate / risky | `q09_translate_the_ideal 20/10/5/-5`<br>`q09_state_the_mismatch -10/15/0/5`<br>`q09_echo_the_ideal 20/-10/5/5`<br>`q09_declare_soulmates 20/-10/-5/20` |
| Q10 | honest / accommodate / risky / negotiate | `q10_give_your_answer 20/10/5/0`<br>`q10_follow_their_preference 15/-10/5/5`<br>`q10_claim_default_exclusivity -5/-20/0/15`<br>`q10_build_a_real_agreement 15/10/10/-5` |

## 4. 整套 QA

| 题目 | 主特征 | 主冲突 | 至少两条可信路线 | 即时反应 | 提示一致 | 人性化复核 |
|---|---|---|---|---|---|---|
| Q01 | F01 | K01 | 分享一层 / 坦白想轻松 / 自愿跟随（有代价） | 已检查 | 已检查 | 已检查 |
| Q02 | F07 | K06 | 说明状态 / 校正并约定 / 暂不展开 | 已检查 | 已检查 | 已检查 |
| Q03 | F03 | K04/K05 | 接住帮助 / 询问含义 / 约定帮助边界 | 已检查 | 已检查 | 已检查 |
| Q04 | F02 | K02 | 确认必要事实 / 说明透明需要 / 完整留白（有代价） | 已检查 | 已检查 | 已检查 |
| Q05 | F05 | K07 | 承认误判 / 先停止 / 约定更早信号 | 已检查 | 已检查 | 已检查 |
| Q06 | F05 | K04/K07 | 重做互惠 / 使用其他支持 / 暂时收回（有代价） | 已检查 | 已检查 | 已检查 |
| Q07 | F06 | K08 | 按时停下 / 说明等待底线 / 确认返回协议 | 已检查 | 已检查 | 已检查 |
| Q08 | F05/F06 | K07/K08 | 保留未原谅 / 分段修复 / 暂时缓和（有代价） | 已检查 | 已检查 | 已检查 |
| Q09 | F08 | K09 | 拆解愿景 / 说出不匹配 / 暂时顺应（有代价） | 已检查 | 已检查 | 已检查 |
| Q10 | F04/F08 | K10 | 真实回答 / 逐项协议 / 顺应对方（有代价） | 已检查 | 已检查 | 已检查 |

### 自动验收结论

- 题目数、选项数和阶段分配为 `10 / 40 / 2-3-3-2`；Q01～Q10 与 INFJ-SC01～SC10 一一对应。
- 每题恰好四个立即可执行的选项；五种合法策略均使用，主要策略没有固定在单一显示位置。
- 所有效果包含四个状态键，只使用 `-20～20` 的合法五点步长；没有选项超过硬上限 `60`，也没有超过两个高幅维度的警告。
- 每题至少有两条价值取向或代价不同的可信路线。Stage 06 报告保留了 47 条局部原始效果支配警告；其中多数是明确伤害行为或自我压抑路线，不等于跨题全局支配，后续若改文案或效果必须复验。
- 每个选项引用 1～2 个共享反馈键；方向、强度和反馈文本已与共享字典逐项一致。
- Bundled traceability validator 已确认题目、追踪记录和正式场景各 10 条，所有上游 ID 集完全一致。

### 已复核的预算警告

| option_id | absolute total | 保留理由 | 主伤害方向 |
|---|---:|---|---|
| `q09_declare_soulmates` | 55 | 用命定叙事制造强吸引，同时跳过现实差异与共同决定。 | attraction↑ / conflict↑ |

该项低于硬上限 60，只有两个高幅维度；其余 39 个选项均不超过普通建议预算 40。

## 5. 开放风险

- Q01 的深入问题必须始终可拒绝；轻松聊天不能在后续文案中被写成肤浅或低吸引的固定答案。
- Q02 的观察只是一项待核对假设；任何后续改写都不能让TA凭直觉确认谎言、心理状态或爱意。
- Q03 的整理表只是一项场景化帮助，不是 INFJ 固定爱语，也不构成玩家欠下的关系债务。
- Q04 的隐私范围不应掩盖会影响玩家选择的事实；玩家表达最低透明需要也不是逼迫披露完整故事。
- Q05 必须保留“玩家不为未表达内容读心，但已明确的当前边界有效”这两个责任面。
- Q06 的情绪支持不能变成固定性别角色、心理咨询职责或一方永久沉默；无容量和不匹配都是合法结果。
- Q07/Q08 有叙事连续性，但后者不能假设玩家选择了某个最佳暂停选项；只使用TA按场景前提准时回谈的事实。
- Q09/Q10 不预设确认恋爱或排他是正确结论；拒绝、延后、提出不同节奏和退出都由统一状态规则处理。
- Stage 06 未发现跨题全局策略支配；`negotiate` 的固定策略路径进入稳定恋爱，但显示位置 1～4 分别落入不同结局，不存在固定位置万能答案。

## 6. Stage-05/06 交接

- 权威题目数据为 `infj-ten-question-draft.json`；`src/content/infj-questions.ts` 是网页使用的运行时投影，`infj-ten-question-draft.mjs` 保留为独立校验入口。
- `infj-question-traceability.json` 是 Stage 04 companion record；任何题目 ID、选项 ID、顺序、策略、上游 ID 或效果修改都必须同步并重新校验。
- Stage 05 已复用共享规则完成结局内容与审计契约；Stage 06 已通过真实 `applyEffects`、`resolveEnding` 和 `endingResultKey` 穷举全部 `1,048,576` 条完整路径。
- 基线与最终机器报告分别为 `infj-balance-baseline.json` 和 `infj-balance-report.json`；人工解读见 `infj-balance-report.md`。

**INFJ 十题现已接入生产类型路由；接入没有新增直接结局字段，也没有修改共享规则。**
