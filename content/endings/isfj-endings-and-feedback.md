# ISFJ 结局与反馈审计（Stage 05）

> 状态：Stage 05 文案与 Stage 06 可达性、分布验证均已完成。权威生产兼容内容位于 [isfj-endings.ts](../../src/content/isfj-endings.ts)，题目输入为 [isfj-questions.ts](../../src/content/isfj-questions.ts)。  
> 固定边界：Stage 05 只写结局、关系评价和模糊反馈文案；`src/content/schema.ts` 与 `src/game/rules.ts` 的 ID、kind、状态语义、阈值、优先级和分类方式均保持不变。Stage 06 完成后，ISFJ 已注册为可玩内容包。

## 1. 运行时投影与内容所有权

| 内容语义 | 权威投影 | Stage 05 处理 | 未处理内容 |
|---|---|---|---|
| 11 个基础结局 | `EndingContent[]` | 填写固定 `id / kind` 对应的 `title / coreCopy / reasonCopy / stateSummary` | 不创建新 ID，不改判定条件 |
| 2 个关系评价 | `RelationshipEvaluationContent[]` | 分别填写 `romance_stable` 与 `romance_hidden_risk` | 不合并完整 outcome |
| 24 个模糊反馈键 | `FuzzyFeedbackContent[]` | 保留固定维度、方向、强度，只写 ISFJ 题目语境中的非数值文案 | 不增加键，不改变 conflict 反向健康语义 |
| 角色依据、敏感性、动作、可达性 | 本审计文档 | 记录行为模型与题目依据、内容护栏和 Stage 06 状态 | 不复制可执行规则，不虚构 runtime rule ID |

结局页继续使用产品已有的重新开始、分享结果和返回类型选择等动作；本阶段不新增 UI 行为。运行时没有稳定 rule ID 或适用规则诊断钩子，因此规则覆盖与 shadowing 保持未知。

## 2. 固定结果覆盖矩阵

所有 `stage06_status` 均为 `reachable_verified`；完整路径与终态证据保存在 `content/questions/isfj-balance-report.json`。运行时缺少 rule ID 诊断钩子，因此规则遮蔽仍不推断。

| ending_id | secondary_result_id | fixed family | production content route | character basis | content complete? | stage06_status |
|---|---|---|---|---|---|---|
| conflict_break | none | global | `isfjEndings` | B02/B05–B10/B12；Q04–Q10 | yes | reachable_verified |
| strong_discomfort | none | global | `isfjEndings` | B01/B03/B05/B07/B09/B11/B12；Q01–Q05/Q07–Q10 | yes | reachable_verified |
| trust_broken | none | global | `isfjEndings` | B03/B06/B07/B09/B10/B12；Q02/Q05/Q06/Q08–Q10 | yes | reachable_verified |
| no_second_meeting | none | stage_gate | `isfjEndings` | B01/B03/B12；Q01/Q02 | yes | reachable_verified |
| fade_out | none | stage_gate | `isfjEndings` | B05/B07/B11；Q03–Q05 | yes | reachable_verified |
| stay_acquaintances | none | stage_gate | `isfjEndings` | B04/B06/B09；Q06–Q08 | yes | reachable_verified |
| strangers_after_all | none | final | `isfjEndings` | B02/B06/B09/B10；Q08–Q10 | yes | reachable_verified |
| confirmed_relationship | none | final | `isfjEndings` | B02–B10/B12；Q02–Q10 | yes | reachable_verified |
| dangerous_lovers | none | final | `isfjEndings` | B02/B05/B06/B10；Q04/Q06/Q09/Q10 | yes | reachable_verified |
| friends | none | final | `isfjEndings` | B01/B03–B07/B09/B11/B12；Q01–Q08/Q10 | yes | reachable_verified |
| unresolved_ambiguity | none | final | `isfjEndings` | B02/B05/B06/B10；Q04/Q06/Q09/Q10 | yes | reachable_verified |
| confirmed_relationship | romance_stable | final | `isfjRelationshipEvaluations` | B02–B10/B12；Q02–Q10 | yes | reachable_verified |
| confirmed_relationship | romance_hidden_risk | final | `isfjRelationshipEvaluations` | B02/B05/B06/B09/B10；Q04/Q06/Q08–Q10 | yes | reachable_verified |

基础 `endingId` 与可选 `evaluationId` 始终分开保存。`confirmed_relationship:romance_stable` 和 `confirmed_relationship:romance_hidden_risk` 是两个完整 outcome，不能因共享基础结局而合并。

## 3. 结局文案目录

| ending_id | 标题 | 具体互动依据 | 文案与状态摘要重点 | tone / sensitivity |
|---|---|---|---|---|
| conflict_break | 冲突终止关系 | 强迫披露、打断暂停、照顾义务、永久保证 | 具体问题被逼迫和防御取代，关系因冲突终止 | 坚定；不把冲突归因于类型或诊断 |
| strong_discomfort | 不适终止相处 | 节奏测试、默认照顾、越过触碰与披露边界 | 安心说不的空间耗尽，继续相处不再舒适 | 清楚保护边界；不渲染受害细节 |
| trust_broken | 失信后的告别 | 借用范围、分工、返回或关系承诺没有兑现 | 善意和好感不能替代可靠，重要托付被收回 | 严肃；区分好意与实际失信 |
| no_second_meeting | 初识没有下次 | Q01 参与节奏与 Q02 一次帮助没有形成共同下一步 | 普通初识不匹配，不判断谁不够体贴 | 低强度、克制，不灾难化 |
| fade_out | 联系慢慢淡去 | 兴趣预设、表达边界与披露入口没有形成持续互动 | 具体邀约退回偶尔问候，联系失去方向 | 遗憾但平静 |
| stay_acquaintances | 关系停在熟人 | 长期分工、变化协商、暂停返回基础不足 | 保留礼貌与群体往来，不再进入私人位置 | 温和、尊重熟人关系价值 |
| strangers_after_all | 最终不再往来 | 到达 Q10 仍缺乏信任、舒适或修复基础 | 完成十题不能覆盖关系恶化，最终退出彼此生活 | 明确结束，不使用命定或惩罚叙事 |
| confirmed_relationship | 双方确认恋爱 | 询问需要、逐项同意、重分劳动、按约返回、关系定义 | 恋爱由双方清楚、可兑现且可修改的同意成立 | 温暖、落地，不把稳定等同承诺 |
| dangerous_lovers | 热恋尚未站稳 | 高吸引推动靠近，但真实限制、拒绝或分工仍不稳 | 恋爱成立同时保留信任或舒适风险 | 有张力但不浪漫化控制与自我耗尽 |
| friends | 明确成为朋友 | 能说明需要、接受拒绝与不同步，但浪漫吸引不足 | 友谊是清楚选择，不是恋爱候补 | 肯定、非贬低 |
| unresolved_ambiguity | 暧昧尚无定论 | 好感仍在，排他、投入或个人空间没有共同答案 | 保持开放但不承诺自动升级 | 留白、诚实，不制造续作保证 |

11 个基础结局标题均为 6 个汉字，单独显示即可识别终止、告别、没有下次、淡出、熟人、陌生、确认恋爱、不稳恋爱、朋友或未定暧昧等关系状态。

### 关系评价

| evaluation_id | 标题 | badge | 语义与 ISFJ 题目依据 | stage06_status |
|---|---|---|---|---|
| romance_stable | 恋爱稳步落地 | 关系评价：恋爱稳步落地 | 已确认恋爱；双方能询问需要、说明容量、更新偏好、重新分工并按约返回 | reachable_verified |
| romance_hidden_risk | 恋爱仍有隐患 | 关系评价：恋爱已确认，仍有隐患 | 已确认恋爱；热烈回应、照顾与稳定安排中仍可能藏有未说出的限制 | reachable_verified |

## 4. 角色化依据与内容边界

ISFJ 文案只使用行为模型和十题已经建立的互动：为社交节奏留出选择、帮助前询问、以具体兴趣替代能力标签、礼物与触碰逐项同意、为需要表达设置复谈入口、重订长期事务分工、在稳定中允许变化、让冲突暂停附带明确返回、拒绝照顾者角色，以及把稳定投入拆成现实关系协议。

以下内容不参与判定，也不作为结局理由：小护士、妈咪、奶妈、老好人、最佳伴侣、纯爱、天生忠诚、无聊传感器、高阶/低阶、固定爱语、读心、全能记忆、心理疾病、创伤或依恋类型。Q03/Q09/Q10 的类型话语只作为需要拆解的外部压力，不能直接增减状态或决定结果。

具体敏感性规则：

- 善意不能为未经请求的代办、触碰越界、强迫披露、隐性债务或性别化劳动免责；造成不适也不自动证明恶意人格。
- `conflict_break`、`strong_discomfort` 和 `trust_broken` 使用坚定语言说明退出原因，但不诊断、不羞辱，也不描写报复。
- `no_second_meeting`、`fade_out` 和 `stay_acquaintances` 保持与低强度结果相称，不把普通不匹配写成创伤或失败。
- `dangerous_lovers` 明确写出关系基础未稳，不把高吸引、牺牲、嫉妒、忠诚保证或边界不清包装成更深的爱。
- `friends` 与 `unresolved_ambiguity` 各自保有独立价值；朋友不是降级，未定关系也不是隐形承诺。
- 结局不补写 TA 的性别、职业、家庭角色、政治立场或心理背景，也不把家务、护理和情绪劳动定义为某类人的自然职责。

## 5. 模糊反馈完整字典

绝对变化 `5`、`10`、`15/20` 分别沿用 `slight`、`medium`、`strong`；零变化不展示该维度提示。每个选项继续只显示 1–2 个最能解释即时后果的键，不向玩家暴露数值。

| hint_key | fixed dimension | fixed raw direction | player meaning | fixed intensity | target-specific copy |
|---|---|---|---|---|---|
| attraction_up_slight | attraction | up | 继续靠近意愿小幅增加 | slight | TA给下一次单独见面多留了一点位置。 |
| attraction_up_medium | attraction | up | 继续靠近意愿明显增加 | medium | TA明显更想把真实兴趣和新的共同时间带给你。 |
| attraction_up_strong | attraction | up | 浪漫发展意愿强烈增加 | strong | TA已经不太掩饰想把这段稳定联系发展成恋爱。 |
| attraction_down_slight | attraction | down | 继续靠近意愿小幅减少 | slight | TA对下一次单独见面少了一点期待。 |
| attraction_down_medium | attraction | down | 个人邀约和浪漫探索明显减少 | medium | TA开始把个人邀约收回到普通群体联系。 |
| attraction_down_strong | attraction | down | 不再愿意把当前互动理解为心动 | strong | TA不再愿意把这段靠近理解为恋爱可能。 |
| trust_up_slight | trust | up | 愿意增加少量真实托付 | slight | TA愿意让你知道一项具体需要或限制。 |
| trust_up_medium | trust | up | 更相信拒绝和变化会被尊重 | medium | TA开始相信拒绝帮助或改变计划不会被惩罚。 |
| trust_up_strong | trust | up | 愿意共同处理关键边界与决定 | strong | TA愿意把真实负荷、关键边界和共同决定放进对话。 |
| trust_down_slight | trust | down | 对承诺产生少量疑问 | slight | TA对这次承诺留下了一点疑问。 |
| trust_down_medium | trust | down | 明显怀疑边界或承诺能否兑现 | medium | TA开始怀疑说清范围后是否仍会被尊重。 |
| trust_down_strong | trust | down | 撤回重要托付与脆弱信息 | strong | TA把重要安排和脆弱信息从你这里收了回去。 |
| comfort_up_slight | comfort | up | 互动压力小幅降低 | slight | TA不必为这一点真实偏好多作解释。 |
| comfort_up_medium | comfort | up | 更能自然表达需要和限制 | medium | TA可以自然说出想要、不要或需要准备。 |
| comfort_up_strong | comfort | up | 能安全拒绝角色与要求 | strong | TA不用扮演照顾者，也能安心留在这段相处里。 |
| comfort_down_slight | comfort | down | 表达开始略微谨慎 | slight | TA回应前开始多确认一遍你会不会失望。 |
| comfort_down_medium | comfort | down | 明显缩小互动与帮助范围 | medium | TA开始缩小帮助、分享和靠近的范围。 |
| comfort_down_strong | comfort | down | 不再愿意暴露真实需要 | strong | TA已经不愿再把真实需要放进这段相处。 |
| conflict_up_slight | conflict | up | 未解决张力小幅累积 | slight | 一个没有说开的期待又积了下来。 |
| conflict_up_medium | conflict | up | 分歧明显升级为拉扯 | medium | 帮助、边界和角色分工开始缠成一场拉扯。 |
| conflict_up_strong | conflict | up | 对抗和防御强烈升级 | strong | 对话已经只剩逼迫、防御和互相抵抗。 |
| conflict_down_slight | conflict | down | 未解决张力小幅缓和 | slight | 刚才被默认的那一层责任松动了一点。 |
| conflict_down_medium | conflict | down | 请求、容量和下一步得到明显澄清 | medium | 你们把请求、容量和下一步重新分开了。 |
| conflict_down_strong | conflict | down | 僵持显著解除并恢复协作 | strong | 僵持被返回或重分协议接住，双方终于停下对抗。 |

`conflict` 是反向健康维度：数值上升代表未解决张力增加，数值下降才代表改善。文案已逐项按这一方向书写，没有把 `conflict_down` 误写成关系恶化。

## 6. 完整性审计与 Stage 06 交接

- 11 个固定 `EndingId` 各有且仅有一条完整 TypeScript 内容记录，kind 与运行时 schema 一致。
- 2 个固定 `RelationshipEvaluationId` 各有完整内容，并作为两个独立完整 outcome 保留。
- 24 个固定反馈键完整覆盖四维、两个方向和三档强度；文案没有新增或重解释键语义。
- 11 个基础结局标题与 2 个评价标题均为 4–8 个汉字，且仅看标题即可识别关系结果或评价。
- 结局原因只引用 Q01–Q10 实际可能出现的行为模式，不从四字母推断人格、心理状态或兼容性。
- `src/content/isfj-questions.ts` 的 40 个选项仍只改变状态，不含直接结局选择或故事停止字段。
- Stage 05 未修改 `src/content/packs.ts`、`src/content/content-pack.ts`、`src/game/rules.ts`、`src/content/schema.ts`、ISFJ 题目或选项效果。
- Stage 06 适配器已导入 `isfjQuestions` 并调用真实 `applyEffects`、`resolveEnding` 与完整 outcome key 枚举路径；定向校验脚本另行导入 `isfjEndings`、`isfjRelationshipEvaluations` 和 `isfjFuzzyFeedback` 验证内容闭环。
- 11 个基础结局和 2 个关系评价均已验证可达；路径占比、示例路径、位置/策略检查和效果支配诊断记录在 ISFJ Stage 06 报告中。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 保持未知。

本阶段自动验收结果：

- ISFJ 定向内容校验通过：10 题、40 个选项、11 个基础结局、2 个关系评价和 24 个反馈键均完整；题目引用的反馈键无缺失，文档与 TypeScript 的反馈文案逐字一致。
- 13 个中文标题全部为 6 个汉字；固定 ID、kind、维度、方向和强度与运行时 schema 一致。
- 仓库内容校验、十一个已注册类型的全路径回归、TypeScript 检查、16 个测试文件中的 84 项测试和生产构建均通过。
- 现有内容包仍有早已存在的普通效果预算提示，生产构建仍有一个压缩后 JavaScript 分块超过 500 kB 的非阻塞提示；本轮未修改相关内容。
- ISFJ 的 Stage 06 可达性验证已完成，并已通过 `AVAILABLE_MBTI_TYPES` 与 `contentPacks` 注册到类型选择入口。
