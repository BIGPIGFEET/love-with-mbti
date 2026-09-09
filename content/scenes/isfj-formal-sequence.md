# ISFJ 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [isfj-formal-sequence.json](../traceability/isfj-formal-sequence.json)。  
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ISFJ-SC01 | first_meeting | ISFJ-C01 | 玩家能否把安静、放松和参与节奏当作可协商信息，而非冷淡或好感证明 | low | ISFJ-B01 | ISFJ-F07 | ISFJ-S02、ISFJ-S06、ISFJ-S12、ISFJ-S15、ISFJ-S17 | ISFJ-K01 | attraction、trust、comfort | 用低成本社交节奏开场，双方都可选择继续、小范围交流或暂缓。 |
| 2 | ISFJ-SC02 | first_meeting | ISFJ-C02 | 一次实际帮助能否先取得许可，并保留拒绝、缩小范围和自行处理的权利 | low-medium | ISFJ-B03、ISFJ-B12 | ISFJ-F01、ISFJ-F11 | ISFJ-S02、ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S07、ISFJ-S15、ISFJ-S18 | ISFJ-K02、ISFJ-K12 | attraction、trust、comfort | 从交流节奏进入一次可拒绝的具体帮助，不把细心写成读心或持续服务。 |
| 3 | ISFJ-SC03 | contact | ISFJ-C08 | 玩家能否撤回“实际、无聊、没创造力”的预设，转而询问具体兴趣 | medium | ISFJ-B11 | ISFJ-F09 | ISFJ-S01、ISFJ-S06、ISFJ-S07、ISFJ-S11、ISFJ-S12 | ISFJ-K11 | attraction、trust、comfort、conflict | 接触阶段先确认 TA 是具体的人；反刻板也不要求 TA 表演稀奇或冒险。 |
| 4 | ISFJ-SC04 | contact | ISFJ-C07 | 礼物、帮助、陪伴和触碰能否逐项确认形式、成本与边界 | medium | ISFJ-B05 | ISFJ-F03 | ISFJ-S04、ISFJ-S09、ISFJ-S15 | ISFJ-K03、ISFJ-K13 | attraction、trust、comfort | 从兴趣了解进入早期示好，但一次接受不自动购买关系升级或未来权限。 |
| 5 | ISFJ-SC05 | contact | ISFJ-C09 | 私人整理空间与关系可见性之间，能否约定披露入口、等待范围和后续联系 | medium-high | ISFJ-B07 | ISFJ-F04 | ISFJ-S02、ISFJ-S05、ISFJ-S10、ISFJ-S14、ISFJ-S17 | ISFJ-K05 | trust、comfort、conflict | 在表达偏好后提高脆弱性；玩家不必读心，TA 也不能要求无限等待。 |
| 6 | ISFJ-SC06 | familiarity | ISFJ-C10 | 长期默认的预订、提醒和收尾能否被看见，并按容量与互惠重新分工 | high | ISFJ-B06 | ISFJ-F02 | ISFJ-S08、ISFJ-S14、ISFJ-S15、ISFJ-S16、ISFJ-S18 | ISFJ-K04、ISFJ-K10 | trust、comfort、conflict | 熟悉后把一次帮助升级为持续成本，区分擅长、自愿和永久责任。 |
| 7 | ISFJ-SC07 | familiarity | ISFJ-C13 | 稳定安排与临时变化能否同时保留准备需求、探索意愿和分开行动的自由 | medium-high | ISFJ-B04 | ISFJ-F06 | ISFJ-S05、ISFJ-S12、ISFJ-S17 | ISFJ-K07 | attraction、trust、comfort、conflict | 从责任议题切换到共同节奏，避免连续两题都围绕照顾劳动。 |
| 8 | ISFJ-SC08 | familiarity | ISFJ-C14 | 争论暂停能否包含明确原因、返回时间、最低联系和可调整的等待边界 | high | ISFJ-B09 | ISFJ-F04、ISFJ-F05 | ISFJ-S02、ISFJ-S05、ISFJ-S07、ISFJ-S08、ISFJ-S10、ISFJ-S14、ISFJ-S17 | ISFJ-K06、ISFJ-K08 | trust、comfort、conflict | 让共同节奏进入直接冲突，以可验证的暂停—返回协议收束熟悉阶段。 |
| 9 | ISFJ-SC09 | ambiguity | ISFJ-C16 | 细心和能力被拿来默认分配家务、护理与情绪劳动时，双方能否重订平等责任 | high | ISFJ-B02、ISFJ-B06 | ISFJ-F02、ISFJ-F08 | ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S08、ISFJ-S14、ISFJ-S15、ISFJ-S16、ISFJ-S18 | ISFJ-K04、ISFJ-K10 | trust、comfort、conflict | 暧昧期先拆除“最佳照顾者”角色投射，不让类型或性别替双方分配未来劳动。 |
| 10 | ISFJ-SC10 | ambiguity | ISFJ-C15 | 稳定见面与实际投入能否拆成当前好感、约会、排他和可兑现的长期安排 | high | ISFJ-B10 | ISFJ-F10 | ISFJ-S02、ISFJ-S03、ISFJ-S04、ISFJ-S15 | ISFJ-K09、ISFJ-K13 | attraction、trust、comfort、conflict | 在移除角色预设后，以逐项确认、复谈或诚实退出的真实协议收束。 |

## 2. 选择理由与阶段递进

- **初识（1–2）**：先协商参与节奏，再测试一次低成本、可拒绝的实际帮助。两题都不把安静、友好、细心或接受帮助自动解释为浪漫信号。
- **接触（3–5）**：依次拆能力标签、确认表达方式、协商需要的可见性。关系成本从承认错误预设，提高到具体同意，再进入有限度的脆弱披露。
- **熟悉（6–8）**：长期分工、稳定与变化、冲突暂停逐步增加共同成本。场景分别测试责任、节奏和修复，不把“顺着 TA”设成通用答案。
- **暧昧（9–10）**：先拒绝由类型或性别分配未来劳动，再区分稳定投入与真实承诺；共同生活、排他或继续关系都不是预设正确答案。
- **难度递进**：前两题只要求说明当下偏好；中段要求修正投射、划定表达和披露范围；后段才处理持续劳动、冲突返回、结构性角色期待和关系定义。
- **相邻去重**：SC02 是一次帮助许可，SC03 是能力标签；SC04 测试表达同意，SC05 测试需要可见性；SC06 测试长期分工，SC07 改为共同节奏；SC09 处理角色责任，SC10 才处理关系承诺。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级覆盖。`ISFJ-F08` 与 `ISFJ-F09` 只生成反标签压力，标签本身没有机械价值。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | F11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 |  |  |  |  |  |  | P |  |  |  |  |
| SC02 | P |  |  |  |  |  |  |  |  |  | S |
| SC03 |  |  |  |  |  |  |  |  | P |  |  |
| SC04 |  |  | P |  |  |  |  |  |  |  |  |
| SC05 |  |  |  | P |  |  |  |  |  |  |  |
| SC06 |  | P |  |  |  |  |  |  |  |  |  |
| SC07 |  |  |  |  |  | P |  |  |  |  |  |
| SC08 |  |  |  | S | P |  |  |  |  |  |  |
| SC09 |  | S |  |  |  |  |  | P |  |  |  |
| SC10 |  |  |  |  |  |  |  |  |  | P |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 | K11 | K12 | K13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  |  |  |  |  |  |  |  |  |
| SC02 |  | P |  |  |  |  |  |  |  |  |  | S |  |
| SC03 |  |  |  |  |  |  |  |  |  |  | P |  |  |
| SC04 |  |  | P |  |  |  |  |  |  |  |  |  | S |
| SC05 |  |  |  |  | P |  |  |  |  |  |  |  |  |
| SC06 |  |  |  | P |  |  |  |  |  | S |  |  |  |
| SC07 |  |  |  |  |  |  | P |  |  |  |  |  |  |
| SC08 |  |  |  |  |  | S |  | P |  |  |  |  |  |
| SC09 |  |  |  | S |  |  |  |  |  | P |  |  |  |
| SC10 |  |  |  |  |  |  |  |  | P |  |  |  | S |

### 3.3 覆盖审计

- `ISFJ-F01` 至 `ISFJ-F11` 与 `ISFJ-K01` 至 `ISFJ-K13` 全部进入正式序列；17 个合格 `evidence_source`（S01–S12、S14–S18）也均至少被一个正式场景引用。
- F02 在 SC06 为长期默认分工的主测试，在 SC09 仅作为反照顾者角色的次级覆盖；F04 在 SC05 主测披露入口，在 SC08 只支撑冲突中的整理时间。二者均非相邻重复。
- K04/K10 在 SC06 与 SC09 重复：前者是关系内已形成的日常默认，后者是类型或性别正当化的角色分配；中间隔有节奏变化和冲突返回。
- K13 在 SC04 与 SC10 均为次级覆盖：前者区分示好形式与关系升级，后者区分稳定投入与承诺，分别位于接触和最终定义阶段。
- 正式序列覆盖行为 `B01` 至 `B07`、`B09` 至 `B12`；`B08` 的明确设界未单独入选，因为 SC08 优先保留更可验证的暂停—返回协议。候选 C12 是该缺口的直接替换项。
- 没有相邻场景重复同一主特征或主冲突；四阶段主测试分别集中于社交/帮助、个体化/同意/披露、责任/变化/修复、角色自主/关系定义。

## 4. 候选资格与未入选理由

候选完整叙述与护栏仍以 [ISFJ 候选事件库](isfj-candidate-scenes.md) 为准；下表记录 Stage 03 的资格判断和完整上游 ID 集。

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ISFJ-C01 | 小范围进入节奏 | 多人初见中先简短回应、后放松说笑 | TA 说明当前参与节奏并询问如何继续 | 如实选择继续、小范围聊或留出空间 | ISFJ-F07 | none | ISFJ-B01 | ISFJ-F07 | ISFJ-S02、ISFJ-S06、ISFJ-S12、ISFJ-S15、ISFJ-S17 | ISFJ-K01 | attraction、trust、comfort | strong | select | 低压力、可观察且不浪漫化安静或活跃，适合开场。 |
| ISFJ-C02 | 可拒绝的一次帮助 | 玩家忘带非关键物品 | TA 提供备用选择并先询问是否需要 | 接受、缩小、拒绝或自行处理 | ISFJ-F01 | ISFJ-F11 | ISFJ-B03、ISFJ-B12 | ISFJ-F01、ISFJ-F11 | ISFJ-S02、ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S07、ISFJ-S15、ISFJ-S18 | ISFJ-K02、ISFJ-K12 | attraction、trust、comfort | strong | select | 以最小后果建立帮助许可、信息核对和非读心基线。 |
| ISFJ-C03 | 拒绝照顾者玩笑 | 初见者用类型标签分配收尾任务 | TA 接住善意但拒绝固定角色并重分任务 | 修正标签、公平分工或继续施压 | ISFJ-F08 | none | ISFJ-B02 | ISFJ-F08 | ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S18 | ISFJ-K10 | trust、comfort、conflict | strong | alternate | 反照顾者投射重要；正式序列把该冲突留到 SC09，以真实持续责任提高后果。 |
| ISFJ-C04 | 临时改计划 | 初次单独活动地点关闭 | TA 询问信息并提出新方案或替代 | 尝试、替代、改期或贬低准备需求 | ISFJ-F06 | none | ISFJ-B04 | ISFJ-F06 | ISFJ-S05、ISFJ-S12、ISFJ-S17 | ISFJ-K07 | attraction、trust、comfort | strong | alternate | 是低风险变化测试；正式序列由 SC07 在已有共同节奏后承载更真实的双向成本。 |
| ISFJ-C05 | 核对旧偏好 | TA 准备使用玩家过去提供的偏好 | TA 先核对信息是否仍有效 | 确认、更新、撤回或要求全能记忆 | ISFJ-F01 | ISFJ-F11 | ISFJ-B03、ISFJ-B12 | ISFJ-F01、ISFJ-F11 | ISFJ-S02、ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S07、ISFJ-S15、ISFJ-S18 | ISFJ-K02、ISFJ-K12、ISFJ-K13 | attraction、trust、comfort | strong | alternate | 可强化信息更新与浪漫信号边界，但会与 SC02 重复细节核对。 |
| ISFJ-C06 | 新请求与即时容量 | TA 已承担多项事务又收到额外请求 | TA 列出能做、共担和拒绝部分 | 缩小、分担、另找资源或继续加码 | ISFJ-F02 | none | ISFJ-B06 | ISFJ-F02 | ISFJ-S08、ISFJ-S14、ISFJ-S15、ISFJ-S16、ISFJ-S18 | ISFJ-K04 | trust、comfort、conflict | strong | alternate | 可将容量议题提前；正式序列优先让 SC06 测试长期默认分工。 |
| ISFJ-C07 | 表达方式逐项确认 | 尚未谈过礼物、帮助、陪伴或触碰偏好 | TA 把每种表达当成可拒绝提议 | 接受、调整形式与成本、延后或拒绝 | ISFJ-F03 | none | ISFJ-B05 | ISFJ-F03 | ISFJ-S04、ISFJ-S09、ISFJ-S15 | ISFJ-K03、ISFJ-K13 | attraction、trust、comfort | strong | select | 早期亲密具体、可拆分，能测试同意而不预设关系升级。 |
| ISFJ-C08 | 具体兴趣反刻板 | 玩家按“实际、无聊”预设安排约会 | TA 说明真实兴趣并允许双方保留差异 | 承认预设、共同选择或要求 TA 自证 | ISFJ-F09 | none | ISFJ-B11 | ISFJ-F09 | ISFJ-S01、ISFJ-S06、ISFJ-S07、ISFJ-S11、ISFJ-S12 | ISFJ-K11 | attraction、trust、comfort、conflict | strong | select | 直接拆能力贬义，同时保持反刻板不等于反向表演。 |
| ISFJ-C09 | 低压力披露入口 | 玩家注意到 TA 状态不佳 | TA 提供现在说明、稍后谈、求助或独处入口 | 尊重暂缓、约定复谈、说明等待范围或追问 | ISFJ-F04 | none | ISFJ-B07 | ISFJ-F04 | ISFJ-S02、ISFJ-S05、ISFJ-S10、ISFJ-S14、ISFJ-S17 | ISFJ-K05 | trust、comfort、conflict | strong | select | 在接触期建立双向可见性，不把沉默诊断化或把等待无限化。 |
| ISFJ-C10 | 默认事务重分 | 稳定相处后预订、提醒和收尾成为默认 | TA 说明负荷并区分保留、轮换和停止 | 重分、提供替代或继续固定角色 | ISFJ-F02 | none | ISFJ-B06 | ISFJ-F02 | ISFJ-S08、ISFJ-S14、ISFJ-S15、ISFJ-S16、ISFJ-S18 | ISFJ-K04、ISFJ-K10 | trust、comfort、conflict | strong | select | 将帮助升级为可观察的长期成本，适合作为熟悉阶段入口。 |
| ISFJ-C11 | 更新表达协议 | 已形成的示爱方式不再匹配当下偏好 | TA 区分表达与接收并邀请更新 | 调整、接受不对称或坚持类型爱语 | ISFJ-F03 | none | ISFJ-B05 | ISFJ-F03 | ISFJ-S04、ISFJ-S09、ISFJ-S15 | ISFJ-K03 | attraction、trust、comfort | strong | alternate | 可测试长期同意更新；正式序列已有 SC04，熟悉阶段优先腾给变化与冲突修复。 |
| ISFJ-C12 | 反复问题后的设界 | 一个小问题再次发生 | TA 指出具体影响并给出调整、暂停或结束范围 | 承认影响、协商、接受不兼容或指责翻脸 | ISFJ-F05 | none | ISFJ-B08 | ISFJ-F05 | ISFJ-S02、ISFJ-S07、ISFJ-S08、ISFJ-S10、ISFJ-S17 | ISFJ-K06 | trust、comfort、conflict | strong | alternate | 是唯一未入选行为 B08 的直接修补项；SC08 优先保留返回协议和 K08。 |
| ISFJ-C13 | 稳定中的新安排 | 固定周末计划要临时加入新人或刺激活动 | TA 区分想尝试、需准备和想保留的部分 | 尝试、改期、分开行动或作忠诚测试 | ISFJ-F06 | none | ISFJ-B04 | ISFJ-F06 | ISFJ-S05、ISFJ-S12、ISFJ-S17 | ISFJ-K07 | attraction、trust、comfort、conflict | strong | select | 同时保留稳定与变化的合法需要，并为中后段提供节奏变化。 |
| ISFJ-C14 | 暂停与明确返回 | 争论升温且双方担心伤害或失联 | TA 给出暂停原因、期限、最低联系与返回内容 | 接受、调整、确认急务或强迫即时解决 | ISFJ-F05 | ISFJ-F04 | ISFJ-B09 | ISFJ-F04、ISFJ-F05 | ISFJ-S02、ISFJ-S05、ISFJ-S07、ISFJ-S08、ISFJ-S10、ISFJ-S14、ISFJ-S17 | ISFJ-K06、ISFJ-K08 | trust、comfort、conflict | strong | select | 返回条件可验证，能区分调节、冷处理和强迫即时披露。 |
| ISFJ-C15 | 稳定投入与关系定义 | 稳定见面后朋友称 TA 为最佳伴侣 | TA 拆分好感、约会、排他和未来安排 | 逐项确认、复谈、放慢或退出 | ISFJ-F10 | none | ISFJ-B10 | ISFJ-F10 | ISFJ-S02、ISFJ-S03、ISFJ-S04、ISFJ-S15 | ISFJ-K09、ISFJ-K13 | attraction、trust、comfort、conflict | strong | select | 将稳定叙事落到知情协议，适合作为最终关系定义。 |
| ISFJ-C16 | 拒绝默认照顾劳动 | 聚会或共同生活讨论默认 TA 负责照顾与收尾 | TA 拒绝类型/性别分工并提出轮换 | 支持平等、承认受益、替代或继续施压 | ISFJ-F08 | ISFJ-F02 | ISFJ-B02、ISFJ-B06 | ISFJ-F02、ISFJ-F08 | ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S08、ISFJ-S14、ISFJ-S15、ISFJ-S16、ISFJ-S18 | ISFJ-K04、ISFJ-K10 | trust、comfort、conflict | strong | select | 以高后果实际责任拆照顾者投射，并与 SC06 构成个人默认—结构角色对照。 |
| ISFJ-C17 | 隐性债务修复 | 长期代办后 TA 疲惫，玩家称帮助未被请求 | 双方承认各自影响并重订请求与停止规则 | 承担、重分、处理怨气或结束合作 | ISFJ-F02 | ISFJ-F01、ISFJ-F11 | ISFJ-B03、ISFJ-B06、ISFJ-B12 | ISFJ-F01、ISFJ-F02、ISFJ-F11 | ISFJ-S02、ISFJ-S04、ISFJ-S05、ISFJ-S06、ISFJ-S07、ISFJ-S08、ISFJ-S14、ISFJ-S15、ISFJ-S16、ISFJ-S18 | ISFJ-K02、ISFJ-K04、ISFJ-K12 | trust、comfort、conflict | strong | alternate | 修复责任更复杂；可替换 SC09，但会失去 F08/K10 的角色投射覆盖。 |
| ISFJ-C18 | 拒绝忠诚与配对担保 | 平台或朋友用类型推动关系升级 | TA 要求核对现实兴趣、边界和修复 | 拆投射、设条件、继续了解或拒绝推动 | ISFJ-F10 | ISFJ-F09 | ISFJ-B10、ISFJ-B11 | ISFJ-F09、ISFJ-F10 | ISFJ-S01、ISFJ-S02、ISFJ-S03、ISFJ-S04、ISFJ-S06、ISFJ-S07、ISFJ-S11、ISFJ-S12、ISFJ-S15 | ISFJ-K09、ISFJ-K11、ISFJ-K13 | attraction、trust、comfort、conflict | strong | alternate | 可强化反命定论；正式序列已由 SC03 拆能力标签，SC10 优先保留不依赖类型话题的真实定义。 |

本轮没有将候选判为 `exclude`：18 项都通过 Stage 02 的触发具体性、玩家能动性和证据链审计。未入选的 8 项是避免重复或调整关系成本后的 `alternate`，不作静默删除。

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ISFJ-ALT01 | ISFJ-C03 | first_meeting | B02、F08、K10 的早期照顾者投射 | ISFJ-SC02 | 更早拆标签；会失去低风险帮助许可基线，并与 SC09 的角色冲突重复。 |
| ISFJ-ALT02 | ISFJ-C04 | first_meeting | B04、F06、K07 的低风险变化协商 | ISFJ-SC02 | 更轻快且具外部触发；会失去 F01/F11、K02/K12 的帮助与核对覆盖。 |
| ISFJ-ALT03 | ISFJ-C05 | contact | B03/B12、F01/F11、K02/K12/K13 的信息更新 | ISFJ-SC04 | 细节连续性更强；会重复 SC02，并失去 F03/K03 的表达同意。 |
| ISFJ-ALT04 | ISFJ-C06 | contact | B06、F02、K04 的即时容量 | ISFJ-SC05 | 更早引入实际分担；会减少 K05 的披露与等待边界，并靠近 SC06。 |
| ISFJ-ALT05 | ISFJ-C11 | familiarity | B05、F03、K03 的长期表达协议更新 | ISFJ-SC07 | 强化同意会随情境更新；会重复 SC04，并失去 F06/K07 的稳定—变化覆盖。 |
| ISFJ-ALT06 | ISFJ-C12 | familiarity | B08、F05、K06 的明确设界 | ISFJ-SC08 | 补齐唯一未覆盖行为 B08；会失去 B09/F04/K08 的暂停—返回协议。 |
| ISFJ-ALT07 | ISFJ-C17 | ambiguity | B03/B06/B12、F01/F02/F11、K02/K04/K12 的隐性债务修复 | ISFJ-SC09 | 双方责任与修复更复杂；会失去 F08/K10 的反照顾者角色覆盖。 |
| ISFJ-ALT08 | ISFJ-C18 | ambiguity | B10/B11、F09/F10、K09/K11/K13 的反配对命定论 | ISFJ-SC10 | 类型投射更直接；会重复 SC03 的标签结构，并弱化不依赖 MBTI 话题的关系定义。 |

任何替换都必须分配新的 `scene_id`，同步机器注册表，并在 Selection change log 追加记录；不得把原 `scene_id` 静默改成不同测试。

## 6. 未解决风险与 Stage-04 护栏

- Stage 01 记录的是在线刻板印象话语、官方边界和社区反例，不是 ISFJ 人群的发生率或因果证据；正式序列不能被描述为真实 ISFJ 的必经发展路线。
- SC03 与 SC09 都包含反标签压力，但前者针对能力/兴趣贬义，后者针对性别化或服务化劳动分配，且相隔六题。Stage 04 仍需让状态后果来自具体行动，而不是标签措辞本身。
- SC06 与 SC09 都涉及 F02/K04/K10：前者处理已形成的日常默认，后者处理外部角色正当化。题目写作必须让触发、责任范围和可退出方案明显不同。
- B08 未进入锁定序列，明确设界主要通过 B09 的暂停—返回协议间接承载；如 Stage 04 发现冲突策略过于集中，应优先用 C12 替换 SC08，而不是在同一题叠加两个事件。
- SC09 不得预设同居、婚姻、异性恋关系或固定性别分工；“共同生活讨论”可以只是未来可能或群体事务，拒绝该前提也必须成立。
- SC10 不预设排他、长期承诺或继续关系是正确答案。逐项确认、维持非排他、延后复谈、承认不兼容和诚实退出都应可表达。
- 实际帮助、记住细节、稳定联系、礼物、触碰、家务能力和讨论未来都不自动等于浪漫兴趣、同意、排他、忠诚或关系成功。
- 运行时状态、阶段阈值和结局规则保持共享合同；Stage 03 没有批准任何状态变化数值、题目文案、选项、即时反馈或结局可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ISFJ-SEL-001 | v1 | initial lock | ISFJ-SC01–ISFJ-SC10 | none | ISFJ-C01、ISFJ-C02、ISFJ-C08、ISFJ-C07、ISFJ-C09、ISFJ-C10、ISFJ-C13、ISFJ-C14、ISFJ-C16、ISFJ-C15 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成社交节奏—帮助许可—能力反投射—表达同意—需要可见—长期分工—稳定与变化—冲突返回—角色自主—真实定义的递进。 | 覆盖 F01–F11、K01–K13 和全部合格来源；行为 B08 由 C12 备选修补。 | Stage 04 必须按 `question_id`/`scene_id` 逐行继承本文件与 JSON 的完整上游 ID 集；任何替换需使用新 scene_id，并同步注册表与本日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可以为每个 `scene_id` 编写场景文案、TA 行为、问题和四项策略，并建立问题追溯文件；本阶段没有批准任何最终对白、选项、分数、模糊提示、阈值或结局。
