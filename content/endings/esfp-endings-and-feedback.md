# ESFP 结局与反馈合同（Stage 05）

> 状态：Stage-05 内容已写入独立 TypeScript 模块，Stage-06 已验证全部基础结局与完整结果可达。ESFP 尚未进入当前可玩类型集合，因此没有修改 `src/content/content-pack.ts` 或 `src/content/packs.ts`。
> 权威内容源：[esfp-endings.ts](../../src/content/esfp-endings.ts)。题目输入：[esfp-questions.ts](../../src/content/esfp-questions.ts)。行为依据：[esfp-behavior-model.md](../esfp-behavior-model.md)。

## 1. 运行时映射与所有权

| semantic field | production route | ownership |
|---|---|---|
| ending ID / kind / title / core copy / reason / state summary | `EndingContent` in `src/content/esfp-endings.ts` | ID 与 kind 固定；Stage 05 只写 ESFP 展示文案。 |
| secondary evaluation | `RelationshipEvaluationContent` in `src/content/esfp-endings.ts` | `romance_stable` 与 `romance_hidden_risk` 分开保存。 |
| fuzzy feedback | `FuzzyFeedbackContent` in `src/content/esfp-endings.ts` | 24 个固定键、维度、原始方向与强度不变；只写展示文本。 |
| rule order / checkpoints / thresholds / state directions | `src/game/rules.ts` and `src/content/schema.ts` | 只读机制；本文不复制或重定义可执行条件。 |
| actions | `src/components/EndingScreen.tsx` | 沿用重新挑战、复制当前链接、返回类型选择；Stage 05 不增加动作。 |
| character basis / sensitivity / Stage-06 status | 本文 | 审计信息，不进入执行器。 |

## 2. 完整结果覆盖矩阵

`family` 与稳定 ID 均按当前运行时精确保留。`verified` 表示已由 ESFP Stage-06 生产等价适配器验证可达；详细计数和示例路径见 `content/questions/esfp-balance-report.json` 与 `.md`。

| ending_id | secondary_result_id | family | title | character / interaction basis | content complete | Stage-06 status |
|---|---|---|---|---|---|---|
| conflict_break | none | global | 冲突分开 | ESFP-B06、B07、B11、B12；Q05-Q10 的羞辱、围堵、动机指责与监控 | yes | verified |
| strong_discomfort | none | global | 停止相处 | ESFP-B01、B05-B07、B10；Q01、Q02、Q04、Q08-Q10 的表达、同意与退出边界 | yes | verified |
| trust_broken | none | global | 信任断裂 | ESFP-B04-B12；Q03-Q10 的说明、兑现、公开许可与修复 | yes | verified |
| no_second_meeting | none | stage_gate | 不再约见 | ESFP-B01、B02、B10；Q01-Q02 的共同体验、真实偏好与环境节奏 | yes | verified |
| fade_out | none | stage_gate | 渐失联络 | ESFP-B04、B05、B09、B10；Q03-Q05 的计划、支持与预算协商 | yes | verified |
| stay_acquaintances | none | stage_gate | 止于相识 | ESFP-B03、B06、B10、B11；Q06-Q08 的谈话入口、连接需要与回谈 | yes | verified |
| strangers_after_all | none | final | 回到陌生 | ESFP-B07、B08、B11、B12；Q09-Q10 的明确同意、责任与修复 | yes | verified |
| confirmed_relationship | none | final | 确认相恋 | ESFP-B04、B06-B08、B11、B12；Q03、Q08-Q10 的双向约定 | yes | verified |
| dangerous_lovers | none | final | 失衡恋爱 | ESFP-B07、B08、B11、B12；Q09-Q10 的高热度与未稳固边界 | yes | verified |
| friends | none | final | 成为朋友 | ESFP-B01-B04、B09、B10；Q01-Q07 的体验、拒绝、支持与交流 | yes | verified |
| unresolved_ambiguity | none | final | 关系未定 | ESFP-B06-B08、B11、B12；Q08-Q10 的关系定义和未完成修复 | yes | verified |
| confirmed_relationship | romance_stable | final | 稳定相恋 | Q03、Q08-Q10：变化说明、按时回谈、逐项同意与双向修复均可复用 | yes | verified |
| confirmed_relationship | romance_hidden_risk | final | 相恋有隙 | Q03、Q08-Q10：关系已确认，但部分安排或边界仍待行动检验 | yes | verified |

11 个基础结局各有且仅有一条 `EndingContent`；两个二级评价各有且仅有一条 `RelationshipEvaluationContent`。二级评价不会覆盖或替代基础 `confirmed_relationship` ID，Stage 06 必须按完整 outcome key 分开统计。

## 3. 内容与状态摘要政策

- 标题均为 4 个汉字，仅看标题即可辨认分开、停止相处、信任断裂、未再约见、淡出、熟人、陌生、确认恋爱、失衡恋爱、朋友或未定状态。
- `coreCopy` 给出关系结果的叙事形状；`reasonCopy` 只引用十题中确实可能发生的互动模式，不把结果解释为人格诊断。
- `stateSummary` 使用定性关系语言，不展示门槛或公式。结局页仍由产品统一显示精确关系刻度，本阶段不改变该展示策略。
- 强迫、羞辱、监控、越过同意和取消退出权使用明确措辞；初识中止、渐失联络和止于相识保持与其低烈度结果相称。
- 热闹、幽默、穿着、身体靠近、消费偏好和共同体验都不被写成恋爱、排他、忠诚或同意的自动证据。

## 4. 完整模糊反馈字典

`raw direction` 描述数值方向。对 `conflict` 而言，`down` 的玩家含义是张力缓和，`up` 才是恶化；这里明确保持反向健康语义。零变化不展示该维度提示。一个选项仍只展示其已有的 1–2 条提示，本阶段不改 Stage-04 选项绑定。

| hint_key | dimension | raw direction | player meaning | intensity | target-specific copy |
|---|---|---|---|---|---|
| attraction_up_slight | attraction | up | 靠近兴趣轻微增加 | slight | TA 对下一次一起做点什么多了一分兴趣。 |
| attraction_up_medium | attraction | up | 靠近兴趣明显增加 | medium | TA 已经在认真期待下一次共同体验。 |
| attraction_up_strong | attraction | up | 靠近兴趣强烈增加 | strong | TA 很难再把想继续靠近你的心思藏住。 |
| attraction_down_slight | attraction | down | 靠近兴趣轻微降低 | slight | TA 对继续靠近少了一点兴致。 |
| attraction_down_medium | attraction | down | 靠近兴趣明显降低 | medium | TA 不再像刚才那样期待下一次见面。 |
| attraction_down_strong | attraction | down | 靠近兴趣强烈降低 | strong | TA 已经不想把这份靠近继续理解成心动。 |
| trust_up_slight | trust | up | 可靠感轻微增加 | slight | TA 愿意把一个小安排多交给你一点。 |
| trust_up_medium | trust | up | 可靠感明显增加 | medium | TA 开始相信你会把说好的事放在心上。 |
| trust_up_strong | trust | up | 可靠感强烈增加 | strong | TA 明显更愿意把边界和重要决定交给你一起谈。 |
| trust_down_slight | trust | down | 可靠感轻微降低 | slight | TA 对你的回应多了一点保留。 |
| trust_down_medium | trust | down | 可靠感明显降低 | medium | TA 开始怀疑你会不会尊重说好的范围。 |
| trust_down_strong | trust | down | 可靠感强烈降低 | strong | TA 不再相信你会按约定回应边界和影响。 |
| comfort_up_slight | comfort | up | 自在安全轻微增加 | slight | TA 在你身边放松了一点。 |
| comfort_up_medium | comfort | up | 自在安全明显增加 | medium | TA 不必一边靠近，一边提防拒绝被误解。 |
| comfort_up_strong | comfort | up | 自在安全强烈增加 | strong | TA 可以自在表达喜欢、犹豫或离开，不必担心被逼迫。 |
| comfort_down_slight | comfort | down | 自在安全轻微降低 | slight | 你们之间多了一点不自在。 |
| comfort_down_medium | comfort | down | 自在安全明显降低 | medium | TA 开始收起原本自然的表达。 |
| comfort_down_strong | comfort | down | 自在安全强烈降低 | strong | TA 已经很难在你身边保有安全和退出空间。 |
| conflict_up_slight | conflict | up | 未解决张力轻微增加 | slight | 一句没说开的别扭留在了空气里。 |
| conflict_up_medium | conflict | up | 未解决张力明显增加 | medium | 分歧已经从事情本身转成了彼此防御。 |
| conflict_up_strong | conflict | up | 未解决张力强烈增加 | strong | 冲突正在把这段关系推向彻底中止。 |
| conflict_down_slight | conflict | down | 张力轻微缓和 | slight | 刚才那点别扭缓下来了一些。 |
| conflict_down_medium | conflict | down | 张力明显缓和 | medium | 你们把分歧放回了可以协商的范围。 |
| conflict_down_strong | conflict | down | 张力强烈缓和 | strong | 原本紧绷的对峙被清楚的说明和修复化开了。 |

## 5. 敏感性与机制边界审计

- 文案依据 `ESFP-B01` 至 `ESFP-B12` 与 Q01-Q10 的可观察互动，不从 ESFP 四字母直接推断外向程度、智力、消费能力、忠诚、性开放或关系寿命。
- “喜欢当下”不免除失约后果；“需要整理”不等于失联许可；“直接”不允许羞辱或围堵；反对刻板印象也不免除实际行为责任。
- Stage-04 选项没有直接结局选择器。本模块只把固定结果映射为展示内容，没有新增结局、评价、反馈键或执行规则。
- 本阶段没有修改 `src/content/schema.ts`、`src/game/rules.ts`、题目效果、稳定 ID、方向、强度、门槛、优先级或 tie-break。
- ESFP 尚未注册为可玩类型；因此项目级 `validate-content` 与全类型路径脚本不会覆盖 ESFP。Stage 05 使用独立结构校验确认本模块与 ESFP 题目兼容。

## 6. Stage-06 验证回写

- ESFP 适配器已使用真实 `applyEffects` 与 `resolveEnding` 穷举完整 `4^10 = 1,048,576` 选择空间，加权总数完全一致。
- 11 个基础 ending ID 与 12 个完整 outcome key 全部可达；两个 `confirmed_relationship` 二级评价分别保留。
- Q02 两个 `comfort` 档位及对应反馈经过最小调平，消除了单项全局危险硬上限超标和 `negotiate > accommodate` 的跨题原始效果支配；结局语义未改变。
- 三个阶段门槛和 Q10 到达率在参考区间内；全局危险合计和 Q10 内部结果分布仍有已披露偏差，不为凑范围继续扩大修改。
- 运行时仍没有稳定 rule ID 或 applicable-rule 诊断 hook，因此规则覆盖未声明，阴影状态保持 `unknown`。完整结果、基线对比、预算处置和示例路径见 ESFP Stage-06 报告。
