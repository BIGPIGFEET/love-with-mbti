# ESFJ 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [esfj-formal-sequence.json](../traceability/esfj-formal-sequence.json)。  
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ESFJ-SC01 | first_meeting | ESFJ-K01 | 面对具体帮助时，双方能否确认接受范围并保留各自行程 | low | ESFJ-B01 | ESFJ-F01 | ESFJ-S01、ESFJ-S07 | ESFJ-C01 | attraction、comfort | 用一次可拒绝、有时间上限的实际关怀建立第一印象，不让服务自动购买亲近。 |
| 2 | ESFJ-SC02 | first_meeting | ESFJ-K02 | 进入 TA 的熟人圈时，玩家能否决定参与、交谈和退场范围 | low-medium | ESFJ-B05 | ESFJ-F05 | ESFJ-S02、ESFJ-S06 | ESFJ-C05 | attraction、comfort | 从一对一帮助转入群体连接，测试邀请与自主参与，不把社交表现当礼貌义务。 |
| 3 | ESFJ-SC03 | contact | ESFJ-K05 | 已有约定与热门场地冲突时，准备成本能否和修改自由并存 | medium | ESFJ-B06 | ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S06 | ESFJ-C06 | trust、comfort | 进入接触后出现第一次共同安排；机会会流失，但任何人都不能替对方确认。 |
| 4 | ESFJ-SC04 | contact | ESFJ-K08 | 时间不足时，双方能否分配兴趣表达并承认不必喜欢相同内容 | medium | ESFJ-B07 | ESFJ-F07 | ESFJ-S03、ESFJ-S06、ESFJ-S11 | ESFJ-C07 | attraction、comfort | 从事务安排切换到个体兴趣，避免 ESFJ 角色只承担组织和照顾功能。 |
| 5 | ESFJ-SC05 | contact | ESFJ-K06 | 联系期待能否说清，同时保留不在线、少披露和不预先承诺的空间 | medium-high | ESFJ-B04 | ESFJ-F04 | ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S09 | ESFJ-C04 | trust、comfort、conflict | 在已有继续聊天意愿后才处理回应预期，以可协商边界收束接触阶段。 |
| 6 | ESFJ-SC06 | familiarity | ESFJ-K09 | TA 提出风险提醒时，关心能否停在信息、建议与各自决定权的边界 | high | ESFJ-B08、ESFJ-B06 | ESFJ-F08、ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S05、ESFJ-S06、ESFJ-S07、ESFJ-S10 | ESFJ-C01、ESFJ-C06 | trust、comfort、conflict | 熟悉后把一般计划升级为会产生现实后果的提醒；担忧仍不能变成强制同行。 |
| 7 | ESFJ-SC07 | familiarity | ESFJ-K12 | 双方的不同投入都被忽略时，能否重新理解贡献和资源上限 | high | ESFJ-B02、ESFJ-B08 | ESFJ-F02、ESFJ-F08 | ESFJ-S01、ESFJ-S03、ESFJ-S05、ESFJ-S07、ESFJ-S10 | ESFJ-C08 | trust、comfort、conflict | 从一次提醒进入持续互惠；重点是说明和调整分工，不是追溯计债。 |
| 8 | ESFJ-SC08 | familiarity | ESFJ-K11 | 共同筹备临时加码时，照顾来客与双方容量能否重新协商 | high | ESFJ-B03、ESFJ-B06 | ESFJ-F03、ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S05、ESFJ-S06 | ESFJ-C03、ESFJ-C06 | trust、comfort、conflict | 把私人互惠扩展到共同承担的群体责任，以明确拒绝和分工收束熟悉阶段。 |
| 9 | ESFJ-SC09 | ambiguity | ESFJ-K13 | 一起参加朋友聚会时，出席、介绍方式和关系公开能否逐项确认 | high | ESFJ-B05、ESFJ-B04 | ESFJ-F05、ESFJ-F04 | ESFJ-S02、ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S09 | ESFJ-C05、ESFJ-C04 | attraction、trust、comfort | 进入暧昧后引入外界目光，但共同露面仍不等于排他或正式关系。 |
| 10 | ESFJ-SC10 | ambiguity | ESFJ-K16 | 面对近期投入与继续接近的期待，双方能否明确意愿而不制造承诺债务 | high | ESFJ-B02、ESFJ-B04、ESFJ-B08 | ESFJ-F02、ESFJ-F04、ESFJ-F08 | ESFJ-S01、ESFJ-S03、ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S07、ESFJ-S09、ESFJ-S10 | ESFJ-C02、ESFJ-C04、ESFJ-C08 | attraction、trust、comfort、conflict | 在公开范围之后回到双方自己的关系定义；过去帮助不能替玩家或 TA 作出承诺。 |

## 2. 选择理由与难度递进

- **初识（1–2）**：先用短暂、可拒绝的实际帮助表现关怀，再让玩家决定是否进入 TA 的熟人环境。成本只涉及时间和参与范围，不预设浪漫兴趣。
- **接触（3–5）**：从一次需要共同确认的预约，切换到平等的兴趣表达，再进入联系频率和私人信息边界。三题依次增加共同投入、个人暴露和预期管理。
- **熟悉（6–8）**：先处理带现实风险的提醒，再处理持续分工中的不同贡献，最后把双方容量放入群体责任。难点从一次决定升级为互惠和共同承担。
- **暧昧（9–10）**：先拆分共同露面、介绍方式和身份公开，再直接谈继续接近的期待。关系是否升级仍由双方意愿决定。
- **相邻去重**：SC03 测试准备与弹性，SC04 测试兴趣表达；SC05 测试消息边界，SC06 测试现实风险中的决定权；SC07 测试持续互惠，SC08 测试临时加码；SC09 处理外界介绍，SC10 才处理双方关系定义。
- **有意重复**：F04、F06、F08 在不同阶段重复，是因为联系空间、计划弹性和帮助解释构成研究中最清楚的关系压力；每次对应不同资源和后果，不能写成同一道边界题。

## 3. 覆盖矩阵

`P` 表示主测试，`S` 表示次级覆盖。所有八个特征和八个冲突家族均至少有一次主覆盖。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 |
|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |
| SC02 |  |  |  |  | P |  |  |  |
| SC03 |  |  |  |  |  | P |  |  |
| SC04 |  |  |  |  |  |  | P |  |
| SC05 |  |  |  | P |  |  |  |  |
| SC06 |  |  |  |  |  | S |  | P |
| SC07 |  | P |  |  |  |  |  | S |
| SC08 |  |  | P |  |  | S |  |  |
| SC09 |  |  |  | S | P |  |  |  |
| SC10 |  | P |  | S |  |  |  | S |

### 3.2 冲突覆盖

| formal scene | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 |
|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |
| SC02 |  |  |  |  | P |  |  |  |
| SC03 |  |  |  |  |  | P |  |  |
| SC04 |  |  |  |  |  |  | P |  |
| SC05 |  |  |  | P |  |  |  |  |
| SC06 | S |  |  |  |  | P |  |  |
| SC07 |  |  |  |  |  |  |  | P |
| SC08 |  |  | P |  |  | S |  |  |
| SC09 |  |  |  | S | P |  |  |  |
| SC10 |  | P |  | S |  |  |  | S |

### 3.3 覆盖审计

- F01—F08 与 C01—C08 全部进入正式序列。F01 和 C07 各只出现一次，由 ALT01/ALT02 提供直接替换保护。
- F04 出现在 SC05、SC09、SC10，分别处理消息披露、公开介绍和关系期待；F06 出现在 SC03、SC06、SC08，分别处理预约、风险和共同任务；F08 出现在 SC06、SC07、SC10，分别处理提醒、互惠和承诺债务。
- SC06 的 C01 是次级压力，主测试是 C06；SC08 的 C06 是次级压力，主测试是 C03。其余冲突主测试不相邻重复。
- 正式序列覆盖 B01—B08。每种行为至少进入一题；B02、B04、B05、B06、B08 因后续关系压力升级而重复。
- 没有场景让频繁联系自动代表亲密、共同出席自动代表公开关系、接受帮助自动代表回报义务。

## 4. 候选资格与未入选理由

完整触发、行为、压力、能动性和护栏以 [ESFJ 候选事件库](esfj-candidate-scenes.md) 为准。下表保留 Stage-03 的资格判断和完整上游 ID 集。

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ESFJ-K01 | 雨伞帮助范围 | 散场下雨且双方方向不同 | TA 提议同行一段并说明时间上限 | 接受多少帮助与各自行程 | ESFJ-F01 | none | ESFJ-B01 | ESFJ-F01 | ESFJ-S01、ESFJ-S07 | ESFJ-C01 | attraction、comfort | strong | select | 可拒绝、有真实时间成本，适合作为非浪漫化的关怀开场。 |
| ESFJ-K02 | 熟人桌参与 | 拼桌时 TA 的熟人在另一桌招呼 | TA 介绍双方并询问是否换桌 | 社交融入、安静交谈与退场空间 | ESFJ-F05 | none | ESFJ-B05 | ESFJ-F05 | ESFJ-S02、ESFJ-S06 | ESFJ-C05 | attraction、comfort | strong | select | 群体连接可见，玩家和 TA 都能选择分开参与。 |
| ESFJ-K03 | 散场临时收尾 | 活动散场却临时缺人 | TA 想顾及组织者并限定停留时间 | 是否分担及承担到什么范围 | ESFJ-F03 | none | ESFJ-B03 | ESFJ-F03 | ESFJ-S01、ESFJ-S05 | ESFJ-C03 | trust、comfort、conflict | strong | alternate | 可替换 SC02 强化初识中的气氛责任，但会失去社交圈参与和 F05 覆盖。 |
| ESFJ-K04 | 保留创作时间 | TA 帮完别人后自己的作品未开始 | TA 拿回工具并投入个人兴趣 | 继续交流、帮助他人或保留专注 | ESFJ-F07 | none | ESFJ-B07 | ESFJ-F07 | ESFJ-S03、ESFJ-S06、ESFJ-S11 | ESFJ-C07 | attraction、comfort | strong | alternate | 可替换 SC04，突出 TA 不只是照顾者；双向兴趣分配的决策压力会减弱。 |
| ESFJ-K05 | 预约与弹性 | 热门场地时段与原约定冲突 | TA 提供路程和候补方案并等待确认 | 提前锁定机会或保留时间自由 | ESFJ-F06 | none | ESFJ-B06 | ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S06 | ESFJ-C06 | trust、comfort | strong | select | 是低风险共同计划，适合接触阶段起点。 |
| ESFJ-K06 | 联系预期 | 玩家将有一段时间不便看消息 | TA 询问下次联系范围并表达不想猜测 | 披露粒度、回应承诺和等待限度 | ESFJ-F04 | none | ESFJ-B04 | ESFJ-F04 | ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S09 | ESFJ-C04 | trust、comfort、conflict | strong | select | 能在已有联系意愿后明确测试空间，不需要查岗或定位。 |
| ESFJ-K07 | 劳动是否公开 | 公开记录漏掉 TA 的准备工作 | TA 提起投入并询问玩家是否注意 | 私下认可、公开补充和社交暴露 | ESFJ-F02 | none | ESFJ-B02 | ESFJ-F02 | ESFJ-S01、ESFJ-S03、ESFJ-S07 | ESFJ-C02 | trust、comfort | strong | alternate | 可替换 SC03 补强公开认可，但会提前引入署名争议并失去计划弹性。 |
| ESFJ-K08 | 双向兴趣时间 | 两项兴趣内容遇到时间缩短 | TA 已了解玩家内容，也要求自己的表达时间 | 深入一方、平均分配或另作安排 | ESFJ-F07 | none | ESFJ-B07 | ESFJ-F07 | ESFJ-S03、ESFJ-S06、ESFJ-S11 | ESFJ-C07 | attraction、comfort | strong | select | 让 TA 拥有具体兴趣和表达权，并给双方真实但非道德化的时间压力。 |
| ESFJ-K09 | 风险提醒边界 | 玩家路线可能错过末班车 | TA 展示可核查信息并提出替代方案 | 安全、停留偏好和各自决定权 | ESFJ-F08 | ESFJ-F06 | ESFJ-B08、ESFJ-B06 | ESFJ-F08、ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S05、ESFJ-S06、ESFJ-S07、ESFJ-S10 | ESFJ-C01、ESFJ-C06 | trust、comfort、conflict | strong | select | 现实后果清楚，又能区分提醒、建议和强制。 |
| ESFJ-K10 | TA 的聊天容量 | 玩家希望长聊而 TA 当天已过载 | TA 限定短聊并提出改期 | 当下支持与 TA 的休息 | ESFJ-F04 | none | ESFJ-B04 | ESFJ-F04 | ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S09 | ESFJ-C04 | trust、comfort | strong | alternate | 可替换 SC05 把边界主体转为 TA；会失去玩家披露隐私和回应义务的测试。 |
| ESFJ-K11 | 小聚临时加码 | 共同筹备被临时追加环节 | TA 询问谁能接手并限定承担范围 | 来客体验、分工和双方休息 | ESFJ-F03 | ESFJ-F06 | ESFJ-B03、ESFJ-B06 | ESFJ-F03、ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S05、ESFJ-S06 | ESFJ-C03、ESFJ-C06 | trust、comfort、conflict | strong | select | 让和谐需求与资源上限同时可见，适合熟悉阶段的共同责任。 |
| ESFJ-K12 | 不同贡献重订 | 双方都觉得自己的投入没被看到 | TA 说明跑腿负担并听取玩家的资料投入 | 贡献定义、资源上限和后续分工 | ESFJ-F02 | ESFJ-F08 | ESFJ-B02、ESFJ-B08 | ESFJ-F02、ESFJ-F08 | ESFJ-S01、ESFJ-S03、ESFJ-S05、ESFJ-S07、ESFJ-S10 | ESFJ-C08 | trust、comfort、conflict | strong | select | 将认可升级为持续互惠，同时明确不要求完全等量。 |
| ESFJ-K13 | 聚会身份公开 | TA 获得可带同行者的朋友聚会邀请 | TA 询问是否参加及如何介绍 | 参与、外界关注和身份公开范围 | ESFJ-F05 | ESFJ-F04 | ESFJ-B05、ESFJ-B04 | ESFJ-F05、ESFJ-F04 | ESFJ-S02、ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S09 | ESFJ-C05、ESFJ-C04 | attraction、trust、comfort | strong | select | 适合暧昧阶段，但仍能把出席和关系确认拆开。 |
| ESFJ-K14 | 固定见面安排 | 共同空闲只能用于约会或各自活动 | TA 提议稳定安排并核对让渡范围 | 确定性、个人生活和时间不兼容 | ESFJ-F04 | ESFJ-F06 | ESFJ-B04、ESFJ-B06 | ESFJ-F04、ESFJ-F06 | ESFJ-S01、ESFJ-S02、ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S09 | ESFJ-C04、ESFJ-C06 | attraction、trust、comfort | strong | alternate | 可替换 SC09，强化现实时间投入；会失去社交圈与身份公开压力。 |
| ESFJ-K15 | 活动撞期 | 玩家与 TA 的重要活动撞期 | TA 表达支持，同时保留自己的机会 | 到场支持、其他支持形式和谁让步 | ESFJ-F08 | ESFJ-F07 | ESFJ-B07、ESFJ-B08 | ESFJ-F07、ESFJ-F08 | ESFJ-S03、ESFJ-S05、ESFJ-S06、ESFJ-S07、ESFJ-S10、ESFJ-S11 | ESFJ-C07、ESFJ-C08 | attraction、trust、conflict | strong | alternate | 可替换 SC07 或 SC09，机会成本更强；会减少持续分工或公开身份覆盖。 |
| ESFJ-K16 | 投入与关系期待 | 双方商量下次见面并回顾近期投入 | TA 说明希望更明确回应及未来投入限度 | 继续含糊、明确意愿、调整投入或退出 | ESFJ-F02 | ESFJ-F04、ESFJ-F08 | ESFJ-B02、ESFJ-B04、ESFJ-B08 | ESFJ-F02、ESFJ-F04、ESFJ-F08 | ESFJ-S01、ESFJ-S03、ESFJ-S04、ESFJ-S05、ESFJ-S06、ESFJ-S07、ESFJ-S09、ESFJ-S10 | ESFJ-C02、ESFJ-C04、ESFJ-C08 | attraction、trust、comfort、conflict | strong | select | 能以双方可拒绝的真实关系期待收束，并明确过去付出不构成承诺债务。 |

本轮没有候选被判为 `exclude`：16 项均有具体触发、可观察行为、可区分的玩家压力和完整上游追溯。未入选六项作为定向备选保留，不作静默删除。

## 5. 备选池与替换指导

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ESFJ-ALT01 | ESFJ-K03 | first_meeting / contact | F03、C03 的气氛责任和精力上限 | ESFJ-SC02 | 更早建立拒绝公共劳动的权利；会失去 F05/C05 的社交融入覆盖。 |
| ESFJ-ALT02 | ESFJ-K04 | first_meeting / contact | F07、C07 的个人兴趣与非照顾者形象 | ESFJ-SC04 | TA 的自主创作更突出；双向表达的时间分配压力较弱。 |
| ESFJ-ALT03 | ESFJ-K07 | contact / familiarity | F02、C02 的公开认可和署名 | ESFJ-SC03 或 ESFJ-SC07 | 认可形式更具体；会减少计划弹性或持续互惠覆盖。 |
| ESFJ-ALT04 | ESFJ-K10 | familiarity | F04、C04 中 TA 自己的休息边界 | ESFJ-SC05 | 改由玩家回应 TA 的容量；失去隐私披露和回应承诺压力。 |
| ESFJ-ALT05 | ESFJ-K14 | ambiguity | F04/F06、C04/C06 的持续时间安排 | ESFJ-SC09 | 现实投入和长期节奏更强；会失去朋友环境中的身份公开压力。 |
| ESFJ-ALT06 | ESFJ-K15 | familiarity / ambiguity | F07/F08、C07/C08 的机会成本和多种支持形式 | ESFJ-SC07 或 ESFJ-SC09 | 对称损失更鲜明；会削弱长期分工或社交公开主题。 |

任何替换都必须创建新的 `scene_id`，同步机器注册表，并追加 Selection change log；不能将不同主测试复用到旧 `scene_id`。

## 6. 风险与未决项

- 研究材料描述网络表述，不是现实 ESFJ 人群的行为比例、心理规律或恋爱兼容结论。Stage 04 每题仍需写出至少两种合理但代价不同的方向。
- 中文合格证据只有同一 Bilibili 视频下的短评论，S09—S11 不是三个独立中文来源。SC04、SC05、SC06 不得把伴侣转述或安全感自述放大成类型定律。
- SC01、SC06 必须区分帮助、建议和决定权；TA 可以退出超出自身容量的帮助，玩家也可拒绝而不背负关系债务。
- SC02、SC09 必须让社交参与与关系公开分别确认。参加聚会、被介绍或相处融洽都不能自动表示约会、排他或承诺。
- SC03、SC08 不能把有计划写成永远正确，也不能让临时改变免除爽约成本。具体信息、资源和后果应可核对。
- SC04 的兴趣内容属于创作，不证明 ESFJ 特别有趣、聪明或擅长某领域；TA 可以不理解或不喜欢玩家的兴趣。
- SC05 的联系期待不能表现为查看定位、索要截图或强制即时回复。安全感不能合理化施压，沉默也不能被默认解释为拒绝关系。
- SC07、SC10 不能把互惠简化为即时等价交换。过去自愿付出不购买公开感谢、优先级或恋爱承诺。
- S08、S12—S15 仅用于母亲化、边界标题和正负极化风险审查；任何 surface_record 或 lead 均未进入正式证据链。
- 运行时规则保持不变；本阶段没有批准题目文案、选项策略、分值、即时反馈、模糊提示、阈值或结局可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ESFJ-SEL-001 | v1 | initial lock | ESFJ-SC01–ESFJ-SC10 | none | ESFJ-K01、ESFJ-K02、ESFJ-K05、ESFJ-K08、ESFJ-K06、ESFJ-K09、ESFJ-K12、ESFJ-K11、ESFJ-K13、ESFJ-K16 | 首次从 16 个候选锁定 2/3/3/2 序列，形成实际帮助—社交参与—计划协商—兴趣表达—联系边界—提醒权限—持续互惠—群体分工—公开范围—关系期待的递进。 | 完整覆盖 B01–B08、F01–F08、C01–C08；六个未入选候选保留定向替换路径。 | Stage 04 必须逐行继承本文件与 JSON 的完整上游 ID 集；任何替换使用新 scene_id，并同步注册表和本日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可以为每个 `scene_id` 编写完整题目并建立问题追溯文件；本阶段没有批准最终对白、四项选择、策略分配、分数、即时反馈、模糊提示、阈值或结局。
