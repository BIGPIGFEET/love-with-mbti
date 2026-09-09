# ESFJ 十题正式问题交接（Stage 04）

> 状态：v2 balanced-and-registered，数值已通过 Stage 06 完整枚举并进入生产内容包。  
> 运行时题目源：[esfj-questions.ts](../../src/content/esfj-questions.ts)；逐题追溯：[esfj-question-traceability.json](../traceability/esfj-question-traceability.json)；上游锁定序列：[esfj-formal-sequence.json](../traceability/esfj-formal-sequence.json)。  
> ESFJ 当前不是已注册可玩类型。本阶段创建目标题目模块，不修改 content-pack.ts、packs.ts、共享规则、结局或现有类型内容。

## 1. 运行时字段映射

| semantic field | runtime field or companion artifact | transformation | validator |
|---|---|---|---|
| question_id | Question.id | 使用 Q01–Q10 精确 ID | schema + traceability validator |
| order / stage / prompt / options | Question 同名语义字段 | 固定 2/3/3/2 阶段分配，每题四项 | schema + traceability validator |
| setup | Question.scene | 写出具体触发、现实限制与玩家处境 | schema |
| npc_behavior | Question.npcQuote | 只写可观察言行与当下诉求 | schema |
| conflict_ids | Question.conflictDimensions | 玩家可读冲突维度；稳定 ID 留在 companion JSON | traceability validator |
| evidence_refs | Question.researchRefs | 完整保留 Stage 03 合格来源 ID | traceability validator |
| author_notes | Question.designNote | 非玩家可见设计理由 | TypeScript review |
| option_id / strategy / text / effects | QuestionOption 对应字段 | 四项显示顺序独立于策略分类 | schema + companion check |
| immediate_response | QuestionOption.npcResponse | 保持可继续游戏，不声明永久结局 | content review |
| fuzzy_hints | feedbackIds + feedbackText | 使用共享方向/强度键，不展示数值 | schema check |
| scene/candidate/behavior/feature/state IDs | companion JSON | 按精确 question_id 与 scene_id 绑定 | traceability validator |

## 2. 十题概览

| question | stage | scene / candidate | primary test | feature IDs | conflict IDs | stakes |
|---|---|---|---|---|---|---|
| Q01 | first_meeting | SC01 / K01 | 接受一次具体照顾时能否保留路线与责任边界 | F01 | C01 | low |
| Q02 | first_meeting | SC02 / K02 | 群体融入与私人交流能否并存 | F05 | C05 | low |
| Q03 | contact | SC03 / K05 | 实际安排能否建立在及时确认和可履行承诺上 | F06 | C06 | medium |
| Q04 | contact | SC04 / K08 | 分享兴趣时能否同时容纳双方偏好与时间 | F07 | C07 | medium |
| Q05 | contact | SC05 / K06 | 联系期待能否形成有限、清楚、可恢复的规则 | F04 | C04 | medium-high |
| Q06 | familiarity | SC06 / K09 | 安全提醒、计划变化与个人自主如何划界 | F08、F06 | C01、C06 | high |
| Q07 | familiarity | SC07 / K12 | 可见和隐性劳动能否按容量重新分配 | F02、F08 | C08 | high |
| Q08 | familiarity | SC08 / K11 | 维持现场和谐时能否拒绝过度承担 | F03、F06 | C03、C06 | high |
| Q09 | ambiguity | SC09 / K13 | 公开认可与未定义关系能否使用双方同意的口径 | F05、F04 | C05、C04 | high |
| Q10 | ambiguity | SC10 / K16 | 投入与照顾能否转成真实、可修改的关系协议 | F02、F04、F08 | C02、C04、C08 | high |

推进顺序从一次帮助和社交邀请，进入计划、兴趣与联系节奏，再处理安全、分工和过度承担，最后讨论公开身份与关系定义。建设性路线不要求玩家持续顺从，也不把TA的照顾自动解释为浪漫承诺。

## 3. 初始效果清单

效果顺序统一为 attraction / trust / comfort / conflict；绝对值总和用于预算复核。

| question | option_id | strategy | effects | total abs |
|---|---|---|---|---:|
| Q01 | q01_negotiate | negotiate | 5 / 0 / 10 / 0 | 15 |
| Q01 | q01_risky | risky | -5 / 0 / -5 / 0 | 10 |
| Q01 | q01_honest | honest | 0 / 0 / 10 / 0 | 10 |
| Q01 | q01_accommodate | accommodate | 10 / 0 / 5 / 0 | 15 |
| Q02 | q02_honest | honest | 10 / 0 / 10 / 0 | 20 |
| Q02 | q02_accommodate | accommodate | 10 / 0 / 5 / 0 | 15 |
| Q02 | q02_risky | risky | -10 / 0 / -10 / 0 | 20 |
| Q02 | q02_negotiate | negotiate | 10 / 0 / 15 / 0 | 25 |
| Q03 | q03_risky | risky | 0 / -10 / -10 / 0 | 20 |
| Q03 | q03_negotiate | negotiate | 0 / 20 / 10 / 0 | 30 |
| Q03 | q03_honest | honest | 0 / 10 / 10 / 0 | 20 |
| Q03 | q03_accommodate | accommodate | 0 / 5 / 5 / 0 | 10 |
| Q04 | q04_accommodate | accommodate | 15 / 0 / 5 / 0 | 20 |
| Q04 | q04_honest | honest | 10 / 0 / 10 / 0 | 20 |
| Q04 | q04_negotiate | negotiate | 15 / 0 / 10 / 0 | 25 |
| Q04 | q04_risky | risky | -10 / 0 / -20 / 0 | 30 |
| Q05 | q05_risky | risky | 0 / -15 / -10 / 15 | 40 |
| Q05 | q05_honest | honest | 0 / 15 / 10 / -5 | 30 |
| Q05 | q05_accommodate | accommodate | 0 / 5 / 10 / -5 | 20 |
| Q05 | q05_negotiate | negotiate | 0 / 20 / 10 / -10 | 40 |
| Q06 | q06_confront | confront | 0 / 5 / 5 / 5 | 15 |
| Q06 | q06_negotiate | negotiate | 0 / 15 / 10 / -10 | 35 |
| Q06 | q06_accommodate | accommodate | 0 / 5 / 10 / -5 | 20 |
| Q06 | q06_risky | risky | 0 / 0 / -10 / 20 | 30 |
| Q07 | q07_honest | honest | 0 / 15 / 10 / -5 | 30 |
| Q07 | q07_risky | risky | 0 / -20 / 0 / 20 | 40 |
| Q07 | q07_negotiate | negotiate | 0 / 15 / 15 / -10 | 40 |
| Q07 | q07_confront | confront | 0 / 5 / 5 / 5 | 15 |
| Q08 | q08_accommodate | accommodate | 0 / 0 / 5 / 0 | 5 |
| Q08 | q08_risky | risky | 0 / -15 / -5 / 20 | 40 |
| Q08 | q08_honest | honest | 0 / 5 / 10 / -5 | 20 |
| Q08 | q08_negotiate | negotiate | 0 / 15 / 10 / -10 | 35 |
| Q09 | q09_honest | honest | 0 / 15 / 10 / 0 | 25 |
| Q09 | q09_negotiate | negotiate | 15 / 15 / 10 / 0 | 40 |
| Q09 | q09_risky | risky | 5 / -20 / -15 / 0 | 40 |
| Q09 | q09_accommodate | accommodate | 15 / -10 / -5 / 0 | 30 |
| Q10 | q10_negotiate | negotiate | 20 / 15 / 5 / 0 | 40 |
| Q10 | q10_honest | honest | 0 / 15 / 10 / -5 | 30 |
| Q10 | q10_accommodate | accommodate | 20 / -15 / -5 / 0 | 40 |
| Q10 | q10_risky | risky | 0 / -10 / -10 / 20 | 40 |

## 4. 效果预算复核

- 40 个选项全部使用允许值 -20 / -15 / -10 / -5 / 0 / 5 / 10 / 15 / 20。
- 最大四维绝对变化总和为 40；没有超过普通建议值 40，也没有触及硬上限 60。
- 没有选项在三个以上维度使用 15 或 20，预期效果预算警告为 0。
- 每个选项只在 Stage 03 登记的 state_ids 上使用非零变化；运行时对象仍完整提供四维字段。
- Q09 的迁就路线和 Q10 的迁就路线保留“短期吸引上升、信任下降”的混合效果，用来表达公开承诺或答应关系并不等于真实同意。
- 数值已在 Stage 06 使用真实 applyEffects、阶段门槛和 resolveEnding 完整枚举后定稿；最终报告未修改共享规则。

## 5. Set-level QA

| 题号 | stage | primary feature / conflict | strategy-to-position mapping | effect range | response checked | hints checked | humanization checked | 至少两条可信路线 |
|---|---|---|---|---|---|---|---|---|
| Q01 | first_meeting | F01 / C01 | 1=N, 2=R, 3=H, 4=A | 10–15 | pass | pass | pass | 分段同行；直接拒绝；有限接受 |
| Q02 | first_meeting | F05 / C05 | 1=H, 2=A, 3=R, 4=N | 15–25 | pass | pass | pass | 先私聊；加入一轮；限时参与 |
| Q03 | contact | F06 / C06 | 1=R, 2=N, 3=H, 4=A | 10–30 | pass | pass | pass | 共同核对；给替代时段；接受方案 |
| Q04 | contact | F07 / C07 | 1=A, 2=H, 3=N, 4=R | 20–30 | pass | pass | pass | 轮流体验；说明时间；共同排序 |
| Q05 | contact | F04 / C04 | 1=R, 2=H, 3=A, 4=N | 20–40 | pass | pass | pass | 说明期限；简短回应；建立规则 |
| Q06 | familiarity | F08 / C01 | 1=C, 2=N, 3=A, 4=R | 15–35 | pass | pass | pass | 划分责任；设置备选；接受改道 |
| Q07 | familiarity | F02 / C08 | 1=H, 2=R, 3=N, 4=C | 15–40 | pass | pass | pass | 说明容量；重新分工；叫停记账 |
| Q08 | familiarity | F03 / C03 | 1=A, 2=R, 3=H, 4=N | 5–40 | pass | pass | pass | 有限分担；拒绝新增；压缩方案 |
| Q09 | ambiguity | F05 / C05 | 1=H, 2=N, 3=R, 4=A | 25–40 | pass | pass | pass | 只用姓名；协商口径；承认犹豫 |
| Q10 | ambiguity | F02 / C02 | 1=N, 2=H, 3=A, 4=R | 30–40 | pass | pass | pass | 建立协议；说明未准备；揭示压力 |

缩写：N=negotiate、A=accommodate、H=honest、R=risky、C=confront。四个主要策略分散在不同显示位置；confront 只用于 Q06/Q07 对事实、责任和关系记账的直接设界。

## 6. 追溯、反馈与内容边界

- 每个运行时问题以精确 question_id 绑定一个 Stage 03 scene_id；order、stage、candidate、behavior、feature、source、conflict 和 state ID 集由 companion JSON 完整保留。
- 40 个选项均是玩家当下可以执行的行动，不包含 endingId、故事停止字段或直接结局选择；高压选项的即时回应也保持与继续游戏兼容。
- 每个选项使用一到两条共享模糊反馈键；维度、方向与强度对应非零效果，玩家可见文案不显示数值。
- Q01/Q02/Q04 的状态集合不含 trust 和 conflict，Q03 不含 attraction 和 conflict，Q09 不含 conflict；这些维度的变化保持 0。
- 照顾、社交、计划与公开认可都被写成具体行为，不将“热情、负责、重视关系”当成所有 ESFJ 必然具备的事实。
- 玩家可以拒绝帮助、减少社交、拒绝额外工作、选择独自行动或暂缓排他关系；只要表达清楚并承担现实后果，这些路线不会因不够顺从而自动受罚。
- TA也可以拒绝绕路、拒绝共同冒险、拒绝被替代承诺或拒绝被关系债务绑定，避免把照顾型角色写成没有边界的服务者。

## 7. Stage 06 平衡结论

- 完整枚举覆盖 1,048,576 条等价路径；11 个基础结局和 12 个完整 outcome 全部可达。
- Q5 fade_out 为 34.040%，Q8 stay_acquaintances 为 35.570%，均进入阶段目标区间；Q2 为 18.750%，因 16 个等权前缀的离散步长和行为含义保留在目标下方。
- Q10 分类器到达率为 30.686%，高于建议上限 0.686 个百分点；confirmed_relationship 为 10.237%，friends 为 21.635%，两组进入 Q10 条件目标区间。
- 全局危险合计 8.454%，低于建议区间；trust_broken 为 4.780% 且在目标内，conflict_break 与 strong_discomfort 保持可达但较少，避免将普通拒绝和边界分歧写成严重伤害。
- 全 negotiate 路线得到 romance_stable，全 risky 路线在 Q2 结束；四个固定显示位置均未形成自动通关。negotiate 对 risky 的跨题原始效果支配符合两种策略的既定行为差异。
- 运行时没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则覆盖与 shadowing 保持 unknown。

## 8. 自动验收状态

- Stage 03/04 追溯验证已通过：10 个运行时问题、10 条 companion 记录和 10 个正式场景一一对应，完整上游 ID 集一致。
- 独立结构、追溯、报告一致性与预算检查已通过：10 题、40 个唯一选项、78 条反馈引用、12 个完整 outcome、最大总幅度 40；选项字段、允许值、状态维度和反馈方向/强度均合法。
- Stage 06 机器报告与 Markdown 报告已保存；完整路径数、早退补权、阶段条件分母、Q10 条件结果、示例路径、位置/策略和局部支配均有记录。
- 仓库内容校验确认 13 个内容包有效；全类型路径回归包含 ESFJ 并成功完成；Vitest 的 18 个文件、92 项测试和生产构建全部通过。
- validate-content 仍列出现有其他内容包的 32 条普通预算提示，生产构建仍提示单个 JavaScript chunk 超过 500 kB；ESFJ 自身预算提示为 0。
- ESFJ 已注册到 AVAILABLE_MBTI_TYPES 与 contentPacks，并进入生产类型选择入口。

## 9. 生产交接

- Stage 05 的 ESFJ 结局、关系评价和模糊反馈已与本题目模块组成完整内容包。
- Stage 06 适配器直接导入 esfjQuestions，并调用真实 applyEffects / resolveEnding 枚举 4^10 路径；JSON 报告由分析器确定性生成。
- ESFJ 已加入生产类型入口；后续若修改题目效果、选项顺序或共享规则，必须重新生成平衡报告并运行定向一致性校验。
