# ESFP 网络刻板印象证据研究（Stage 01）

研究日期：2026-09-10（含同日 OpenCLI 与公开网页扩搜）。用途：Love with MBTI 的后续创作研究交接。状态：Stage-01 台账、反证与边界审计完成；已补入中文原始评论、小红书候选笔记、Bilibili 可核验原页和一篇知乎完整回答，中文一手长自述覆盖仍不足。

## 1. 研究边界与来源计划

本研究考察中文、英文互联网如何表述 ESFP，以及自认 ESFP 的用户如何回应这些表述。它不鉴定任何人的真实类型，不把 MBTI 当作临床诊断，也不把社区自述当作 ESFP 人群的心理事实。

本次只研究反复出现的网络叙事，未开启代表性统计分支；不提出人口占比、行为发生率、恋爱忠诚率、配对成功率、性别差异或地域差异结论。平台帖子、评论数、点赞数和搜索排序都不代表现实频率。

检索前规划三类来源：

1. 类型参考页：Myers & Briggs Foundation、16Personalities 中文页；
2. 社区一手自述：以 Reddit r/ESFP 的反刻板印象、关系、规划和冲突讨论为主；
3. 中文公共社交/视频平台：Bilibili、抖音及知乎搜索路径，用于观察“表演者、派对、官配、吵闹、黄人组”等包装，并尝试寻找中文自述。

检索围绕社交强度、共同体验、即时性与规划、深度/智力贬低、情绪公开程度、冲突、外表与身体、忠诚/滥情等争议展开。日期不设硬性下限，实际采用材料跨度约 2019—2025；2026 年检索结果只用于补充可见争议或后续路线，不因新近而自动提高权重。英文用户地域未知，不能称为美国样本；中文网页也不等于中国人群样本。

补充轮使用 OpenCLI v1.8.6，通过已连接浏览器调用豆包、知乎、Bilibili 和小红书适配器。AI 回答只作搜索路由，原始平台结果再单独核验；Bilibili 评论文本来自官方接口读取，但未观看对应视频。知乎、Bilibili 各在上一轮达到同一问题链两次调用上限，本轮不再用 OpenCLI 重复调用，改用公开网页搜索扩展与直接页核验；小红书执行一次搜索和一次原笔记读取。没有执行发帖、评论、点赞、关注或下载。

## 2. 查询台账

下表记录本次实际执行的搜索与核验路线。搜索摘要只用于发现候选；只有可直接读取的原页才可升级为 `evidence_source`。Bilibili、抖音部分页面仅在搜索返回中显示标题、简介或评论，而直接打开失败，因此保守归为 `surface_record`。

| query_id | platform/source cluster | query or route | search round | result | access/status | fallback | notes |
|---|---|---|---:|---|---|---|---|
| ESFP-Q01 | 官方类型参考 | `site:myersbriggs.org ESFP personality type description` | 1 | S01 | 搜索命中，原页可读 | 无 | 只取 ESFP 小节 |
| ESFP-Q02 | Reddit/反刻板印象 | `site:reddit.com/r/ESFP stereotypes party animal quiet introvert ESFP` | 1 | S03、S04、S12 等 | 搜索返回多篇原帖 | Q25 用规范标题路径逐页核验 | 不把摘要直接当证据 |
| ESFP-Q03 | Reddit/关系 | `site:reddit.com/r/ESFP relationship affection boundaries misunderstood ESFP` | 1 | S06、S13 等 | 搜索可见 | Q25 直接核验 | 排除仅由他人判型的关系故事 |
| ESFP-Q04 | Bilibili/恋爱与刻板印象 | `site:bilibili.com/video ESFP 刻板印象 恋爱` | 1 | S15、若干候选 | 标题、简介和关联视频可见；原页打开失败 | 降为表层记录 | 未观看视频、未取得字幕 |
| ESFP-Q05 | 16Personalities 中文页 | `site:16personalities.com/ch ESFP 人格 表演者 优点 缺点 恋爱` | 2 | S02 | 中文原页可读 | 无 | 机构类型叙事，不是调查 |
| ESFP-Q06 | Reddit/规划与冲动 | `site:reddit.com/r/ESFP ESFP "impulsive" "planning" stereotype` | 2 | S09、其他候选 | 搜索命中 | Q25 打开 S09 | 追查“不规划”的反例 |
| ESFP-Q07 | Reddit/浅薄与深度 | `site:reddit.com/r/ESFP ESFP "shallow" "deep" stereotype` | 2 | S03、S11、S12 | 搜索命中 | Q25 打开原帖 | 同一社区不算三个独立平台 |
| ESFP-Q08 | Reddit/忠诚与调情 | `site:reddit.com/r/ESFP ESFP "loyal" "flirty" stereotype relationship` | 2 | S04、S13 | 搜索命中 | Q25 打开原帖 | 不估计忠诚或出轨率 |
| ESFP-Q09 | 官方类型参考 | `site:myersbriggs.org "ESFP" "Enjoy working with others"` | 2 | S01 | 命中同一官方页 | 无 | 与 Q01 不构成新来源 |
| ESFP-Q10 | 官方类型参考 | `site:myersbriggs.org "ESFP" "Flexible and spontaneous"` | 2 | S01 | 命中同一官方页 | 无 | 只用于确认原文定位 |
| ESFP-Q11 | Reddit/计划反例 | `site:reddit.com/r/ESFP "planning" ESFP spontaneous not impulsive` | 3 | S08、S09 | 搜索可见，原页后续可读 | Q25 使用完整标题路径 | 区分“保持弹性”和“完全无计划” |
| ESFP-Q12 | Reddit/冲突分歧 | `site:reddit.com/r/ESFP "conflict" ESFP avoid confrontation` | 3 | S06、S07 | 两篇原页可读 | 无 | 同时保留回避与直接处理经验 |
| ESFP-Q13 | 知乎/中文自述 | `site:zhihu.com "作为一个ESFP"` | 3 | 未取得可用 ESFP 原文 | 搜索结果不足或无关 | 保留中文长自述缺口 | 不用搜索摘要建立特征 |
| ESFP-Q14 | 知乎/中文反刻板印象 | `site:zhihu.com "我是ESFP" 刻板印象` | 3 | 未取得可用 ESFP 原文 | 同上 | 转向 Bilibili、抖音表层观察 | 不声称知乎没有相关讨论 |
| ESFP-Q15 | Bilibili/真实 ESFP | `site:bilibili.com/video "真实的ESFP"` | 3 | S15、S16 | 搜索页可见标题与简介；直接打开失败 | 仅作表层记录 | 不推断视频正文 |
| ESFP-Q16 | 抖音/刻板印象 | `site:douyin.com/video ESFP 刻板印象` | 3 | S18、S19 | 搜索返回原页字段与部分评论；直接打开仅空壳 | 降为表层记录 | 评论为可见包装，不是代表性样本 |
| ESFP-Q17 | 抖音/第一人称 | `site:douyin.com/video ESFP "本esfp"` | 4 | 未找到足以支持特征的完整自述 | 结果多为官配、玩梗或类型混杂 | 保留缺口 | 不凭用户名或一句评论确证类型 |
| ESFP-Q18 | 抖音/第一人称 | `site:douyin.com/video ESFP "我是esfp"` | 4 | 同上 | 结果不稳定且上下文不足 | 保留缺口 | 未进行评论全量采样 |
| ESFP-Q19 | Bilibili/第一人称 | `site:bilibili.com/video ESFP "本esfp" 刻板印象` | 4 | S15—S17 及无关候选 | 未取得可核验的一手长自述 | 表层记录保留 | 页面标题不能替代作者身份与正文 |
| ESFP-Q20 | Bilibili/第一人称 | `site:bilibili.com/video ESFP "我就是esfp"` | 4 | 未新增合格证据 | 结果以关联视频和泛型标签为主 | 无 | 不将播放量写入置信度 |
| ESFP-Q21 | Web/个人博客 | `ESFP stereotype "party animal" personal blog` | 4 | 若干解释文与聚合页 | 多为二手类型解释 | 未采用 | 未发现身份与原始经验均足够清晰的新增来源 |
| ESFP-Q22 | Web/论坛 | `ESFP "I am not a party person" personality forum` | 4 | 多数结果无关 ESFP | 无可采用结果 | 无 | 不为凑平台数纳入无关帖子 |
| ESFP-Q23 | Personality Cafe | `site:personalitycafe.com ESFP stereotype shallow party` | 4 | 未取得可读相关原帖 | 覆盖失败 | 保留论坛缺口 | 不静默替换成聚合站 |
| ESFP-Q24 | Tumblr | `site:tumblr.com ESFP stereotypes "party"` | 4 | 泛化反刻板印象页 | 可见但作者身份、来源链和经验基础不足 | 未采用 | 避免把二手解释当独立自述 |
| ESFP-Q25 | Web/直接核验 | S01—S14 的规范 URL；S15—S19 的直接页 | 5 | S01—S14 均最终可读；S15—S19 仅部分可见 | Reddit 短路径多次出现 Internal Error/Timeout；补全标题路径后恢复。Bilibili 原页仍失败，抖音原页仅空壳 | 失败者按类别降级，不绕过登录 | `inspectable` 仅代表本次读取状态 |
| ESFP-Q26 | 豆包/OpenCLI | `doubao ask`：寻找 ESFP 中文一手自述及知乎/Bilibili 原始 URL | 6 | 返回旧的 ESTP 对话内容，未回答本题 | 命令成功但结果不相关 | 不重试；转向原始平台 | AI 站点本题 1 次上限已用完；不纳入来源台账 |
| ESFP-Q27 | 知乎/OpenCLI | `zhihu search 'ESFP 自己 刻板印象' --type answer --limit 10` | 6 | 返回 10 条回答候选；S20 及后续线索 | 成功，只有标题、作者、票数和 URL | Q28 读取排名 1 的完整回答 | 搜索结果本身不支持特征 |
| ESFP-Q28 | 知乎/OpenCLI | `zhihu answer-detail 1901386277158385444 --max-content 0` | 6 | S20 完整回答 | 成功，正文、作者、日期和 URL 可读 | 无 | 内容为泛化类型判断而非自述，降为表层记录；知乎达到 2 次上限 |
| ESFP-Q29 | Bilibili/OpenCLI | `bilibili search 'ESFP 刻板印象 真实' --type video --limit 12` | 6 | 12 条视频候选；S21 | 成功，标题、作者、BV 号和排序分可读 | Q30 读取最贴近主题的视频评论 | 排序分不进入置信度 |
| ESFP-Q30 | Bilibili/OpenCLI | `bilibili comments BV1dT411P7S6 --limit 50` | 7 | 返回 30 条顶层评论；S22—S25 | 成功，rpid、作者、正文和时间可读 | 未读楼中楼，第三次调用按限频跳过 | 当前排序集合不是随机样本；Bilibili 达到 2 次上限 |
| ESFP-Q31 | 知乎/OpenCLI | 后续扩搜请求 | 8 | 未再次调用 | 同一问题链已用搜索、完整回答各 1 次 | 改用 Q35 公开网页扩搜 | 依 `smart-search` 限频跳过第三次调用，不能把跳过解释为平台无结果 |
| ESFP-Q32 | Bilibili/OpenCLI | 后续扩搜请求 | 8 | 未再次调用 | 同一问题链已用搜索、评论各 1 次 | 改用 Q36—Q37 公开网页扩搜与原页核验 | 依 `smart-search` 限频跳过第三次调用 |
| ESFP-Q33 | 小红书/OpenCLI | `xiaohongshu search 'ESFP 本人 刻板印象 安静 认真' --limit 12` | 8 | 返回 12 条笔记候选；S26 | 成功，标题、作者、互动数、日期和带令牌 URL 可读 | Q34 读取最贴近“熟悉后安静”争议的原笔记 | 搜索排序与互动数不进入置信度 |
| ESFP-Q34 | 小红书/OpenCLI | `xiaohongshu note`：读取“和 ESFP 刚认识很活泼，为啥后面就安静了呢？” | 8 | S26 元数据与标签 | 标题、作者、正文栏、互动数和标签可读；正文栏仅含标签，观点应在图片或评论中 | 不进行第三次调用，不从标题提炼特征 | 命令尾部 `xsec_source` 被宿主 shell 另行解释，但主笔记字段已返回；保守降为表层记录 |
| ESFP-Q35 | 知乎/公开网页扩搜 | `site:zhihu.com/question ESFP 安静 刻板印象`；`site:zhihu.com/question ESFP 认真 学习 刻板印象`；`site:zhihu.com/question "ESFP" "安静"`；`site:zhihu.com/answer "ESFP" "社恐"`；`site:zhihu.com/question "ESFP" "学习"`；`site:zhihu.com/question "esfp是什么样的人"`；`site:zhihu.com/question "ESFP到底"` | 8 | S28 及无关结果 | 搜索摘要可见，S28 直接打开失败但搜索返回了正文节选 | 仅作表层记录 | 未找到作者明确自认 ESFP、正文完整且与目标争议直接相关的长自述 |
| ESFP-Q36 | Bilibili/公开网页扩搜 | `site:bilibili.com/video ESFP 安静 不爱出风头`；`site:bilibili.com/video ESFP 刻板印象 认真 学习`；`site:bilibili.com/video "真实的ESFP"`；`site:bilibili.com/video "MBTI刻板印象｜你以为的ESFP vs 真实的ESFP"`；`site:bilibili.com/video "ESFP到底是怎样的人"` | 8 | S27、S29 及多条表层候选 | 搜索结果可见 | Q37 打开可读原页 | 不把关联视频标题当正文 |
| ESFP-Q37 | Bilibili/公开网页核验 | S27、S29 规范 URL | 8 | 两页正文可读 | S27 标题、简介和作者简介可读；S29 长文可读 | 无 | 只支持非常窄的个案反例与反类型化提醒；未观看视频画面 |

OpenCLI 调用台账：豆包 1 次（结果不相关）；知乎 2 次（搜索 1、完整回答 1）；Bilibili 2 次（搜索 1、评论 1）；小红书 2 次（搜索 1、原笔记 1）。知乎和 Bilibili 的后续 OpenCLI 扩搜因同一问题链已达两次上限而跳过，改走公开网页检索；小红书第二次调用已返回目标笔记字段，随后宿主 shell 对 URL 尾部参数另报解析错误，不影响已取得字段但降低可复核稳定性。所有候选站点均为 `cookie`、`browser=true`；预检时 daemon、扩展和连通性正常。OpenCLI 提示可从 v1.8.6 升级至 v1.8.7，本研究未执行升级。

## 3. 来源台账

所有来源只允许支持“页面中存在何种表述”。`evidence_source` 不等于科学验证；它只是直接、可检查且足以支撑一个窄表述。日期来自页面或搜索返回，未知时不倒推。

| source_id | record_class | direct URL | page/title | platform | date | content type | original/derivative | inspectable? | permitted use | narrow claim / audit note |
|---|---|---|---|---|---|---|---|---|---|---|
| ESFP-S01 | evidence_source | [原页](https://www.myersbriggs.org/my-mbti-personality-type/the-16-mbti-personality-types/home.htm) | 16 MBTI Personality Types Descriptions / ESFP | Myers & Briggs Foundation | 未标注 | 官方类型短描述 | 机构直接发布；与 MBTI 类型体系共享前提 | 是，ESFP 小节 | 类型叙事参照 | 表述外向友好、喜欢与人协作、现实常识、弹性与通过共同实践学习；不是样本调查 |
| ESFP-S02 | evidence_source | [原页](https://www.16personalities.com/ch/esfp-%E4%BA%BA%E6%A0%BC) | ESFP 人格（表演者） | 16Personalities / NERIS | 未标注；页脚 2026 | 商业类型介绍中文页 | 站点直接发布；非 MBTI 官方、非独立经验研究 | 是，正文 | 仅支持该站如何包装 ESFP | 突出聚光灯、朋友、审美、察言观色、即时享乐、回避批评与不擅长长期规划；同页也称其对所爱之人患难与共 |
| ESFP-S03 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/taulj2/misconceptions_about_the_esfp/) | misconceptions about the ESFP | Reddit r/ESFP | 2022-03-10 | 自认 ESFP 的反刻板印象帖及评论 | 原帖与社区回复；自我判型 | 是 | 反刻板印象与内部差异 | 主帖拒绝“派对动物、愚笨、极端外向、性开放”的全称标签；评论有人认同部分体验，也有人偏好小聚、独处与倾听 |
| ESFP-S04 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/taqheu/16_personalities_description_annoys_me_and_i_wish/) | 16 personalities description annoys me and I wish we could get it changed | Reddit r/ESFP | 2022-03-10 | 自述与类型描述批评 | 原帖及回复；同日与 S03 同社区话题，不能视为独立平台 | 是 | 关系标签的反证 | 发帖者反对“厌倦就离开、不愿规划共同未来”的固有化描述；回复区有人区分离开不健康关系与因无聊离开 |
| ESFP-S05 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/wt259x/esfps_and_problems/) | ESFPS and problems | Reddit r/ESFP | 2022-08-20 | 情绪表达讨论与自述 | 原帖提问；多名自认 ESFP 回复 | 是 | 私人情绪与表达时机 | 多人称会先独自整理、确认安全或避免给别人负担后才谈问题；也有人会向治疗师或选择的家人表达 |
| ESFP-S06 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/m32ps6/how_do_esfps_like_to_resolve_conflicts/) | How do ESFPs like to resolve conflicts? | Reddit r/ESFP | 2021-03-11 | 关系冲突偏好讨论 | 提问者未必是 ESFP；回复为第一人称偏好 | 是 | 单一社区中的直接沟通叙事 | 多条回复偏好直说、具体描述行为与感受、共同谈清期待；也有人区分亲近关系与陌生人情境 |
| ESFP-S07 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/1hgz9vy/conflict_avoidance/) | Conflict avoidance | Reddit r/ESFP | 2024-12-18 | 求助、自述与明确异议 | 原帖及回复；创伤、依恋、九型等混杂因素由作者自述 | 是 | 冲突反应差异与非类型因素 | 原帖极度回避冲突；同帖有人完全不回避并立即说明问题，也有人把自身回避更多归因于依恋、创伤或低自尊 |
| ESFP-S08 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/cjb309/ideal_type_of_dates_for_esfps/) | Ideal type of dates for ESFPs? | Reddit r/ESFP | 2019-07-29 | 约会偏好讨论 | 他人提问；多名第一人称回复 | 是 | 计划弹性与低压力偏好 | 有人喜欢先有框架、允许临时改变；也有人更喜欢到场后即兴。不能推导固定约会脚本 |
| ESFP-S09 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/i2h42g/esfp_who_plans_everything/) | ESFP who plans everything? | Reddit r/ESFP | 2020-08-02 | 反例自述及回应 | 原帖长期自测 ESFP；回复者自我判型未验证 | 是 | 规划、学业与职业反例 | 发帖者从事分析研究并长期规划；多名回复也描述活动、旅行或职业规划，同时保留即兴空间 |
| ESFP-S10 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/1d9dd1d/how_trues_the_stereotype_that_esfps_are_uh_not/) | How true’s the stereotype that ESFPs are, uh, not shy about their bodies? | Reddit r/ESFP | 2024-06-06 | 身体、自我呈现讨论 | 原帖问题及第一人称回复 | 是 | 身体舒适度与展示差异 | 回复从自信展示、条件性舒适到持续不安全感都有；不能从 ESFP 标签推断穿衣、身体自信或性开放 |
| ESFP-S11 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/1fkg230/are_esfp_just_not_naturally_deep_thinkers_or/) | Are ESFP just not naturally deep thinkers or something | Reddit r/ESFP | 2024-09-19 | 他人评价、反驳与自述 | 原帖为朋友转述；回复中含自认 ESFP 用户 | 是 | “深度”的争议与替代定义 | 有人将深度理解为现实问题、行动、价值与信任后的情绪交流；也有人承认兴趣不足时不愿延伸话题。不能把抽象偏好等同智力 |
| ESFP-S12 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/yoy67p/what_are_some_common_misconceptions_about_esfps/) | What are some common misconceptions about ESFPs? | Reddit r/ESFP | 2022-11-08 | 反刻板印象问答 | 原帖及多名社区回复 | 是 | 标签可见、反例与内部异议 | “浅薄、愚笨、享乐、吵闹、不能维持关系”等标签被反复提及并反驳；同帖也有人部分认同享乐或不规整，因此不能合成一致事实 |
| ESFP-S13 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/chln9j/are_esfp_loyal_partners/) | Are ESFP loyal partners? | Reddit r/ESFP | 2019-07-25 | 关系忠诚讨论 | 原帖及第一人称回复；含个体敏感经历 | 是 | 只支持对“滥情/不忠”标签的争论 | 多人反对按类型判断忠诚；既有曾经出轨的个案，也有长期忠诚自述，说明方向不一而非证明某种比例 |
| ESFP-S14 | evidence_source | [原帖](https://www.reddit.com/r/ESFP/comments/myye8o/ultimate_party_animal_and_materialism/) | “Ultimate party animal” and materialism | Reddit r/ESFP | 2021-04-26 | 创作者提问与社区自述 | 提问者为 ENFP；回复者自我判型 | 是 | 体验、物质与聚会的多种解释 | 有人偏好夜生活，也有人多数时间独处阅读；多条回复把“重物质”重述为偏好体验，但仍只是社区自我解释 |
| ESFP-S15 | surface_record | [原页](https://www.bilibili.com/video/BV1mdtJz9Ebp/) | 【MBTI】ESFP 喜欢谁？ | Bilibili / 酒泉子MBTI | 2025-08-05 | 视频页面标题与简介 | 作者发布；视频正文和评论未核验 | 部分：搜索返回可见，直接打开失败 | 仅审计恋爱包装与认知贬低风险 | 简介称为 ESFP 刻意缩短“纯理性分析”、仍有人开倍速；这种说法不能支持注意力、智力或阅读能力特征 |
| ESFP-S16 | surface_record | [原页](https://www.bilibili.com/video/BV1BP4y1M7rv/) | 【mbti】都很元气？教你如何区分 ESFP 和 ENFP | Bilibili / 菲尼君 | 2022-03-13 | 视频页面标题与简介 | 作者发布；简介自称理论与个人理解 | 部分：搜索返回可见 | 仅审计“元气”包装与反标签提醒 | 页面以“都很元气”作入口，同时明确每个人不同、不可用刻板印象决定或强加类型；未观看视频 |
| ESFP-S17 | surface_record | [原页](https://www.bilibili.com/video/BV1pK421x7gH/) | mbti 小剧场之谣言的诞生（又名 E 起放 P 组的日常） | Bilibili | 2024-03-13 | 娱乐短剧元数据 | 作者明确标注“纯刻板印象玩梗” | 部分：标题、简介可见 | 仅说明玩梗包装存在 | 低置信梗，机械不可用，不支持任何行为特征 |
| ESFP-S18 | surface_record | [原页](https://www.douyin.com/video/7109475922494901542) | #MBTI 职业性格测试 16 型人格官配 #ISTJ #ESFP | 抖音 | 2022-06-15 | 官配视频页面与可见评论 | 视频作者发布；评论为平台用户 | 部分：搜索返回可见，直接页空壳 | 仅审计官配、吵闹和“线下狂欢”话语 | 评论出现“ESFP 不上网、在线下狂欢”“很吵”等包装；不能支持配对、社交频率或地域结论 |
| ESFP-S19 | surface_record | [原页](https://www.douyin.com/video/7480545702762827019) | 生活中让人讨厌的人为什么很有可能是黄人组 | 抖音 | 2025-03-11 | 负面类型组视频与评论 | 作者内容及用户回复；对象混合四个类型 | 部分：搜索返回可见 | 仅审计群体污名与归因风险 | 将 ESFP 与其他“黄人”合并为讨厌对象；评论既有反感也有反驳，无法拆出 ESFP 特征 |
| ESFP-S20 | surface_record | [原回答](https://www.zhihu.com/question/468439731/answer/1901386277158385444) | Arianna / 为啥人们那么讨厌 ESFP 啊？ | 知乎 | 2025-05-01 | 完整回答 | 作者原回答；未声明自身类型，功能论与九型推断混合 | 是，OpenCLI `answer-detail` 完整读取 | 仅审计负面归因与性别化包装 | 将所谓“低阶 ESFP”概括为冲动、自我中心、难沟通，并推断男性 ESFP 被误判或“除籍”；没有方法、样本或反例，不支持行为、性别或类型机制 |
| ESFP-S21 | surface_record | [原页](https://www.bilibili.com/video/BV1dT411P7S6) | MBTI 刻板印象｜你以为的 ESFP vs 真实的 ESFP | Bilibili / MBTI士多店 | 日期未知 | 视频搜索结果 | 作者发布；视频正文未核验 | 部分：OpenCLI 搜索元数据及评论可读 | 仅说明“刻板印象 vs 真实”包装及评论语境 | 未观看视频、未取字幕；标题本身不支持任何人物特征 |
| ESFP-S22 | evidence_source | [评论所在页](https://www.bilibili.com/video/BV1dT411P7S6/#reply132877384304) | 番茄味芋泥 / rpid 132877384304 | Bilibili | 2022-10-08 02:41（API 显示，时区未明） | 原始顶层评论 | 评论者直接发布；未显式声明自我类型，受 S21 视频语境引导 | 是，OpenCLI `comments` 完整 text | 仅支持一条中文语境中的条件化社交表述 | 评论把 ESFP 描述为也会观察和思考，并称自己在人多热闹时安静、冷场时活跃；不能确认类型身份或推断普遍性 |
| ESFP-S23 | evidence_source | [评论所在页](https://www.bilibili.com/video/BV1dT411P7S6/#reply160987721840) | 那就闻闻窗上的雨 / rpid 160987721840 | Bilibili | 2023-04-16 04:10（同上） | 原始顶层评论 | 第一人称回应；未显式写出自我类型，受视频语境引导 | 是，OpenCLI `comments` 完整 text | 仅支持该用户对动机误读的表述 | 评论称自己只是不喜欢冷场，却被说成爱出风头；为“活跃气氛等于索取关注”提供中文个案反例 |
| ESFP-S24 | evidence_source | [评论所在页](https://www.bilibili.com/video/BV1dT411P7S6/#reply173715535328) | Ligx_ / rpid 173715535328 | Bilibili | 2023-07-07 12:05（同上） | 自认 ESFP 的原始顶层评论 | 直接自述；受视频语境引导 | 是，OpenCLI `comments` 完整 text | 仅支持一名用户遭遇学习能力刻板印象的经验 | 评论者明确以 ESFP 自称，表示他人预设其成绩差、做事不认真，而其除英语偏科外其他科年级前 30；个案不能证明整体学业能力 |
| ESFP-S25 | surface_record | [评论所在页](https://www.bilibili.com/video/BV1dT411P7S6/) | S21 视频下的理想化、污名化与极端自我描述评论集合 | Bilibili | 2022—2024，具体 rpid 见审计说明 | 原始评论表述风险集合 | 多名用户；同一视频刺激、非随机排序 | 是，OpenCLI `comments` | 仅审计正负极化、孤独归因、道德化与伪统计风险 | 评论同时出现“高阶 ESFP 开心果”、讨厌 ESFP、害怕孤独、万能且不会害人，以及无来源的自杀率最高说法；均不得当作类型事实 |
| ESFP-S26 | surface_record | [原笔记](https://www.xiaohongshu.com/search_result/6a112555000000000603384a) | 小橘温温 / 和 ESFP 刚认识很活泼，为啥后面就安静了呢？ | 小红书 | 2026-05-23 | 图片笔记元数据 | 作者原笔记；可读正文栏只有话题标签 | 部分：OpenCLI 可读字段，图片和评论未核验 | 仅作为“熟悉后安静”讨论的待核验路线 | 标题提出情境变化，但正文观点不可读；342 赞、79 收藏、264 评论只说明该页面有互动，不支持特征或频率 |
| ESFP-S27 | evidence_source | [原页](https://www.bilibili.com/video/BV1DQi9YeEg7/) | 火锅森 / 职场英文实战！代表小组给高层介绍产品 | Bilibili | 2024-12-05 | 作者职场视频页面与完整简介 | 作者简介自称“产品经理 PM ESFP”；页面为本人工作内容说明 | 是，标题、简介、作者简介可读 | 仅支持一个自认 ESFP 创作者的结构化职业表达个案 | 简介逐项说明产品、挑战、用户痛点、重点方向、目标、执行理由、数据和案例；可反驳“ESFP 必然不认真、不能组织复杂内容”的全称命题，但不能证明类型能力或实际工作质量 |
| ESFP-S28 | surface_record | [原回答](https://www.zhihu.com/question/581110222/answer/3421827035) | 不同 MBTI 类型的人，在玩角色扮演游戏时会选择什么属性的角色？为什么？ | 知乎 | 日期未核验 | 调查数字与类型解释的转载式回答 | 原始数据来源、样本招募与计算方法在可见结果中不完整 | 部分：搜索返回长节选，直接打开失败 | 仅审计“多人游戏、派对游戏、身体体验”包装 | 回答列出 ESFP 游戏偏好百分比并做类型化解释，但方法链不可审计，不进入特征证据，也不用于比例结论 |
| ESFP-S29 | evidence_source | [原文](https://www.bilibili.com/opus/963652006828834817) | 【MBTI】16 人格全认知过程专业科普｜持续更新 | Bilibili | 2024（页面搜索结果日期） | 长文类型学解释与方法提醒 | 作者整理并引用多种类型学来源；仍是二手解释，不是实证研究 | 是，正文可读 | 只支持中文平台上存在明确的反类型化提醒 | 文中称人格类型模型不是客观真理，并明确“活跃、健谈、社交”等外显特质不只属于 ESFP/ESTP，也不能据此倒推认知偏好；可用于限制刻板推断，不证明任何 ESFP 行为 |

S25 定位审计：rpid 133070780992（2022-10-09）使用“高阶”并把夸张举止归因为害怕孤独；rpid 208542077696（2024-02-17）以单个同学经历表达厌恶；rpid 213171047664（2024-03-20）同时理想化 ESFP 并提出无来源的自杀率比较。这些只用于识别创作风险，不进入任何特征的证据列。评论点赞和 OpenCLI 搜索排序分均未使用。

## 4. 中性特征—证据表

“特征”在这里是网络表述主题，不是人格事实或行为模型。独立簇按“类型参考”和“Reddit 社区”保守计数；S01 与 S02 不当成两次实证复现，多个 Reddit 帖也不冒充多个平台。Bilibili、抖音仅为 `surface_record`，不会进入“evidence source IDs”。

| feature_id | neutral recurring representation | evidence source IDs | independent clusters | counterevidence | discourse confidence | creative value | risk/qualification | permitted use |
|---|---|---|---:|---|---|---|---|---|
| ESFP-F01 | 对共同参与、现场体验和让活动更有趣的重视反复出现，但体验不等于派对 | ESFP-S01, ESFP-S02, ESFP-S03, ESFP-S14 | 2 | S03 有偏好小聚、独处与倾听者；S14 同帖同时有夜生活爱好者和多数时间独处阅读者 | cross-platform recurring；含强反例 | 保留“共享体验”的行动质感 | S18 的“线下狂欢”只是玩笑包装；不得写成嗜酒、吸毒、永远外出或必须当气氛中心 | 可作为可选兴趣/表达主题，不能设为固定生活方式 |
| ESFP-F02 | 外向表达、幽默或带动氛围常被强调，但是否主动争夺聚光灯取决于人和场合 | ESFP-S01, ESFP-S02, ESFP-S03, ESFP-S12, ESFP-S22, ESFP-S23, ESFP-S29 | 3 | S03 有安静、只在合适情境参与者；S12 有反对“吵闹、只有外向表演”者；S22/S23 分别强调观察场面和不喜欢冷场而非求关注；S29 明确外显的活跃、健谈、社交不能反推类型 | cross-platform recurring；分歧显著 | 区分“表达可见”与“索取关注” | S15、S18、S21、S25 显示认知贬低、吵闹和极化包装风险；S22/S23 未显式确证自我类型；S29 是方法提醒而非群体样本 | 可用于情境化表现，必须允许低调与观察者版本 |
| ESFP-F03 | 即兴、保持弹性和临场调整是反复表述，同时不少自述会为重要体验和目标做规划 | ESFP-S01, ESFP-S02, ESFP-S08, ESFP-S09, ESFP-S14, ESFP-S27 | 3 | S09 包含长期规划、分析职业和高学业投入；S08 有“有框架但可改”的偏好；S27 是自认 ESFP 的产品经理以目标、执行、数据和案例组织汇报的中文个案 | cross-platform recurring；“完全不规划”被明确反驳 | 呈现计划与变化并存 | 不能从 P 推导失约、负债、无责任或没有未来；S02 的信用卡警示只是站点叙事；S27 不证明实际工作质量 | 可讨论弹性需求，不可固定为冲动惩罚机制 |
| ESFP-F04 | 网络中常把现实、具体、可行动的关注称为“浅”，社区自述则把它描述为另一种有意义的深度 | ESFP-S01, ESFP-S03, ESFP-S09, ESFP-S11, ESFP-S12, ESFP-S24, ESFP-S27 | 3 | S11 有人确实对部分抽象话题没兴趣，也有人只在信任后谈情绪；S09 为分析研究与规划反例；S24 为中文学习表现反例；S27 为结构化职场表达个案 | cross-platform recurring；定义争议高 | 为人物保留现实问题、价值和行动型思考 | 不把抽象兴趣、学历、逻辑或话题长度当智力测试；S15、S20 的认知贬低表述仅是风险材料 | 可塑造不同的“深度”入口，禁作智力/道德排序 |
| ESFP-F05 | 明亮、开放的外在形象可能与先独自整理负面情绪、选择性袒露并存 | ESFP-S02, ESFP-S05, ESFP-S11 | 2 | S05 有人会向治疗师或亲近者谈问题；S11 也有人直言对某些问题不感兴趣 | repeated；私人情绪部分主要来自一帖 | 避免“永远开心”的单层形象 | 不能把隐私、创伤或求助方式类型化；不把不立即倾诉解释为欺骗 | 仅作为个体可选的公开/私下反差主题 |
| ESFP-F06 | 冲突回应存在明显双向分歧：有人回避、先整理或需要安全感，也有人偏好立即、直接、具体地谈清 | ESFP-S02, ESFP-S05, ESFP-S06, ESFP-S07 | 2 | S07 同帖即含极度回避与完全不回避者；作者主动提出创伤、依恋和低自尊等替代解释 | context-specific；不能合成统一模式 | 保留“是否现在谈、如何谈”的协商空间 | 不能把冲突升级或回避归因为类型；直接也不等于粗鲁，延迟也不等于冷处理 | 可作为开放沟通偏好，不得预设输赢或道德性 |
| ESFP-F07 | 审美、自我呈现和身体可见性被类型页突出，但社区对展示、舒适和不安全感的回答高度不同 | ESFP-S02, ESFP-S10 | 2 | S10 同帖从自信展示到不愿展示、仅在安全关系中舒适均存在 | repeated packaging；experience heterogeneous | 可保留审美或穿搭的个人意义 | 不从衣着推断性行为、同意、虚荣或忠诚；性别化风险高 | 只可作为可选自我表达，不能做人物鉴定线索 |
| ESFP-F08 | “滥情、易厌倦、不能维持长期关系”是可见负面标签，但自述反复拒绝由类型推断忠诚 | ESFP-S02, ESFP-S03, ESFP-S04, ESFP-S12, ESFP-S13 | 2 | S13 同帖既有曾出轨个案也有长期忠诚经验；S04 强调离开不健康关系与因无聊离开不同 | repeated stereotype with direct counterevidence | 可讨论承诺的个人定义和关系条件 | 不能从 MBTI 预测出轨、性欲、官配或关系寿命；S18 官配内容仅作风险审计 | 只可提出双向协商问题，禁作配对、评分或结局依据 |
| ESFP-F09 | “重物质”常与享受感官、品质和即时体验混在一起；部分自述更认同“体验优先于物品” | ESFP-S01, ESFP-S02, ESFP-S14 | 2 | S14 有人承认部分物质偏好，也有人多数时间安静阅读；缺少中文一手材料 | context-specific；概念边界不稳 | 区分物品、体验、品质与炫耀 | 不能推断消费能力、财务纪律或阶层；站点的财务警示没有代表性数据 | 仅可作为价值取舍的开放主题，不设固定消费行为 |

## 5. 反证与风险审计

- **“永远是派对中心”**：S03 与 S14 都有喜欢独处、小聚或只在特定情境参与的自述；S12 也记录对吵闹、派对动物标签的直接反感。喜欢共同活动不等于嗜酒、夜店或需要成为焦点。
- **“浅薄、愚笨、没有内在世界”**：S09 的分析职业与长期规划、S11 对现实问题和价值的“深度”定义，以及 S12 的多条反驳阻止这种推断。它们也不反向证明所有 ESFP 都聪明或深刻；这里只能确认标签受到争议。
- **“只活当下，所以不规划、不负责”**：S08 区分无计划与保留调整空间；S09 有详细规划和目标投入。S02 的负债、信用卡与长期责任警示是商业类型页的概括，不应直接变成角色后果。
- **“快乐外向，所以没有低落或不会隐藏问题”**：S05 多人描述先独自整理、在安全关系中再表达。不能把私人处理方式浪漫化为坚强，也不能用类型替代对实际求助需要的判断。
- **“回避冲突”或“喜欢制造冲突”**：S06 偏好直接谈清，S07 同帖含回避、立即表达和非类型归因。两种全称结论都不成立。
- **“爱打扮、身体自信，所以性开放/爱调情”**：S10 的回答高度异质；S03、S13 直接反对将感官、外向或穿着连接到性行为与忠诚。衣着和身体展示不提供同意信息。
- **“滥情、容易出轨、没有长期承诺”**：S04、S12、S13 都包含反驳和长期关系自述；S13 也保留了曾出轨的个案，说明个体经历方向不一，不能据此计算类型风险。
- **“物质主义”**：S14 有体验优先、物品优先及部分认同的不同回答。不能把喜欢品质、美感或旅行自动解释为虚荣，也不能把“体验优先”包装成更高尚。
- **中文平台风险**：S15 把 ESFP 与“看不下纯理性分析”联系，S18 评论把 ESFP 与吵闹、线下狂欢联系，S19 把四个类型合并成“讨厌的黄人组”。这些只证明标签可见，不证明认知能力、社交行为或道德特征。
- **OpenCLI 补充的负面包装**：S20 将冲动、自我中心、难沟通与性别分布解释成类型机制，但没有样本或方法；S25 同一评论区又同时出现“高阶开心果”、厌恶、万能善良及无来源自杀率说法。正负极化都不能升级为特征。
- **中文反刻板印象个案**：S22/S23 把安静观察、活跃冷场与“爱出风头”区分，S24 明确反驳“ESFP 就是差生、不认真”的他人预设。三者来自同一视频评论区，且两条未显式声明自我类型，只能作为有限的中文话语补充。
- **新增中文职业反例与方法提醒**：S27 的作者简介自称 ESFP，其职场视频简介呈现目标、执行、数据和案例的结构化组织，只能反驳“必然不能认真规划”的全称说法；S29 则明确提醒外显的活跃、健谈和社交不能反推类型。两者都不是群体能力证据。
- **小红书标题不可代替内容**：S26 的标题直指“刚认识活泼、之后安静”的情境变化，但可读正文只有标签，图片和评论未核验；互动数也不能把标题升级为反刻板证据。
- **低置信梗与官配**：S17 明确自称纯刻板印象玩梗；S18 为官配视频。两者不得影响人物能力、好感分、冲突归责、类型配对或结局。

## 6. 代表性统计分支

本次未请求、也未发现能够代表 ESFP 人群的抽样统计，因此不填写代表性统计表。社区回帖、点赞、播放量、可见评论和商业站点描述均不具备明确的目标总体、抽样框、抽样方法、分母与不确定性，不能转写为人口比例或概率。

## 7. 覆盖、独立性与限制

已覆盖 Myers & Briggs Foundation、16Personalities、Reddit r/ESFP、Bilibili、抖音、小红书，以及知乎、Personality Cafe、Tumblr 的搜索路径。扩搜后，合格 `evidence_source` 共 19 条：两条类型参考、十二个 Reddit 讨论、三条 Bilibili 原始评论、一条 Bilibili 自认 ESFP 创作者职业内容和一篇 Bilibili 方法提醒长文；`surface_record` 共 10 条，均来自中文公共平台。F02—F04 现有“类型参考—Reddit—Bilibili”三个来源簇，其余特征仍主要依赖两个簇或局部语境；不能把这一补充解释成中英文样本均衡。

S01 与 S02 均受类型学概念和站点编辑影响，不是彼此独立的心理学验证。Reddit 多帖来自同一社区，用户可能互相阅读、复用功能术语或受 16Personalities 描述刺激；不同帖子和用户名不自动等于统计独立。S03 与 S04 发布于同一天且讨论相近站点描述，尤其要避免双重计票。跨帖作者重合未做全量账号审计。

S22—S25 全部来自 S21 同一视频的评论区，受同一标题、画面和评论排序刺激，合计只算一个 Bilibili 来源簇。OpenCLI 请求 50 条但返回 30 条顶层评论，未读取楼中楼；集合不是随机抽样，也不代表全帖共识。S22/S23 的自我类型只由语境暗示，S24 才明确自称 ESFP，因此三条不能按三个独立个体样本加权。点赞数和排序分不进入置信度。

S27 与 S29 虽同属 Bilibili，但来源形态不同：前者是一名创作者在个人简介中的自我类型标签与职业内容说明，后者是类型学长文的方法提醒；它们能扩充中文反例和边界，却仍只算一个 Bilibili 平台簇。S27 的职业年限、自称类型和视频描述无法验证实际工作表现，S29 的理论整理也不是实证研究。S26 只读到元数据和标签，其图片、评论及作者是否自认 ESFP 均未知；小红书不进入任何特征的证据列。

Reddit 样本是自我选择的英语社区：反刻板印象查询更易找到受伤或否认者，关系与冲突查询更易找到正在求助者。自我判型、他人判型、年龄、九型、神经多样性、依恋、创伤、文化背景和关系史均可能影响叙述；本研究无法分离这些因素。个别帖子包含敏感关系或心理健康经历，只保留与审计有关的最小概要。

中文覆盖仍明显较弱。Bilibili 已通过 OpenCLI 读取一个视频下的 30 条顶层评论，并通过公开网页完整读取 S27、S29，但没有观看视频或取得字幕；抖音仍只读取搜索返回中的公开页面字段与部分可见评论；知乎完整读取的一篇回答不是自述，扩搜所得 S28 又缺少可审计方法链。小红书 S26 只读到标题、标签和元数据。豆包返回旧对话而非本题答案，未被采用。没有绕过登录、没有调用智能文稿作为原话、没有联系作者，也没有在社交平台执行点赞、评论或发帖。因此当前结果不能称为中英文对等覆盖，更不能声称中文社区与英文社区达成共识。

本轮没有做平台全量采样、热度趋势、年龄/性别分层、跨类型对照或纵向跟踪。也无法确认“共同体验、现实行动、弹性规划”等表述是否对 ESFP 特异；许多主题可能普遍存在于各种类型与关系中。检索达到的是创作研究的可审计起点，不是饱和综述。

## 8. Stage-02 交接

**证据层**：ESFP-F01—F09 及其 `evidence_source` 是唯一可进入下一阶段的证据输入。S03、S04、S07、S09、S10、S11、S13、S14、S22—S24 中的反例与分歧必须随特征一起携带，不能只摘“好写”的一侧。S15—S21、S25 只能用于表述风险和反刻板印象检查。

**解释层**：后续若进入 Stage 02，可把“共享体验但不必成为派对中心”“保持弹性但也能规划”“现实行动与被误判为浅薄”“明亮外在与私人整理”“直接沟通和延迟处理的协商”“审美表达与身体边界”“承诺由个人价值和关系条件决定”视为候选主题。它们是研究者基于网络叙事的综合解释，不是 MBTI 决定的行为规律，也不是已经批准的关系模型。

**开放问题**：优先补充可完整读取、作者明确自认 ESFP 的中文长自述，并寻找不同中文社区对安静社交、规划、冲突和承诺的反例；S22—S24、S27 都不能替代多平台长文，核验 S15—S17、S21、S26 的视频或图片正文前也不得提升类别。知乎搜索所得其余回答及 S28 仍是未核验或方法不透明路线，不支持特征。若未来要比较 ESFP 与其他类型，需另行设计同查询、同平台、同时间窗的对照研究。现有材料不支持性别差异、类型官配、恋爱难度、忠诚概率或类型特异性。

本文件停留在 Stage 01，不产出关系阶段行为、冲突维度、状态变量、候选事件、对白、选项、分值、规则或结局。ESFP 当前也不在仓库列出的十个生产可玩类型中；是否扩展运行时属于另行确认的后续范围。

## 9. 验收记录

- [x] 权威 Markdown 已写入 `docs/research/esfp-stereotype-data.md`。
- [x] 九个 `feature_id` 的 evidence source IDs 只引用十九条 `evidence_source`。
- [x] 类型参考、社区自述、中文公共平台及失败路线均有记录。
- [x] 来源簇保守计数，未把同站多帖、同日讨论或搜索命中当成独立验证。
- [x] 负面标签均有反证或明确覆盖缺口；表层记录和低置信梗未进入特征证据列。
- [x] 明确未开启代表性统计分支，未声称人口频率或科学效度。
- [x] 交接区分证据、解释与开放问题，未越界进入行为、事件或游戏机制。

验证范围仅此研究文档；未修改运行时内容，未执行与文档无关的构建或路径分析。
