# INTJ 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [intj-formal-sequence.json](../traceability/intj-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题，复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | INTJ-SC01 | first_meeting | INTJ-C02 | 结构化提议能否保留玩家的节奏、限制和共同决定 | low | INTJ-B01、B02 | INTJ-F01、F02、F05、F08 | INTJ-S03、S04、S05、S14、S30、S43、S44 | INTJ-K01、K02 | attraction、comfort、conflict | 以低后果的共同兴趣开场，让辨识度来自提问和结构，而不是天才标签。 |
| 2 | INTJ-SC02 | first_meeting | INTJ-C03 | 玩家能否核对简短信号，而不以语气热度替对方判定兴趣 | low-medium | INTJ-B01 | INTJ-F02、F05 | INTJ-S03、S04、S06、S30、S43 | INTJ-K01 | attraction、trust、comfort | 从共同安排转向外显信号，完成初识阶段的理解与确认测试。 |
| 3 | INTJ-SC03 | contact | INTJ-C05 | 行动式关心能否被接住并通过轻量确认转成可理解的意图 | medium | INTJ-B04 | INTJ-F03、F04 | INTJ-S07、S08、S26、S27、S31、S32、S38 | INTJ-K04 | attraction、trust、comfort | 进入接触后引入具体投入，但不让帮助自动升级为告白或关系债务。 |
| 4 | INTJ-SC04 | contact | INTJ-C08 | 直接指出分歧时，事实讨论能否与语气边界和关系影响并存 | medium | INTJ-B07 | INTJ-F05 | INTJ-S03、S04、S10、S11、S12、S30、S32 | INTJ-K07 | attraction、comfort、conflict | 在正向关心后加入观点摩擦，测试真实分歧而非继续累积顺从。 |
| 5 | INTJ-SC05 | contact | INTJ-C07 | 独处需求能否转化为可预期的联系安排，而不是失联或监控 | medium-high | INTJ-B06 | INTJ-F03、F06 | INTJ-S03、S06、S09、S14、S27、S43 | INTJ-K06 | trust、comfort、conflict | 接触阶段以边界和可靠性收束，为后续更高强度冲突建立协议基础。 |
| 6 | INTJ-SC06 | familiarity | INTJ-C11 | 已有实际帮助但情绪仍未被接住时，双方能否协商支持方式 | high | INTJ-B04、B05 | INTJ-F03、F04、F05 | INTJ-S07、S08、S11、S29、S31、S32、S38 | INTJ-K04、K05 | trust、comfort、conflict | 熟悉后关心需要承担接收效果，行动、倾听、方案和容量首次正面碰撞。 |
| 7 | INTJ-SC07 | familiarity | INTJ-C13 | 冲突暂停是否包含期限、必要联系和明确回谈，而非逼问或消失 | high | INTJ-B07、B08 | INTJ-F03、F05、F07 | INTJ-S04、S09、S10、S11、S12、S14、S29、S31、S32 | INTJ-K06、K07 | trust、comfort、conflict | 从支持错位升级为即时冲突，锁定暂停协议作为下一题的前置条件。 |
| 8 | INTJ-SC08 | familiarity | INTJ-C14 | 到达回谈时间后，能否分别处理事实、影响和下一次调整 | high | INTJ-B08、B12 | INTJ-F03、F05、F07 | INTJ-S09、S10、S11、S12、S14、S29、S31、S32 | INTJ-K06、K07 | trust、comfort、conflict | 对上一题的暂停进行实际验证，以修复能力而非内在好意完成熟悉阶段。 |
| 9 | INTJ-SC09 | ambiguity | INTJ-C16 | 把玩家纳入未来计划是否仍需逐项确认时间、关系与共同决定 | high | INTJ-B04、B09、B11 | INTJ-F01、F03、F04、F06、F08 | INTJ-S03、S07、S09、S14、S27、S31、S32、S38、S44 | INTJ-K04、K08、K10 | attraction、trust、comfort、conflict | 暧昧先出现强行动信号，让玩家面对“重视”与“承诺”之间的空隙。 |
| 10 | INTJ-SC10 | ambiguity | INTJ-C17 | 双方能否明确关系、排他和联系节奏，并允许不同答案 | high | INTJ-B10、B11 | INTJ-F03、F04、F06 | INTJ-S07、S09、S14、S27、S31、S32、S43 | INTJ-K09、K10 | attraction、trust、comfort、conflict | 以可拒绝的关系确认收束，把未来计划和亲近行动转化为双方真实决定。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：先测试结构化互动能否容纳差异，再测试简短表达能否被核对；两题都低风险，但分别考察共同安排与信号理解。
- **接触（3–5）**：从行动式关心进入真实分歧，再处理独处和联系协议；关系由吸引逐渐转向可靠性与边界。
- **熟悉（6–8）**：支持错位提高情绪后果，随后形成“暂停—按时回谈”的完整修复弧线；内在好意必须转化为可观察责任。
- **暧昧（9–10）**：先出现把玩家纳入未来的强信号，再进行明确、可拒绝的关系定义；计划、帮助和亲近都不能替代承诺与同意。
- **重复控制**：`K01` 在 SC01/SC02 分别是次级语气压力和主要信号测试；`K04` 在 SC03/SC06/SC09 分别处理行动含义、支持错位和未来投入；`K06/K07` 在 SC07/SC08 是有意的暂停—修复前后对照；`K10` 在 SC09/SC10 是行动信号—明确确认的递进。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级测试。

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P | S |  |  | S |  |  | S |  |  | S | P |  |  |  |  |  |  |  |  |
| SC02 |  | P |  |  | S |  |  |  |  |  | P |  |  |  |  |  |  |  |  |  |
| SC03 |  |  | S | P |  |  |  |  |  |  |  |  |  | P |  |  |  |  |  |  |
| SC04 |  |  |  |  | P |  |  |  |  |  |  |  |  |  |  |  | P |  |  |  |
| SC05 |  |  | S |  |  | P |  |  |  |  |  |  |  |  |  | P |  |  |  |  |
| SC06 |  |  | S | P | S |  |  |  |  |  |  |  |  | S | P |  |  |  |  |  |
| SC07 |  |  | S |  | S |  | P |  |  |  |  |  |  |  |  | P | S |  |  |  |
| SC08 |  |  | S |  | S |  | P |  |  |  |  |  |  |  |  | S | P |  |  |  |
| SC09 | S |  | S | S |  | S |  | P |  |  |  |  |  | S |  |  |  | S |  | P |
| SC10 |  |  | P | S |  | S |  |  |  |  |  |  |  |  |  |  |  |  | S | P |

### 覆盖审计

- A/B 类 `F01` 至 `F08` 全部覆盖；F03、F04、F05 因承担表达、支持和修复主轴而有意重复。F09、F10 不进入正式机制，只在风险说明和替代候选中用于拆解浪漫化/能力标签。
- `K01`、`K02`、`K04` 至 `K10` 均覆盖；`K03` 有意留在反刻板替代候选 `INTJ-C01`，避免正式序列以类型元话题开场。
- `K08`、`K09` 只作次级压力：共同决定嵌入 SC09 的未来计划，披露节奏嵌入 SC10 的关系透明；若 Stage 04 难以写清，可使用 C09/C10/C12/C15 替换加强。
- 高风险集中在 SC06–SC10。初识不出现隐私泄露、重大争吵或关系排他要求；熟悉后才要求暂停、回谈和承担影响。

## 4. 候选资格与排除

候选的完整触发、行为、ID 集和护栏以 [INTJ 候选事件库](intj-candidate-scenes.md) 为准；本表记录本轮资格判断。

| candidate_id | primary feature | agency quality | eligibility | decision | reason |
|---|---|---|---|---|---|
| INTJ-C01 | F10（仅拆解） | strong | alternate | ALT-01 | 反刻板价值高，但元话题会占用初识名额；保留为降低抽象计划感的替换。 |
| INTJ-C02 | F01 | strong | select | SC01 | 低风险、可共同决定，能表现结构倾向而不要求角色全知。 |
| INTJ-C03 | F02 | strong | select | SC02 | 简短信号具有清楚的误读压力，也允许确认、接受或退出。 |
| INTJ-C04 | F08 | strong | exclude | none | 与 C02 同为突发情境中的方案/节奏测试，信息层和关系后果更薄。 |
| INTJ-C05 | F04 | strong | select | SC03 | 行动关心与关系含义之间有双向、可协商压力。 |
| INTJ-C06 | F05 | strong | alternate | ALT-02 | 方案/倾听很有价值，但 C11 在熟悉阶段同时包含既有付出和未满足需求，后果更完整。 |
| INTJ-C07 | F06 | strong | select | SC05 | 把独立和空间转成可观察的联系协议，而非抽象偏好。 |
| INTJ-C08 | F05 | strong | select | SC04 | 直接分歧提供与关心/空间不同的中段摩擦，且双方均可能判断或表达不当。 |
| INTJ-C09 | F08 | strong | alternate | ALT-03 | 共同安排清晰可玩，但与 SC01 和 SC09 的计划/共同决定重复。 |
| INTJ-C10 | F03 | strong | alternate | ALT-04 | 是低伤害的披露范围测试，可用于强化 K09，但正式序列已有信号、空间和关系透明铺垫。 |
| INTJ-C11 | F04 | strong | select | SC06 | 将行动关心推进到接收效果和支持容量，适合作为熟悉阶段升级。 |
| INTJ-C12 | F08 | strong | alternate | ALT-05 | 可靠性后果清楚，但会使计划类测试过密；适合作为熟悉阶段替换。 |
| INTJ-C13 | F07 | strong | select | SC07 | 明确建立暂停协议，并为下一题提供可验证条件。 |
| INTJ-C14 | F07 | strong | select | SC08 | 验证是否真正返回、承担影响和调整行为，完成修复弧线。 |
| INTJ-C15 | F03 | strong | alternate | ALT-06 | 隐私泄露责任明确、强度较高，可替换 SC08，但会拆开暂停—回谈弧线。 |
| INTJ-C16 | F08 | strong | select | SC09 | 把未来投入与关系含义分开，适合进入暧昧阶段。 |
| INTJ-C17 | F03 | strong | select | SC10 | 明确处理关系、排他和联系节奏，允许拒绝和不匹配。 |
| INTJ-C18 | F07 | strong | alternate | ALT-07 | 可作为更高后果的最终修复选择，但会弱化正式序列对关系定义的直接覆盖。 |

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ALT-01 | INTJ-C01 | first_meeting | F10 的反刻板拆解、K03 | SC01 或 SC02 | 身份标签辨识度更高，但减少具体关系互动；F10 仍必须机械无效。 |
| ALT-02 | INTJ-C06 | contact | F04/F05、K05 | SC04 或 SC06 | 可提前测试支持方式；会削弱直接分歧或使熟悉阶段支持压力变轻。 |
| ALT-03 | INTJ-C09 | contact | F01/F08、K02/K08 | SC04 或 SC05 | 共同计划更具操作性；会增加计划类场景密度并减少分歧或空间覆盖。 |
| ALT-04 | INTJ-C10 | contact | F03/F06、K09 | SC05 | 低风险地强化披露边界；会减少独处联系协议。 |
| ALT-05 | INTJ-C12 | familiarity | F01/F08、K02/K08 | SC08 | 可靠性与共同决定更突出；会拆开暂停—回谈弧线。 |
| ALT-06 | INTJ-C15 | familiarity | F03/F06/F07、K09 | SC08 | 隐私责任后果更具体；冲突强度上升且失去按时回谈验证。 |
| ALT-07 | INTJ-C18 | ambiguity | F03–F07、K06/K07/K10 | SC10 | 以修复后是否继续收束，后果更强；直接关系定义和 K09 覆盖减弱。 |

## 6. 风险与未决项

- 证据描述的是网络表征，不是 INTJ 人群比例、心理事实或关系规律；Stage 04 每题仍需提供至少两种合理、代价不同的回应方向。
- `surface_record` 中“严父式爱、服从判断、高级爱、天才/反派”包装不进入正式证据链；不能把批评、控制、失联或冷处理写成爱得深。
- SC01 的结构化表达和 SC09 的未来计划都必须允许方案错误、玩家拒绝与共同改写，避免把计划能力当吸引力或可靠性的自动证明。
- SC07/SC08 是有意的两题弧线，但每题仍需能独立成立：前者测试暂停条件，后者测试实际修复，不得仅用连续剧情制造唯一正确答案。
- SC09/SC10 不预设确认恋爱或排他是正确结果；清晰接受、清晰拒绝、提出不同节奏和退出都应作为合法意图保留。
- 运行时状态与规则保持共享合同，Stage 03 不批准任何状态变化数值、题目文案或结局可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| INTJ-SEL-001 | v1 | initial lock | INTJ-SC01–SC10 | none | INTJ-C02、C03、C05、C08、C07、C11、C13、C14、C16、C17 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成结构—信号—关心—分歧—空间—支持—暂停—修复—未来计划—关系确认的递进。 | 覆盖 F01–F08 与 K01、K02、K04–K10；F09/F10 和 K03 保留为风险/替代池。 | Stage 04 必须按本文件与 JSON 的完整上游 ID 集写题；任何替换使用新 scene_id，并同步注册表与日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可为每个 `scene_id` 编写题干、NPC 表现、四项策略、即时反馈和追溯数据；本阶段没有批准任何对白、选项文本、分数、模糊提示、阈值或结局文案。
