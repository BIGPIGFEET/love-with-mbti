import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const estpEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突逼停关系",
    coreCopy:
      "临时变化、玩笑边界、活动风险和关系定义不再是可以一起处理的事，而成了谁更敢、谁必须服从的较量。TA停下继续回应：\"如果每次分歧都要靠逼迫或羞辱分出输赢，我们只能到这里。\"",
    reasonCopy:
      "胆量测试、公开回击、类型定性、逼迫即时解决或用监控证明认真，让具体问题反复升级成对抗。冲突已经盖过双方重新说明与修复的空间。",
    stateSummary: "未解决的压力与防御已经过高，关系在持续冲突中终止。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "不适终止相处",
    coreCopy:
      "TA不再放心提议新的去处，也不愿继续拿玩笑、礼物或拥抱试探你们的距离。因为任何一个\"不\"都可能被催促、淡化或越过，TA最终收回了继续相处的邀请。",
    reasonCopy:
      "扫兴标签、公开难堪、突然触碰、风险施压或关系监控不断缩小可拒绝空间。即使互动曾经热烈，实际感受已经不再安全自在。",
    stateSummary: "自在、边界与退出空间已经耗尽，继续接触不再舒适。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "失信结束关系",
    coreCopy:
      "TA不再把共同计划、借用需求和真实顾虑交给你商量。说好的先确认、用途变化再询问、暂停后按时回来，没有累积成可依赖的行动。最后，TA选择结束联系。",
    reasonCopy:
      "替双方改票、隐去影响同意的信息、把解释换成类型攻击，或要求用密码和定位担保忠诚，使口头承诺与实际行为分离。强烈好感无法代替可靠。",
    stateSummary: "对诚实、共同决定和边界兑现的信赖已经跌破继续关系的底线。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "初见没有下次",
    coreCopy:
      "闭馆后的备选路线走完，或咖啡喝到见底，你们礼貌道别，却没有再约第二次。TA没有把节奏不同判成谁胆小或无趣，只是让这次见面停在这里。",
    reasonCopy:
      "临时改道与公开玩笑没有形成双方都愿意延续的节奏。有人想继续靠近，但兴趣、信任或自在还不足以支持下一次见面。",
    stateSummary: "关系停在初识；没有下次不等于任何一方失败或不值得喜欢。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系逐渐淡去",
    coreCopy:
      "你们曾一起改过计划，也讨论过低落时到底需要倾听还是行动。后来，消息从具体邀约退回偶尔回应，那台没有借出的相机和没再确认的安排，也就停在聊天记录里。",
    reasonCopy:
      "新鲜感没有转成可靠安排，支持方式持续错位，或影响决定的信息没有被及时更新。几次没有完成的修复，让联系慢慢失去下一步。",
    stateSummary: "见面的兴致和继续投入的把握逐渐变少，联系就这样淡去。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系停在熟人",
    coreCopy:
      "你们在共同活动里仍能自然打招呼，也会交换几句近况。但礼物、身体距离、周末冒险和争执后的返回，不再继续进入更私人的位置。",
    reasonCopy:
      "分项同意、风险边界或暂停协议没有累积成足够稳定的亲密基础。双方保留基本尊重，却不再向更深关系投入。",
    stateSummary: "关系保留在熟人层面；可以友好往来，但不再向亲密推进。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最终不再往来",
    coreCopy:
      "你们谈到了朋友的类型投射，也把排他、公开和身体边界摆上桌面。只是这些对话仍没变成足够可信、自在的日常。TA撤下下一次安排，你们最终从彼此的生活里退出。",
    reasonCopy:
      "完成十次互动没有覆盖已经积累的失信、不适或冲突。共同体验和强烈印象都无法替代知情、尊重与修复，双方最终停止往来。",
    stateSummary: "关系基础不足以继续，你们最终不再联系。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "双方确认恋爱",
    coreCopy:
      "你们没有让刺激、人设或频繁见面替双方作答。约会、排他、公开范围和身体边界被逐项确认，临时变化也有了重新商量的方式。TA看着共同写下的版本：\"这次不是顺着气氛走，是我们都答应了。\"",
    reasonCopy:
      "双方既能共享新鲜体验，也能坦白不想参加、需要暂停或改变主意；出现信息差和冲突时，仍愿意回到具体事实与约定。关系由清楚而可复盘的同意成立。",
    stateSummary: "你们已经确认恋爱，接下来会用真实相处继续检验这份协议。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋仍未站稳",
    coreCopy:
      "你们决定以恋爱关系继续靠近，化学反应和共同体验都很强。但改计划是否会先问、拒绝能否被接住、争执后能否按约回来，仍有部分没有站稳。",
    reasonCopy:
      "强烈吸引推动关系快速向前，信任或舒适却没有同步跟上。冲动承诺、压下疑问或用刺激替代确认，让恋爱已经开始，基础仍明显摇晃。",
    stateSummary: "浪漫吸引很高，但可靠和自在仍不足；关系成立同时保留明显风险。",
  },
  {
    id: "friends",
    kind: "final",
    title: "明确成为朋友",
    coreCopy:
      "你们仍会分享突然发现的好去处，也能直说今天想听建议、只想安静或不参加某项活动。共同体验不再被自动翻译成恋爱，却成为一段双方都愿意保留的友谊。",
    reasonCopy:
      "守约、边界与修复能力足以支持稳定联系，只是浪漫吸引没有累积到改变关系性质。朋友不是退而求其次，而是双方明确选择的位置。",
    stateSummary: "双方形成稳定友谊；信任与自在成立，但没有确认恋爱。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧仍待确认",
    coreCopy:
      "下一次邀约还在，朋友口中的类型剧本已经被放到一边。只是约会、排他、公开或身体边界仍有一项没有得到相同答案，你们决定暂时不把气氛写成承诺。",
    reasonCopy:
      "双方仍愿意靠近，也能谈具体行为，但好感、边界和可兑现安排尚未完全对齐。关系保持开放，不保证会自动升级。",
    stateSummary: "联系与好感仍在，关系尚未定性；之后可能确认、调整或结束。",
  },
];

export const estpRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "恋爱稳步落地",
    copy:
      "你们既能临时起意，也能在出发前说清成本和退出方式；玩笑越线会停，计划有变会重问，争执暂停后也会按约回来。关系没有失去活力，却已经有了让彼此放心的落点。",
    badge: "关系评价：恋爱稳步落地",
  },
  {
    id: "romance_hidden_risk",
    title: "恋爱仍有隐患",
    copy:
      "你们已经确认在一起，热度也足够强。但有些痛快答应的事仍可能压着疑问，临时变化、风险选择或关系边界再次出现时，还要看双方能否真的按约停下、说明和重谈。",
    badge: "关系评价：恋爱已确认，仍有隐患",
  },
];

export const estpFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA对和你再试一种相处方式多了点兴趣。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA明显更想把下一段共同时间留给你。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA已经不太掩饰想和你继续发展关系。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA对继续靠近少了一点兴致。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA开始把单独邀约收回到普通联系。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA已经不想让这段互动继续朝恋爱发展。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA愿意多告诉你一点真实计划和顾虑。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA开始相信临时变化和不同意见都能说清。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "TA愿意把关键边界与共同决定真正交给你们一起处理。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA对这句保证留下了一点疑问。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA开始怀疑说好的边界会不会真的兑现。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA把重要计划和脆弱部分从你这里收了回去。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA在你面前少了一点维持刺激或气氛的用力。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA更敢按真实状态选择参加、拒绝或改主意。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA可以在你面前自在表达兴奋、安静、犹豫和停止。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "TA开始在提议和回答前多留一层余地。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA开始缩小邀约、分享和身体靠近的范围。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA已经不愿再把真实边界放进这段相处。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "没说开的影响和期待又积了一点。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "计划、边界和关系含义开始变成一场拉扯。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "对话已经被逼迫、防御和互相试探占满。",
  },
  {
    id: "conflict_down_slight",
    dimension: "conflict",
    direction: "down",
    strength: "slight",
    text: "刚才没说开的那一层松动了一点。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "你们把事实、影响和下一步重新分开了。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "僵持被清楚的暂停或协议接住，双方终于停止对抗。",
  },
];

export const estpFeedbackTextById = Object.fromEntries(
  estpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
