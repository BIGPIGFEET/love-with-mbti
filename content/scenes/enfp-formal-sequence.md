# ENFP 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [enfp-formal-sequence.json](../traceability/enfp-formal-sequence.json)。  
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ENFP-SC01 | first_meeting | ENFP-C01 | 玩家能否接住开放的社交入口，同时保留自己的参与节奏 | low | ENFP-B01 | ENFP-F01、ENFP-F04 | ENFP-S03、S05、S06、S16、S32 | ENFP-K01 | attraction、comfort、trust | 用可接受也可拒绝的群体互动开场，不预设浪漫、深层披露或持续活跃。 |
| 2 | ENFP-SC02 | first_meeting | ENFP-C03 | 玩家是否会因玩笑和快速联想轻视观点，还是能要求收束并认真判断 | low-medium | ENFP-B02 | ENFP-F02、ENFP-F03 | ENFP-S03、S04、S05、S06、S13、S16 | ENFP-K02 | attraction、comfort、conflict | 从社交气氛转向表达尊重，完成初识阶段的能力去标签化测试。 |
| 3 | ENFP-SC03 | contact | ENFP-C05 | 新发现的可能性如何与原计划、时间成本和退出权协商 | medium | ENFP-B05 | ENFP-F03 | ENFP-S03、S04、S13、S14、S16、S33 | ENFP-K03 | attraction、trust、comfort、conflict | 关系开始形成具体安排，以可逆的小变化测试探索和可靠性。 |
| 4 | ENFP-SC04 | contact | ENFP-C07 | 热烈联系能否容纳不同容量，并与约会或承诺含义分开确认 | medium | ENFP-B07 | ENFP-F06 | ENFP-S09、S18、S19、S21、S22、S32、S39、S40 | ENFP-K06、ENFP-K10 | attraction、trust、comfort | 从共同活动推进到更强的个人关注，但仍不把频率和强度视为关系定义。 |
| 5 | ENFP-SC05 | contact | ENFP-C09 | 社交开放是否仍允许私人内容按自己的节奏披露 | medium-high | ENFP-B09 | ENFP-F01、ENFP-F04、ENFP-F05 | ENFP-S05、S06、S07、S08、S16、S17、S32 | ENFP-K01、ENFP-K09 | trust、comfort、conflict | 在热烈互动后加入不可由外向表象替代的隐私边界，完成接触阶段升级。 |
| 6 | ENFP-SC06 | familiarity | ENFP-C10 | 主动鼓励能否根据被支持者的需要调整，并保持容量与互惠 | high | ENFP-B07、ENFP-B08 | ENFP-F01、ENFP-F06、ENFP-F09 | ENFP-S03、S04、S09、S12、S18、S19、S23、S32 | ENFP-K07、ENFP-K13 | comfort、trust、attraction | 熟悉后支持责任提高，测试双方能否说清需要，而不是奖励猜中或持续输出。 |
| 7 | ENFP-SC07 | familiarity | ENFP-C11 | 外在活跃者表达低落时，关心能否尊重安静、披露和稍后沟通 | high | ENFP-B09 | ENFP-F01、ENFP-F04、ENFP-F05 | ENFP-S05、S06、S07、S08、S16、S17、S32 | ENFP-K08、ENFP-K09 | trust、comfort、conflict | 在支持方式之后让 TA 自己提出低容量状态，区分真实关心、追问和病理化读心。 |
| 8 | ENFP-SC08 | familiarity | ENFP-C14 | 已造成延误后，能否承认优先级错误、处理共同成本并提出可验证修复 | high | ENFP-B05、ENFP-B06、ENFP-B08 | ENFP-F01、ENFP-F03、ENFP-F09 | ENFP-S12、S13、S14、S16、S17、S23 | ENFP-K03、ENFP-K04、ENFP-K07、ENFP-K12 | trust、comfort、conflict | 熟悉阶段以实际损失和责任收束，避免用新鲜感、热心或类型标签取消后果。 |
| 9 | ENFP-SC09 | ambiguity | ENFP-C15 | 前期强度能否转成约会、排他和承诺范围的共同定义 | high | ENFP-B11 | ENFP-F07、ENFP-F08 | ENFP-S10、S11、S18、S39、S40、S41 | ENFP-K05、ENFP-K10 | attraction、trust、comfort、conflict | 进入暧昧后先处理关系位置，使双方拥有知情接受、延后或退出的权利。 |
| 10 | ENFP-SC10 | ambiguity | ENFP-C16 | 广泛社交如何与对等、具体且可执行的关系边界共存 | high | ENFP-B04、ENFP-B12 | ENFP-F04、ENFP-F06、ENFP-F08、ENFP-F09 | ENFP-S06、S10、S11、S12、S18、S32 | ENFP-K05、ENFP-K11、ENFP-K12 | trust、comfort、conflict | 最终把友善、调情、隐私与排他从类型猜测转成协议，检验长期兼容而非占有。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：从群体中的开放邀请进入，再检验玩家是否会把轻快表达误判成浅薄。两题都允许降低互动强度，不以“跟得上 ENFP”作为资格测试。
- **接触（3–5）**：先出现一次可逆的计划变化，再引入联系强度和私人披露。关系从外部安排进入个人关注，但不提前默认触碰、排他或深层坦白。
- **熟悉（6–8）**：支持方式、当前低落和已有承诺的延误逐步提高责任。事件从善意错位升级到需要具体承担的共同成本。
- **暧昧（9–10）**：先把强烈互动转成关系定义，再讨论关系成立后仍需保留的社交自主与协议；强度、嫉妒和类型解释都不能替代明确约定。
- **难度递进**：低风险的参与和表达判断在前，中段处理时间、容量与隐私，高风险的支持责任、修复、排他和社交边界集中在后半段。
- **相邻去重**：SC04 测试联系强度与接收节奏，SC05 测试私人披露；SC06 测试如何支持玩家，SC07 测试如何回应 TA 的低落；SC09 定义关系，SC10 才定义关系内的行为协议。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级覆盖。F10、F11 以及未标记的冲突不驱动数值判断。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | F11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  | S |  |  |  |  |  |  |  |
| SC02 |  | P | S |  |  |  |  |  |  |  |  |
| SC03 |  |  | P |  |  |  |  |  |  |  |  |
| SC04 |  |  |  |  |  | P |  |  |  |  |  |
| SC05 | S |  |  | S | P |  |  |  |  |  |  |
| SC06 | S |  |  |  |  | S |  |  | P |  |  |
| SC07 | P |  |  | S | S |  |  |  |  |  |  |
| SC08 | S |  | P |  |  |  |  |  | S |  |  |
| SC09 |  |  |  |  |  |  | P | S |  |  |  |
| SC10 |  |  |  | S |  | S |  | P | S |  |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 | K11 | K12 | K13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |  |  |  |
| SC02 |  | P |  |  |  |  |  |  |  |  |  |  |  |
| SC03 |  |  | P |  |  |  |  |  |  |  |  |  |  |
| SC04 |  |  |  |  |  | P |  |  |  | S |  |  |  |
| SC05 | S |  |  |  |  |  |  |  | P |  |  |  |  |
| SC06 |  |  |  |  |  |  | S |  |  |  |  |  | P |
| SC07 |  |  |  |  |  |  |  | P | S |  |  |  |  |
| SC08 |  |  | S | P |  |  | S |  |  |  |  | S |  |
| SC09 |  |  |  |  | S |  |  |  |  | P |  |  |  |
| SC10 |  |  |  |  | S |  |  |  |  |  | P | S |  |

### 3.3 覆盖审计

- `ENFP-F01` 至 `F09` 全部进入正式序列；F01、F03、F04、F06、F09 的重复覆盖分别落在不同阶段和不同成本上。
- `ENFP-F10` 有意不进入正式机制，只由备选 C02、C13 保留反标签用途；`ENFP-F11` 完全排除，病理化和道德化标签不得成为测试。
- `ENFP-K01` 至 `K13` 全部至少覆盖一次。K03、K05、K07、K09、K10、K12 的重复均是次级铺垫或后续升级，没有相邻场景重复同一主测试。
- SC05 与 SC07 都包含 K09：前者是拒绝披露过去经历，后者是当下低落时选择支持范围，中间由 SC06 的支持协商隔开。
- SC03 与 SC08 都包含 K03：前者是尚未造成损失的可逆计划变化，后者是延误后的责任修复，属于有意的低—高后果对照。

## 4. 候选资格与未入选理由

| candidate_id | eligibility | decision | reason |
|---|---|---|---|
| ENFP-C01 | select | ENFP-SC01 | 具体、低压力且允许不同参与节奏，适合作为开放但不预设浪漫的初识入口。 |
| ENFP-C02 | alternate | ENFP-ALT01 | 反“快乐小狗”标签很重要，但让元标签讨论占用正式首题会降低行为观察；保留作初识替换。 |
| ENFP-C03 | select | ENFP-SC02 | 能区分表达风格与能力判断，选择压力清楚且不要求玩家迎合快节奏。 |
| ENFP-C04 | alternate | ENFP-ALT02 | 友好与浪漫信号具有代表性，但正式序列已在 SC09、SC10 用更高成本处理定义和边界。 |
| ENFP-C05 | select | ENFP-SC03 | 把新奇与计划成本放入可逆的具体安排，适合作为接触阶段第一项责任测试。 |
| ENFP-C06 | alternate | ENFP-ALT03 | 共同兴趣项目的范围收缩可修补 K04，但与 SC03、SC08 的探索—兑现弧线同族。 |
| ENFP-C07 | select | ENFP-SC04 | 热烈联系具有 ENFP 话语辨识度，同时明确把强度与关系定义、同意分开。 |
| ENFP-C08 | alternate | ENFP-ALT04 | 帮助过载可补强 F09/K07，但 SC06、SC08 已分别覆盖支持互译和过度承诺后果。 |
| ENFP-C09 | select | ENFP-SC05 | 直接处理外向与私人披露的差异，能在进入熟悉前建立隐私边界。 |
| ENFP-C10 | select | ENFP-SC06 | 支持方式存在多种合理需要，玩家与 TA 都需表达而非读心。 |
| ENFP-C11 | select | ENFP-SC07 | 将“永远开心”的压力转为当前可观察的低落和陪伴范围，不引入病理解释。 |
| ENFP-C12 | alternate | ENFP-ALT05 | 身体距离与联系频率是重要同意测试，但正式序列的 F06 已由 SC04、SC06、SC10 分层覆盖。 |
| ENFP-C13 | alternate | ENFP-ALT06 | 拒绝承担气氛和情绪劳动适合补强 F10/K08/K12，但与 SC06、SC07 的容量议题相近。 |
| ENFP-C14 | select | ENFP-SC08 | 将兴趣、助人和承诺落到已经产生的延误及修复，是熟悉阶段最清楚的责任升级。 |
| ENFP-C15 | select | ENFP-SC09 | 暧昧阶段必须把互动强度转换成共同可知的关系位置，且允许不匹配和退出。 |
| ENFP-C16 | select | ENFP-SC10 | 把友善/调情争议转成对等协议，提供比“忠诚测试”更安全且可玩的收束。 |
| ENFP-C17 | alternate | ENFP-ALT07 | 热烈表达与具体同意具有戏剧性，但会与 SC04 的表达节奏和 SC09 的关系定义重复。 |
| ENFP-C18 | alternate | ENFP-ALT08 | 长期节奏与新机会很适合作为 SC10 的替换，但正式序列优先保留 ENFP 特有的友好/调情误读与社交边界。 |

本轮没有把候选彻底判为不可用：Stage 02 的 18 项都已通过具体触发、玩家能动性和证据链审计；未入选的 8 项均作为有明确换位用途的备选，而不是静默删除。

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ENFP-ALT01 | ENFP-C02 | first_meeting | F10、K08、K12 的反标签澄清 | SC01 或 SC02 | 元叙事更直接，但具体互动与行为观察减少；F10 仍必须机械无效。 |
| ENFP-ALT02 | ENFP-C04 | first_meeting | F04、F08、K05 | SC02 | 更早呈现友好/浪漫误读，但会提前消耗 SC09、SC10 的定义议题。 |
| ENFP-ALT03 | ENFP-C06 | contact | F03、F09、K04 | SC03 或 SC08 | 对“缩小范围/体面退出”更细，但会削弱计划变化或实际修复的后果层级。 |
| ENFP-ALT04 | ENFP-C08 | contact | F01、F09、K07 | SC06 | 更突出帮助过载；会减少被支持者主动说明需要的双向压力。 |
| ENFP-ALT05 | ENFP-C12 | familiarity | F06、K06 的身体与联系同意 | SC06 或 SC07 | 同意边界更具体，但会减少支持互译或可见积极—真实低落的反刻板覆盖。 |
| ENFP-ALT06 | ENFP-C13 | familiarity | F02、F10、K07、K08、K12 | SC07 | 情绪劳动与标签压力更强；必须防止把边界写成甩掉既有责任。 |
| ENFP-ALT07 | ENFP-C17 | ambiguity | F06、F07、F08、K06、K10 | SC09 或 SC10 | 浪漫表现力和同意压力更强；需避免让高成本表达购买承诺。 |
| ENFP-ALT08 | ENFP-C18 | ambiguity | F03、F07、F08、F09、K03、K04、K10 | SC10 | 长期维护和新机会更突出；会失去 K11 的社交自主与排他协议收束。 |

## 6. 风险与未决项

- 证据描述的是网络表征，不是 ENFP 现实人群的行为比例、心理事实或恋爱规律；Stage 04 必须让每题至少存在两种合理但代价不同的回应。
- SC02 不得把玩笑或联想写成“隐藏天才”反转；目标是避免以表达风格推断能力，而不是把另一种能力刻板印象机械化。
- SC04、SC09、SC10 必须持续区分热情、调情、约会、排他和承诺；任何一项都不能由消息频率、礼物、深聊或嫉妒自动推出。
- SC05、SC07 不能把私人保留解释成创伤、抑郁或“阳光面具”；玩家可关心、询问和说明容量，但没有读心义务。
- SC08 的判断对象是具体延误、共同成本和修复行为，不是兴趣变化本身；“我是 ENFP”或“高阶/低阶”不能成为解释终点。
- SC10 不预设排他或限制社交是正确答案。对等协议、非排他安排、保留朋友边界和诚实退出都应保留为可表达的合法意图。
- 运行时状态和规则保持共享合同；Stage 03 没有批准任何数值变化、阈值调整、结局文案或可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ENFP-SEL-001 | v1 | initial lock | ENFP-SC01–SC10 | none | ENFP-C01、C03、C05、C07、C09、C10、C11、C14、C15、C16 | 首次从 Stage-02 候选库锁定 2/3/3/2 序列，形成社交入口—表达尊重—计划与容量—支持和修复—关系定义与协议的递进。 | 覆盖 F01–F09 与 K01–K13；F10 保留在反标签备选池，F11 完全排除。 | Stage 04 必须按本文件与 JSON 的完整上游 ID 集写题；任何替换需使用新 scene_id，并同步注册表和本日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可以为每个 `scene_id` 编写场景文案、TA 行为、问题和四项策略，并建立问题追溯文件；本阶段没有批准任何最终对白、选项、分数、模糊提示、阈值或结局。

