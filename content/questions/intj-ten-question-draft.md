# INTJ 正式十题（Stage 04 非运行时草案）

> 状态：Stage 06 balanced，2026-08-24。数值已通过真实共享规则的 `4^10` 全路径枚举复核。  
> 权威题目记录：[intj-ten-question-draft.json](intj-ten-question-draft.json)。  
> 上游正式序列：[intj-formal-sequence.json](../traceability/intj-formal-sequence.json)。  
> 逐题与逐选项追踪：[intj-question-traceability.json](../traceability/intj-question-traceability.json)。

INTJ 尚未加入运行时类型路由，因此本阶段使用与 `Question` / `QuestionOption` 相同的字段生成独立草案，并通过 `.mjs` 包装器接受校验；没有覆盖 ENTP 数据，也没有修改共享规则、门槛或结局。

## 1. 运行时字段映射

| semantic field | runtime field / companion artifact | transformation | validator |
|---|---|---|---|
| `question_id` | `Question.id` | 使用 Q01～Q10，并由追踪记录绑定稳定 `scene_id` | 结构检查 + 追踪校验器 |
| `order` / `stage` / `prompt` / `options` | `Question` 同名语义字段 | 原样投影 | `validateContent` |
| `setup` | `Question.scene` | 草案 JSON 使用 runtime 名称 `scene` | `validateContent` |
| `npc_behavior` | `Question.npcQuote` | 使用可观察发言承载 | 结构检查 + 人工审查 |
| `conflict_ids` | `Question.conflictDimensions` | 与 Stage 03 注册表完全一致 | Stage 04 bundled validator |
| `evidence_refs` | `Question.researchRefs` | 仅使用 Stage 01 的 `evidence_source` | 追踪校验器 |
| `author_notes` | `Question.designNote` | 记录主测试、护栏和“待平衡”状态 | 结构检查 |
| `option_id` / strategy / text / effects | `QuestionOption` 对应字段 | 四选项、合法策略、四维合法步长 | `validateContent` + 自定义 QA |
| `immediate_response` | `QuestionOption.npcResponse` | 直接回应当下行动，不承诺永久离开或结束 | 人工一致性审查 |
| `fuzzy_hints` | `feedbackIds` + `feedbackText` | 复用共享 24 键的方向、强度和当前文案 | `validateContent` + 逐键文本检查 |
| scene/candidate/behavior/feature/source/conflict/state IDs | `intj-question-traceability.json` | 以精确 `question_id` 连接，不按显示顺序猜测 | Stage 04 bundled validator |
| 选项 rationale | 追踪 JSON 的 `options` | 以精确 `option_id` 连接 | 逐选项一致性检查 |

## 2. 十题叙事脊柱

| 题目 | 正式场景 | 场景与 TA 的可观察行为 | 玩家主要决定 |
|---|---|---|---|
| Q01 | INTJ-SC01 / C02 | 初次见面聊到周末活动，TA 先询问限制并提出两个可改方案。 | 如何在结构、轻松探索和共同决定之间表达真实条件。 |
| Q02 | INTJ-SC02 / C03 | TA 用简短消息表达正向感受并附上下一次活动链接。 | 如何核对邀请，而不按语气热度替TA判定兴趣。 |
| Q03 | INTJ-SC03 / C05 | TA 针对玩家提过的租房困难，发来可拒绝、标明时效的整理表。 | 如何接住行动关心，并确认它不自动成为告白或债务。 |
| Q04 | INTJ-SC04 / C08 | TA 用原始报告指出玩家引用的证据不足，但保留价值分歧。 | 如何同时处理事实核验、语气影响和关系尊严。 |
| Q05 | INTJ-SC05 / C07 | TA 提前三天说明低联系模式、紧急入口和恢复时间。 | 如何尊重独处，也表达自己的最低可预期需要。 |
| Q06 | INTJ-SC06 / C11 | TA 已解决实际问题，却意识到玩家仍需要情绪支持。 | 如何在倾听、方案、行动和双方容量之间明确需求。 |
| Q07 | INTJ-SC07 / C13 | 争论升级时，TA 请求暂停到明确时间，并保留紧急联系入口。 | 如何保护暂停权，又防止它滑成冷处理或无限等待。 |
| Q08 | INTJ-SC08 / C14 | TA 按时回来，承认伤人语气但不撤回事实判断。 | 如何分别处理事实、影响和下次调整，而非要求立刻翻篇。 |
| Q09 | INTJ-SC09 / C16 | TA 为几个月后的活动暂留两张可退票，明确这不是关系答案。 | 如何回应未来投入，同时确认时间、决定权和关系期待。 |
| Q10 | INTJ-SC10 / C17 | 双方直接讨论排他、公开、联系频率和个人时间。 | 如何给出可拒绝、可协商且能够兑现的关系答案。 |

## 3. 选项与初始效果总览

效果顺序为 `attraction / trust / comfort / conflict`。完整玩家行动、TA 即时反应、模糊提示和设计理由保存在 JSON 与追踪文件中。

| 题目 | 选项位置 1 → 4 | balanced effects |
|---|---|---|
| Q01 | negotiate / honest / accommodate / risky | `q01_share_constraints 10/10/5/-5`<br>`q01_keep_it_loose 5/5/10/0`<br>`q01_follow_the_plan 5/-5/5/0`<br>`q01_say_anything -5/-10/-5/10` |
| Q02 | honest / accommodate / risky / negotiate | `q02_ask_if_invited 10/10/5/0`<br>`q02_receive_link 0/5/10/0`<br>`q02_call_it_cold -10/-5/-10/10`<br>`q02_confirm_logistics 5/10/10/-5` |
| Q03 | accommodate / honest / negotiate / risky | `q03_name_the_help 5/5/10/0`<br>`q03_ask_the_meaning 5/10/5/5`<br>`q03_set_help_rule 5/15/10/-5`<br>`q03_add_more_tasks -5/-10/-15/10` |
| Q04 | confront / honest / negotiate / risky | `q04_attack_the_person -5/-5/-10/20`<br>`q04_separate_tone 0/10/10/-5`<br>`q04_check_together 5/10/5/-10`<br>`q04_post_indirectly -5/-15/-5/15` |
| Q05 | negotiate / accommodate / honest / risky | `q05_set_checkin 5/10/10/-10`<br>`q05_give_full_space 0/0/10/-5`<br>`q05_name_your_limit 5/10/5/5`<br>`q05_keep_testing -5/-5/-15/15` |
| Q06 | accommodate / honest / confront / negotiate | `q06_hide_the_hurt 5/5/-5/5`<br>`q06_ask_for_ten_minutes 10/10/10/-5`<br>`q06_accuse_indifference -5/-5/-10/20`<br>`q06_split_the_support 5/10/15/-10` |
| Q07 | accommodate / honest / negotiate / risky | `q07_accept_pause 0/5/15/-10`<br>`q07_state_deadline 5/10/5/-5`<br>`q07_anchor_return 5/15/10/-10`<br>`q07_force_answer -10/-5/-20/20` |
| Q08 | confront / risky / honest / negotiate | `q08_demand_surrender -10/-10/-15/20`<br>`q08_skip_with_closeness 15/-15/5/5`<br>`q08_not_ready_to_forgive 0/10/5/5`<br>`q08_three_part_repair 5/10/10/-15` |
| Q09 | accommodate / honest / negotiate / risky | `q09_accept_as_activity 20/0/5/0`<br>`q09_define_before_investing 0/10/5/5`<br>`q09_confirm_terms 10/15/10/-5`<br>`q09_announce_commitment -5/-20/-10/15` |
| Q10 | honest / negotiate / risky / accommodate | `q10_state_your_answer 15/15/5/0`<br>`q10_build_agreement 10/15/10/-5`<br>`q10_disappear_test 0/-20/-10/20`<br>`q10_follow_their_terms 5/-10/5/5` |

## 4. 整套 QA

| 题目 | 主特征 | 主冲突 | 至少两条可信路线 | 即时反应 | 提示一致 | 人性化复核 |
|---|---|---|---|---|---|---|
| Q01 | F01 | K02 | 交换条件 / 说明节奏 / 自愿跟随 | 已检查 | 已检查 | 已检查 |
| Q02 | F02 | K01 | 直接确认 / 先接住内容 / 确认下一步 | 已检查 | 已检查 | 已检查 |
| Q03 | F04 | K04 | 接住帮助 / 轻量问明 / 约定帮忙方式 | 已检查 | 已检查 | 已检查 |
| Q04 | F05 | K07 | 分开谈语气 / 共同核对 | 已检查 | 已检查 | 已检查 |
| Q05 | F06 | K06 | 最低联系协议 / 完整留白 / 说明底线 | 已检查 | 已检查 | 已检查 |
| Q06 | F04 | K05 | 有限陪伴 / 分段处理 / 暂时先行动 | 已检查 | 已检查 | 已检查 |
| Q07 | F07 | K06 | 按时停下 / 说明等待边界 / 约定回谈结构 | 已检查 | 已检查 | 已检查 |
| Q08 | F07 | K07 | 分三步修复 / 保留不原谅权利 / 亲近缓和（有代价） | 已检查 | 已检查 | 已检查 |
| Q09 | F08 | K10 | 先接受同行 / 逐项确认 / 投入前说明边界 | 已检查 | 已检查 | 已检查 |
| Q10 | F03 | K10 | 真实回答 / 拆成协议 / 顺应对方（有代价） | 已检查 | 已检查 | 已检查 |

### 自动验收结论

- 题目数、选项数和阶段分配为 `10 / 40 / 2-3-3-2`；Q01～Q10 与 INTJ-SC01～SC10 一一对应。
- 每题恰好四个立即可执行的选项；五种合法策略均使用，且 `negotiate`、`accommodate` 覆盖四种显示位置，`honest`、`risky`、`confront` 也未固定在单一位置。
- 所有效果包含四个状态键，只使用 `-20～20` 的合法五点步长，没有选项超过硬上限 `60`，也没有超过两个高幅维度的警告。
- 每题至少有两条在四维上不可简单支配的可信路线；明显负向路线只表现具体的读心指控、边界测试、人身攻击、强迫、擅自公开或消失测试。
- 每个选项引用 1～2 个共享反馈键；方向、强度和反馈文本已与共享字典逐项一致。
- Bundled traceability validator 已确认题目、追踪记录和正式场景各 10 条，所有上游 ID 集完全一致。

### 已复核的预算警告

| option_id | absolute total | 保留理由 | 主伤害方向 |
|---|---:|---|---|
| `q07_force_answer` | 55 | 明确拒绝暂停并强迫当晚给结论，属于高强度压力行为。 | comfort↓ / conflict↑ |
| `q08_demand_surrender` | 55 | 把道歉扩张成撤回全部观点与永久服从要求。 | conflict↑ / comfort↓ |
| `q09_announce_commitment` | 50 | 未经同意把未来安排公开成关系与纪念日。 | trust↓ |
| `q10_disappear_test` | 50 | 以不知情消失测试替代关系回答。 | trust↓ / conflict↑ |

四项均低于硬上限 60，且各自有明确、集中而非全维最大化的伤害方向；其余 36 个选项均不超过普通建议预算 40。

## 5. 开放风险

- Q01 的结构感要保持为可改方案，不要在后续写作中把TA呈现为必然比玩家更会规划。
- Q02 的简短消息不能变成“冷淡但其实爱得深”的固定密码；不继续见面仍应是正当选择。
- Q03 的表格只是一项场景化帮助，不是 INTJ 固定爱语，也不构成玩家欠下的关系债务。
- Q04 必须允许TA的事实判断本身出错；友好核对不是默认认输。
- Q05 的最低联系需求没有统一正确值，玩家和TA都可以发现彼此不兼容。
- Q07/Q08 有叙事连续性，但后者不能假设玩家一定选择了某个“最佳暂停选项”；只要求TA按场景前提回谈。
- Q09/Q10 不预设确认恋爱或排他是正确结论；拒绝、延后、提出不同节奏和退出都必须能由统一状态规则处理。
- INTJ 结局草案继续复用共享反馈键与文案；任何后续改写都不能改变方向、强度或现有题目映射。

## 6. 平衡交接

Stage 05 结局合同和 Stage 06 平衡报告均已完成。最终机器报告见 [intj-balance-report.json](intj-balance-report.json)，调优前基线见 [intj-balance-baseline.json](intj-balance-baseline.json)。后续若更改任何效果、选项顺序或共享规则，必须重新运行完整枚举。

**本阶段没有新增直接结局字段、没有修改共享规则，也没有把 INTJ 草案接入生产类型路由。**
