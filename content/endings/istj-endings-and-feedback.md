# ISTJ 结局与反馈审计（Stage 05）

> 状态：Stage 05 文案与 Stage 06 可达性验证均已完成。权威运行时内容位于 [istj-endings.ts](../../src/content/istj-endings.ts)，题目输入为 [istj-questions.ts](../../src/content/istj-questions.ts)。
> 固定边界：本阶段只写结局、关系评价和模糊反馈文案；`src/content/schema.ts` 与 `src/game/rules.ts` 的 ID、kind、状态语义、阈值、优先级和分类方式均保持不变。ISTJ 当前未注册为可玩内容包。

## 1. 运行时投影与内容所有权

| 内容语义 | 权威投影 | Stage 05 处理 | 未处理内容 |
|---|---|---|---|
| 11 个基础结局 | `EndingContent[]` | 填写固定 `id / kind` 对应的 `title / coreCopy / reasonCopy / stateSummary` | 不创建新 ID，不改判定条件 |
| 2 个关系评价 | `RelationshipEvaluationContent[]` | 分别填写 `romance_stable` 与 `romance_hidden_risk` | 不合并完整 outcome |
| 24 个模糊反馈键 | `FuzzyFeedbackContent[]` | 保留固定维度、方向、强度，只写 ISTJ 题目语境中的非数值文案 | 不增加键，不改变 conflict 反向健康语义 |
| 角色依据、敏感性、动作、可达性 | 本审计文档 | 记录行为模型与题目依据、内容护栏和 Stage 06 结果 | 不复制可执行规则，不虚构 runtime rule ID |

结局页继续使用产品已有的重新开始、分享结果和返回类型选择等动作；本阶段不新增 UI 行为。运行时没有稳定 rule ID 或适用规则诊断钩子，因此规则覆盖与 shadowing 保持未知。

## 2. 固定结果覆盖矩阵

`stage06_status` 在本阶段统一为 `pending_unverified`。Stage 05 不依据文案、阈值阅读或直觉猜测可达性。

| ending_id | secondary_result_id | fixed family | production content route | character basis | content complete? | stage06_status |
|---|---|---|---|---|---|---|
| conflict_break | none | global | `istjEndings` | B02/B05/B08–B12；Q05–Q10 | yes | pending_unverified |
| strong_discomfort | none | global | `istjEndings` | B04/B06/B08/B11/B12；Q03/Q04/Q07–Q10 | yes | pending_unverified |
| trust_broken | none | global | `istjEndings` | B01/B02/B05/B10/B11；Q01/Q02/Q05/Q08–Q10 | yes | pending_unverified |
| no_second_meeting | none | stage_gate | `istjEndings` | B01/B02/B13；Q01/Q02 | yes | pending_unverified |
| fade_out | none | stage_gate | `istjEndings` | B04–B07；Q03–Q05 | yes | pending_unverified |
| stay_acquaintances | none | stage_gate | `istjEndings` | B08/B09/B11；Q06–Q08 | yes | pending_unverified |
| strangers_after_all | none | final | `istjEndings` | B08–B12；Q07–Q10 | yes | pending_unverified |
| confirmed_relationship | none | final | `istjEndings` | B04–B12；Q03–Q10 | yes | pending_unverified |
| dangerous_lovers | none | final | `istjEndings` | B06/B10/B12；Q04/Q09/Q10 | yes | pending_unverified |
| friends | none | final | `istjEndings` | B01/B02/B04/B07/B11；Q01–Q04/Q08/Q10 | yes | pending_unverified |
| unresolved_ambiguity | none | final | `istjEndings` | B02/B10/B12；Q02/Q09/Q10 | yes | pending_unverified |
| confirmed_relationship | romance_stable | final | `istjRelationshipEvaluations` | B05/B08–B11；Q05–Q10 | yes | pending_unverified |
| confirmed_relationship | romance_hidden_risk | final | `istjRelationshipEvaluations` | B06/B10/B12；Q04/Q07/Q09/Q10 | yes | pending_unverified |

基础 `endingId` 与可选 `evaluationId` 始终分开保存。`confirmed_relationship:romance_stable` 和 `confirmed_relationship:romance_hidden_risk` 是两个完整 outcome，不能因共享基础结局而合并。

## 3. 结局文案目录

| ending_id | 标题 | 具体互动依据 | 文案与状态摘要重点 | tone / sensitivity |
|---|---|---|---|---|
| conflict_break | 冲突中止关系 | 抹去共同成本、类型羞辱、逼迫继续争论、牺牲测试 | 原问题被防御和服从要求取代，关系因冲突终止 | 坚定；不把冲突归因于类型或诊断 |
| strong_discomfort | 不适终止相处 | 帮助被扩成义务、暂停被阻止、失误引出全面检查 | 说不、犯错和退出空间耗尽，继续接触不再舒适 | 清楚保护边界；不渲染受害细节 |
| trust_broken | 信任破裂告别 | 沉默测试、责任推卸、隐藏限制、说清后继续施压 | 语言与行为反复分离，重要安排和托付被收回 | 严肃；区分好意与实际失信 |
| no_second_meeting | 初见没有下次 | Q01 共同草案与 Q02 简短信号未形成双方下一步 | 普通初识不匹配，不判定任何一方有问题 | 低强度、克制，不灾难化 |
| fade_out | 联系逐渐淡去 | 支持方式、行动信号与已确认安排的影响未得到修复 | 具体邀约退回偶尔问候，联系失去可持续性 | 遗憾但平静 |
| stay_acquaintances | 关系停在熟人 | 反馈影响、暂停返回和犯错修复未积累为亲密基础 | 保留礼貌与共同活动，不再进入私人位置 | 温和、尊重熟人关系价值 |
| strangers_after_all | 最终不再往来 | 到达 Q10 仍缺少足够的信任、舒适或修复基础 | 完成十次互动不覆盖关系恶化，最终退出彼此生活 | 明确结束，不使用命定或惩罚叙事 |
| confirmed_relationship | 双方确认恋爱 | 区分草案与承诺、支持需求、暂停返回、关系逐项确认 | 恋爱来自两个人清楚且可修改的同意 | 温暖、落地，不把稳定等同永久保证 |
| dangerous_lovers | 热恋尚未站稳 | 高吸引推动靠近，但真实限制、拒绝或退出边界仍不稳 | 恋爱成立同时保留信任或舒适风险 | 有张力但不浪漫化控制与不适 |
| friends | 明确成为朋友 | 能说明需要、接受拒绝并修复，但浪漫吸引不足 | 友谊是明确选择，不是恋爱候补 | 肯定、非贬低 |
| unresolved_ambiguity | 暧昧尚无定论 | 好感仍在，排他、联系或投入没有共同答案 | 保持开放但不承诺自动升级 | 留白、诚实，不制造续作保证 |

11 个基础结局标题均为 6 个汉字，单独显示即可识别终止、告别、没有下次、淡出、熟人、不再往来、确认恋爱、未稳恋爱、朋友或未定暧昧等关系状态。

### 关系评价

| evaluation_id | 标题 | badge | 语义与 ISTJ 题目依据 | stage06_status |
|---|---|---|---|---|
| romance_stable | 恋爱稳步落地 | 关系评价：恋爱稳步落地 | 已确认恋爱；双方能区分草案与承诺、说明容量、允许变化并按约修复 | reachable_verified |
| romance_hidden_risk | 恋爱仍有隐患 | 关系评价：恋爱已确认，仍有隐患 | 已确认恋爱；部分答应、帮助和稳定安排尚未经过下一次拒绝或变化检验 | reachable_verified |

## 4. 角色化依据与内容边界

ISTJ 文案只使用行为模型和十题已经建立的互动：把安排当成可修改草案、核对简短信号、先问支持方式、区分行动关心与关系确认、处理已确认安排的共同成本、让事实与措辞影响并列、为暂停约定返回、承认犯错并协商修复、拒绝“忠诚到底”的类型担保，以及逐项定义关系。

以下内容不参与判定，也不作为结局理由：蓝老头、物流师、人机、规则狂、Excel 行程、工作机器、叔叔阿姨、天生保守、固定爱语、永远忠诚、绝对可靠、没有情绪、心理疾病、创伤或依恋类型。Q06/Q08/Q09 的类型标签只作为需要拒绝的羞辱或外部压力，不能直接增减状态或决定结果。

具体敏感性规则：

- 计划、实际帮助、守约、记住细节和简短表达都不能替代好感、同意、排他或关系确认。
- 善意不能为接管问题、扩大帮助义务、强迫即时解决、监视或牺牲测试免责；造成伤害也不自动证明恶意人格。
- `conflict_break`、`strong_discomfort` 和 `trust_broken` 使用坚定语言说明退出原因，但不诊断、不羞辱，也不描写报复。
- `no_second_meeting`、`fade_out` 和 `stay_acquaintances` 保持与低强度结果相称，不把普通不匹配写成创伤、道德失败或“假 ISTJ”。
- `dangerous_lovers` 明确写出关系基础未稳，不把高吸引、永久保证、嫉妒、控制或边界不清包装成更深的爱。
- `friends` 与 `unresolved_ambiguity` 各自保有独立价值；朋友不是降级，未定关系也不是隐形承诺。

## 5. 模糊反馈完整字典

绝对变化 `5`、`10`、`15/20` 分别沿用 `slight`、`medium`、`strong`；零变化不展示该维度提示。每个选项继续只显示 1–2 个最能解释即时后果的键，不向玩家暴露数值。

| hint_key | fixed dimension | fixed raw direction | player meaning | fixed intensity | target-specific copy |
|---|---|---|---|---|---|
| attraction_up_slight | attraction | up | 继续靠近意愿小幅增加 | slight | TA愿意把下一次见面再往前放一点。 |
| attraction_up_medium | attraction | up | 继续靠近意愿明显增加 | medium | TA开始主动为新的共同时间留出位置。 |
| attraction_up_strong | attraction | up | 浪漫发展意愿强烈增加 | strong | TA已经明确想把这段关系继续往浪漫方向推进。 |
| attraction_down_slight | attraction | down | 继续靠近意愿小幅减少 | slight | TA对继续靠近少了一点期待。 |
| attraction_down_medium | attraction | down | 单独邀约与浪漫探索明显减少 | medium | TA开始把单独见面退回普通往来。 |
| attraction_down_strong | attraction | down | 不再愿意把当前互动理解为心动 | strong | TA已经不愿再把你们的互动理解成浪漫发展。 |
| trust_up_slight | trust | up | 愿意增加少量真实托付 | slight | TA愿意把一小部分计划和真实限制交给你讨论。 |
| trust_up_medium | trust | up | 更相信草案、承诺和变化会被区分 | medium | TA开始相信草案、承诺和变化都能被你认真区分。 |
| trust_up_strong | trust | up | 愿意共同处理关键边界与决定 | strong | TA愿意把关键安排、边界和关系决定与你共同确认。 |
| trust_down_slight | trust | down | 对说法或保证产生少量疑问 | slight | TA对这次说法能否兑现留下一点疑问。 |
| trust_down_medium | trust | down | 明显怀疑边界或承诺能否兑现 | medium | TA开始怀疑说清的承诺和边界是否真的有效。 |
| trust_down_strong | trust | down | 撤回重要托付与脆弱信息 | strong | TA把重要安排和脆弱信息从你这里收了回去。 |
| comfort_up_slight | comfort | up | 互动压力小幅降低 | slight | TA说话时少了一点预先防备。 |
| comfort_up_medium | comfort | up | 更能自然表达而不必过度预演 | medium | TA不必把每句话和每个安排都提前解释到底。 |
| comfort_up_strong | comfort | up | 能安全说不、犯错、暂停或改变主意 | strong | TA可以在你面前说不、犯错、暂停或改变主意。 |
| comfort_down_slight | comfort | down | 表达开始略微谨慎 | slight | TA开始为每句话多留一层防线。 |
| comfort_down_medium | comfort | down | 明显缩小互动、帮助和分享范围 | medium | TA开始缩小帮助、分享和共同安排的范围。 |
| comfort_down_strong | comfort | down | 不再愿意暴露真实需要与个人空间 | strong | TA已经不愿再把真实需要和个人空间交进这段相处。 |
| conflict_up_slight | conflict | up | 未解决张力小幅累积 | slight | 一个没说清的定义又留在了你们之间。 |
| conflict_up_medium | conflict | up | 分歧明显升级为拉扯 | medium | 计划、影响和关系含义开始纠缠成拉扯。 |
| conflict_up_strong | conflict | up | 对抗与防御强烈升级 | strong | 对话已经被逼迫、防御和人格攻击占满。 |
| conflict_down_slight | conflict | down | 未解决张力小幅缓和 | slight | 刚才卡住的一处定义稍微松开了。 |
| conflict_down_medium | conflict | down | 承诺、影响和下一步得到明显澄清 | medium | 你们把承诺、影响和下一步重新拆清了。 |
| conflict_down_strong | conflict | down | 僵持显著解除并恢复协作 | strong | 僵持被具体的返回或修复协议接住了。 |

`conflict` 是反向健康维度：数值上升代表未解决张力增加，数值下降才代表改善。文案已按这一方向逐项书写，没有把 `conflict_down` 误写成关系恶化。

## 6. 完整性审计与 Stage 06 结果

- 11 个固定 `EndingId` 各有且仅有一条完整 TypeScript 内容记录，kind 与运行时 schema 一致。
- 2 个固定 `RelationshipEvaluationId` 各有完整内容，并作为两个独立完整 outcome 保留。
- 24 个固定反馈键完整覆盖四维、两个方向和三档强度；文案没有新增或重新解释键语义。
- 11 个基础结局标题与 2 个评价标题均为 4–8 个汉字，且仅看标题即可识别关系结果或评价。
- 结局原因只引用 Q01–Q10 实际可能出现的行为模式，不从四字母推断人格、心理状态或兼容性。
- `src/content/istj-questions.ts` 的 40 个选项仍只改变状态，不含直接结局选择或故事停止字段。
- Stage 05 没有修改 `src/content/packs.ts`、`src/content/content-pack.ts`、`src/game/rules.ts`、`src/content/schema.ts` 或任何选项效果。
- ISTJ 已有生产等价 Stage 06 适配器与双格式报告；11 个基础结局和 12 个完整 outcome 全部验证可达。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 不作推断，继续明确标记为未知。

本阶段自动验收结果：

- ISTJ 定向结构校验通过：10 题、40 个选项、11 个基础结局、2 个关系评价和 24 个反馈键均完整；题目引用的反馈键无缺失，效果预算警告为 0。
- 11 个基础结局标题与 2 个评价标题均为 6 个汉字；Markdown 与 TypeScript 的 24 条反馈文案、维度、方向和强度逐项一致。
- 仓库内容校验、现有九类型全路径分析、14 个测试文件中的 77 项测试和生产构建均通过。
- 内容校验仍显示若干既有内容包的普通预算复核警告；生产构建仍显示单个 JavaScript 分块超过 500 kB。两者均为非阻断提示，本轮未修改相关内容。
- ISTJ 独立枚举覆盖 `4^10 = 1,048,576` 条等价完整路径；现有九类型路径回归仍不包含尚未注册的 ISTJ。

Stage 06 适配器已导入 `istjQuestions`，调用真实 `applyEffects`、`resolveEnding` 并保留完整 outcome key。机器报告位于 `content/questions/istj-balance-report.json`，解释报告位于 `content/questions/istj-balance-report.md`；共享规则未修改，规则 shadowing 因缺少运行时诊断钩子继续标记为未知。
