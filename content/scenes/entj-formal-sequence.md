# ENTJ 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [entj-formal-sequence.json](../traceability/entj-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题，复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ENTJ-SC01 | first_meeting | ENTJ-C01 | 玩家能否修正霸总/CEO 类型概括，以具体经验而非能力模板认识 TA | low | ENTJ-B01 | ENTJ-F01、F03、F11 | ENTJ-S04、S05、S06、S07、S26、S27 | ENTJ-K01 | attraction、comfort、conflict | 先拆除最显眼的身份套装；辨识度来自对标签的处理，不让低置信 meme 决定机制。 |
| 2 | ENTJ-SC02 | first_meeting | ENTJ-C03 | 主动规划有限见面时间时，效率能否容纳玩家状态、删减和共同节奏 | low-medium | ENTJ-B02、B06 | ENTJ-F01、F02、F04 | ENTJ-S03、S04、S05、S06、S17、S26 | ENTJ-K02、K06 | attraction、comfort、conflict | 从元标签转入低风险具体互动，以可协商的计划完成初识阶段。 |
| 3 | ENTJ-SC03 | contact | ENTJ-C05 | 明确提出下一次见面时，主动与直接能否保留改期、慢节奏和拒绝 | medium | ENTJ-B02、B03 | ENTJ-F01、F05 | ENTJ-S03、S04、S15、S17 | ENTJ-K02、K03 | attraction、trust、comfort | 进入接触后先建立清楚但可拒绝的继续意愿，不用消息热度替双方决定。 |
| 4 | ENTJ-SC04 | contact | ENTJ-C06 | 实际帮助能否先确认需要、范围和含义，而不是变成关系债务或决定权 | medium | ENTJ-B04 | ENTJ-F02、F06 | ENTJ-S04、S08、S09、S11、S24 | ENTJ-K02、K04 | attraction、trust、comfort | 在明确邀请后出现具体投入，把吸引推进到可靠性与边界。 |
| 5 | ENTJ-SC05 | contact | ENTJ-C07 | 面对烦恼时，方案、倾听、实际协助和空间能否由双方说明并切换 | medium-high | ENTJ-B05 | ENTJ-F03、F05、F09 | ENTJ-S02、S03、S07、S10、S13、S16、S17 | ENTJ-K05 | trust、comfort、conflict | 接触阶段以支持错位收束，让好意首次承担接收效果和容量限制。 |
| 6 | ENTJ-SC06 | familiarity | ENTJ-C11 | 共同活动中的标准、成本和弹性能否区分个人偏好、共同底线与决定权 | high | ENTJ-B02、B07 | ENTJ-F01、F02、F08 | ENTJ-S03、S04、S11、S12、S17、S28 | ENTJ-K02、K07 | trust、comfort、conflict | 熟悉后从支持方式进入更持续的共同责任，高标准必须接受协商和失败。 |
| 7 | ENTJ-SC07 | familiarity | ENTJ-C14 | 冲突升级时，暂停能否包含期限、必要联系和明确回谈，而非逼问或消失 | high | ENTJ-B08、B10 | ENTJ-F05、F07、F09 | ENTJ-S02、S10、S13、S14、S16 | ENTJ-K08 | trust、comfort、conflict | 将上一题的决定权张力升级为直接冲突，先锁定可验证的暂停协议。 |
| 8 | ENTJ-SC08 | familiarity | ENTJ-C15 | 到达回谈时间后，能否分别处理事实、被替做决定的影响、责任和调整 | high | ENTJ-B10、B12 | ENTJ-F02、F05、F08、F09 | ENTJ-S02、S03、S10、S11、S12、S13、S16、S17 | ENTJ-K08 | trust、comfort、conflict | 对暂停进行实际验证；熟悉阶段以可观察修复而非内在好意或新方案收束。 |
| 9 | ENTJ-SC09 | ambiguity | ENTJ-C16 | 把玩家纳入未来安排是否仍需逐项确认时间、关系含义和退出条件 | high | ENTJ-B06、B11 | ENTJ-F01、F04、F06、F10 | ENTJ-S04、S08、S09、S14、S15、S17、S24、S28 | ENTJ-K04、K06、K10 | attraction、trust、comfort、conflict | 暧昧先出现强投入信号，测试“被纳入计划”与“已经承诺”之间的空隙。 |
| 10 | ENTJ-SC10 | ambiguity | ENTJ-C17 | 双方能否明确关系、排他和联系节奏，并允许考虑、不同意或退出 | high | ENTJ-B09、B11 | ENTJ-F06、F07、F10 | ENTJ-S08、S09、S14、S15、S17、S24、S28 | ENTJ-K04、K09、K10 | attraction、trust、comfort、conflict | 以可拒绝的关系确认收束，把帮助、投入、脆弱和未来计划转成双方真实决定。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：先让玩家修正霸总/CEO 预设，再进入有限时间中的计划与节奏协商；标签本身无机械价值，具体尊重和共同决定才有关系后果。
- **接触（3–5）**：从明确邀请进入实际帮助，再处理“先给方案还是先陪伴”的支持错位；主动和付出逐渐需要承担边界、意图与接收效果。
- **熟悉（6–8）**：共同活动中的高标准提高持续后果，随后形成“暂停—按时回谈”的完整修复弧线；效率与好意不能跳过责任。
- **暧昧（9–10）**：先出现把玩家纳入未来的隐含承诺信号，再逐项确认关系、排他和联系节奏；这是有意的“信号—确认”递进，不是同题复述。
- **重复控制**：`K02` 在 SC02、SC03、SC04、SC06 分别处理行程节奏、邀请、帮助范围和共同标准；`K08` 在 SC07/SC08 是暂停与修复的前后验证；`K10` 在 SC09/SC10 是未来投入与明确关系的前后验证。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级测试。F10/F11 只作需拆解的风险脚本，因此不设为主测试。

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | F11 | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | S |  | P |  |  |  |  |  |  |  | S | P |  |  |  |  |  |  |  |  |  |
| SC02 | S | P |  | S |  |  |  |  |  |  |  |  | P |  |  |  | S |  |  |  |  |
| SC03 | S |  |  |  | P |  |  |  |  |  |  |  | S | P |  |  |  |  |  |  |  |
| SC04 |  | S |  |  |  | P |  |  |  |  |  |  | S |  | P |  |  |  |  |  |  |
| SC05 |  |  | S |  | S |  |  |  | P |  |  |  |  |  |  | P |  |  |  |  |  |
| SC06 | S | S |  |  |  |  |  | P |  |  |  |  | S |  |  |  |  | P |  |  |  |
| SC07 |  |  |  |  | S |  | S |  | P |  |  |  |  |  |  |  |  |  | P |  |  |
| SC08 |  | S |  |  | S |  |  | P | S |  |  |  |  |  |  |  |  |  | P |  |  |
| SC09 | S |  |  | S |  | P |  |  |  | S |  |  |  |  | S |  | S |  |  |  | P |
| SC10 |  |  |  |  |  | S | P |  |  | S |  |  |  |  | S |  |  |  |  | S | P |

### 覆盖审计

- `ENTJ-F01` 至 `F11` 和 `ENTJ-K01` 至 `K10` 全部覆盖；12 个行为 `ENTJ-B01` 至 `B12` 也全部进入正式序列。
- A 类特征 F02、F03、F05～F09 均有主测试；B 类 F01/F04 只作为具体计划、目标和容量压力的次级解释，不推断能力或地位。
- C 类 F10/F11 只有次级风险覆盖：SC01 测试玩家是否拆除标签，SC09/SC10 明确拒绝从投入推断忠诚和承诺。它们不控制机械结果。
- `K06` 只在 SC02 与 SC09 作次级时间容量压力，`K09` 只在 SC10 作次级披露/透明压力；若 Stage 04 难以写清，可分别用 C09 与 C12 替换加强。
- 高风险集中在 SC06–SC10。初识不出现重大冲突、脆弱逼问或排他要求；熟悉后才要求暂停、回谈和承担影响。

## 4. 候选资格与排除

候选的完整触发、行为、ID 集和护栏以 [ENTJ 候选事件库](entj-candidate-scenes.md) 为准；本表记录本轮资格判断。

| candidate_id | primary feature | agency quality | eligibility | decision | reason |
|---|---|---|---|---|---|
| ENTJ-C01 | F03（F11 仅拆解） | strong | select | SC01 | 能在不赋予 meme 机械价值的前提下修正最显眼的本地化预设。 |
| ENTJ-C02 | F02 | strong | alternate | ALT-01 | 组织授权清楚，但与 SC02、SC06 的主动/共同决定压力重叠。 |
| ENTJ-C03 | F02 | strong | select | SC02 | 低风险、具体且可协商，适合作为初识阶段的节奏测试。 |
| ENTJ-C04 | F05 | strong | alternate | ALT-02 | 直接分歧可玩，但 SC03、SC05 和修复弧线已经覆盖表达影响。 |
| ENTJ-C05 | F05 | strong | select | SC03 | 明确邀请让主动、节奏和拒绝权同时可见，适合作为接触入口。 |
| ENTJ-C06 | F06 | strong | select | SC04 | 行动关心与帮助边界有清楚的双向压力，不要求读心。 |
| ENTJ-C07 | F09 | strong | select | SC05 | 直接测试方案、倾听、协助和空间的需求协商。 |
| ENTJ-C08 | F08 | strong | alternate | ALT-03 | 项目分工中的控制风险具体，但与 SC06 的标准/决定权测试同族。 |
| ENTJ-C09 | F04 | strong | alternate | ALT-04 | 可强化工作容量与可靠性，但正式序列已由 SC02、SC09 次级覆盖 K06。 |
| ENTJ-C10 | F05 | strong | alternate | ALT-05 | 玩笑边界适合强化 K03/K08，但会增加直接表达冲突的密度。 |
| ENTJ-C11 | F08 | strong | select | SC06 | 标准、成本、弹性和共同决定都可观察，适合作为熟悉阶段升级。 |
| ENTJ-C12 | F07 | strong | alternate | ALT-06 | 是较纯的脆弱与范围测试，可用于加强 K09，但正式序列把披露放进关系确认。 |
| ENTJ-C13 | F06/F09 | strong | alternate | ALT-07 | 支持落差后果充分，但与 SC05 同属方案/陪伴压力。 |
| ENTJ-C14 | F09 | strong | select | SC07 | 明确建立暂停协议，并为下一题提供可验证条件。 |
| ENTJ-C15 | F08 | strong | select | SC08 | 验证是否真正返回、承担决定权影响并调整行为，完成修复弧线。 |
| ENTJ-C16 | F06 | strong | select | SC09 | 把未来投入与关系含义分开，适合进入暧昧阶段。 |
| ENTJ-C17 | F07 | strong | select | SC10 | 明确处理关系、排他和联系节奏，允许考虑、拒绝和不匹配。 |
| ENTJ-C18 | F08 | strong | alternate | ALT-08 | 可作为更高后果的最终修复选择，但会弱化直接关系定义和 K09 覆盖。 |

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ENTJ-ALT-01 | ENTJ-C02 | first_meeting | F01/F02、K02 的组织授权 | SC02 | 更突出主动组织；减少约会节奏和工作容量的次级压力。 |
| ENTJ-ALT-02 | ENTJ-C04 | first_meeting | F03/F05、K03 的事实分歧 | SC01 或 SC02 | 具体观点冲突更强；会减少标签拆解或计划协商。 |
| ENTJ-ALT-03 | ENTJ-C08 | contact | F02/F05/F08、K02/K07 | SC05 | 更早暴露控制与决定权；会失去 K05 的支持方式主测试。 |
| ENTJ-ALT-04 | ENTJ-C09 | contact | F01/F04、K06 的工作容量与可靠性 | SC03 或 SC05 | K06 更清楚；会减少明确邀请或情绪支持覆盖。 |
| ENTJ-ALT-05 | ENTJ-C10 | contact | F03/F05/F09、K03/K08 的玩笑与语气边界 | SC03 或 SC05 | 表达影响更具体；直接冲突场景密度上升。 |
| ENTJ-ALT-06 | ENTJ-C12 | familiarity | F03/F07、K09 的有限披露 | SC06 或 SC08 | 隐私和脆弱边界更纯；会削弱高标准测试或拆开暂停—修复弧线。 |
| ENTJ-ALT-07 | ENTJ-C13 | familiarity | F03/F06/F09、K04/K05 的支持落差 | SC06 | 支持接收效果更强；会失去高标准与共同决定的主测试。 |
| ENTJ-ALT-08 | ENTJ-C18 | ambiguity | F02/F05/F08/F09/F10、K08/K10 的修复后去留 | SC10 | 结尾后果更强；直接关系定义、披露透明和 K09 覆盖减弱。 |

## 6. 风险与未决项

- 证据描述的是网络表征，不是 ENTJ 人群比例、心理事实或关系规律；Stage 04 每题仍需提供至少两种合理、代价不同的回应方向。
- `surface_record` 中“控制欲是深情”“天生敏感所以强势”“最痴情”“霸总/御姐”等包装不进入正式证据链，也不能把控制、占有或关系持续写成浪漫奖励。
- SC01 必须让后果来自玩家是否尊重个体，而不是玩家是否喜欢 ENTJ meme；若难以避免元测试感，可用 C04 替换并分配新 `scene_id`。
- SC07/SC08 是有意的两题弧线，但每题仍需独立成立：前者测试暂停条件，后者测试是否回来、承担影响和调整行为。
- SC09/SC10 是有意的信号—确认弧线，不预设确认恋爱或排他是正确结果；接受、拒绝、延后、提出不同节奏和退出都应保持合法。
- F04 的成就/工作叙事只用于时间容量和计划变更，不得暗示职业、收入、地位、执行成功率或“工作必然优先”。
- 运行时状态与规则保持共享合同，Stage 03 不批准任何状态变化数值、题目文案、选项、反馈或结局可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ENTJ-SEL-001 | v1 | initial lock | ENTJ-SC01–SC10 | none | ENTJ-C01、C03、C05、C06、C07、C11、C14、C15、C16、C17 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成拆标签—节奏—邀请—行动支持—情绪支持—标准—暂停—修复—未来投入—关系确认的递进。 | 覆盖 B01–B12、F01–F11、K01–K10；F10/F11 仅作风险拆解，K06/K09 为次级覆盖并各有备选。 | Stage 04 必须按本文件与 JSON 的完整上游 ID 集写题；任何替换使用新 scene_id，并同步注册表与日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可为每个 `scene_id` 编写题干、NPC 表现、四项策略、即时反馈和追溯数据；本阶段没有批准任何对白、选项文本、分数、模糊提示、阈值或结局文案。
