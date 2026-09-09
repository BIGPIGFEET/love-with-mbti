# ISTJ 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和完整上游追溯；不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [istj-formal-sequence.json](../traceability/istj-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| question_id | order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---|---:|---|---|---|---|---|---|---|---|---|---|---|
| Q01 | 1 | ISTJ-SC01 | first_meeting | ISTJ-C01 | 共同安排能否被当作可修改草案，并保留双方限制与决定权 | low | ISTJ-B01 | ISTJ-F01、ISTJ-F07 | ISTJ-S02、ISTJ-S03、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17 | ISTJ-K01 | attraction、trust、comfort | 以低成本协作开场，让结构服务于信息透明，而不是服从或浪漫承诺。 |
| Q02 | 2 | ISTJ-SC02 | first_meeting | ISTJ-C04 | 玩家能否核对简短信号，而不以字数替 TA 判定兴趣和关系 | low-medium | ISTJ-B02、ISTJ-B13 | ISTJ-F03、ISTJ-F05、ISTJ-F09 | ISTJ-S02、ISTJ-S03、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S09、ISTJ-S14、ISTJ-S16、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S20、ISTJ-S21 | ISTJ-K04、ISTJ-K12 | attraction、trust、comfort | 从共同安排转向表达节奏，完成初识阶段的信号核对，不把慢热设为必然。 |
| Q03 | 3 | ISTJ-SC03 | contact | ISTJ-C07 | 面对挫折时，倾听、分析和实际协助能否由当事人选择 | medium | ISTJ-B07 | ISTJ-F04、ISTJ-F05 | ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S08、ISTJ-S09、ISTJ-S16、ISTJ-S17、ISTJ-S18、ISTJ-S19 | ISTJ-K03、ISTJ-K04 | attraction、trust、comfort | 进入接触后测试一次低后果的支持许可，避免让行动能力建立导师地位。 |
| Q04 | 4 | ISTJ-SC04 | contact | ISTJ-C08 | 实际帮助已经发生后，双方能否说明行动原意与仍未收到的情感信号 | medium | ISTJ-B04、ISTJ-B06 | ISTJ-F03、ISTJ-F04、ISTJ-F05 | ISTJ-S03、ISTJ-S04、ISTJ-S05、ISTJ-S07、ISTJ-S08、ISTJ-S16、ISTJ-S18、ISTJ-S19 | ISTJ-K03、ISTJ-K05、ISTJ-K12 | attraction、trust、comfort、conflict | 将上一题的支持选择升级为表达—接收错位，行动、言语和同意都需具体确认。 |
| Q05 | 5 | ISTJ-SC05 | contact | ISTJ-C06 | 反复改变已确认安排并产生共同成本后，能否区分原因、影响和新协议 | medium-high | ISTJ-B02、ISTJ-B05 | ISTJ-F01、ISTJ-F05 | ISTJ-S02、ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S09、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S21 | ISTJ-K01、ISTJ-K04 | trust、comfort、conflict | 接触阶段以可观察后果收束；争议来自具体承诺与损失，而不是 P/J 标签。 |
| Q06 | 6 | ISTJ-SC06 | familiarity | ISTJ-C12 | 事实反馈能否与措辞影响并列处理，而不是在正确与受伤之间二选一 | high | ISTJ-B02、ISTJ-B09 | ISTJ-F05、ISTJ-F06 | ISTJ-S02、ISTJ-S03、ISTJ-S07、ISTJ-S09、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S18、ISTJ-S19 | ISTJ-K04、ISTJ-K07 | trust、comfort、conflict | 熟悉后由履约分歧进入直接反馈，要求立场与关系影响同时可讨论。 |
| Q07 | 7 | ISTJ-SC07 | familiarity | ISTJ-C11 | 冲突暂停是否包含明确返回、必要联系和双方可承受的等待边界 | high | ISTJ-B08 | ISTJ-F06 | ISTJ-S09、ISTJ-S11、ISTJ-S12、ISTJ-S18、ISTJ-S19 | ISTJ-K06 | trust、comfort、conflict | 从尖锐反馈升级到调节节奏，以可验证返回条件区分暂停和冷处理。 |
| Q08 | 8 | ISTJ-SC08 | familiarity | ISTJ-C13 | TA 自己失误时，可靠性能否包含主动说明、承担影响和协商修复 | high | ISTJ-B11 | ISTJ-F01、ISTJ-F09 | ISTJ-S01、ISTJ-S05、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S13、ISTJ-S14、ISTJ-S17、ISTJ-S20 | ISTJ-K08 | trust、comfort、conflict | 以 TA 承担自身错误收束熟悉阶段，拒绝“ISTJ 必然可靠”的完美人设。 |
| Q09 | 9 | ISTJ-SC09 | ambiguity | ISTJ-C18 | 面对“忠诚到底”的类型压力，双方能否保留互惠、修改和退出边界 | high | ISTJ-B10、ISTJ-B12 | ISTJ-F01、ISTJ-F02、ISTJ-F03、ISTJ-F08、ISTJ-F09、ISTJ-F10 | ISTJ-S01、ISTJ-S03、ISTJ-S04、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S13、ISTJ-S14、ISTJ-S15、ISTJ-S16、ISTJ-S17、ISTJ-S19、ISTJ-S20、ISTJ-S21、ISTJ-S22 | ISTJ-K09、ISTJ-K10、ISTJ-K11 | attraction、trust、comfort、conflict | 暧昧阶段先拆除类型替关系担保的外部脚本，标签本身没有机械价值。 |
| Q10 | 10 | ISTJ-SC10 | ambiguity | ISTJ-C16 | 当前好感、继续约会、排他、现实投入和未来复谈能否逐项定义 | high | ISTJ-B02、ISTJ-B10 | ISTJ-F01、ISTJ-F05、ISTJ-F08 | ISTJ-S02、ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S08、ISTJ-S09、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S15、ISTJ-S16、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S21 | ISTJ-K04、ISTJ-K09、ISTJ-K12 | attraction、trust、comfort、conflict | 在移除忠诚神话后，以可接受、修改、延后或拒绝的真实关系协议收束。 |

## 2. 选择理由与阶段递进

- **初识（Q01–Q02）**：先处理可修改的共同安排，再处理简短表达的含义。两题都允许玩家修改、询问、拒绝或不继续，不以接受计划和读懂克制作为好感证明。
- **接触（Q03–Q05）**：从支持方式许可，升级到行动关心已经发生但信号仍错位，最后处理反复变化给共同安排造成的实际成本。关系压力从理解需要进入履约责任。
- **熟悉（Q06–Q08）**：直接反馈要求同时处理事实和措辞，暂停必须承诺返回，随后由 TA 自己的失误测试透明与修复；“讲事实、需要空间、值得依赖”都必须落实为可观察责任。
- **暧昧（Q09–Q10）**：先拒绝用类型和忠诚神话担保未来，再把真实关系拆成当前可兑现的层级；两题都允许不匹配、修改或退出。
- **难度递进**：Q01–Q04 主要是解释与许可；Q05 首次出现共同成本；Q06–Q08 处理伤害、调节与修复；Q09–Q10 才进入退出权和关系定义。
- **相邻去重**：Q03 测试支持模式，Q04 测试关心信号的接收；Q05 测试已确认安排的损失，Q06 测试反馈方式；Q09 拆外部忠诚脚本，Q10 才建立双方协议。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级覆盖。`ISTJ-F10` 仅作为需拆解的标签脚本，不独立驱动状态判断。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 |
|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  | S |  |  |  |
| SC02 |  |  | S |  | P |  |  |  | S |  |
| SC03 |  |  |  | P | S |  |  |  |  |  |
| SC04 |  |  | P | S | S |  |  |  |  |  |
| SC05 | P |  |  |  | S |  |  |  |  |  |
| SC06 |  |  |  |  | P | S |  |  |  |  |
| SC07 |  |  |  |  |  | P |  |  |  |  |
| SC08 | S |  |  |  |  |  |  |  | P |  |
| SC09 | S | S | S |  |  |  |  | P | S | S |
| SC10 | P |  |  |  | S |  |  | S |  |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 | K11 | K12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |  |  |
| SC02 |  |  |  | P |  |  |  |  |  |  |  | S |
| SC03 |  |  | P | S |  |  |  |  |  |  |  |  |
| SC04 |  |  | S |  | P |  |  |  |  |  |  | S |
| SC05 | P |  |  | S |  |  |  |  |  |  |  |  |
| SC06 |  |  |  | S |  |  | P |  |  |  |  |  |
| SC07 |  |  |  |  |  | P |  |  |  |  |  |  |
| SC08 |  |  |  |  |  |  |  | P |  |  |  |  |
| SC09 |  |  |  |  |  |  |  |  | P | S | S |  |
| SC10 |  |  |  | S |  |  |  |  | S |  |  | P |

### 3.3 覆盖审计

- `ISTJ-F01` 至 `ISTJ-F10` 全部进入正式序列；F01、F05 因承担计划/承诺定义与直接沟通主轴而重复，但分布在不同阶段和后果层级。
- `ISTJ-K01`、`ISTJ-K03` 至 `ISTJ-K12` 均至少覆盖一次。唯一未进入正式序列的是 `ISTJ-K02`（熟悉锚点 vs 新鲜感），由 C02/C09 提供两条替换路径。
- 正式序列覆盖 `ISTJ-B01`、`ISTJ-B02`、`ISTJ-B04` 至 `ISTJ-B13`；未选中的 `ISTJ-B03` 由 C02/C09 保留，不把熟悉偏好强行塞进已有计划场景。
- K04 在 Q02、Q03、Q05、Q06、Q10 出现，但主测试分别是信号核对、支持许可、承诺影响、反馈措辞和关系定义；不存在相邻重复同一决策。
- Q09 的 F08/F10 与 K09/K10/K11 只提供忠诚神话压力；状态判断必须来自玩家是否尊重实际边界、互惠和退出权。

## 4. 候选资格与未入选理由

候选的完整叙述与护栏仍以 [ISTJ 候选事件库](istj-candidate-scenes.md) 为准；下表记录 Stage 03 的资格判断和完整上游 ID 集。

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ISTJ-C01 | 可修改的初见草案 | 双方需确认第一次单独见面的时间地点 | TA 给出可行方案、限制和备选，并邀请修改 | 在便利、确定性和共同决定间回应 | ISTJ-F01 | ISTJ-F07 | ISTJ-B01 | ISTJ-F01、ISTJ-F07 | ISTJ-S02、ISTJ-S03、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17 | ISTJ-K01 | attraction、trust、comfort | strong | select | 低后果、行为可见且保留玩家限制，适合作为结构倾向的非控制式开场。 |
| ISTJ-C02 | 外部变化下协作 | 已约地点临时停业 | TA 提出备选并接受探索或改期 | 权衡继续见面、新鲜感和时间成本 | ISTJ-F01 | ISTJ-F07、ISTJ-F09 | ISTJ-B01、ISTJ-B03 | ISTJ-F01、ISTJ-F07、ISTJ-F09 | ISTJ-S02、ISTJ-S03、ISTJ-S05、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S20 | ISTJ-K01、ISTJ-K02 | attraction、trust、comfort、conflict | strong | alternate | 是 B03/K02 的初见修补项；正式序列优先用 C01 建立草案—承诺区分。 |
| ISTJ-C03 | 初见类型投射 | 玩家或朋友用规则狂、蓝老头、人机概括 TA | TA 拒绝表演反差，转向真实兴趣与行为 | 修正预设、继续标签化或依据事实认识 | ISTJ-F10 | ISTJ-F02、ISTJ-F03、ISTJ-F09 | ISTJ-B12、ISTJ-B13 | ISTJ-F02、ISTJ-F03、ISTJ-F09、ISTJ-F10 | ISTJ-S01、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S13、ISTJ-S14、ISTJ-S16、ISTJ-S17、ISTJ-S20、ISTJ-S21、ISTJ-S22 | ISTJ-K10 | attraction、trust、comfort | strong | alternate | 反标签清楚，但 Q09 已拆更具关系后果的忠诚神话；避免元话题占用初识名额。 |
| ISTJ-C04 | 简短信号核对 | 初见后收到简短确认和具体后续询问 | TA 愿意说明当前兴趣但不定义关系 | 询问含义、说明需要、回应或拒绝继续 | ISTJ-F05 | ISTJ-F03、ISTJ-F09 | ISTJ-B02、ISTJ-B13 | ISTJ-F03、ISTJ-F05、ISTJ-F09 | ISTJ-S02、ISTJ-S03、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S09、ISTJ-S14、ISTJ-S16、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S20、ISTJ-S21 | ISTJ-K04、ISTJ-K12 | attraction、trust、comfort | strong | select | 为表达节奏提供可核对压力，不把字数、慢热或邀约直接写成承诺。 |
| ISTJ-C05 | 临时邀请与已有安排 | 玩家临时获得活动票但 TA 已有安排 | TA 说明成本并选择拒绝、部分参加或另约 | 表达期待同时尊重拒绝和既有安排 | ISTJ-F01 | none | ISTJ-B05 | ISTJ-F01 | ISTJ-S03、ISTJ-S04、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S21 | ISTJ-K01 | attraction、trust、comfort | strong | alternate | 是较低风险的拒绝边界；正式序列由 C06 测试已确认承诺和真实成本。 |
| ISTJ-C06 | 反复失约的共同成本 | 玩家多次推迟已确认时间并造成预订损失 | TA 区分变故、提议和承诺，提出重订规则 | 同时处理变动空间、影响和未来协议 | ISTJ-F01 | ISTJ-F05 | ISTJ-B02、ISTJ-B05 | ISTJ-F01、ISTJ-F05 | ISTJ-S02、ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S09、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S21 | ISTJ-K01、ISTJ-K04 | trust、comfort、conflict | strong | select | 将计划张力落到共同成本和可重订协议，适合接触阶段的第一个实质后果。 |
| ISTJ-C07 | 支持方式选择 | 玩家工作受挫但未说明需要 | TA 复述问题并询问倾听、分析或协助 | 识别需求、选择混合方式或停止话题 | ISTJ-F04 | ISTJ-F05 | ISTJ-B07 | ISTJ-F04、ISTJ-F05 | ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S08、ISTJ-S09、ISTJ-S16、ISTJ-S17、ISTJ-S18、ISTJ-S19 | ISTJ-K03、ISTJ-K04 | attraction、trust、comfort | strong | select | 玩家能直接决定支持范围，为下一题的表达—接收错位建立基线。 |
| ISTJ-C08 | 行动已到、信号未到 | TA 已解决实际问题但玩家仍需情感确认 | TA 说明原意并讨论可接收的表达方式 | 承认行动、表达缺失或拒绝不合适帮助 | ISTJ-F03 | ISTJ-F04、ISTJ-F05 | ISTJ-B04、ISTJ-B06 | ISTJ-F03、ISTJ-F04、ISTJ-F05 | ISTJ-S03、ISTJ-S04、ISTJ-S05、ISTJ-S07、ISTJ-S08、ISTJ-S16、ISTJ-S18、ISTJ-S19 | ISTJ-K03、ISTJ-K05、ISTJ-K12 | attraction、trust、comfort、conflict | strong | select | 与 C07 构成许可—接收对照，并明确行动不能替代言语、关系定义或同意。 |
| ISTJ-C09 | 固定锚点与探索 | 双方准备建立固定见面习惯 | TA 提议固定时间、轮流选地点并保留即兴 | 协商频率、安排成本和临时空间 | ISTJ-F07 | ISTJ-F01、ISTJ-F09 | ISTJ-B03 | ISTJ-F01、ISTJ-F07、ISTJ-F09 | ISTJ-S03、ISTJ-S05、ISTJ-S10、ISTJ-S11、ISTJ-S17、ISTJ-S20 | ISTJ-K01、ISTJ-K02 | attraction、trust、comfort | strong | alternate | 是 B03/K02 的接触期直接修补项；入选会增加计划场景密度并削弱实际失约后果。 |
| ISTJ-C10 | 机会改变共同计划 | 玩家因新机会改变已确认且有准备成本的计划 | TA 说明损失并承认玩家保留机会的权利 | 处理机会、自主、补偿和具体协议 | ISTJ-F01 | ISTJ-F05、ISTJ-F06 | ISTJ-B05、ISTJ-B09 | ISTJ-F01、ISTJ-F05、ISTJ-F06 | ISTJ-S02、ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S09、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S21 | ISTJ-K01、ISTJ-K07 | trust、comfort、conflict | strong | alternate | 适合加强熟悉期共同成本，但与 Q05 的承诺变化过近；保留为替换而非重复。 |
| ISTJ-C11 | 暂停与明确返回 | 争执开始重复旧话且语气升高 | TA 请求暂停并给出返回时间和方式 | 协商等待范围、安全确认或结束本次沟通 | ISTJ-F06 | none | ISTJ-B08 | ISTJ-F06 | ISTJ-S09、ISTJ-S11、ISTJ-S12、ISTJ-S18、ISTJ-S19 | ISTJ-K06 | trust、comfort、conflict | strong | select | 将调节需求变成可验证协议，清楚区分暂停、冷处理和退出。 |
| ISTJ-C12 | 事实与措辞影响 | TA 给出具体但尖锐的反馈 | TA 愿意重述，同时保留对问题的立场 | 同时回应事实、影响和替代沟通方式 | ISTJ-F05 | ISTJ-F06 | ISTJ-B02、ISTJ-B09 | ISTJ-F05、ISTJ-F06 | ISTJ-S02、ISTJ-S03、ISTJ-S07、ISTJ-S09、ISTJ-S11、ISTJ-S12、ISTJ-S17、ISTJ-S18、ISTJ-S19 | ISTJ-K04、ISTJ-K07 | trust、comfort、conflict | strong | select | 双方都有合理需要，也都可能表达不当，适合进入熟悉阶段的高责任沟通。 |
| ISTJ-C13 | 可靠人设下的犯错 | TA 忘记自己承诺的共同任务 | TA 主动说明遗漏、影响和补救方案 | 评价错误、透明度、修复与残余后果 | ISTJ-F09 | ISTJ-F01 | ISTJ-B11 | ISTJ-F01、ISTJ-F09 | ISTJ-S01、ISTJ-S05、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S13、ISTJ-S14、ISTJ-S17、ISTJ-S20 | ISTJ-K08 | trust、comfort、conflict | strong | select | 用 TA 自己的错误拆除完美可靠压力，并把修复落到行动与协商。 |
| ISTJ-C14 | 创作兴趣不是反差奖 | 玩家看到 TA 的长期创作兴趣并说不像 ISTJ | TA 分享兴趣并拒绝由类型判断创造力 | 真诚了解、承认预设或继续质疑 typing | ISTJ-F10 | ISTJ-F02、ISTJ-F03、ISTJ-F09 | ISTJ-B12、ISTJ-B13 | ISTJ-F02、ISTJ-F03、ISTJ-F09、ISTJ-F10 | ISTJ-S01、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S13、ISTJ-S14、ISTJ-S16、ISTJ-S17、ISTJ-S20、ISTJ-S21、ISTJ-S22 | ISTJ-K10 | attraction、trust、comfort | strong | alternate | 反能力标签价值明确，但关系后果弱于 C13，并会与 Q09 的类型投射密度重叠。 |
| ISTJ-C15 | 传统分工投射 | 朋友替双方预设传统仪式和性别分工 | TA 区分个人惯例、现实偏好和外部传统 | 表达价值、协商分工或拒绝过早讨论 | ISTJ-F10 | ISTJ-F01、ISTJ-F02、ISTJ-F03、ISTJ-F07、ISTJ-F09 | ISTJ-B03、ISTJ-B12 | ISTJ-F01、ISTJ-F02、ISTJ-F03、ISTJ-F07、ISTJ-F09、ISTJ-F10 | ISTJ-S01、ISTJ-S03、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S10、ISTJ-S11、ISTJ-S13、ISTJ-S14、ISTJ-S16、ISTJ-S17、ISTJ-S20、ISTJ-S21、ISTJ-S22 | ISTJ-K10、ISTJ-K11 | trust、comfort、conflict | strong | alternate | 可加强价值与分工不兼容，但会与 Q09 的类型/传统投射重复并减少修复覆盖。 |
| ISTJ-C16 | 关系层级逐项定义 | 玩家询问双方当前关系 | TA 分开说明好感、约会、排他、投入和复谈 | 同意部分、提出不同定义、延后或退出 | ISTJ-F01 | ISTJ-F05、ISTJ-F08 | ISTJ-B02、ISTJ-B10 | ISTJ-F01、ISTJ-F05、ISTJ-F08 | ISTJ-S02、ISTJ-S03、ISTJ-S04、ISTJ-S07、ISTJ-S08、ISTJ-S09、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S15、ISTJ-S16、ISTJ-S17、ISTJ-S18、ISTJ-S19、ISTJ-S21 | ISTJ-K04、ISTJ-K09、ISTJ-K12 | attraction、trust、comfort、conflict | strong | select | 是最直接、可拒绝的最终关系定义，可将前序信号和忠诚脚本转回双方实际决定。 |
| ISTJ-C17 | 未来不确定性的阶段协议 | 新工作、学习或家庭安排打乱未来节奏 | TA 提出最低安排、复盘点和退出条件 | 权衡资源、等待成本、兴趣和不确定性 | ISTJ-F08 | ISTJ-F01、ISTJ-F07、ISTJ-F09 | ISTJ-B01、ISTJ-B10、ISTJ-B11 | ISTJ-F01、ISTJ-F07、ISTJ-F08、ISTJ-F09 | ISTJ-S01、ISTJ-S02、ISTJ-S03、ISTJ-S04、ISTJ-S05、ISTJ-S07、ISTJ-S08、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S13、ISTJ-S14、ISTJ-S15、ISTJ-S16、ISTJ-S17、ISTJ-S19、ISTJ-S20、ISTJ-S21 | ISTJ-K01、ISTJ-K08、ISTJ-K09 | attraction、trust、comfort、conflict | strong | alternate | 是现实未来压力的强替换项；正式序列优先用 Q09 拆忠诚神话，再由 Q10 明确定义。 |
| ISTJ-C18 | 拒绝忠诚到底担保 | 外部用 ISTJ 忠诚脚本要求永久保证 | TA 要求把互惠、边界、伤害和退出写回承诺 | 选择可兑现稳定、永久保证或不接受条件 | ISTJ-F08 | ISTJ-F01、ISTJ-F02、ISTJ-F03、ISTJ-F09、ISTJ-F10 | ISTJ-B10、ISTJ-B12 | ISTJ-F01、ISTJ-F02、ISTJ-F03、ISTJ-F08、ISTJ-F09、ISTJ-F10 | ISTJ-S01、ISTJ-S03、ISTJ-S04、ISTJ-S05、ISTJ-S06、ISTJ-S07、ISTJ-S08、ISTJ-S10、ISTJ-S11、ISTJ-S12、ISTJ-S13、ISTJ-S14、ISTJ-S15、ISTJ-S16、ISTJ-S17、ISTJ-S19、ISTJ-S20、ISTJ-S21、ISTJ-S22 | ISTJ-K09、ISTJ-K10、ISTJ-K11 | attraction、trust、comfort、conflict | strong | select | 直接处理本类型最危险的正向浪漫压力，并为最终真实协议清场。 |

本轮没有将候选判为 `exclude`：18 项均已通过 Stage 02 的触发具体性、玩家能动性与上游追溯审计；未入选的 8 项都有明确换位用途，不作静默删除。

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ISTJ-ALT01 | ISTJ-C02 | first_meeting | B03、F07/F09、K02 的外部变化与探索 | ISTJ-SC01 | 补齐 K02 并增加即时协作；会弱化草案—承诺基线，且仍是计划事件。 |
| ISTJ-ALT02 | ISTJ-C03 | first_meeting | F02/F10、K10 的初见反标签 | ISTJ-SC02 | 更早拆“蓝老头/人机”投射；会失去简短信号核对，并与 SC09 的标签压力重复。 |
| ISTJ-ALT03 | ISTJ-C05 | contact | F01、K01 的临时邀请与拒绝边界 | ISTJ-SC05 | 降低后果、突出拒绝不等于关系否定；会失去共同成本与修复责任。 |
| ISTJ-ALT04 | ISTJ-C09 | contact | B03、F07/F09、K02 的熟悉锚点与探索 | ISTJ-SC05 | 最直接补齐 B03/K02；会增加计划场景密度并移除实际失约后果。 |
| ISTJ-ALT05 | ISTJ-C10 | familiarity | F01/F05/F06、K01/K07 的机会与共同成本 | ISTJ-SC06 | 自主与补偿取舍更强；会与 SC05 的计划变化过近并减少措辞影响测试。 |
| ISTJ-ALT06 | ISTJ-C14 | familiarity | F02/F03/F09/F10、K10 的创造力标签拆解 | ISTJ-SC08 | 类型辨识度更高；会失去 TA 犯错后的修复，并与 SC09 的反标签主轴重复。 |
| ISTJ-ALT07 | ISTJ-C15 | familiarity | B03、F07/F10、K10/K11 的价值与分工预设 | ISTJ-SC08 | 加强生活方式不兼容；会减少可靠人设修复，并让连续两题都由外部类型投射触发。 |
| ISTJ-ALT08 | ISTJ-C17 | ambiguity | F07/F08/F09、K01/K08/K09 的未来不确定性 | ISTJ-SC09 | 现实资源和等待成本更具体；会失去 F02/F10、K10/K11 的忠诚神话拆解。 |

任何替换都必须分配新的 `scene_id`，同步机器注册表，并追加 Selection change log；不得把新测试静默复用到旧 `scene_id`。

## 6. 风险与未决项

- 证据描述的是网络话语，不是 ISTJ 人群频率、现实人格规律或配对结论；Stage 04 每题仍需保留至少两种合理但代价不同的回应方向。
- Q03/Q04 是有意的“支持许可—信号接收”对照，但必须各自独立成立：前者不预设帮助已发生，后者不把感谢写成放弃未满足需求。
- Q05/Q06 都涉及具体说明，前者只测试承诺、成本与新协议，后者只测试事实内容和措辞影响；不得写成连续纠错考题。
- Q09/Q10 是有意的“拆类型担保—建真实协议”收束。Q09 的 `ISTJ-F10` 与任何 meme 必须保持机械无效，Q10 也不预设确认恋爱、排他或长期关系为正确结果。
- `ISTJ-K02` 与 `ISTJ-B03` 未进入正式序列是有意取舍；若 Stage 04 发现计划主轴缺少新鲜感张力，应优先按 ALT01 或 ALT04 替换，而不是给现有场景叠加第二主测试。
- ISTJ 目前不是生产可玩类型；本阶段不修改生产注册、状态规则、阈值或结局，也不声称序列已经过路径平衡。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ISTJ-SEL-001 | v1 | initial lock | ISTJ-SC01–ISTJ-SC10 | none | ISTJ-C01、ISTJ-C04、ISTJ-C07、ISTJ-C08、ISTJ-C06、ISTJ-C12、ISTJ-C11、ISTJ-C13、ISTJ-C18、ISTJ-C16 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成草案—信号—支持—接收错位—履约成本—反馈—暂停—修复—反忠诚神话—关系定义的递进。 | 覆盖 F01–F10 与 K01、K03–K12；K02 和 B03 保留两条替换路径。 | Stage 04 必须按本文件与 JSON 的完整 ID 集写题；任何替换使用新 scene_id，并同步注册表与日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可为每个 `scene_id` 编写题干、NPC 表现、四项策略、即时反馈与题目追溯；本阶段没有批准任何对白、选项文本、效果数值、模糊提示、阈值或结局文案。
