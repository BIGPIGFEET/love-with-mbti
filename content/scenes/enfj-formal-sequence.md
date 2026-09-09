# ENFJ 正式场景序列（Stage 03）

> 状态：v2 locked（2026-09-08 Stage-02 证据刷新后复核）。十个候选、顺序与 `scene_id` 均未改变；本版同步新增合格来源并收窄部分测试说明。此文件不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [enfj-formal-sequence.json](../traceability/enfj-formal-sequence.json)。  
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ENFJ-SC01 | first_meeting | ENFJ-C01 | 玩家能否回应主动纳入，同时如实保留自己的参与节奏 | low | ENFJ-B01 | ENFJ-F01、ENFJ-F09 | ENFJ-S01、ENFJ-S03、ENFJ-S08、ENFJ-S14、ENFJ-S17、ENFJ-S37、ENFJ-S42 | ENFJ-K01 | attraction、comfort、trust | 用可接受也可拒绝的群体入口开场；新增反例进一步说明主动纳入不等于愿意成为聚会中心。 |
| 2 | ENFJ-SC02 | first_meeting | ENFJ-C04 | 面对迅速出现的建议，双方能否先确认需要并保留目标决定权 | low-medium | ENFJ-B04 | ENFJ-F02、ENFJ-F08 | ENFJ-S03、ENFJ-S04、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S13、ENFJ-S16、ENFJ-S34 | ENFJ-K03 | trust、comfort、attraction | 从参与节奏转入低风险的一对一支持；初见热心仍不能建立导师地位。 |
| 3 | ENFJ-SC03 | contact | ENFJ-C05 | 好感表达可能明显也可能笨拙时，双方能否核对当下兴趣，并与约会、排他和承诺逐层区分 | medium | ENFJ-B07 | ENFJ-F03 | ENFJ-S04、ENFJ-S07、ENFJ-S13、ENFJ-S36 | ENFJ-K06、ENFJ-K11 | attraction、trust、comfort | 进入接触后增加个人关注，同时保留表达失误与澄清空间；只确认当前兴趣和继续了解的意愿。 |
| 4 | ENFJ-SC04 | contact | ENFJ-C06 | 遇到挫折时，倾听、建议、实际帮助和空间能否由当事人选择 | medium | ENFJ-B06 | ENFJ-F02、ENFJ-F04、ENFJ-F06 | ENFJ-S04、ENFJ-S06、ENFJ-S12、ENFJ-S15、ENFJ-S16、ENFJ-S46 | ENFJ-K04、ENFJ-K05 | comfort、trust、attraction | 从表达兴趣转入一次具体支持，测试需求核对而非读心或拯救；单条支持耗竭自述只补充容量风险。 |
| 5 | ENFJ-SC05 | contact | ENFJ-C08 | 建议已经造成压力后，能否区分善意与影响并真正停止、调整 | medium-high | ENFJ-B04、ENFJ-B12 | ENFJ-F02、ENFJ-F07、ENFJ-F08 | ENFJ-S02、ENFJ-S03、ENFJ-S04、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S11、ENFJ-S13、ENFJ-S16、ENFJ-S34 | ENFJ-K03、ENFJ-K10 | trust、comfort、conflict | 把上一题的需求协商升级为已发生影响的修复，以接收效果收束接触阶段。 |
| 6 | ENFJ-SC06 | familiarity | ENFJ-C10 | 长期单向情绪劳动出现后，双方能否重订容量、互惠与支持来源 | high | ENFJ-B06、ENFJ-B09 | ENFJ-F02、ENFJ-F04、ENFJ-F05、ENFJ-F06、ENFJ-F09 | ENFJ-S01、ENFJ-S04、ENFJ-S06、ENFJ-S08、ENFJ-S10、ENFJ-S12、ENFJ-S14、ENFJ-S15、ENFJ-S16、ENFJ-S17、ENFJ-S35、ENFJ-S37、ENFJ-S42、ENFJ-S43、ENFJ-S46 | ENFJ-K04、ENFJ-K05 | trust、comfort、conflict | 熟悉后将一次支持升级为持续负荷；新增来源只补充自我优先、有限支持和互惠不足的反例，不证明固定发展顺序。 |
| 7 | ENFJ-SC07 | familiarity | ENFJ-C11 | 拥抱、礼物、陪伴和联系频率能否逐项确认，而非由浪漫气氛代替同意 | high | ENFJ-B08 | ENFJ-F03、ENFJ-F04 | ENFJ-S04、ENFJ-S06、ENFJ-S07、ENFJ-S12、ENFJ-S13、ENFJ-S36 | ENFJ-K07 | attraction、trust、comfort | 在责任与容量之后切换到亲密表达，增加关系强度但不自动升级关系。 |
| 8 | ENFJ-SC08 | familiarity | ENFJ-C13 | 冲突暂停能否包含明确返回、最低联系和双方可承受的等待边界 | high | ENFJ-B10、ENFJ-B12 | ENFJ-F07、ENFJ-F08 | ENFJ-S02、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S11、ENFJ-S17、ENFJ-S34 | ENFJ-K08、ENFJ-K09、ENFJ-K10 | trust、comfort、conflict | 让前两题积累的亲密与边界进入直接分歧，以可验证协议收束熟悉阶段。 |
| 9 | ENFJ-SC09 | ambiguity | ENFJ-C18 | 面对“黄金配对/救赎组”推动，双方能否以实际相处而非类型标签决定关系 | high | ENFJ-B12、ENFJ-B13 | ENFJ-F07、ENFJ-F08、ENFJ-F11 | ENFJ-S02、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S11、ENFJ-S17、ENFJ-S34 | ENFJ-K10、ENFJ-K13 | attraction、trust、comfort、conflict | 进入暧昧后先拆除外部命定叙事，避免让标签替双方完成关系判断。 |
| 10 | ENFJ-SC10 | ambiguity | ENFJ-C15 | 共同愿景能否拆成当前约会、排他、可兑现安排与复谈期限 | high | ENFJ-B07、ENFJ-B11 | ENFJ-F03、ENFJ-F08 | ENFJ-S04、ENFJ-S05、ENFJ-S07、ENFJ-S08、ENFJ-S09、ENFJ-S13、ENFJ-S34、ENFJ-S36 | ENFJ-K06、ENFJ-K12 | attraction、trust、comfort、conflict | 在移除类型投射后，以双方可接受、修改、延后或退出的真实协议收束。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：先提供不强迫参与的群体入口，再进入“要建议还是只聊聊”的低成本确认。两题都不要求玩家表演外向、感激或被改善。
- **接触（3–5）**：从早期好感和联系强度，进入一次可选择的支持，再测试建议已造成压力后的修复。关系成本从解释信号升级到对实际影响负责。
- **熟悉（6–8）**：长期情绪劳动、具体亲密表达和争论暂停依次提高互惠、同意与修复责任。每题都允许说明容量、改变方案或不继续。
- **暧昧（9–10）**：先拒绝由配对梗替双方作决定，再把未来愿景拆成当前可兑现的关系协议；类型命定论和互动强度都不能替代明确选择。
- **难度递进**：前两题只处理当下参与和支持许可；中段出现信号含义、支持错位及善意造成的压力；后半段才要求处理持续负荷、亲密同意、冲突返回和关系定义。
- **相邻去重**：SC03 测试关系信号，SC04 测试支持方式；SC04 是一次需求核对，SC05 是越界后的影响修复；SC06 测试持续互惠，SC07 改为具体亲密同意；SC09 拆外部标签，SC10 才建立双方协议。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级覆盖。`ENFJ-F11` 只提供需拆解的配对脚本，不独立驱动状态判断；`ENFJ-F10` 未进入正式序列。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | F11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  | S |  |  |
| SC02 |  | P |  |  |  |  |  | S |  |  |  |
| SC03 |  |  | P |  |  |  |  |  |  |  |  |
| SC04 |  | S |  | S |  | P |  |  |  |  |  |
| SC05 |  | S |  |  |  |  | P | S |  |  |  |
| SC06 |  | S |  | S | P | S |  |  | S |  |  |
| SC07 |  |  | S | P |  |  |  |  |  |  |  |
| SC08 |  |  |  |  |  |  | P | S |  |  |  |
| SC09 |  |  |  |  |  |  | S | P |  |  | S |
| SC10 |  |  | P |  |  |  |  | S |  |  |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 | K11 | K12 | K13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |  |  |  |
| SC02 |  |  | P |  |  |  |  |  |  |  |  |  |  |
| SC03 |  |  |  |  |  | P |  |  |  |  | S |  |  |
| SC04 |  |  |  | S | P |  |  |  |  |  |  |  |  |
| SC05 |  |  | S |  |  |  |  |  |  | P |  |  |  |
| SC06 |  |  |  | P | S |  |  |  |  |  |  |  |  |
| SC07 |  |  |  |  |  |  | P |  |  |  |  |  |  |
| SC08 |  |  |  |  |  |  |  | S | P | S |  |  |  |
| SC09 |  |  |  |  |  |  |  |  |  | S |  |  | P |
| SC10 |  |  |  |  |  | S |  |  |  |  |  | P |  |

### 3.3 覆盖审计

- `ENFJ-F01` 至 `ENFJ-F09` 全部进入正式序列。F02、F03、F04、F06、F07、F08、F09 的重复分布在不同阶段或不同后果层级，没有相邻场景重复同一主测试。
- `ENFJ-F10` 有意不进入正式序列，只由备选 C02 保留反“小太阳/主人公”投射用途；`ENFJ-F11` 仅在 SC09 作为需拆解的外部脚本，机械后果来自是否尊重真实边界与选择。
- `ENFJ-K01`、`K03` 至 `K13` 均至少覆盖一次；`K02` 未进入正式序列，由备选 C03 或 C16 修补。K08 只作 SC08 的次级压力，但与主测试 K09 共同构成暂停—返回协议。
- SC02 与 SC05 都含 K03：前者是尚未造成影响前的建议许可，后者是持续建议已经造成压力后的修复，中间隔有关系信号和支持方式两题。
- SC04 与 SC06 都含 K05：前者是一次挫折中的支持选择，后者是长期单向情绪劳动；两题由 SC05 的意图—影响修复隔开。
- 正式序列选中行为 `B01`、`B04`、`B06` 至 `B13`；`B02`、`B03`、`B05` 分别由 C03/C16、C02、C07/C14 保留明确替换路径。

## 4. 候选资格与未入选理由

候选的完整叙述与护栏仍以 [ENFJ 候选事件库](enfj-candidate-scenes.md) 为准；下表记录 Stage 03 的资格判断和完整上游 ID 集。

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ENFJ-C01 | 可选的群体入口 | 初见群聊中玩家难以接话 | TA 留出入口并允许旁听 | 如实选择参与、慢聊或观察 | ENFJ-F01 | ENFJ-F09 | ENFJ-B01 | ENFJ-F01、ENFJ-F09 | ENFJ-S01、ENFJ-S03、ENFJ-S08、ENFJ-S14、ENFJ-S17、ENFJ-S37、ENFJ-S42 | ENFJ-K01 | attraction、comfort、trust | strong | select | 低压力、可观察且保留社交节奏；S42 只补充“不愿成为聚会中心”的反例，不改变场景主测试。 |
| ENFJ-C02 | 拒绝小太阳角色 | 玩家用正面类型标签破冰 | TA 接住善意但拒绝永久照顾义务 | 修正标签或继续要求角色表演 | ENFJ-F01 | ENFJ-F09、ENFJ-F10 | ENFJ-B03 | ENFJ-F01、ENFJ-F09、ENFJ-F10 | ENFJ-S01、ENFJ-S03、ENFJ-S07、ENFJ-S08、ENFJ-S14、ENFJ-S17、ENFJ-S37、ENFJ-S42 | ENFJ-K13 | comfort、trust、conflict | strong | alternate | 反人格投射重要，但正式序列已用 SC09 拆配对命定论，初识优先保留行为测试。 |
| ENFJ-C03 | 核对而非猜测 | 初聊中玩家反应迟疑 | TA 调整表达并直接核对理解 | 澄清、改变方式或让 TA 继续猜 | ENFJ-F01 | ENFJ-F08 | ENFJ-B02 | ENFJ-F01、ENFJ-F08 | ENFJ-S03、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S17、ENFJ-S34 | ENFJ-K02、ENFJ-K10 | attraction、trust、comfort | strong | alternate | 是 K02 的直接修补项，但 SC02 优先建立贯穿后续建议修复的许可基线。 |
| ENFJ-C04 | 建议前确认 | 初见时玩家提到一个目标 | TA 先问要建议、倾听还是不展开 | 决定支持范围并保留目标自主 | ENFJ-F02 | ENFJ-F08 | ENFJ-B04 | ENFJ-F02、ENFJ-F08 | ENFJ-S03、ENFJ-S04、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S13、ENFJ-S16、ENFJ-S34 | ENFJ-K03 | trust、comfort、attraction | strong | select | 为 SC05 的越界后修复建立低成本前置对照。 |
| ENFJ-C05 | 热度与关系含义 | 联系增加但关系未定义 | TA 表达可能明显也可能笨拙，随后核对当前兴趣与承诺范围 | 询问含糊表达、匹配或放慢节奏、说明容量 | ENFJ-F03 | none | ENFJ-B07 | ENFJ-F03 | ENFJ-S04、ENFJ-S07、ENFJ-S13、ENFJ-S36 | ENFJ-K06、ENFJ-K11 | attraction、trust、comfort | strong | select | 以可澄清、可拒绝的早期兴趣进入接触阶段；表达失误不等于没兴趣，也不为实际影响免责。 |
| ENFJ-C06 | 支持方式选择 | 玩家提到一次挫折但未说明需要 | TA 提供支持方向并说明能力边界 | 选择倾听、建议、协助、空间或改天 | ENFJ-F06 | ENFJ-F02、ENFJ-F04 | ENFJ-B06 | ENFJ-F02、ENFJ-F04、ENFJ-F06 | ENFJ-S04、ENFJ-S06、ENFJ-S12、ENFJ-S15、ENFJ-S16、ENFJ-S46 | ENFJ-K04、ENFJ-K05 | comfort、trust、attraction | strong | select | 提供一次性支持的需求核对；S46 只补充支持者容量风险，为熟悉阶段的长期互惠升级铺垫。 |
| ENFJ-C07 | 任务容量与分工 | TA 接下过多活动任务后资源不足 | TA 区分能做、转交和拒绝的部分 | 分担、缩小承诺或继续索取 | ENFJ-F05 | none | ENFJ-B05 | ENFJ-F05 | ENFJ-S05、ENFJ-S08、ENFJ-S10、ENFJ-S15、ENFJ-S17、ENFJ-S35、ENFJ-S42、ENFJ-S43 | ENFJ-K04 | trust、comfort、conflict | strong | alternate | 可补强实际任务容量；正式序列优先保留支持方式与长期情绪劳动的低—高对照。 |
| ENFJ-C08 | 建议压力后的修复 | 连续建议被玩家体验为教育 | TA 停止追加、询问影响并接受原决定 | 具体反馈、调整、结束或人格攻击 | ENFJ-F07 | ENFJ-F02、ENFJ-F08 | ENFJ-B04、ENFJ-B12 | ENFJ-F02、ENFJ-F07、ENFJ-F08 | ENFJ-S02、ENFJ-S03、ENFJ-S04、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S11、ENFJ-S13、ENFJ-S16、ENFJ-S34 | ENFJ-K03、ENFJ-K10 | trust、comfort、conflict | strong | select | 将善意、实际压力和可观察调整同时纳入，是接触阶段最清楚的修复测试。 |
| ENFJ-C09 | 热闹后的低容量 | 社交活动后 TA 明确疲惫 | TA 结束表演并说明稍后联系范围 | 接受结束、低压联系、帮助或追问反差 | ENFJ-F09 | ENFJ-F01、ENFJ-F05、ENFJ-F06 | ENFJ-B01、ENFJ-B09 | ENFJ-F01、ENFJ-F05、ENFJ-F06、ENFJ-F09 | ENFJ-S01、ENFJ-S03、ENFJ-S08、ENFJ-S10、ENFJ-S14、ENFJ-S15、ENFJ-S16、ENFJ-S17、ENFJ-S35、ENFJ-S37、ENFJ-S42、ENFJ-S43、ENFJ-S46 | ENFJ-K01、ENFJ-K04、ENFJ-K05 | trust、comfort、conflict | strong | alternate | 公共角色与私人容量很清楚，但 SC01、SC06 已分层覆盖参与义务与持续承载。 |
| ENFJ-C10 | 单向情绪劳动 | 熟悉后 TA 的近况持续被略过 | TA 说明负荷并提出互惠、限时或暂停 | 重订支持、承认容量或继续索取 | ENFJ-F05 | ENFJ-F02、ENFJ-F04、ENFJ-F06、ENFJ-F09 | ENFJ-B06、ENFJ-B09 | ENFJ-F02、ENFJ-F04、ENFJ-F05、ENFJ-F06、ENFJ-F09 | ENFJ-S01、ENFJ-S04、ENFJ-S06、ENFJ-S08、ENFJ-S10、ENFJ-S12、ENFJ-S14、ENFJ-S15、ENFJ-S16、ENFJ-S17、ENFJ-S35、ENFJ-S37、ENFJ-S42、ENFJ-S43、ENFJ-S46 | ENFJ-K04、ENFJ-K05 | trust、comfort、conflict | strong | select | 把支持从一次需求匹配升级为长期互惠；新增反例支持自我优先与有限帮助，但长期结构及主动重订仍为创作推断。 |
| ENFJ-C11 | 亲密表达逐项同意 | TA 想以某种方式表达在乎 | TA 分别询问形式、频率与替代方式 | 接受、调整、延后或拒绝具体权限 | ENFJ-F04 | ENFJ-F03 | ENFJ-B08 | ENFJ-F03、ENFJ-F04 | ENFJ-S04、ENFJ-S06、ENFJ-S07、ENFJ-S12、ENFJ-S13、ENFJ-S36 | ENFJ-K07 | attraction、trust、comfort | strong | select | 将浪漫表达落到具体同意，避免把气氛或固定爱语当持续许可。 |
| ENFJ-C12 | 群体调停选择 | 朋友争执并要求站队 | TA 提议调停但允许对质或退出 | 参与、澄清、设限或拒绝修复职责 | ENFJ-F07 | none | ENFJ-B10 | ENFJ-F07 | ENFJ-S02、ENFJ-S05、ENFJ-S11、ENFJ-S17、ENFJ-S34 | ENFJ-K08 | trust、comfort、conflict | strong | alternate | 可补强群体和谐压力；正式序列优先使用双方争论中的可验证返回协议。 |
| ENFJ-C13 | 暂停与明确返回 | 双方争论升温并担心失联 | TA 说明暂停期限、返回方式和最低联系 | 协商等待、必要联系或继续即时争论 | ENFJ-F07 | ENFJ-F08 | ENFJ-B10、ENFJ-B12 | ENFJ-F07、ENFJ-F08 | ENFJ-S02、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S11、ENFJ-S17、ENFJ-S34 | ENFJ-K08、ENFJ-K09、ENFJ-K10 | trust、comfort、conflict | strong | select | 兼顾降温与返回确定性，能以协议而非类型化冲突风格完成熟悉阶段。 |
| ENFJ-C14 | 隐性债务重订 | 长期代办后 TA 因负荷爆发 | TA 承认自愿付出变成隐性期待 | 重订分工、停止帮助、处理怨气或退出 | ENFJ-F05 | ENFJ-F07、ENFJ-F08 | ENFJ-B05、ENFJ-B12 | ENFJ-F05、ENFJ-F07、ENFJ-F08 | ENFJ-S02、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S10、ENFJ-S11、ENFJ-S15、ENFJ-S17、ENFJ-S34、ENFJ-S35、ENFJ-S42、ENFJ-S43 | ENFJ-K04、ENFJ-K08、ENFJ-K10 | trust、comfort、conflict | strong | alternate | 实际责任更重，可替换 SC06；代价是减少“固定树洞/治疗者”边界覆盖。 |
| ENFJ-C15 | 愿景拆成协议 | 稳定见面后出现共同未来设想 | TA 区分约会、排他、近期安排与复谈 | 逐项确认、放慢、设期限或退出 | ENFJ-F03 | ENFJ-F08 | ENFJ-B07、ENFJ-B11 | ENFJ-F03、ENFJ-F08 | ENFJ-S04、ENFJ-S05、ENFJ-S07、ENFJ-S08、ENFJ-S09、ENFJ-S13、ENFJ-S34、ENFJ-S36 | ENFJ-K06、ENFJ-K12 | attraction、trust、comfort、conflict | strong | select | 适合作为最终关系定义，不让共同愿景购买当下同意。 |
| ENFJ-C16 | 广泛友好与浪漫信号 | 玩家不确定自己是否拥有特殊位置 | TA 区分友好、好感、约会与排他 | 澄清、表达不安、协商或退出 | ENFJ-F01 | ENFJ-F03、ENFJ-F08 | ENFJ-B02、ENFJ-B07 | ENFJ-F01、ENFJ-F03、ENFJ-F08 | ENFJ-S03、ENFJ-S04、ENFJ-S05、ENFJ-S07、ENFJ-S08、ENFJ-S09、ENFJ-S13、ENFJ-S17、ENFJ-S34、ENFJ-S36 | ENFJ-K02、ENFJ-K06、ENFJ-K11 | attraction、trust、comfort、conflict | strong | alternate | 是 K02 和浪漫信号的强修补项；正式序列已由 SC03、SC10 分层处理关系定义，并为 SC09 保留中文配对梗拆解。 |
| ENFJ-C17 | 个性化表达的权限拆分 | 公开、礼物或触碰尚未完全确认 | TA 将各项表达和关系定义分开询问 | 接受心意、改变形式或拒绝部分权限 | ENFJ-F04 | ENFJ-F03、ENFJ-F08 | ENFJ-B08、ENFJ-B11 | ENFJ-F03、ENFJ-F04、ENFJ-F08 | ENFJ-S04、ENFJ-S05、ENFJ-S06、ENFJ-S07、ENFJ-S08、ENFJ-S09、ENFJ-S12、ENFJ-S13、ENFJ-S34、ENFJ-S36 | ENFJ-K06、ENFJ-K07、ENFJ-K12 | attraction、trust、comfort | strong | alternate | 暧昧期同意压力更强，但会重复 SC07 的权限拆分并弱化最终的现实协议。 |
| ENFJ-C18 | 拒绝黄金配对推动 | 外部用配对梗要求推进关系 | TA 要求核对真实兴趣、边界和修复 | 拆投射、说明不适、继续了解或拒绝推动 | ENFJ-F08 | ENFJ-F07、ENFJ-F11 | ENFJ-B12、ENFJ-B13 | ENFJ-F07、ENFJ-F08、ENFJ-F11 | ENFJ-S02、ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S11、ENFJ-S17、ENFJ-S34 | ENFJ-K10、ENFJ-K13 | attraction、trust、comfort、conflict | strong | select | 满足反类型投射要求，同时明确标签本身无机械价值，并为最终真实协议清场。 |

本轮没有将候选判为 `exclude`：18 项均已通过 Stage 02 的触发具体性、玩家能动性和证据链审计；未入选的 8 项都有明确换位用途，不作静默删除。

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ENFJ-ALT01 | ENFJ-C02 | first_meeting | B03、F10、K13 的人格角色投射 | ENFJ-SC02 | 更直接拆“小太阳/主人公”标签；会失去建议许可基线，且标签讨论密度上升。 |
| ENFJ-ALT02 | ENFJ-C03 | first_meeting | B02、K02 的沟通核对与真实表达 | ENFJ-SC02 | 补齐唯一未覆盖冲突 K02；会失去 SC02—SC05 的建议许可—影响修复对照。 |
| ENFJ-ALT03 | ENFJ-C07 | contact | B05、F05、K04 的任务容量与公平分工 | ENFJ-SC04 | 实际任务和分工更具体；会减少支持方式与非治疗责任覆盖。 |
| ENFJ-ALT04 | ENFJ-C09 | contact | F01、F05、F06、F09 的公共角色与私人容量 | ENFJ-SC04 | 更突出“小太阳”表演义务；会与 SC01、SC06 的容量议题更接近。 |
| ENFJ-ALT05 | ENFJ-C12 | familiarity | K08 的群体调停与退出权 | ENFJ-SC08 | 群体和谐压力更鲜明；会失去 K09 的返回确定性和双方冲突协议。 |
| ENFJ-ALT06 | ENFJ-C14 | familiarity | B05、F05、K04/K08/K10 的隐性债务与责任 | ENFJ-SC06 | 共同成本和修复责任更高；会减少长期情绪劳动与非治疗边界。 |
| ENFJ-ALT07 | ENFJ-C16 | ambiguity | B02、K02/K11 的广泛友好与浪漫信号澄清 | ENFJ-SC09 | 直接关系信号更强并补齐 K02；会失去 F11/K13 的中文配对命定论拆解。 |
| ENFJ-ALT08 | ENFJ-C17 | ambiguity | F03/F04/F08、K07 的公开、礼物与触碰权限 | ENFJ-SC10 | 个性化浪漫表达更具戏剧性；会弱化共同愿景、现实投入和最终定义。 |

任何替换都必须分配新的 `scene_id`，同步机器注册表，并追加 Selection change log；不得把新测试复用到旧 `scene_id`。

## 6. 风险与未决项

- 证据描述的是网络如何表征 ENFJ，不是现实 ENFJ 人群的行为比例、心理事实、恋爱规律或适配结论；Stage 04 每题仍需保留至少两种合理但代价不同的回应方向。
- 中文平台证据仍以少量自选社区材料为主；两条知乎中文原回答与一个 Bilibili 视频的字幕、评论已核验，小红书仍只有标题和标签，抖音完整评论不足，不能宣称代表中文平台共识。
- SC02、SC05 必须把建议许可和影响修复写成双向行为，不得把“接受建议”设为万能策略，也不得用操纵、NPD、虚伪等人格诊断替代具体反馈。
- SC03、SC07、SC10 必须持续区分热情、支持、亲密表达、约会、排他和承诺；任何一项都不能由消息频率、礼物、触碰或未来设想自动推出。
- SC04、SC06 不能把 TA 写成治疗者，也不能把互惠写成即时等价交换。玩家可以寻求其他支持，TA 也可说明容量而不被惩罚。
- SC08 的暂停必须包含返回条件，但玩家也不能以不安为由强迫即时解决全部争议；Stage 04 应让双方容量和必要安全信息同时可表达。
- SC09 的 F11 只提供需要拆解的外部脚本。类型、官配或“救赎”本身不得增减任何状态；后果只能来自是否尊重真实兴趣、边界、责任与退出权。
- SC10 不预设确认恋爱或排他是正确答案。继续约会、非排他、延后复谈、发现不兼容和诚实退出都应保持可表达。
- 运行时状态、阶段阈值和结局规则保持共享合同；Stage 03 没有批准任何状态变化数值、题目文案、选项、即时反馈或结局可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ENFJ-SEL-001 | v1 | initial lock | ENFJ-SC01–ENFJ-SC10 | none | ENFJ-C01、ENFJ-C04、ENFJ-C05、ENFJ-C06、ENFJ-C08、ENFJ-C10、ENFJ-C11、ENFJ-C13、ENFJ-C18、ENFJ-C15 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成参与节奏—建议许可—关系信号—支持方式—影响修复—长期互惠—亲密同意—冲突返回—类型投射—真实协议的递进。 | 覆盖 F01–F09，F11 仅作反标签护栏，F10 有意留在备选；覆盖 K01、K03–K13，K02 由 C03/C16 备选修补。 | Stage 04 必须逐行继承本文件与 JSON 的完整上游 ID 集；任何替换需使用新 scene_id，并同步注册表与本日志。 |
| ENFJ-SEL-002 | v2 | traceability refresh | ENFJ-SC01、ENFJ-SC03、ENFJ-SC04、ENFJ-SC06 | ENFJ-C01、ENFJ-C05、ENFJ-C06、ENFJ-C10 | ENFJ-C01、ENFJ-C05、ENFJ-C06、ENFJ-C10 | Stage-02 接入 S42、S43、S46，并根据 S36 中文原文将早期兴趣测试明确为“表达可能笨拙，仍需核对含义”。四个候选的核心触发、决策压力和序列位置均未改变。 | SC01 新增 S42；SC04 新增 S46；SC06 新增 S42、S43、S46；SC03 来源集合不变，仅收窄测试解释。特征、冲突、状态覆盖和 2/3/3/2 配额不变，因此保留原 scene_id。 | Stage 04 的现有题目及问题追溯仍是 v1 来源快照；下一阶段必须按 v2 JSON 重新核验，不能把本次刷新描述成已同步生产内容。 |

## 8. 交接声明

本序列以 v2 锁定为 Stage 04 的正式场景集合。下一阶段应保留现有问题 ID，逐行核验题目与 `enfj-question-traceability.json` 是否完整继承 v2 JSON；本阶段没有修改或批准最终对白、选项、分数、模糊提示、阈值或结局。
