# ESTJ 结局与反馈审计（Stage 05）

> 状态：v1 content complete / Stage 06 reachability verified。生产文案位于 `src/content/estj-endings.ts`，全路径证据位于 `content/questions/estj-balance-report.json` 与 `.md`。
>
> 本文件只审计固定结局、关系评价和模糊反馈的内容覆盖。初始状态、阈值、检查点、优先级、分类条件、状态方向和稳定 ID 均以 `src/content/schema.ts` 与 `src/game/rules.ts` 为准，本阶段没有重新定义或修改。

## 1. 运行时投影与内容所有权

| content | runtime route | fixed vocabulary source | Stage 05 ownership |
|---|---|---|---|
| 11 个基础结局 | `estjEndings` → `EndingContent[]` | `ENDING_IDS` 与固定 `kind` | 仅写 `title / coreCopy / reasonCopy / stateSummary` |
| 2 个恋爱评价 | `estjRelationshipEvaluations` → `RelationshipEvaluationContent[]` | `RELATIONSHIP_EVALUATION_IDS` | 仅写 `title / copy / badge` |
| 24 个模糊反馈 | `estjFuzzyFeedback` → `FuzzyFeedbackContent[]` | `FuzzyFeedbackId` 方向与强度语义 | 仅写目标专属 `text`，不更改维度、方向或强度 |
| 结束页动作 | `EndingScreen` | 现有产品界面 | 沿用“重新挑战”，结局内容不新增动作或路由 |

生产模块不导入 Markdown 或 JSON。项目配置文件没有要求额外的 Stage 05 追踪 JSON，因此本阶段不另造平行数据源。

## 2. 固定结果覆盖矩阵

`stage06_status` 统一为 `reachable`：Stage 06 已用真实 `applyEffects` / `resolveEnding` 穷举 `4^10 = 1,048,576` 条等价完整路径。

| ending_id | secondary_result_id | fixed family | production content route | character basis | content complete? | stage06_status |
|---|---|---|---|---|---|---|
| conflict_break | none | global | `estjEndings` | B06/B11/B12；Q04–Q10 的逼迫、报复与决定权争夺 | yes | reachable |
| strong_discomfort | none | global | `estjEndings` | B02/B06/B08/B09；Q03–Q10 的计划、容量和私人空间边界 | yes | reachable |
| trust_broken | none | global | `estjEndings` | B01/B03/B06/B11；Q01–Q07 的授权、承诺与隐私行为 | yes | reachable |
| no_second_meeting | none | stage_gate | `estjEndings` | B01/B03/B05；Q01/Q02 的分工授权与支持节奏 | yes | reachable |
| fade_out | none | stage_gate | `estjEndings` | B02/B06/B08；Q03–Q05 的计划、接手和容量 | yes | reachable |
| stay_acquaintances | none | stage_gate | `estjEndings` | B02/B04/B07/B10/B11；Q06–Q08 的错位、隐私与变更 | yes | reachable |
| strangers_after_all | none | final | `estjEndings` | B03/B09/B11/B12；Q07–Q10 的修复、脚本与定义 | yes | reachable |
| confirmed_relationship | none | final | `estjEndings` | B02–B11；Q03–Q10 的可修改计划、支持和关系协议 | yes | reachable |
| dangerous_lovers | none | final | `estjEndings` | B03/B09/B10；Q06/Q09/Q10 的表达、吸引和同意风险 | yes | reachable |
| friends | none | final | `estjEndings` | B02–B05/B07/B08；Q02/Q03/Q05/Q06/Q08/Q10 | yes | reachable |
| unresolved_ambiguity | none | final | `estjEndings` | B03/B09/B12；Q09/Q10 的外部脚本与未完成定义 | yes | reachable |
| confirmed_relationship | romance_stable | final | `estjRelationshipEvaluations` | B02/B04/B06–B11；Q04–Q10 的授权、容量和修复 | yes | reachable |
| confirmed_relationship | romance_hidden_risk | final | `estjRelationshipEvaluations` | B02/B06/B08–B11；Q04–Q10 的迟疑、边界和未检验承诺 | yes | reachable |

基础 `endingId` 与可选 `evaluationId` 始终分开保存；`confirmed_relationship:romance_stable` 和 `confirmed_relationship:romance_hidden_risk` 是两种完整结果，不能在报告中合并。

## 3. 结局文案目录

| ending_id | title | question-grounded reason | outcome semantics | tone / sensitivity |
|---|---|---|---|---|
| conflict_break | 关系止于争执 | 价值证明、否定付出、公开反击和决定权争夺持续升级 | 沟通空间被对抗压过，关系终止 | 坚定；不把伤害归因于类型 |
| strong_discomfort | 不适中止关系 | 改计划、休息、拒绝或私人空间无法安全表达 | 可拒绝空间耗尽，继续相处不安全 | 清楚保护边界，不渲染受害细节 |
| trust_broken | 信任已经破裂 | 授权、责任、承诺或隐私处理反复失信 | 重要决定与私人信息被收回 | 严肃；区分好意与实际影响 |
| no_second_meeting | 没有第二次见面 | Q01/Q02 未形成共同分工与支持节奏 | 关系停在普通初识 | 低强度、克制，不灾难化 |
| fade_out | 联系渐渐淡去 | Q03–Q05 的计划、接手与容量未转成可持续联系 | 具体邀约退回偶尔问候 | 遗憾但平静 |
| stay_acquaintances | 停在普通熟人 | Q06–Q08 的长期错位、隐私修复或重协商不足 | 保留礼貌往来，不再推进亲密 | 温和，承认熟人关系价值 |
| strangers_after_all | 最后回到陌生 | 到达 Q10 仍缺乏足够可靠、舒适的关系基础 | 最终结束往来 | 明确结束，不写命定惩罚 |
| confirmed_relationship | 确认恋爱关系 | 双方逐项确认约会、排他、空间、投入和复谈 | 明确建立恋爱关系 | 温暖落地，不把计划等同承诺 |
| dangerous_lovers | 心动但不安全 | 高吸引推动靠近，但拒绝、隐私或现实边界仍不稳 | 恋爱成立同时保留明显风险 | 有张力，不浪漫化控制和监控 |
| friends | 成为可靠朋友 | 能直接说明需要并互相支持，浪漫吸引不足 | 稳定友谊而非恋爱候补 | 肯定、非贬低 |
| unresolved_ambiguity | 关系仍未说清 | 外部保证已拆除，但排他、投入或名称未同意 | 联系仍在，关系尚未定性 | 诚实留白，不保证自动升级 |

### 3.1 标题检查

- 11 个基础结局标题均为 6～7 个汉字，位于 4～8 字限制内。
- 每个标题单独阅读即可识别：终止、没有下次、淡去、熟人、陌生、确认恋爱、风险恋爱、朋友或未定关系。
- 没有仅靠气氛意象承载结果，也没有使用“尺子姐、管理者、天生可靠”等类型口号。

### 3.2 关系评价

| evaluation_id | title | badge | distinction |
|---|---|---|---|
| romance_stable | 稳定落进日常 | 关系评价：稳定落进日常 | 恋爱已经确认，授权、容量、变更和修复足以支撑现实稳定 |
| romance_hidden_risk | 靠近仍有隐忧 | 关系评价：恋爱已确认，仍有隐忧 | 恋爱已经确认，但迟疑、边界或承诺仍需下一次现实检验 |

评价只补充 `confirmed_relationship` 的质量，不覆盖基础结局 ID，也不添加新的分类条件。

## 4. 角色化依据与内容边界

- **组织与自主（B01/B06；Q01/Q04）**：结局会提到授权、接手范围和共同决定，但不宣称 TA 天生擅长领导或永远正确。
- **计划与现实容量（B02/B07/B08；Q03/Q05/Q08）**：以可修改安排、例外和可兑现承诺形成 ESTJ 目标语感，不把工作、效率或守计划当作能力与道德证明。
- **直接与修复（B03/B11；Q02/Q07/Q10）**：文案可写“说清”“具体处理”和“重新确认”，但直接不为隐私侵犯、羞辱或持续纠错免责。
- **实际照顾与接收错位（B04/B05/B10；Q02/Q06）**：行动照顾可以成为关系记忆，不能抵扣倾听、口头确认、同意或真实不匹配。
- **承诺与反标签（B09/B12；Q09/Q10）**：稳定只来自实际兑现和共同协议；F09/F10 的忠诚神话、尺子标签与职业想象均不能决定结果。
- 结局不预设 TA 的姓名、性别、年龄、职业、收入、家庭结构、政治立场、创伤、疾病或性取向，也不使用临床标签解释冲突。

## 5. 模糊反馈完整字典

冲突维度采用反向玩家语义：`conflict_up` 表示关系摩擦增加，`conflict_down` 表示摩擦缓解。零变化不产生反馈键；多条提示仍由题目选项选择最关键的 1～2 项。

| hint_key | fixed dimension | fixed raw direction | player meaning | fixed intensity | target-specific copy |
|---|---|---|---|---|---|
| attraction_up_slight | attraction | up | 靠近兴趣轻微增加 | slight | TA开始期待下一次共同安排。 |
| attraction_up_medium | attraction | up | 靠近兴趣明显增加 | medium | TA明显愿意把更多个人时间留给你。 |
| attraction_up_strong | attraction | up | 靠近兴趣强烈增加 | strong | TA已经很难忽略与你继续靠近的心动。 |
| attraction_down_slight | attraction | down | 靠近兴趣轻微降低 | slight | TA对下一次邀约少了一点期待。 |
| attraction_down_medium | attraction | down | 靠近兴趣明显降低 | medium | TA开始把共同安排缩回普通联系。 |
| attraction_down_strong | attraction | down | 靠近兴趣强烈降低 | strong | TA不再想把这段互动往恋爱方向推进。 |
| trust_up_slight | trust | up | 信赖轻微增加 | slight | TA愿意再把一件具体安排交给你共同决定。 |
| trust_up_medium | trust | up | 信赖明显增加 | medium | TA开始相信答应、拒绝和更改都会被说清。 |
| trust_up_strong | trust | up | 信赖强烈增加 | strong | TA愿意把关键边界、私人信息和长期安排交进共同讨论。 |
| trust_down_slight | trust | down | 信赖轻微降低 | slight | TA对这句承诺多留了一点核对。 |
| trust_down_medium | trust | down | 信赖明显降低 | medium | TA开始怀疑说好的范围和返回是否会兑现。 |
| trust_down_strong | trust | down | 信赖强烈降低 | strong | TA把重要决定与私人信息从你这里收了回去。 |
| comfort_up_slight | comfort | up | 自在与可拒绝感轻微增加 | slight | TA在你面前少了一点事事先安排好的紧绷。 |
| comfort_up_medium | comfort | up | 自在与可拒绝感明显增加 | medium | TA知道自己可以调整计划，也可以直接说不。 |
| comfort_up_strong | comfort | up | 自在与可拒绝感强烈增加 | strong | TA可以在你面前承认做不到、改主意或需要休息。 |
| comfort_down_slight | comfort | down | 自在与可拒绝感轻微降低 | slight | TA开始先衡量哪句话会不会引来新的要求。 |
| comfort_down_medium | comfort | down | 自在与可拒绝感明显降低 | medium | TA逐渐缩小请求、分享和共同计划的范围。 |
| comfort_down_strong | comfort | down | 自在与可拒绝感强烈降低 | strong | TA已经不愿再把真实需要和私人空间放进这段相处。 |
| conflict_up_slight | conflict | up | 摩擦轻微增加 | slight | 一个没说清的权限又留在了你们之间。 |
| conflict_up_medium | conflict | up | 摩擦明显增加 | medium | 计划、责任和边界开始缠成持续拉扯。 |
| conflict_up_strong | conflict | up | 摩擦强烈增加 | strong | 对话只剩逼迫、反击和争夺决定权。 |
| conflict_down_slight | conflict | down | 摩擦轻微缓解 | slight | 刚才卡住的那一点有了松动。 |
| conflict_down_medium | conflict | down | 摩擦明显缓解 | medium | 你们把意图、影响和下一步重新分开了。 |
| conflict_down_strong | conflict | down | 摩擦强烈缓解 | strong | 僵持被清楚的边界和可执行约定接住。 |

## 6. 内容与敏感性说明

- 全局危险结局使用明确语言描述逼迫、报复、监控和隐私伤害，但不添加题目中没有发生的暴力、疾病或创伤细节。
- `dangerous_lovers` 不把高吸引下的不适、失信或控制浪漫化；标题直接说明“不安全”。
- `friends`、`stay_acquaintances`、`no_second_meeting` 与 `fade_out` 都保持比例感，不把非恋爱结果写成失败、惩罚或人格缺陷。
- `confirmed_relationship` 不宣称从此稳定、永不离开或天然忠诚；两种评价继续区分稳定与潜在风险。
- 所有原因都落在十题可产生的互动模式上，没有从 ESTJ 标签推导道德、能力、职业或结局。

## 7. 完整性审计与 Stage 06 交接

- 11 个 `ENDING_IDS` 各有且仅有一条内容，`kind` 与 runtime 固定映射一致；没有新增、改名或复用 ID。
- 2 个 `RELATIONSHIP_EVALUATION_IDS` 内容完整，并与基础 `confirmed_relationship` 分开保存。
- 24 个反馈键完整覆盖 4 个维度 × 2 个方向 × 3 个强度；维度、原始方向和强度均未改变。
- `src/content/estj-questions.ts` 的选项没有直接结局、结束或跳转字段；结局仍只由共享 resolver 决定。
- Stage 06 已以真实 `applyEffects` / `resolveEnding` 穷举全部路径；11 个基础结局和 12 个完整 outcome 均可达。运行时仍没有稳定 rule ID 或 applicable-rule 诊断钩子，因此规则 shadowing 保持 `unknown`。
