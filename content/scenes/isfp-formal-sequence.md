# ISFP 正式场景序列（Stage 03）

> 状态：v1 locked。此文件只锁定十个场景的测试意图、顺序和上游追溯；不包含对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [isfp-formal-sequence.json](../traceability/isfp-formal-sequence.json)。
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题，复用运行时四维状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ISFP-SC01 | first_meeting | ISFP-C01 | 共同体验是否允许真实拒绝与差异，而不是用艺术标签猜人 | low | ISFP-B02 | ISFP-F07、ISFP-F01 | ISFP-S02、S03、S05、S06、S10、S11、S17 | ISFP-K02 | attraction、comfort | 先用具体、可退出的体验建立入口，避免以抽象人格介绍开场。 |
| 2 | ISFP-SC02 | first_meeting | ISFP-C03 | 面对 TA 的安静和低披露，玩家能否询问但不替 TA 解释 | low-medium | ISFP-B01 | ISFP-F02 | ISFP-S03、S04、S06、S17 | ISFP-K01 | comfort、trust、conflict | 在共同体验后加入私人节奏，完成初识阶段的边界测试。 |
| 3 | ISFP-SC03 | contact | ISFP-C05 | 行动式关心能否被接住并通过轻量确认转成可理解的意图 | medium | ISFP-B04 | ISFP-F08、ISFP-F03 | ISFP-S03、S04、S07、S17 | ISFP-K03、ISFP-K09 | attraction、trust、comfort | 关系进入接触后，具体关心带来吸引，同时引出语言确认需求。 |
| 4 | ISFP-SC04 | contact | ISFP-C07 | 临时体验变化能否与提前告知、时间影响和替代安排并存 | medium | ISFP-B05、ISFP-B10 | ISFP-F05、ISFP-F07 | ISFP-S02、S03、S06、S10、S17 | ISFP-K04 | trust、comfort、conflict | 在行动关心后加入兑现压力，但仍保留可逆协商空间。 |
| 5 | ISFP-SC05 | contact | ISFP-C09 | 温和表达能否容纳价值分歧和明确边界 | medium-high | ISFP-B06 | ISFP-F06、ISFP-F03 | ISFP-S02、S03、S04、S07、S10 | ISFP-K05、ISFP-K08 | trust、comfort、conflict | 接触阶段收束于价值分歧，关系风险来自把不同意见人格化。 |
| 6 | ISFP-SC06 | familiarity | ISFP-C08 | 行动支持、倾听和直接说明需求如何互译 | high | ISFP-B04、ISFP-B08 | ISFP-F08、ISFP-F03 | ISFP-S03、S04、S07、S17 | ISFP-K03 | comfort、trust、conflict | 熟悉后支持责任提高，测试双方是否能说清“现在需要什么”。 |
| 7 | ISFP-SC07 | familiarity | ISFP-C11 | 冲突暂停是否带有期限和回谈，而非追问轰炸或无期限消失 | high | ISFP-B07、ISFP-B12 | ISFP-F04 | ISFP-S04、S07 | ISFP-K05、ISFP-K06 | comfort、trust、conflict | 先让玩家面对即时受伤和暂停选择，为后续修复建立条件。 |
| 8 | ISFP-SC08 | familiarity | ISFP-C14 | 私密信息受损后能否承担传播责任、厘清范围并提出修复 | high | ISFP-B09、ISFP-B12 | ISFP-F02、ISFP-F03 | ISFP-S03、S04、S07 | ISFP-K07 | trust、comfort、conflict | 熟悉阶段的最高风险事件，要求具体责任而不是用“敏感”解释伤害。 |
| 9 | ISFP-SC09 | ambiguity | ISFP-C16 | 亲近氛围能否转化为明确、可拒绝的关系意图与期待 | high | ISFP-B11 | ISFP-F03、ISFP-F06、ISFP-F08 | ISFP-S02、S03、S04、S07 | ISFP-K03、ISFP-K09 | attraction、trust、comfort、conflict | 进入暧昧时先处理关系定义，避免把频繁互动直接当作承诺。 |
| 10 | ISFP-SC10 | ambiguity | ISFP-C18 | 暂停后的回谈能否说明影响、调整行为并接受未完全解决 | high | ISFP-B07、ISFP-B12 | ISFP-F04、ISFP-F06、ISFP-F08 | ISFP-S04、S07 | ISFP-K05、ISFP-K06 | trust、comfort、conflict | 以修复能力收束，而不是以“表面和好”或浪漫氛围代替责任。 |

## 2. 选择理由与阶段递进

- **初识（1-2）**：从可退出的具体体验进入，再处理安静、披露和社交节奏；不要求玩家猜类型，也不把拒绝判作失败。
- **接触（3-5）**：从行动关心推进到安排兑现，再进入价值和边界分歧；每题测试不同的核心压力。
- **熟悉（6-8）**：支持方式、暂停回谈和隐私责任逐步提高后果，形成从误译到具体伤害的递进。
- **暧昧（9-10）**：关系定义先于修复验证；亲密感不能替代明确意图、同意与共同承担。
- **重复控制**：`ISFP-K03` 在 3、6、9 出现，但分别测试行动含义、支持方式和关系定义；`ISFP-K04` 只在 4 出现；`ISFP-K06` 在 7、10 形成有意的“暂停—回谈”前后对照。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级测试。

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | S |  |  |  |  |  | P |  |  |  |  | P |  |  |  |  |  |  |  |
| SC02 |  | P |  |  |  |  |  |  |  |  | P |  |  |  |  |  |  |  |  |
| SC03 |  |  | S |  |  |  |  | P |  |  |  |  | P |  |  |  |  |  | S |
| SC04 |  |  |  |  | P |  | S |  |  |  |  |  |  | P |  |  |  |  |
| SC05 |  |  | S |  |  | P |  |  |  |  |  |  |  |  | P |  |  | P |  |
| SC06 |  |  | S |  |  |  |  | P |  |  |  |  | P |  |  |  |  |  |  |
| SC07 |  |  |  | P |  |  |  |  |  |  |  |  |  |  | S | P |  |  |  |
| SC08 |  | S | P |  |  |  |  |  |  |  |  |  |  |  |  |  | P |  |  |
| SC09 |  |  | P |  |  | S |  | S |  |  |  |  | P |  |  |  |  |  | S |
| SC10 |  |  | S | P |  | S |  | S |  |  |  |  |  |  | S | P |  |  |  |

### 覆盖审计

- `F01`、`F02`、`F03`、`F04`、`F05`、`F06`、`F07`、`F08` 均有正式覆盖；`F09`、`F10` 有意不进入正式机制，只由替代候选 `ISFP-C02` 保留反刻板澄清用途。
- `K01` 至 `K09` 全部覆盖；`K06` 的两次出现是有意的修复弧线，而不是重复题。
- 主要缺口是没有把艺术标签本身作为正式测试；这是为了避免“会不会创作”成为类型门槛，改由 `SC01` 的具体体验和 `C02` 的替代池处理。
- 高风险集中在 `SC07-SC10`，符合熟悉到暧昧的关系后果递进；初识与接触不安排隐私泄露或关系定义等不可逆压力。

## 4. 候选资格与排除

| candidate_id | eligibility | decision | reason |
|---|---|---|---|
| ISFP-C01 | select | SC01 | 具体、可退出、有共同体验与真实拒绝的双向压力，适合作为初识入口。 |
| ISFP-C02 | alternate | ALT-01 | 反刻板澄清有价值，但不宜让标签讨论占用正式十题；保留作首题替换或元幽默支线，机械上无效。 |
| ISFP-C03 | select | SC02 | 能测试安静与披露节奏，玩家可尊重或越界，且不把沉默自动解释为结果。 |
| ISFP-C04 | exclude | none | 与 SC01 的具体体验/差异表达相近；价值分歧在 C09 中具有更清楚的边界后果。 |
| ISFP-C05 | select | SC03 | 行动关心与语言确认是高创作价值的早期关系压力。 |
| ISFP-C06 | alternate | ALT-02 | 隐私分享很适合作为 SC08 的低风险前置，但正式序列已有 SC02、SC03 的披露/行动铺垫；保留用于替换。 |
| ISFP-C07 | select | SC04 | 把当下体验与可靠安排具体化，和后续隐私/修复事件不同。 |
| ISFP-C08 | select | SC06 | 将行动表达推进到支持方式协商，避免把“会照顾人”写成单一正确答案。 |
| ISFP-C09 | select | SC05 | 价值分歧和明确边界为接触阶段的升级点，保留双方正当需要。 |
| ISFP-C10 | alternate | ALT-03 | 公开范围是清晰的边界测试，但与 SC08 的隐私责任同族；适合在需要降低伤害强度时替换。 |
| ISFP-C11 | select | SC07 | 形成暂停—回谈弧线的前半段，并有明确的玩家决策压力。 |
| ISFP-C12 | alternate | ALT-04 | 计划取消是 SC04 的高后果变体；留作熟悉阶段替换，避免正式序列重复安排冲突。 |
| ISFP-C13 | exclude | none | 支持方式与 SC06 高度重叠，且触发缺少新的关系责任；可在 Stage 04 需要不同措辞时回收。 |
| ISFP-C14 | select | SC08 | 隐私受损后必须具体承担影响，提供熟悉阶段最高风险但可解释的事件。 |
| ISFP-C15 | alternate | ALT-05 | 是 SC04 的更高强度安排版本；保留为平衡时替换，不与正式事件同时使用。 |
| ISFP-C16 | select | SC09 | 暧昧阶段必须处理关系意图和排他期待，不能以互动频率代替确认。 |
| ISFP-C17 | alternate | ALT-06 | 个性化安排和边界确认适合替换 SC09 或 SC10，但与两者均有部分重叠。 |
| ISFP-C18 | select | SC10 | 对 SC07 的暂停形成回谈验证，突出修复而非自动原谅。 |

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ALT-01 | ISFP-C02 | first_meeting | F09/F10 的反刻板澄清、K02 | SC01 | 元话题更明显，但会减少具体共同体验。 |
| ALT-02 | ISFP-C06 | contact | F01/F02/F03、K01/K07 | SC03 或 SC08 | 低风险隐私铺垫更细，但行动关心的辨识度下降。 |
| ALT-03 | ISFP-C10 | contact / familiarity | F02/F03、K07/K09 | SC08 | 公开许可更清晰、伤害较低；隐私泄露责任的后果较弱。 |
| ALT-04 | ISFP-C12 | familiarity | F05/F06、K04 | SC07 或 SC08 | 计划责任更具体；会削弱暂停—回谈弧线或隐私责任。 |
| ALT-05 | ISFP-C15 | familiarity | F05/F07、K04 | SC04 | 可靠性压力更高；需要避免与 SC04 形成同质连续测试。 |
| ALT-06 | ISFP-C17 | ambiguity | F03/F08、K03/K07/K09 | SC09 或 SC10 | 个性化浪漫更强；需额外防止把行动误写成承诺。 |

## 6. 风险与未决项

- 证据描述的是网络表征，不是 ISFP 人群的比例、心理事实或关系规律；Stage 04 的每道题仍需保留多种合理回应。
- 抖音 `surface_record` 和小红书 `lead` 不进入正式场景的证据链；“小画家”“温柔神秘”等只能作为玩家可能带入的期待或被角色修正的语料。
- `SC07`、`SC10` 的暂停与回谈必须同时要求双方说明和承担，不能把关闭、失联、追问或快速原谅浪漫化。
- `SC08` 的隐私责任应由具体泄露、公开或淡化行为构成，不能用“敏感”“神秘”解释伤害。
- `SC09` 不应预设排他关系是正确答案；明确、拒绝、延后和退出都应在 Stage 04 作为合法玩家意图保留。
- 运行时状态与规则保持共享合同，Stage 03 不批准任何状态变化数值或结局可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ISFP-SEL-001 | v1 | initial lock | ISFP-SC01–SC10 | none | ISFP-C01、C03、C05、C07、C09、C08、C11、C14、C16、C18 | 首次从 Stage-02 候选库锁定 2/3/3/2 序列，形成具体体验—边界—支持—修复—关系确认递进。 | 覆盖 F01–F08、K01–K09；F09/F10 保留为反刻板替代池，不进入机制。 | Stage 04 必须按本文件与 JSON 的完整上游 ID 集写题；任何替换需新增 scene_id 并更新变更日志。 |

## 8. 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可以为每个 `scene_id` 编写题干、对白、四项策略、即时反馈和追溯数据；本阶段没有批准任何选项、分数、模糊提示、阈值或结局文案。
