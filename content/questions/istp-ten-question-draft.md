# ISTP 十题问题草案（Stage 04）

> 状态：Stage-04 production-shaped draft，已由 Stage-06 平衡报告接收。运行时权威题目为 [`src/content/istp-questions.ts`](../../src/content/istp-questions.ts)，上游锁定序列为 [`istp-formal-sequence.md`](../scenes/istp-formal-sequence.md)，逐题追溯与选项理由为 [`istp-question-traceability.json`](../traceability/istp-question-traceability.json)。
> 集成状态：ISTP 已注册到 `AVAILABLE_MBTI_TYPES` 与 `contentPacks`；Stage-06 机器报告为 [`istp-balance-report.json`](istp-balance-report.json)，审计报告为 [`istp-balance-report.md`](istp-balance-report.md)。

## 1. 运行时映射

| semantic field | runtime field / companion artifact | transformation | validator |
|---|---|---|---|
| question_id / order / stage | `Question.id / order / stage` | 保持 `Q01-Q10` 与 2/3/3/2 阶段分配 | `validateContent` 结构规则 + traceability validator |
| setup | `Question.scene` | 写成具体地点、时间、触发与可见动作 | 人工字段检查 |
| npc_behavior | `Question.npcQuote` | 用一句可观察的 TA 原话承载 | 非空结构检查 |
| prompt | `Question.prompt` | 每题只问一个当下决定 | 人工问题检查 |
| conflict_ids | `Question.conflictDimensions` | 原样投影 Stage-03 冲突 ID | traceability exact-set 检查 |
| evidence_refs | `Question.researchRefs` | 原样投影合格来源 ID | traceability exact-set 检查 |
| author_notes | `Question.designNote` | 保存阶段护栏与初值状态 | 人工检查 |
| option_id / strategy / text / effects | `QuestionOption` 对应字段 | 四项可立即执行的行动；策略位置跨题变化 | schema、预算与策略检查 |
| immediate_response | `QuestionOption.npcResponse` | 写当下社会后果，不直接结束故事 | 人工续写兼容检查 |
| fuzzy_hints | `feedbackIds` + `feedbackText` | 按非零效果映射维度、方向和强度 | effect-to-hint 确定性检查 |
| scene / candidate / behavior / feature / state IDs | `istp-question-traceability.json` | 以精确 `question_id` 连接 Stage-03 JSON | bundled traceability validator |
| option rationale | `istp-question-traceability.json.options` | 以精确 `option_id` 保存非玩家可见理由 | runtime/companion 一对一检查 |

## 2. 题目脊柱与策略位置

| 题目 | scene / candidate | primary test | 选项策略位置 1 → 4 |
|---|---|---|---|
| Q01 | ISTP-SC01 / ISTP-C02 | 短句与沟通节奏，不把沉默当关系答案 | accommodate / negotiate / risky / honest |
| Q02 | ISTP-SC02 / ISTP-C03 | 修正机械师与酷孤狼投射 | honest / risky / negotiate / confront |
| Q03 | ISTP-SC03 / ISTP-C05 | 排错协作中的操作权与隐私 | negotiate / accommodate / honest / risky |
| Q04 | ISTP-SC04 / ISTP-C07 | 具体帮助与意图确认 | risky / honest / negotiate / accommodate |
| Q05 | ISTP-SC05 / ISTP-C10 | 个人空间、共同时间与可靠安排 | honest / confront / accommodate / negotiate |
| Q06 | ISTP-SC06 / ISTP-C13 | 专注分享与共同注意 | negotiate / accommodate / confront / honest |
| Q07 | ISTP-SC07 / ISTP-C11 | 直接反馈的意图、影响与承担 | accommodate / honest / confront / negotiate |
| Q08 | ISTP-SC08 / ISTP-C12 | 私人处理、有期限暂停与返回 | negotiate / confront / honest / accommodate |
| Q09 | ISTP-SC09 / ISTP-C18 | 回谈是否形成可验证修复 | honest / accommodate / negotiate / confront |
| Q10 | ISTP-SC10 / ISTP-C17 | 关系、空间、联系与排他的逐项确认 | accommodate / negotiate / confront / honest |

## 3. 选项、预算与反馈 QA

- 10 题均有 4 个立即可执行且行动含义不同的选项；`accommodate / honest / negotiate / risky / confront` 五种合法策略均有使用，且没有固定在同一显示位置。
- 所有效果只使用 `-20、-15、-10、-5、0、5、10、15、20`。39 个普通选项的四维绝对变化不超过建议上限 40。
- `q08_force_now` 的 Stage-06 最终绝对变化总和为 40：玩家明确拒绝已经给出时间和返回承诺的暂停，属于严重施压，最终效果为 `attraction 0 / trust -5 / comfort -20 / conflict +15`；没有超过硬上限 60。
- 负面行为保持主要伤害方向：否定异议优先伤害信任，逼迫继续谈优先伤害舒适并升高冲突，贬低或反击优先升高冲突。没有通过四轴同时重罚来制造危险选项。
- `feedbackIds` 只引用四个状态的 `up/down × slight/medium/strong` 字典：绝对值 5 对应 `slight`、10 对应 `medium`、15 或 20 对应 `strong`。每项提示都对应同一选项中方向一致的非零效果。
- 所有 `npcResponse` 只说明即时语气、动作或后续安排。严重选项可以让互动恶化，但没有写永久离开、永久失联、直接结局或故事停止。

## 4. 人性化与表征检查

- 玩家可见文本使用地铁同行、订票报错、转接头、周末安排、夜景样片、旅行说明和约定回谈等具体情境，没有把“排错、专注、少言”写成抽象设计术语。
- Q02 的 F09 只由玩家投射触发；TA 拒绝标签不会自动产生分数，效果来自玩家之后是否继续否定或愿意修正。
- Q03 允许求助客服、排错失败和不交出账号，避免把 TA 写成万能修理者。Q06 使用摄影试错，但明确允许玩家不懂、不感兴趣或只询问个人意义。
- Q04 的行动关心是该角色已经表现的个体偏好。Q10 只把它当既有背景，仍要求双方明确说明关系、空间、联系、排他和公开边界。
- Q07-Q09 分别测试指出影响、有期限暂停和验证修复；选项不把直率、沉默、追问、快速原谅或无限期等待浪漫化。
- 人性化只改变了场景、台词、选项和即时反应的表达，没有改变 Stage-03 的 question/scene/candidate、行为、特征、来源、冲突或状态 ID。

## 5. 未决平衡风险

- Stage-06 已用真实 `applyEffects`、阶段门槛和结局解析枚举完整空间：11 个基础结局与 12 个完整结果均可达；全局危险合计低于参考区间，朋友偏少、未定偏多，详见平衡报告中的保留偏差说明。
- 最终局部支配分析有 47 对，`negotiate` 没有跨题全局支配；局部支配项均保留可观察的行为差异，不能把简单四维求和当作最终效用。
- Q07-Q09 是有意的连续修复弧，效果需要验证玩家在此前积累较低 trust/comfort 时是否仍有恢复空间，也要防止三题最佳路径过度同质。
- Q04 与 Q10 两次触及 F05 是“先建立角色个体事实、后明确关系含义”的连续设计，不代表 ISTP 普遍以行动表达爱；若后续审阅认为权重仍过高，应按 Stage-03 的成对替换指导重开场景锁定。
- Stage-06 适配器和刷新脚本已固定在 `.codex/skills/06-balance-choice-game-paths/scripts/` 与 `scripts/refresh-istp-balance-report.mjs`；后续修改题目效果、选项顺序或共享规则时必须重新生成报告。

## 6. Stage-05/06 交接

- Stage 05 已补齐全部稳定结局、两种关系评价和 24 个模糊反馈 ID 的目标化文案，并完成运行时注册。
- Stage 06 已通过真实适配器枚举 `4^10` 完整选择空间，报告阶段早退、完整结局、策略优势、预算警告和保留偏差。
- 平衡阶段没有修改结束选择器、阶段阈值、全局阈值、规则优先级或共享规则。
