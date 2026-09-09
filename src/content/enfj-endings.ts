import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const enfjEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突中止关系",
    coreCopy:
      "课程建议、支持方式、暂停时间和未来安排都不再是可以讨论的事情，只剩下谁必须服从、谁要证明自己更在乎。TA 停止继续解释：‘我们已经不是在修复问题，而是在逼对方放弃自己。到这里吧。’",
    reasonCopy:
      "具体边界多次被改写成类型攻击、无限照顾义务或感情测试；暂停被逼问打断，未来也被要求用牺牲证明。不断升级的对抗最终盖过了原本的问题。",
    stateSummary: "未解决的压力和防御已经压过继续沟通的空间，关系在冲突中终止。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "不适终止相处",
    coreCopy:
      "TA 开始回避说出真实需要：不想参与、不想给建议、不想拥抱或需要暂停，都可能再次被解释、追问或越过。最后，TA 把原本留给你的互动入口收了回去，不再继续这段相处。",
    reasonCopy:
      "邀请被当成偏爱，支持被变成接管义务，身体和等待边界也没有得到足够尊重。即使有靠近的意图，实际相处已经失去可以安心说不的感觉。",
    stateSummary: "相处中的自在与可拒绝空间已经耗尽，继续接触不再安全或舒适。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任破裂告别",
    coreCopy:
      "TA 不再把真实容量、关系含义和共同计划交给你讨论。曾经说清的‘先问再建议’、‘每次重新确认’和‘暂停后回来’，没有积累成可以依赖的行动。TA 最终选择告别。",
    reasonCopy:
      "未经同意公开关系、用答应全部计划掩盖真实限制，或在说好尊重边界后继续施压，让承诺与实际行为反复分离。强烈好感无法替代可靠。",
    stateSummary: "对诚实、边界和兑现的信赖已经跌破继续关系的底线。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "初识没有下次",
    coreCopy:
      "桌游局散场后，你们仍然礼貌道别，却没有再约下一次。TA 没把一次节奏不合判成谁有问题，只是没有再主动找你聊天。",
    reasonCopy:
      "初见的邀请、安静空间和建议许可没有形成双方都愿意延续的节奏。有人想靠得更近，但信任、兴趣或自在还不足以支持第二次见面。",
    stateSummary: "关系停在初识；没有下次不等于任何一方失败或不值得被喜欢。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系逐渐淡去",
    coreCopy:
      "你们曾频繁分享，也认真谈过好感和支持。后来，消息从具体的下一次见面退回偶尔问候，TA 不再继续发送那些需要彼此回应和承担的内容。",
    reasonCopy:
      "早期热度没有被转成清楚的关系范围，支持也在需求错位或建议压力中失去可持续性。一次次没有修好的小落差，让联系慢慢失去下一步。",
    stateSummary: "你们渐渐没那么想见面，相处中的疑虑和不自在也没有说开，联系就这样淡了。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系停在熟人",
    coreCopy:
      "你们仍能在群体活动里自然说话，也会礼貌回应近况。但深夜倾诉、亲密表达和争执后的回返，不再继续进入更私人的位置。",
    reasonCopy:
      "长期互惠、具体同意或暂停协议没有累积成足够稳定的亲密基础。双方保留了基本尊重，却没有继续承担更深关系所需的容量和修复。",
    stateSummary: "关系保留在熟人层面；可以友好往来，但不再向亲密推进。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最终不再往来",
    coreCopy:
      "你们确实走到了未来话题前，也谈过类型投射、关系范围和现实安排。最后，那些讨论仍没有变成足够可信、自在的日常。TA 撤下共同计划，你们不再出现在彼此之后的安排里。",
    reasonCopy:
      "完成十次互动没有覆盖已经累积的失信、不适或冲突。共同愿景无法替代边界、互惠和修复，双方最终选择结束往来。",
    stateSummary: "关系基础不足以继续，最终从彼此生活中退出。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "双方确认恋爱",
    coreCopy:
      "你们没有让频繁联系、礼物、拥抱、朋友起哄或一张未来计划替双方作答。约会、排他、现实投入和复谈时间被逐项说清，TA 看着共同确认的版本：‘这次不是谁替谁决定，是我们都在这里。’",
    reasonCopy:
      "双方能够说明需要、接受拒绝、处理建议造成的影响，并在暂停后按约返回。最后，对关系的同意来自两个人清楚而可修改的答案。",
    stateSummary: "你们已经说好在一起，接下来还要看日子过得是否踏实。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋尚未站稳",
    coreCopy:
      "你们决定继续以恋爱关系靠近，心动和未来感都很强。可是，照顾是否会变成义务、拒绝能否被接住、真实限制会不会及时说出，仍有部分没有站稳。",
    reasonCopy:
      "强烈吸引推动关系快速向前，但信任或舒适没有同步跟上。全部答应、跳过确认或用强度代替协议，让恋爱已经开始，基础却仍然摇晃。",
    stateSummary: "浪漫吸引很高，但可靠和自在仍不足；关系成立同时保留明显风险。",
  },
  {
    id: "friends",
    kind: "final",
    title: "明确成为朋友",
    coreCopy:
      "你们仍会交换近况，也能直接说今天想听建议、只想安静，或暂时没有容量。热情、记得细节和实际支持不再被自动翻译成恋爱，却成为一段双方都愿意保留的友谊。",
    reasonCopy:
      "信任、舒适和修复能力足以支撑稳定联系，只是浪漫吸引没有累积到改变关系性质。朋友不是恋爱失败后的候补，而是双方清楚选择的位置。",
    stateSummary: "双方形成稳定友谊；亲密与互惠成立，但没有确认恋爱。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧尚无定论",
    coreCopy:
      "下一次见面没有取消，未来清单也还没有定稿。你们已经拆掉了部分类型期待，却仍有关系名称、排他或现实投入没有得到同一个答案。",
    reasonCopy:
      "双方仍愿意靠近，但好感、边界和可兑现安排尚未完全对齐。关系保持开放，不承诺会自动升级，也不把暂未定义当成隐形承诺。",
    stateSummary: "联系与好感仍在，关系尚未定性；之后可能继续、改变或结束。",
  },
];

export const enfjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "恋爱稳步落地",
    copy:
      "你们都能直接说自己累了、做不到了，也愿意听对方说哪里不舒服。没说好的事会再商量，吵架暂停后也会按约接着谈。想到以后的生活，你们心里是踏实的。",
    badge: "关系评价：恋爱稳步落地",
  },
  {
    id: "romance_hidden_risk",
    title: "恋爱仍有隐患",
    copy:
      "你们已经在一起了，但有些答应得很痛快的事，可能还没说出自己的为难。以后有人说不，或者再起争执时，还要看彼此能不能像说好的那样做。",
    badge: "关系评价：恋爱已确认，仍有隐患",
  },
];

export const enfjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA对下一次见面多了一点期待。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA明显更想把新的共同时间留给你。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA已经不太掩饰想与你继续发展关系。",
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
    text: "TA开始把个人邀约收回到普通联系。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA已经不想把这种强度继续理解成心动。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA愿意把一小部分真实需要说给你听。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA开始相信说不和改主意都会被尊重。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "TA愿意把关键边界和共同决定放进你们的对话。",
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
    text: "TA开始怀疑说好的边界会不会被兑现。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA把重要决定和脆弱部分从你这里收了回去。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA在你面前少了一点维持气氛的用力。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA不必先猜哪种回答才不会让你失望。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA可以在你面前说不、安静或改变主意。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "TA说话时开始多留了一层余地。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA开始缩小分享、靠近和请求帮助的范围。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA已经不愿再把真实需要放进这段相处。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "没有说开的期待又积了一点。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "建议、边界和关系含义开始缠成一场拉扯。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "对话已经只剩逼迫、防御和互相抵抗。",
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
    text: "你们把意图、影响和下一步重新分开了。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "僵持被具体协议接住，双方终于能停下对抗。",
  },
];

export const enfjFeedbackTextById = Object.fromEntries(
  enfjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
