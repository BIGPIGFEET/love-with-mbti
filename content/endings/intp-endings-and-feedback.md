# INTP 结局与状态反馈目录 v0.1

> 状态：规则身份、判定优先级、结局文案、关系评价、模糊反馈和问题追踪已完成；`balance-choice-game-paths` 已于 2026-08-15 重新验证全部运行时结果可达。
> 问题来源：[INTP 正式十题内容草案](../questions/intp-ten-question-draft.md)。  
> 运行时合同：[核心规则](../../docs/02-core-rules.md) 与 `src/game/rules.ts`。本目录不修改现有 ENTP 运行时数据。
> 机制模式：`reuse`；下列 `R_*` 均为审计用 companion ID，不是 `src/game/rules.ts` 返回的运行时 rule ID。本次仅更新玩家文案，不修改共享机制。

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
| 20 | `R_GLOBAL_CONFLICT_80` | 每题后 | `conflict >= 80` | 含 80 | `conflict_break` | 先于舒适、信任、阶段门槛和最终分类 |
| 30 | `R_GLOBAL_COMFORT_05` | 每题后 | `comfort <= 5` | 含 5 | `strong_discomfort` | 若与低信任同时成立，舒适规则优先 |
| 40 | `R_GLOBAL_TRUST_05` | 每题后 | `trust <= 5` | 含 5 | `trust_broken` | 先于所有阶段门槛和最终分类 |
| 50 | `R_GATE_Q02` | 仅 Q02 后 | `NOT (attraction >= 25 AND trust >= 20 AND comfort >= 20 AND conflict <= 20)` | 门槛均包含边界 | `no_second_meeting` | 只在三项全局规则均未命中后检查 |
| 60 | `R_GATE_Q05` | 仅 Q05 后 | `NOT (attraction >= 35 AND trust >= 30 AND comfort >= 25 AND conflict <= 45)` | 门槛均包含边界 | `fade_out` | 只在更高优先级规则未命中后检查 |
| 70 | `R_GATE_Q08` | 仅 Q08 后 | `NOT (attraction >= 45 AND trust >= 40 AND comfort >= 35 AND conflict <= 45)` | 门槛均包含边界 | `stay_acquaintances` | 只在更高优先级规则未命中后检查 |
| 80 | `R_FINAL_FOUNDATION_LOST` | 仅 Q10 后 | `trust < 35 OR comfort < 35 OR conflict > 50` | 不含 35/50 | `strangers_after_all` | 最终分类第一项；高吸引不能覆盖 |
| 90 | `R_FINAL_CONFIRMED` | 仅 Q10 后 | `attraction >= 85 AND trust >= 65 AND comfort >= 60 AND conflict <= 25` | 均包含边界 | `confirmed_relationship` | 命中后进入关系评价，不再检查其他最终结局 |
| 91 | `R_EVAL_ROMANCE_STABLE` | `R_FINAL_CONFIRMED` 命中后 | `trust >= 75 AND comfort >= 70 AND conflict <= 15` | 均包含边界 | `romance_stable`（评价） | 二级分类第一项 |
| 92 | `R_EVAL_ROMANCE_HIDDEN_RISK` | `R_FINAL_CONFIRMED` 命中后 | 未命中 `R_EVAL_ROMANCE_STABLE` | else | `romance_hidden_risk`（评价） | 二级分类兜底 |
| 100 | `R_FINAL_DANGEROUS_ATTRACTION` | 仅 Q10 后 | `attraction >= 90 AND (trust < 65 OR comfort < 60)` | 含 90；不含 65/60 | `dangerous_lovers` | 仅在陌路与确认恋爱均未命中时检查 |
| 110 | `R_FINAL_FRIENDS` | 仅 Q10 后 | `attraction < 65 AND trust >= 50 AND comfort >= 45 AND conflict <= 40` | 吸引不含 65；其余包含边界 | `friends` | 仅在更高优先级最终分类未命中时检查 |
| 120 | `R_FINAL_AMBIGUOUS_FALLBACK` | 仅 Q10 后 | 未命中以上任何最终分类 | else | `unresolved_ambiguity` | 最终兜底，理论上覆盖所有剩余状态 |

### 2.1 同次命中的确定性示例

- 任一选项使冲突达到 80、舒适降到 5、信任降到 5 时，只返回 `conflict_break`；
- Q10 后若 `trust < 35` 且 `attraction >= 90`，只返回 `strangers_after_all`；
- `confirmed_relationship` 的状态不可能继续分类为 `dangerous_lovers`，只会附加一个关系评价。

## 3. 结局记录

所有记录的 `state_summary_policy` 均为：显示四项准确数值，再给出对应关系含义；不依据人格类型推断玩家动机。

### `conflict_break`｜冲突终止关系

- **family**：`global`
- **core_copy**：你们还在交换句子，却已经没人接住对方真正说的内容。TA 停下来：“先到这里吧。现在继续，只会多添一件需要修复的事。”这段关系也到此为止。
- **specific_reason**：本局多次把边界、纠正或节奏分歧推向施压、反击和动机指控，未修复的摩擦最终压过了继续关系的意愿。
- **state_summary_policy**：冲突已高到终止关系；残留吸引与聊得来都不能让对话安全继续。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：果断但不过度灾难化
- **content_notes**：不把争执等同于关系失败；结局来自累积失控而非一次正常分歧。
- **rule_ids**：`R_GLOBAL_CONFLICT_80`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `strong_discomfort`｜相处只剩紧绷

- **family**：`global`
- **core_copy**：TA 回复前停顿得越来越久，不是因为在组织一个更准确的答案，而是在判断哪句话不会引来下一轮压力。最后，TA 不再继续这次互动。
- **specific_reason**：互动中反复出现替 TA 决定、追着索取回应、压下真实边界或让对方承担猜测成本的选择，相处已经很难自然放松。
- **state_summary_policy**：舒适已低到无法继续接触；其他维度的高分不能抵销持续紧绷。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：低温、清楚、不过度指责
- **content_notes**：不把需要空间天然写成正确；舒适也包括玩家能安全提出自己的需要。
- **rule_ids**：`R_GLOBAL_COMFORT_05`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `trust_broken`｜信任已经断线

- **family**：`global`
- **core_copy**：TA 仍能把事实解释清楚，却不再愿意解释自己。对话停在了最表面的一层，因为更重要的内容已经不适合交给这段关系。
- **specific_reason**：本局多次出现越过共同同意、把承诺留空、用试探代替说明或把对方的坦诚当成可利用资源的选择。
- **state_summary_policy**：信任已跌破继续关系的底线；吸引、深聊或实际帮助都不能抵销失信。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：严肃、非羞辱
- **content_notes**：只描述行为后果，不诊断玩家“天生不可信”。
- **rule_ids**：`R_GLOBAL_TRUST_05`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `no_second_meeting`｜没有第二次见面

- **family**：`stage_gate`
- **core_copy**：那篇文章还留在聊天记录里，第三段也仍然可疑。只是你们没有再约时间验证彼此对它的看法。
- **specific_reason**：初识阶段没有建立足够的可靠感与舒适感，或者摩擦已高到让第二次见面不再值得安排。
- **state_summary_policy**：第一次聊得投机不等于会再见；初识更看重双方是否能放心继续了解。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：轻微遗憾、比例适当
- **content_notes**：不把没有二次约会写成羞辱或人格淘汰。
- **rule_ids**：`R_GATE_Q02`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `fade_out`｜联系停在草稿

- **family**：`stage_gate`
- **core_copy**：你们没有正式告别。只是回复越来越像待处理事项，新的话题也不再自动长出来，最后一次“之后再聊”没有之后。
- **specific_reason**：接触阶段的兴趣、纠正方式、联系节奏和共同决定没有累积成足够的信任与舒适，继续投入逐渐失去依据。
- **state_summary_policy**：吸引或思想火花可能仍在，但中段关系基础不足以支撑联系继续靠近。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：安静、非控诉
- **content_notes**：不将低频联系本身判为错误；问题是双方没有形成可理解、可兑现的节奏。
- **rule_ids**：`R_GATE_Q05`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `stay_acquaintances`｜关系止于熟人

- **family**：`stage_gate`
- **core_copy**：你们仍留在彼此的联系人里，也许还会偶尔交换有意思的东西，但不再把它理解成约会邀请。你们认识得比陌生人多，却没有再把彼此排进更靠前的位置。
- **specific_reason**：经历过支持错位、公开体面和冲突暂停后，吸引、信任、舒适或可控冲突至少有一项仍不足以进入暧昧。
- **state_summary_policy**：这段关系停在熟人位置；四维需要共同过线，单项很高并不足够。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：温和、边界清楚
- **content_notes**：熟人结局不是惩罚；不承诺不存在的亲密延续。
- **rule_ids**：`R_GATE_Q08`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `strangers_after_all`｜最终回到陌生

- **family**：`final`
- **core_copy**：你们确实谈到了关系和时间，却没有把下一次见面写进任何人的日历。结束十次互动之后，彼此反而更确定不该继续靠近。
- **specific_reason**：关系走到最后时，信任或舒适已经过低，或者未修复冲突仍然过高；完成全部问题没有自动修好这些基础。
- **state_summary_policy**：十次互动后关系仍回到陌生；严重恶化的基础状态优先于吸引和题目完成度。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：明确收束、不过度残酷
- **content_notes**：不暗示坚持到 Q10 就应获得关系；尊重双方停止投入。
- **rule_ids**：`R_FINAL_FOUNDATION_LOST`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `confirmed_relationship`｜确认成为恋人

- **family**：`final`
- **core_copy**：TA 在共同时间旁边停了一会儿，又把独立日一起保留下来：“那就这样。不是试运行，也不用等系统自动给我们命名——我们在一起。”
- **specific_reason**：你们不只保留了靠近的动力，也在表达需求、处理分歧、兑现暂停和安排时间时累积了足够的信任与舒适。
- **state_summary_policy**：关系已经确认；高吸引推动靠近，信任、舒适和低冲突决定它能否站稳。
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

### `dangerous_lovers`｜恋爱尚未站稳

- **family**：`final`
- **core_copy**：你们决定继续靠近，心动快得足以盖过几个还没回答的问题。至于下一次摩擦来时谁会留下来修复，现在没有可靠答案。
- **specific_reason**：吸引极强，但信任、舒适或冲突没有同时达到确认关系的稳定条件；关系由火花推动，而不是由充分基础承托。
- **state_summary_policy**：这是已经进入却尚未站稳的恋爱，不是比稳定关系更高级的隐藏结局。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：有吸引力但保持警觉
- **content_notes**：不美化控制、羞辱、追逐施压或越界；不得把不稳定称作更纯粹的爱。
- **rule_ids**：`R_FINAL_DANGEROUS_ATTRACTION`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `friends`｜确认成为朋友

- **family**：`final`
- **core_copy**：TA 仍会把刚看到的怪文章发给你，也愿意听你指出第三段的问题。你们不再把每次分享解释成暧昧，却都愿意让这条对话继续。
- **specific_reason**：你们建立了可靠、放松且能处理分歧的相处方式，只是恋爱吸引没有累积到改变关系性质的程度。
- **state_summary_policy**：关系已经明确为朋友；低恋爱吸引不等于低价值，信任与舒适让友谊继续。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：肯定、无降级感
- **content_notes**：不把朋友结局写成失败或候补席。
- **rule_ids**：`R_FINAL_FRIENDS`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### `unresolved_ambiguity`｜关系仍待定义

- **family**：`final`
- **core_copy**：你们谈过排他、称呼和见面频率，最后仍没有一个完整答案。即使再有下一条消息，它究竟是约会邀请还是又一篇文章，也暂时没人负责说明。
- **specific_reason**：当前四维没有差到终止联系，也没有组合成确认恋爱、危险恋人或稳定朋友的条件；靠近与保留仍同时存在。
- **state_summary_policy**：关系仍处于未定义状态；它不承诺之后一定升级，也不等于默认排他或承诺。
- **actions**：重新挑战 / 复制当前链接 / 返回类型选择
- **tone**：开放、略带悬而未决
- **content_notes**：不把不贴标签天然写成成熟；双方仍需承担澄清与选择责任。
- **rule_ids**：`R_FINAL_AMBIGUOUS_FALLBACK`
- **reachability**：`verified`
- **example_path**：见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)

### 3.1 INTP 文案依据

下表的 `character_basis` 只用于解释类型化语气与场景意象，不参与结局判定。共享结局语义仍以稳定 `ending_id` 和运行时规则为准。

| 结果 ID | character_basis | 文案使用范围 |
|---|---|---|
| `conflict_break` | F08、F10、F13；Q03、Q07、Q08 | 事实纠正、暂停修复与个人责任，不把不同意见写成关系失败 |
| `strong_discomfort` | F06、F10、F12；Q04、Q06、Q08 | 无法自然表达、暂停或拒绝时的持续紧绷 |
| `trust_broken` | F05、F10、F13；Q04、Q07、Q08、Q10 | 行动、坦诚与暂停只有兑现后才构成可信关系 |
| `no_second_meeting` | F01、F02、F03；Q01、Q02 | 抽象问题、链接分享与慢热初识，不把聊得深当作约会证明 |
| `fade_out` | F02、F07、F15；Q03～Q05 | 兴趣分享、低频联系和持续分析没有形成共同节奏 |
| `stay_acquaintances` | F08、F09、F10；Q06～Q08 | 支持错位、公开体面与按约返回后的综合基础 |
| `strangers_after_all` | F04、F06、F10、F13；Q09、Q10 及此前累积互动 | 关系定义与独立安排未能修复已受损的基础 |
| `confirmed_relationship` | F04、F06、F10、F13；Q08～Q10 | 明确关系、保留独立并把承诺写进可执行安排 |
| `romance_stable` | F06、F10、F13；Q08～Q10 | 能说不、能暂停、能按约回来 |
| `romance_hidden_risk` | F04、F10、F15；Q08～Q10 | 已确认关系，但定义、节奏或旧摩擦仍未覆盖完整 |
| `dangerous_lovers` | F04、F10、F15；Q09、Q10 | 心动先于清晰答复与修复能力，不美化不稳定 |
| `friends` | F01、F02、F08；Q01～Q03、Q07 | 思想连接、链接分享与诚实纠正保留为友谊 |
| `unresolved_ambiguity` | F04、F15；Q09、Q10 | 词义、排他与时间安排仍未形成完整定义 |

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

## 5. 问题、检查点与反馈追踪

所有选项均进入第 2 节的通用判定链；表中 `checkpoint_rule` 只列该题结束后额外可能执行的阶段/最终规则。反馈 key 与问题稿保持一致。

| question_id | option_id | checkpoint_rule | feedback keys |
|---|---|---|---|
| Q01 | `q01_edit_together` | — | `attraction_up_strong`, `comfort_up_slight` |
| Q01 | `q01_keep_it_light` | — | `comfort_up_medium`, `conflict_down_slight` |
| Q01 | `q01_answer_and_return` | — | `attraction_up_medium`, `trust_up_slight` |
| Q01 | `q01_call_it_interview` | — | `comfort_down_medium`, `conflict_up_medium` |
| Q02 | `q02_ask_intent` | `R_GATE_Q02` | `trust_up_medium`, `attraction_up_slight` |
| Q02 | `q02_call_it_confession` | `R_GATE_Q02` | `attraction_up_strong`, `conflict_up_medium` |
| Q02 | `q02_dive_into_link` | `R_GATE_Q02` | `attraction_up_medium`, `comfort_up_slight` |
| Q02 | `q02_trade_interests` | `R_GATE_Q02` | `comfort_up_medium`, `conflict_down_slight` |
| Q03 | `q03_set_context` | — | `trust_up_medium`, `comfort_up_medium` |
| Q03 | `q03_truth_always` | — | `attraction_up_medium`, `comfort_down_slight` |
| Q03 | `q03_name_private` | — | `trust_up_strong`, `comfort_up_slight` |
| Q03 | `q03_accuse_winning` | — | `trust_down_medium`, `conflict_up_strong` |
| Q04 | `q04_wave_off` | — | `attraction_up_medium`, `trust_down_slight` |
| Q04 | `q04_state_incompatibility` | — | `trust_up_strong`, `comfort_up_slight` |
| Q04 | `q04_disappear_back` | — | `trust_down_medium`, `conflict_up_strong` |
| Q04 | `q04_minimum_signal` | — | `trust_up_medium`, `comfort_up_medium` |
| Q05 | `q05_narrow_and_deadline` | `R_GATE_Q05` | `trust_up_medium`, `comfort_up_medium` |
| Q05 | `q05_book_for_them` | `R_GATE_Q05` | `trust_down_slight`, `conflict_up_strong` |
| Q05 | `q05_cancel_if_undecided` | `R_GATE_Q05` | `trust_up_strong`, `conflict_up_slight` |
| Q05 | `q05_hold_evening` | `R_GATE_Q05` | `trust_down_medium`, `comfort_down_slight` |
| Q06 | `q06_take_solution` | — | `attraction_up_medium`, `trust_up_medium` |
| Q06 | `q06_attack_empathy` | — | `comfort_down_medium`, `conflict_up_strong` |
| Q06 | `q06_ask_listen` | — | `trust_up_medium`, `comfort_up_medium` |
| Q06 | `q06_sequence_support` | — | `comfort_up_medium`, `conflict_down_medium` |
| Q07 | `q07_expose_in_return` | — | `trust_down_strong`, `conflict_up_strong` |
| Q07 | `q07_stop_in_room` | — | `trust_up_strong`, `conflict_up_slight` |
| Q07 | `q07_laugh_off` | — | `comfort_down_medium`, `trust_down_slight` |
| Q07 | `q07_private_repair` | — | `trust_up_medium`, `comfort_up_medium` |
| Q08 | `q08_pause_with_anchor` | `R_GATE_Q08` | `trust_up_medium`, `conflict_down_medium` |
| Q08 | `q08_accept_pause` | `R_GATE_Q08` | `conflict_down_slight` |
| Q08 | `q08_adjust_time` | `R_GATE_Q08` | `trust_up_strong`, `conflict_up_slight` |
| Q08 | `q08_force_now` | `R_GATE_Q08` | `comfort_down_medium`, `conflict_up_strong` |
| Q09 | `q09_need_answer` | — | `trust_up_strong`, `comfort_up_slight` |
| Q09 | `q09_let_ta_define` | — | `trust_down_medium`, `comfort_down_medium` |
| Q09 | `q09_define_terms` | — | `trust_up_medium`, `attraction_up_strong` |
| Q09 | `q09_announce_unilaterally` | — | `comfort_down_strong`, `conflict_up_strong` |
| Q10 | `q10_accept_independence` | `R_FINAL_*` | `attraction_up_strong`, `trust_down_slight` |
| Q10 | `q10_state_minimum` | `R_FINAL_*` | `trust_up_strong`, `comfort_up_slight` |
| Q10 | `q10_demand_all_weekends` | `R_FINAL_*` | `comfort_down_strong`, `conflict_up_strong` |
| Q10 | `q10_build_rhythm` | `R_FINAL_*` | `trust_up_slight`, `attraction_up_strong` |

补充追踪规则：每个选项在到达上述 checkpoint 前，都可能先命中 `R_GLOBAL_CONFLICT_80`、`R_GLOBAL_COMFORT_05` 或 `R_GLOBAL_TRUST_05`；Q10 的 `R_FINAL_*` 依次展开为优先级 80～120 的所有最终规则。

## 6. 完整性审计

### 6.1 运行时返回值覆盖

| 运行时结果 | 内容记录 | 规则引用 | 当前可达性 |
|---|---|---|---|
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

- 11 个稳定 `ending_id` 和 2 个 `relationship evaluation_id` 均有完整玩家文案、状态说明与操作；
- 24 个模糊反馈 key 完整覆盖四维、双向和三级强度；`conflict down` 明确表示关系改善；
- Q07 玩家主动泄露隐私会造成显著状态伤害，但与其他选项一样进入统一规则；
- 所有规则均只有一个直接结果；`confirmed_relationship` 的两个关系评价使用 deterministic `if/else`，没有重叠返回；
- `R_FINAL_AMBIGUOUS_FALLBACK` 覆盖所有剩余最终状态，不存在无结局的 Q10 状态；
- 高优先级规则可能遮蔽低优先级条件，这是运行时设计而非重复条件；实际被遮蔽路径数尚未知；
- `4^10` 完整枚举已确认全部结果可达；路径、状态、加权数量、固定套路和局部支配审查见 [INTP 全路径平衡报告](../questions/intp-balance-report.md)。

## 7. 平衡阶段交接

下一步使用 `balance-choice-game-paths` 时，应以本文件第 2 节的规则顺序作为判定预言机，并输出：

1. 12 种运行时结果 key（包含两种恋爱评价）的路径数量和比例；
2. 每个结果的至少一条最短/代表性可达路径，或明确标记 `unreachable`；
3. 各全局规则被更高优先级规则遮蔽的路径数量；
4. 每个阶段门槛的通过率、失败原因维度及边界值样本；
5. 同题选项支配、固定槽位和固定策略压力测试；
6. 任何数值调整后，重新核对即时反应、反馈 key、强度和本目录触发条件。
