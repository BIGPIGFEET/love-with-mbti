# ESFJ 网络刻板印象证据研究（Stage 01）

研究日期：2026-09-08（含同日 OpenCLI 补充）。用途：Love with MBTI 的后续创作研究交接。状态：Stage-01 台账与边界审计完成；已补入中文一手短自述，中文长文及多社区自述覆盖仍不足。

## 1. 研究边界与来源计划

研究的是中文、英文互联网对 ESFJ 的表述及自认 ESFJ 用户的经验叙述，不是心理诊断、类型真伪鉴定或现实人口特征。本次不提出任何人口占比、行为发生率、配对成功率或性别差异结论；未开启代表性统计分支。

检索前按三类来源规划：类型参考站点、社区一手自述、中文公共社交/视频平台。以日常关怀、关系回应、互惠、个人空间及反刻板印象为关注点。日期不设硬性下限，检索材料跨度约 2019—2026；未做平台全量采样或热度趋势比较。英文用户地域未知，不能称为美国样本；中文页面不等于中国人群样本。

检索使用公开网页搜索、直接页面打开，以及 OpenCLI 通过已连接浏览器读取公开搜索结果、回答片段、笔记文字和视频评论。搜索摘要不能替代原文；视频页面标题可读不代表视频已观看。下文的解释均限于网络叙事。官方类型描述也只证明该机构如何描述类型，不证明人群事实。

## 2. 查询台账

所有查询及访问均执行于研究日期。结果栏记录被选入审计的材料，未逐一收录无关搜索结果。

| query_id | platform/source cluster | query or route | search round | result | access/status | fallback | notes |
|---|---|---|---:|---|---|---|---|
| ESFJ-Q01 | Reddit/自述 | `ESFJ site:reddit.com/r/ESFJ people pleasing boundaries stereotypes` | 1 | S03、S06、L02 等 | 搜索可见；随后直接打开 | 错误页改用规范标题路径或去尾斜线 | 不将搜索摘要直接升级 |
| ESFJ-Q02 | 中文搜索/知乎及类型页 | `ESFJ 人格 刻板印象 社交 照顾 知乎` | 1 | S02、L01 | 知乎跳转安全验证；S02 正文可读 | 保留知乎缺口，使用类型页但不冒充中文自述 | 未采纳聚合梗百科和相似域名站点 |
| ESFJ-Q03 | 官方类型参考 | `ESFJ site:myersbriggs.org` | 1 | S01 | 原页 ESFJ 小节可读 | 无 | 仅采用该小节 |
| ESFJ-Q04 | Bilibili/视频 | `site:bilibili.com/video ESFJ 刻板印象` | 2 | S08 | 原页标题、作者、日期可读 | 未取到字幕，降为表层记录 | 不推断视频论点 |
| ESFJ-Q05 | 抖音/视频 | `site:douyin.com ESFJ 讨好` | 2 | 本轮合并返回未提供可采用目标结果 | 未取得可核验原文 | 第三轮改为 video 精确域路径 | 不声称平台没有相关讨论 |
| ESFJ-Q06 | Reddit/关系 | `site:reddit.com/r/ESFJ relationships appreciation boundaries alone time` | 2 | S04、S05、S07、L03 | S04/S05 原文可读；S07 短路径错误 | S07 改完整标题路径后正文可读 | 追查回应、互惠及空间分歧 |
| ESFJ-Q07 | 抖音/视频 | `site:douyin.com/video "ESFJ"` | 3 | L04、L05 | 搜索可见标题/评论；直接打开仅一行空壳 | 保留 lead，不以摘要建立特征 | 无视频观看、无完整评论采集 |
| ESFJ-Q08 | Reddit/反例 | `site:reddit.com/r/ESFJ "traditional" "not"` | 3 | L02、L06 | 两个原帖均未成功打开 | 使用 S03 对僵化标签的反驳，明确传统观念缺口 | 不用未读自述证明政治/宗教倾向 |
| ESFJ-Q09 | 直接核验 | S01—S08、L01—L06 所列 URL | 3 | 分类见来源台账 | S06 首次错误、去尾斜线后成功；L02 两次仍错误；L03 错误 | 已恢复页面读正文与评论，未恢复者留 lead | Reddit 只取帖文区域，排除下方推荐帖 |
| ESFJ-Q10 | 知乎/OpenCLI | `opencli zhihu search 'ESFJ 自己' --type answer --limit 8 -f json --trace retain-on-failure` | 4 | 8 条搜索结果；L07、自述问答路由 | 成功；仅元数据 | Q11 读取问答 | 第 1 次知乎调用；无需 AI 中间摘要，本任务直接需要一手证据 |
| ESFJ-Q11 | 知乎/OpenCLI | `opencli zhihu question 403575826 --limit 6 -f json --trace retain-on-failure` | 4 | 6 条回答；S14、S15 | 成功，但多条 content 明显截断 | 不把 question 命令输出视为完整回答 | 第 2 次：由搜索收窄到问答正文；第三次调用按 smart-search 上限跳过 |
| ESFJ-Q12 | 小红书/OpenCLI | `opencli xiaohongshu search 'ESFJ 边界感' --limit 6 -f json --trace retain-on-failure` | 4 | 6 条结果；S13 | 搜索成功 | Q13 核查第一条自称 ESFJ 的作者笔记 | 第 1 次；其他 5 条仅作未采用候选，不支持特征 |
| ESFJ-Q13 | 小红书/OpenCLI | `opencli xiaohongshu note <Q12返回的692d92c9000000000d03ee8c完整URL> -f json --trace retain-on-failure` | 4 | S13 标题、作者、标签正文 | 数据已返回；命令随后 exit 1，Windows 包装层将 URL 的 `&xsec_source` 误作命令 | 无重试；现有返回只足够表层记录 | 第 2 次：定点核验；未取得图片文字/视频正文；文档不保存临时 xsec_token |
| ESFJ-Q14 | Bilibili/OpenCLI | `opencli bilibili comments BV1894y1f7aP --limit 20 -f json --trace retain-on-failure` | 4 | 返回 20 条顶层评论；S09—S11、S12 | 成功，原评论 text、rpid、时间可读 | 将评论单独建源，不升级 S08 视频内容 | 第 1 次；未读楼中楼 |
| ESFJ-Q15 | Bilibili/OpenCLI | `opencli bilibili comments BV1papwzUEuY --limit 20 -f json --trace retain-on-failure` | 5 | 返回 12 条顶层评论；S12 | 成功，原评论可读 | 保留 L03 视频未核验状态 | 第 2 次：核查不同视频下对理想化/配对叙事的异议；第三次按上限跳过 |
| ESFJ-Q16 | Web/原页复核 | 直接打开知乎回答 1731207265、1948399197 | 5 | 两页均 Internal Error | 未恢复全文 | L07 保留 lead；S14 仅限 OpenCLI 片段 | 不借网页失败否认已读取的 API 片段 |
| ESFJ-Q17 | Web/补充反例 | `ESFJ "我是" "讨好" 自己`；`ESFJ "我是" "传统"` | 5 | 未取得可采用的 ESFJ 一手原文 | 多为泛化介绍、其他类型或无关结果 | 保留传统观念缺口 | 搜索 2 词；未采纳结果中的测试报告、心理建议或相似域名内容 |

OpenCLI 预检：v1.8.6；`doctor` 显示 daemon、extension、connectivity 正常。已查 live registry（`list -f yaml`，再以 JSON 筛选）及站点/命令帮助；所用适配器均为 browser=true、cookie、read。注意 `zhihu answer` 是写回答，实际读取采用 `question`。补充轮调用数：知乎 2、小红书 2、Bilibili 2；预检和帮助不计。没有发帖、评论、点赞或更新软件。知乎、小红书、Bilibili 的第三次 OpenCLI 调用按 smart-search 技能频率上限跳过；其余缺口如实保留。

## 3. 来源台账

日期未知时保留未知或页面相对时间，不倒算具体发布日期。S03 的搜索绝对日期与原页相对时间颗粒度不同，分别注明。所有 inspectable 状态仅代表本次工具读取结果，不保证持续可访问。

| source_id | record_class | direct URL | page/title | platform | date | content type | original/derivative | inspectable? | permitted use | narrow claim / audit note |
|---|---|---|---|---|---|---|---|---|---|---|
| ESFJ-S01 | evidence_source | [原页](https://www.myersbriggs.org/my-mbti-personality-type/the-16-mbti-personality-types/) | 16 MBTI Personality Types Descriptions / ESFJ | Myers & Briggs Foundation | 未标注 | 官方类型短描述 | 机构直接发布；与类型理论共享概念 | 是，ESFJ 小节 | 类型叙事参照 | 描述合作、日常需要、小事守信、希望贡献得到认可；不是调查 |
| ESFJ-S02 | evidence_source | [原页](https://www.16personalities.com/ch/esfj-人格) | ESFJ人格（执政官） | 16Personalities / NERIS | 未标注 | 商业类型介绍中文页 | 站点直接发布的本地化文本；非独立经验研究 | 是，正文 | 仅支持站点中的类型表述 | 社区联系、礼貌、组织安排、传统与认可叙事；同页也否定对所有人一视同仁；不得与 S01 当作两次实证复现 |
| ESFJ-S03 | evidence_source | [原帖](https://www.reddit.com/r/ESFJ/comments/1tngqrd/stereotyped_so_hard_i_cant_even_relate_to_any/) | Stereotyped so hard, i can't even relate… | Reddit r/ESFJ | 搜索标注 2026-05-25；原页约 4 个月前 | 自述及回应 | 原帖自认类型；评论含他人判型 | 是，主帖与部分评论 | 反刻板印象及个体差异 | 主帖拒绝愚笨、八卦、虚假、母亲化标签；需要安慰不等于由他人定义价值。评论对记生日、需要认可也有分歧 |
| ESFJ-S04 | evidence_source | [原帖](https://www.reddit.com/r/ESFJ/comments/cz7zy2/esfj_seeking_help_with_healthy_relationship/) | ESFJ seeking help with healthy relationship boundaries | Reddit r/ESFJ | 2019-09-03（原页日期导航） | 关系求助及经验回复 | 主帖账号删除但正文在；自我判型 | 是 | 单一关系语境及反例 | 有人担忧空间、联系与肯定需求；回复自述可以主动约定独处、表达需求。不能推出 ESFJ/ISFP 配对定律 |
| ESFJ-S05 | evidence_source | [原帖](https://www.reddit.com/r/ESFJ/comments/unb3cm/one_sided_relationships/) | one sided relationships ? | Reddit r/ESFJ | 原页约 4 年前 | 友情自述及讨论 | 原帖；与 S06 一位评论者为同一账号 More_Fly2617 | 是 | 不对称亲近感与边界需求 | 发帖者认为别人对自己比自己对别人更亲近；评论有人恰好相反。相同标签下亲近方向并不一致 |
| ESFJ-S06 | evidence_source | [原帖](https://www.reddit.com/r/ESFJ/comments/uodk55/does_anyone_else_not_fit_the_esfj_stereotypes/) | Does anyone else not fit the ESFJ stereotypes? | Reddit r/ESFJ | 原页约 4 年前 | 自述及反例 | 原帖正文在、账号删除；部分作者与 S05 重合 | 是 | 社交、照顾、组织能力的差异 | 主帖不活泼、不愿无条件照顾、不守固定作息却喜欢计划；有人不喜欢独处，评论有人珍惜独处 |
| ESFJ-S07 | evidence_source | [原帖](https://www.reddit.com/r/ESFJ/comments/1gt5p0n/being_taken_for_granted/) | Being taken for granted | Reddit r/ESFJ | 原页约 2 年前 | 自述、异议及伴侣转述 | 原帖；伴侣类型未经验证 | 是 | 付出意义的分歧 | 主帖说关怀不被注意；评论也有人帮助本身就快乐、并不求感谢；伴侣转述显示双方对帮助的定义不同 |
| ESFJ-S08 | surface_record | [原页](https://www.bilibili.com/video/BV1894y1f7aP/) | 【MBTI】当ESFJ遇见爱情---莫止步于刻板印象 | Bilibili / 面包拾光集 | 2022-03-29 | 视频页面元数据 | 页面作者发布；正文视频未核验 | 部分：标题、日期、简介 | 仅说明中文视频存在反刻板印象标题包装 | 未观看、无字幕；简介提到作者曾误判为 ESFJ，不可当 ESFJ 当前自述 |
| ESFJ-L01 | lead | [原链接](https://www.zhihu.com/en/answer/3206954601) | How should I view friends with ESFJ personality?（搜索标题） | 知乎 | 未核验 | 搜索命中 | 未核验 | 否，安全验证并带 need_login | 后续检索路由 | 不支持任何特征 |
| ESFJ-L02 | lead | [原链接](https://www.reddit.com/r/ESFJ/comments/1eqz1ve) | What are the common false stereotypes on ESFJs? | Reddit | 搜索标注 2024-08-13，原页未核验 | 搜索命中 | 未核验 | 否，Internal Error | 追查传统/等级反例 | 搜索中有内容但原页失败，未采用其结论 |
| ESFJ-L03 | lead | [原链接](https://www.bilibili.com/video/BV1papwzUEuY/) | 【MBTI恋爱图鉴 #04】致所有爱上ESFJ的人们，为什么 TA们的爱，让人越被照顾，越有压力？ | Bilibili | 未核验 | 搜索标题 | 未核验 | 否，Internal Error | 后续核查标题及原视频 | 不将标题中的压力解释写成特征 |
| ESFJ-L04 | lead | [原链接](https://www.douyin.com/video/7349232881329245450) | 乐于助人蓝妈妈的生存指南…（搜索标题） | 抖音 | 搜索标注 2024-03-23 | 搜索摘要/标题 | 原视频未核验 | 否，原页空壳 | 追查母亲化包装 | 不作为“蓝妈妈”普及度或行为依据 |
| ESFJ-L05 | lead | [原链接](https://www.douyin.com/video/7339474698117352743) | 如何判断ESFJ心里有没有你？（搜索标题） | 抖音 | 搜索标注 2024-02-25 | 搜索摘要/评论 | 原视频及评论上下文未核验 | 否，原页空壳 | 追查关系标签与反例 | 不采用搜索评论推断分手模式 |
| ESFJ-L06 | lead | [原链接](https://www.reddit.com/r/ESFJ/comments/nyn282/) | What are some ESFJ stereotypes you do not relate to? | Reddit | 未核验 | 搜索命中 | 未核验 | 否，Internal Error | 追查传统、艺术及智力标签反例 | 不可作为已核实反例 |
| ESFJ-S09 | evidence_source | [评论所在页](https://www.bilibili.com/video/BV1894y1f7aP/#reply107432740736) | 天野默逸 / rpid 107432740736 | Bilibili | 2022-03-31 09:06（API 显示，时区未明） | 自认 ESFJ 的原评论 | 直接自述；受同一视频语境影响 | 是，OpenCLI comments 完整 text | 仅支持该用户的条件化自述 | 作者认为自己的控制欲随关系安全感变化；不能证实因果，更不能将他人不给安全感当作控制的免责理由 |
| ESFJ-S10 | evidence_source | [评论所在页](https://www.bilibili.com/video/BV1894y1f7aP/#reply153009517376) | 山风yoki / rpid 153009517376 | Bilibili | 2023-02-19 06:30（同上） | 自认 ESFJ 的原评论 | 直接自述；同一视频语境 | 是，OpenCLI comments 完整 text | 仅支持提醒动机的自我解释 | 作者不认为自己想控制他人，表示若没提醒而对方受损会内疚。动机自述不等于对方同意或行为无害 |
| ESFJ-S11 | evidence_source | [评论所在页](https://www.bilibili.com/video/BV1894y1f7aP/#reply122241912496) | 半夜游光 / rpid 122241912496 | Bilibili | 2022-07-24 02:43（同上） | 伴侣经验转述 | 原评论；对方类型未经核验；明确受视频启发 | 是，OpenCLI comments 完整 text | 单一关系经验及反例 | 描述伴侣虽未立即理解兴趣仍愿主动了解，双方表达关心；反驳“必然不能理解想象力”的全称标签，不支持官配 |
| ESFJ-S12 | surface_record | [评论页 A](https://www.bilibili.com/video/BV1894y1f7aP/)、[评论页 B](https://www.bilibili.com/video/BV1papwzUEuY/) | 两个视频的标签与异议评论（定位见下） | Bilibili | 2022—2026，具体见下 | 原评论表述风险集合 | 原评论；同帖、共享视频刺激，不计独立经验样本 | 是，OpenCLI comments | 仅支持标签可见与争议风险 | 母亲化、贬低真诚、反对理想化及质疑官配确有可读评论；不能据此判断类型好坏 |
| ESFJ-S13 | surface_record | [笔记定位页](https://www.xiaohongshu.com/explore/692d92c9000000000d03ee8c) | ESFJ 最致命的边界感💕⁉️ / esfj 蛋糕大叔9412 | 小红书 | 搜索标注 2025-12-01 | 原笔记标题、作者及正文标签 | 发布者原页面字段；图像/视频未核验 | 部分，OpenCLI note 已返回字段 | 仅支持边界问题被强烈标题化包装 | 正文 text 只有话题标签；作者名不构成经验自述。访问时用搜索返回带 token URL，稳定定位 URL 不保证免登录 |
| ESFJ-S14 | surface_record | [原回答](https://www.zhihu.com/question/403575826/answer/1948399197) | ASK ASK / 知乎上有esfj吗？请问esfj是什么样子？ | 知乎 | API 未返回日期 | 回答开头片段 | 原回答片段，伴侣转述与类型概括混合 | 部分，OpenCLI question 截断 | 仅审计“现实社交好所以不讨论类型”的包装 | 以丈夫开场后概括网络参与差异，未见全文及方法；不得建立 ESFJ 少上网、只看不说等特征 |
| ESFJ-S15 | surface_record | [问题页](https://www.zhihu.com/question/403575826) | 苍舒、匿名用户、MBTI星球等回答片段（ID 见下） | 知乎 | API 未返回日期 | 正负评价及类型介绍片段 | 原回答片段；泛化、转述和介绍混合 | 部分，多条长回答截断 | 仅审计极化、重复类型文案 | “可靠热心”和“没边界、情绪化”等相反包装不能投票合成事实；不确证用户类型 |
| ESFJ-L07 | lead | [原回答](https://www.zhihu.com/question/403575826/answer/1731207265) | 梨子 / 知乎上有esfj吗？请问esfj是什么样子？ | 知乎 | 未核验 | OpenCLI 搜索结果 | 未核验正文 | 否，Web 打开失败；question 返回的 6 条未包含此回答 | 后续中文长文核验路由 | 不能仅凭问题名称认定作者是 ESFJ 或内容为自述 |

补充定位审计：S12 的 A 页选取 rpid 108989310320（2022-04-12，伴侣母亲化称呼）、172910521024（2023-07-02，对真诚被贬称的难受表述）；B 页选取 278688701216（2025-10-09，反对理想化但自身使用负面泛化）、287933068161（2026-01-29，质疑 ISTP 官配）。这些都是表述证据，非行为事实。S15 对应回答 2060508823（苍舒）、1969713209（匿名用户）、2576585208（MBTI星球）；另返回的 34625587985 是类型账号叙事片段，不当真实事件，2075084248 为一句调侃，不作特征依据。问题页内容多处与通用类型介绍相近，来源关系未核实，不计作独立验证。

## 4. 中性特征—证据表

这里的“特征”是表述主题，不是行为模型。独立来源簇按“类型参考”“Reddit 社区”“Bilibili 评论社区”保守计数；多帖不是多平台，S01/S02 也不算两簇。Bilibili 三条合格经验均来自同一视频，不能视为三个独立平台或不受引导的样本。`repeated` 表示观察到重复叙事；`context-specific` 表示局部语境；均不代表真实频率或科学效度。

| feature_id | neutral recurring representation | evidence source IDs | independent clusters | counterevidence | discourse confidence | creative value | risk/qualification | permitted use |
|---|---|---|---:|---|---|---|---|---|
| ESFJ-F01 | 以注意日常需要、提供实际帮助表达关心 | ESFJ-S01, ESFJ-S07 | 2 | S06 明确拒绝无条件照顾 | repeated；跨参考/自述 | 保留具体关怀的质感 | 无法推论所有人爱做家务或应承担照料 | 作为可选人物主题，保留拒绝权 |
| ESFJ-F02 | 希望投入被看见，重视关系中的回应 | ESFJ-S01, ESFJ-S07, ESFJ-S03 | 2 | S07 有帮助本身即满足的评论；S03 有不需要认可者 | repeated；存在明确异议 | 区分感谢、尊重与回报 | 不把付出一律理解为交易或操控 | 可讨论认可意义，不设固定动机 |
| ESFJ-F03 | 关注周围关系的和谐，有时难以表达不同需求 | ESFJ-S01, ESFJ-S05 | 2 | S05 正在练习界限；S06 会优先考虑自身感受 | repeated，但困难部分仅局部自述 | 呈现照顾他人与表达自己并存 | 不把礼貌等同虚假、软弱或没主见 | 限定语境，不能归因为人格缺陷 |
| ESFJ-F04 | 对联系频率、独处及亲近程度的期待可能不一致，部分自述提及安全感 | ESFJ-S04, ESFJ-S05, ESFJ-S06, ESFJ-S09 | 2 | S04 有尊重伴侣空间的经验；S06 独处偏好相反；S09 自述依情境变化 | context-specific；中英文有相关表述 | 保留关系需要的双向性 | 不能写成 ESFJ 必然黏人；S05/S06 作者重合；安全感不是控制免责理由 | 仅为个体差异主题，不预测配对 |
| ESFJ-F05 | 社区联结与陪伴被强调，但社交活跃程度并不统一 | ESFJ-S02, ESFJ-S06 | 2 | S06 不受欢迎、难交朋友及珍惜独处自述 | repeated，边界明确 | 避免只有聚会中心一种形象 | 需要连接不等于广泛社交能力 | 可选联系主题，不能强制外向表演 |
| ESFJ-F06 | 类型介绍强调组织、计划与可靠性，个人作息未必整齐 | ESFJ-S01, ESFJ-S02, ESFJ-S06 | 2 | S06 喜欢计划但无固定作息、不擅组织 | repeated，实际表现分歧 | 分开重视安排与执行能力 | 不以整洁、准点或记生日鉴定类型 | 保留偏好与能力的区别 |
| ESFJ-F07 | 对照顾者、八卦或缺乏思考等简化标签有明确反驳，也有主动理解伴侣兴趣的经验 | ESFJ-S03, ESFJ-S06, ESFJ-S11 | 2 | S03 也有人认同照顾、记生日、求认可的一部分 | repeated；具体反驳对象不同，不合成所有标签的跨平台共识 | 保留兴趣、原则与自主性 | S11 为他人判型且受视频启发；S12 的母亲化称呼只作风险材料 | 用于人物去单一化，禁作智力/道德排序 |
| ESFJ-F08 | “帮助”的意义与互惠标准可由双方作不同解释，提醒也可能被解释为责任 | ESFJ-S07, ESFJ-S05, ESFJ-S10 | 2 | S07 有不求感谢者；S05 评论对谁更亲近看法相反；S10 只有提醒者视角 | context-specific | 保留对同一关怀的多种理解 | 善意自述不能替代对方同意；类型因果未知 | 可作开放问题，不判定谁天生自私 |

## 5. 反证与风险审计

- “永远无条件付出”：S06 主帖拒绝不值得的照顾；S07 评论谈到减少未经请求的投入。不能把拒绝服务写成偏离类型。
- “讨好就是虚伪/没有自我”：S03 区分需要安慰与自我价值；S05 正在确认自身需求。相反也确有压力与难拒绝的自述，不能用正面包装抹掉困难。
- “没有边界、必然黏人”：S04 同帖提供尊重独处的经验；S05 发帖者反而觉得别人对自己要求过多。方向不唯一。
- “社交王者、永不独处”：S06 主帖与评论的陪伴需要相反，直接阻止全称结论。
- “八卦、愚笨、只有妈妈属性”：S03 明确反驳；同帖他人描述共同阅读兴趣。保留为对标签的异议，不建立智力高低新标签。
- “必然传统、保守、服从等级”：S02 确有传统规范表述；Q08 主动检索反例，但 L02/L06 未读成功。S03 反对僵化刻板印象不足以证明具体政治、宗教或家庭观念；本轮不建立该特征。
- “付出都是索取回报”：S07 同帖包含不同动机，不能选取指责性伴侣评论作为整体结论。
- 中文补充：S09 区分不同关系安全感下的自我体验；S10 强调提醒源于担忧而非自认控制。但两者都不足以判断接受者是否感到越界。S11 对伴侣愿意理解兴趣的描述，为“感知型无法交流想象力”提供个案反例。
- 中文表层记录：S12 同时保留理想化、母亲化、对真诚被贬低的难受与反对理想化的声音；不能用后一类评论中的负面形容词替换前一类刻板印象。S13 标题很强烈而正文未读全，不采纳“致命”判断。S14/S15 不支持“ESFJ 不上网”或道德优劣。
- 官配、好追排行榜、蓝妈妈等搜索包装不用于配对、道德、分数或结局。L04/L05 连原页内容都未核实，不能被当作表层观察之外的证据；本轮实际将其保守保留为 lead。

## 6. 覆盖、独立性与限制

已覆盖参考站点、Reddit、Bilibili、知乎、小红书及抖音路径。补充后合格特征证据有三个来源簇；中文一手短自述来自 Bilibili 同一视频，仍不宣称中文跨平台经验共识。S08/L03 视频正文均未核验，但相应评论通过 OpenCLI 恢复读取并另建来源。知乎可读若干回答片段，长文仍有截断；小红书仅一篇笔记的元数据与标签，图片/视频文字未读；抖音仍是首轮空壳状态。没有绕过登录、没有观看视频，也没有使用智能文稿或 AI 摘要充当原话。

十条 evidence_source 包括两条类型介绍、五个 Reddit 帖子与三条 Bilibili 评论；另有五条 surface_record、七条 lead，共 22 条来源记录。类型介绍共享类型学语汇，独立运营不等于独立验证；同一帖内的回复不计作独立研究。S05 发帖账号也参与 S06 评论，不能把该重合部分当两个人的重复证言。S09—S11 来自同一个视频，S11 还直接呼应视频，须降低独立性评价。知乎类型账号文案可能复用介绍，尚未核实。其余跨帖作者是否重合、是否受类型介绍影响无法完全排除，未发现复制不代表已证实独立。

自我判型、回忆、关系求助与反刻板印象主题的选择偏差明显；负面查询更易找到求助、反例查询更易找到否认者。账号删除不妨碍本次读取保留正文，但无法核实身份。评论只是局部可见，不代表全帖共识；本次没有读取私密信息或联系任何人。

OpenCLI 返回的 20 条/12 条评论只是当前适配器默认排序下的可见集合，未做随机抽样；点赞排序及视频受众会影响选择。点赞数不进入特征置信度或人口估计。中文作者也可能生活在不同地区，未核验地域。评论片段的稳定 rpid 用于定位，网页锚点是否自动跳到该评论取决于平台实现。

本轮已核查关键叙事和反向材料，但不构成饱和综述。尚不清楚年龄、文化环境、关系史对这些叙述的影响；也不能确认其相对其他类型的特异性。所有转述只保留必要概要，不复制长文。

## 7. Stage-02 交接

**证据层**：F01—F08 与来源台账是可追溯输入；S03/S04/S05/S06/S07 中的反向经验应一并携带。S09/S10 是中文短自述，S11 是伴侣转述，均须带同视频依赖限制。S08、S12—S15 只能用于表述风险，L01—L07 只能继续检索。

**解释层**：可以将关怀、被看见、个人空间和不同帮助标准视为创作候选主题；这是研究者的综合解释，不是由 MBTI 决定的规律，也不是后续内容已经获准的方案。

**开放问题**：优先核验 L07 等中文自认 ESFJ 长文，并补不同社区对帮助、拒绝和亲近感的解释；本次中文短评论不能替代长文与多语境覆盖。若要采用传统观念主题，须先补足可读原文及反例；若要声称类型特异性，则需另行设计比较研究。现有材料不支持类型官配、恋爱难度或性别差异。

本文件停留在 Stage 01，不产出关系阶段行为、冲突维度、状态变量、候选事件、对白、选项、分值或结局。

## 8. 验收记录

- [x] 权威 Markdown 已写入约定路径。
- [x] 八个 feature_id 的 evidence source IDs 仅引用十条 evidence_source；反例与使用边界齐备。
- [x] 来源类别、访问失败、重试与替代路线可查。
- [x] 来源簇保守计数，明确记录 S05/S06 作者重合及 S09—S11 同视频依赖。
- [x] 置信度只描述网络叙事；无人口频率或代表性统计声明。
- [x] 负面标签有反例或明确的反例检索缺口；不把低置信梗转成机制。
- [x] 交接区分证据、解释和开放问题，未进入下一阶段。

验证范围仅此研究文档；未修改运行时内容，未执行与文档无关的构建或路径枚举。
