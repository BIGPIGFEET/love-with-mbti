# INFJ 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [infj-formal-sequence.json](../traceability/infj-formal-sequence.json)。  
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题，复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | question_id | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Q01 | INFJ-SC01 | first_meeting | INFJ-C02 | 深入话题是否以询问和可拒绝节奏展开，而不是把深聊当作优越或亲密测试 | low | INFJ-B01 | INFJ-F01 | INFJ-S03、INFJ-S04、INFJ-S05、INFJ-S11 | INFJ-K01 | attraction、comfort | 以共同兴趣和低风险选择开场，让辨识度来自交流深度，同时保留轻松聊天的合法性。 |
| 2 | Q02 | INFJ-SC02 | first_meeting | INFJ-C03 | 玩家能否回应一个可错的观察假设，并保留修正或不解释的权利 | low-medium | INFJ-B06 | INFJ-F07 | INFJ-S04、INFJ-S10 | INFJ-K06 | trust、comfort、conflict | 从话题节奏转向信号理解，尽早确立“观察后询问、不得读心”的互动规则。 |
| 3 | Q03 | INFJ-SC03 | contact | INFJ-C05 | 记住细节并提出实际帮助时，关心能否保持可拒绝、可调整且不制造关系债务 | medium | INFJ-B04 | INFJ-F03、INFJ-F10 | INFJ-S01、INFJ-S07、INFJ-S13、INFJ-S14、INFJ-S16、INFJ-S28 | INFJ-K04、INFJ-K05 | attraction、trust、comfort | 进入接触后先给出具体正向投入，但不让共情标签或帮助自动升级为告白。 |
| 4 | Q04 | INFJ-SC04 | contact | INFJ-C08 | 有限披露能否同时保护隐私和玩家对关系透明度的合理需要 | medium | INFJ-B02、INFJ-B11 | INFJ-F02、INFJ-F04 | INFJ-S05、INFJ-S06、INFJ-S07、INFJ-S11、INFJ-S12、INFJ-S13 | INFJ-K02、INFJ-K10 | trust、comfort、conflict | 从外部帮助进入私人范围，亲近增加但不授予继续追问、传播或身体接触的权利。 |
| 5 | Q05 | INFJ-SC05 | contact | INFJ-C10 | TA 延迟表达不适后，双方能否同时处理当前边界与先前信息不足 | medium-high | INFJ-B07 | INFJ-F05 | INFJ-S04、INFJ-S06、INFJ-S08、INFJ-S09、INFJ-S16 | INFJ-K07 | trust、comfort、conflict | 接触阶段以第一次真实摩擦收束，把“维持气氛”推进为可观察的边界责任。 |
| 6 | Q06 | INFJ-SC06 | familiarity | INFJ-C11 | 长期由一方承担倾听后，双方能否协商容量、互惠和不匹配，而不把共情设为义务 | high | INFJ-B04、INFJ-B07 | INFJ-F03、INFJ-F05、INFJ-F10 | INFJ-S01、INFJ-S04、INFJ-S06、INFJ-S07、INFJ-S08、INFJ-S09、INFJ-S13、INFJ-S14、INFJ-S16、INFJ-S28 | INFJ-K04、INFJ-K07 | trust、comfort、conflict | 将 Q03 的一次性帮助升级为持续互动结构，检验关心是否真正双向且允许没有容量。 |
| 7 | Q07 | INFJ-SC07 | familiarity | INFJ-C12 | 冲突暂停是否包含期限、必要联系和改变时间时的告知，而非逼问或消失 | high | INFJ-B08 | INFJ-F06 | INFJ-S03、INFJ-S11 | INFJ-K08 | trust、comfort、conflict | 从支持结构升级为即时冲突，先锁定暂停协议，为下一题提供可验证条件。 |
| 8 | Q08 | INFJ-SC08 | familiarity | INFJ-C13 | 到达回谈时间后，能否区分事实、推断、感受和责任，并提出可观察调整 | high | INFJ-B07、INFJ-B08、INFJ-B09 | INFJ-F05、INFJ-F06 | INFJ-S03、INFJ-S04、INFJ-S06、INFJ-S08、INFJ-S09、INFJ-S11、INFJ-S16 | INFJ-K07、INFJ-K08 | trust、comfort、conflict | 对 Q07 的暂停进行实际验证，以按时返回和承担影响完成熟悉阶段，而不是以善意或类型免责。 |
| 9 | Q09 | INFJ-SC09 | ambiguity | INFJ-C17 | 理想关系愿景能否拆成现实期待，并允许节奏、目标或价值不匹配 | high | INFJ-B01、INFJ-B10、INFJ-B12 | INFJ-F01、INFJ-F08 | INFJ-S03、INFJ-S04、INFJ-S05、INFJ-S06、INFJ-S11、INFJ-S15 | INFJ-K01、INFJ-K09、INFJ-K10 | attraction、trust、comfort、conflict | 修复之后进入未来取向，让“真实、成长、深度”接受现实条件校准，而非成为命定筛选。 |
| 10 | Q10 | INFJ-SC10 | ambiguity | INFJ-C16 | 双方能否明确关系、排他和联系节奏，并允许考虑、拒绝或退出 | high | INFJ-B05、INFJ-B11、INFJ-B12 | INFJ-F01、INFJ-F02、INFJ-F04、INFJ-F08 | INFJ-S04、INFJ-S05、INFJ-S06、INFJ-S07、INFJ-S11、INFJ-S13、INFJ-S15 | INFJ-K02、INFJ-K09、INFJ-K10 | attraction、trust、comfort、conflict | 以可拒绝的关系确认收束，把深聊、帮助、脆弱分享和默契转化为双方真实决定。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：先处理话题深度，再处理观察与推断。两题都允许玩家披露、设限或暂不解释，不以“接住 INFJ”作为唯一正确答案。
- **接触（3–5）**：从可拒绝的实际帮助进入有限披露，最后出现延迟表达的边界摩擦；关系由兴趣逐步转向隐私、可靠性和表达责任。
- **熟悉（6–8）**：一次性关心升级为长期互惠压力，随后形成“暂停—按时回谈”的完整修复弧线；内在善意必须转化为容量说明、返回和具体调整。
- **暧昧（9–10）**：先校准关系愿景和现实差异，再明确关系、排他与联系节奏；不预设确认恋爱比放慢、拒绝或退出更正确。
- **重复控制**：`F03/K04` 在 SC03 与 SC06 分别处理一次性帮助和长期支持结构；`F05/K07` 在 SC05、SC06、SC08 分别处理延迟边界、互惠压力与冲突修复；`F06/K08` 在 SC07/SC08 是有意的暂停—修复前后对照；`F08/K09/K10` 在 SC09/SC10 分别处理愿景校准和关系同意。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级测试。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | F11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |  |
| SC02 |  |  |  |  |  |  | P |  |  |  |  |
| SC03 |  |  | P |  |  |  |  |  |  | S |  |
| SC04 |  | P |  | S |  |  |  |  |  |  |  |
| SC05 |  |  |  |  | P |  |  |  |  |  |  |
| SC06 |  |  | S |  | P |  |  |  |  | S |  |
| SC07 |  |  |  |  |  | P |  |  |  |  |  |
| SC08 |  |  |  |  | S | P |  |  |  |  |  |
| SC09 | S |  |  |  |  |  |  | P |  |  |  |
| SC10 | S | S |  | P |  |  |  | S |  |  |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 |
|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |
| SC02 |  |  |  |  |  | P |  |  |  |  |
| SC03 |  |  |  | S | P |  |  |  |  |  |
| SC04 |  | P |  |  |  |  |  |  |  | S |
| SC05 |  |  |  |  |  |  | P |  |  |  |
| SC06 |  |  |  | P |  |  | S |  |  |  |
| SC07 |  |  |  |  |  |  |  | P |  |  |
| SC08 |  |  |  |  |  |  | S | P |  |  |
| SC09 | S |  |  |  |  |  |  |  | P | S |
| SC10 |  | S |  |  |  |  |  |  | S | P |

### 3.3 覆盖审计

- 实质行为特征 `F01` 至 `F08` 全部覆盖；F03、F05、F06 因承担关心、边界与修复主轴而有意重复。
- 去刻板特征 `F10` 作为 SC03/SC06 的次级护栏：具体关心与互惠决定关系表现，不预设共情强度。`F11` 与 `K03` 保留在反标签备选 `INFJ-C01`，避免正式序列以 MBTI 元话题占用初识名额。
- 低置信 `F09` 有意不覆盖，不进入任何正式场景或机制；暂停与修复只由 `F05/F06` 支撑。
- `K01`、`K02`、`K04` 至 `K10` 均覆盖；未覆盖的 `K03` 是类型标签 vs 个体复杂性的元冲突，可由 ALT-01 修复。
- 高后果集中在 SC06–SC10。初识不出现重大隐私、长期情绪劳动、争吵或排他要求；熟悉后才要求暂停、回谈和承担影响。

## 4. 候选资格与排除

候选的完整触发、行为、ID 集和护栏以 [INFJ 候选事件库](infj-candidate-scenes.md) 为准；本表记录本轮资格判断。

| candidate_id | primary feature | agency quality | eligibility | decision | reason |
|---|---|---|---|---|---|
| INFJ-C01 | F10/F11（反标签） | strong | alternate | ALT-01 | 反刻板价值高，但元话题会占用初识名额；保留为修复 F11/K03 覆盖的替换。 |
| INFJ-C02 | F01 | strong | select | INFJ-SC01 | 低风险、有明确节奏选择，能表现深聊偏好而不把轻松交流降级。 |
| INFJ-C03 | F07 | strong | select | INFJ-SC02 | 将读心包装改为可错假设与询问，具有清楚且非单解的决策压力。 |
| INFJ-C04 | F02 | strong | alternate | ALT-02 | 是更轻的开放节奏测试，可替换 SC02；正式序列选择 C08 承担更具体的隐私边界。 |
| INFJ-C05 | F03 | strong | select | INFJ-SC03 | 实际帮助具体、可拒绝且包含意图确认，适合接触阶段的正向投入。 |
| INFJ-C06 | F03/F04 | strong | alternate | ALT-03 | 支持方式菜单清楚，但正式序列已有 C05 的帮助信号与 C11 的长期容量升级。 |
| INFJ-C07 | F04 | strong | alternate | ALT-04 | 表达/接收落差可玩性强，但会与 SC03/SC06 的关心主轴过密。 |
| INFJ-C08 | F02 | strong | select | INFJ-SC04 | 有限披露同时包含隐私权与玩家透明需求，关系后果比 C04 更完整。 |
| INFJ-C09 | F07 | strong | exclude | none | 与 SC02 同为“注意细节后核对”测试，取消安排只是提高后果，没有增加新的核心决策。 |
| INFJ-C10 | F05 | strong | select | INFJ-SC05 | 延迟边界让双方责任都可见，适合作为接触阶段第一次真实摩擦。 |
| INFJ-C11 | F05 | strong | select | INFJ-SC06 | 将一次性关心升级为长期互惠结构，适合作为熟悉阶段的压力提升。 |
| INFJ-C12 | F06 | strong | select | INFJ-SC07 | 明确建立暂停协议，并为下一题留下可验证条件。 |
| INFJ-C13 | F05/F06 | strong | select | INFJ-SC08 | 验证是否真正返回、承担影响和调整行为，完成修复弧线。 |
| INFJ-C14 | F08 | strong | alternate | ALT-05 | 象征意义与现实限制的冲突清楚，但正式序列把有限名额留给互惠压力和后期愿景校准。 |
| INFJ-C15 | F02/F03 | strong | alternate | ALT-06 | 保密与支持容量后果具体，可强化隐私，但会增加安全例外负担或拆开暂停—修复弧线。 |
| INFJ-C16 | F04/F08 | strong | select | INFJ-SC10 | 直接处理关系、排他和联系节奏，允许拒绝和退出，适合最终收束。 |
| INFJ-C17 | F08 | strong | select | INFJ-SC09 | 在关系确认前先暴露愿景与现实不匹配，避免把明确关系写成唯一目标。 |
| INFJ-C18 | F05/F06/F08 | strong | alternate | ALT-07 | 可作为更高后果的最终修复选择，但会弱化正式序列对愿景与关系定义的直接覆盖。 |

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ALT-01 | INFJ-C01 | first_meeting | F10/F11、K03 | SC01 或 SC02 | 标签辨识度更高，但减少具体关系互动；不得把反标签变成真假 INFJ 审判。 |
| ALT-02 | INFJ-C04 | first_meeting | F02、K02 | SC02 | 更轻地测试开放节奏；会失去 F07/K06 的读心风险校正。 |
| ALT-03 | INFJ-C06 | contact | F03/F04/F10、K04/K05 | SC03 | 支持方式选择更直接；会失去记住细节与可拒绝帮助的正向辨识度。 |
| ALT-04 | INFJ-C07 | contact | F03/F04、K05 | SC03 | 表达/接收落差更突出；与 SC06 的关心主轴更接近。 |
| ALT-05 | INFJ-C14 | familiarity | F08、K09 | SC06 | 可提前校准意义与现实；会削弱情绪劳动互惠和 F10 的去刻板护栏。 |
| ALT-06 | INFJ-C15 | familiarity | F02/F03/F04、K02/K04/K10 | SC06 或 SC08 | 私密与保密责任更具体；强度更高，并可能拆开暂停—修复弧线。 |
| ALT-07 | INFJ-C18 | ambiguity | F05/F06/F08、K07/K08/K09/K10 | SC09 或 SC10 | 以修复后是否继续收束，后果更强；愿景差异或明确关系同意会失去独立主测试。 |

## 6. 风险与未决项

- 证据描述的是网络表征，不是 INFJ 人群比例、心理事实或关系规律；Stage 04 每题仍需提供至少两种合理、代价不同的回应方向。
- `surface_record` 中“强制爱、使用说明书、读心、绿老头、最难追、灵魂伴侣”等包装不进入正式证据链；不能把越界追逐、单向情绪劳动、失联或理想化写成爱得深。
- SC03 与 SC06 是有意的关心递进，但每题必须独立：前者测试一次帮助的意图与可拒绝性，后者测试长期支持结构的容量和互惠。
- SC07/SC08 是有意的两题弧线，但不得靠连续剧情制造唯一正确答案：前者测试暂停条件，后者测试实际返回与修复；任一题都允许提出不同合理安排或退出。
- SC09/SC10 不预设关系确认是成功答案。价值不匹配、放慢、维持其他关系、明确拒绝和退出都必须保留为合法意图。
- 运行时状态与规则保持共享合同，Stage 03 不批准任何状态变化数值、题目文案、阈值、结局或可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| INFJ-SEL-001 | v1 | initial lock | INFJ-SC01–INFJ-SC10 | none | INFJ-C02、INFJ-C03、INFJ-C05、INFJ-C08、INFJ-C10、INFJ-C11、INFJ-C12、INFJ-C13、INFJ-C17、INFJ-C16 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成深聊节奏—观察校验—帮助—披露—边界—互惠—暂停—修复—愿景—关系确认的递进。 | 覆盖 F01–F08、F10 与 K01、K02、K04–K10；F09 保持机械惰性，F11/K03 保留在 ALT-01。 | Stage 04 必须按本文件与 JSON 的完整上游 ID 集写题；任何替换使用新 `scene_id`，并同步注册表与日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可为每个 `scene_id` 编写题干、NPC 表现、四项策略、即时反馈和追溯数据；本阶段没有批准任何对白、选项文本、分数、模糊提示、阈值或结局文案。
