# ESFP 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [esfp-formal-sequence.json](../traceability/esfp-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题，复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ESFP-SC01 | first_meeting | ESFP-C01 | 共同体验能否保留真实拒绝、退出和低强度替代 | low | ESFP-B01 | ESFP-F01 | ESFP-S01、ESFP-S03、ESFP-S14 | ESFP-K01 | attraction、comfort | 从具体、可逆的小活动进入，先测试能否分享兴趣而不强迫参与。 |
| 2 | ESFP-SC02 | first_meeting | ESFP-C02 | 面对冷场与社交能见度，玩家能否尊重观察、活跃和安静的情境变化 | low-medium | ESFP-B02 | ESFP-F02 | ESFP-S01、ESFP-S03、ESFP-S12、ESFP-S22、ESFP-S23、ESFP-S29 | ESFP-K02 | attraction、comfort、conflict | 在共同体验之后引入群体气氛，但不把是否带动全场当好感测试。 |
| 3 | ESFP-SC03 | contact | ESFP-C05 | 临时新选项能否与核心约定、时间限制和可逆备选并存 | medium | ESFP-B04 | ESFP-F03 | ESFP-S01、ESFP-S08、ESFP-S09、ESFP-S27 | ESFP-K03 | attraction、trust、comfort、conflict | 接触阶段先用低后果计划变化测试弹性与可靠性，而非直接制造失约。 |
| 4 | ESFP-SC04 | contact | ESFP-C07 | 现实帮助、倾听和空间能否按双方能力与需求清楚协商 | medium | ESFP-B05 | ESFP-F05 | ESFP-S02、ESFP-S05、ESFP-S11 | ESFP-K04、ESFP-K05 | trust、comfort、conflict | 从活动安排转入个人支持，关系更近但仍允许不披露和拒绝情绪劳动。 |
| 5 | ESFP-SC05 | contact | ESFP-C09 | 体验与品质偏好能否容纳预算、时间和公平分担边界 | medium-high | ESFP-B09 | ESFP-F09 | ESFP-S01、ESFP-S02、ESFP-S14 | ESFP-K08 | attraction、trust、comfort、conflict | 接触阶段以资源取舍收束，首次让选择产生可见现实成本但保持可协商。 |
| 6 | ESFP-SC06 | familiarity | ESFP-C12 | 不同谈话入口能否被区分为兴趣与表达差异，而不是智力或深度排序 | medium-high | ESFP-B03 | ESFP-F04 | ESFP-S03、ESFP-S09、ESFP-S11、ESFP-S12、ESFP-S24、ESFP-S27 | ESFP-K04 | attraction、trust、comfort、conflict | 熟悉后才提出思想共鸣压力，让玩家能依据真实相处而非初见标签判断。 |
| 7 | ESFP-SC07 | familiarity | ESFP-C13 | 群体中的参与变化能否与两人连接需求同时被说明 | high | ESFP-B02、ESFP-B10 | ESFP-F01、ESFP-F02、ESFP-F05 | ESFP-S01、ESFP-S03、ESFP-S05、ESFP-S11、ESFP-S12、ESFP-S14、ESFP-S22、ESFP-S23、ESFP-S29 | ESFP-K01、ESFP-K02、ESFP-K05 | attraction、trust、comfort、conflict | 将初识的社交节奏升级为关系中的被忽略感，测试表达需要而非控制关注。 |
| 8 | ESFP-SC08 | familiarity | ESFP-C11 | 立即谈清与暂停降温能否形成有期限、可返回的处理方式 | high | ESFP-B06、ESFP-B11 | ESFP-F03、ESFP-F06 | ESFP-S05、ESFP-S06、ESFP-S07、ESFP-S08、ESFP-S09、ESFP-S27 | ESFP-K03、ESFP-K06 | trust、comfort、conflict | 在已有信任和张力后进入正面冲突，为最终修复建立可验证的返回条件。 |
| 9 | ESFP-SC09 | ambiguity | ESFP-C15 | 暧昧热度能否拆分为公开、接触、排他与关系定义的逐项确认 | high | ESFP-B07、ESFP-B08 | ESFP-F07、ESFP-F08 | ESFP-S02、ESFP-S03、ESFP-S04、ESFP-S10、ESFP-S12、ESFP-S13 | ESFP-K07、ESFP-K09 | attraction、trust、comfort、conflict | 进入暧昧后先澄清同意与承诺，避免把外表、调情或既往互动打包成许可。 |
| 10 | ESFP-SC10 | ambiguity | ESFP-C18 | 冲突后的回谈能否承认影响、落实补救并接受关系仍可被重新选择 | high | ESFP-B11、ESFP-B12 | ESFP-F03、ESFP-F06、ESFP-F08 | ESFP-S03、ESFP-S04、ESFP-S05、ESFP-S06、ESFP-S07、ESFP-S08、ESFP-S09、ESFP-S12、ESFP-S13、ESFP-S27 | ESFP-K03、ESFP-K06、ESFP-K09 | attraction、trust、comfort、conflict | 以具体修复能力收束，而不是让道歉、礼物、类型标签或浪漫氛围自动恢复关系。 |

## 2. 选择理由与阶段递进

- **初识（1—2）**：从可退出的共同体验进入，再观察群体气氛中的表达变化。两个场景都低后果，不要求玩家猜测好感，也不把活跃当义务。
- **接触（3—5）**：依次处理计划弹性、支持方式和现实资源。风险从可逆安排逐步增加到时间与预算成本，但没有提前要求情绪袒露或关系承诺。
- **熟悉（6—8）**：先处理思想共鸣，再让群体社交影响两人连接，最后进入冲突节奏。难点从理解差异升级为表达受伤与建立回谈条件。
- **暧昧（9—10）**：先逐项确认公开、接触、排他与关系定义，再验证冲突后的承担和修复；亲近热度不能替代同意或继续关系的选择。
- **有意复现**：`F02/K02` 在 SC02 与 SC07 形成“公共冷场—关系中的被忽略感”递进；`F03/K03` 在 SC03、SC08、SC10 形成“可逆调整—冲突安排—修复兑现”递进；`F06/K06` 在 SC08、SC10 形成“暂停—回谈”闭环。这些复现测试的后果和玩家任务不同。
- **相邻去重**：没有把 C05、C10、C17、C18 四个计划事件连续堆叠；支持、消费、思想共鸣、群体互动、冲突和承诺交替出现。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级测试。

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  |  |
| SC02 |  | P |  |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  |
| SC03 |  |  | P |  |  |  |  |  |  |  |  | P |  |  |  |  |  |  |
| SC04 |  |  |  |  | P |  |  |  |  |  |  |  | P | S |  |  |  |  |
| SC05 |  |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  | P |  |
| SC06 |  |  |  | P |  |  |  |  |  |  |  |  | P |  |  |  |  |  |
| SC07 | S | P |  |  | S |  |  |  |  | S | P |  |  | S |  |  |  |  |
| SC08 |  |  | S |  |  | P |  |  |  |  |  | S |  |  | P |  |  |  |
| SC09 |  |  |  |  |  |  | S | P |  |  |  |  |  |  |  | S |  | P |
| SC10 |  |  | S |  |  | P |  | S |  |  |  | S |  |  | P |  |  | S |

### 覆盖审计

- `F01` 至 `F09`、`K01` 至 `K09` 全部进入正式序列；没有用表层记录补齐覆盖。
- `F07` 只作为 SC09 的次级覆盖，因为身体与外表经验异质且证据较弱；场景主测试仍是明确承诺，任何身体或公开范围都需独立确认。
- `F09/K08` 只在 SC05 出现，避免把消费和物质包装成 ESFP 的主叙事；若后续删除该题，需由 C17 或其他明确的资源边界场景补位。
- `K04` 在 SC04、SC06 两次出现，分别测试支持方式和思想共鸣，不把实际行动与抽象表达做高低排序。
- 高风险集中于 SC07—SC10，符合熟悉到暧昧的后果递进；前五场不安排隐私泄露、不忠审讯或关系定义。

## 4. 候选资格与排除

| candidate_id | eligibility | decision | reason |
|---|---|---|---|
| ESFP-C01 | select | ESFP-SC01 | 具体、可逆且保留退出权，适合作为低压力开场。 |
| ESFP-C02 | select | ESFP-SC02 | 能观察表达与安静的情境变化，不把社交能见度直接解释为好感。 |
| ESFP-C03 | alternate | ESFP-ALT01 | 反刻板澄清有价值，但直接谈类型会增加元叙事感；保留为初识替换。 |
| ESFP-C04 | exclude | none | 与 C12 同测现实/抽象入口；C12 在熟悉阶段有真实思想共鸣压力，玩家判断基础更充分。 |
| ESFP-C05 | select | ESFP-SC03 | 用可逆计划变化具体测试弹性与可靠性，适合接触阶段。 |
| ESFP-C06 | alternate | ESFP-ALT02 | 活动后安静有反刻板价值，但与 C13 的社交节奏及 C14 的私人状态均部分重叠。 |
| ESFP-C07 | select | ESFP-SC04 | 支持方式具备双向能力边界，能避免把实际帮助写成唯一正确答案。 |
| ESFP-C08 | alternate | ESFP-ALT03 | 分享许可清晰可玩，但正式序列已由 C15 处理更完整的公开与接触边界。 |
| ESFP-C09 | select | ESFP-SC05 | 为低覆盖的 F09/K08 提供具体资源取舍，同时能防止物质化叙事。 |
| ESFP-C10 | alternate | ESFP-ALT04 | 是 C05 的高后果计划版本，也与 C11、C18 的修复责任部分重叠。 |
| ESFP-C11 | select | ESFP-SC08 | 形成暂停—回谈弧线的前半段，玩家必须协商处理节奏。 |
| ESFP-C12 | select | ESFP-SC06 | 将“没深度”标签转成可观察的谈话入口差异，避免能力证明。 |
| ESFP-C13 | select | ESFP-SC07 | 把早期社交表现升级为关系中的连接需求，同时保留双方合理空间。 |
| ESFP-C14 | alternate | ESFP-ALT05 | 私人低落和支持菜单可替换 C13，但会减少 F02/K02 的阶段递进。 |
| ESFP-C15 | select | ESFP-SC09 | 将暧昧热度拆成公开、接触、排他和关系定义，明确同意边界。 |
| ESFP-C16 | alternate | ESFP-ALT06 | 忠诚刻板风险具有代表性，但直接以外部标签触发会增加审讯与自证倾向。 |
| ESFP-C17 | alternate | ESFP-ALT07 | 高成本共同计划可加强资源和未来协商，但与 SC05、SC08、SC10 的冲突家族重叠。 |
| ESFP-C18 | select | ESFP-SC10 | 能验证暂停后的回谈、承担和补救，以修复能力收束关系弧线。 |

## 5. 备选池与换位指引

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ESFP-ALT01 | ESFP-C03 | first_meeting | F01/F02、K01/K02 的显式反刻板澄清 | SC02 | 能直接处理“ESFP 应该很会玩”，但元叙事更强，群体行为观察减少。 |
| ESFP-ALT02 | ESFP-C06 | contact | F01/F05、K01/K02/K05 | SC04 | 强化活动后能量变化；会削弱玩家明确支持方式的责任。 |
| ESFP-ALT03 | ESFP-C08 | contact | F07、K07 | SC04 | 提前建立分享许可，边界更具体；F05/K05 将主要依赖 SC07。 |
| ESFP-ALT04 | ESFP-C10 | familiarity | F03/F06、K03/K06/K08 | SC08 | 计划后果更具体；暂停—回谈结构变弱，且与 SC03 更同质。 |
| ESFP-ALT05 | ESFP-C14 | familiarity | F01/F05、K05 | SC07 | 私人情绪支持更聚焦；F02/K02 只剩初识一次覆盖。 |
| ESFP-ALT06 | ESFP-C16 | ambiguity | F06/F08、K06/K09 | SC09 | 忠诚焦虑更直接；身体与公开边界 F07/K07 将失去正式覆盖。 |
| ESFP-ALT07 | ESFP-C17 | ambiguity | F03/F06/F09、K03/K06/K08 | SC10 | 强化共同未来与资源取舍；会失去 F08/K09 的修复收束并重复消费主题。 |

## 6. 风险与未决项

- Stage-01 研究记录的是网络表征，不是 ESFP 人群比例、心理事实、能力或关系规律；Stage 04 必须为每场保留多种合理策略，而非一项显然正确的“懂 ESFP”答案。
- 中文证据仍集中于一个 Bilibili 评论区、一个自认 ESFP 创作者页面及一篇方法长文；不得把正式序列称为中英文共识。
- SC02、SC07 的活跃/安静变化不能被写成“其实是内向者”，也不能要求 TA 负责所有社交气氛。
- SC04 不应让玩家承担治疗者职责；实际帮助、倾听、暂缓和能力边界都应可表达。
- SC05 只测试预算与体验协商，不推断阶层、收入、财务纪律、性别角色或爱意价格。
- SC09 必须把公开、接触、排他和关系定义拆开；任一项同意都不能打包授权其他项。
- SC08、SC10 的暂停与回谈应形成可追溯的前后呼应，但不能强迫原谅或把低冲突等同持续压抑。
- ESFP 仍不是当前生产可玩类型。本 Stage-03 资产不注册运行时，也不批准任何效果数值、门槛、规则或结局可达性。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ESFP-SEL-001 | v1 | initial lock | ESFP-SC01–SC10 | none | ESFP-C01、ESFP-C02、ESFP-C05、ESFP-C07、ESFP-C09、ESFP-C12、ESFP-C13、ESFP-C11、ESFP-C15、ESFP-C18 | 首次从 Stage-02 候选库锁定 2/3/3/2 序列，形成共同体验—社交节奏—安排—支持—资源—共鸣—群体连接—冲突—承诺—修复递进。 | 覆盖 F01–F09、K01–K09；所有上游 ID 原样进入 Markdown 和 JSON。 | Stage 04 必须以 JSON 为 ID 宇宙；任何替换需使用新 scene_id、同步两文件并追加变更日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可为每个 `scene_id` 编写题干、NPC 表达、四项策略、即时反馈和追溯数据；本阶段没有批准任何对白、选项文本、效果数值、模糊提示、阈值、规则或结局文案。
