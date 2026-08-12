# INTP 结局与状态反馈目录 v0.1

> 状态：规则身份、判定优先级、结局文案、关系评价、模糊反馈和问题追踪已完成；`balance-choice-game-paths` 已于 2026-08-12 验证全部运行时结果可达。  
> 问题来源：[INTP 正式十题内容草案](../questions/intp-ten-question-draft.md)。  
> 运行时合同：[核心规则](../../docs/02-core-rules.md) 与 `src/game/rules.ts`。本目录不修改现有 ENTP 运行时数据。

## 1. 状态、显示与操作合同

| 维度 | 初始值 | 关系含义 | 健康方向 | 结局页显示 |
|---|---:|---|---|---|
| `attraction` 吸引 | 25 | 想继续靠近、约会和探索彼此的动力 | 越高越有利，但不能代替边界和可靠性 | 精确值 `0～100` |
| `trust` 信任 | 25 | 是否相信表达会兑现、私事与边界会被尊重 | 越高越有利 | 精确值 `0～100` |
| `comfort` 舒适 | 25 | 能否自然表达、暂停、拒绝和提出需要 | 越高越有利 | 精确值 `0～100` |
| `conflict` 冲突 | 10 | 未修复的摩擦、敌意和关系压力 | **越低越有利** | 精确值 `0～100` |

- 每次选择先应用四维效果并将结果限制在 `0～100`，再按第 2 节顺序判定；
- 结局页显示本次选择结算后的四项准确数值，不展示公式或隐藏阈值；
- 所有结局的现有操作一致：`重新挑战`（清空本局状态并从 Q01 开始）、`复制当前链接`、`返回类型选择`；
- 中途结局不提供“继续本局”，高优先级规则命中后立即停止，不叠加第二个结局；
- 文案解释玩家与 TA 的具体互动结果，不把网络叙事写成现实 INTP 的心理诊断。

## 2. 规则到结局映射

条件均以**应用当前选项效果后的状态快照**计算；`≥`、`≤`、`<` 均为严格照录的实现边界。

| 优先级 | rule_id | 检查点 | 实现条件 | 边界 | ending_id | 竞合与停止规则 |
|---:|---|---|---|---|---|---|
| 10 | `R_EXPLICIT_PRIVACY_BREACH` | 任一选项后；当前仅 Q07 | `option.terminalEndingId === blocked_immediately` | 精确匹配 | `blocked_immediately` | 最高优先级；不再检查任何数值规则 |
| 20 | `R_GLOBAL_CONFLICT_80` | 每题后 | `conflict >= 80` | 含 80 | `conflict_break` | 先于舒适、信任、阶段门槛和最终分类 |
| 30 | `R_GLOBAL_COMFORT_05` | 每题后 | `comfort <= 5` | 含 5 | `strong_discomfort` | 若与低信任同时成立，舒适规则优先 |
| 40 | `R_GLOBAL_TRUST_05` | 每题后 | `trust <= 5` | 含 5 | `trust_broken` | 先于所有阶段门槛和最终分类 |
| 50 | `R_GATE_Q02` | 仅 Q02 后 | `NOT (trust >= 15 AND comfort >= 15 AND conflict <= 50)` | 门槛均包含边界 | `no_second_meeting` | 只在三项全局规则均未命中后检查 |
| 60 | `R_GATE_Q05` | 仅 Q05 后 | `NOT (trust >= 25 AND comfort >= 20 AND conflict <= 60)` | 门槛均包含边界 | `fade_out` | 只在更高优先级规则未命中后检查 |
| 70 | `R_GATE_Q08` | 仅 Q08 后 | `NOT (attraction >= 35 AND trust >= 25 AND comfort >= 20 AND conflict <= 65)` | 门槛均包含边界 | `stay_acquaintances` | 只在更高优先级规则未命中后检查 |
| 80 | `R_FINAL_FOUNDATION_LOST` | 仅 Q10 后 | `trust <= 20 OR comfort <= 20 OR conflict >= 70` | 含 20/70 | `strangers_after_all` | 最终分类第一项；高吸引不能覆盖 |
| 90 | `R_FINAL_CONFIRMED` | 仅 Q10 后 | `attraction >= 85 AND trust >= 55 AND comfort >= 50 AND conflict <= 40` | 均包含边界 | `confirmed_relationship` | 命中后进入关系评价，不再检查其他最终结局 |
| 91 | `R_EVAL_ROMANCE_STABLE` | `R_FINAL_CONFIRMED` 命中后 | `trust >= 70 AND comfort >= 65 AND conflict <= 25` | 均包含边界 | `romance_stable`（评价） | 二级分类第一项 |
| 92 | `R_EVAL_ROMANCE_HIDDEN_RISK` | `R_FINAL_CONFIRMED` 命中后 | 未命中 `R_EVAL_ROMANCE_STABLE` | else | `romance_hidden_risk`（评价） | 二级分类兜底 |
| 100 | `R_FINAL_DANGEROUS_ATTRACTION` | 仅 Q10 后 | `attraction >= 95` | 含 95 | `dangerous_lovers` | 仅在陌路与确认恋爱均未命中时检查 |
| 110 | `R_FINAL_FRIENDS` | 仅 Q10 后 | `trust >= 45 AND comfort >= 45 AND conflict <= 45 AND attraction < 65` | 前三项含边界；吸引不含 65 | `friends` | 仅在更高优先级最终分类未命中时检查 |
| 120 | `R_FINAL_AMBIGUOUS_FALLBACK` | 仅 Q10 后 | 未命中以上任何最终分类 | else | `unresolved_ambiguity` | 最终兜底，理论上覆盖所有剩余状态 |

### 2.1 同次命中的确定性示例

- Q07 泄露隐私后即使同时达到 `conflict >= 80`，仍只返回 `blocked_immediately`；
- 任一普通选项使冲突达到 80、舒适降到 5、信任降到 5 时，只返回 `conflict_break`；
- Q10 后若 `trust <= 20` 且 `attraction >= 95`，只返回 `strangers_after_all`；
- `confirmed_relationship` 的状态不可能继续分类为 `dangerous_lovers`，只会附加一个关系评价。

## 3. 结局记录

所有记录的 `state_summary_policy` 均为：显示四项准确数值，再给出对应关系含义；不依据人格类型推断玩家动机。

### `blocked_immediately`｜信任到这里为止

- **family**：`explicit_terminal`
- **core_copy**：TA 没有继续争论年份，也没有当桌证明谁更过分。TA 只确认那件私事确实是单独告诉你的，然后拿起东西离开。
- **specific_reason**：你为了反击一次公开难堪，把 TA 明确不愿公开的信息说给了其他人。这不是纠正方式的分歧，而是玩家主动利用信任进行报复。
- **state_summary_policy**：显示四维，但明确说明数值不能撤销已经发生的隐私泄露。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：明确、克制、不可浪漫化
- **content_notes**：不复述隐私内容；不把严重越界归因于 INTP 或“不会开玩笑”。
- **rule_ids**：`R_EXPLICIT_PRIVACY_BREACH`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `conflict_break`｜这次没有下半场

- **family**：`global`
- **core_copy**：你们还在交换句子，却已经没人接住对方真正说的内容。TA 停下来：“先到这里吧。现在继续，只会多添一件需要修复的事。”
- **specific_reason**：本局多次把边界、纠正或节奏分歧推向施压、反击和动机指控，未修复的摩擦最终压过了继续沟通的意愿。
- **state_summary_policy**：强调高冲突优先于残留吸引；其余三维照常显示。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：果断但不过度灾难化
- **content_notes**：不把争执等同于关系失败；结局来自累积失控而非一次正常分歧。
- **rule_ids**：`R_GLOBAL_CONFLICT_80`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `strong_discomfort`｜每句话都要先预演

- **family**：`global`
- **core_copy**：TA 回复前停顿得越来越久，不是因为在组织一个更准确的答案，而是在判断哪句话不会引来下一轮压力。最后，TA 不再继续这次互动。
- **specific_reason**：互动中反复出现替 TA 决定、追着索取回应、压下真实边界或让对方承担猜测成本的选择，相处已经很难自然放松。
- **state_summary_policy**：说明极低舒适意味着继续接触本身成为负担，不用其他高分淡化。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：低温、清楚、不过度指责
- **content_notes**：不把需要空间天然写成正确；舒适也包括玩家能安全提出自己的需要。
- **rule_ids**：`R_GLOBAL_COMFORT_05`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `trust_broken`｜不再把话交给你

- **family**：`global`
- **core_copy**：TA 仍能把事实解释清楚，却不再愿意解释自己。对话停在了最表面的一层，因为更重要的内容已经不适合交给这段关系。
- **specific_reason**：本局多次出现越过共同同意、把承诺留空、用试探代替说明或把对方的坦诚当成可利用资源的选择。
- **state_summary_policy**：强调最低可信度是后续关系的必要条件；吸引不能抵销失信。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：严肃、非羞辱
- **content_notes**：只描述行为后果，不诊断玩家“天生不可信”。
- **rule_ids**：`R_GLOBAL_TRUST_05`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `no_second_meeting`｜链接没有下文

- **family**：`stage_gate`
- **core_copy**：那篇文章还留在聊天记录里，第三段也仍然可疑。只是你们没有再约时间验证彼此对它的看法。
- **specific_reason**：初识阶段没有建立足够的可靠感与舒适感，或者摩擦已高到让第二次见面不再值得安排。
- **state_summary_policy**：说明初识门槛不要求恋爱高吸引，更看重是否能放心继续了解。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：轻微遗憾、比例适当
- **content_notes**：不把没有二次约会写成羞辱或人格淘汰。
- **rule_ids**：`R_GATE_Q02`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `fade_out`｜对话停在草稿里

- **family**：`stage_gate`
- **core_copy**：你们没有正式告别。只是回复越来越像待处理事项，新的话题也不再自动长出来，最后一次“之后再聊”没有之后。
- **specific_reason**：接触阶段的兴趣、纠正方式、联系节奏和共同决定没有累积成足够的信任与舒适，继续投入逐渐失去依据。
- **state_summary_policy**：允许仍有吸引或火花，但指出中段关系基础不足。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：安静、非控诉
- **content_notes**：不将低频联系本身判为错误；问题是双方没有形成可理解、可兑现的节奏。
- **rule_ids**：`R_GATE_Q05`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `stay_acquaintances`｜只留在联系人里

- **family**：`stage_gate`
- **core_copy**：你们仍留在彼此的联系人里，也许还会偶尔交换有意思的东西，但不再把它理解成约会邀请。你们认识得比陌生人多，却没有再把彼此排进更靠前的位置。
- **specific_reason**：经历过支持错位、公开体面和冲突暂停后，吸引、信任、舒适或可控冲突至少有一项仍不足以进入暧昧。
- **state_summary_policy**：说明阶段要求四维共同过线，而不是单项成绩足够高。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：温和、边界清楚
- **content_notes**：熟人结局不是惩罚；不承诺不存在的亲密延续。
- **rule_ids**：`R_GATE_Q08`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `strangers_after_all`｜日历上没有下一次

- **family**：`final`
- **core_copy**：你们确实谈到了关系和时间，却没有把下一次见面写进任何人的日历。结束十次互动之后，彼此反而更确定不该继续靠近。
- **specific_reason**：关系走到最后时，信任或舒适已经过低，或者未修复冲突仍然过高；完成全部问题没有自动修好这些基础。
- **state_summary_policy**：指出严重恶化的基础状态优先于吸引与题目完成度。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：明确收束、不过度残酷
- **content_notes**：不暗示坚持到 Q10 就应获得关系；尊重双方停止投入。
- **rule_ids**：`R_FINAL_FOUNDATION_LOST`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `confirmed_relationship`｜把彼此写进日历

- **family**：`final`
- **core_copy**：TA 在共同时间旁边停了一会儿，又把独立日一起保留下来：“那就这样。不是试运行，也不用等系统自动给我们命名——我们在一起。”
- **specific_reason**：你们不只保留了靠近的动力，也在表达需求、处理分歧、兑现暂停和安排时间时累积了足够的信任与舒适。
- **state_summary_policy**：说明高吸引推动确认，信任、舒适和低冲突决定关系是否站得住；追加一个关系评价。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：温暖、清醒、不把确认关系写成通关奖杯
- **content_notes**：保留独立时间与共同时间的对等性；不得写成“终于攻略成功”。
- **rule_ids**：`R_FINAL_CONFIRMED`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

#### `romance_stable`｜有边界的靠近

- **family**：`final_secondary`
- **copy**：你们已经能在不假装需求相同的情况下共同安排生活。能说“不”、能暂停、也能按约回来，让亲密不必靠猜测维持。
- **badge**：`关系评价：有边界的靠近`
- **rule_ids**：`R_EVAL_ROMANCE_STABLE`
- **reachability**：`verified`

#### `romance_hidden_risk`｜协议还没覆盖的地方

- **family**：`final_secondary`
- **copy**：你们愿意确认关系，但有些语气、节奏或旧摩擦仍未真正解决。定义关系给了下一步，不会替你们完成下一次修复。
- **badge**：`关系评价：协议还没覆盖的地方`
- **rule_ids**：`R_EVAL_ROMANCE_HIDDEN_RISK`
- **reachability**：`verified`

### `dangerous_lovers`｜靠近了，还没有站稳

- **family**：`final`
- **core_copy**：你们决定继续靠近，心动快得足以盖过几个还没回答的问题。至于下一次摩擦来时谁会留下来修复，现在没有可靠答案。
- **specific_reason**：吸引极强，但信任、舒适或冲突状态没有同时达到确认关系的稳定条件；关系由火花推动，而不是由充分基础承托。
- **state_summary_policy**：明确这不是高于“确认恋爱”的隐藏真结局，而是一段风险显著的关系。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：有吸引力但保持警觉
- **content_notes**：不美化控制、羞辱、追逐施压或越界；不得把不稳定称作更纯粹的爱。
- **rule_ids**：`R_FINAL_DANGEROUS_ATTRACTION`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `friends`｜继续交换链接

- **family**：`final`
- **core_copy**：TA 仍会把刚看到的怪文章发给你，也愿意听你指出第三段的问题。你们不再把每次分享解释成暧昧，却都愿意让这条对话继续。
- **specific_reason**：你们建立了可靠、放松且能处理分歧的相处方式，只是恋爱吸引没有累积到改变关系性质的程度。
- **state_summary_policy**：说明低恋爱吸引不等于低价值；信任与舒适支撑友谊继续。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：肯定、无降级感
- **content_notes**：不把朋友结局写成失败或候补席。
- **rule_ids**：`R_FINAL_FRIENDS`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `unresolved_ambiguity`｜定义仍然空着

- **family**：`final`
- **core_copy**：你们谈过排他、称呼和见面频率，最后仍没有一个完整答案。即使再有下一条消息，它究竟是约会邀请还是又一篇文章，也暂时没人负责说明。
- **specific_reason**：当前四维没有差到终止联系，也没有组合成确认恋爱、危险恋人或稳定朋友的条件；靠近与保留仍同时存在。
- **state_summary_policy**：解释为未完成的关系状态，不承诺之后一定升级或结束。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：开放、略带悬而未决
- **content_notes**：不把不贴标签天然写成成熟；双方仍需承担澄清与选择责任。
- **rule_ids**：`R_FINAL_AMBIGUOUS_FALLBACK`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

## 4. 四维模糊反馈字典

强度合同：绝对变化 `5 = slight`、`10 = medium`、`15/20 = strong`。变化为 0 时不显示该维度；每个选项展示 1～2 条最能解释即时反应的提示。多个维度变化时按问题稿显式列出的 `feedback keys` 顺序展示，不根据分数绝对值自动覆盖。

| hint_key | dimension | 原始方向 | 玩家含义 | 强度 | INTP 稿示例文案 |
|---|---|---|---|---|---|
| `attraction_up_slight` | attraction | up | 更想继续靠近 | slight | TA 把原本准备收住的话题又展开了一点。 |
| `attraction_up_medium` | attraction | up | 靠近兴趣明显增加 | medium | TA 明显更期待下一次单独相处。 |
| `attraction_up_strong` | attraction | up | 心动与靠近动力强烈增加 | strong | TA 已经开始主动把“下次”说成具体安排。 |
| `attraction_down_slight` | attraction | down | 靠近期待略降 | slight | TA 对下一步少了一点期待。 |
| `attraction_down_medium` | attraction | down | 靠近意愿明显降低 | medium | TA 不再像刚才那样想把话题继续下去。 |
| `attraction_down_strong` | attraction | down | 恋爱动力严重受损 | strong | TA 已经很难把这种拉扯继续理解成心动。 |
| `trust_up_slight` | trust | up | 表达略更可信 | slight | TA 愿意把你的话多当真一点。 |
| `trust_up_medium` | trust | up | 会把表达纳入后续安排 | medium | TA 开始认真按你说的边界安排下一步。 |
| `trust_up_strong` | trust | up | 边界和承诺高度可信 | strong | TA 相信重要的事可以交给你共同决定。 |
| `trust_down_slight` | trust | down | 对表达留下疑问 | slight | TA 对你刚才的说法留了一个问号。 |
| `trust_down_medium` | trust | down | 开始怀疑是否会兑现 | medium | TA 开始怀疑这句话之后会不会算数。 |
| `trust_down_strong` | trust | down | 不再愿意交付重要信息 | strong | TA 不再愿意把重要的事放进这段关系。 |
| `comfort_up_slight` | comfort | up | 相处略微放松 | slight | TA 在你面前少斟酌了一句话。 |
| `comfort_up_medium` | comfort | up | 表达与拒绝明显更自然 | medium | TA 明显更敢直接说出自己的需要。 |
| `comfort_up_strong` | comfort | up | 相处高度安全自然 | strong | 这一刻，你们都不必预演下一句话。 |
| `comfort_down_slight` | comfort | down | 气氛略显拘谨 | slight | 对话里多了一点需要小心绕开的地方。 |
| `comfort_down_medium` | comfort | down | 相处明显紧绷 | medium | TA 开始把原本会说出口的话收回去。 |
| `comfort_down_strong` | comfort | down | 已难以自然相处 | strong | TA 已经很难在这段互动里放松下来。 |
| `conflict_up_slight` | conflict | up | 摩擦略增，**不利** | slight | 这件事留下了一点尚未处理的摩擦。 |
| `conflict_up_medium` | conflict | up | 分歧明显升级，**不利** | medium | 你们已经不只是在讨论不同答案。 |
| `conflict_up_strong` | conflict | up | 冲突接近失控，**不利** | strong | 这场互动正在迅速失去修复空间。 |
| `conflict_down_slight` | conflict | down | 摩擦略缓，**有利** | slight | 刚才的分歧松开了一点。 |
| `conflict_down_medium` | conflict | down | 找到有效缓和方式，**有利** | medium | 你们找到了让分歧停下来、以后再谈的方法。 |
| `conflict_down_strong` | conflict | down | 大量压力得到修复，**有利** | strong | 积着的敌意终于退回到可以好好说话的位置。 |

## 5. 问题、终止动作与反馈追踪

非终止选项均进入第 2 节的通用判定链；表中 `checkpoint_rule` 只列该题结束后额外可能执行的阶段/最终规则。反馈 key 与问题稿保持一致。

| question_id | option_id | terminal_reason_code | direct_rule_id | direct_ending_id | checkpoint_rule | feedback keys |
|---|---|---|---|---|---|---|
| Q01 | `q01_edit_together` | — | — | — | — | `attraction_up_strong`, `comfort_up_slight` |
| Q01 | `q01_keep_it_light` | — | — | — | — | `comfort_up_medium`, `conflict_down_slight` |
| Q01 | `q01_answer_and_return` | — | — | — | — | `attraction_up_medium`, `trust_up_slight` |
| Q01 | `q01_call_it_interview` | — | — | — | — | `comfort_down_medium`, `conflict_up_medium` |
| Q02 | `q02_ask_intent` | — | — | — | `R_GATE_Q02` | `trust_up_medium`, `attraction_up_slight` |
| Q02 | `q02_call_it_confession` | — | — | — | `R_GATE_Q02` | `attraction_up_strong`, `conflict_up_slight` |
| Q02 | `q02_dive_into_link` | — | — | — | `R_GATE_Q02` | `attraction_up_medium`, `comfort_up_slight` |
| Q02 | `q02_trade_interests` | — | — | — | `R_GATE_Q02` | `comfort_up_medium`, `conflict_down_slight` |
| Q03 | `q03_set_context` | — | — | — | — | `trust_up_medium`, `comfort_up_medium` |
| Q03 | `q03_truth_always` | — | — | — | — | `attraction_up_medium`, `comfort_down_slight` |
| Q03 | `q03_name_private` | — | — | — | — | `trust_up_strong`, `comfort_up_slight` |
| Q03 | `q03_accuse_winning` | — | — | — | — | `trust_down_medium`, `conflict_up_medium` |
| Q04 | `q04_wave_off` | — | — | — | — | `attraction_up_medium`, `trust_down_slight` |
| Q04 | `q04_state_incompatibility` | — | — | — | — | `trust_up_strong`, `comfort_up_slight` |
| Q04 | `q04_disappear_back` | — | — | — | — | `trust_down_medium`, `conflict_up_strong` |
| Q04 | `q04_minimum_signal` | — | — | — | — | `trust_up_medium`, `comfort_up_medium` |
| Q05 | `q05_narrow_and_deadline` | — | — | — | `R_GATE_Q05` | `trust_up_medium`, `comfort_up_medium` |
| Q05 | `q05_book_for_them` | — | — | — | `R_GATE_Q05` | `trust_down_slight`, `conflict_up_slight` |
| Q05 | `q05_cancel_if_undecided` | — | — | — | `R_GATE_Q05` | `trust_up_strong`, `conflict_up_slight` |
| Q05 | `q05_hold_evening` | — | — | — | `R_GATE_Q05` | `trust_down_medium`, `comfort_down_slight` |
| Q06 | `q06_take_solution` | — | — | — | — | `attraction_up_medium`, `trust_up_medium` |
| Q06 | `q06_attack_empathy` | — | — | — | — | `comfort_down_strong`, `conflict_up_strong` |
| Q06 | `q06_ask_listen` | — | — | — | — | `trust_up_medium`, `comfort_up_medium` |
| Q06 | `q06_sequence_support` | — | — | — | — | `comfort_up_medium`, `conflict_down_medium` |
| Q07 | `q07_expose_in_return` | `blocked_immediately` | `R_EXPLICIT_PRIVACY_BREACH` | `blocked_immediately` | — | `trust_down_strong`, `comfort_down_strong` |
| Q07 | `q07_stop_in_room` | — | — | — | — | `trust_up_strong`, `conflict_up_slight` |
| Q07 | `q07_laugh_off` | — | — | — | — | `comfort_down_medium`, `trust_down_slight` |
| Q07 | `q07_private_repair` | — | — | — | — | `trust_up_medium`, `comfort_up_medium` |
| Q08 | `q08_pause_with_anchor` | — | — | — | `R_GATE_Q08` | `trust_up_medium`, `conflict_down_medium` |
| Q08 | `q08_accept_pause` | — | — | — | `R_GATE_Q08` | `attraction_up_slight`, `conflict_down_slight` |
| Q08 | `q08_adjust_time` | — | — | — | `R_GATE_Q08` | `trust_up_strong`, `comfort_up_slight` |
| Q08 | `q08_force_now` | — | — | — | `R_GATE_Q08` | `comfort_down_strong`, `conflict_up_strong` |
| Q09 | `q09_need_answer` | — | — | — | — | `trust_up_strong`, `comfort_up_slight` |
| Q09 | `q09_let_ta_define` | — | — | — | — | `trust_down_medium`, `conflict_down_medium` |
| Q09 | `q09_define_terms` | — | — | — | — | `trust_up_strong`, `attraction_up_medium` |
| Q09 | `q09_announce_unilaterally` | — | — | — | — | `trust_down_medium`, `conflict_up_medium` |
| Q10 | `q10_accept_independence` | — | — | — | `R_FINAL_*` | `attraction_up_strong`, `trust_down_slight` |
| Q10 | `q10_state_minimum` | — | — | — | `R_FINAL_*` | `trust_up_strong`, `comfort_up_slight` |
| Q10 | `q10_demand_all_weekends` | — | — | — | `R_FINAL_*` | `trust_down_strong`, `conflict_up_strong` |
| Q10 | `q10_build_rhythm` | — | — | — | `R_FINAL_*` | `comfort_up_strong`, `attraction_up_medium` |

补充追踪规则：每个非终止选项在到达上述 checkpoint 前，都可能先命中 `R_GLOBAL_CONFLICT_80`、`R_GLOBAL_COMFORT_05` 或 `R_GLOBAL_TRUST_05`；Q10 的 `R_FINAL_*` 依次展开为优先级 80～120 的所有最终规则。

## 6. 完整性审计

### 6.1 运行时返回值覆盖

| 运行时结果 | 内容记录 | 规则引用 | 当前可达性 |
|---|---|---|---|
| `blocked_immediately` | 完整 | 1 | verified |
| `conflict_break` | 完整 | 1 | verified |
| `strong_discomfort` | 完整 | 1 | verified |
| `trust_broken` | 完整 | 1 | verified |
| `no_second_meeting` | 完整 | 1 | verified |
| `fade_out` | 完整 | 1 | verified |
| `stay_acquaintances` | 完整 | 1 | verified |
| `strangers_after_all` | 完整 | 1 | verified |
| `confirmed_relationship:romance_stable` | 完整 | 2（主结局 + 评价） | verified |
| `confirmed_relationship:romance_hidden_risk` | 完整 | 2（主结局 + 评价） | verified |
| `dangerous_lovers` | 完整 | 1 | verified |
| `friends` | 完整 | 1 | verified |
| `unresolved_ambiguity` | 完整 | 1 | verified |

### 6.2 检查结论

- 12 个稳定 `ending_id` 和 2 个 `relationship evaluation_id` 均有完整玩家文案、状态说明与操作；
- 24 个模糊反馈 key 完整覆盖四维、双向和三级强度；`conflict down` 明确表示关系改善；
- 唯一剧情指定原因与 Q07 玩家主动泄露隐私完全一致，普通制止、退出、拒绝或提出条件均不会直接结束；
- 所有规则均只有一个直接结果；`confirmed_relationship` 的两个关系评价使用 deterministic `if/else`，没有重叠返回；
- `R_FINAL_AMBIGUOUS_FALLBACK` 覆盖所有剩余最终状态，不存在无结局的 Q10 状态；
- 高优先级规则可能遮蔽低优先级条件，这是运行时设计而非重复条件；实际被遮蔽路径数尚未知；
- `4^10` 完整枚举已确认全部结果可达；路径、状态、加权数量、固定套路和局部支配审查见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)。

## 7. 平衡阶段交接

下一步使用 `balance-choice-game-paths` 时，应以本文件第 2 节的规则顺序作为判定预言机，并输出：

1. 13 种运行时结果 key（包含两种恋爱评价）的路径数量和比例；
2. 每个结果的至少一条最短/代表性可达路径，或明确标记 `unreachable`；
3. 各全局规则被更高优先级规则遮蔽的路径数量；
4. 每个阶段门槛的通过率、失败原因维度及边界值样本；
5. 同题选项支配、固定槽位、固定策略和 Q07 terminal 压力测试；
6. 任何数值调整后，重新核对即时反应、反馈 key、强度和本目录触发条件。
