# ISTP 结局与反馈合同（Stage 05）

> 阶段：05。机制模式：`reuse`。本文只审计 ISTP 的展示内容与运行时投影，不重定义共享状态、门槛、优先级、稳定 ID、选项效果或反馈语义。
>
> 生产内容位于 `src/content/istp-endings.ts`，并由 `src/content/packs.ts` 注册。行为依据来自 `content/istp-behavior-model.md`，互动依据来自 `src/content/istp-questions.ts`。Markdown 不是运行时数据源。

## 1. 固定合同与运行时映射

| 内容 | 固定来源 | ISTP 生产字段 | Stage 05 所有权 |
|---|---|---|---|
| 11 个基础结局及种类 | `src/content/schema.ts`、`src/game/rules.ts` | `istpEndings` | 只写标题、主文案、具体原因和定性状态摘要 |
| 2 个恋爱二级评价 | `src/content/schema.ts`、`src/game/rules.ts` | `istpRelationshipEvaluations` | 分别写完整文案与徽章，不合并完整结果 |
| 24 个模糊反馈键 | `src/content/schema.ts` | `istpFuzzyFeedback` | 只写非数值体验文案，保持维度、原始方向和强度 |
| 结局动作 | 现有结果页 | 现有 UI | 继续复用重新开始、返回类型选择、复制结果；本阶段不新增动作 |

每次选择后的结局判断仍由真实 `resolveEnding` 按既有顺序完成：先检查全局危险结果，再检查对应阶段门槛，最后在 Q10 分类。运行时没有稳定 rule ID，因此本文不发明可执行规则标识，也不声明规则覆盖或阴影状态。

## 2. 基础结局覆盖矩阵

| ending_id | family | title | 角色与题目依据 | 具体内容焦点 | 语气与敏感性 | Stage 06 |
|---|---|---|---|---|---|---|
| `conflict_break` | global | 冲突分开 | B03、B04、B07、B11；Q02、Q05、Q07、Q08、Q10 | 类型投射、强迫立即沟通和反击使具体协商变成对抗 | 明确后果，不把直接或独处本身定罪 | 已验证 |
| `strong_discomfort` | global | 停止相处 | B02、B07、B09；Q01、Q05、Q08 | 安静、拒绝和暂停空间持续受压 | 尊重退出，不诊断依恋或情感能力 | 已验证 |
| `trust_broken` | global | 信任断裂 | B01、B07、B11、B12；Q03、Q08—Q10 | 操作边界、返回约定、修复和承诺失去可信度 | 不把一次失误写成永久人格缺陷 | 已验证 |
| `no_second_meeting` | stage_gate | 不再约见 | B02、B03；Q01—Q02 | 初识未形成可理解的交流节奏，也未放下类型标签 | 停在初见，不制造羞辱性拒绝 | 已验证 |
| `fade_out` | stage_gate | 渐失联络 | B01、B06、B07；Q03—Q05 | 帮助范围、关心含义和周末安排未形成稳定往来 | 不把渐淡归因于“四个字母不合” | 已验证 |
| `stay_acquaintances` | stage_gate | 止于相识 | B04、B07、B10、B11；Q06—Q08 | 兴趣分享、反馈伤害与暂停尚未形成安全修复习惯 | 承认相处经历，不强行升格亲密 | 已验证 |
| `strangers_after_all` | final | 回到陌生 | B07、B09、B11、B12；Q07—Q10 | 最终仍缺少可持续的信任、自在或冲突处理能力 | 不否认曾经靠近，也不浪漫化失衡 | 已验证 |
| `confirmed_relationship` | final | 确认相恋 | B07、B11、B12；Q08—Q10 | 双方明确同意，并逐项协商共同时间、空间、联系、排他与公开 | 不以帮助、频率或气氛替代同意 | 已验证 |
| `dangerous_lovers` | final | 失衡相恋 | B06、B07、B09、B12；Q04—Q05、Q08—Q10 | 双方进入恋爱，但心动尚不能支撑信任、自在与修复 | 不美化危险，不把高吸引写成健康证明 | 已验证 |
| `friends` | final | 成为朋友 | B01、B02、B07、B10；Q01、Q03、Q05—Q06、Q10 | 可信、自在、低冲突的共同选择，没有把照顾默认成爱情 | 朋友是明确结果，不是失败恋爱 | 已验证 |
| `unresolved_ambiguity` | final | 关系未定 | B07、B09、B12；Q08—Q10 | 仍愿意靠近，但投入方式与关系范围尚无共同答案 | 保留选择，不用暧昧替代协商 | 已验证 |

所有中文结局标题均为 4 个汉字，标题本身能区分分开、退出、失信、不再见、淡出、熟人、陌生、恋爱、朋友或未定状态。

## 3. 二级关系评价覆盖

| base ending | secondary_result_id | title | badge | 完整含义 | Stage 06 |
|---|---|---|---|---|---|
| `confirmed_relationship` | `romance_stable` | 稳定相恋 | 共同维护 | 关系已确认，空间、变化说明、暂停返回和伤害修复均有可执行习惯 | 已验证 |
| `confirmed_relationship` | `romance_hidden_risk` | 相恋有隙 | 仍需磨合 | 关系已确认，但部分需要仍被隐藏，约定能否兑现仍需行动验证 | 已验证 |

路径分析必须保留 `confirmed_relationship:romance_stable` 与 `confirmed_relationship:romance_hidden_risk` 两个完整结果，不能只保留共同的基础结局。

## 4. 模糊反馈完整字典

`up` / `down` 保留原始数值方向。吸引、信任和舒适的 `up` 对玩家有利；冲突维度语义相反：`conflict_up_*` 表示升级，`conflict_down_*` 表示缓和。零变化不展示该维度提示；一个选项仍按现有题目配置展示 1—2 条最能解释即时后果的提示。

| hint_key | fixed dimension | raw direction | player meaning | strength | ISTP 文案 |
|---|---|---|---|---|---|
| `attraction_up_slight` | attraction | up | 心动略增 | slight | TA 的目光在你身上多停了一会儿。 |
| `attraction_up_medium` | attraction | up | 心动增加 | medium | TA 开始把下一次相处放进自己的安排里。 |
| `attraction_up_strong` | attraction | up | 心动明显增加 | strong | TA 已经明确想让这份靠近继续向前。 |
| `attraction_down_slight` | attraction | down | 心动略减 | slight | TA 对下一次靠近少了一点期待。 |
| `attraction_down_medium` | attraction | down | 心动减少 | medium | TA 不再像刚才那样想把距离拉近。 |
| `attraction_down_strong` | attraction | down | 心动明显减少 | strong | TA 不再把这份相处理解成心动。 |
| `trust_up_slight` | trust | up | 信任略增 | slight | TA 愿意让你参与更多一点。 |
| `trust_up_medium` | trust | up | 信任增加 | medium | TA 开始相信说好的边界会被记住。 |
| `trust_up_strong` | trust | up | 信任明显增加 | strong | TA 愿意把更重要的顾虑交给你一起处理。 |
| `trust_down_slight` | trust | down | 信任略减 | slight | TA 对你的回应多了一点迟疑。 |
| `trust_down_medium` | trust | down | 信任减少 | medium | TA 开始怀疑具体约定能不能被兑现。 |
| `trust_down_strong` | trust | down | 信任明显减少 | strong | TA 不再相信你会守住边界和承诺。 |
| `comfort_up_slight` | comfort | up | 自在略增 | slight | TA 在你身边稍微放松了一些。 |
| `comfort_up_medium` | comfort | up | 自在增加 | medium | 安静或说真话都不再需要小心防备。 |
| `comfort_up_strong` | comfort | up | 自在明显增加 | strong | TA 可以自在地留下，也可以安心说出需要。 |
| `comfort_down_slight` | comfort | down | 自在略减 | slight | 你们之间多了一点不自在。 |
| `comfort_down_medium` | comfort | down | 自在减少 | medium | TA 开始为自己留出更远的距离。 |
| `comfort_down_strong` | comfort | down | 自在明显减少 | strong | TA 已经很难在这段相处里放松。 |
| `conflict_up_slight` | conflict | up | 冲突略升 | slight | 这句话留下了一点没有散开的火气。 |
| `conflict_up_medium` | conflict | up | 冲突升级 | medium | 分歧开始从具体做法变成彼此对抗。 |
| `conflict_up_strong` | conflict | up | 冲突明显升级 | strong | 这场互动已经逼近彻底关门。 |
| `conflict_down_slight` | conflict | down | 冲突略缓 | slight | 刚才那点紧绷稍微松开了。 |
| `conflict_down_medium` | conflict | down | 冲突缓和 | medium | 分歧重新变成了可以一起处理的问题。 |
| `conflict_down_strong` | conflict | down | 冲突明显缓和 | strong | 对抗终于停下，双方都能重新开口。 |

## 5. 内容边界与 Stage 06 交接

- 文案只引用 ISTP 行为模型与 Q01—Q10 已发生的互动，不把机械、冷脸、独行、危险、沉默或“不会共情”当作事实。
- F05 的行动表达仅用于这名角色已展示的转接头与具体照顾，不泛化为 ISTP 共性，也不自动推出爱情、交换或承诺。
- F09 的工具/酷哥/独行侠标签只作为 Q02 的反刻板风险，不参与能力、道德或结局推断。
- 空间不豁免失联，直接不豁免伤害，解决问题不授权接管；关系名称不能替代双方同意。
- 题目选项仅改变四维状态，没有直接结局选择器；本文没有增加结局家族或更改任何稳定 ID。
- 11 个基础结局、2 个二级评价和 24 个反馈键的结构完整性由 Stage 05 校验；Stage 06 已验证完整选择空间、早退加权、策略支配和阈值平衡，并将未达参考区间的偏差记录在 `content/questions/istp-balance-report.md`。
- 共享运行时没有稳定 rule ID 或适用规则诊断 hook，因此规则覆盖与阴影状态保持 `unknown`，不得根据文案猜测。
