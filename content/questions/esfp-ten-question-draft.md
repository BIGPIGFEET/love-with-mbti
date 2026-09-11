# ESFP 十题问题交接（Stage 04）

> 状态：Stage-04 完整题目已写入独立 TypeScript 模块，Stage-05/06 内容与路径分析均已完成；ESFP 尚未加入当前可玩类型集合，因此没有修改 `content-pack.ts` 或 `packs.ts`。最终平衡结果见 [esfp-balance-report.md](esfp-balance-report.md)。
> 权威题目源：[esfp-questions.ts](../../src/content/esfp-questions.ts)。上游序列：[esfp-formal-sequence.md](../scenes/esfp-formal-sequence.md)。逐题与选项追溯：[esfp-question-traceability.json](../traceability/esfp-question-traceability.json)。

## 1. 运行时与伴随映射

| semantic field | runtime field / companion artifact | transformation | validator |
|---|---|---|---|
| question_id / order / stage / prompt / options | `Question.id` 及同语义字段 | 保持 `Q01–Q10`、2/3/3/2 阶段和四选项结构 | TypeScript 与结构审计 |
| setup | `Question.scene` | 写成具体时间、地点、触发与可观察行动 | 人工内容审计 |
| npc_behavior | `Question.npcQuote` | 用简短、可继续回应的 NPC 表达承载 | 人工内容审计 |
| conflict_ids | `Question.conflictDimensions` | 原样投影 Stage-03 冲突 ID | traceability validator |
| evidence_refs | `Question.researchRefs` | 原样投影 Stage-03 合格来源 ID | traceability validator |
| author_notes | `Question.designNote` | 保存测试意图和内容护栏 | 字段审计 |
| option_id / strategy / text / effects | `QuestionOption` 对应字段 | 四项均可立即执行；效果只用共享合法值 | schema-compatible audit |
| immediate_response | `QuestionOption.npcResponse` | 描述即时反应，不直接选择结局或永久离场 | 人工内容审计 |
| fuzzy_hints | `feedbackIds` + `feedbackText` | 复用四维、方向和 `slight/medium/strong` 规则 | effect/hint audit |
| scene / candidate / behavior / feature / source / conflict / state IDs | `esfp-question-traceability.json` | 以精确 `question_id` 对齐 Stage-03 JSON | bundled traceability validator |
| option rationale | `esfp-question-traceability.json.options` | 以精确 `option_id` 保存非玩家可见理由 | option binding audit |

ESFP 模块当前不注册到 `contentPacks`：Stage 05 尚未提供 ESFP endings、relationship evaluations 与 fuzzy-feedback 内容，且可玩类型扩展需要单独完成整包注册与全量回归。

## 2. 十题脊柱与策略位置

| question | scene / candidate | primary test | option strategies 1 → 4 |
|---|---|---|---|
| Q01 | ESFP-SC01 / ESFP-C01 | 共同体验与自主退出 | negotiate / honest / accommodate / risky |
| Q02 | ESFP-SC02 / ESFP-C02 | 带动气氛与观察安静 | honest / accommodate / risky / negotiate |
| Q03 | ESFP-SC03 / ESFP-C05 | 临场弹性与可靠安排 | accommodate / confront / negotiate / honest |
| Q04 | ESFP-SC04 / ESFP-C07 | 实际帮助与情绪支持边界 | negotiate / risky / honest / accommodate |
| Q05 | ESFP-SC05 / ESFP-C09 | 体验品质与资源取舍 | confront / negotiate / accommodate / honest |
| Q06 | ESFP-SC06 / ESFP-C12 | 现实入口与思想共鸣 | risky / honest / negotiate / accommodate |
| Q07 | ESFP-SC07 / ESFP-C13 | 群体参与与两人连接 | honest / confront / accommodate / negotiate |
| Q08 | ESFP-SC08 / ESFP-C11 | 立即谈清与可预期暂停 | accommodate / negotiate / confront / honest |
| Q09 | ESFP-SC09 / ESFP-C15 | 公开、接触、排他与关系定义 | negotiate / honest / accommodate / risky |
| Q10 | ESFP-SC10 / ESFP-C18 | 承认影响与双向修复 | honest / accommodate / confront / negotiate |

五种共享策略均跨多个位置出现；四个展示位置没有固定对应“好选项”或“坏选项”。每题至少有两条心理上可信且行动不同的路径，顺从措辞不自动获得较优效果。

## 3. 效果预算与严重行为复核

- 40 个选项全部包含 `attraction / trust / comfort / conflict` 四维效果，且只使用 `-20、-15、-10、-5、0、5、10、15、20`。
- 34 个普通选项的总绝对变化不超过建议值 40；全部选项均不超过硬上限 60。
- `q05_mock_the_price` 总量 45：公开羞辱消费动机，主要以冲突上升承担后果。
- `q06_call_it_shallow` 总量 50：直接进行智力/深度贬低，信任下降与冲突上升为两个高强度轴。
- `q07_accuse_attention_seeking` 总量 45：把被忽略感转成动机指责，主要推高冲突。
- `q08_block_the_exit` 总量 60：明确取消离场权，是本组最严重的强迫行为；主方向为舒适下降与冲突上升，未超过硬上限。
- `q09_assume_full_permission` 总量 50：以既往牵手打包授权公开与排他，主方向为信任和舒适损害。
- `q10_demand_surveillance` 总量 50：以修复为名要求定位和随时回复，主方向为舒适下降与冲突上升。
- 没有选项同时出现三个高强度维度；每条反馈只引用实际非零效果，方向和强度与数值一致。

上述六项在 Stage 06 后仍保留：它们均对应羞辱、贬低、动机指责、剥夺退出权、越过同意或监控要求，没有超过硬上限，也未造成结局不可达。Q02 的两个非预算警告选项进行了最小 `comfort` 档位调整，以修正全局危险分布和跨题策略支配。

## 4. 内容、人性化与边界审计

- 所有题目均包含当下可执行的动作；没有选项写入 ending ID、故事停止标记、门槛判断或永久离场。
- NPC 回应只描述即时语气、动作和后续边界，即使遭遇严重选项也保持与共享规则的继续/阶段终止语义兼容。
- Q01/Q02 不用派对或夜店建立身份；Q05 不用消费推断阶层；Q06 不用抽象兴趣判断智力；Q09 不从穿着、调情或既往接触推断同意；Q10 不用类型标签免除实际责任。
- Q08 与 Q10 形成“暂停—回谈”弧线，但 Q10 仍允许信任未完全恢复，不把按时回来写成自动原谅。
- 玩家可拒绝活动、消费、排他和继续关系；诚实拒绝并不自动受到惩罚。TA 同样可以设限、不同意或要求重新协商。
- 玩家可见文本使用具体场景、时间、动作和短句，作者理由只存在于 `designNote` 与追溯 JSON。

## 5. 未决平衡风险

- Q01/Q02 位于首个阶段门槛前；Stage 06 调整后，`no_second_meeting` 的 eligible conditional failure 为 25.000%，处于参考区间上界。
- Q03、Q08、Q10 都涉及计划或修复，但分别测试可逆调整、暂停流程和影响承担；若玩家仍感到重复，应优先替换其中一个候选，而不是只改表面措辞。
- Q07 同时携带三个冲突 ID，Stage 04 选项仍以“表达连接需要或指责动机”为主测试；需在试玩中确认没有过载。
- Q09 的正向路径对 trust 较强，用于奖励明确同意；Stage 06 未发现全局策略支配，但局部原始效果支配仍按叙事差异保留。
- ESFP ending/fuzzy-feedback 模块和生产等价分析适配器已经完成，11 个基础结局与 12 个完整结果全部可达；内容包仍未注册，因此不能宣称可玩。

## 6. Stage-05 / Stage-06 完成状态

- Stage 05 已完整覆盖固定 ending、evaluation 和 fuzzy-feedback ID，没有修改共享机制、阈值或结局优先级。
- Stage 06 已通过生产等价适配器枚举完整 `4^10` 选择空间，并同时保存 terminal-trajectory 与 weighted-path 分布。
- 若用户确认将 ESFP 纳入可玩类型，下一步才更新 `AVAILABLE_MBTI_TYPES` 与 `contentPacks`，再执行全类型结构验证、测试和构建。
- 任意题目、选项顺序、效果或追溯变动，都必须重新运行问题追溯验证；效果变动还需重新生成 ESFP 路径报告。
