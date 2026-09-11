# ESTP 结局与反馈审计（Stage 05）

## 状态与权威来源

- 生产文案：`src/content/estp-endings.ts`
- 题目真源：`src/content/estp-questions.ts`
- 固定词汇与结构：`src/content/schema.ts`
- 固定判定与顺序：`src/game/rules.ts`
- 本文件只记录内容覆盖、依据与交接，不复制或改写阈值、优先级和分类器。
- Stage 05 确认结构完整；Stage 06 已完成结局可达性与路径分布验证，规则遮蔽因运行时无诊断钩子保持 `unknown`。

## ESTP 内容塑造依据

结局文案使用行为模型中的可观察张力，而不是从四字母直接推导人格或命运：

- `ESTP-B01/B05/B11`：临时体验、计划变更、风险分级与退出条件，对应 Q01、Q03、Q07。
- `ESTP-B03/B08`：玩笑的实际影响、具体修复、暂停与返回，对应 Q02、Q08。
- `ESTP-B06/B07`：行动支持、情绪需求与分项同意，对应 Q04、Q06。
- `ESTP-B12`：影响同意的信息变化需要重新说明与授权，对应 Q05。
- `ESTP-B13`：拒绝“坏男孩/玩家”投射，以行为和协议判断关系，对应 Q09。
- `ESTP-B09`：约会、排他、公开和身体边界逐项定义，对应 Q10。

“快速”“刺激”“直接”只作为情境中的偏好或行为，不自动增加吸引，也不构成越界、失约或不忠的免责理由。

## 完整结局与评价覆盖矩阵

| ending_id | secondary_result_id | family | 玩家标题 | 关系状态 | 角色与题目依据 | 生产位置 | 完整 |
|---|---|---|---|---|---|---|---|
| `conflict_break` | — | global | 冲突逼停关系 | 高冲突导致关系终止 | Q01/Q02/Q05/Q08/Q10 的施压、公开攻击与监控；B03/B08/B13 | `estpEndings` | 是 |
| `strong_discomfort` | — | global | 不适终止相处 | 舒适与可拒绝空间耗尽 | Q02/Q06/Q07/Q10 的羞辱、突然触碰、风险施压与监控；B03/B07/B11 | `estpEndings` | 是 |
| `trust_broken` | — | global | 失信结束关系 | 信任破裂并告别 | Q03/Q05/Q08/Q10 的擅自决定、信息差、失约风险与监控；B05/B08/B12 | `estpEndings` | 是 |
| `no_second_meeting` | — | stage_gate | 初见没有下次 | 关系停在第一次见面 | Q01 的临时改道、Q02 的玩笑边界 | `estpEndings` | 是 |
| `fade_out` | — | stage_gate | 联系逐渐淡去 | 接触期后自然淡出 | Q03—Q05 的可靠性、支持错位与信息更新 | `estpEndings` | 是 |
| `stay_acquaintances` | — | stage_gate | 关系停在熟人 | 保留礼貌熟人关系 | Q06—Q08 的亲密同意、风险与暂停协议 | `estpEndings` | 是 |
| `strangers_after_all` | — | final | 最终不再往来 | 十题后停止联系 | Q09/Q10 已讨论标签和关系定义，但累积基础不足 | `estpEndings` | 是 |
| `confirmed_relationship` | — | final | 双方确认恋爱 | 双方明确建立恋爱关系 | Q10 分项定义与前序边界、修复、共同体验 | `estpEndings` | 是 |
| `confirmed_relationship` | `romance_stable` | final evaluation | 恋爱稳步落地 | 恋爱已确认且基础稳定 | Q01/Q03/Q07 的弹性与可靠、Q05/Q08/Q10 的协议兑现 | `estpRelationshipEvaluations` | 是 |
| `confirmed_relationship` | `romance_hidden_risk` | final evaluation | 恋爱仍有隐患 | 恋爱已确认但仍有隐藏风险 | Q07/Q10 的高热度、压下疑问与尚待兑现的边界 | `estpRelationshipEvaluations` | 是 |
| `dangerous_lovers` | — | final | 热恋仍未站稳 | 高吸引伴随低信任或低舒适 | Q03/Q07/Q09/Q10 的冲动、刺激人设与过快承诺 | `estpEndings` | 是 |
| `friends` | — | final | 明确成为朋友 | 稳定友谊而非恋爱 | Q01/Q04/Q07 的共同体验与支持成立，但浪漫吸引不足 | `estpEndings` | 是 |
| `unresolved_ambiguity` | — | final | 暧昧仍待确认 | 联系继续但关系未定 | Q09 拆除标签、Q10 尚有分项未达成一致 | `estpEndings` | 是 |

覆盖核对：11 个基础 `ending_id` 各一条，2 个 `evaluation_id` 各一条；`confirmed_relationship` 的基础结局与两个二级评价保持分离。所有中文标题均为 4—8 个汉字，并能仅凭标题识别关系状态。

## 字段与呈现策略

| 运行时字段 | 内容策略 |
|---|---|
| `title` | 直接说明终止、淡出、熟人、朋友、暧昧、热恋或确认恋爱，不用纯意象替代结果。 |
| `coreCopy` | 用玩家见过的场景元素呈现关系落点，不展示分数和判定公式。 |
| `reasonCopy` | 解释可由题目选择造成的互动模式，不诊断人格、不以 ESTP 标签归因。 |
| `stateSummary` | 使用吸引、信任、舒适、冲突的定性含义；不显示阈值。 |
| `RelationshipEvaluationContent` | 在保留 `confirmed_relationship` 基础结局的同时，单独呈现稳定或隐藏风险评价。 |

产品现有结局页支持“重新挑战”“复制当前链接”“返回类型选择”；Stage 05 不新增按钮、继续剧情或分享逻辑。

## 模糊反馈完整字典

`conflict` 的方向采用原始状态语义：数值上升表示拉扯增加，对玩家是负向；数值下降表示张力缓解，对玩家是正向。没有零变化提示键，题目只引用实际发生非零变化的键。

| hint_key | 维度 | 原始方向 | 玩家含义 | 强度 | ESTP 文案 |
|---|---|---|---|---|---|
| `attraction_up_slight` | attraction | up | 靠近兴趣略增 | slight | TA对和你再试一种相处方式多了点兴趣。 |
| `attraction_up_medium` | attraction | up | 靠近兴趣明显增加 | medium | TA明显更想把下一段共同时间留给你。 |
| `attraction_up_strong` | attraction | up | 恋爱发展意愿强烈增加 | strong | TA已经不太掩饰想和你继续发展关系。 |
| `attraction_down_slight` | attraction | down | 靠近兴趣略减 | slight | TA对继续靠近少了一点兴致。 |
| `attraction_down_medium` | attraction | down | 单独邀约意愿明显减少 | medium | TA开始把单独邀约收回到普通联系。 |
| `attraction_down_strong` | attraction | down | 恋爱发展意愿强烈下降 | strong | TA已经不想让这段互动继续朝恋爱发展。 |
| `trust_up_slight` | trust | up | 透明度略增 | slight | TA愿意多告诉你一点真实计划和顾虑。 |
| `trust_up_medium` | trust | up | 对说明与协商更有把握 | medium | TA开始相信临时变化和不同意见都能说清。 |
| `trust_up_strong` | trust | up | 愿意共同处理关键边界 | strong | TA愿意把关键边界与共同决定真正交给你们一起处理。 |
| `trust_down_slight` | trust | down | 对承诺略有疑问 | slight | TA对这句保证留下了一点疑问。 |
| `trust_down_medium` | trust | down | 怀疑边界兑现 | medium | TA开始怀疑说好的边界会不会真的兑现。 |
| `trust_down_strong` | trust | down | 收回关键托付 | strong | TA把重要计划和脆弱部分从你这里收了回去。 |
| `comfort_up_slight` | comfort | up | 表演压力略减 | slight | TA在你面前少了一点维持刺激或气氛的用力。 |
| `comfort_up_medium` | comfort | up | 更敢真实选择 | medium | TA更敢按真实状态选择参加、拒绝或改主意。 |
| `comfort_up_strong` | comfort | up | 能自在表达全部状态 | strong | TA可以在你面前自在表达兴奋、安静、犹豫和停止。 |
| `comfort_down_slight` | comfort | down | 开始谨慎表达 | slight | TA开始在提议和回答前多留一层余地。 |
| `comfort_down_medium` | comfort | down | 缩小接触范围 | medium | TA开始缩小邀约、分享和身体靠近的范围。 |
| `comfort_down_strong` | comfort | down | 不再暴露真实边界 | strong | TA已经不愿再把真实边界放进这段相处。 |
| `conflict_up_slight` | conflict | up | 未解张力略增 | slight | 没说开的影响和期待又积了一点。 |
| `conflict_up_medium` | conflict | up | 拉扯明显增加 | medium | 计划、边界和关系含义开始变成一场拉扯。 |
| `conflict_up_strong` | conflict | up | 对抗强烈增加 | strong | 对话已经被逼迫、防御和互相试探占满。 |
| `conflict_down_slight` | conflict | down | 未解张力略缓 | slight | 刚才没说开的那一层松动了一点。 |
| `conflict_down_medium` | conflict | down | 事实与影响重新分开 | medium | 你们把事实、影响和下一步重新分开了。 |
| `conflict_down_strong` | conflict | down | 对抗显著停止 | strong | 僵持被清楚的暂停或协议接住，双方终于停止对抗。 |

## 内容与敏感性说明

- Q05 的信息差只支持“重新告知、核验与授权”主题，不推出 ESTP 天生会撒谎或操控。
- Q09 的“坏男孩/玩家”是被情节明确拒绝的外部投射，不作为吸引、忠诚、道德或结局依据。
- Q06 的身体接触与 Q10 的关系承诺均坚持逐次、逐项、双向同意；礼物、热度、既往同意和类型人设都不是持续许可。
- Q07 不浪漫化违法、危险驾驶、成瘾、暴力或财务损失；文案只讨论可逆尝试、预算与退出方案。
- 强烈失败结局只对应长期或高强度的强迫、羞辱、失信和不适；低强度关系停止保持比例，不渲染灾难。
- 十题选项未包含任何稳定结局 ID 或直接结局选择器；结局仍完全由共享 resolver 决定。

## Stage 06 验证结果

Stage 06 已导入 `estpQuestions`，使用真实 `applyEffects` 和 `resolveEnding` 穷举 `4^10 = 1,048,576` 条完整选择路径，并保留基础 `endingId` 与可选 `evaluationId` 的完整结果键。结果如下：

1. 11 个基础结局和 2 个恋爱二级评价全部可达；12 个完整 outcome 无缺失或意外 ID。
2. Q2、Q5、Q8 条件失败率分别为 25.000%、34.610%、35.410%，均在参考区间内。
3. 截断终端叶占比与等概率完整选择空间加权占比在机器报告中分别保存，未互相替代。
4. `confirmed_relationship:romance_stable` 与 `confirmed_relationship:romance_hidden_risk` 作为两个完整 outcome 独立统计。
5. 当前规则没有稳定 rule ID 或适用规则诊断钩子，因此规则覆盖与具体遮蔽仍为 `unknown`，不从缺失计数推测。

完整机器数据见 `content/questions/estp-balance-report.json`，审计说明见 `content/questions/estp-balance-report.md`。
