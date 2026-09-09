# ESTJ 正式场景序列（Stage 03）

> 状态：v1 locked。本文件只锁定十个场景的测试意图、顺序和上游追溯；不包含最终对白、四项选择、即时反馈、分数、阈值或结局。机器可读注册见 [estj-formal-sequence.json](../traceability/estj-formal-sequence.json)。
>
> 目标分配：初识 2 题、接触 3 题、熟悉 3 题、暧昧 2 题；沿用项目状态 `attraction / trust / comfort / conflict`。

## 1. 锁定序列

| order | scene_id | stage | candidate_id | primary test | stakes | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | transition rationale |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ESTJ-SC01 | first_meeting | ESTJ-C01 | 面对主动协调时，玩家能否回应其帮助，同时保留共同决定和拒绝角色的权利 | low | ESTJ-B01 | ESTJ-F01、ESTJ-F02 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S06、ESTJ-S09、ESTJ-S11、ESTJ-S13、ESTJ-S14 | ESTJ-K01、ESTJ-K06 | attraction、trust、comfort | 以一次可接受也可修改的低风险协作开场，观察授权而非验证“天生领导”。 |
| 2 | ESTJ-SC02 | first_meeting | ESTJ-C03 | 玩家能否说明此刻要倾听、方案、实际帮助、空间或尚不确定 | low-medium | ESTJ-B03、ESTJ-B05 | ESTJ-F03、ESTJ-F04、ESTJ-F05 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K04、ESTJ-K09 | attraction、trust、comfort | 从群体协调转入轻量的一对一支持确认，但不要求玩家用脆弱换取亲近。 |
| 3 | ESTJ-SC03 | contact | ESTJ-C05 | 双方能否协商计划细度、可调整项与取消条件，而非把安排当成命令或爱意证明 | medium | ESTJ-B02 | ESTJ-F02 | ESTJ-S02、ESTJ-S03、ESTJ-S06、ESTJ-S09、ESTJ-S11、ESTJ-S14 | ESTJ-K02 | attraction、trust、comfort | 进入持续联系后增加共同时间成本，仍允许接受部分计划、即兴或不约。 |
| 4 | ESTJ-SC04 | contact | ESTJ-C07 | TA 已开始接手混乱任务时，双方能否重新确认范围、分工与最终决定权 | medium-high | ESTJ-B01、ESTJ-B06 | ESTJ-F01、ESTJ-F02、ESTJ-F03、ESTJ-F06 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S06、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13、ESTJ-S14 | ESTJ-K01、ESTJ-K05、ESTJ-K06 | trust、comfort、conflict | 将 SC01 的低风险协调升级为已发生接手的边界测试，以实际影响区分帮助与控制。 |
| 5 | ESTJ-SC05 | contact | ESTJ-C09 | 繁忙期出现后，双方能否以真实容量建立可兑现联系，而非奖励过劳或无限等待 | medium-high | ESTJ-B02、ESTJ-B08 | ESTJ-F02、ESTJ-F08 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S06、ESTJ-S09、ESTJ-S11、ESTJ-S14 | ESTJ-K02、ESTJ-K08 | attraction、trust、comfort、conflict | 从共同任务切到个人容量和关系在场，以现实承诺收束接触阶段。 |
| 6 | ESTJ-SC06 | familiarity | ESTJ-C10 | 持续实际照顾没有被体验为爱时，双方能否区分表达意图、接收效果与仍未满足的需要 | high | ESTJ-B04、ESTJ-B10 | ESTJ-F04、ESTJ-F05 | ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11 | ESTJ-K04 | attraction、trust、comfort、conflict | 熟悉后把 SC02 的一次支持询问升级为长期表达错位，不让付出自动购买亲密。 |
| 7 | ESTJ-SC07 | familiarity | ESTJ-C13 | “完整反馈”已经造成伤害后，双方能否区分事实、判断、隐私与修复责任 | high | ESTJ-B03、ESTJ-B11 | ESTJ-F03、ESTJ-F05、ESTJ-F06 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K03、ESTJ-K11 | trust、comfort、conflict | 从表达错位进入明确伤害，测试直接沟通能否承担时机、影响与道歉。 |
| 8 | ESTJ-SC08 | familiarity | ESTJ-C14 | 共同计划临时变化时，双方能否拆分必须保留、可以调整和应当放弃的部分 | high | ESTJ-B02、ESTJ-B07 | ESTJ-F02、ESTJ-F07 | ESTJ-S02、ESTJ-S03、ESTJ-S06、ESTJ-S09、ESTJ-S10、ESTJ-S11、ESTJ-S14 | ESTJ-K02、ESTJ-K07 | trust、comfort、conflict | 让先前计划偏好在更高共同成本下接受例外与重协商，以可执行的新约定收束熟悉阶段。 |
| 9 | ESTJ-SC09 | ambiguity | ESTJ-C18 | 面对“ESTJ 认定后不会离开”的外部推动，双方能否回到真实承诺、未决问题和退出权 | high | ESTJ-B09、ESTJ-B12 | ESTJ-F03、ESTJ-F09、ESTJ-F10 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S06、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S12、ESTJ-S13、ESTJ-S14 | ESTJ-K10、ESTJ-K12 | attraction、trust、comfort、conflict | 进入暧昧后先拆除忠诚神话和类型捷径，防止标签替双方完成关系判断。 |
| 10 | ESTJ-SC10 | ambiguity | ESTJ-C15 | 双方能否把好感、约会、排他、近期投入和未来方向逐项定义，并保留延后或退出 | high | ESTJ-B03、ESTJ-B09 | ESTJ-F03、ESTJ-F09 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S12、ESTJ-S13 | ESTJ-K10 | attraction、trust、comfort、conflict | 在移除外部保证后，以双方可接受、修改、延后或拒绝的真实协议完成关系收束。 |

## 2. 选择理由与难度递进

- **初识（1–2）**：先观察主动协调是否保留授权，再让玩家低成本说明支持偏好。两题只要求表达当下参与和沟通需要，不推导浪漫承诺。
- **接触（3–5）**：从共同安排进入已发生接手的边界，再转向繁忙期的真实容量。关系成本依次从日程协调提高到自主权和可兑现投入。
- **熟悉（6–8）**：长期照顾错位、伤人反馈后的修复、共同计划的高成本变更依次测试接收效果、责任承担与重新协商。
- **暧昧（9–10）**：先拒绝“必然忠诚”的外部保证，再讨论真实关系定义；类型标签、稳定互动和过去投入都不能替代当下同意。
- **相邻去重**：SC01 与 SC04 同含协调，但前者是事前授权、后者是接手后的限权；SC03、SC05、SC08 都涉及计划，却分别测试计划权限、现实容量和已承诺事项的例外；SC09 拆外部脚本，SC10 才建立双方协议。
- **一次一项主测试**：表中保留完整上游冲突集合，但每场的主要判别点分别是授权、支持模式、计划协商、建议边界、容量、接收错位、反馈修复、规则例外、反标签与关系定义。

## 3. 覆盖矩阵

`P` 为主测试，`S` 为次级覆盖。F09、F10 的存在只用于检验和拆解网络脚本；机械后果只能来自具体行为、边界和修复。

### 3.1 特征覆盖

| formal scene | F01 | F02 | F03 | F04 | F05 | F06 | F07 | F08 | F09 | F10 |
|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P | S |  |  |  |  |  |  |  |  |
| SC02 |  |  | S | S | P |  |  |  |  |  |
| SC03 |  | P |  |  |  |  |  |  |  |  |
| SC04 | S | S | S |  |  | P |  |  |  |  |
| SC05 |  | S |  |  |  |  |  | P |  |  |
| SC06 |  |  |  | P | S |  |  |  |  |  |
| SC07 |  |  | P |  | S | S |  |  |  |  |
| SC08 |  | S |  |  |  |  | P |  |  |  |
| SC09 |  |  | S |  |  |  |  |  | S | P |
| SC10 |  |  | S |  |  |  |  |  | P |  |

### 3.2 冲突覆盖

| formal scene | K01 | K02 | K03 | K04 | K05 | K06 | K07 | K08 | K09 | K10 | K11 | K12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01 | P |  |  |  |  | S |  |  |  |  |  |  |
| SC02 |  |  |  | P |  |  |  |  | S |  |  |  |
| SC03 |  | P |  |  |  |  |  |  |  |  |  |  |
| SC04 | S |  |  |  | P | S |  |  |  |  |  |  |
| SC05 |  | S |  |  |  |  |  | P |  |  |  |  |
| SC06 |  |  |  | P |  |  |  |  |  |  |  |  |
| SC07 |  |  | S |  |  |  |  |  |  |  | P |  |
| SC08 |  | S |  |  |  |  | P |  |  |  |  |  |
| SC09 |  |  |  |  |  |  |  |  |  | S |  | P |
| SC10 |  |  |  |  |  |  |  |  |  | P |  |  |

### 3.3 覆盖审计

- ESTJ-F01～F10 与 ESTJ-K01～K12 均至少进入一条正式场景，没有未覆盖项。
- F02 重复出现于计划权限、接手范围、繁忙容量和承诺变更；F03 重复出现于支持说明、接手沟通、伤害修复和关系定义。重复是为了检验同一表征在不同后果层级下是否仍尊重自主，不是把结构或直接当作正确答案。
- K02 在 SC03、SC05、SC08 分别作为计划协商主测试、容量限制次级压力和规则例外次级压力；三处跨阶段且触发不同。K01/K06 从 SC01 的事前授权升级到 SC04 的事后限权；K04 从 SC02 的支持选择升级到 SC06 的长期接收错位。
- F10 只在 SC09 作为需要主动拆解的网络模板；类型称呼本身不得增减状态。F09 只支持检验承诺预期，不能保证忠诚、兼容性或结局。

## 4. 候选资格与未入选理由

候选的完整叙述与护栏仍以 [ESTJ 候选事件库](estj-candidate-scenes.md) 为准。18 条候选均具有具体触发、可观察行为和有效玩家压力，因此没有判为 `exclude`；未选中的 8 条保留为可替换项。

| candidate_id | short_name | trigger | observable_behavior | player_decision_pressure | primary_feature_id | secondary_feature_ids | behavior_ids | feature_ids | source_ids | conflict_ids | state_ids | agency_quality | eligibility | reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ESTJ-C01 | 授权式协调 | 临时共同活动陷入等待 | TA 提出目标与分工草案并询问授权 | 接受、修改、另选角色或退出 | ESTJ-F01 | ESTJ-F02 | ESTJ-B01 | ESTJ-F01、ESTJ-F02 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S06、ESTJ-S09、ESTJ-S11、ESTJ-S13、ESTJ-S14 | ESTJ-K01、ESTJ-K06 | attraction、trust、comfort | strong | select | 低风险、行为清楚，并为后续接手边界建立基线。 |
| ESTJ-C02 | 变更说明 | 初见时间或地点临时变化 | TA 说明影响并提出替代时段 | 改期、缩短、取消或重提方案 | ESTJ-F02 | ESTJ-F03 | ESTJ-B02、ESTJ-B03 | ESTJ-F02、ESTJ-F03 | ESTJ-S02、ESTJ-S03、ESTJ-S06、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13、ESTJ-S14 | ESTJ-K02、ESTJ-K03 | attraction、trust、comfort、conflict | strong | alternate | 可补初见变化与语气压力，但正式序列已有三层计划协商。 |
| ESTJ-C03 | 支持模式确认 | 玩家提到一件模糊烦恼 | TA 先询问倾听、方案、帮助或空间 | 说明偏好、混合需要或不展开 | ESTJ-F05 | ESTJ-F03、ESTJ-F04 | ESTJ-B03、ESTJ-B05 | ESTJ-F03、ESTJ-F04、ESTJ-F05 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K04、ESTJ-K09 | attraction、trust、comfort | strong | select | 为长期支持错位建立低成本对照，且不要求玩家即时深谈。 |
| ESTJ-C04 | 拒绝尺子标签 | 他人以“尺子姐/教导主任”概括 TA | TA 拒绝固定角色并说明实际偏好 | 修正标签、澄清边界或停止互动 | ESTJ-F10 | none | ESTJ-B12 | ESTJ-F10 | ESTJ-S05、ESTJ-S06、ESTJ-S14 | ESTJ-K12 | trust、comfort、conflict | strong | alternate | 拆梗清楚，但 SC09 在关系后果更高时同时拆解 F09/F10。 |
| ESTJ-C05 | 可调整约会计划 | 下一次见面的安排未统一 | TA 提出计划、可调整项和取消条件 | 决定计划细度与授权范围 | ESTJ-F02 | none | ESTJ-B02 | ESTJ-F02 | ESTJ-S02、ESTJ-S03、ESTJ-S06、ESTJ-S09、ESTJ-S11、ESTJ-S14 | ESTJ-K02 | attraction、trust、comfort | strong | select | 是接触阶段最简洁的计划—灵活性测试。 |
| ESTJ-C06 | 有范围的实际帮助 | 玩家遇到现实困难 | TA 说明能帮什么并先询问需要 | 接受、缩小、改要倾听或自行处理 | ESTJ-F04 | ESTJ-F05 | ESTJ-B04、ESTJ-B05 | ESTJ-F04、ESTJ-F05 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K04 | trust、comfort | strong | alternate | 可强化帮助同意，但与 SC02、SC06 的支持低—高递进重合。 |
| ESTJ-C07 | 接手后的限权 | 共同任务失序且临近截止 | TA 先梳理步骤，再邀请重分职责 | 授权、限权、替代流程或退出 | ESTJ-F06 | ESTJ-F01、ESTJ-F02、ESTJ-F03 | ESTJ-B01、ESTJ-B06 | ESTJ-F01、ESTJ-F02、ESTJ-F03、ESTJ-F06 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S06、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13、ESTJ-S14 | ESTJ-K01、ESTJ-K05、ESTJ-K06 | trust、comfort、conflict | strong | select | 把帮助与控制的边界落到已发生接手的可观察情境。 |
| ESTJ-C08 | 规则目的与例外 | 场所或团体惯例造成不便 | TA 讨论规则目的及遵守、申诉或退出 | 选择共同预期或合理例外并承担成本 | ESTJ-F07 | ESTJ-F02 | ESTJ-B07 | ESTJ-F02、ESTJ-F07 | ESTJ-S02、ESTJ-S03、ESTJ-S06、ESTJ-S09、ESTJ-S10、ESTJ-S11、ESTJ-S14 | ESTJ-K07 | trust、comfort、conflict | strong | alternate | 可提前覆盖规则例外，但 SC08 的共同承诺变更更具关系后果。 |
| ESTJ-C09 | 繁忙期容量 | 原联系频率无法维持 | TA 说明容量并提出可兑现联络安排 | 协商需要、观察、降低投入或退出 | ESTJ-F08 | ESTJ-F02 | ESTJ-B02、ESTJ-B08 | ESTJ-F02、ESTJ-F08 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S06、ESTJ-S09、ESTJ-S11、ESTJ-S14 | ESTJ-K02、ESTJ-K08 | attraction、trust、comfort、conflict | strong | select | 能拆解工作机器想象，并测试现实可靠而非过劳。 |
| ESTJ-C10 | 行动没有被接收 | 实际事务持续完成但玩家仍孤独 | TA 说明表达意图并询问实际缺口 | 承认行动、提出需要或判断不匹配 | ESTJ-F04 | ESTJ-F05 | ESTJ-B04、ESTJ-B10 | ESTJ-F04、ESTJ-F05 | ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11 | ESTJ-K04 | attraction、trust、comfort、conflict | strong | select | 比一次帮助更能检验长期发出—接收错位。 |
| ESTJ-C11 | 建议越界后的停止 | 连续纠正让玩家感到被管理 | TA 停止建议并重询边界与授权 | 要求道歉、限权、暂停或结束共事 | ESTJ-F06 | ESTJ-F03、ESTJ-F05 | ESTJ-B06、ESTJ-B11 | ESTJ-F03、ESTJ-F05、ESTJ-F06 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K03、ESTJ-K05 | trust、comfort、conflict | strong | alternate | 是强修复候选，但会重复 SC04 的建议自主和 SC07 的影响修复。 |
| ESTJ-C12 | 方案失配后的返回 | 强烈情绪中玩家因方案而沉默 | TA 暂停方案并确认支持节奏与返回 | 选择倾听、空间、文字或约定再谈 | ESTJ-F05 | ESTJ-F03、ESTJ-F04、ESTJ-F06 | ESTJ-B05、ESTJ-B11 | ESTJ-F03、ESTJ-F04、ESTJ-F05、ESTJ-F06 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K04、ESTJ-K09 | trust、comfort、conflict | strong | alternate | 情绪强度更高，但会重复 SC02 的支持模式和 SC07 的修复责任。 |
| ESTJ-C13 | 完整反馈的代价 | 涉及隐私的反馈虽真却不必要地伤人 | TA 区分事实、判断和多余信息 | 指出影响、设限、暂停或继续核心问题 | ESTJ-F03 | ESTJ-F05、ESTJ-F06 | ESTJ-B03、ESTJ-B11 | ESTJ-F03、ESTJ-F05、ESTJ-F06 | ESTJ-S02、ESTJ-S03、ESTJ-S05、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S13 | ESTJ-K03、ESTJ-K11 | trust、comfort、conflict | strong | select | 提供唯一明确的隐私与“完整真相”测试，和接手边界不重复。 |
| ESTJ-C14 | 承诺中的合理变更 | 已同意计划因现实原因需改变 | TA 拆分必须保留、可调整和应放弃部分 | 共同决定兑现、减负、替代或取消 | ESTJ-F07 | ESTJ-F02 | ESTJ-B02、ESTJ-B07 | ESTJ-F02、ESTJ-F07 | ESTJ-S02、ESTJ-S03、ESTJ-S06、ESTJ-S09、ESTJ-S10、ESTJ-S11、ESTJ-S14 | ESTJ-K02、ESTJ-K07 | trust、comfort、conflict | strong | select | 在较高共同成本下检验规则目的和例外，适合熟悉阶段收束。 |
| ESTJ-C15 | 关系逐项定义 | 稳定见面但关系含义未确认 | TA 把未来方向拆成当前具体事项 | 接受、拒绝、延后或结束暧昧 | ESTJ-F09 | ESTJ-F03 | ESTJ-B03、ESTJ-B09 | ESTJ-F03、ESTJ-F09 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S12、ESTJ-S13 | ESTJ-K10 | attraction、trust、comfort、conflict | strong | select | 能以可拒绝的真实协议作为最终场景，不预设确认恋爱正确。 |
| ESTJ-C16 | 责任与关系承诺 | 责任高峰使关系承诺无法全部兑现 | TA 说明容量并重订承诺 | 判断方案是否足够或停止承受缺席 | ESTJ-F08 | ESTJ-F02、ESTJ-F03、ESTJ-F09 | ESTJ-B08、ESTJ-B09 | ESTJ-F02、ESTJ-F03、ESTJ-F08、ESTJ-F09 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S06、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S12、ESTJ-S13、ESTJ-S14 | ESTJ-K08、ESTJ-K10 | attraction、trust、comfort、conflict | strong | alternate | 可提高最终现实压力，但 SC05 与 SC10 已分别覆盖容量和关系定义。 |
| ESTJ-C17 | 表达方式与承诺 | 行动投入与玩家所需确认持续错位 | TA 区分表达意图、接收形式和能否兑现 | 提出组合、拒绝亲密或判断不匹配 | ESTJ-F04 | ESTJ-F03、ESTJ-F05、ESTJ-F09 | ESTJ-B04、ESTJ-B09、ESTJ-B10 | ESTJ-F03、ESTJ-F04、ESTJ-F05、ESTJ-F09 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S07、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S12、ESTJ-S13 | ESTJ-K04、ESTJ-K10 | attraction、trust、comfort、conflict | strong | alternate | 浪漫表达更集中，但会重复 SC06 的接收错位并削弱最终定义。 |
| ESTJ-C18 | 拒绝忠诚神话 | 朋友断言 ESTJ 认定后不会离开 | TA 转向具体承诺、未决问题和退出权 | 依赖标签或面对现实关系证据 | ESTJ-F10 | ESTJ-F03、ESTJ-F09 | ESTJ-B09、ESTJ-B12 | ESTJ-F03、ESTJ-F09、ESTJ-F10 | ESTJ-S02、ESTJ-S03、ESTJ-S04、ESTJ-S05、ESTJ-S06、ESTJ-S08、ESTJ-S09、ESTJ-S11、ESTJ-S12、ESTJ-S13、ESTJ-S14 | ESTJ-K10、ESTJ-K12 | attraction、trust、comfort、conflict | strong | select | 在承诺前拆除 F09/F10 外部脚本，并明确标签机械无效。 |

## 5. 备选池

| alternate_id | candidate_id | suitable stages | coverage repaired | swap target | tradeoff |
|---|---|---|---|---|---|
| ESTJ-ALT01 | ESTJ-C02 | first_meeting | F02/F03、K02/K03 的初见变更与明确说明 | ESTJ-SC02 | 增强计划变化与语气测试；会失去支持模式的早期基线。 |
| ESTJ-ALT02 | ESTJ-C04 | first_meeting | F10、K12 的中文刻板称呼拆解 | ESTJ-SC01 | 更早处理“尺子”标签；会失去 F01、K01/K06 的授权式协调。 |
| ESTJ-ALT03 | ESTJ-C06 | contact | F04/F05、K04 的实际帮助范围 | ESTJ-SC03 | 增强行动照顾与同意；会减少计划—灵活性的低成本测试。 |
| ESTJ-ALT04 | ESTJ-C08 | contact | F07、K07 的外部规则目的与退出 | ESTJ-SC05 | 提前覆盖规则例外；会失去 F08、K08 的工作—关系容量。 |
| ESTJ-ALT05 | ESTJ-C11 | familiarity | F06、K03/K05 的建议越界与停止 | ESTJ-SC07 | 更直接承接 SC04；会失去 K11 的隐私和多余真相测试。 |
| ESTJ-ALT06 | ESTJ-C12 | familiarity | F04/F05/F06、K04/K09 的情绪支持与返回 | ESTJ-SC06 | 情绪冲突与修复更强；会重复 SC02 的支持模式并减少长期爱语错位。 |
| ESTJ-ALT07 | ESTJ-C16 | ambiguity | F08/F09、K08/K10 的现实承诺容量 | ESTJ-SC09 | 提高现实投入压力；会失去 F10/K12 的忠诚神话拆解。 |
| ESTJ-ALT08 | ESTJ-C17 | ambiguity | F04/F05/F09、K04/K10 的表达与承诺协商 | ESTJ-SC09 | 增加浪漫表达浓度；会重复 SC06，并失去 F10/K12。 |

任何替换都必须使用新的 `scene_id`，同步机器注册表，并追加 Selection change log；不得用旧 `scene_id` 承载新的测试含义。

## 6. 风险与未决项

- 上游材料证明的是网络表征和个案分歧，不是 ESTJ 人群的行为比例、恋爱规律或兼容性结论。Stage 04 每题仍需保留至少两种合理但代价不同的回应。
- 中文可核验材料较少；“尺子姐/教导主任”等只作为需要拆解的传播风险，不能被写成 TA 的性别、职业、能力或行为事实。
- SC01/SC04 必须区分事前授权与事后修复；不能把更高效率设为万能答案，也不能把一次主动帮助自动判作控制。
- SC02/SC06 必须区分一次支持选择和长期接收错位；倾听、方案、实际帮助、空间及其他表达都没有固定类型优先级。
- SC03/SC05/SC08 的计划议题必须保持触发差异。若 Stage 04 文案趋同，应优先用备选 C06、C08 或 C12 替换，而不是只改表面场景。
- SC07 不得用“真实”“理性”合理化隐私侵犯、羞辱或连续纠错；玩家指出影响也不构成对 TA 的人格诊断。
- SC09 的 F09/F10 机械上无效；后果只能来自是否尊重具体承诺、边界、责任和退出权。SC10 不预设确认恋爱或排他是正确答案。
- 运行时规则与阈值保持共享合同；Stage 03 没有批准任何状态数值、题目文案、选项、即时反馈、结局或可达性结论。

## 7. Selection change log

| change_id | baseline/version | change type | scene_id | old candidate_id | new candidate_id | reason | traceability/coverage impact | downstream recheck |
|---|---|---|---|---|---|---|---|---|
| ESTJ-SEL-001 | v1 | initial lock | ESTJ-SC01–ESTJ-SC10 | none | ESTJ-C01、ESTJ-C03、ESTJ-C05、ESTJ-C07、ESTJ-C09、ESTJ-C10、ESTJ-C13、ESTJ-C14、ESTJ-C18、ESTJ-C15 | 首次从 18 个 Stage-02 候选中锁定 2/3/3/2 序列，形成授权—支持确认—计划协商—接手限权—现实容量—长期错位—反馈修复—合理变更—反忠诚神话—真实关系定义的递进。 | 覆盖 ESTJ-F01～F10 与 ESTJ-K01～K12；F09/F10 仅作承诺脚本与反标签护栏。 | Stage 04 必须按 `question_id`/`scene_id` 精确继承 Markdown 与 JSON 的完整 ID 集；替换需新 scene_id 并同步本日志。 |

## 8. Stage 04 交接声明

本序列已锁定为 Stage 04 的唯一正式场景集合。下一阶段可以为每个 `scene_id` 编写场景、TA 行为、问题和四项策略，并建立问题追溯文件；本阶段没有批准任何最终对白、选项、分数、模糊提示、阈值或结局。
