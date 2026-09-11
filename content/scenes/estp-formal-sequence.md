# ESTP 正式场景序列（Stage 03）

> 状态：v1 locked（2026-09-10 首次锁定）。本文件不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [estp-formal-sequence.json](../traceability/estp-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时四维状态 attraction / trust / comfort / conflict。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ESTP-SC01 | first_meeting | ESTP-C01 | 面对即兴替代方案，双方能否保留准备、替代和退出空间 | low | ESTP-B01 | ESTP-F01 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S15、ESTP-S17 | ESTP-K01 | attraction、trust、comfort | 用现实但低成本的地点变化开场，测试是否能把行动力转成共同选择，而非速度考验。 |
| 2 | ESTP-SC02 | first_meeting | ESTP-C03 | 直接调侃造成不适时，能否核对意图、影响和公开边界 | low-medium | ESTP-B03 | ESTP-F03 | ESTP-S02、ESTP-S04、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K03 | attraction、trust、comfort、conflict | 从共同活动转入人际表达；初见只要求停止、说明与调整，不预设亲密或关系升级。 |
| 3 | ESTP-SC03 | contact | ESTP-C05 | 新活动挑战已有约定时，能否区分可变部分和核心履约 | medium | ESTP-B01、ESTP-B05 | ESTP-F01、ESTP-F05 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S11、ESTP-S15、ESTP-S16、ESTP-S17、ESTP-S18、ESTP-S42 | ESTP-K01、ESTP-K05 | attraction、trust、comfort、conflict | 进入接触后复用即兴特征，但新增已有约定和实际成本，使测试从参与意愿升级为可靠性。 |
| 4 | ESTP-SC04 | contact | ESTP-C06 | 玩家遇到难题时，倾听、确认、方案、行动或空间能否由当事人选择 | medium | ESTP-B02、ESTP-B06 | ESTP-F02、ESTP-F07 | ESTP-S02、ESTP-S03、ESTP-S05、ESTP-S07、ESTP-S08、ESTP-S11、ESTP-S12、ESTP-S18、ESTP-S38 | ESTP-K02、ESTP-K06 | attraction、trust、comfort | 从共同安排切到支持方式，避免连续测试计划；临场解决能力必须先经过需求核对。 |
| 5 | ESTP-SC05 | contact | ESTP-C09 | 同一件事出现不同说法时，能否区分隐私、表达适配和影响决定的关键事实 | medium-high | ESTP-B12 | ESTP-F03 | ESTP-S02、ESTP-S04、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K12 | trust、comfort、conflict | 把前两题的沟通与支持推进到事实透明和可核验影响，以信任成本收束接触阶段。 |
| 6 | ESTP-SC06 | familiarity | ESTP-C11 | 礼物、帮助、陪伴或身体亲近能否逐项确认形式、成本和同意 | high | ESTP-B07 | ESTP-F06 | ESTP-S04、ESTP-S11、ESTP-S12、ESTP-S15、ESTP-S17、ESTP-S18 | ESTP-K07 | attraction、trust、comfort | 熟悉后才引入具体亲密表达；关系强度上升，但任何形式都可拒绝、延后或替换。 |
| 7 | ESTP-SC07 | familiarity | ESTP-C14 | 高成本共同体验能否先核对不可逆成本、风险、退出与替代 | high | ESTP-B11 | ESTP-F01、ESTP-F02、ESTP-F09 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S05、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S14、ESTP-S15、ESTP-S17、ESTP-S18、ESTP-S38 | ESTP-K11 | attraction、trust、comfort、conflict | 从亲密表达切到现实共同投入；风险被限定为知情与后果测试，不承担危险魅力脚本。 |
| 8 | ESTP-SC08 | familiarity | ESTP-C13 | 争论暂停能否包含问题命名、明确返回和双方可承受的等待边界 | high | ESTP-B08 | ESTP-F03、ESTP-F07 | ESTP-S02、ESTP-S04、ESTP-S05、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S12、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K03、ESTP-K08 | trust、comfort、conflict | 让亲密与共同投入进入直接分歧，以可验证的暂停—返回协议收束熟悉阶段。 |
| 9 | ESTP-SC09 | ambiguity | ESTP-C18 | 面对坏男孩、花心玩家等外部投射，能否只依据具体行为、协议和后果判断 | high | ESTP-B13 | ESTP-F04、ESTP-F09、ESTP-F10 | ESTP-S02、ESTP-S03、ESTP-S05、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S09、ESTP-S10、ESTP-S13、ESTP-S14、ESTP-S15、ESTP-S16、ESTP-S18 | ESTP-K13 | attraction、trust、comfort、conflict | 进入暧昧后先拆除类型免责和预判背叛，避免标签替双方完成最终关系判断。 |
| 10 | ESTP-SC10 | ambiguity | ESTP-C15 | 好感和亲密已经存在时，能否逐项说明约会、排他、公开、性边界与承诺范围 | high | ESTP-B09 | ESTP-F05、ESTP-F08 | ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S09、ESTP-S10、ESTP-S11、ESTP-S14、ESTP-S15、ESTP-S16、ESTP-S18、ESTP-S42 | ESTP-K09 | attraction、trust、comfort、conflict | 在去除类型投射后，以双方可接受、修改、延后或退出的真实协议收束，不预设确认恋爱是唯一正确方向。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：先测试低成本即兴能否保留选择，再测试直接玩笑能否尊重公开边界。两题都只处理当下互动，不要求冒险、触碰、深层披露或承诺。
- **接触（3–5）**：从已有约定受到新鲜感挑战，切到一次具体支持，再进入影响玩家判断的事实差异。关系成本从时间与履约升级到情绪需要和信息信任。
- **熟悉（6–8）**：亲密表达、高成本共同体验、争论暂停依次提高同意、现实投入和修复责任；每题都允许拒绝、改变方案或承认不兼容。
- **暧昧（9–10）**：先拆解“坏男孩/花心玩家”投射，确保标签既不免责也不预判；最后才逐项讨论当前关系范围和承诺。
- **难度递进**：前两题只处理即时参与和表达影响；中段加入履约、支持与事实透明；后段才进入身体或金钱边界、高成本风险、冲突返回和关系定义。
- **相邻去重**：SC01 与 SC03 均含即兴，但由 SC02 隔开，前者无既有约定，后者测试履约；SC04 测试支持方式，SC05 测试事实一致性；SC07 的风险知情与 SC08 的冲突返回是不同责任结构；SC09 拆标签，SC10 才建立协议。

## 3. 覆盖矩阵

P 为主测试，S 为次级覆盖。ESTP-F09 只服务具体风险分级与反刻板，ESTP-F10 只服务反标签；两者不独立产生奖励或关系结论。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 |
|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |
| SC02 |  |  | P |  |  |  |  |  |  |  |
| SC03 | S |  |  |  | P |  |  |  |  |  |
| SC04 |  | S |  |  |  |  | P |  |  |  |
| SC05 |  |  | P |  |  |  |  |  |  |  |
| SC06 |  |  |  |  |  | P |  |  |  |  |
| SC07 | S | S |  |  |  |  |  |  | P |  |
| SC08 |  |  | S |  |  |  | P |  |  |  |
| SC09 |  |  |  | S |  |  |  |  | S | P |
| SC10 |  |  |  |  | S |  |  | P |  |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 | K11 | K12 | K13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |  |  |  |
| SC02 |  |  | P |  |  |  |  |  |  |  |  |  |  |
| SC03 | S |  |  |  | P |  |  |  |  |  |  |  |  |
| SC04 |  | S |  |  |  | P |  |  |  |  |  |  |  |
| SC05 |  |  |  |  |  |  |  |  |  |  |  | P |  |
| SC06 |  |  |  |  |  |  | P |  |  |  |  |  |  |
| SC07 |  |  |  |  |  |  |  |  |  |  | P |  |  |
| SC08 |  |  | S |  |  |  |  | P |  |  |  |  |  |
| SC09 |  |  |  |  |  |  |  |  |  |  |  |  | P |
| SC10 |  |  |  |  |  |  |  |  | P |  |  |  |  |

### 3.3 覆盖审计

- ESTP-F01 至 ESTP-F10 全部进入正式序列。F09 在 SC07 为风险边界主测试、在 SC09 只作反标签背景；F10 仅在 SC09 作为待拆解脚本。
- ESTP-K01、ESTP-K02、ESTP-K03、ESTP-K05 至 ESTP-K09、ESTP-K11 至 ESTP-K13 至少覆盖一次；K04 和 K10 有意留在备选 C02、C16。
- F03 在 SC02、SC05 为主测试、SC08 为次级覆盖：三者分别处理玩笑影响、事实一致性和暂停返回，分布在不同阶段且不相邻重复。
- F07 在 SC04、SC08 为主测试：前者在未错位前选择支持方式，后者在争论后建立返回协议，中间隔有透明度、亲密和风险场景。
- 正式序列覆盖行为 ESTP-B01 至 ESTP-B03、ESTP-B05 至 ESTP-B09、ESTP-B11 至 ESTP-B13；ESTP-B04、ESTP-B10 分别由 C02、C16 保留直接替换路径。
- K04 未入选是因为 F04 已在 SC09 的反标签场景被次级覆盖，而初识名额优先给即兴选择与直接表达；K10 未入选是因为最终两题优先处理类型投射和当前关系定义，未来确定性由备选单独修补。

## 4. 候选资格与未入选理由

候选完整叙述与护栏仍以 [ESTP 候选事件库](estp-candidate-scenes.md) 为准；下表记录 Stage 03 的资格判断和完整上游 ID 集。

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ESTP-C01 | 即兴地点替代 | 初见地点临时关闭 | TA 提供可尝试、可替代、可退出的安排 | 说明预算、节奏与参与意愿 | ESTP-F01 | none | ESTP-B01 | ESTP-F01 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S15、ESTP-S17 | ESTP-K01 | attraction、trust、comfort | strong | select | 低成本、可观察，适合作为行动与共同选择的开场。 |
| ESTP-C02 | 热闹后的真实容量 | 群体活动中 TA 主动后退场 | TA 说明容量并提供不同交流范围 | 尊重退场或继续要求维持气氛 | ESTP-F04 | none | ESTP-B04 | ESTP-F04 | ESTP-S02、ESTP-S05、ESTP-S06、ESTP-S13、ESTP-S15、ESTP-S18 | ESTP-K04 | attraction、comfort、trust | strong | alternate | 是 K04 和 B04 的直接修补项；初识正式名额优先保留行动选择与表达边界。 |
| ESTP-C03 | 直接玩笑的影响 | 公开调侃让玩家不舒服 | TA 停止并核对内容、语气与含义 | 说明边界、核对意图或结束互动 | ESTP-F03 | none | ESTP-B03 | ESTP-F03 | ESTP-S02、ESTP-S04、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K03 | attraction、trust、comfort、conflict | strong | select | 在低亲密阶段建立“意图不覆盖影响”的贯穿护栏。 |
| ESTP-C04 | 低风险可逆试行 | 初见活动存在身体、费用或安全顾虑 | TA 提供风险分级、退出点与普通替代 | 选择尝试、降级、替代或拒绝 | ESTP-F09 | ESTP-F01、ESTP-F02 | ESTP-B11 | ESTP-F01、ESTP-F02、ESTP-F09 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S05、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S14、ESTP-S15、ESTP-S17、ESTP-S18、ESTP-S38 | ESTP-K11 | attraction、trust、comfort、conflict | strong | alternate | 可把风险边界前置，但会与 SC07 重复，并让刻板风险过早占据开场。 |
| ESTP-C05 | 变更与核心履约 | 新活动挑战已有安静安排 | TA 区分核心约定和可变部分 | 接受变化、限缩、坚持或重排 | ESTP-F05 | ESTP-F01 | ESTP-B01、ESTP-B05 | ESTP-F01、ESTP-F05 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S11、ESTP-S15、ESTP-S16、ESTP-S17、ESTP-S18、ESTP-S42 | ESTP-K01、ESTP-K05 | attraction、trust、comfort、conflict | strong | select | 将初识即兴升级为接触阶段的可靠性测试，形成清楚递进。 |
| ESTP-C06 | 支持方式选择 | 玩家提到低落或现实难题 | TA 先询问倾听、确认、方案、行动或空间 | 明确需要和支持范围 | ESTP-F07 | ESTP-F02 | ESTP-B02、ESTP-B06 | ESTP-F02、ESTP-F07 | ESTP-S02、ESTP-S03、ESTP-S05、ESTP-S07、ESTP-S08、ESTP-S11、ESTP-S12、ESTP-S18、ESTP-S38 | ESTP-K02、ESTP-K06 | attraction、trust、comfort | strong | select | 以需求核对而非“只会解决问题”建立情绪沟通基线。 |
| ESTP-C07 | 突发补救共同决定 | 预订错误且快速方案改变费用和时间 | TA 说明风险并等待授权 | 授权、核实、改案或停止行程 | ESTP-F02 | none | ESTP-B02 | ESTP-F02 | ESTP-S02、ESTP-S03、ESTP-S07、ESTP-S08、ESTP-S18、ESTP-S38 | ESTP-K02 | trust、comfort、conflict | strong | alternate | 可强化 K02，但 SC04 已通过支持方式覆盖共同决定；入选会减弱 F05/K05。 |
| ESTP-C08 | 多通道亲近信号 | 邀约、帮助、调侃和身体接近并存 | TA 拆分各信号并确认边界 | 接受部分、改法、核对意图或拒绝 | ESTP-F06 | ESTP-F03 | ESTP-B03、ESTP-B07 | ESTP-F03、ESTP-F06 | ESTP-S02、ESTP-S04、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S12、ESTP-S15、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K03、ESTP-K07 | attraction、trust、comfort | strong | alternate | 可把亲近信号前置，但与 SC06 的具体同意重复，并会挤掉 K12 信息透明。 |
| ESTP-C09 | 不同说法与透明度 | 同一事件出现影响玩家判断的版本差异 | TA 区分隐私、适配和关键事实并接受核验 | 核对事实、设边界、要求修复或停止升级信任 | ESTP-F03 | none | ESTP-B12 | ESTP-F03 | ESTP-S02、ESTP-S04、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K12 | trust、comfort、conflict | strong | select | 提供独特的透明度测试，避免把“会看人说话”浪漫化成能力或操控定论。 |
| ESTP-C10 | 重复改约的成本 | 熟悉后连续临时换计划 | TA 承认结果好不取消过程成本并重订规则 | 重订通知、保留弹性、要求承担或退出 | ESTP-F05 | none | ESTP-B05 | ESTP-F05 | ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S11、ESTP-S15、ESTP-S16、ESTP-S18、ESTP-S42 | ESTP-K05 | trust、comfort、conflict | strong | alternate | 是更高成本的可靠性替换项；正式序列已用 SC03 覆盖 K05，熟悉阶段优先风险与修复多样性。 |
| ESTP-C11 | 亲密表达逐项同意 | 礼物、帮助、陪伴或身体亲近待确认 | TA 将心意与形式、成本和权限分开 | 接受、调整、延后或拒绝具体方式 | ESTP-F06 | none | ESTP-B07 | ESTP-F06 | ESTP-S04、ESTP-S11、ESTP-S12、ESTP-S15、ESTP-S17、ESTP-S18 | ESTP-K07 | attraction、trust、comfort | strong | select | 在熟悉阶段提供不可由浪漫气氛跳过的具体同意测试。 |
| ESTP-C12 | 支持错位后的修复 | 方案和玩笑让玩家感觉未被听见 | TA 停止、确认影响并重新询问需要 | 指出需要、接受调整、暂停或结束 | ESTP-F07 | ESTP-F02、ESTP-F03 | ESTP-B06、ESTP-B08 | ESTP-F02、ESTP-F03、ESTP-F07 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S05、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S11、ESTP-S12、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37、ESTP-S38 | ESTP-K02、ESTP-K03、ESTP-K06、ESTP-K08 | trust、comfort、conflict | strong | alternate | 修复信息丰富，但与 SC04 支持方式高度相关；SC08 优先提供不同的暂停—返回结构。 |
| ESTP-C13 | 暂停与明确返回 | 争论升温且玩家担心问题被跳过 | TA 命名问题、约定返回并协商等待 | 接受暂停、改安排、确认事实或退出 | ESTP-F07 | ESTP-F03 | ESTP-B08 | ESTP-F03、ESTP-F07 | ESTP-S02、ESTP-S04、ESTP-S05、ESTP-S06、ESTP-S08、ESTP-S11、ESTP-S12、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37 | ESTP-K03、ESTP-K08 | trust、comfort、conflict | strong | select | 以可验证协议处理轻松化与冷处理风险，适合收束熟悉阶段。 |
| ESTP-C14 | 高成本体验的风险边界 | 长时、高费用或身体负担的共同计划 | TA 列清不可逆成本、退出和替代 | 核验后参与、缩小、延后或拒绝 | ESTP-F09 | ESTP-F01、ESTP-F02 | ESTP-B11 | ESTP-F01、ESTP-F02、ESTP-F09 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S05、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S14、ESTP-S15、ESTP-S17、ESTP-S18、ESTP-S38 | ESTP-K11 | attraction、trust、comfort、conflict | strong | select | 在已有关系基础上测试真实投入和后果，不用危险感制造吸引。 |
| ESTP-C15 | 关系范围逐项定义 | 好感与亲密存在但范围未说明 | TA 拆分约会、排他、公开、性边界和承诺 | 逐项确认、延后、非排他或退出 | ESTP-F08 | ESTP-F05 | ESTP-B09 | ESTP-F05、ESTP-F08 | ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S09、ESTP-S10、ESTP-S11、ESTP-S14、ESTP-S15、ESTP-S16、ESTP-S18、ESTP-S42 | ESTP-K09 | attraction、trust、comfort、conflict | strong | select | 适合作为最终协议测试，同时保留多种诚实关系方向。 |
| ESTP-C16 | 灵活未来与确定性 | 玩家评估未来一年现实安排 | TA 区分可兑现计划、条件愿景和未知 | 接受分层计划、要求更确定、调整投入或退出 | ESTP-F08 | ESTP-F01 | ESTP-B10 | ESTP-F01、ESTP-F08 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S07、ESTP-S09、ESTP-S10、ESTP-S11、ESTP-S14、ESTP-S15、ESTP-S16、ESTP-S17、ESTP-S18、ESTP-S42 | ESTP-K10 | attraction、trust、comfort、conflict | strong | alternate | 唯一直接覆盖 K10；可替换最终题，但会弱化当前关系范围和排他知情。 |
| ESTP-C17 | 社交信号、排他与事实 | TA 对多人热情且表达因对象不同 | TA 区分普通社交、好感、排他并允许核验 | 澄清、协商社交边界、非排他或退出 | ESTP-F08 | ESTP-F03、ESTP-F05 | ESTP-B03、ESTP-B09、ESTP-B12 | ESTP-F03、ESTP-F05、ESTP-F08 | ESTP-S02、ESTP-S03、ESTP-S04、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S09、ESTP-S10、ESTP-S11、ESTP-S14、ESTP-S15、ESTP-S16、ESTP-S17、ESTP-S18、ESTP-S36、ESTP-S37、ESTP-S42 | ESTP-K03、ESTP-K09、ESTP-K12 | attraction、trust、comfort、conflict | strong | alternate | 暧昧压力强，但会重复 SC05 透明度与 SC10 定义；可替换 SC09 以牺牲反标签覆盖换取更直接的关系信号。 |
| ESTP-C18 | 拒绝坏男孩投射 | 外部标签要求享受危险或预判背叛 | TA 将判断拉回行为、协议和后果 | 拆标签、指出真实担忧、设限或退出 | ESTP-F10 | ESTP-F04、ESTP-F09 | ESTP-B13 | ESTP-F04、ESTP-F09、ESTP-F10 | ESTP-S02、ESTP-S03、ESTP-S05、ESTP-S06、ESTP-S07、ESTP-S08、ESTP-S09、ESTP-S10、ESTP-S13、ESTP-S14、ESTP-S15、ESTP-S16、ESTP-S18 | ESTP-K13 | attraction、trust、comfort、conflict | strong | select | 满足低置信梗必须被主动拆解的要求，并为最终关系协议清场。 |

本轮没有将候选判为 exclude：18 项都已通过 Stage 02 的触发具体性、玩家能动性和证据链审计；未入选的 8 项均有明确换位用途，不作静默删除。

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ESTP-ALT01 | ESTP-C02 | first_meeting | ESTP-B04、ESTP-F04、ESTP-K04 的社交容量 | ESTP-SC02 | 直接覆盖唯一遗漏冲突 K04；会失去初见玩笑边界主测试，且 F04 已由 SC09 次级覆盖。 |
| ESTP-ALT02 | ESTP-C04 | first_meeting | ESTP-F09、ESTP-K11 的低成本风险知情 | ESTP-SC01 | 将风险护栏前置；会与 SC07 重复 K11，并让负面刻板过早主导开场。 |
| ESTP-ALT03 | ESTP-C07 | contact | ESTP-B02、ESTP-F02、ESTP-K02 的快速补救 | ESTP-SC03 | 临场共同决定更集中；会失去新鲜感与已有约定的 ESTP-K05 覆盖。 |
| ESTP-ALT04 | ESTP-C08 | contact | ESTP-F06、ESTP-K07 的早期亲近信号 | ESTP-SC05 | 提前测试多通道示爱；会重复 SC06 的权限拆分，并失去独立的 ESTP-K12 透明度测试。 |
| ESTP-ALT05 | ESTP-C10 | familiarity | ESTP-B05、ESTP-F05、ESTP-K05 的累积可靠性 | ESTP-SC07 | 长期改约成本更强；会失去 ESTP-F09、ESTP-K11 的高成本风险边界。 |
| ESTP-ALT06 | ESTP-C12 | familiarity | ESTP-F02、ESTP-F07、ESTP-K02、ESTP-K06、ESTP-K08 的错位修复 | ESTP-SC08 | 情绪修复更完整；会与 SC04 支持方式重复，并失去独立暂停—返回结构。 |
| ESTP-ALT07 | ESTP-C16 | ambiguity | ESTP-B10、ESTP-K10 的未来确定性 | ESTP-SC10 | 补齐唯一遗漏冲突 K10；会弱化约会、排他和当前承诺范围的最终定义。 |
| ESTP-ALT08 | ESTP-C17 | ambiguity | ESTP-F03、ESTP-F05、ESTP-F08、ESTP-K09、ESTP-K12 的社交信号 | ESTP-SC09 | 暧昧关系压力更直接；会失去 ESTP-F10、ESTP-K13 的反坏男孩投射。 |

任何替换都必须分配新的 scene_id，同步机器注册表，并追加 Selection change log；不得把新测试复用到旧 scene_id。

## 6. 风险与未决项

- 证据描述的是网络如何表征 ESTP，不是现实 ESTP 人群的行为比例、心理事实、恋爱规律、忠诚率或配对结论；Stage 04 每题仍需保留至少两种合理但代价不同的回应方向。
- 中文第一人称证据仍窄；小红书完整正文是未说明身份与方法的类型文案，知乎材料包含窄自述、单一样本观察与强概括回答，不能宣称代表大陆或华语 ESTP。
- SC01、SC03 必须区分即兴邀请和已有约定；拒绝变化不是扫兴，接受变化也不等于无边界跟随。
- SC02、SC05、SC08 必须区分直接、表达适配、事实透明与影响修复；不能把“会看人说话”写成读心、天然诚实或天生操控。
- SC04 不能把给方案设为唯一有效支持，也不能把玩家的情绪、犹豫或拒绝方案写成不理性。
- SC06 的礼物、帮助、陪伴与身体亲近必须逐项确认；接受心意不产生债务、排他、原谅、公开权或持续身体许可。
- SC07 的风险必须具体、可核验且可退出；不得使用违法、成瘾、危险驾驶、暴力或财务伤害制造魅力与关系奖励。
- SC09 的坏男孩、花心玩家、墨镜哥、莽夫和派对动物只是待拆解外部脚本。标签本身不得改变状态；具体失约、欺骗、背叛和越界也不能因“反刻板”被忽略。
- SC10 不预设确认恋爱、排他或长期承诺是正确答案。继续约会、非排他、延后复谈、发现不兼容和诚实退出都应保持可表达。
- ESTP 尚未注册为生产可玩类型；本序列只是 Stage-04 的设计与追踪基线，不表示已有运行时题目、结局或可达性。
- 运行时状态、阶段阈值和结局规则保持共享合同；Stage 03 没有批准任何状态变化数值、题目文案、选项、即时反馈或结局。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ESTP-SEL-001 | v1 | initial lock | ESTP-SC01–ESTP-SC10 | none | ESTP-C01、ESTP-C03、ESTP-C05、ESTP-C06、ESTP-C09、ESTP-C11、ESTP-C14、ESTP-C13、ESTP-C18、ESTP-C15 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成即兴选择—表达影响—变更履约—支持方式—事实透明—亲密同意—风险边界—冲突返回—反标签—关系定义的递进。 | 覆盖 ESTP-F01 至 ESTP-F10；覆盖 ESTP-K01、ESTP-K02、ESTP-K03、ESTP-K05 至 ESTP-K09、ESTP-K11 至 ESTP-K13。ESTP-K04、ESTP-K10 由备选 ESTP-C02、ESTP-C16 修补。 | Stage 04 必须逐行继承本文件与 JSON 的完整上游 ID 集；任何替换需使用新 scene_id，并同步注册表与本日志。 |

## 8. 交接声明

本序列以 v1 锁定为 Stage 04 的正式场景集合。下一阶段须以 estp-formal-sequence.json 为 ID 宇宙，为 Q01 至 Q10 逐行继承 order、stage、scene_id、candidate_id 及完整上游集合；本阶段没有创建或批准最终对白、选项、效果、反馈、阈值或结局。
