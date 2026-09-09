# ENFJ 网络刻板印象资料库与证据台账

> 状态：既有多轮台账保留；2026-09-08（Asia/Shanghai）完成增量检索、OpenCLI 中文原文补核、反例补充与结构审计。本次并非对全部历史来源重新核验；逐次访问状态见查询台账。
> 用途：记录“网络如何叙述 ENFJ”，为可能的后续创作提供可追溯材料；不把 MBTI 类型文案、自选社区发帖或平台互动量当作心理学事实、现实人群比例或个体诊断。

## 1. 研究边界

- **目标标签**：自称为 ENFJ、被他人描述为 ENFJ，或明确讨论 ENFJ 网络形象的公开内容。
- **语言与地域**：中文与英文公开网页。英文材料主要来自官方类型框架、商业类型站和 Reddit 社区；中文材料来自豆瓣、Bilibili、抖音公开页与微博，并取得两条知乎中文原回答，另保留部分可展开英语镜像，用于观察“主人公、宝剑哥、小太阳、情商担当、官配、救赎组、朝阳组、拿捏”等本地化包装。小红书已取得站内标题及一篇标签内容，叙述正文仍缺；知乎其他原回答和评论覆盖不完整。
- **时间范围**：重点检查 2021～2026 年的社区与平台内容，同时保留较早、仍可直接访问的官方或解释型页面。
- **创作用途**：只提供在线叙事、争议、反例和风险边界；本文件不建立关系阶段、行为模型、冲突维度、状态变量、候选事件、对白、选项、分数或结局。
- **产品状态**：2026-09-08 检查当前工作区 `src/content/packs.ts`，ENFJ 已注册且绑定题目与结局模块；这只确认本地代码状态，不确认远程部署。本次范围为 Stage-01 研究更新。
- **研究对象**：反复出现的网络表述，不是现实 ENFJ 人群的性格、能力、道德、心理健康、依恋类型、恋爱结果或社会表现。
- **置信度含义**：`跨平台反复出现`、`重复`、`情境性`、`低置信梗`只描述本轮可检查话语的支持程度，不表示现实发生率。
- **统计限制**：本次不要求代表性估计。站内自选调查、帖子数、评论数、点赞量、播放量和搜索排名均不作总体比例推断。

## 2. 来源计划与独立性口径

搜索前预设四个来源簇：

1. **官方边界与类型参考**：The Myers-Briggs Company，用于限定 MBTI 只描述偏好而非完整人格、技能、道德或固定行为，并记录其 ENFJ 工作沟通叙事。
2. **解释型商业类型站**：16Personalities，用于记录“Protagonist/主人公”、热烈恋爱、成长支持、边界和爱语等流行包装；其自有分类体系和站内调查不视为官方 MBTI 或代表性统计。
3. **社区自述与反刻板争论**：Reddit `r/enfj` 与豆瓣小组，优先核验原帖、同帖分歧、关系经验、边界讨论和直接反例。
4. **公开社交与视频表层传播**：Bilibili、抖音、微博、知乎、小红书、YouTube、Tumblr。只有标题、公开索引快照、搜索聚合或缺少正文的记录一律降为 `surface_record` 或 `lead`，仅用于包装和风险审计。

独立性按来源簇而不是链接数计算：同一 `r/enfj` 的多帖只算一个社区簇；16Personalities 的系列文章只算一个商业类型站簇；Bilibili 的相关推荐和同类标题不重复抬高独立性；搜索摘要、互动量、转载和聚合页不算行为证据。

## 3. 查询台账

| query_id | 平台/来源簇 | query or route | 轮次 | 结果 | access/status | fallback | notes |
|---|---|---|---:|---|---|---|---|
| ENFJ-Q01 | Myers-Briggs / 官方参考 | `site:themyersbriggs.com ENFJ communication relationships personality type official` | 1 | 找到 MBTI 总体说明、关系访谈、ENFJ 工作页和沟通材料 | HTML 可读；一份通用 PDF 实际为 ENFP 样例 | 只保留目标明确的官方页，弃用误命中的 ENFP PDF | 工作材料不能直接外推恋爱行为 |
| ENFJ-Q02 | Reddit / 反刻板 | `site:reddit.com/r/enfj ENFJ stereotypes manipulative fake people pleasing savior protagonist annoying` | 1 | 找到操纵、虚伪、讨好、救世主、过度介入及直接反驳 | 多个原帖可展开；部分首次打开为 `Internal Error` | 用完整直接 URL 重开，失败者不升级 | 不按票数判断共识或普遍性 |
| ENFJ-Q03 | Reddit / 关系经验 | `site:reddit.com/r/enfj ENFJ dating relationship affection conflict boundaries self report` | 1 | 找到亲密强度、示爱、边界、冲突和开放节奏讨论 | 代表帖可读 | 转入爱语、冲突和边界精确检索 | 单个伴侣经验不证明类型规律 |
| ENFJ-Q04 | 中文综合检索 | `ENFJ 刻板印象 恋爱 小太阳 老师 讨好 控制欲 B站 知乎 小红书` | 1 | Bilibili 命中“小太阳、宝剑哥、主人公、怎么追”等包装；知乎和小红书正文不足 | Bilibili 部分页可读；知乎、小红书目标正文未取得 | 分平台精确检索，并保留覆盖失败 | 不用 Bilibili 代替知乎或小红书覆盖 |
| ENFJ-Q05 | Reddit / 讨好与边界 | `site:reddit.com/r/enfj ENFJ people pleasing boundaries burnout saying no self care` | 2 | 找到难说不、设界线后的内疚、年龄与成长经历差异，以及明确不讨好的反例 | 多帖原页可读 | 同帖保留相反自述 | 童年创伤、依恋和讨好不能由 ENFJ 推断 |
| ENFJ-Q06 | Reddit / 示爱与爱语 | `site:reddit.com/r/enfj ENFJ affection love language relationship intense love physical touch` | 2 | 触碰、质量时间、肯定、服务、礼物和调侃均有自述 | 代表帖可读 | 优先使用同帖差异而非站内投票 | 爱语不等于 MBTI 类型规则 |
| ENFJ-Q07 | Reddit / 冲突 | `site:reddit.com/r/enfj ENFJ conflict harmony criticism confrontation honest communication` | 2 | 同帖出现回避、暂缓后沟通、调停、直接对质和证据式强硬处理 | 代表帖可读 | 保留情境分歧 | 不把回避或强硬写成固定模式 |
| ENFJ-Q08 | Reddit / 外向反例 | `site:reddit.com/r/enfj ENFJ quiet shy introverted alone time stereotype extrovert counterexample` | 2 | 找到安静、谨慎、在特定关系中才外放的自述 | 代表帖可读 | 与官方“偏好不等于能力/外显行为”对照 | 不以音量、社交熟练或独处需求判型 |
| ENFJ-Q09 | 16Personalities / 关系 | `site:16personalities.com ENFJ romantic relationships love boundaries strengths weaknesses protagonist` | 3 | 找到恋爱、边界、爱语、约会指南和亲密关系页 | 页面全文可读 | 只记录该站包装，并审计方法限制 | 同站系列只算一个来源簇 |
| ENFJ-Q10 | Bilibili / 中文视频 | `site:bilibili.com/video ENFJ 刻板印象 反刻板 小太阳 宝剑哥 主人公 恋爱` | 3 | 命中“骑士/国王、主人公、小太阳、怎么追、拿捏、死穴”等标题 | 部分标题、简介和相关推荐可读；多数无逐字稿 | 全部降为传播/风险记录 | 播放、点赞、收藏不作频率证据 |
| ENFJ-Q11 | 知乎 / 中文社区 | `site:zhihu.com ENFJ 刻板印象 小太阳 讨好 控制欲 恋爱`；`site:zhihu.com/question ENFJ 是怎样的人` | 3 | 未取得稳定可核验的目标回答正文 | 结果偏离或正文不足 | 保留为 `lead` | 不从搜索摘要建立特征 |
| ENFJ-Q12 | 小红书 / 中文平台 | `site:xiaohongshu.com ENFJ 刻板印象 小太阳 宝剑哥 恋爱 讨好` | 3 | 未取得可稳定展开的目标笔记 | 覆盖失败 | 保留为 `lead`，建议后续站内补检 | 不宣称小红书无相关话语 |
| ENFJ-Q13 | 官方边界补检 | `site:themyersbriggs.com/en-us/support/mbti-facts personality type not stereotype best fit` | 4 | 找到“类型不描述完整人格、偏好不等于能力、同型个体仍不同”等限定 | 直接页可读 | 用作所有特征的总限定 | 官方自述也不是代表性心理统计 |
| ENFJ-Q14 | Reddit / 修复者与情绪劳动 | `site:reddit.com/r/enfj ENFJ "fix people" project relationship`；`"therapist friend" emotional support own feelings burnout` | 4 | 找到“把伴侣当项目、支持成长、不能拯救他人、被固定成咨询师朋友”等互相校正的叙事 | 代表帖可读 | 区分支持、建议、未经请求的改造与专业治疗 | 不赋予读心或治疗能力 |
| ENFJ-Q15 | Reddit / 快乐面具 | `site:reddit.com/r/enfj ENFJ "always happy" positive cheerful stereotype sad` | 4 | 找到“小太阳/金毛、总是快乐”的提问和直接否认 | 部分原页首次打开失败，但搜索结果可见；另有可读安静反例 | 失败页只作路线记录，特征使用可读反例和官方限定 | 不由外在笑容推断心理健康 |
| ENFJ-Q16 | PersonalityCafe / 补充论坛 | `site:personalitycafe.com ENFJ stereotype manipulative people pleasing relationship` | 5 | 未取得可检查的目标原帖 | 搜索未返回相关直达结果 | 停止纳入，保留覆盖缺口 | 不用其他站点冒充该论坛覆盖 |
| ENFJ-Q17 | YouTube / 视频补充 | `site:youtube.com/watch ENFJ stereotypes manipulative people pleaser savior complex` | 5 | 搜索被泛化的讨好/救世主题材淹没，未取得目标视频正文或字幕 | 无可用 ENFJ 原页 | 停止纳入，保留覆盖缺口 | 泛心理内容不能反向证明 ENFJ 叙事 |
| ENFJ-Q18 | Tumblr / 表层包装 | `site:tumblr.com ENFJ stereotype manipulative people pleasing` | 5 | 找到“ENFJ 使用说明书、操纵者模式”等拟物和功能论包装 | 原页可见但为衍生类型博客 | 仅列 `surface_record` | 不将二手功能论当行为证据 |
| ENFJ-Q19 | 豆瓣 / 中文自述 | `site:douban.com/group/topic ENFJ 刻板印象 小太阳 讨好 操纵`；`ENFJ 恋爱 边界 自述` | 5 | 找到 ENFJ 自述型理想伴侣长帖及娱乐向印象帖 | 长帖全文可读；印象帖重开失败 | 长帖作为窄自述证据，失败页降为 `lead` | 长帖含大量对其他类型的泛化，只抽取作者自述和自我修正 |
| ENFJ-Q20 | 直接页面核验 | 逐一打开官方页、16Personalities、Reddit、豆瓣和 Bilibili 代表页，并在长页内定位关键段落 | 6 | 17 个 `evidence_source`、3 个 `surface_record`、7 个路线/失败记录 | Reddit 与 Bilibili 存在间歇性 `Internal Error`；中文平台覆盖不均 | 仅可读原页升级为证据；失败和摘要保持低级分类 | 最终特征不引用 `surface_record` 或 `lead` |
| ENFJ-Q21 | 国内平台 / OpenCLI 预检 | 依次检查小红书、抖音、Bilibili、知乎、微博适配器及检索命令帮助；运行 `opencli doctor`，重启 daemon 后复检 | 7 | 五个平台适配器均依赖浏览器 Cookie；Browser Bridge 扩展缺失或未连接 | daemon 可用，重启后桥接状态未恢复；未执行站内真实检索 | 转用公开网页索引与直达页核验；保留访问限制 | OpenCLI 真实站内查询数为 0，不能写成已完成站内覆盖 |
| ENFJ-Q22 | 小红书 / 国内平台补检 | `site:xiaohongshu.com/explore "ENFJ" "小太阳"`；`site:xiaohongshu.com/discovery/item "ENFJ"`；`小红书 ENFJ 恋爱 边界 讨好 反刻板` 等 5 个公开索引查询 | 7 | 未取得稳定的目标笔记直达页或正文 | 公开索引覆盖不足；站内适配器因 Browser Bridge 不可用而未查询 | 更新 ENFJ-S25，继续保留为 `lead` | 不能据此声称小红书没有相关内容，也不能用其他平台代替小红书 |
| ENFJ-Q23 | 抖音 / 国内平台补检 | `site:douyin.com/video ENFJ 小太阳 宝剑哥 刻板印象 讨好 操纵`；关系、反刻板与边界变体，共 3 个公开索引查询 | 7 | 找到“小太阳/宝剑哥、官配、贴贴、默默付出、圆场、断联、恋爱适配”等页面标题和评论快照 | 公开索引快照可读；直达页当前为空或显示 `Please wait` | 代表记录降为 `surface_record`，只做包装、分歧和概念混用审计 | 评论中的自称、配对经验和互动量均不作行为或频率证据 |
| ENFJ-Q24 | Bilibili / 国内平台补检 | `site:bilibili.com/video ENFJ 刻板印象 小太阳 宝剑哥 反差 恋爱`；反刻板/边界变体，共 2 个公开索引查询 | 7 | 再次命中“小太阳、宝剑哥、官配、emo、怎么追”等标题；既有 ENFJ-S19 仍可核验 | 部分新命中直达页返回 412，正文/字幕不可读 | ENFJ-S19 维持表层记录；ENFJ-S21 更新为失败路线 | 新搜索摘要不升级为证据，也不重复计算传播独立性 |
| ENFJ-Q25 | 知乎 / 国内平台补检 | `site:zhihu.com ENFJ 刻板印象 小太阳 讨好 操纵 恋爱` | 7 | 未取得稳定的目标回答正文 | 公开索引偏离或正文不足；站内适配器因 Browser Bridge 不可用而未查询 | 更新 ENFJ-S24，继续保留为 `lead` | 不对知乎用户话语作结论 |
| ENFJ-Q26 | 微博 / 国内平台补检 | `微博 ENFJ 小太阳 宝剑哥 刻板印象`，并打开命中的微博直达页 | 7 | 找到一篇可展开的“十六型人格 ENFJ”类型文案，含公众形象、融入群体、包揽照顾和伴侣责任包装 | 原微博正文可读；内容仍是衍生类型文案而非行为观察 | 降为 `surface_record` | 只用于国内传播包装与责任角色风险审计 |
| ENFJ-Q27 | 国内平台 / OpenCLI 复检 | 重新运行 live registry、六个平台帮助与 `opencli doctor`；检查两个已连接 Browser Bridge profile | 8 | 扩展已连接，但两个 profile 并存导致 doctor 无法自动连通；显式指定 profile 后，旧 profile 可完成 Bilibili 检索 | 将新版 profile 设为默认仍未消除 doctor 报错；后续命令逐次显式指定 profile | 每个平台最多两次真实调用，并记录成功、认证失败和桥接错误 | 本轮不能笼统写成“Bridge 完全不可用”，只能按平台报告实际结果 |
| ENFJ-Q28 | 小红书 / OpenCLI 站内复检 | `ENFJ 刻板印象 小太阳 宝剑哥 恋爱`；两次调用，其中一次参数位置错误、一次显式 profile | 8 | 未返回笔记；正确调用报 `No SW` | 两次调用预算已用完 | 转公开索引补检，更新 ENFJ-S25 | 参数解析失败也按失败调用计数；不能声称完成小红书站内覆盖 |
| ENFJ-Q29 | 抖音 / OpenCLI 站内复检 | `ENFJ 刻板印象 反刻板 边界 恋爱`；`ENFJ 宝剑哥 小太阳 官配 讨好` | 8 | 未返回视频；新版 profile 报 `No SW`，旧版 profile 报 `Detached while handling command` | 两次调用预算已用完 | 转公开索引直达页核验 | 不重复追打适配器，不把失败解释为平台无内容 |
| ENFJ-Q30 | Bilibili / OpenCLI 站内复检 | `ENFJ 刻板印象 反刻板 边界`；`ENFJ 恋爱 宝剑哥 小太阳` | 8 | 第一次报 `No SW`；第二次成功返回 15 条结果，集中于“朝阳组、救赎组、爱情博弈、旅行搭子、典型 ENFJ 的一天”及 MBTI+星座混搭 | 结果列表可读；抽样直达页仍多次返回 412 | 新命中保留为 ENFJ-S41 检索路线，不升级为行为证据 | 搜索排序分数、标题数量和互动量不作频率或独立性证据 |
| ENFJ-Q31 | 知乎 / OpenCLI 站内复检 | `ENFJ 刻板印象 小太阳 讨好 控制欲 恋爱`；`ENFJ 自述 反刻板 边界 关系` | 8 | 旧 profile 报未登录，新 profile 报 `No SW` | 两次调用预算已用完 | 转公开网页索引；找到可展开的知乎原问答英语镜像 | 英语镜像与中文原生界面分开记录，不宣称评论覆盖完整 |
| ENFJ-Q32 | 微博 / OpenCLI 站内复检 | `ENFJ 小太阳 宝剑哥 刻板印象`；`ENFJ 宝剑哥` | 8 | 两次均返回 `No Weibo search results found` | 调用无法区分确无结果与登录/检索状态问题 | 保留既有可读微博 ENFJ-S33，并停止站内扩搜 | 不由未命中推断微博没有相关讨论 |
| ENFJ-Q33 | 豆包 / 中文线索补检 | 请求列出六个中文平台的 ENFJ 原始页面、日期和可核验 URL | 8 | 调用未返回可用正文或链接 | 单次 AI 调用预算已用完 | 不纳入来源；改用原始平台公开索引 | AI 空结果不作线索或证据 |
| ENFJ-Q34 | 中文平台公开索引 / 广搜 | 豆瓣、知乎、Bilibili、微博各 1 个站点限定查询 | 9 | 豆瓣既有长帖再次可读；Bilibili 命中“内耗型宝剑哥/人间充电宝/殉道者”；知乎命中偏题问答；微博受 robots 限制 | 豆瓣原页和 Bilibili 索引可读；其余覆盖有限 | 对重复结果去重，转豆瓣与知乎窄检 | “内耗/殉道者”仅作传播风险，不作心理健康推断 |
| ENFJ-Q35 | 豆瓣 / 中文自述与反例 | `ENFJ 刻板印象`、`ENFJ 讨好 边界`、`ENFJ 恋爱 自述`、`ENFJ 小太阳`，以及“自爱、拯救、不想帮助、内耗”变体，共 8 个公开索引查询 | 9 | 找到可展开的 ENFJ 自认者朋友边界冲突帖、娱乐向“小太阳”印象帖和功能论负面观察帖 | 原页正文和部分评论可读 | 新增 ENFJ-S34 窄证据；ENFJ-S23 升为表层记录；ENFJ-S39 仅作风险审计 | 同一豆瓣来源簇不重复抬高独立性；功能论和第三人称判型不作行为事实 |
| ENFJ-Q36 | 小红书与抖音 / 公开索引窄检 | 小红书“内耗/边界/反刻板、宝剑哥/恋爱”2 个查询；抖音“内耗/边界/反刻板、官配/救赎组/朝阳组”2 个查询 | 10 | 小红书仍无稳定目标笔记；抖音取得可展开的“最佳官配、救赎组、恋爱适配”页面及相反评论 | 抖音直达页正文和评论快照可读；小红书只命中无关材料 | 新增 ENFJ-S40；更新 ENFJ-S25 与既有抖音记录 | 抖音页面只证明传播包装及评论分歧，不支持配对规律 |
| ENFJ-Q37 | 知乎 / 争议与反刻板窄检 | `ENFJ 反刻板印象`、`ENFJ 恋爱 边界 讨好`、`ENFJ 小太阳`、`ENFJ 刻板印象 宝剑哥` | 10 | 找到“是否易讨好、喜欢一个人的表现、ENFJ×INFJ 相处、为何讨厌 ENFJ”等原问答英语镜像 | 页面正文可展开；中文原生页和完整评论未稳定取得 | ENFJ-S35～ENFJ-S37 作窄社区证据，ENFJ-S38 只作负面标签审计 | 平台翻译、多个回答与自选发言均须保留个体差异和不可代表性 |

| ENFJ-Q38 | Reddit / 反刻板增量 | `site.reddit.com/r/enfj boundaries stereotypes people pleasing` | 11 | 命中既有帖子与两篇未收录反例 | 2026-09-08 搜索；摘要只作线索 | 打开原页后新增 S42、S43 | 同一 Reddit 簇不增加独立簇数 |
| ENFJ-Q39 | 豆瓣 / 既有证据抽查 | `site.douban.com/group/topic ENFJ 边界 讨好`；打开 S34 | 11 | 命中既有 S17、S34；S34 原页返回 Internal Error | 本次未重获 S34 正文 | 保留 2026-08-31 历史核验，不标记本次通过 | 搜索摘要没有新增证据资格 |
| ENFJ-Q40 | 小红书 / 缺口复检 | `site.xiaohongshu.com ENFJ 反刻板 边界`；`site.xiaohongshu.com/explore "ENFJ" "小太阳"` | 11–12 | 未取得目标笔记正文；出现其他平台及偏题结果 | 公开索引覆盖不足；本次未调用 OpenCLI | S25 继续作为 lead | 不宣称小红书无讨论或已完成站内搜索 |
| ENFJ-Q41 | 官方与抖音 / 来源抽查 | 直接打开 S01、S40 | 11 | 官方页面可读；抖音返回零行正文 | 2026-09-08 核验 | S40 保留历史表层记录及原访问日期 | 零行不等于视频不存在；本次未核验视频或评论 |
| ENFJ-Q42 | Reddit / 领导与利他反例 | `site.reddit.com/r/enfj "leadership" "stereotype"`；打开 S42、S43 | 12 | S42 正文和评论可读；S43 短 URL 超时，带标题 URL 重开成功 | 2026-09-08 可检查原帖 | 纳入窄自述；其余检索结果未采用 | 相对日期在索引与正文间有差异，不推算精确发布日期 |
| ENFJ-Q43 | OpenCLI / 当前预检 | `list -f yaml`、JSON 注册表筛选、各站点和子命令帮助、`doctor` | 13 | v1.8.6；daemon、扩展与连接检测均通过 | 2026-09-08 单一默认 profile 正常连接；不沿用旧 No SW 结论 | 根据现有缺口直接读取平台原始内容，不请求 AI 摘要 | 帮助与 doctor 不计站点查询次数 |
| ENFJ-Q44 | 小红书 / 站内搜索 | `search ENFJ 边界 --limit 8` | 13 | 返回 8 条标题、作者、日期与链接；含边界弱、边界强、分阶排行等相反包装 | 成功；站点第 1 次调用 | 选取明确反刻板标题核验正文 | 搜索标题不支持特征，不按点赞排名判断可信度 |
| ENFJ-Q45 | 小红书 / 笔记核验 | `note 6a6764440000000001033bf0`（使用搜索返回完整 URL） | 13 | 返回标题、作者及话题标签，未取得叙述正文、图片文字或评论 | 站点第 2 次调用；有结构化内容返回，但 Windows 命令包装将 URL 的 & 后参数误解析，最终退出码 1 | S44 仅作 surface_record；不以整条命令成功报告 | 已跳过更多调用：达到 2 次上限；未重试 |
| ENFJ-Q46 | 知乎 / 中文原文 | `answer-detail 1663670424` | 13 | 返回中文原回答、作者、创建和更新日期 | 成功；站点第 1 次调用 | 原 ID S35 保留，改为中文直链和窄观点，保留镜像路径 | 只取得一个回答，不冒充整页多回答或评论核验 |
| ENFJ-Q47 | 知乎 / 关系反例原文 | `answer-detail 3293505989` | 13 | 返回中文自述全文和多次修订 | 成功；站点第 2 次调用；为核验另一项既有特征的原文而读 | 原 ID S36 保留，补正发布日期及表达失误反例 | 已跳过其他回答/评论：达到 2 次上限 |
| ENFJ-Q48 | Bilibili / 字幕 | `subtitle BV1sm421M7KZ` | 13 | 返回 166 段带时间戳字幕，覆盖约 0.80–340.94 秒 | 成功；站点第 1 次调用；字幕有明显错字，未核验音轨 | S45 仅作关系攻略与风险表层记录 | 不是 AI 总结；字幕生成方式未确认，不引用疑似错字为作者原话 |
| ENFJ-Q49 | Bilibili / 评论反例 | `comments BV1sm421M7KZ --limit 15` | 13 | 实际返回 5 条评论，含单人支持耗竭自述与 1 条明示 AI 生成的摘要 | 成功；站点第 2 次调用；用于检查字幕之外的直接个人经验 | S46 只纳入明确自述；AI 摘要和泛化配对观点排除 | 已跳过楼中楼及其他视频：达到 2 次上限；5 条不代表完整评论区 |
| ENFJ-Q50 | 抖音 / 站内反刻板 | `search ENFJ 反刻板 边界 --limit 6` | 13 | 未返回可用结果；`Detached while handling command` | 失败；站点第 1 次调用，保留 failure trace | 不重复无依据重试；既有抖音分类不升级 | trace ID：20260908044919-ada39fbd；连接预检成功不保证各平台调用成功 |

## 4. 来源清单

| source_id | record_class | direct URL | page/title | platform | date | content type | original/derivative | inspectable? | permitted use | narrow claim / audit note |
|---|---|---|---|---|---|---|---|---|---|---|
| ENFJ-S01 | evidence_source | [MBTI Facts](https://www.themyersbriggs.com/en-us/support/mbti-facts) | MBTI® Facts | The Myers-Briggs Company | 页面持续更新；2026-08-30 访问 | 官方框架说明 | 原创机构页 | 是 | 界定类型使用边界 | MBTI 不描述完整人格；偏好不等于技能、能力或固定外显行为；同型个体仍受经历和文化影响而不同 |
| ENFJ-S02 | evidence_source | [MBTI personality type and relationships](https://asia.themyersbriggs.com/resources/blog/mbti-personality-type-and-relationships/) | MBTI personality type and relationships | The Myers-Briggs Company | 页面无统一发布日期；2026-08-30 访问 | 官方关系访谈 | 原创机构页 | 是 | 支持一般关系限定 | 关系中的类型差异需要通过沟通、理解可能的契合与摩擦来处理；不能用共享字母替代实际相处 |
| ENFJ-S03 | evidence_source | [16 Types in the Workplace - ENFJ](https://www.themyersbriggs.com/en-US/Access-Resources/Articles/16-types-in-the-workplaceenfj) | 16 Types in the Workplace - ENFJ | The Myers-Briggs Company | 页面无清晰日期；2026-08-30 访问 | 官方工作语境文章 | 原创机构页 | 是 | 支持官方传播框架 | 以外向温暖、支持和关注团队和谐描述一名 ENFJ 偏好者；只是工作个案和类型解释，不能外推恋爱能力或道德 |
| ENFJ-S04 | evidence_source | [Romantic Relationships](https://www.16personalities.com/enfj-relationships-dating) | Romantic Relationships - ENFJ Personality | 16Personalities | 页面持续更新；2026-08-30 访问 | 商业类型关系页 | 原创站点内容，非官方 MBTI | 是 | 支持该站的恋爱叙事 | 把 ENFJ 包装为投入、主动表达、关注长期和伴侣成长，同时承认过度介入、自我忽视和推动对方改变的风险 |
| ENFJ-S05 | evidence_source | [Boundaries, Love, and Personality Types](https://www.16personalities.com/articles/i-love-you-but-you-cant-do-that-boundaries-love-and-personality-types) | I Love You, but You Can’t Do That | 16Personalities | 页面持续更新；2026-08-30 访问 | 商业类型边界页 | 原创站点内容，非官方 MBTI | 是 | 支持该站的边界叙事 | 将 ENFJ 的弱边界写成把伴侣问题当自己的、忽略自身利益或过度帮助；也给出互惠、明确期待和后退的健康版本 |
| ENFJ-S06 | evidence_source | [Personality Type and Love Language: Protagonists](https://www.16personalities.com/articles/personality-type-and-love-language-protagonists-enfjs) | Personality Type and Love Language: Protagonists (ENFJs) | 16Personalities | 页面持续更新；2026-08-30 访问 | 商业类型爱语页 | 原创站点内容；含自选调查 | 是 | 支持该站“多方式示爱/需要互惠”的叙事 | 列出肯定、情绪支持、时间与触碰，并在结尾承认个体偏好不同；页面百分比不进入代表性统计 |
| ENFJ-S07 | evidence_source | [So You’re Dating a Protagonist](https://www.16personalities.com/articles/so-youre-dating-a-protagonist-enfj) | So You’re Dating a Protagonist (ENFJ) | 16Personalities | 页面持续更新；2026-08-30 访问 | 商业约会指南 | 原创站点内容；含自选调查 | 是 | 支持“主人公、情绪表达、完美主义”包装 | 将 ENFJ 写为有魅力、有原则、自信、较直接表达情绪，并提示照顾所有人的压力；站内比例不作总体估计 |
| ENFJ-S08 | evidence_source | [Addressing the stereotypes](https://www.reddit.com/r/enfj/comments/1nk1r94/addressing_the_stereotypes/) | r/enfj 反刻板自述与争论 | Reddit | 2025-09-18 | 社区自述与评论 | 原创自选社区内容 | 是 | 支持讨好、操纵、救世主标签及内部反例 | 同帖有人把可靠帮助与讨好区分开，有人承认过度付出或善意控制，也有人明确否认讨好；没有统一结论 |
| ENFJ-S09 | evidence_source | [Manipulative ENFJ](https://www.reddit.com/r/enfj/comments/123z7as/manipulative_enfj/) | r/enfj 操纵标签争论 | Reddit | 2023-03-27 | 第三人称经历、社区讨论与反例 | 原创自选社区内容 | 是 | 支持“社交影响力被包装为操纵”的争议 | 原帖以一名未成年人的行为外推类型；评论同时提到不成熟、个人品格、任何类型都可能操纵，故只能记录争议而非类型倾向 |
| ENFJ-S10 | evidence_source | [Overcoming people pleasing](https://www.reddit.com/r/enfj/comments/17wdnwe/overcoming_people_pleasing/) | r/enfj 讨好与设界线讨论 | Reddit | 2023-11-16 | 社区自述与互助 | 原创自选社区内容 | 是 | 支持边界学习和情境差异 | 有人描述说“不”时内疚但仍坚持，也有人把讨好归于童年经历；不能把创伤或讨好归因给类型 |
| ENFJ-S11 | evidence_source | [Anyone here conflict avoidant?](https://www.reddit.com/r/enfj/comments/1e7ibxl/anyone_here_conflict_avoidant/) | r/enfj 冲突处理分歧 | Reddit | 2024-07 | 社区自述与直接反例 | 原创自选社区内容 | 是 | 支持“回避、暂停、调停、正面对质”多样性 | 同帖有人回避冲突、需要降温后返回，也有人在协商失败后直接对质；不能形成固定冲突风格 |
| ENFJ-S12 | evidence_source | [What is ENFJ love language?](https://www.reddit.com/r/enfj/comments/1td165d/what_is_enfj_love_language/) | r/enfj 爱语讨论 | Reddit | 2026-05-14 | 社区自述与评论 | 原创自选社区内容 | 是 | 支持爱语高度分化 | 服务、礼物、触碰、时间、肯定、调侃均有自述，且评论直接指出爱语与 MBTI 不是同一体系 |
| ENFJ-S13 | evidence_source | [What does it mean by ENFJs can be intense when they’re in love?](https://www.reddit.com/r/enfj/comments/1fhakj8/what_does_it_mean_by_enfjs_can_be_intense_when/) | r/enfj 恋爱强度争论 | Reddit | 2024-09 | 伴侣经验与社区自述 | 原创自选社区内容 | 是 | 支持“明显投入、把伴侣当项目、友善被误读为调情”的分歧 | 同帖有人描述强烈投入和推动成长，也有人说活跃倾听只是友善、不是调情；单帖不能预测关系强度 |
| ENFJ-S14 | evidence_source | [Do some of you ever come across as shy or introverted?](https://www.reddit.com/r/enfj/comments/16kj7ig/do_some_of_you_ever_come_across_as_shy_or/) | r/enfj 安静/内向外观讨论 | Reddit | 2023-09 | 社区自述 | 原创自选社区内容 | 是 | 支持外显社交风格反例 | 有 ENFJ 自述常被认为内向、平静或害羞，且表达会随场合和熟悉度变化 |
| ENFJ-S15 | evidence_source | [How to avoid being ONLY the therapist friend?](https://www.reddit.com/r/enfj/comments/1nomrjm/how_to_avoid_being_only_the_therapist_friend/) | r/enfj “咨询师朋友”与互惠讨论 | Reddit | 2025-09-23 | 跨类型提问与 ENFJ 评论 | 原创自选社区内容 | 是 | 支持情绪劳动、互惠和界线争议 | 有人享受倾听，有人被固定为单向支持角色并选择设限或退出；“咨询师朋友”是角色标签，不是专业能力 |
| ENFJ-S16 | evidence_source | [An ENFJ can’t fix you](https://www.reddit.com/r/enfj/comments/1fg6v7b/an_enfj_cant_fix_you/) | r/enfj 反“拯救者”长帖 | Reddit | 2024-09 | 社区反刻板倡议 | 原创自选社区内容 | 是 | 支持对修复者/救世主叙事的直接反驳 | 明确区分支持与替他人改变，强调关系不是治疗、ENFJ 也不能拯救任何人 |
| ENFJ-S17 | evidence_source | [关于 ENFJ 的理想伴侣](https://www.douban.com/group/topic/253746964/) | 关于 ENFJ 的理想伴侣（欢迎各位友友补充） | 豆瓣 | 2021-11-24 起，多次更新至 2024 | 中文 ENFJ 自述与类型化关系长帖 | 原创个人长帖；含大量主观外推 | 是 | 仅支持作者自述、修正过程和中文社区类型化话语 | 作者同时描述不喜争执、倾向改变他人、需要认同、并非总是外向、会隐藏想法、个体差异大；对其他类型的贬褒和配对排序不作事实证据 |
| ENFJ-S18 | surface_record | [INFJ 眼里的 ENFJ](https://www.bilibili.com/video/BV15o4y1t78x/) | INFJ 眼里的 ENFJ（动态有省流版） | Bilibili | 2023-04-30 | 个人印象型视频页 | 原创剪辑，素材来源不明 | 是；标题和简介可读 | 仅用于英雄化包装审计 | 作者把 ENFJ 想象为奇幻小说中的骑士/国王，并明确标注是个人刻板印象；不能支持行为特征 |
| ENFJ-S19 | surface_record | [如何拿捏 ENFJ？亲密关系中的死穴](https://www.bilibili.com/video/BV1Et42187zw/) | 如何拿捏 ENFJ？亲密关系中的死穴 | Bilibili | 2024-02-26 | 类型化关系攻略视频页 | 原创视频；相关推荐混合多作者 | 是；标题、标签和相关推荐可读，正文/字幕未核验 | 仅用于“拿捏、死穴、雷区、怎么哄、真假喜欢”等攻略包装审计 | 页面证明此类标题可见；不能推断任何 ENFJ 偏好、弱点或正确追求策略 |
| ENFJ-S20 | surface_record | [ENFJ Type Manual](https://www.tumblr.com/alltypesofmbti/tagged/Myers%20Briggs) | 拟“ENFJ 使用说明/操纵者模式”片段 | Tumblr | 页面聚合；2026-08-30 访问 | 衍生类型博客与拟物梗 | 衍生内容 | 是；聚合正文可读 | 仅用于拟物化、功能论和操纵者包装审计 | 把 ENFJ 写成需要诊断和修复的设备，并设置“操纵者模式”；不得支持人格、道德或心理结论 |
| ENFJ-S21 | lead | [怎么追 ENFJ 宝剑哥](https://www.bilibili.com/video/BV1Ly411Y7HQ/) | MBTI 主人公人格 ENFJ 宝剑哥怎么追 | Bilibili | 2024-05-14 | 类型化追求攻略 | 原创视频 | 否；补检仍只见公开索引，直达页返回 412 | 仅供后续站内核验路线 | 搜索结果显示“主人公、宝剑哥、小太阳、怎么追”包装，但原页未稳定核验，不能作证据 |
| ENFJ-S22 | lead | [50 位 ENFJ 名人（小太阳）](https://www.bilibili.com/video/BV1tz411e7t5/) | 50 位 ENFJ 名人（小太阳） | Bilibili | 2020 | 名人判型/标题包装 | 原创视频，判型依据未知 | 否；直接重开失败 | 仅供传播路线 | 不核验名人类型，也不把“小太阳”当行为事实 |
| ENFJ-S23 | surface_record | [分享本 INFJ 对我认识的 MBTI 人格的印象](https://www.douban.com/group/topic/310668205/) | 娱乐向类型印象帖 | 豆瓣 | 2024-08-30 | 个人印象帖与评论 | 原创个人内容 | 是；2026-08-31 补检可展开正文和评论 | 仅用于中文“小太阳/追求和谐/活得累”包装审计 | 作者明确标注“纯主观、娱乐向、存在偏见与样本差异”；评论把 ENFJ 写成邻家大哥哥、小太阳、追求和谐且有包袱，不能支持行为特征 |
| ENFJ-S24 | lead | `site:zhihu.com ENFJ 刻板印象 小太阳 讨好 控制欲 恋爱` | 知乎中文原生页面检索路线 | 知乎 | 2026-08-30～31 检索；2026-09-08 补核 | 搜索路线 | 不适用 | 部分；本次已读 S35、S36 中文原回答 | 仅供其他原回答与评论补检 | 两条原回答不等于覆盖整道问答；S37、S38 仍保留英语镜像限制 |
| ENFJ-S25 | lead | `ENFJ 边界`（OpenCLI 小红书站内搜索） | 小红书目标检索路线 | 小红书 | 2026-08-30～31 历史失败；2026-09-08 站内补检 | 搜索路线 | 多作者结果聚合 | 部分；本次返回 8 条标题和日期，抽查笔记仅有标题与标签 | 仅供其他笔记正文、图文及评论补检 | 搜索已可用；不得继续概括为小红书零命中，但仍缺少可支持特征的叙述正文；S44 记录表层内容 |
| ENFJ-S26 | lead | `site:personalitycafe.com ENFJ stereotype manipulative people pleasing relationship` | PersonalityCafe 目标检索路线 | PersonalityCafe | 2026-08-30 检索 | 搜索路线 | 不适用 | 否 | 仅供后续补检 | 未取得可检查的目标原帖 |
| ENFJ-S27 | lead | `site:youtube.com/watch ENFJ stereotypes manipulative people pleaser savior complex` | YouTube 目标检索路线 | YouTube | 2026-08-30 检索 | 搜索路线 | 不适用 | 否 | 仅供后续补检 | 结果被泛化关系内容淹没，没有目标 ENFJ 视频正文或字幕 |
| ENFJ-S28 | surface_record | [温暖的宝剑哥生存指南](https://www.douyin.com/video/7308119489541950730) | 温暖的宝剑哥生存指南，infp 快去贴贴，没人不喜欢的 ENFJ | 抖音 | 2023-12-03 | 类型介绍短视频页与评论快照 | 原创视频；公开索引快照 | 部分；索引返回标题和若干评论，直达页当前为空 | 仅用于“小太阳/宝剑哥、被喜欢、帮助与付出”包装及同页分歧审计 | 标题英雄化 ENFJ；评论快照同时出现“喜欢帮助/被需要、付出落差”和“最 I 的 E、不想总做焦点”等互相牵制的说法，均不能证明类型行为 |
| ENFJ-S29 | surface_record | [INFP 与 ENFJ 为什么是最佳官配](https://www.douyin.com/video/7450111468663491898) | INFP 与 ENFJ 为什么是最佳官配 | 抖音 | 2024-12-19 | 类型配对短视频页与评论快照 | 原创视频；公开索引快照 | 部分；索引返回标题和若干评论，直达页显示 `Please wait` | 仅用于“最佳官配”包装与反对意见审计 | 评论快照既有浪漫化的照顾关系，也有“相处后根本不合适”的直接反对；不能支持配对规律或兼容性 |
| ENFJ-S30 | surface_record | [当大剑有一群 ENFP 好朋友](https://www.douyin.com/video/7459260582294785338) | 当大剑（ENFJ）有一群 ENFP 好朋友 | 抖音 | 2025-01-13 | 类型互动短视频页与评论快照 | 原创视频；公开索引快照 | 部分；索引返回标题和若干评论，直达页显示 `Please wait` | 仅用于“大剑、粘人、贴贴、快速和好”包装及判型不稳定风险 | 评论快照把亲密互动和冲突修复类型化，也有人描述测试结果改变；不能据此判断友谊方式、冲突时长或真实类型 |
| ENFJ-S31 | surface_record | [ENFJ 加金牛座类型文案](https://www.douyin.com/video/7503881932485659962) | ENFJ 加金牛座：默默付出、圆场、断联与情绪爆发 | 抖音 | 2025-05-13 | MBTI 与星座混合短视频文案 | 原创视频；公开索引快照 | 部分；索引返回标题文案，直达页当前为空 | 仅用于“付出/老好人/压抑后爆发”包装与概念混用审计 | 页面把 MBTI、星座、圆场、情绪压抑和断联捆绑成一套人设；不能支持任一概念之间的因果关系 |
| ENFJ-S32 | surface_record | [ENFJ 宝剑哥和 ISFJ 小护士适合恋爱吗](https://www.douyin.com/video/7362391582009576742) | ENFJ 宝剑哥和 ISFJ 小护士适合恋爱吗？ | 抖音 | 2024-04-29 | 类型配对短视频页与评论快照 | 原创视频；公开索引快照 | 部分；索引返回标题和若干评论，直达页当前为空 | 仅用于角色绰号、恋爱适配包装和评论分歧审计 | 评论快照包含互相冲突的配对判断和个人关系陈述；都不能代表 ENFJ×ISFJ 兼容性 |
| ENFJ-S33 | surface_record | [MBTI 十六型人格之 ENFJ](https://www.weibo.com/6437702791/Lqzm9AbmW) | MBTI 十六型人格之 ENFJ | 微博 | 2022-04-28 | 衍生类型介绍微博 | 原创微博文案；类型论来源未交代 | 是；正文可展开 | 仅用于公众形象、群体融入、包揽照顾和性别化角色包装审计 | 文案把重视公众形象、融入群体、替他人规划和“家里家外一把抓”集中到 ENFJ，并承认包揽责任可能让伴侣逃避责任；不能作为行为证据 |
| ENFJ-S34 | evidence_source | [我们第四次争论了什么](https://www.douban.com/group/topic/486760568/) | 沉船区｜我们第四次争论了什么 | 豆瓣 | 2026-05-09 | 自认 ENFJ 的朋友边界冲突自述与评论 | 原创个人长帖；自选社区内容 | 是；正文、楼主回复和多条评论可展开 | 支持“主动为朋友着想/试图劝说”与“未经请求的帮助/边界”之间的具体冲突及自我修正 | 楼主想帮助朋友理解关系风险，却被体验为教育和冒犯；评论要求点到即止、先设边界，楼主承认自己可能越界并接受修正。单帖不证明类型倾向，也不能把性别、依恋或价值观归因给 ENFJ |
| ENFJ-S35 | evidence_source | [中文原回答](https://www.zhihu.com/question/346876975/answer/1663670424)；[历史英语镜像](https://www.zhihu.com/en/answer/1663670424) | enfj容易形成讨好型人格吗？／I Like | 知乎 | 原回答发布及更新 2021-01-06；2026-09-08 读取 | 单条社区观点回答；历史镜像含其他回答 | 中文原回答；镜像为同源翻译，不算独立来源 | 是；OpenCLI 返回中文全文与元数据 | 仅支持存在反对 ENFJ 必然讨好的观点 | 该回答用“觉醒”前后区分讨好与不讨好，未提供方法或具体经历，不能证明成长因果。2026-08-31 多回答镜像中的选择性付出/远离叙述没有在本次单条原回答中复核，不作为本条当前窄结论 |
| ENFJ-S36 | evidence_source | [中文原回答](https://www.zhihu.com/question/328904871/answer/3293505989)；[历史英语镜像](https://www.zhihu.com/en/answer/3293505989) | ENFJ喜欢一个人是怎么样的？／俞谙 | 知乎 | 发布 2023-11-18；更新 2024-09-25；2026-09-08 读取 | 自认 ENFJ 的恋爱自述及多次修订 | 中文原回答；镜像为同源翻译 | 是；OpenCLI 返回全文、作者、发布日期及更新时间 | 支持关注、表达失误、犹豫、被拒及后续反思并存的单人叙事 | 作者既频繁关注对方也回避视线，自述说话失措；后来间接坦白被拒，称关系维持良好，修订中主张主动也要及时抽身、生活不只恋爱。文中性别期待及按类型解释不合适均为作者归因，不采信为类型规律 |
| ENFJ-S37 | evidence_source | [ENFJ 与 INFJ 的关系如何](https://www.zhihu.com/en/answer/3566735631) | How are ENFJ and INFJ relationships? | 知乎 | 约 2024；2026-08-31 访问 | 多回答关系经验与反泛化提醒 | 知乎原问答的英语镜像；平台翻译 | 是；多条回答可展开 | 支持关系表达、社交能量与内在开放程度存在差异，并保留“类型不能预测所有人”的直接提醒 | 同页既有热烈触碰和赞美的伴侣描述，也有自认 ENFJ 者明确反对按类型预测、描述低能量相处和不易让人接近内心；不能推断 ENFJ×INFJ 兼容性或触碰同意 |
| ENFJ-S38 | surface_record | [为什么讨厌 ENFJ](https://www.zhihu.com/en/answer/3182580339) | Why do you dislike ENFJ? | 知乎 | 约 2023；2026-08-31 访问 | 负面类型评价问答 | 知乎原回答的英语镜像；平台翻译 | 是；回答可展开 | 仅用于“虚伪、表演性、肤浅、洗脑、NPD”等负面标签和诊断化风险审计 | 回答把道德、智力、社会地位、精神障碍和具体个案同时归因给 ENFJ，缺少可核验判型与替代解释；不得支持人格、诊断或操纵能力结论 |
| ENFJ-S39 | surface_record | [如何发展八维弱势功能](https://www.douban.com/group/topic/292697993/) | 如何发展八维弱势功能？分享下 | 豆瓣 | 2023-08-02 | 功能论长帖与第三人称观察 | 原创个人内容；理论与个案混合 | 是；正文可展开 | 仅用于“换位思考、虚伪、假性共情、享受被需要、道德绑架”等功能论包装审计 | 作者一方面声明功能不代表性格、三观或素质，另一方面又把对一名 ENFJ 的观察外推为 Fe 机制；内部矛盾正说明该材料不能作为行为证据 |
| ENFJ-S40 | surface_record | [小画家崇拜宝剑哥](https://www.douyin.com/video/7626700845640732665) | 小画家崇拜宝剑哥！ISFP×ENFJ 救赎组 | 抖音 | 2026-04-09 | 配对短视频页与评论 | 原创视频；评论为自选平台内容 | 是；正文和多条评论快照可展开 | 仅用于“救赎组、宝剑哥、真爱照顾、理想行为脚本”包装与反对意见审计 | 评论既把早起陪伴、买早餐和察觉情绪解释为真爱/理想 ENFJ，也有人直接说“避雷宝剑哥”或反对“宝剑才不会没分寸”；不能支持配对、读心或正确照顾方式 |
| ENFJ-S41 | lead | [Bilibili：ENFJ 恋爱 宝剑哥 小太阳](https://search.bilibili.com/all?keyword=ENFJ%20%E6%81%8B%E7%88%B1%20%E5%AE%9D%E5%89%91%E5%93%A5%20%E5%B0%8F%E5%A4%AA%E9%98%B3) | Bilibili 站内补充检索路线 | Bilibili | 2026-08-31 检索 | 站内搜索结果 | 多作者结果聚合 | 部分；OpenCLI 返回 15 条标题，抽样直达页返回 412 | 仅供后续逐条核验 | 命中“朝阳组、救赎组、爱情博弈、旅行搭子、典型 ENFJ 的一天”和 MBTI+星座内容；在原视频正文、字幕或评论稳定核验前不能升级 |

| ENFJ-S42 | evidence_source | [What ENFJ stereotype do you not relate to at all?](https://www.reddit.com/r/enfj/comments/1ssx914/what_enfj_stereotype_do_you_not_relate_to_at_all/) | 不认同的 ENFJ 刻板印象 | Reddit | 精确发布日期未核验；2026-09-08 访问，正文显示 5mo ago | 社区自述与评论 | 原创自选社区内容 | 是；正文及多条评论可读 | 仅支持外显社交、领导意愿、讨好及友善误读的个体差异 | 有人不认同人缘广或聚会中心，有人愿意直接表达负面意见却不愿领导；友善与调情的定义不一致。操纵争论同时包含否认及承认曾施加内疚压力后改正的自述；不能由类型判断意图 |
| ENFJ-S43 | evidence_source | [Not the extreme altruist?](https://www.reddit.com/r/enfj/comments/18hv1td/not_the_extreme_altruist/) | 对极端利他人设的质疑 | Reddit | 精确发布日期未核验；2026-09-08 访问 | 社区自述与评论 | 原创自选社区内容 | 是；短 URL 超时后完整 URL 可读 | 仅支持帮助与自我优先可以并存的反例 | 作者自述重视自身需要，且刚在 INFJ/ENFJ 间作出自我判断；评论有帮助但保持界线、不强迫他人接受支持的经验。类型认定不稳定，功能超能力及九型理论解释不予采信 |
| ENFJ-S44 | surface_record | [笔记永久标识](https://www.xiaohongshu.com/explore/6a6764440000000001033bf0) | enfj人格边界感有没有这么强 有同款的嘛／brighten | 小红书 | 搜索返回 2026-07-27；2026-09-08 读取 | 标题和话题标签 | 原创笔记入口；图像/正文来源未核验 | 部分；带平台访问参数的 URL 取得标题及标签；这里保留无临时参数的标识链接，不保证匿名可打开 | 仅证明边界强的反刻板标题可见 | 未取得可检查的叙述正文或图片内容，不能支持作者边界行为；与搜索中的边界弱、类型分阶排行标题并存，仅说明包装分歧 |
| ENFJ-S45 | surface_record | [视频](https://www.bilibili.com/video/BV1sm421M7KZ/) | MBTI主人公人格ENFJ宝剑哥怎么追？／梁老师SIMON（字幕自报） | Bilibili | 发布日未复核；2026-09-08 读取 | 类型攻略字幕 | 原视频字幕；生成方式未确认，有明显转写错误 | 是；166 段时间戳文本，未听音轨 | 仅用于救世主、读心、操纵与性别化攻略风险审计 | 约 89–179 秒把示弱与导师/照顾需求相连；约 189–229 秒把接受控制包装为亲密入口；约 293–315 秒以类型解释控制双标。均不是行为事实或有效关系建议，错字不作逐字引文 |
| ENFJ-S46 | evidence_source | [原视频评论区](https://www.bilibili.com/video/BV1sm421M7KZ/) | 三月的小兔先生评论；rpid 222896135696 | Bilibili | 返回时间 2024-05-24 01:12（时区未注明）；2026-09-08 读取 | 自认 ENFJ 的评论自述 | 原创自选评论；受同页视频议题诱导 | 是；comments API 返回完整该条文本 | 仅支持单人情绪支持不互惠的经验表达 | 作者描述经常给身边人打气，自己疲惫却未被察觉，继而主张减少介入。单条评论无法验证判型、耗竭原因或对方视角；同页 AI 摘要不属于本条证据 |

## 5. 中立特征—证据表

| feature_id | neutral recurring representation | evidence source IDs | independent clusters | counterevidence | discourse confidence | creative value | risk/qualification | permitted use |
|---|---|---|---:|---|---|---|---|---|
| ENFJ-F01 | 在线叙事反复把温暖、支持他人、关注群体气氛和维持和谐写成 ENFJ 的显眼形象。 | ENFJ-S03、ENFJ-S08、ENFJ-S17 | 3 | ENFJ-S01 明确指出类型不描述完整人格；ENFJ-S14、ENFJ-S17 显示外显风格可安静、谨慎或带疏离感。 | 跨平台反复出现 | 高 | “小太阳、邻家大哥哥、情商担当”的平台包装，以及抖音“没人不喜欢”和微博“家里家外一把抓”的文案（ENFJ-S19、ENFJ-S21～ENFJ-S23、ENFJ-S28、ENFJ-S33），会把情绪稳定、善良和照顾义务捆绑在一起。 | 后续只能使用可观察的支持、邀请、协调或表达关心；不得预设永远热情、善良、情商高或负责所有人的气氛。 |
| ENFJ-F02 | 鼓励他人成长、关注潜力、主动提供建议或帮助，是官方、类型站和社区关系叙事中重复出现的“导师/促进者”表述。 | ENFJ-S03、ENFJ-S04、ENFJ-S13、ENFJ-S16、ENFJ-S34 | 4 | ENFJ-S16 明确区分支持与替别人改变；ENFJ-S13 同帖把“被当项目”写成可能令人不适的伴侣体验；ENFJ-S34 的楼主也在收到越界反馈后承认无权替朋友决定并接受修正。 | 跨平台反复出现但分歧明显 | 极高 | “主人公/骑士/国王”和救世主包装（ENFJ-S18、ENFJ-S20、ENFJ-S39）容易把建议升级为替对方决定，并把拒绝帮助解释为“不想成长”。 | 后续只允许先询问是否需要建议、尊重对方目标与拒绝；不得把改造伴侣、强迫成长或专业治疗能力写成正确解法。 |
| ENFJ-F03 | 恋爱中较明显地表达好感、投入时间与注意力、较早谈长期或共同愿景，被商业类型页和社区自述包装为“爱得很用力”。 | ENFJ-S04、ENFJ-S07、ENFJ-S13、ENFJ-S36 | 3 | ENFJ-S13 同帖有人把活跃倾听和友好误读为调情；ENFJ-S17 有不外向、隐藏想法和关系表达差异的自述；ENFJ-S36 的作者被拒后后退并在后续修订中反思早期表达。  S36 中文原文还包含回避视线与表达失误，不能预设情商高或表达总是顺畅。 | 跨平台重复且存在节奏反例 | 高 | “强烈”不能自动等于真爱、忠诚、健康承诺，也不能掩盖节奏压力、爱轰炸、控制或对方没有同等兴趣的事实；ENFJ-S40 的“真爱照顾脚本”也只是一种平台投射。 | 后续可表现主动表达和共同愿景，但必须允许慢热、拒绝、不确定与节奏协商；关系结果由具体行为决定。 |
| ENFJ-F04 | ENFJ 社区中的示爱与被爱偏好高度多样，触碰、质量时间、肯定、服务、礼物、情绪支持和玩笑式互动均有自述。 | ENFJ-S06、ENFJ-S12 | 2 | ENFJ-S12 的同帖差异本身即是反例，且评论直接指出爱语与 MBTI 不是同一体系；表达和接收偏好也可能不同。 | 重复且分歧显著 | 高 | 类型站的触碰比例来自站内自选调查，抽样框与代表性不足；不得由类型标签推断同意或肢体边界。 | 后续必须由角色明确表达并与对方协商偏好；任何触碰都需要情境中的同意，不能把某种爱语设为类型密码。 |
| ENFJ-F05 | 主动帮助、优先照顾他人、难说不或把对方问题带回自己身上，是“可靠付出”与“无边界讨好”之间反复争论的叙事。 | ENFJ-S05、ENFJ-S08、ENFJ-S10、ENFJ-S15、ENFJ-S17、ENFJ-S35、ENFJ-S42、ENFJ-S43 | 4 | ENFJ-S08 有明确“不讨好”的 ENFJ 反例；ENFJ-S10 显示边界可学习且可能与成长经历有关；ENFJ-S15 有直接设限和退出单向关系的自述；ENFJ-S35 中文原回答明确反对必然讨好，但其“觉醒”解释不是因果证据。  S42、S43 补充自我优先、直接表达及有界线的帮助反例。 | 跨平台反复出现且冲突显著 | 极高 | 讨好、创伤、低自尊、依恋和照顾者角色不能归因给 MBTI；抖音和豆瓣表层文案把“被需要、默默付出、圆场、假性共情”串成类型人设（ENFJ-S28、ENFJ-S31、ENFJ-S39），仍不能把无条件付出写成义务。 | 后续可使用“帮助别人 vs 保护自身资源”的一般张力，但必须让拒绝、休息、互惠和改变主意均为合法选择。 |
| ENFJ-F06 | “心理咨询师朋友/安全倾听者”是可见的社区角色标签；同一话语也反复要求双向关注、明确界线和把专业治疗留给专业人员。 | ENFJ-S06、ENFJ-S15、ENFJ-S16、ENFJ-S46 | 3 | ENFJ-S15 有喜欢倾听、只在有余力时倾听、直接拒绝单向关系等多种立场；ENFJ-S16 明确说 ENFJ 不能修复他人。  S46 描述持续鼓励他人但自身疲惫未被察觉；仅为单人自述。 | 重复并伴随强反叙事 | 极高（风险校正） | 该标签会把共情、读心、治疗、全天候可用和保密责任混为一谈，也会抹掉倾听者自己的需要。 | 后续只能写询问、倾听、确认需求和建议寻求专业支持；不得赋予诊断、治疗、读心或无限情绪承载能力。 |
| ENFJ-F07 | 追求和谐、不喜欢争执、先调停或暂停，是一种常见冲突叙事；直接指出问题、坚持界线和在协商失败后对质也有清晰反例。 | ENFJ-S02、ENFJ-S05、ENFJ-S11、ENFJ-S17、ENFJ-S34 | 4 | ENFJ-S11 同帖同时存在回避与强硬对质；ENFJ-S05 把健康边界写成明确互惠和期待；ENFJ-S34 则记录激烈争论、道歉、公开求助和接受批评，而非维持表面和平。 | 跨平台反复出现且分歧明显 | 高 | “和谐”容易被误写成永不生气、必须调停，或用沉默、附和、隐瞒来避免冲突；这些行为需要按具体后果判断。 | 后续可使用有说明、有时限、有返回约定的暂停，或清晰而尊重的对质；不得奖励压抑、无期限失联或表面和平。 |
| ENFJ-F08 | 调整沟通方式、理解对方反应并试图影响局面，在社区中同时被叙述为有效连接、善意说服、虚伪或操纵。 | ENFJ-S05、ENFJ-S08、ENFJ-S09、ENFJ-S34 | 3 | ENFJ-S08 有强调意图透明、不滥用影响力的自述；ENFJ-S09 的评论把不成熟、年龄和个人品格列为替代解释；ENFJ-S34 的楼主承认“为你好”可能越界并接受外部修正。 | 跨平台重复争议，无法形成行为共识 | 极高（风险校正） | “会读人所以会操纵”把社交观察浪漫化成读心能力；ENFJ-S38、ENFJ-S39 又把虚伪、洗脑、NPD、假性共情和道德绑架混为类型标签，可能淡化实际胁迫、撒谎和煤气灯效应。  S45 字幕把接受控制与亲密关系相连，属应排除的类型化攻略；不能把包容胁迫写成关系义务。 | 后续只按可观察行为区分透明劝说、协商、压力、隐瞒与胁迫；不得由 ENFJ 标签决定善恶、可信度、精神诊断或操纵能力。 |
| ENFJ-F09 | 安静、温和、谨慎、在熟人或特定情境中才更外放，与“永远健谈、社交中心、小太阳”的固定外向形象并存。 | ENFJ-S01、ENFJ-S14、ENFJ-S17、ENFJ-S37、ENFJ-S42 | 4 | ENFJ-S03 的确保留外向温暖的官方工作叙事，但 ENFJ-S01 说明偏好不等于固定外显行为；ENFJ-S37 有自认 ENFJ 者描述低能量相处和不易向人开放内心。  S42 有不认同聚会中心、社交广泛的直接自述。 | 跨平台反复出现的叙事与反叙事 | 高 | Bilibili、豆瓣的“小太阳、情商担当”包装会把社交熟练、音量、精力和情绪状态混为一体；抖音同一索引快照又出现“最 I 的 E、不想总做焦点”（ENFJ-S19、ENFJ-S21～ENFJ-S23、ENFJ-S28、ENFJ-S41），说明传播包装也不一致。 | 后续允许场合依赖的社交能量与表达强度；不得用安静、害羞、需要独处或社交失误判定“假 ENFJ”。 |
| ENFJ-F10 | “Protagonist/主人公、英雄、骑士、国王、小太阳”是高辨识度但高度浪漫化的 ENFJ 传播包装。 | ENFJ-S07 | 1 | ENFJ-S01 否定用类型描述完整人格或道德；ENFJ-S08、ENFJ-S09 显示社区内部也讨论自利、控制与普通缺点。  S42 有明确不愿领导或成为控制者的自述；这是同一 Reddit 簇的反例。 | 跨平台包装可见，行为支持低 | 中（仅作预期与风险识别） | 中文表层记录 ENFJ-S18～ENFJ-S23、ENFJ-S28～ENFJ-S33、ENFJ-S38～ENFJ-S41 继续放大“宝剑哥、大剑、贴贴、官配、救赎组、朝阳组、拿捏、内耗、殉道者”等英雄化、攻略化和配对化人设；它们不能证明领导力、善良、命运中心或被追求方式。 | 仅可作为他人投射、角色误读或待拆解的网络人设；不得决定能力、道德、评分、关系成败或结局。 |
| ENFJ-F11 | “ENFJ×INFP 黄金配对”在社区关系话语中可见，同时伴随对配对表、类型排序和按类型择偶的直接不满或自我修正。 | ENFJ-S08、ENFJ-S17 | 2 | ENFJ-S08 有明确反感黄金配对的评论；ENFJ-S17 的作者多次改写排序，最终也承认样本、判型、依恋和个体差异比刻板印象更关键。 | 低置信、社区配对梗 | 低（仅作风险识别） | 抖音把 ENFJ×INFP 称为“最佳官配”、询问 ENFJ×ISFJ 是否适合，并把 ENFJ×ISFP 称作“救赎组”；评论快照又直接互相否定（ENFJ-S29、ENFJ-S32、ENFJ-S40）。配对梗会把真实的兴趣、价值、边界、安全和沟通替换为四字母命定论。 | 只能作为被质疑的网络梗或角色先入之见；不得决定兼容性、正确选项、评分、关系结果或结局。 |

## 6. 反例与争议审计

| disputed trope | supporting discourse | counterevidence retained | bounded conclusion |
|---|---|---|---|
| ENFJ 都是善良、可靠、永远照顾他人的小太阳 | ENFJ-S03、ENFJ-S07 的温暖/主人公包装；ENFJ-S19、ENFJ-S21～ENFJ-S23、ENFJ-S28、ENFJ-S33 的中文表层包装 | ENFJ-S01 说明类型不描述完整人格和道德；ENFJ-S08、ENFJ-S09 有普通缺点、边界和伤害经验的争论；ENFJ-S28 的表层评论快照也出现不愿总做焦点和付出落差 | 只能确认正向人设可见；不能由类型判断善良、可靠、情商或心理状态 |
| ENFJ 都是虚伪、操纵者或会读心 | ENFJ-S08、ENFJ-S09 的社区标签争论；ENFJ-S20、ENFJ-S38、ENFJ-S39 的“操纵者模式、虚伪、洗脑、假性共情”包装 | ENFJ-S08 有意图透明、真诚帮助和明确不操纵的自述；ENFJ-S09 反复提出年龄、成熟度和个人品格等解释；ENFJ-S34 记录越界反馈、道歉与修正，而不是读心成功 | 只能按具体撒谎、压力、隐瞒、胁迫和修复行为判断；类型不提供操纵能力、精神诊断或免责理由 |
| ENFJ 有救世主情结，能把伴侣修好 | ENFJ-S04、ENFJ-S13 中“支持成长/当项目”叙事；ENFJ-S18、ENFJ-S39、ENFJ-S40 的英雄/被需要/救赎包装 | ENFJ-S16 直接否认关系是治疗，ENFJ-S05 要求分清对方问题与自身边界；ENFJ-S34 的楼主在朋友冲突后接受“点到即止、不能替别人决定”的批评 | 可写“想帮助”与“对方是否需要”的冲突，不能赋予拯救、诊断、治疗或强迫改变的正当性 |
| ENFJ 都是讨好型、没边界 | ENFJ-S05、ENFJ-S10、ENFJ-S35 中确有用力付出、无边界帮助和说不后的内疚叙事 | ENFJ-S08 有明确不讨好反例；ENFJ-S10、ENFJ-S15 显示设限能力会变化且与经历相关；ENFJ-S35 中文原回答否认必然讨好，其“觉醒”说法不构成成长因果证据 | 这是分歧显著的在线叙事，不是类型规则，更不是创伤或依恋诊断 |
| ENFJ 永远外向、快乐、健谈、能量充沛 | 官方/商业页的外向温暖叙事和中文“小太阳”包装 | ENFJ-S14 有常被认为内向、安静的自述；ENFJ-S17 描述不总外向、隐藏想法；ENFJ-S01 说明偏好不固定行为 | 允许社交风格随场合变化，不能以表现安静或低落排除类型，也不能由笑容判断心理健康 |
| ENFJ 天生是心理咨询师朋友 | ENFJ-S06、ENFJ-S15 中倾听和情绪支持叙事 | ENFJ-S15 有拒绝单向情绪劳动和设置界线的自述；ENFJ-S16 明确区分支持与治疗 | 只允许具体倾听和互惠协商；专业能力、全天候可用和保密责任不能由类型推断 |
| ENFJ 都回避冲突、只想维持表面和平 | ENFJ-S03、ENFJ-S17 的和谐/不喜争执叙事；ENFJ-S11 中确有回避自述 | ENFJ-S11 同帖有暂停后沟通、调停和直接对质；ENFJ-S05 强调明确期待与互惠；ENFJ-S34 记录争论、道歉、公开求助和接受批评 | 冲突风格是情境性且个体化的；任何回避、强硬或修复都按具体行为与后果判断 |
| ENFJ 爱得越强烈就越真诚、越适合长期关系 | ENFJ-S04、ENFJ-S07、ENFJ-S13、ENFJ-S36 的投入和主动表达叙事；ENFJ-S40 的“真爱照顾”包装 | ENFJ-S13 同帖有友善被误读为调情、把伴侣当项目和需要边界的反例；ENFJ-S17 记录隐藏想法和表达差异；ENFJ-S36 记录被拒后后退与后续自我修正 | 强烈表达只是一种话语，不能替代同意、稳定行动、尊重边界和持续修复 |
| ENFJ 的爱语固定为触碰、肯定或服务 | ENFJ-S06 的类型站叙事 | ENFJ-S12 同帖出现所有主要爱语及调侃式表达，并直接指出爱语与 MBTI 不等同 | 只能支持表达方式多样且需要询问，不支持固定答案或未经同意的触碰 |
| ENFJ 与 INFP 是命定黄金配对 | ENFJ-S17 的理想伴侣排序及网络配对话语；ENFJ-S29 的“最佳官配”标题包装 | ENFJ-S08 直接反感黄金配对；ENFJ-S17 自身多次改写判断并承认个体差异和其他变量；ENFJ-S29 的评论快照也有明确不适合的反对意见 | 只保留为低置信社区梗；不能决定兼容性、剧情奖励、关系结果或结局 |

## 7. 代表性统计分支

本次任务不要求代表性统计，故不填写统计表，也不作任何 ENFJ 总体比例、行为率或关系成功率判断。

- 16Personalities 页面出现的“最可能”“76%”“90%”或人口占比等数字来自该站内容体系；当前页面没有提供本任务所需的完整抽样框、分母、田野日期、非应答情况和代表性证明，故不进入特征证据或总体推断。
- Reddit、豆瓣、知乎、Bilibili、抖音、微博、Tumblr 的发帖、回复、点赞、收藏、播放和搜索排名均来自自选参与与平台算法，不能转换成 ENFJ 人群比例。
- 若未来需要现实频率或心理关联，必须另行设定目标人群、抽样方法、有效测量、分母和不确定性；本文件不满足该用途。

## 8. 局限与覆盖

- **语言与地域**：只覆盖中文和英文公开网页；未系统覆盖日语、韩语及其他语言社区，也未按国家、年龄、性别或文化分层。
- **平台覆盖**：官方、商业类型站、Reddit、豆瓣及部分知乎中文原回答可读；Bilibili 新增字幕与评论，小红书新增标题与标签。抖音和微博仍以既有表层记录为主；YouTube、PersonalityCafe 及小红书叙述正文不足。
- **访问限制**：2026-08-31 复检时两个 Browser Bridge profile 均已连接，但 doctor 仍因多 profile 选择异常报错。显式指定旧 profile 后 Bilibili 搜索成功；小红书/抖音报 `No SW` 或 `Detached`，知乎报未登录或 `No SW`，微博两次无结果。部分 Bilibili 直达页仍返回 412；抖音仅部分直达页可展开。只有成功展开且符合来源标准的原页升级为 `evidence_source`；索引摘要、失败页和未核验字幕均未支持特征。
- **样本偏差**：社区材料来自愿意公开讨论 MBTI 的自选用户；无法验证其 best-fit type，也无法控制年龄、文化、关系经历、依恋、创伤、神经多样性或心理健康。
- **来源依赖**：16Personalities 系列属于同一内容体系；同一 `r/enfj`、豆瓣、知乎或 Bilibili 的多帖分别按一个社区簇审计；Bilibili 推荐列表、抖音同类短视频与微博类型文案可能复用标题模板、商业账号内容或既有类型文案，不算独立行为证据。知乎 `/en/answer/` 页面是原问答的英语镜像和平台翻译，不等于完整中文原页、全部回答与评论。
- **商业与算法包装**：16Personalities 的“Protagonist”品牌，Bilibili 的“拿捏/死穴/雷区/怎么追/朝阳组”，以及抖音的“宝剑哥/贴贴/官配/救赎组/适合恋爱”等标题机制会放大高辨识度标签。可见度和互动量不代表真实性或普遍性。
- **概念混淆**：在线内容经常混用 MBTI、认知功能、爱语、依恋、讨好、创伤、焦虑、抑郁、共情和道德评价。本文件没有证据把这些概念等同或由 ENFJ 推断。
- **中文证据不均**：两条知乎原回答已通过 OpenCLI 核验；新增一条 Bilibili 情绪支持自述。它们仍是少量自选表达，不能代表中文 ENFJ。小红书已取得 8 条标题与一篇标签内容，未取得叙述正文或图中文字；视频攻略字幕只作风险材料。
- **未解决分歧**：讨好、冲突风格、社交能量、情绪开放、爱语、浪漫主动、成长建议和边界均存在直接反例，不能用“多数帖印象”强行消除。
- **产品限制**：本次研究更新不自动传播到已有模型、题目、结局或运行时代码；研究证据也不能反向由既有剧情证明。

## 9. Stage-01 审计

2026-09-08 OpenCLI 补充：S35、S36 已用中文原回答核验，保留原 ID 和历史镜像链接；S44、S45 仅作表层记录，S46 为窄自述证据。S46 与视频同页，不能与 S45 计算为独立作者/语境重复；在特征表中只新增 Bilibili 一个来源簇。

2026-09-08 增量审计：保留历史来源 ID 和核验日期，新增 S42、S43；历史平台访问记录不代表当前登录或桥接状态。S34 本次打开失败，S40 本次无正文，均未伪装成重新核验成功。新增两帖只补强既有反例，不增加跨平台独立簇数。下列历史全文覆盖项按原记录日期理解。

- [x] 每个特征的 `evidence source IDs` 只引用 `evidence_source`。
- [x] `surface_record` 只进入包装/风险分析，`lead` 只进入后续检索路线。
- [x] 抖音、微博衍生文案及知乎负面标签页没有进入任何特征的 `evidence source IDs`；小红书标题/标签归为表层记录，叙述正文及剩余知乎原回答/评论缺口仍按 `lead` 保留。
- [x] 历史豆瓣与知乎来源保留原访问日期；本次两条知乎中文原文已核验；Bilibili S41 搜索路线仍为 `lead`，S45 字幕为表层记录，S46 评论为窄证据。
- [x] Reddit 多帖、16Personalities 系列和 Bilibili 推荐列表没有被重复计算为多个独立来源簇。
- [x] 操纵、虚伪、救世主、讨好、冲突回避、永远快乐等负面或浪漫化标签均保留反例。
- [x] 未把站内调查、帖子数、回复数、点赞量、播放量或搜索排名表述为人群比例。
- [x] `主人公/小太阳` 与 `ENFJ×INFP 黄金配对` 被限定为包装或低置信梗，明确禁止决定能力、道德、评分、关系成败或结局。
- [x] 证据、研究解释和开放问题已分开。
- [x] 本文件未创建行为阶段、冲突维度、状态变量、事件、对白、选项、分数或结局。

## 10. Stage-01 交接

### 已有证据

- 支持度较稳的在线叙事是：外向温暖/支持形象、鼓励成长、明显投入关系、帮助他人与维持和谐。它们描述话语中的显眼形象，不描述现实 ENFJ 的发生率或必然行为。
- 最有创作价值但也最需要边界的是“支持成长 vs 替对方决定”“可靠付出 vs 无边界讨好”“调停和谐 vs 压抑冲突”“明显投入 vs 节奏压力”。这些都必须保留对方同意、互惠和退出权。
- 爱语、冲突处理、社交能量、情绪开放和边界能力均有直接反例，不能预设固定答案。
- 中文社区新增材料进一步显示：主动帮助可能被体验为越界，明显表达也可以在被拒后后退；“讨好”和“永远外向”在同一平台内部都有直接反对意见。
- “操纵者、救世主、心理咨询师、小太阳、主人公、骑士/国王、黄金配对”主要是争议标签或高辨识度包装，不能作为能力、道德、诊断或关系机制的可靠基础。

### 研究解释（非证据本身）

- 本次 S45 的控制/救世主攻略与 S36 的犹豫和表达失误、S43 的拒绝强迫支持、S46 的互惠不足相互校正：不能把表演脆弱、接受控制或无限承接情绪当作 ENFJ 关系规律。S45 只影响风险审计，不支持特征证据列。

- 本轮最强的共同风险不是某个 ENFJ 性格，而是网络内容把普通关系问题类型化：把关心写成拯救，把观察写成读心，把建议写成改造，把付出写成义务，把热烈写成真爱证明，把类型配对写成命定兼容。
- 对创作最安全的用法，是让类型叙事成为角色或玩家可能带入的预期，再由可观察行为、明确询问、同意、互惠、边界和修复决定关系结果。
- 国内平台补检显示“宝剑哥/小太阳/主人公/贴贴/官配/救赎组/朝阳组/拿捏/内耗型”具有本地辨识度，评论和社区回答也会直接反驳“最佳配对、永远外向、必然讨好”等说法。中文自述可补充具体边界冲突，但大部分短视频材料仍是表层传播记录，只适合识别玩家预期、分歧和风险。

### 开放问题

- 小红书仍需核验图文正文和评论；知乎 S37、S38 及其他回答、完整评论尚缺。Bilibili 本次只核验一个视频字幕和 5 条评论，其他视频和楼中楼未覆盖；抖音搜索再次发生 Detached 错误。当前浏览器桥接检测已通过，不能再把所有缺口统称为桥接未连接。
- “主动支持成长”与普遍的照顾者角色、职业背景、性别社会化或依恋经验如何区分，当前材料不能回答。
- “调整沟通方式”何时被体验为体贴、说服、压力或操纵，需要更多双方视角、具体行为和后果，而不是功能论标签。
- 如后续更新 Stage 02，应对照本表与既有模型逐项核验；本次没有生成或修改行为模型、候选事件或生产内容。


## 11. 本次 OpenCLI 调用汇总（2026-09-08）

本次延续 Stage-01，按平台记录所有实际查询（含详情读取和失败）；预检不计次数。已有原始来源缺口明确，因此直接使用原平台，不另请求 AI 生成综述。

| site | query | count | status |
|---|---|---:|---|
| 小红书 | ENFJ 边界；笔记 6a6764440000000001033bf0 | 2 | 搜索成功；笔记部分内容返回但退出码 1，未取得叙述正文；达到上限，停止更多读取 |
| 知乎 | 回答 1663670424；回答 3293505989 | 2 | 两次成功；达到上限，未读其他回答或评论 |
| Bilibili | BV1sm421M7KZ 字幕；同视频评论 | 2 | 两次成功；排除 AI 摘要；达到上限，未读其他视频或楼中楼 |
| 抖音 | ENFJ 反刻板 边界 | 1 | Detached while handling command；未返回结果，未无依据重试 |

新增材料没有产生行为模型或事件。小红书表层覆盖改善不等于新增行为证据；知乎中文原文与其英语镜像不重复计数；Bilibili 同页字幕、评论和 AI 摘要不作为三个独立来源。
