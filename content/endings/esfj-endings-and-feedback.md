# ESFJ 结局与反馈审计（Stage 05）

> 状态：Stage 05 文案与 Stage 06 可达性、分布验证均已完成。权威生产内容位于 [esfj-endings.ts](../../src/content/esfj-endings.ts)，题目输入为 [esfj-questions.ts](../../src/content/esfj-questions.ts)，完整路径证据见 [esfj-balance-report.json](../questions/esfj-balance-report.json)。  
> 固定边界：Stage 05 只写结局、关系评价和模糊反馈文案；src/content/schema.ts 与 src/game/rules.ts 的 ID、kind、状态语义、阈值、优先级和分类方式均保持不变。Stage 06 完成后，ESFJ 已注册为可玩内容包。

## 1. 运行时投影与内容所有权

| 内容语义 | 权威投影 | Stage 05 处理 | 未处理内容 |
|---|---|---|---|
| 11 个基础结局 | EndingContent[] | 填写固定 id / kind 对应的 title / coreCopy / reasonCopy / stateSummary | 不创建新 ID，不改判定条件 |
| 2 个关系评价 | RelationshipEvaluationContent[] | 分别填写 romance_stable 与 romance_hidden_risk | 不合并完整 outcome |
| 24 个模糊反馈键 | FuzzyFeedbackContent[] | 保留固定维度、方向、强度，只写 ESFJ 题目语境中的非数值文案 | 不增加键，不改变 conflict 的反向健康语义 |
| 角色依据、敏感性、动作、可达性 | 本审计文档 | 记录行为模型与题目依据、内容护栏和 Stage 06 状态 | 不复制可执行规则，不虚构 runtime rule ID |

结局页继续使用产品已有的重新开始、分享结果和返回类型选择等动作；本阶段不新增 UI 行为。运行时没有稳定 rule ID 或适用规则诊断钩子，因此规则覆盖与 shadowing 保持 unknown。

## 2. 固定结果覆盖矩阵

所有 stage06_status 均为 reachable_verified；每个完整 outcome 的示例路径和终态保存在 ESFJ 平衡报告中。

| ending_id | secondary_result_id | fixed family | production content route | character basis | content complete? | stage06_status |
|---|---|---|---|---|---|---|
| conflict_break | none | global | esfjEndings | B01/B02/B04–B06/B08；Q01–Q10 | yes | reachable_verified |
| strong_discomfort | none | global | esfjEndings | B01/B03/B05/B07/B08；Q01/Q02/Q04/Q06–Q10 | yes | reachable_verified |
| trust_broken | none | global | esfjEndings | B02/B04/B06/B08；Q03/Q05–Q10 | yes | reachable_verified |
| no_second_meeting | none | stage_gate | esfjEndings | B01/B05；Q01/Q02 | yes | reachable_verified |
| fade_out | none | stage_gate | esfjEndings | B04/B06/B07；Q03–Q05 | yes | reachable_verified |
| stay_acquaintances | none | stage_gate | esfjEndings | B02/B03/B06/B08；Q06–Q08 | yes | reachable_verified |
| strangers_after_all | none | final | esfjEndings | B02/B04/B05/B08；Q09/Q10 | yes | reachable_verified |
| confirmed_relationship | none | final | esfjEndings | B01–B08；Q01–Q10 | yes | reachable_verified |
| dangerous_lovers | none | final | esfjEndings | B02/B04/B05/B08；Q07/Q09/Q10 | yes | reachable_verified |
| friends | none | final | esfjEndings | B01/B03/B05–B08；Q01–Q08/Q10 | yes | reachable_verified |
| unresolved_ambiguity | none | final | esfjEndings | B02/B04/B05/B08；Q07/Q09/Q10 | yes | reachable_verified |
| confirmed_relationship | romance_stable | final | esfjRelationshipEvaluations | B01–B08；Q01–Q10 | yes | reachable_verified |
| confirmed_relationship | romance_hidden_risk | final | esfjRelationshipEvaluations | B02–B05/B08；Q05/Q07–Q10 | yes | reachable_verified |

基础 endingId 与可选 evaluationId 始终分开保存。confirmed_relationship:romance_stable 和 confirmed_relationship:romance_hidden_risk 是两个完整 outcome，不能因共享基础结局而合并。

## 3. 结局文案目录

| ending_id | 标题 | 具体互动依据 | 文案与状态摘要重点 | tone / sensitivity |
|---|---|---|---|---|
| conflict_break | 冲突终止关系 | 故意失联、否定安全信息、公开替人决定、把照顾变成关系债务 | 具体分歧被测试与防御取代，关系因冲突终止 | 坚定；不诊断人格 |
| strong_discomfort | 不适终止相处 | 默认接受帮助、排斥朋友、贬低兴趣、压缩退出和拒绝空间 | TA收回邀请与分享，继续相处不再自在 | 清楚保护边界；不渲染伤害 |
| trust_broken | 失信后的告别 | 购票承诺、回复窗口、任务分工和公开口径没有兑现 | 口头答应不能替代可靠行动，重要托付被收回 | 严肃；区分热情与可靠 |
| no_second_meeting | 初识没有下次 | Q01 雨天帮助和 Q02 朋友局没有形成共同下一步 | 普通初识没有延续，不评价谁不够体贴 | 低强度、克制 |
| fade_out | 联系渐渐淡去 | Q03 预订、Q04 兴趣清单、Q05 联系节奏没有稳定下来 | 具体邀约退回偶尔消息，联系失去方向 | 遗憾但平静 |
| stay_acquaintances | 关系停在熟人 | Q06 改道、Q07 旅行分工、Q08 额外任务难以合作 | 保留群体往来，不再进入私人计划 | 温和、尊重熟人关系 |
| strangers_after_all | 最终不再往来 | 到达 Q10 后仍缺少真实同意、可靠分工或边界修复 | 完成十题不能覆盖关系基础不足，双方退出往来 | 明确结束，不作惩罚叙事 |
| confirmed_relationship | 双方确认恋爱 | 帮助可拒绝、计划可调整、投入可看见、关系逐项定义 | 双方以真实、具体、可修改的同意确认恋爱 | 温暖、落地 |
| dangerous_lovers | 热恋基础未稳 | 公开称呼或全部答应提高吸引，但信任与舒适仍不足 | 恋爱成立同时保留关系债务和隐藏犹豫 | 有张力，不浪漫化牺牲 |
| friends | 明确成为朋友 | 能共同活动、有限互助并尊重拒绝，但浪漫吸引不足 | 友谊是清楚选择，不是恋爱候补 | 肯定、非贬低 |
| unresolved_ambiguity | 暧昧仍未说定 | 好感仍在，但公开范围、排他性或未来安排未达成一致 | 保留联系与未定状态，不暗示必然升级 | 留白、诚实 |

11 个基础结局标题均为 6 个汉字。单独显示即可识别关系终止、淡出、熟人、恋爱、朋友或未定暧昧等结果。

### 关系评价

| evaluation_id | 标题 | badge | 语义与 ESFJ 题目依据 | stage06_status |
|---|---|---|---|---|
| romance_stable | 恋爱稳稳落地 | 关系评价：恋爱稳稳落地 | 已确认恋爱；双方能询问帮助、调整计划、说明容量、重分任务并复谈关系 | reachable_verified |
| romance_hidden_risk | 恋爱仍藏风险 | 关系评价：恋爱已确认，仍藏风险 | 已确认恋爱；热烈回应或照顾中仍可能藏着怕扫兴、怕失望的勉强 | reachable_verified |

## 4. 角色化依据与内容边界

ESFJ 文案只使用行为模型和十题建立的互动：看见具体不便后提出有限帮助、邀请进入朋友群体并允许退出、共同确认预订和替代方案、双向分享兴趣、协商联系窗口、依据安全信息调整路线、看见不同形式的劳动、拒绝额外任务、共同确定公开介绍，以及把关系期待写成可修改协议。

以下内容不参与判定，也不作为结局理由：保姆、妈咪、免费客服、交际花、万人迷、最佳伴侣、天生忠诚、传统婚恋模板、高阶或低阶人格、固定爱语、读心、完美记忆、心理疾病、创伤或依恋类型。结局不会因为四字母标签直接增减状态或决定结果。

具体敏感性规则：

- 善意不能为未经请求的代办、强制陪伴、随时报备、公开替人定义关系或情感债务免责；造成压力也不自动证明恶意人格。
- conflict_break、strong_discomfort 和 trust_broken 使用坚定语言说明退出原因，但不诊断、不羞辱，也不描写报复。
- no_second_meeting、fade_out 和 stay_acquaintances 保持与低强度结果相称，不把普通不匹配写成创伤或道德失败。
- dangerous_lovers 明确写出关系基础未稳，不把高吸引、公开展示、牺牲、嫉妒或过度承担包装成更深的爱。
- friends 与 unresolved_ambiguity 各自保有独立价值；朋友不是降级，未定关系也不是隐形承诺。
- 结局不补写 TA 的性别、职业、家庭角色、政治立场或心理背景，也不把家务、护理、组织或情绪劳动定义为某类人的自然职责。

## 5. 模糊反馈完整字典

绝对变化 5、10、15/20 分别沿用 slight、medium、strong；零变化不展示该维度提示。每个选项继续只显示 1–2 个最能解释即时后果的键，不向玩家暴露数值。

| hint_key | fixed dimension | fixed raw direction | player meaning | fixed intensity | target-specific copy |
|---|---|---|---|---|---|
| attraction_up_slight | attraction | up | 继续靠近意愿小幅增加 | slight | TA又为一次单独相处留出了一点位置。 |
| attraction_up_medium | attraction | up | 继续靠近意愿明显增加 | medium | TA更想把朋友之外的时间单独留给你。 |
| attraction_up_strong | attraction | up | 浪漫发展意愿强烈增加 | strong | TA已经想和你一起说清这份靠近。 |
| attraction_down_slight | attraction | down | 继续靠近意愿小幅减少 | slight | TA对下一次单独邀约少了一点期待。 |
| attraction_down_medium | attraction | down | 个人邀约和浪漫探索明显减少 | medium | TA开始把靠近收回到普通群体往来。 |
| attraction_down_strong | attraction | down | 不再愿意把当前互动理解为心动 | strong | TA不再愿意把这段互动理解为恋爱可能。 |
| trust_up_slight | trust | up | 愿意增加少量共同托付 | slight | TA愿意把下一项安排交给你一起确认。 |
| trust_up_medium | trust | up | 更相信拒绝和变化会被尊重 | medium | TA开始相信临时变化和拒绝都会被认真处理。 |
| trust_up_strong | trust | up | 愿意共同处理关键边界与决定 | strong | TA愿意把真实负荷与关系期待交给你共同决定。 |
| trust_down_slight | trust | down | 对承诺产生少量疑问 | slight | TA对这次口头答应多留了一分保留。 |
| trust_down_medium | trust | down | 明显怀疑约定或边界能否兑现 | medium | TA开始怀疑说好的时间、分工或边界能否落地。 |
| trust_down_strong | trust | down | 撤回重要安排与共同决定 | strong | TA收回了共同计划和需要你参与的关键决定。 |
| comfort_up_slight | comfort | up | 互动压力小幅降低 | slight | TA不必用热闹或周到撑住此刻。 |
| comfort_up_medium | comfort | up | 更能自然表达参与和退出意愿 | medium | TA能直接说想加入、想离开或想换方案。 |
| comfort_up_strong | comfort | up | 能安全拒绝固定角色与要求 | strong | TA无需照顾所有人的反应，也能安心与你相处。 |
| comfort_down_slight | comfort | down | 表达开始略微谨慎 | slight | TA开始先估量你的反应才开口。 |
| comfort_down_medium | comfort | down | 明显缩小互动与求助范围 | medium | TA逐渐缩小邀请、分享和求助的范围。 |
| comfort_down_strong | comfort | down | 不再愿意暴露真实状态与选择 | strong | TA不再愿意在你面前暴露疲惫与真实选择。 |
| conflict_up_slight | conflict | up | 未解决张力小幅累积 | slight | 一个未核对的期待留在了安排里。 |
| conflict_up_medium | conflict | up | 分歧明显升级为拉扯 | medium | 联系、分工和关系身份开始互相牵扯。 |
| conflict_up_strong | conflict | up | 对抗和防御强烈升级 | strong | 对话已经被指责、测试和关系债务占满。 |
| conflict_down_slight | conflict | down | 未解决张力小幅缓和 | slight | 这次误会被澄清了一小部分。 |
| conflict_down_medium | conflict | down | 请求、边界与下一步得到明确澄清 | medium | 你们把请求、边界和下一步分别说清了。 |
| conflict_down_strong | conflict | down | 僵持显著解除并恢复协作 | strong | 分工与关系期待重新达成共识，张力明显退去。 |

conflict 是反向健康维度：数值上升代表未解决张力增加，数值下降才代表改善。文案逐项遵循这一方向，没有把 conflict_down 写成关系恶化。

## 6. 完整性审计与 Stage 06 交接

- 11 个固定 EndingId 各有且仅有一条完整 TypeScript 内容记录，kind 与运行时 schema 一致。
- 2 个固定 RelationshipEvaluationId 各有完整内容，并作为两个独立完整 outcome 保留。
- 24 个固定反馈键完整覆盖四维、两个方向和三档强度；文案没有新增或重解释键语义。
- 11 个基础结局标题与 2 个评价标题均为 4–8 个汉字，且仅看标题即可识别关系结果或评价。
- 结局原因只引用 Q01–Q10 实际可能出现的行为模式，不从四字母推断人格、心理状态或兼容性。
- src/content/esfj-questions.ts 的 40 个选项仍只改变状态，不含直接结局选择或故事停止字段。
- Stage 05 未修改 src/content/packs.ts、src/content/content-pack.ts、src/game/rules.ts、src/content/schema.ts、ESFJ 题目或选项效果。
- Stage 06 适配器已导入 esfjQuestions，并调用真实 applyEffects、resolveEnding 与完整 outcome key 枚举 4^10 等价路径。
- 11 个基础结局和 2 个关系评价均已验证可达；路径分布、阶段早退、固定位置/策略表现和局部支配记录在 ESFJ 平衡报告中。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 保持 unknown。

本阶段自动验收结果：

- ESFJ 定向内容校验通过：10 题、40 个选项、11 个基础结局、2 个关系评价和 24 个反馈键均完整；固定 ID、kind、顺序、维度、方向和强度与运行时 schema 一致。
- 13 个中文标题全部为 6 个汉字；审计文档包含 TypeScript 中每一项对应的 ID、标题或反馈文案。
- ESFJ 题目与结局组合通过 validateContent，效果预算警告为 0。
- 仓库内容校验、13 个已注册类型的全路径回归、18 个测试文件中的 92 项测试和生产构建均通过。
- 现有已注册内容包仍有 32 条普通效果预算提示，生产构建仍有一个压缩后 JavaScript 分块超过 500 kB 的非阻断提示；本阶段未修改相关内容。
- ESFJ 已通过 AVAILABLE_MBTI_TYPES 与 contentPacks 注册到类型入口；全类型路径回归现包含 ESFJ。
