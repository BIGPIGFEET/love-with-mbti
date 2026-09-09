# ENFJ 结局与反馈审计（Stage 05）

> 状态：Stage 05 已按 Stage-03 v2 与 Stage-04 当前题目重新审计；文案覆盖完整，既有 Stage 06 可达性验证仍与当前机制一致。权威生产兼容内容位于 [enfj-endings.ts](../../src/content/enfj-endings.ts)，题目输入为 [enfj-questions.ts](../../src/content/enfj-questions.ts)。  
> 固定边界：本阶段只写结局、关系评价和模糊反馈文案；`src/content/schema.ts` 与 `src/game/rules.ts` 的 ID、kind、状态语义、阈值、优先级和分类方式均保持不变。ENFJ 现已注册为可玩内容包。
> 复核日期：2026-09-08。Stage-04 本轮只澄清 Q03 的好感表达并同步研究引用，没有改变选项、效果、反馈键或结局机制。

## 1. 运行时投影与内容所有权

| 内容语义 | 权威投影 | Stage 05 处理 | 未处理内容 |
|---|---|---|---|
| 11 个基础结局 | `EndingContent[]` | 填写固定 `id / kind` 对应的 `title / coreCopy / reasonCopy / stateSummary` | 不创建新 ID，不改判定条件 |
| 2 个关系评价 | `RelationshipEvaluationContent[]` | 分别填写 `romance_stable` 与 `romance_hidden_risk` | 不合并完整 outcome |
| 24 个模糊反馈键 | `FuzzyFeedbackContent[]` | 保留固定维度、方向、强度，只写 ENFJ 题目语境中的非数值文案 | 不增加键，不改变 conflict 反向健康语义 |
| 角色依据、敏感性、动作、可达性 | 本审计文档 | 记录行为模型与题目依据、内容护栏和 Stage 06 状态 | 不复制可执行规则，不虚构 runtime rule ID |

结局页继续使用产品已有的重新开始、分享结果和返回类型选择等动作；本阶段不新增 UI 行为。运行时没有稳定 rule ID 或适用规则诊断钩子，因此规则覆盖与 shadowing 继续保持未知。

## 2. 固定结果覆盖矩阵

`stage06_status` 来自 `enfj-balance-report.json` 的生产等价穷举；所有固定结果均为 `reachable_verified`。

| ending_id | secondary_result_id | fixed family | production content route | character basis | content complete? | stage06_status |
|---|---|---|---|---|---|---|
| conflict_break | none | global | `enfjEndings` | B04/B06/B10/B12/B13；Q05/Q06/Q08–Q10 | yes | reachable_verified |
| strong_discomfort | none | global | `enfjEndings` | B01/B04/B06/B08/B10；Q01/Q02/Q04/Q07/Q08 | yes | reachable_verified |
| trust_broken | none | global | `enfjEndings` | B04/B07/B10–B12；Q03/Q05/Q06/Q08/Q10 | yes | reachable_verified |
| no_second_meeting | none | stage_gate | `enfjEndings` | B01/B04；Q01/Q02 | yes | reachable_verified |
| fade_out | none | stage_gate | `enfjEndings` | B04/B06/B07/B12；Q03–Q05 | yes | reachable_verified |
| stay_acquaintances | none | stage_gate | `enfjEndings` | B06/B08–B10/B12；Q06–Q08 | yes | reachable_verified |
| strangers_after_all | none | final | `enfjEndings` | B10–B13；Q08–Q10 | yes | reachable_verified |
| confirmed_relationship | none | final | `enfjEndings` | B06–B13；Q06–Q10 | yes | reachable_verified |
| dangerous_lovers | none | final | `enfjEndings` | B07/B08/B11/B12；Q07–Q10 | yes | reachable_verified |
| friends | none | final | `enfjEndings` | B01/B04/B06/B08/B10；Q01/Q02/Q04/Q07/Q08/Q10 | yes | reachable_verified |
| unresolved_ambiguity | none | final | `enfjEndings` | B07/B11/B13；Q03/Q09/Q10 | yes | reachable_verified |
| confirmed_relationship | romance_stable | final | `enfjRelationshipEvaluations` | B06/B08/B10–B12；Q06–Q10 | yes | reachable_verified |
| confirmed_relationship | romance_hidden_risk | final | `enfjRelationshipEvaluations` | B05–B12；Q06–Q10 | yes | reachable_verified |

基础 `endingId` 与可选 `evaluationId` 始终分开保存。`confirmed_relationship:romance_stable` 和 `confirmed_relationship:romance_hidden_risk` 是两个完整 outcome，不能因共享基础结局而合并。

## 3. 结局文案目录

| ending_id | 标题 | 具体互动依据 | 文案与状态摘要重点 | tone / sensitivity |
|---|---|---|---|---|
| conflict_break | 冲突中止关系 | 类型攻击、强迫继续争论、固定照顾义务、牺牲测试 | 原问题被逼迫和防御取代，关系因冲突终止 | 坚定；不把冲突归因于类型或诊断 |
| strong_discomfort | 不适终止相处 | 邀请被占有、支持被接管、触碰或暂停边界被越过 | 说不与退出空间耗尽，继续接触不再舒适 | 清楚保护边界；不渲染受害细节 |
| trust_broken | 信任破裂告别 | 未经同意公开关系、空泛互惠、隐藏重要限制、承诺不兑现 | 好感不能替代可靠，重要决定与脆弱信息被收回 | 严肃；区分好意与实际失信 |
| no_second_meeting | 初识没有下次 | Q01 参与节奏与 Q02 建议许可没有形成共同下一步 | 普通初识不匹配，不判定任何一方有问题 | 低强度、克制，不灾难化 |
| fade_out | 联系逐渐淡去 | 热度未定义、支持错位、建议压力未修复 | 具体邀约退回偶尔问候，联系失去可持续性 | 遗憾但平静 |
| stay_acquaintances | 关系停在熟人 | 情绪互惠、亲密同意、暂停返回没有积累为亲密基础 | 保留礼貌和群体往来，不再进入私人位置 | 温和、尊重熟人关系价值 |
| strangers_after_all | 最终不再往来 | 到达 Q10 仍缺乏足够的信任、舒适或修复基础 | 完成十次互动不覆盖关系恶化，最终退出彼此生活 | 明确结束，不使用命定或惩罚叙事 |
| confirmed_relationship | 双方确认恋爱 | 逐项同意、双向支持、暂停返回、关系与未来协议 | 恋爱由两个人清楚且可修改的答案成立 | 温暖、落地，不把热情等同承诺 |
| dangerous_lovers | 热恋尚未站稳 | 高吸引推动靠近，但真实限制、拒绝或边界仍不稳 | 恋爱成立同时保留信任或舒适风险 | 有张力但不浪漫化控制与不适 |
| friends | 明确成为朋友 | 能说明需要、接受拒绝并修复，但浪漫吸引不足 | 友谊是明确选择，不是恋爱候补 | 肯定、非贬低 |
| unresolved_ambiguity | 暧昧尚无定论 | 好感仍在，排他、投入或关系名称未获得共同答案 | 保持开放但不承诺自动升级 | 留白、诚实，不制造续作保证 |

所有基础结局标题均为 6 个汉字，单独显示即可识别终止、告别、没有下次、淡出、熟人、陌生、确认恋爱、不稳恋爱、朋友或未定暧昧等关系状态。

### 关系评价

| evaluation_id | 标题 | badge | 语义与 ENFJ 题目依据 | stage06_status |
|---|---|---|---|---|
| romance_stable | 恋爱稳步落地 | 关系评价：恋爱稳步落地 | 已确认恋爱；双方能说明容量、逐项确认、反馈影响并按约返回 | reachable_verified |
| romance_hidden_risk | 恋爱仍有隐患 | 关系评价：恋爱已确认，仍有隐患 | 已确认恋爱；热烈回应、照顾与未来计划中仍可能藏有未说出的限制 | reachable_verified |

## 4. 角色化依据与内容边界

ENFJ 文案只使用行为模型和十题已经建立的互动：给群体参与留可拒绝入口、建议前确认需要、在表达不够顺畅时重新澄清好感与承诺边界、选择支持方式、处理善意造成的压力、重订情绪劳动互惠、礼物与触碰逐项同意、暂停附带明确返回、拒绝配对命定论，以及把未来愿景拆成现实协议。

以下内容不参与判定，也不作为结局理由：小太阳、宝剑哥、主人公、救世主、黄金配对、高阶/低阶、天生善良、天然高情商、读心、固定爱语、治疗能力、心理疾病、创伤或依恋类型。Q09 的类型标签只作为需要拆解的外部压力，不能直接增减状态或决定结果。

具体敏感性规则：

- 善意不能为持续劝说、触碰越界、隐性债务或强迫即时解决免责；造成不适也不自动证明恶意人格。
- `conflict_break`、`strong_discomfort` 和 `trust_broken` 使用坚定语言说明退出原因，但不诊断、不羞辱，也不描写报复。
- `no_second_meeting`、`fade_out` 和 `stay_acquaintances` 保持与低强度结果相称，不把普通不匹配写成创伤或失败。
- `dangerous_lovers` 明确写出关系基础未稳，不把高吸引、嫉妒、牺牲或边界不清包装成更深的爱。
- `friends` 与 `unresolved_ambiguity` 各自保有独立价值；朋友不是降级，未定关系也不是隐形承诺。

## 5. 模糊反馈完整字典

绝对变化 `5`、`10`、`15/20` 分别沿用 `slight`、`medium`、`strong`；零变化不展示该维度提示。每个选项继续只显示 1–2 个最能解释即时后果的键，不向玩家暴露数值。

| hint_key | fixed dimension | fixed raw direction | player meaning | fixed intensity | target-specific copy |
|---|---|---|---|---|---|
| attraction_up_slight | attraction | up | 继续靠近意愿小幅增加 | slight | TA对下一次见面多了一点期待。 |
| attraction_up_medium | attraction | up | 继续靠近意愿明显增加 | medium | TA明显更想把新的共同时间留给你。 |
| attraction_up_strong | attraction | up | 浪漫发展意愿强烈增加 | strong | TA已经不太掩饰想与你继续发展关系。 |
| attraction_down_slight | attraction | down | 继续靠近意愿小幅减少 | slight | TA对继续靠近少了一点兴致。 |
| attraction_down_medium | attraction | down | 个人邀约和浪漫探索明显减少 | medium | TA开始把个人邀约收回到普通联系。 |
| attraction_down_strong | attraction | down | 不再愿意把当前互动理解为心动 | strong | TA已经不想把这种强度继续理解成心动。 |
| trust_up_slight | trust | up | 愿意增加少量真实托付 | slight | TA愿意把一小部分真实需要说给你听。 |
| trust_up_medium | trust | up | 更相信拒绝和变化会被尊重 | medium | TA开始相信说不和改主意都会被尊重。 |
| trust_up_strong | trust | up | 愿意共同处理关键边界与决定 | strong | TA愿意把关键边界和共同决定放进你们的对话。 |
| trust_down_slight | trust | down | 对承诺产生少量疑问 | slight | TA对这句保证留下了一点疑问。 |
| trust_down_medium | trust | down | 明显怀疑边界或承诺能否兑现 | medium | TA开始怀疑说好的边界会不会被兑现。 |
| trust_down_strong | trust | down | 撤回重要托付与脆弱信息 | strong | TA把重要决定和脆弱部分从你这里收了回去。 |
| comfort_up_slight | comfort | up | 互动压力小幅降低 | slight | TA在你面前少了一点维持气氛的用力。 |
| comfort_up_medium | comfort | up | 更能自然表达而不预演反应 | medium | TA不必先猜哪种回答才不会让你失望。 |
| comfort_up_strong | comfort | up | 能安全说不、安静或改变主意 | strong | TA可以在你面前说不、安静或改变主意。 |
| comfort_down_slight | comfort | down | 表达开始略微谨慎 | slight | TA说话时开始多留了一层余地。 |
| comfort_down_medium | comfort | down | 明显缩小互动与求助范围 | medium | TA开始缩小分享、靠近和请求帮助的范围。 |
| comfort_down_strong | comfort | down | 不再愿意暴露真实需要 | strong | TA已经不愿再把真实需要放进这段相处。 |
| conflict_up_slight | conflict | up | 未解决张力小幅累积 | slight | 没有说开的期待又积了一点。 |
| conflict_up_medium | conflict | up | 分歧明显升级为拉扯 | medium | 建议、边界和关系含义开始缠成一场拉扯。 |
| conflict_up_strong | conflict | up | 对抗和防御强烈升级 | strong | 对话已经只剩逼迫、防御和互相抵抗。 |
| conflict_down_slight | conflict | down | 未解决张力小幅缓和 | slight | 刚才没说开的那一层松动了一点。 |
| conflict_down_medium | conflict | down | 意图、影响和下一步得到明显澄清 | medium | 你们把意图、影响和下一步重新分开了。 |
| conflict_down_strong | conflict | down | 僵持显著解除并恢复协作 | strong | 僵持被具体协议接住，双方终于能停下对抗。 |

`conflict` 是反向健康维度：数值上升代表未解决张力增加，数值下降才代表改善。文案已逐项按这一方向书写，没有把 `conflict_down` 误写成关系恶化。

## 6. 完整性审计与 Stage 06 交接

- 11 个固定 `EndingId` 各有且仅有一条完整 TypeScript 内容记录，kind 与运行时 schema 一致。
- 2 个固定 `RelationshipEvaluationId` 各有完整内容，并作为两个独立完整 outcome 保留。
- 24 个固定反馈键完整覆盖四维、两个方向和三档强度；文案没有新增或重解释键语义。
- 11 个基础结局标题与 2 个评价标题均为 4–8 个汉字，且仅看标题即可识别关系结果或评价。
- 结局原因只引用 Q01–Q10 实际可能出现的行为模式，不从四字母推断人格、心理状态或兼容性。
- `src/content/enfj-questions.ts` 的 40 个选项仍只改变状态，不含直接结局选择或故事停止字段。
- 本轮 Stage 05 复核没有修改 `src/content/packs.ts`、`src/game/rules.ts`、`src/content/schema.ts`、题目选项或数值效果；Stage-04 的 Q03 澄清与新增研究引用不会改变既有 Stage 06 路径结果。
- Stage 06 已以真实 `applyEffects`、`resolveEnding` 和完整 outcome key 枚举 ENFJ 路径；所有基础结局与两个关系评价均已验证可达。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与具体 shadowing 不作推断，继续明确标记为未知。

本阶段自动验收结果：

- ENFJ 定向内容校验通过：10 题、40 个选项、11 个基础结局、2 个关系评价和 24 个反馈键均完整；题目引用的反馈键无缺失，文档与 TypeScript 的反馈文案逐字一致。
- Stage 06 调整后，40 个选项全部不超过普通建议预算 40，原有 7 条效果预算警告已清零。
- 仓库内容校验、17 个测试文件中的 89 项测试和生产构建均通过。
- 12 个已注册内容包的全路径分析通过；ENFJ 的项目级结果与独立生产等价适配器报告一致。
- 生产构建保留一个压缩后 JavaScript 分块超过 500 kB 的非阻塞提示，与本次 ENFJ 文案产物无关。
