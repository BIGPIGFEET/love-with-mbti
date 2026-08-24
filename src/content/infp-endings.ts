import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const infpEndings = [
  {
    "id": "conflict_break",
    "kind": "global",
    "title": "冲突中分开",
    "coreCopy": "你们仍记得最初愿意靠近的理由，但现在每次开口都先准备反驳。暂停没有带来返回，分歧也不再只围绕事情本身。TA 决定结束关系，不再让下一次对话变成下一轮防御。",
    "reasonCopy": "互动里多次出现逼迫立即回应、把不同意见解释成不在乎、否定边界或迁怒。着急和善意没有抵消这些行为造成的影响，未解决的冲突持续累积。",
    "stateSummary": "关系在高冲突下终止，协商和修复已经没有可用空间。"
  },
  {
    "id": "strong_discomfort",
    "kind": "global",
    "title": "相处不再继续",
    "coreCopy": "TA 原本愿意把安静、犹豫和不确定留在你面前。现在，每句话出口前都要先判断会不会被追问、公开取笑或替自己决定。即使没有激烈争吵，这段相处也已经不能让人安心留下。",
    "reasonCopy": "连续追问、强推活动、公开调侃或逼迫当场解决问题，多次越过了表达节奏和退出边界。出发点可能是关心，但持续造成的是压力。",
    "stateSummary": "关系因强烈不适而停止，真实表达和拒绝已难以保留。"
  },
  {
    "id": "trust_broken",
    "kind": "global",
    "title": "失信后告别",
    "coreCopy": "你们仍能说几句客气话，但那封信、那个未来计划和下一次真实需要，都不会再被交到你手里。TA 不再相信说过的话会被按原意接住，也不再把修复寄托给下一次承诺。",
    "reasonCopy": "说好的安排反复不算数、把暗示直接当成承诺、用消失测试关系，或替对方定义没有确认过的意图，让托付一次次失去依据。",
    "stateSummary": "关系因信任破裂而结束，边界、计划和脆弱都无法继续托付。"
  },
  {
    "id": "no_second_meeting",
    "kind": "stage_gate",
    "title": "没有第二次见面",
    "coreCopy": "你们礼貌地在地铁口分开。TA 没有把这次见面解释成失败，也没有否定你这个人；只是这段初识还不足以让双方再交出一个周末。聊天停在这里，没有新的邀约。",
    "reasonCopy": "最初的分享和安静没有找到双方都舒服的节奏，那本书也没有变成下一次见面的具体邀请。",
    "stateSummary": "关系停在初识，没有形成第二次见面的共同意愿。"
  },
  {
    "id": "fade_out",
    "kind": "stage_gate",
    "title": "联系渐渐淡出",
    "coreCopy": "你们谈过喜欢的作品、约会方式和一个很远的海边，却一直没有把愿景缩成双方都愿意兑现的一小步。消息没有突然消失，只是间隔越来越长，最后谁也没有再续上话题。",
    "reasonCopy": "小礼物和海边想象曾让你们靠近，公开调侃、勉强配合或说得太满的承诺又把距离拉开。“下次”始终没有落地。",
    "stateSummary": "曾经的兴趣没有变成可以继续兑现的下一次。"
  },
  {
    "id": "stay_acquaintances",
    "kind": "stage_gate",
    "title": "关系止于相识",
    "coreCopy": "你们已经知道彼此怎样谈理想、怎样需要空间，也看见过真正的分歧。TA 仍会礼貌回应，偶尔也会聊几句，却不再把私密内容、重要安排或关系期待交给这段往来。",
    "reasonCopy": "倾听常常停在情绪里，暂停也未必有可靠的返回。你们仍会礼貌联系，却不再把更私密的部分交给彼此。",
    "stateSummary": "关系保留为有距离的相识，不再向更私密的位置推进。"
  },
  {
    "id": "strangers_after_all",
    "kind": "final",
    "title": "最终成为陌生人",
    "coreCopy": "你们曾记得彼此说过的小事，也认真讨论过关系应该是什么样。最后，这些讨论没有变成足以继续往来的安全和可信。通讯录里的名字还在，生活却不再给彼此留位置。",
    "reasonCopy": "走到关系确认前，重要需要仍被忽略，暂停没有可靠返回，或分歧持续压过修复。曾经用心并不虚假，但它不足以支撑之后的亲密或友谊。",
    "stateSummary": "最终关系断开，双方回到不再往来的陌生状态。"
  },
  {
    "id": "confirmed_relationship",
    "kind": "final",
    "title": "正式确认恋爱",
    "coreCopy": "你们没有把一封信当作全部答案，也没有要求每次靠近都依赖临时灵感。TA 和你一起说清了恋爱意愿，并把见面、改期、独处和冲突后如何回来，变成双方都认可的安排。",
    "reasonCopy": "持续的吸引得到可靠行动、真实表达和边界协商的支持；彼此既能说愿意，也能说不和暂停，分歧仍保有修复空间。",
    "stateSummary": "双方已确认恋爱关系；稳定程度由附带的关系评价继续说明。"
  },
  {
    "id": "dangerous_lovers",
    "kind": "final",
    "title": "强烈但不稳的恋爱",
    "coreCopy": "你们强烈地被彼此吸引，下一次见面甚至不用谁来提。可是，重要的话是否算数、拒绝能否被接住、冲突后会不会回来，仍没有可靠答案。靠近是真的，不安也是真的。",
    "reasonCopy": "关系主要由强烈心动推动，信任或自在却没有同步站稳。浪漫表达很多，能够兑现的协议和修复方式仍然不足。",
    "stateSummary": "你们已经相恋，只是浪漫跑在了可靠和安心前面。"
  },
  {
    "id": "friends",
    "kind": "final",
    "title": "成为稳定朋友",
    "coreCopy": "TA 仍会在看到那款停产游戏时想起你，也愿意听你讲工作受挫或新的计划。你们不再把记住细节、赠送小物或安静陪伴都解释成暧昧，却都愿意认真保留这段关系。",
    "reasonCopy": "真实表达、倾听、边界和修复足以支撑稳定往来，但双方的浪漫吸引没有改变关系性质。没有恋爱不等于这段连接价值更低。",
    "stateSummary": "双方形成稳定友谊，而不是等待转正的恋爱候补。"
  },
  {
    "id": "unresolved_ambiguity",
    "kind": "final",
    "title": "关系仍未说定",
    "coreCopy": "你们谈过排他、联系频率和冲突后如何回来，却仍有一部分关系没有被双方共同命名。下一封信也许还会来，但它通向恋爱、友谊还是一次告别，现在都没有被替谁决定。",
    "reasonCopy": "长信和下一次见面都还可能发生，只是排他、称呼和日常节奏仍没有得到同一个答案。靠近与保留同时存在。",
    "stateSummary": "关系继续开放但尚未定性，不承诺之后必然升级或结束。"
  }
] as const satisfies readonly EndingContent[];

export const infpRelationshipEvaluations = [
  {
    "id": "romance_stable",
    "title": "稳定恋爱关系",
    "copy": "你们的稳定不来自从不扫兴或从不分歧，而来自可以说“不”、可以暂停，也会按约回来。愿景有能够执行的小版本，浪漫也有双方确认的边界和修复方式。",
    "badge": "关系评价：稳定恋爱"
  },
  {
    "id": "romance_hidden_risk",
    "title": "恋爱仍有隐患",
    "copy": "你们已经决定恋爱，但有些安排仍靠猜，有些不舒服也会先收起来。下一次愿望落空或争执暂停时，能不能按说好的方式回来，还需要行动回答。",
    "badge": "关系评价：恋爱已确认，仍有隐患"
  }
] as const satisfies readonly RelationshipEvaluationContent[];

export const infpFuzzyFeedback = [
  {
    "id": "attraction_up_slight",
    "dimension": "attraction",
    "direction": "up",
    "strength": "slight",
    "text": "TA把原本收住的靠近又往前放了一点。"
  },
  {
    "id": "attraction_up_medium",
    "dimension": "attraction",
    "direction": "up",
    "strength": "medium",
    "text": "TA明显更期待下一次只属于你们的时间。"
  },
  {
    "id": "attraction_up_strong",
    "dimension": "attraction",
    "direction": "up",
    "strength": "strong",
    "text": "TA已经开始主动把“下次”说成具体安排。"
  },
  {
    "id": "attraction_down_slight",
    "dimension": "attraction",
    "direction": "down",
    "strength": "slight",
    "text": "TA对下一步少了一点期待。"
  },
  {
    "id": "attraction_down_medium",
    "dimension": "attraction",
    "direction": "down",
    "strength": "medium",
    "text": "TA不再像刚才那样想继续靠近。"
  },
  {
    "id": "attraction_down_strong",
    "dimension": "attraction",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经很难把这种拉扯继续理解成心动。"
  },
  {
    "id": "trust_up_slight",
    "dimension": "trust",
    "direction": "up",
    "strength": "slight",
    "text": "TA愿意把你的话多当真一点。"
  },
  {
    "id": "trust_up_medium",
    "dimension": "trust",
    "direction": "up",
    "strength": "medium",
    "text": "TA开始认真把你的话算进之后的安排。"
  },
  {
    "id": "trust_up_strong",
    "dimension": "trust",
    "direction": "up",
    "strength": "strong",
    "text": "TA相信重要的事可以交给你共同决定。"
  },
  {
    "id": "trust_down_slight",
    "dimension": "trust",
    "direction": "down",
    "strength": "slight",
    "text": "TA对你刚才的说法留下了一个问号。"
  },
  {
    "id": "trust_down_medium",
    "dimension": "trust",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始怀疑这句话之后会不会算数。"
  },
  {
    "id": "trust_down_strong",
    "dimension": "trust",
    "direction": "down",
    "strength": "strong",
    "text": "TA不再愿意把重要的事放进这段关系。"
  },
  {
    "id": "comfort_up_slight",
    "dimension": "comfort",
    "direction": "up",
    "strength": "slight",
    "text": "TA在你面前少斟酌了一句话。"
  },
  {
    "id": "comfort_up_medium",
    "dimension": "comfort",
    "direction": "up",
    "strength": "medium",
    "text": "TA明显更敢直接说出自己的需要。"
  },
  {
    "id": "comfort_up_strong",
    "dimension": "comfort",
    "direction": "up",
    "strength": "strong",
    "text": "这一刻，你们都不必预演下一句话。"
  },
  {
    "id": "comfort_down_slight",
    "dimension": "comfort",
    "direction": "down",
    "strength": "slight",
    "text": "对话里多了一点需要小心绕开的地方。"
  },
  {
    "id": "comfort_down_medium",
    "dimension": "comfort",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始把原本会说出口的话收回去。"
  },
  {
    "id": "comfort_down_strong",
    "dimension": "comfort",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经很难在这段互动里放松下来。"
  },
  {
    "id": "conflict_up_slight",
    "dimension": "conflict",
    "direction": "up",
    "strength": "slight",
    "text": "这件事留下了一点尚未处理的摩擦。"
  },
  {
    "id": "conflict_up_medium",
    "dimension": "conflict",
    "direction": "up",
    "strength": "medium",
    "text": "你们已经不只是在讨论不同答案。"
  },
  {
    "id": "conflict_up_strong",
    "dimension": "conflict",
    "direction": "up",
    "strength": "strong",
    "text": "这场互动正在迅速失去修复空间。"
  },
  {
    "id": "conflict_down_slight",
    "dimension": "conflict",
    "direction": "down",
    "strength": "slight",
    "text": "刚才的分歧松开了一点。"
  },
  {
    "id": "conflict_down_medium",
    "dimension": "conflict",
    "direction": "down",
    "strength": "medium",
    "text": "你们找到了让分歧停下来、以后再谈的方法。"
  },
  {
    "id": "conflict_down_strong",
    "dimension": "conflict",
    "direction": "down",
    "strength": "strong",
    "text": "积着的敌意终于退回到可以好好说话的位置。"
  }
] as const satisfies readonly FuzzyFeedbackContent[];

export const infpFeedbackTextById = Object.fromEntries(
  infpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
