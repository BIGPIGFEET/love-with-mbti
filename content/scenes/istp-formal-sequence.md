# ISTP 正式场景序列（Stage 03）

> 状态：v1 locked。此文件锁定十个场景的测试意图、顺序与完整上游追溯，不包含最终对白、四项选择、即时反馈、效果值、阈值或结局。机器可读注册见 [istp-formal-sequence.json](../traceability/istp-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时状态 `attraction / trust / comfort / conflict`。

## 1. 候选资格评估

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ISTP-C01 | 自助设备排错 | 初见时寄存设备报错且有人工替代。 | TA 查提示、问已试步骤并提出可逆测试。 | 决定参与程度及何时转用替代方案。 | ISTP-F01 | ISTP-F03、ISTP-F08 | ISTP-B01 | ISTP-F01、ISTP-F03、ISTP-F08 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S05、ISTP-S06、ISTP-S27 | ISTP-K01 | trust、comfort | strong | alternate | 可玩性强，但与 C05 同测排错协作；C05 的账户与操作权边界更清楚。 |
| ISTP-C02 | 短句节奏 | 多人寒暄转为两人同行后，TA 回应变短。 | TA 不扩展私人话题，但对具体事项回应清楚。 | 校准沟通节奏而不把短句当作关系结论。 | ISTP-F02 | none | ISTP-B02 | ISTP-F02 | ISTP-S03、ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S27 | ISTP-K01 | attraction、comfort、conflict | strong | select | 低风险、可退出，适合第一题并直接测试表达与解释的区分。 |
| ISTP-C03 | 类型投射 | 玩家用机械师、酷哥或独行侠梗猜测 TA。 | TA 以实际兴趣、不会的事或保留意见修正标签。 | 决定是否放下快捷标签、转向认识具体的人。 | ISTP-F09 | ISTP-F01 | ISTP-B03 | ISTP-F01、ISTP-F09 | ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S27 | ISTP-K09 | comfort、attraction、conflict | strong | select | 覆盖 Stage-02 要求的反类型投射；只审计玩家行为，不把风险标签机械化。 |
| ISTP-C04 | 初见改地点 | 原定地点关闭，附近有成本不同的替代地点。 | TA 整理选择并询问玩家的不可变条件。 | 共同决定弹性范围而非由一方拍板。 | ISTP-F07 | none | ISTP-B08 | ISTP-F07 | ISTP-S03、ISTP-S04、ISTP-S06、ISTP-S12、ISTP-S27 | ISTP-K06 | trust、comfort、attraction | strong | alternate | 是 F07/K06 的初见备选，但替换正式初见题会损失 F02 或风险标签审计。 |
| ISTP-C05 | 账户问题协作 | 玩家请 TA 查看旅行预订或软件设置问题。 | TA 收集报错与目标，并确认玩家希望如何参与。 | 在效率、理解过程、隐私与操作权之间划界。 | ISTP-F01 | ISTP-F03、ISTP-F08 | ISTP-B01 | ISTP-F01、ISTP-F03、ISTP-F08 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S05、ISTP-S06、ISTP-S27 | ISTP-K01 | trust、comfort、conflict | strong | select | 把排错叙事落到可观察协作，不要求 TA 成功或具备万能技术能力。 |
| ISTP-C06 | 挫折支持 | 玩家叙述同时含现实问题与失望的挫折。 | TA 先抓解决点，随后留出确认支持方式的空间。 | 说明此刻需要倾听、建议、帮助还是暂停。 | ISTP-F03 | ISTP-F04 | ISTP-B04、ISTP-B05 | ISTP-F03、ISTP-F04 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S09、ISTP-S13、ISTP-S27 | ISTP-K02、ISTP-K03 | trust、comfort、conflict | strong | alternate | 支持协商清楚，但与 C12 的情绪需要及 C11 的直接表达分别重叠。 |
| ISTP-C07 | 具体小帮助 | TA 带来玩家先前提过需要的小物。 | TA 将帮助保持为有限且可拒绝的行动。 | 接受或拒绝帮助，并确认范围而不制造情感债务。 | ISTP-F05 | none | ISTP-B06 | ISTP-F05 | ISTP-S09、ISTP-S10、ISTP-S11 | ISTP-K04、ISTP-K10 | attraction、trust、comfort | strong | select | 作为角色已表现的个体偏好，为最终关系边界题提供早期事实；F05 仍按 B 类降权。 |
| ISTP-C08 | 专注时段 | TA 提前说明专注个人项目，消息变短但约定仍有效。 | TA 保留专注时间并给出重新联系点。 | 区分消息长度、空间边界与可靠性。 | ISTP-F06 | ISTP-F01、ISTP-F02、ISTP-F08 | ISTP-B02、ISTP-B07、ISTP-B10 | ISTP-F01、ISTP-F02、ISTP-F06、ISTP-F08 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S09、ISTP-S11、ISTP-S27 | ISTP-K05、ISTP-K08 | trust、comfort、conflict | strong | alternate | 能补强空间与专注，但与 C10、C13 分别重复，正式序列将两种压力拆开。 |
| ISTP-C09 | 天气改计划 | 户外安排因天气交通变化而成本上升。 | TA 提出可回退方案并承认玩家投入。 | 权衡新信息、已投入成本与舒适范围。 | ISTP-F07 | none | ISTP-B08 | ISTP-F07 | ISTP-S03、ISTP-S04、ISTP-S06、ISTP-S12、ISTP-S27 | ISTP-K06 | trust、comfort、conflict | strong | exclude | 与 C10 同属计划弹性，C10 额外包含双方时间与空间需要，关系辨识度更高。 |
| ISTP-C10 | 周末空间协商 | 玩家倾向连续相处，TA 希望保留独处时段。 | TA 说明个人节奏并确认可兑现的共同时间。 | 区分共同、个人、可变与不可变时段。 | ISTP-F06 | ISTP-F07 | ISTP-B07、ISTP-B08 | ISTP-F06、ISTP-F07 | ISTP-S03、ISTP-S04、ISTP-S09、ISTP-S11、ISTP-S12 | ISTP-K05、ISTP-K06 | trust、comfort、attraction、conflict | strong | select | 同时测试自主连接与可靠安排，适合接触阶段的收束压力。 |
| ISTP-C11 | 直接反馈受伤 | 共同任务后，TA 的简短负面反馈让玩家感到被否定。 | TA 得知影响后补充事实与原意，并面对表达责任。 | 指出影响而不人格定性，并判断需要何种修复。 | ISTP-F03 | ISTP-F04 | ISTP-B04、ISTP-B11 | ISTP-F03、ISTP-F04 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S07、ISTP-S09、ISTP-S13、ISTP-S27 | ISTP-K03 | trust、comfort、conflict | strong | select | 为后续暂停与修复建立具体伤害，不用“直率”替 TA 免责。 |
| ISTP-C12 | 有期限暂停 | 情绪分歧中，TA 难以继续表达并提出稍后回谈。 | TA 暂离后按约返回，说明目前能表达的感受与需要。 | 同时保护处理时间、最低信息和不被无限期悬置的边界。 | ISTP-F04 | ISTP-F03 | ISTP-B05、ISTP-B09 | ISTP-F03、ISTP-F04 | ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S09、ISTP-S10、ISTP-S13、ISTP-S27 | ISTP-K02、ISTP-K07 | trust、comfort、conflict | strong | select | 把私人处理与失联分开，并为暧昧阶段的修复验证提供条件。 |
| ISTP-C13 | 分享专注过程 | TA 分享一项近期投入的兴趣过程，玩家不熟悉。 | TA 展示试验与失败，并根据理解门槛调整深度。 | 诚实表达兴趣和注意力边界，协商参与程度。 | ISTP-F08 | ISTP-F01、ISTP-F02 | ISTP-B02、ISTP-B10 | ISTP-F01、ISTP-F02、ISTP-F08 | ISTP-S02、ISTP-S04、ISTP-S05、ISTP-S06、ISTP-S07、ISTP-S27 | ISTP-K08 | attraction、comfort、trust | strong | select | 提供熟悉阶段的正向共同探索，避免整段只由冲突构成，也不授予类型天赋。 |
| ISTP-C14 | 行程临时活动 | 半日行程中出现会压缩休息或返程余量的活动。 | TA 表达想尝试，也列出退出点、成本与原承诺。 | 区分可调整部分并承担选择影响。 | ISTP-F07 | none | ISTP-B08 | ISTP-F07 | ISTP-S03、ISTP-S04、ISTP-S06、ISTP-S12、ISTP-S27 | ISTP-K06 | attraction、trust、comfort、conflict | strong | alternate | 可在熟悉阶段补强 F07/K06，但会替换更重要的专注、直接影响或暂停测试。 |
| ISTP-C15 | 未授权介入 | 玩家透露困扰，TA 想到办法但尚未获准介入。 | TA 提供选项并在外部行动前等待授权。 | 决定接受方案、只要陪伴或暂不处理。 | ISTP-F03 | ISTP-F04 | ISTP-B05 | ISTP-F03、ISTP-F04 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S09、ISTP-S13、ISTP-S27 | ISTP-K02 | trust、comfort、conflict | strong | exclude | 与 C05 的操作权、C06 的支持方式和 C12 的情绪边界均重叠，新增关系信息不足。 |
| ISTP-C16 | 行动是否浪漫 | 多次帮助与共同活动让玩家猜测恋爱含义。 | TA 区分普通帮助、在意和未确定的关系意图。 | 直接表达理解并允许非告白或延后答案。 | ISTP-F05 | ISTP-F06 | ISTP-B06、ISTP-B12 | ISTP-F05、ISTP-F06 | ISTP-S03、ISTP-S09、ISTP-S10、ISTP-S11 | ISTP-K04、ISTP-K10 | attraction、trust、comfort、conflict | strong | alternate | 是较低承诺强度的暧昧备选；C17 对共同时间与排他边界覆盖更完整。 |
| ISTP-C17 | 关系边界定义 | 双方讨论稳定关系，但时间、独处、联系与排他期待未对齐。 | TA 说明具体投入、保留空间和仍需考虑的问题。 | 逐项表达底线与可协商部分，并接受匹配或不匹配。 | ISTP-F06 | ISTP-F05 | ISTP-B07、ISTP-B12 | ISTP-F05、ISTP-F06 | ISTP-S03、ISTP-S09、ISTP-S10、ISTP-S11 | ISTP-K05、ISTP-K10 | attraction、trust、comfort、conflict | strong | select | 作为最终题把已出现的行动投入与自主边界转成明确、可拒绝的共同决定。 |
| ISTP-C18 | 回谈验证 | 直接表达造成伤害后，双方来到约定的回谈时点。 | TA 说明处理后的理解、承认影响并提出调整。 | 核对修复是否回应核心问题，并决定是否继续协商。 | ISTP-F03 | ISTP-F04 | ISTP-B09、ISTP-B11 | ISTP-F03、ISTP-F04 | ISTP-S03、ISTP-S04、ISTP-S07、ISTP-S09、ISTP-S10、ISTP-S13、ISTP-S27 | ISTP-K03、ISTP-K07 | trust、comfort、conflict | strong | select | 验证修复能力而非自动和好，适合关系定义前的最后责任检查。 |

## 2. 锁定正式序列

| order | question_id | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Q01 | ISTP-SC01 | first_meeting | ISTP-C02 | 玩家能否把短句当作待校准的沟通节奏，而非拒绝或亲密结论 | low | ISTP-B02 | ISTP-F02 | ISTP-S03、ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S27 | ISTP-K01 | attraction、comfort、conflict | 从低压力、可退出的两人同行开始，让“观察行为而非猜类型”成为序列规则。 |
| 2 | Q02 | ISTP-SC02 | first_meeting | ISTP-C03 | 玩家能否修正机械师与酷孤狼投射，转向角色的个体经验 | low-medium | ISTP-B03 | ISTP-F01、ISTP-F09 | ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S27 | ISTP-K09 | comfort、attraction、conflict | 在初步沟通后暴露类型预设；风险标签只被审计，不产生人格定论。 |
| 3 | Q03 | ISTP-SC03 | contact | ISTP-C05 | 排错协作能否保留玩家的隐私、操作权与理解过程 | medium | ISTP-B01 | ISTP-F01、ISTP-F03、ISTP-F08 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S05、ISTP-S06、ISTP-S27 | ISTP-K01 | trust、comfort、conflict | 从语言校准转入共同处理具体问题，以可逆合作建立早期信任。 |
| 4 | Q04 | ISTP-SC04 | contact | ISTP-C07 | 一项具体帮助能否保持可拒绝，并避免被自动换算成浪漫承诺 | medium | ISTP-B06 | ISTP-F05 | ISTP-S09、ISTP-S10、ISTP-S11 | ISTP-K04、ISTP-K10 | attraction、trust、comfort | 协作之后出现个体化关心，但只建立事实，不替双方定义关系。 |
| 5 | Q05 | ISTP-SC05 | contact | ISTP-C10 | 个人空间、共同时间与弹性安排能否被拆成可兑现的协商 | medium-high | ISTP-B07、ISTP-B08 | ISTP-F06、ISTP-F07 | ISTP-S03、ISTP-S04、ISTP-S09、ISTP-S11、ISTP-S12 | ISTP-K05、ISTP-K06 | trust、comfort、attraction、conflict | 接触阶段收束于双方都有实际成本的安排，提升后续相处的可靠性要求。 |
| 6 | Q06 | ISTP-SC06 | familiarity | ISTP-C13 | 专注兴趣的分享能否照顾理解门槛与双方注意力，而不表演类型天赋 | medium-high | ISTP-B02、ISTP-B10 | ISTP-F01、ISTP-F02、ISTP-F08 | ISTP-S02、ISTP-S04、ISTP-S05、ISTP-S06、ISTP-S07、ISTP-S27 | ISTP-K08 | attraction、comfort、trust | 以正向共同探索进入熟悉阶段，为后续高压分歧保留情感与节奏变化。 |
| 7 | Q07 | ISTP-SC07 | familiarity | ISTP-C11 | 直接反馈造成影响后，意图说明能否与承担和调整同时发生 | high | ISTP-B04、ISTP-B11 | ISTP-F03、ISTP-F04 | ISTP-S02、ISTP-S03、ISTP-S04、ISTP-S07、ISTP-S09、ISTP-S13、ISTP-S27 | ISTP-K03 | trust、comfort、conflict | 从共享兴趣转入具体受伤，开始“影响—暂停—修复”的责任弧线。 |
| 8 | Q08 | ISTP-SC08 | familiarity | ISTP-C12 | 私人处理是否具有最低信息、明确期限和可验证的返回 | high | ISTP-B05、ISTP-B09 | ISTP-F03、ISTP-F04 | ISTP-S04、ISTP-S06、ISTP-S07、ISTP-S09、ISTP-S10、ISTP-S13、ISTP-S27 | ISTP-K02、ISTP-K07 | trust、comfort、conflict | 熟悉阶段以有期限暂停提高不确定性，但不把沉默或追问浪漫化。 |
| 9 | Q09 | ISTP-SC09 | ambiguity | ISTP-C18 | 回谈能否承认影响、调整行为并允许问题仍未完全解决 | high | ISTP-B09、ISTP-B11 | ISTP-F03、ISTP-F04 | ISTP-S03、ISTP-S04、ISTP-S07、ISTP-S09、ISTP-S10、ISTP-S13、ISTP-S27 | ISTP-K03、ISTP-K07 | trust、comfort、conflict | 暧昧阶段先验证修复质量；没有这一步，亲近和关系定义都缺少可靠基础。 |
| 10 | Q10 | ISTP-SC10 | ambiguity | ISTP-C17 | 双方能否逐项确认投入、空间、联系与排他边界，并接受不匹配 | highest | ISTP-B07、ISTP-B12 | ISTP-F05、ISTP-F06 | ISTP-S03、ISTP-S09、ISTP-S10、ISTP-S11 | ISTP-K05、ISTP-K10 | attraction、trust、comfort、conflict | 在具体行动与修复均可观察后才讨论关系，不用氛围、帮助或频率替代同意。 |

## 3. 阶段、难度与重复控制

- **初识（Q01-Q02）**：先观察短句，再处理玩家主动带入的类型标签。两题都允许停止互动，不要求角色证明兴趣、社交能力或工具能力。
- **接触（Q03-Q05）**：从具体协作到有限帮助，再到有现实成本的时间安排；亲近程度上升，但每一步都保留操作权、拒绝和重谈。
- **熟悉（Q06-Q08）**：先用兴趣分享建立正向共同经验，再进入直接表达的影响与有期限暂停，后果从注意力失配递进到信任和舒适风险。
- **暧昧（Q09-Q10）**：先验证冲突后的修复，再讨论关系结构。修复不保证进入关系，关系确认也不预设“在一起”为正确答案。
- **有意重复**：`ISTP-K01` 在 Q01 与 Q03 分别测试沟通解释和操作参与；`ISTP-K03/K07` 在 Q07-Q09 构成“影响—暂停—回谈”弧线；`ISTP-K05/K10` 在 Q04、Q05、Q10 分别处理有限帮助、时间空间与最终关系边界。其余相邻题不重复同一核心决定。

## 4. 覆盖矩阵

`P` 表示主测试，`S` 表示次级测试。`ISTP-F09` 的 `P` 只表示叙事审计覆盖，不批准任何状态方向或效果值。

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 / Q01 |  | P |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  |  |  |
| SC02 / Q02 | S |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  |  | P |  |
| SC03 / Q03 | P |  | S |  |  |  |  | S |  | P |  |  |  |  |  |  |  |  |  |
| SC04 / Q04 |  |  |  |  | P |  |  |  |  |  |  |  | P |  |  |  |  |  | S |
| SC05 / Q05 |  |  |  |  |  | P | S |  |  |  |  |  |  | P | S |  |  |  |  |
| SC06 / Q06 | S | S |  |  |  |  |  | P |  |  |  |  |  |  |  |  | P |  |  |
| SC07 / Q07 |  |  | P | S |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  |
| SC08 / Q08 |  |  | S | P |  |  |  |  |  |  | S |  |  |  |  | P |  |  |  |
| SC09 / Q09 |  |  | P | S |  |  |  |  |  |  |  | P |  |  |  | S |  |  |  |
| SC10 / Q10 |  |  |  |  | S | P |  |  |  |  |  |  |  | S |  |  |  |  | P |

### 覆盖审计

- 行为 `ISTP-B01` 至 `ISTP-B12`、特征 `ISTP-F01` 至 `ISTP-F09`、冲突 `ISTP-K01` 至 `ISTP-K10` 均至少出现一次；四个运行时状态均被保留。
- A 类特征均有覆盖。`ISTP-F07` 与 `ISTP-K06` 只作 Q05 的次级压力，以免把临场性扩写成冒险或不可靠；`ISTP-C04`、`C14` 是它们的专门备选。
- B 类 `ISTP-F05` 只在 Q04 作为角色已经表现的个体偏好，并在 Q10 作为既有事实的次级背景；这不是对 ISTP 的关系规律声明。
- C 类 `ISTP-F09` 只在 Q02 审计玩家的“酷孤狼/机械师”投射。后续写题不得让标签本身增加或减少任何状态。
- Q07-Q09 的冲突修复题集中是有意的连续责任测试：Q07 识别影响，Q08 区分暂停与失联，Q09 验证回谈；三题不得写成同一种“要不要原谅”。

## 5. 备选池与替换指导

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ALT-01 | ISTP-C01 | first_meeting | F01/F03/F08、K01 的低风险排错协作 | SC01 或 SC02 | 开场更具行动性，但会损失短句校准或 F09/K09 风险审计；不得与 SC03 同时保留。 |
| ALT-02 | ISTP-C04 | first_meeting | F07、K06 的独立主测试 | SC02 | 提升计划弹性覆盖，但不再正式审计类型投射。 |
| ALT-03 | ISTP-C06 | contact | F03/F04、K02/K03 的支持方式协商 | SC04 或 SC05 | 情绪支持更早出现；替换 SC04 会丢失 K04，需同时用 C16 替换 SC10。 |
| ALT-04 | ISTP-C08 | contact | F01/F02/F06/F08、K05/K08 的消息与空间交叉测试 | SC05 | 增强消息边界，但损失 F07/K06 的计划协商，并与 SC06 的专注主题靠近。 |
| ALT-05 | ISTP-C14 | familiarity | F07、K06 的高后果主测试 | SC06 或 SC08 | 增强计划责任，却会损失 K08 的正向兴趣场景或 K02/K07 的暂停边界。 |
| ALT-06 | ISTP-C16 | ambiguity | F05/F06、K04/K10 的较低承诺关系确认 | SC10 | 更集中于行动含义，但不如 C17 完整覆盖共同时间、空间和排他期待。 |

若后续认为 B 类 `ISTP-F05` 的两次出现仍过重，应采用成对替换：`SC04/C07 → C06` 且 `SC10/C17 → C16`。这样由 C16 保留 K04/K10，由 SC05 保留 K05，同时减少“行动关心”在正式序列中的铺陈长度；两个被替换场景必须使用新的 `scene_id`，不能复用当前 ID。

## 6. 未决证据与呈现风险

- 上游材料描述网络表征与自选社区经验，不是现实 ISTP 人群比例、心理事实或关系规律；Stage 04 必须给每题保留多种合理玩家意图。
- Q02 中的机械师、酷孤狼与危险标签只用于暴露和修正玩家预设。不得把 TA 的反驳包装成新的“反差酷感”，也不得由 F09 派生分数。
- Q03 与 Q06 都涉及排错或专注，但前者主测操作权与协作，后者主测分享深度与共同注意；写题时不得都变成“夸 TA 技术厉害”。
- Q04、Q10 使用证据较弱的 F05，必须明确这是该角色已表现的个体偏好；帮助、稳定出现和共同活动不能证明告白、排他或同意。
- Q05 的空间需求必须同时保留玩家对联系与可靠性的正当需要；不得把失联、冷处理或“回避型依恋”归因于 ISTP。
- Q07-Q09 必须分别写成影响确认、暂停边界和修复验证。暂停不免责，回来不抵消伤害，修复也不强迫立即原谅。
- 运行时规则保持共享合同；本阶段没有批准效果值、选项优劣、阶段门槛或任何结局可达性判断。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ISTP-SEL-001 | v1 | initial lock | ISTP-SC01–ISTP-SC10 | none | ISTP-C02、ISTP-C03、ISTP-C05、ISTP-C07、ISTP-C10、ISTP-C13、ISTP-C11、ISTP-C12、ISTP-C18、ISTP-C17 | 首次从 18 个候选中锁定 2/3/3/2 序列，形成沟通校准—投射修正—具体协作—边界协商—影响—暂停—修复—关系定义的递进。 | 完整覆盖 B01-B12、F01-F09、K01-K10 与四状态；F05 降权、F09 仅审计。 | Stage 04 必须按本文件与 JSON 的 exact ID 集写题；任何替换需新建 scene_id、同步两份 Stage-03 产物并追加日志。 |

## 8. Stage-04 交接声明

本序列已锁定为 ISTP Stage 04 的唯一正式场景集合。下游必须按 `question_id` 与 `scene_id` 精确连接 JSON 注册表，不得只按显示顺序推断。下一阶段可以编写题干、NPC 原话、四项策略与即时反馈，但本阶段没有批准任何对白、选项文本、效果值、模糊提示、阈值或结局文案。
