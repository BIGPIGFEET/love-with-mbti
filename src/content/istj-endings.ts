import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const istjEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突中止关系",
    coreCopy:
      "计划怎么改、帮助意味着什么、什么时候暂停，本来都可以逐项讨论。后来，对话只剩谁必须服从、谁更有资格定义事实。TA 不再继续列出方案：‘我们已经不是在解决分歧，而是在要求对方放弃自己。到这里吧。’",
    reasonCopy:
      "具体成本被说成死板，尖锐反馈被类型羞辱回击，暂停被逼问打断，承诺也被推成牺牲测试。不断升级的对抗最终盖过了原本可以修复的问题。",
    stateSummary: "未解决的压力、防御与对抗已经压过继续沟通的空间，关系在冲突中终止。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "不适终止相处",
    coreCopy:
      "TA 开始回避说出真实限制：不方便某个时间、不想接管问题、需要暂停，甚至承认自己犯错，都可能再次被解释、扩大或越过。最后，TA 收回共同安排，也不再把真实需要放进这段相处。",
    reasonCopy:
      "帮助被扩张成长期义务，暂停被阻止，失误被用来要求全面检查，关系确认也滑向交出隐私和生活。即使有靠近的意图，实际互动已经失去可以安心说不的空间。",
    stateSummary: "相处中的自在与可拒绝空间已经耗尽，继续接触不再安全或舒适。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任破裂告别",
    coreCopy:
      "TA 不再告诉你哪些事真的能做到，也不再把重要安排交给你一起决定。以前说好的时间、答应过的事和补救办法，没有一次次变成可靠的行动。TA 最终选择告别。",
    reasonCopy:
      "用沉默测试心意、把共同决定的责任推给 TA、隐瞒自己做不到的承诺，或在边界说清后继续施压，让语言和实际行为反复分离。强烈好感无法替代可信。",
    stateSummary: "对诚实说明、边界尊重和承诺兑现的信赖已经跌破继续关系的底线。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "初见没有下次",
    coreCopy:
      "你们仍然礼貌地结束第一次见面，却没有把下一次写进日程。那份初见草案停在聊天记录里，简短消息也没有再通向新的邀约。",
    reasonCopy:
      "共同安排和表达节奏没有形成双方都愿意延续的方式。有人想继续了解，但吸引、信任或自在还不足以支持第二次见面。",
    stateSummary: "关系停在初识；没有下一次不表示任何一方失败、无趣或不值得被喜欢。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系逐渐淡去",
    coreCopy:
      "你们曾分享近况，也尝试翻译帮助和关心的含义。后来，具体邀约退回偶尔问候，需要共同确认的安排越来越少，联系就在没有新的承诺中慢慢停下。",
    reasonCopy:
      "支持方式没有找到可持续的范围，行动与情感信号仍然错位，已确认安排造成的影响也没有得到足够修复。小落差累积后，关系失去了下一步。",
    stateSummary: "吸引、信任、舒适或冲突状态没有共同支持继续接触，关系自然淡去。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系停在熟人",
    coreCopy:
      "你们仍会在共同活动里礼貌配合，也能交换一些近况。但尖锐反馈后的重谈、暂停后的返回和失误后的修复，没有累积成更私人的亲密基础。",
    reasonCopy:
      "双方保留了基本尊重，却没有建立足够稳定的影响承担、等待边界和信任重建。关系因此停在可以往来、但不再继续深入的位置。",
    stateSummary: "关系保留在熟人层面；能够友好互动，但不再向亲密推进。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最终不再往来",
    coreCopy:
      "你们确实走到了关系定义前，也谈过忠诚脚本、排他和现实投入。最后，那些讨论仍没有变成足够可信、自在的日常。共同计划被撤下，你们不再出现在彼此之后的安排里。",
    reasonCopy:
      "完成十次互动没有覆盖已经累积的失信、不适或冲突。明确关系不能替代尊重边界、承担影响和实际修复，双方最终选择结束往来。",
    stateSummary: "关系基础不足以继续，最终从彼此生活中退出。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "双方确认恋爱",
    coreCopy:
      "散步结束前，你们把“继续约会”和“只和彼此约会”都说成了同一个答案。以后多久联系、遇到改期怎么办，也不再只靠默契。TA 把下次见面记进日历：‘先照我们今天说好的来。’",
    reasonCopy:
      "你们会直说哪天排不开，也会在答应以后认真出现；有话说重了、事情做漏了，还能回来把问题处理完。这次确定关系，是两个人都开口答应的结果。",
    stateSummary: "双方已经明确确认恋爱；关系的稳定程度由附带评价继续说明。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋尚未站稳",
    coreCopy:
      "你们决定以恋爱关系继续靠近，心动和共同时间都迅速增加。可是，帮助会不会变成义务、限制能否及时说出、拒绝和暂停是否真的有效，仍有部分没有站稳。",
    reasonCopy:
      "强烈吸引把关系推向确认，但信任或舒适没有同步跟上。全部答应、跳过核对或用永久保证替代眼下说好的事，让恋爱已经开始，基础却仍然摇晃。",
    stateSummary: "浪漫吸引很高，但可靠和自在仍不足；关系成立同时保留明显风险。",
  },
  {
    id: "friends",
    kind: "final",
    title: "明确成为朋友",
    coreCopy:
      "你们还会约展、交换近况，偶尔也请对方帮忙。只是那些准时出现、记得细节和一起做事的时刻，不再被猜成恋爱信号。你们都愿意把这段联系留在朋友的位置。",
    reasonCopy:
      "相处已经足够放心，分歧之后也能继续来往，只是心动没有走到恋爱。你们没有勉强升级关系，也没有因此否定已经建立的友谊。",
    stateSummary: "双方形成稳定友谊；互惠与尊重成立，但没有确认恋爱。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧尚无定论",
    coreCopy:
      "下次见面还在日历里，不过“我们算什么”没有定下来。你们都不再拿“ISTJ 会一直忠诚”当答案；只是要不要排他、以后见多频繁，还有人没想好。",
    reasonCopy:
      "好感还在，见面也会继续，但有人暂时答应不到更远。你们没有把沉默当默认同意，先让关系停在还可以继续谈的位置。",
    stateSummary: "联系与好感仍在，关系尚未定性；之后可能继续、改变或结束。",
  },
];

export const istjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "恋爱稳步落地",
    copy:
      "有人临时改时间会提前说，做不到的事不会先硬答应；就算争吵要停，也知道什么时候回来接着聊。日程不是一成不变，但你们对彼此说的话越来越靠得住。",
    badge: "关系评价：恋爱稳步落地",
  },
  {
    id: "romance_hidden_risk",
    title: "恋爱仍有隐患",
    copy:
      "你们已经在一起了，不过有些“都可以”背后可能还藏着勉强。下一次计划改变、有人说不，或者需要暂停时，眼下的安心还能不能站住，要看之后怎么做。",
    badge: "关系评价：恋爱已确认，仍有隐患",
  },
];

export const istjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA愿意把下一次见面再往前放一点。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA开始主动为新的共同时间留出位置。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA已经明确想把这段关系继续往浪漫方向推进。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA对继续靠近少了一点期待。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA开始把单独见面退回普通往来。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA已经不愿再把你们的互动理解成浪漫发展。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA愿意把一小部分计划和真实限制交给你讨论。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA开始相信草案、承诺和变化都能被你认真区分。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "遇到重要安排，TA会先来问你的意见。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA对这次说法能否兑现留下一点疑问。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA开始怀疑说清的承诺和边界是否真的有效。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA把重要安排和脆弱信息从你这里收了回去。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA说话时少了一点预先防备。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA不必把每句话和每个安排都提前解释到底。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA敢直接告诉你“这次不行”，也不怕一个失误毁掉关系。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "TA开始为每句话多留一层防线。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA开始缩小帮助、分享和共同安排的范围。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA已经不愿再把真实需要和个人空间交进这段相处。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "一个没说清的定义又留在了你们之间。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "计划、影响和关系含义开始纠缠成拉扯。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "对话已经被逼迫、防御和人格攻击占满。",
  },
  {
    id: "conflict_down_slight",
    dimension: "conflict",
    direction: "down",
    strength: "slight",
    text: "刚才卡住的一处定义稍微松开了。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "你们把承诺、影响和下一步重新拆清了。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "这场僵持终于有了下次接着说的时间。",
  },
];

export const istjFeedbackTextById = Object.fromEntries(
  istjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
