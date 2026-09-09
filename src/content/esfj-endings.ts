import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const esfjEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突终止关系",
    coreCopy:
      "雨天要送到哪里、末班车前是否改道、共同事务由谁接手，本来都能逐项商量。后来，提醒被当成控制，拒绝被当成不在意，过去的照顾也被拿来要求服从。TA停下解释：‘我们已经听不见彼此，只剩下谁必须让步。到这里吧。’",
    reasonCopy:
      "故意不回消息来试探，把关心当成恶意，没商量就替对方答应事情，或拿过去的付出要求回报，都让争执越来越多。到最后，你们已没法好好商量，关系也就结束了。",
    stateSummary: "争执和互不相让让你们谈不下去，最终结束了关系。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "不适终止相处",
    coreCopy:
      "TA开始谨慎地收回邀请、分享和帮助。想少坐一会儿、按原路线回家、不再接新任务，甚至该怎样介绍你们，都可能变成新的压力。TA不愿再靠持续周到来维持表面轻松，选择结束相处。",
    reasonCopy:
      "帮助被默认成义务，朋友和兴趣遭到贬低，退出社交或拒绝公开标签的空间也不断缩小。即使还想亲近，TA也很难放心说出自己真正想怎么做。",
    stateSummary: "相处越来越不自在，连说不都很难，TA不想再继续了。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "失信后的告别",
    coreCopy:
      "TA不再把门票、返程、共同任务和关系安排交给你确认。什么时候回消息、各自负责什么、怎么向朋友介绍彼此，都说好过，却没能做到。最后，TA撤下共同计划，认真和你道别。",
    reasonCopy:
      "口头答应与真实意愿不一致，两个人的事被留给TA一个人承担，或明确边界在需要兑现时被再次越过。热情、感谢和一时的心动都无法代替可靠。",
    stateSummary: "TA已经很难相信你的话，也不再相信说好的事会做到，无法继续这段关系。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "初识没有下次",
    coreCopy:
      "那场雨和餐吧里的朋友局结束后，你们礼貌道别，却没有再约下一次。TA没有把一段同行或一次社交邀请解释成必然的缘分，只让相遇停在了当晚。",
    reasonCopy:
      "接受帮助的方式和参与社交的节奏，没有同时形成足够的好感与自在。没有下一次只是这次接触没有继续，不证明谁不够热情或不值得被喜欢。",
    stateSummary: "关系停在初识；没有再见面，并不代表谁不值得被喜欢。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系渐渐淡去",
    coreCopy:
      "你们聊过想去的展览，也交换过各自喜欢的活动。后来，预订没有落定，下一次邀约总在等待回复，共同清单慢慢退回偶尔的消息。",
    reasonCopy:
      "约好的计划、想一起做的事，还有平时怎么联系，你们始终没找到双方都能坚持的相处方式。几次没有说清或没有兑现的期待，让靠近逐渐失去方向。",
    stateSummary: "你们没能积累起足够的好感、信任和自在，也没能把分歧处理好，联系逐渐淡了。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系停在熟人",
    coreCopy:
      "你们仍会在朋友聚会或社区活动里自然打招呼，也能就眼前的小事互相帮忙。但返程安排、旅行分工和额外任务不再由两个人共同承担，关系停在了熟悉而有限的位置。",
    reasonCopy:
      "怎么提醒对方注意安全、事情由谁来做、不愿意时能不能拒绝，你们还没找到合适的相处办法。双方保留礼貌与善意，却不再把彼此放进更私人的计划。",
    stateSummary: "关系保留在熟人层面；可以友好往来，但不再向亲密推进。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最终不再往来",
    coreCopy:
      "你们走到了公开介绍和关系定义之前，也认真谈过投入、空间与承诺。最后，这些讨论仍没有变成足够可信、自在的日常。TA退出共同安排，你们不再出现在彼此之后的计划里。",
    reasonCopy:
      "即使一路相处到了现在，之前的失信、不自在和争执也没有因此消失。加入朋友圈、付出时间和说出恋爱称呼，都不能替代真实同意、平等分工与可兑现的约定。",
    stateSummary: "关系基础不足以继续，双方最终从彼此生活中退出。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "双方确认恋爱",
    coreCopy:
      "这一次，朋友如何介绍、多久联系一次、哪些时间只留给彼此，你们都认真聊过，没有因为气氛好就含糊带过。你们把能承诺的事逐项说清，也说好以后想法变了就再商量。TA看着你笑了：‘那我们就认真在一起，也继续把话说出来。’",
    reasonCopy:
      "你们能接受照顾，也能拒绝不需要的安排；能看见彼此的投入，也不会把感谢变成债务。你们都想清楚了自己愿意承诺什么，决定正式在一起，以后有变化也会再谈。",
    stateSummary: "你们已经确认恋爱，接下来还要看日常相处能否让彼此安心。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋基础未稳",
    coreCopy:
      "你们决定以恋爱关系继续靠近，公开称呼和共同时间都让心动迅速升温。可是，答应是否出于真实意愿、照顾能否被拒绝、付出以后会不会被拿来要求回报，你们还没有完全想清楚。",
    reasonCopy:
      "强烈吸引推动关系越过了尚未解决的信任或舒适问题。为了不让TA失望而全部答应，或用过去的照顾替双方定义关系，都让恋爱成立时保留明显风险。",
    stateSummary: "浪漫吸引很高，但可靠与自在仍不足；关系成立同时带有明显风险。",
  },
  {
    id: "friends",
    kind: "final",
    title: "明确成为朋友",
    coreCopy:
      "你们仍会相约看展、在朋友局里给彼此留座，也能在有人忙不过来时接一小项任务。只是这些邀请和照顾不再被当成恋爱暗示，友情让相处回到更适合双方的位置。",
    reasonCopy:
      "你们能够说明时间、分担现实事务并尊重拒绝，只是浪漫吸引没有走到恋爱。过去的投入没有被拿来索取更亲密的答案。",
    stateSummary: "双方形成稳定友谊；亲近与互惠成立，但没有确认恋爱。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧仍未说定",
    coreCopy:
      "下一次活动或许还会一起参加，只是你们依然没有给这段关系确定称呼。彼此的在意没有消失，可公开到什么程度、是否排他、怎样安排未来，答案仍不完全一致。",
    reasonCopy:
      "双方都有继续了解的意愿，也愿意保留对话，但有人还没有准备好承诺全部关系条件。你们没有让朋友的期待或过去的照顾替自己作答。",
    stateSummary: "联系与好感仍在，关系尚未定性；之后可能继续、改变或结束。",
  },
] as const;

export const esfjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "恋爱稳稳落地",
    copy:
      "关心不再靠抢着替对方做完，承诺也不靠热闹场合证明。需要帮助会先问，计划变化会重谈，谁累了都能说出来，再一起分担手头的事；这样的恋爱已经进入可靠的日常。",
    badge: "关系评价：恋爱稳稳落地",
  },
  {
    id: "romance_hidden_risk",
    title: "恋爱仍藏风险",
    copy:
      "你们已经确认恋爱，但有些热烈回应里仍可能藏着怕扫兴、怕失望或怕不被需要的勉强。等到下一次有人想拒绝帮助、退出聚会或减少联系，你们还需要学着接受对方说不。",
    badge: "关系评价：恋爱已确认，仍藏风险",
  },
] as const;

export const esfjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA又为一次单独相处留出了一点位置。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA更想把朋友之外的时间单独留给你。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA已经想和你一起说清这份靠近。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA对下一次单独邀约少了一点期待。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA开始把靠近收回到普通群体往来。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA不再愿意把这段互动理解为恋爱可能。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA愿意把下一项安排交给你一起确认。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA开始相信临时变化和拒绝都会被认真处理。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "TA愿意告诉你自己有多累、对你们有什么期待，再一起商量怎么办。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA对你这次的答应还有些不放心。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA开始怀疑说好的时间、分工或边界能否落地。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA收回了共同计划和需要你参与的关键决定。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA不必用热闹或周到撑住此刻。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA能直接说想加入、想离开或想换方案。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA无需照顾所有人的反应，也能安心与你相处。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "TA开始先估量你的反应才开口。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA逐渐缩小邀请、分享和求助的范围。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA不再愿意在你面前暴露疲惫与真实选择。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "一个未核对的期待留在了安排里。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "联系、分工和关系身份开始互相牵扯。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "你们越说越像在互相指责、试探，连过去的付出都成了争吵的理由。",
  },
  {
    id: "conflict_down_slight",
    dimension: "conflict",
    direction: "down",
    strength: "slight",
    text: "这次误会被澄清了一小部分。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "你们把请求、边界和下一步分别说清了。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "谁来做什么、希望对方怎么做，你们重新说到了一起，气氛缓和了许多。",
  },
] as const;

export const esfjFeedbackTextById = Object.fromEntries(
  esfjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
