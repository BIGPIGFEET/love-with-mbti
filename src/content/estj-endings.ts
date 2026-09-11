import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const estjEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "关系止于争执",
    coreCopy:
      "计划、支持和关系定义不再是可以一起调整的事，只剩谁必须照做、谁要为结果负责。TA 停下继续争辩：‘我们已经不是在解决问题，而是在争夺谁能替对方决定。到这里吧。’",
    reasonCopy:
      "现实容量被变成在乎程度的测试，表达错位被升级为否定，隐私伤害又遭到公开反击。不断累积的逼迫与防御盖过了具体问题，也耗尽了继续修复的空间。",
    stateSummary: "未解决的对抗已经压过沟通与协商，关系在持续争执中终止。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "不适中止关系",
    coreCopy:
      "TA 开始避免说出真实限制：改计划、需要休息、不愿公开私人信息，或对某种关系安排说不，都可能换来新的要求。最后，TA 收回共同清单，也停止把自己的时间和边界放进这段相处。",
    reasonCopy:
      "未经同意的接手、要求牺牲其他责任、强迫复刻计划或交出私人空间，让‘可以修改和拒绝’逐渐失效。即使仍有靠近的意图，相处已经不再让人安心。",
    stateSummary: "自在、边界和可拒绝空间已经耗尽，继续接触不再安全或舒适。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任已经破裂",
    coreCopy:
      "TA 不再告诉你自己到底能做到多少，也不再把重要安排和私下的话交给你。那些说过会先问、会按时回来、不会越线的话，没有变成足够可靠的行动。TA 最终停下了这段关系。",
    reasonCopy:
      "替别人决定后又推卸责任、把全部不确定留给一方承担，或用秘密反击秘密，让承诺和实际行为反复分离。心动与效率都无法替代可信。",
    stateSummary: "对诚实、授权和兑现的信赖已经跌破继续关系的底线。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "没有第二次见面",
    coreCopy:
      "城市寻宝结束后，你们礼貌道别，却没有再把下一次见面写进任何人的安排。TA 没把一次配合不顺或支持节奏不同判成谁有问题，只是没有继续推进。",
    reasonCopy:
      "初识中的分工授权和支持方式没有形成双方都愿意延续的节奏。有人试着靠近，但兴趣、信任或自在还不足以支撑第二次见面。",
    stateSummary: "关系停在初识；没有下次不代表任何一方失败或不值得被喜欢。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系渐渐淡去",
    coreCopy:
      "你们认真约过下一次，也一起处理过计划和任务。后来，具体邀约退回偶尔问候，那些需要双方确认时间、范围和责任的内容不再继续出现。",
    reasonCopy:
      "计划弹性没有变成共同承担，接手后的边界也未能修复；繁忙期的联系安排不足以支持下一步。几次没有接住的小落差，让关系慢慢失去延续的力量。",
    stateSummary: "吸引、信任、舒适或冲突状态没有共同支持继续接触，联系自然淡去。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "停在普通熟人",
    coreCopy:
      "你们仍会礼貌回应近况，也能在共同活动里完成必要配合。但实际照顾怎样被接收、私人信息如何保管、计划变化怎样处理，不再继续进入更亲密的位置。",
    reasonCopy:
      "长期表达错位、隐私修复或承诺变更没有累积成足够稳定的关系基础。双方保留了基本尊重，却没有继续承担更深相处所需要的开放与修复。",
    stateSummary: "关系保留在熟人层面；可以友好往来，但不再向亲密推进。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最后回到陌生",
    coreCopy:
      "你们走到了关系定义之前，也谈过忠诚想象、实际承诺和各自的边界。最后，这些讨论仍没有变成足够可信、自在的日常。TA 删除了尚未确认的共同安排，你们不再进入彼此之后的计划。",
    reasonCopy:
      "走到最后，也不能把先前积下的失信、不适和争吵一笔勾销。把关系说清，更补不上那些缺少尊重、没有收拾好的伤害。你们最终不再往来。",
    stateSummary: "关系基础不足以继续，最终从彼此生活中退出。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "确认恋爱关系",
    coreCopy:
      "把关系说清的那晚，TA 没有拿过去的准时和帮忙当作默认答案。你们都说了愿意认真继续，也愿意排他。TA 把下一次约会从“暂定”改成“确认”：‘先把现在答应的做好。’",
    reasonCopy:
      "计划可以改，帮忙之前会先问，做错的事也有人正面收拾。你们没有用效率或牺牲证明感情，而是把各自真正愿意做的事说了出来。",
    stateSummary: "双方已明确确认恋爱；关系的稳定程度由附带评价继续说明。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "心动但不安全",
    coreCopy:
      "你们选择继续以恋爱关系靠近，心动和共同未来感都很强。可是，计划能否真的修改、拒绝会不会被接住、私人空间是否会被保留，仍有部分没有站稳。",
    reasonCopy:
      "强烈吸引推动关系快速向前，但信任或舒适没有同步跟上。勉强答应全部安排、用牺牲证明认真，或让浪漫保证盖过真实限制，使恋爱成立的同时留下明显风险。",
    stateSummary: "浪漫吸引很高，但可靠和自在仍不足；关系成立同时保留安全隐患。",
  },
  {
    id: "friends",
    kind: "final",
    title: "成为可靠朋友",
    coreCopy:
      "你们还是会一起安排活动。谁负责订票、谁只想听几句安慰，都能直接说。准时出现和顺手帮忙不再被猜成恋爱，却让这段友谊变得很可靠。",
    reasonCopy:
      "你们适合并肩做事，也能在不舒服时停下来重谈，只是心动没有走到恋爱。双方都没有把朋友当成退而求其次。",
    stateSummary: "双方形成稳定友谊；互相尊重与实际支持成立，但没有确认恋爱。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "关系仍未说清",
    coreCopy:
      "下一次见面没有取消，但“我们现在算什么”依然没有定下来。你们不再拿“ESTJ 认定了就不会走”安慰自己，可要不要排他、以后把多少时间留给彼此，仍没谈拢。",
    reasonCopy:
      "你们都愿意继续见面，只是有人还给不出更明确的答案。与其假装已经默认在一起，不如先承认这段关系仍停在半路。",
    stateSummary: "联系与好感仍在，关系尚未定性；之后可能继续、改变或结束。",
  },
];

export const estjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "稳定落进日常",
    copy:
      "不是 TA 永远负责安排，也不是你永远点头配合。谁忙不过来会提前说，计划有变就一起重排；偶尔做错了，也会把造成的麻烦收拾好。日子因此稳，却没有被清单绑住。",
    badge: "关系评价：稳定落进日常",
  },
  {
    id: "romance_hidden_risk",
    title: "靠近仍有隐忧",
    copy:
      "你们已经确认恋爱，但有些利落的“好”可能仍掩着迟疑。等到下次计划被打乱、有人不想配合，或私人空间和效率发生冲突，眼下的稳定才会真正经受考验。",
    badge: "关系评价：恋爱已确认，仍有隐忧",
  },
];

export const estjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA开始期待下一次共同安排。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA明显愿意把更多个人时间留给你。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA已经很难忽略与你继续靠近的心动。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA对下一次邀约少了一点期待。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA开始把共同安排缩回普通联系。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA不再想把这段互动往恋爱方向推进。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA愿意再把一件具体安排交给你共同决定。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA开始相信答应、拒绝和更改都会被说清。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "重要的安排和私下的话，TA都愿意先和你商量。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA对这句承诺多留了一点核对。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA开始怀疑说好的范围和返回是否会兑现。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA把重要决定与私人信息从你这里收了回去。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA在你面前少了一点事事先安排好的紧绷。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA知道自己可以调整计划，也可以直接说不。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA可以直接说做不到，也不用为了显得可靠硬撑。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "TA开始先衡量哪句话会不会引来新的要求。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA逐渐缩小请求、分享和共同计划的范围。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA已经不愿再把真实需要和私人空间放进这段相处。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "一个没说清的权限又留在了你们之间。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "计划、责任和边界开始缠成持续拉扯。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "对话只剩逼迫、反击和争夺决定权。",
  },
  {
    id: "conflict_down_slight",
    dimension: "conflict",
    direction: "down",
    strength: "slight",
    text: "刚才卡住的那一点有了松动。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "你们把意图、影响和下一步重新分开了。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "该改什么、接下来谁来做已经说清，僵持终于结束。",
  },
];

export const estjFeedbackTextById = Object.fromEntries(
  estjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
