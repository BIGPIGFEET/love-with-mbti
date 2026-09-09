# INFP 正式十场景策展交接

> 版本：v1.0，2026-08-13。  
> 上游：[研究资料库](../../docs/research/infp-stereotype-data.md)、[行为模型](../infp-behavior-model.md)、[候选事件库](infp-candidate-scenes.md)。  
> 本阶段只锁定场景职责与顺序，不批准对白、选项、分数、反馈、门槛或结局文案。

## 1. 策展约束与判断

- 正式数量固定为 10，阶段配额复用运行时：`first_meeting` 2、`contact` 3、`familiarity` 3、`ambiguity` 2。
- 每题只设置一个主要测试；次要特征用于情境，不把同一题写成多项人格测验。
- 关系进展从低风险的真实交流与节奏确认，升级到表达解读、社交边界、愿景核验、支持责任、冲突修复、价值分歧、关系定义与长期维护。
- F16 是机械无效的反刻板风险，不列入正式覆盖配额；I03 可作替补元场景，但不得让标签本身产生分数。
- `source_ids` 只使用 S01～S12 中已分类为 `evidence_source` 的条目；S13、S15、S16、S17 只留在传播风险说明。
- 选中场景不依赖姓名、性别、职业、身世、临床标签或固定恋爱取向。

## 2. 候选资格审查

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| I01 | 小众作品真话 | 初次聊天遇到玩家没看过的作品 | TA 要求真实感受并对套话迟疑 | 真实表达与气氛维护 | F02 | F10、F15 | B02、B03 | F02、F10、F15 | S01、S02、S08、S10 | C02、C11 | attraction、comfort | strong | select | 轻量但有区分度，适合作第一题。 |
| I02 | 聚会后安静 | 初次聚会结束后 TA 安静 | TA 不立即解释但接受低压力确认 | 好奇、空间与避免读心 | F01 | F10、F11 | B01、B03 | F01、F10、F11 | S01、S02、S03、S08、S09 | C01、C09、C12 | comfort、trust、conflict | strong | select | Q02 可建立披露和退出边界，并形成阶段门槛。 |
| I03 | 类型夸赞 | 玩家用 INFP 标签夸赞 | TA 要求回到个人经验 | 修正标签与解释善意 | F16 | F02 | B02、B14 | F02、F16 | S01、S02、S07、S08、S10 | C02、C11 | attraction、comfort | usable | alternate | 元场景有价值，但 F16 机械无效且与 I01 同测“真实 vs 套话”。 |
| I04 | 细节小物 | TA 送出贴合上次谈话的小物 | TA 用含蓄细节表达但不定义意图 | 接住心意与轻量确认 | F03 | F08 | B04、B06 | F03、F08 | S03、S04、S08、S09 | C08、C12 | attraction、trust、comfort | strong | select | 提升暧昧信号但仍保持低后果，适合接触期起点。 |
| I05 | 未完成作品 | TA 分享未完成作品并要求保密 | TA 限定反馈和传播范围 | 回应作品与守密 | F12 | F01、F14 | B01、B04 | F01、F12、F14 | S01、S02、S03、S04、S08、S09 | C01、C10 | trust、comfort、conflict | strong | alternate | 隐私测试优秀，但 I16 更适合高后果修复；可替换 I04 或 I06。 |
| I06 | 热闹一日行程 | 玩家安排高强度外出 | TA 表达局部兴趣与精力边界 | 共同体验与退出权 | F10 | F11 | B03 | F10、F11 | S02、S08、S09 | C09 | comfort、attraction、trust | strong | select | 明确保留玩家和 TA 的拒绝权，调节连续情绪题的节奏。 |
| I07 | 深聊不定义 | 深夜长聊后玩家想确认关系 | TA 认可连接但不愿定义 | 亲密体验与定义节奏 | F01 | F10、F12 | B01、B03 | F01、F10、F12 | S01、S02、S03、S04、S08、S09 | C01、C08 | attraction、trust、conflict | strong | alternate | 与 I02 的披露节奏、I14 的关系定义均相邻重复。 |
| I08 | 不现实共同计划 | TA 提议条件不足的未来愿景 | TA 投入想象并面对现实条件 | 保护愿景与核验可行性 | F05 | F14 | B04、B05 | F05、F14 | S03、S08、S09、S11、S12 | C03、C14 | attraction、trust、comfort | strong | select | 为接触期收束，首次提高共同未来的含义和难度。 |
| I09 | 倾听后行动 | 玩家受挫且截止期迫近 | TA 倾听但不接管任务 | 共情、建议与自我负责 | F04 | F15 | B07、B11 | F04、F15 | S01、S02、S07、S08 | C04、C13 | comfort、trust、conflict | strong | select | 改变视角，让玩家自己的责任成为冲突的一部分。 |
| I10 | 暂停与返回 | TA 受伤后请求独处 | TA 请求暂停但需要承诺返回 | 空间与沟通可预测性 | F06 | F08 | B06、B08 | F06、F08 | S01、S03、S04、S07、S08、S10 | C05、C12 | trust、comfort、conflict | strong | select | 满足“冲突暂停后修复”硬要求，难度明显上升。 |
| I11 | 迟说不想参加 | TA 当天才修正先前的“都可以” | TA 迟说需要并面对已产生成本 | 接纳修正与表达责任 | F13 | F06 | B08、B09 | F06、F13 | S01、S03、S07、S10、S12 | C06、C09 | trust、comfort、conflict | strong | alternate | 可修复 F13/C06；但与 I10 连续会集中测试间接沟通。 |
| I12 | 核心价值分歧 | TA 反对玩家一项合理决定 | TA 坚持价值但不拥有玩家决定权 | 理解理由与保留差异 | F07 | F02 | B02、B09 | F02、F07 | S01、S02、S07、S08、S10 | C02、C11 | attraction、trust、conflict | strong | select | 熟悉期高难度题，明确两方均可能合理。 |
| I13 | 临时改计划 | TA 临时提出改变已准备的安排 | TA 表达新偏好并面对告知和补偿 | 弹性与兑现 | F09 | F15 | B10 | F09、F15 | S01、S02、S06、S08 | C07 | trust、comfort、conflict | strong | alternate | F09/C07 的直接测试；正式序列由 I17 在更高后果层覆盖。 |
| I14 | 长信不等于承诺 | TA 以长信表达在乎但未回答排他关系 | TA 浪漫表达清楚、协议仍空白 | 接住表达与明确关系边界 | F03 | F12、F15 | B04、B11、B13 | F03、F12、F15 | S01、S02、S03、S04、S08、S09 | C08、C10 | attraction、trust、conflict | strong | select | 适合暧昧期第一题，区分情感表达与关系同意。 |
| I15 | 理想与真实不匹配 | TA 发现玩家与想象不同 | TA 提出愿望、失落和底线 | 协商、承认不匹配或体面退出 | F05 | F07、F15 | B09、B11、B12 | F05、F07、F15 | S01、S02、S03、S07、S08、S10、S11、S12 | C03、C11、C14 | attraction、trust、comfort、conflict | strong | alternate | 高质量最终题备选；但 I08 已覆盖理想校正，I17 更适合检验持续维护。 |
| I16 | 私密泄露修复 | 玩家泄露 TA 的私密内容 | TA 指出影响并要求补救 | 意图、责任、修复和退出权 | F12 | F15 | B11、B13 | F12、F15 | S01、S02、S03、S04、S08 | C02、C10 | trust、comfort、conflict | strong | alternate | 可作为高后果修复替换题，但会使末段更偏事故处理。 |
| I17 | 随性与稳定协议 | TA 要随性、玩家要可执行预期 | TA 也需说明最低投入 | 弹性、可靠、联系和退出条件 | F09 | F06、F13 | B08、B10、B13 | F06、F09、F13 | S01、S02、S03、S06、S07、S10、S12 | C05、C07 | trust、comfort、conflict | strong | select | 将情感确认落到维护协议，适合作最终题。 |
| I18 | 表达方式互译 | 双方爱的表达方式不同 | TA 说明已有付出并听取明确需要 | 认可付出与双向调整 | F04 | F03、F15 | B04、B07、B11 | F03、F04、F15 | S01、S02、S03、S07、S08、S09 | C08、C13 | attraction、trust、comfort | strong | alternate | 温暖的收束备选，但与 I09、I14 的覆盖重复较多。 |

## 3. 锁定正式顺序

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | INFP-S01 | first_meeting | I01 | 不懂对方兴趣时能否真实回应而不假装共鸣 | 低 | B02、B03 | F02、F10、F15 | S01、S02、S08、S10 | C02、C11 | attraction、comfort | 先用轻松兴趣话题建立角色辨识度和玩家真实性。 |
| 2 | INFP-S02 | first_meeting | I02 | 面对安静和不确定信号时是否尊重披露节奏 | 低中 | B01、B03 | F01、F10、F11 | S01、S02、S03、S08、S09 | C01、C09、C12 | comfort、trust、conflict | 从观点交流推进到边界与低压力续联，承接 Q02 阶段门槛。 |
| 3 | INFP-S03 | contact | I04 | 能否接住个性化表达而不把它擅自定义成承诺 | 中 | B04、B06 | F03、F08 | S03、S04、S08、S09 | C08、C12 | attraction、trust、comfort | 在已有续联基础上引入暧昧信号，但仍可轻量澄清。 |
| 4 | INFP-S04 | contact | I06 | 能否同时尊重精力边界与共同体验需求 | 中 | B03 | F10、F11 | S02、S08、S09 | C09 | comfort、attraction、trust | 从信号解读转为具体约会安排，加入玩家合理拒绝与退出点。 |
| 5 | INFP-S05 | contact | I08 | 能否保护关系愿景同时核验现实条件 | 中高 | B04、B05 | F05、F14 | S03、S08、S09、S11、S12 | C03、C14 | attraction、trust、comfort | 首次讨论共同未来，让 Q05 门槛检验的不只是聊天火花。 |
| 6 | INFP-S06 | familiarity | I09 | 能否在情绪理解、实际行动和个人责任间切换 | 中高 | B07、B11 | F04、F15 | S01、S02、S07、S08 | C04、C13 | comfort、trust、conflict | 关系进入双向支持，不再只处理 TA 的偏好和节奏。 |
| 7 | INFP-S07 | familiarity | I10 | 能否把冲突暂停变成有期限、有返回的修复流程 | 高 | B06、B08 | F06、F08 | S01、S03、S04、S07、S08、S10 | C05、C12 | trust、comfort、conflict | 从支持错位升级到真实受伤和修复责任。 |
| 8 | INFP-S08 | familiarity | I12 | 核心价值分歧中能否理解对方且保留各自决定权 | 高 | B02、B09 | F02、F07 | S01、S02、S07、S08、S10 | C02、C11 | attraction、trust、conflict | Q08 前检验吸引是否能承受不可消除的差异。 |
| 9 | INFP-S09 | ambiguity | I14 | 能否区分浪漫表达、隐私托付与排他关系同意 | 很高 | B04、B11、B13 | F03、F12、F15 | S01、S02、S03、S04、S08、S09 | C08、C10 | attraction、trust、conflict | 从价值兼容进入关系定义，避免靠氛围自动升级。 |
| 10 | INFP-S10 | ambiguity | I17 | 能否把吸引和关系定义落实为双向可执行的维护协议 | 很高 | B08、B10、B13 | F06、F09、F13 | S01、S02、S03、S06、S07、S10、S12 | C05、C07 | trust、comfort、conflict | 最终题检验长期可靠性、独立与最低投入，而非只追求浪漫峰值。 |

## 4. 特征覆盖矩阵

`P` 为主要覆盖，`S` 为次要覆盖，`—` 为不承担该特征。

| scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | F11 | F12 | F13 | F14 | F15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| INFP-S01 | — | P | — | — | — | — | — | — | — | S | — | — | — | — | S |
| INFP-S02 | P | — | — | — | — | — | — | — | — | S | S | — | — | — | — |
| INFP-S03 | — | — | P | — | — | — | — | S | — | — | — | — | — | — | — |
| INFP-S04 | — | — | — | — | — | — | — | — | — | P | S | — | — | — | — |
| INFP-S05 | — | — | — | — | P | — | — | — | — | — | — | — | — | S | — |
| INFP-S06 | — | — | — | P | — | — | — | — | — | — | — | — | — | — | S |
| INFP-S07 | — | — | — | — | — | P | — | S | — | — | — | — | — | — | — |
| INFP-S08 | — | S | — | — | — | — | P | — | — | — | — | — | — | — | — |
| INFP-S09 | — | — | S | — | — | — | — | — | — | — | — | P | — | — | S |
| INFP-S10 | — | — | — | — | — | S | — | — | P | — | — | — | S | — | — |

覆盖结论：F01～F15 全部覆盖；F16 有意不进入正式机械覆盖。F02、F03、F06、F08、F10、F11、F15 重复出现，是为了在不同关系阶段承担不同职责；不存在相邻两题以同一特征作为主测试。

## 5. 冲突覆盖矩阵

| scene | C01 | C02 | C03 | C04 | C05 | C06 | C07 | C08 | C09 | C10 | C11 | C12 | C13 | C14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| INFP-S01 | — | P | — | — | — | — | — | — | — | — | S | — | — | — |
| INFP-S02 | P | — | — | — | — | — | — | — | S | — | — | S | — | — |
| INFP-S03 | — | — | — | — | — | — | — | P | — | — | — | S | — | — |
| INFP-S04 | — | — | — | — | — | — | — | — | P | — | — | — | — | — |
| INFP-S05 | — | — | P | — | — | — | — | — | — | — | — | — | — | S |
| INFP-S06 | — | — | — | P | — | — | — | — | — | — | — | — | S | — |
| INFP-S07 | — | — | — | — | P | — | — | — | — | — | — | S | — | — |
| INFP-S08 | — | P | — | — | — | — | — | — | — | — | P | — | — | — |
| INFP-S09 | — | — | — | — | — | — | — | P | — | S | — | — | — | — |
| INFP-S10 | — | — | — | — | S | — | P | — | — | — | — | — | — | — |

正式序列覆盖 C01～C05、C07～C14；C06“维持和谐 vs 表达边界”未作为独立正式题。其相邻主题由 INFP-S08 的价值表达和 INFP-S10 的最低需求承担，但不能声称完整覆盖。若写题时发现 F13 只剩抽象背景，应以 I11 替换 I12，并接受 C11 覆盖下降的代价。

## 6. 严重行为的统一判定

普通的不匹配、拒绝外出、要求暂停、保留价值分歧、拒绝排他关系或无法达成联系协议，都应由状态与阶段门槛处理。若后续以 I16 替换 INFP-S09 或 INFP-S10，玩家泄露、继续扩散或公开羞辱等严重行为也只通过四维后果进入统一规则，不直接指定结局。

## 7. 替补池与换题指导

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ALT01 | I03 | first_meeting | F16 反刻板、C02/C11 | INFP-S01 | 增强类型元意识，但失去兴趣互动和 F10/F15，且 F16 仍不能机械计分。 |
| ALT02 | I05 | contact / familiarity | F12、F14、C10 | INFP-S03 或 INFP-S04 | 增强隐私托付，减少表达信号或社交边界覆盖。 |
| ALT03 | I07 | contact | F01、F12、C01/C08 | INFP-S05 | 增强深聊与定义边界，但失去 F05/F14 和理想校正。 |
| ALT04 | I11 | familiarity | F13、C06 | INFP-S08 | 修复唯一未独立覆盖的 C06，但失去核心价值差异 C11，且更接近 INFP-S07 的沟通责任。 |
| ALT05 | I13 | familiarity / ambiguity | F09、C07 | INFP-S08 或 INFP-S10 | 提供更具体的计划冲突，但末题的长期维护力度下降。 |
| ALT06 | I15 | ambiguity | F05、F07、C03/C11/C14 | INFP-S10 | 强化体面不匹配和理想校正，但 F09/F13 与长期协议缺口扩大。 |
| ALT07 | I16 | familiarity / ambiguity | F12、C10、严重修复 | INFP-S09 或 INFP-S10 | 可强化高后果修复；整体语气更沉重，需重查后期定义/维护覆盖。 |
| ALT08 | I18 | ambiguity | F03、F04、C08/C13 | INFP-S09 | 收束更温暖且强调互译，但关系定义和隐私边界变弱。 |

## 8. 阶段、难度与叙事节奏

| 阶段 | 场景职责 | 难度 | 门槛意义 |
|---|---|---|---|
| 初识 Q01～Q02 | 真实兴趣交流、披露节奏、低压力续联 | 低 → 低中 | Q02 后的信任与舒适来自真实参与和边界，不来自猜中类型。 |
| 接触 Q03～Q05 | 表达信号、约会精力、共同愿景与现实核验 | 中 → 中高 | Q05 后检验双方能否把心动转为可持续的具体互动。 |
| 熟悉 Q06～Q08 | 双向支持、冲突暂停与修复、核心价值差异 | 中高 → 高 | Q08 后的吸引不能绕过责任、边界和不可消除的分歧。 |
| 暧昧 Q09～Q10 | 关系定义、隐私/同意、弹性与长期可靠 | 很高 → 很高 | 最终关系取决于明确协议和维护能力，而非长信或浪漫峰值。 |

节奏依次为：轻松真话 → 安静与边界 → 细节信号 → 外出协商 → 未来愿景 → 支持责任 → 冲突修复 → 价值分歧 → 关系定义 → 日常维护。相邻题的主要测试均不同。

## 9. 追踪、风险与变更日志

### 9.1 来源追踪

- 每个正式场景保留 `candidate_id`、B 行为 ID、F 特征 ID、S 证据来源 ID、C 冲突 ID 和运行时状态 ID。
- 正式场景引用的 S ID 全部为 `evidence_source`；S13、S15、S16、S17 不得复制进下游 `researchRefs`。
- S01～S12 支持的是网络叙事的窄范围创作机制，不支持现实 INFP 行为概率；S14 是全局边界说明，不作为单题行为证据。
- 权威机器可读注册表为 [INFP formal sequence JSON](../traceability/infp-formal-sequence.json)。Markdown 与 JSON 必须保持同序、同阶段、同 ID 集。

### 9.2 未解决风险

- INFP-S01 若把不同意见写得过于尖锐，会把“真实”误写成残酷；Stage 04 必须保留至少两种可行回应。
- INFP-S02 不能把安静写成玩家需要破解的谜，也不能把结束约会写成失败。
- INFP-S03 的小物只是本角色本场行为，不是固定 INFP 爱语或告白密码。
- INFP-S05 的共同计划必须有具体而非荒谬的现实阻碍，避免把想象力写成幼稚。
- INFP-S06 以玩家受挫为中心，TA 的倾听不能被默认成提供执行劳动的义务。
- INFP-S07 必须同时写出 TA 的返回责任；若只有玩家“给空间”，就会变成单向适配。
- INFP-S08 允许双方保留分歧或退出，不得奖励玩家假同意，也不得默认 TA 的价值判断正确。
- INFP-S09 不允许把长信、秘密或强烈情绪自动解释为排他关系同意。
- INFP-S10 必须让 TA 同样提出可兑现的最低投入；不能只考玩家能否迁就随性。
- C06 未被独立覆盖是 v1.0 的明确缺口；Stage 04 若无法让 F13 在 INFP-S10 中成为可观察责任，应换入 I11。

### 9.3 Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| CHG-001 | v1.0 | initial lock | INFP-S01～INFP-S10 | none | I01、I02、I04、I06、I08、I09、I10、I12、I14、I17 | 建立首个符合 2/3/3/2、关系升级、来源资格与机械边界的正式基线 | 覆盖 F01～F15、C01～C05/C07～C14；C06 留作显式缺口 | Stage 04 写题前核对 JSON 同步、F13 可观察性与场景主测试 |

## 10. 下一步交接

锁定顺序为：`I01 → I02 → I04 → I06 → I08 → I09 → I10 → I12 → I14 → I17`。

下一阶段应使用 `04-write-choice-game-questions`，以 JSON 注册表作为 `scene_id` 和上游 ID 的权威集合，再为每题编写具体触发、TA 行为、问题、四种策略与即时反馈。**本文件没有批准任何选项、数值、模糊提示、结局或门槛变化。**
