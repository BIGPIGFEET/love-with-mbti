import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const entjEndings: readonly EndingContent[] = [
  {
    "id": "conflict_break",
    "kind": "global",
    "title": "关系冲突终止",
    "coreCopy": "最后一次争执里，你们谁也没再听原本的问题。TA 关掉那张改到一半的表，沉默了很久：“到这里吧。我不想再和喜欢的人争谁必须低头。”",
    "reasonCopy": "几次分歧都变成了追问、指责和不肯停手。你们越来越在意谁赢，已经没有力气照顾彼此。",
    "stateSummary": "你们结束了这段关系。"
  },
  {
    "id": "strong_discomfort",
    "kind": "global",
    "title": "不再继续相处",
    "coreCopy": "后来再约时间，TA 总会先问得很客气，却很少说自己真正想做什么。一次见面结束后，TA 没有再提下次，只发来一句：“我觉得我们都别勉强了。”",
    "reasonCopy": "TA 说过不愿意时，你仍替TA做决定或继续追问。相处久了，连普通的拒绝都变得很费力。",
    "stateSummary": "TA不想再继续相处。"
  },
  {
    "id": "trust_broken",
    "kind": "global",
    "title": "信任耗尽告别",
    "coreCopy": "TA 撤掉了预留的位置，也不再把重要的事告诉你。你问还有没有机会，TA 看着聊天框停了很久：“我已经不知道哪句话是真的了。”",
    "reasonCopy": "沉默测试、擅自公开和藏起真实需要，让TA一次次发现，自己做决定时拿不到完整的答案。",
    "stateSummary": "信任耗尽以后，你们告别了。"
  },
  {
    "id": "no_second_meeting",
    "kind": "stage_gate",
    "title": "初识没有下次",
    "coreCopy": "九十分钟结束时，你们礼貌地说了再见。TA 走出几步，又回头挥了下手。之后谁也没有打开聊天框，去问第二次见面。",
    "reasonCopy": "类型玩笑没有真正翻篇，见面的节奏也一直没对上。第一次见面不算糟，只是没有让人想继续。",
    "stateSummary": "你们停在了初次见面。"
  },
  {
    "id": "fade_out",
    "kind": "stage_gate",
    "title": "联系逐渐淡去",
    "coreCopy": "你们也认真约过几次见面。后来，“周六几点”慢慢变成了“最近有空再说”，再后来，连这句话也很少出现。",
    "reasonCopy": "你们都付出过，只是想要的陪伴常常错开。一次次改期后，谁也没有再主动定下下一次。",
    "stateSummary": "联系渐渐淡了下去。"
  },
  {
    "id": "stay_acquaintances",
    "kind": "stage_gate",
    "title": "关系停在熟人",
    "coreCopy": "在群里碰见时，你们仍会自然地打招呼，偶尔也互相发一份资料。但私人邀约停了下来，聊天总在正事说完后结束。",
    "reasonCopy": "你们能把事情处理完，却没能在几次不愉快以后重新靠近。彼此都把距离留在了熟人的位置。",
    "stateSummary": "你们会保持联系，但只是熟人。"
  },
  {
    "id": "strangers_after_all",
    "kind": "final",
    "title": "最终不再往来",
    "coreCopy": "你们谈过未来，也真的试着把对方放进生活。最后一次道别后，TA 取消了那两个位置。你们没有拉黑彼此，只是再也没有出现在对方之后的安排里。",
    "reasonCopy": "走到最后，你们仍很难相信对方的答应，也很难在不同意时好好停下来。再多设想都没能变成安心的日常。",
    "stateSummary": "这段关系最终断开了。"
  },
  {
    "id": "confirmed_relationship",
    "kind": "final",
    "title": "双方确认恋爱",
    "coreCopy": "那晚你们聊了很久，中间改过几次答案，也有几项仍然不完全一样。离开前，TA 牵住你的手：“那就从今天开始，认真试试？”这一次，你们都点了头。",
    "reasonCopy": "你们愿意说出真实需要，也能在帮错忙、吵得太凶时停下来重来。最后，没有谁替另一个人答应。",
    "stateSummary": "你们正式确认了恋爱关系。"
  },
  {
    "id": "dangerous_lovers",
    "kind": "final",
    "title": "热恋仍未站稳",
    "coreCopy": "你们还是牵了手，也开始习惯把周末留给对方。只是每当有人改主意，空气都会立刻绷紧。甜蜜是真的，那些没谈完的问题也还跟在后面。",
    "reasonCopy": "强烈的吸引让你们走得很快，但答应能不能兑现、争执后会不会回来，仍没有稳定的答案。",
    "stateSummary": "你们正在恋爱，关系却还不稳。"
  },
  {
    "id": "friends",
    "kind": "final",
    "title": "明确成为朋友",
    "coreCopy": "TA 还是会把有意思的活动发给你，你也会在拿不定主意时问TA一句。你们不再猜这些关心是不是暗示，而是坦然把彼此留在朋友的位置。",
    "reasonCopy": "你们能直接表达不同，也能在不愉快以后回来把话说完。只是心动没有走到恋爱，这并不妨碍彼此珍惜。",
    "stateSummary": "你们明确选择成为朋友。"
  },
  {
    "id": "unresolved_ambiguity",
    "kind": "final",
    "title": "暧昧尚无定论",
    "coreCopy": "那两个位置还留着，下一次见面也照常。可当话题走到“我们算什么”，你们都停了一下，没有人把那句话说到底。",
    "reasonCopy": "你们愿意继续靠近，却还没有在关系名称和几件重要的事上得到同一个答案。",
    "stateSummary": "你们仍在暧昧，之后会怎样还没有定论。"
  }
];

export const entjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    "id": "romance_stable",
    "title": "恋爱稳步落地",
    "copy": "你们不需要谁把一切安排妥当。有人想改主意时会开口，吵累了也知道怎么回来。那些一起说好的事，正一点点变成日常。",
    "badge": "关系评价：恋爱稳步落地"
  },
  {
    "id": "romance_hidden_risk",
    "title": "恋爱仍有隐患",
    "copy": "你们已经确认恋爱，但偶尔还是会把真实想法藏在“都行”后面。下一次有人拒绝或改主意时，能不能真正听见彼此，还得看之后怎么做。",
    "badge": "关系评价：恋爱已确认，仍有隐患"
  }
];

export const entjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    "id": "attraction_up_slight",
    "dimension": "attraction",
    "direction": "up",
    "strength": "slight",
    "text": "TA看你时，目光多停了一会儿。"
  },
  {
    "id": "attraction_up_medium",
    "dimension": "attraction",
    "direction": "up",
    "strength": "medium",
    "text": "TA已经开始期待下一次单独见你。"
  },
  {
    "id": "attraction_up_strong",
    "dimension": "attraction",
    "direction": "up",
    "strength": "strong",
    "text": "TA的喜欢已经很难藏住。"
  },
  {
    "id": "attraction_down_slight",
    "dimension": "attraction",
    "direction": "down",
    "strength": "slight",
    "text": "TA刚才那点兴致淡了些。"
  },
  {
    "id": "attraction_down_medium",
    "dimension": "attraction",
    "direction": "down",
    "strength": "medium",
    "text": "TA不太想再把见面往后约了。"
  },
  {
    "id": "attraction_down_strong",
    "dimension": "attraction",
    "direction": "down",
    "strength": "strong",
    "text": "TA眼里的心动彻底冷了下去。"
  },
  {
    "id": "trust_up_slight",
    "dimension": "trust",
    "direction": "up",
    "strength": "slight",
    "text": "TA愿意多信你这一次。"
  },
  {
    "id": "trust_up_medium",
    "dimension": "trust",
    "direction": "up",
    "strength": "medium",
    "text": "TA开始放心把真实想法告诉你。"
  },
  {
    "id": "trust_up_strong",
    "dimension": "trust",
    "direction": "up",
    "strength": "strong",
    "text": "遇到重要的事，TA也愿意先来找你。"
  },
  {
    "id": "trust_down_slight",
    "dimension": "trust",
    "direction": "down",
    "strength": "slight",
    "text": "TA没有完全相信这句话。"
  },
  {
    "id": "trust_down_medium",
    "dimension": "trust",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始怀疑你的答应能不能当真。"
  },
  {
    "id": "trust_down_strong",
    "dimension": "trust",
    "direction": "down",
    "strength": "strong",
    "text": "TA不再愿意把重要的事交给你。"
  },
  {
    "id": "comfort_up_slight",
    "dimension": "comfort",
    "direction": "up",
    "strength": "slight",
    "text": "TA的肩膀放松了一点。"
  },
  {
    "id": "comfort_up_medium",
    "dimension": "comfort",
    "direction": "up",
    "strength": "medium",
    "text": "TA在你面前不用再字字提防。"
  },
  {
    "id": "comfort_up_strong",
    "dimension": "comfort",
    "direction": "up",
    "strength": "strong",
    "text": "你们终于都能自在地待着。"
  },
  {
    "id": "comfort_down_slight",
    "dimension": "comfort",
    "direction": "down",
    "strength": "slight",
    "text": "TA的神情短暂地僵了一下。"
  },
  {
    "id": "comfort_down_medium",
    "dimension": "comfort",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始下意识和你拉开距离。"
  },
  {
    "id": "comfort_down_strong",
    "dimension": "comfort",
    "direction": "down",
    "strength": "strong",
    "text": "TA只想尽快离开这场相处。"
  },
  {
    "id": "conflict_up_slight",
    "dimension": "conflict",
    "direction": "up",
    "strength": "slight",
    "text": "话音落下，空气紧了一点。"
  },
  {
    "id": "conflict_up_medium",
    "dimension": "conflict",
    "direction": "up",
    "strength": "medium",
    "text": "你们都开始抢着反驳对方。"
  },
  {
    "id": "conflict_up_strong",
    "dimension": "conflict",
    "direction": "up",
    "strength": "strong",
    "text": "这场争执已经快要彻底失控。"
  },
  {
    "id": "conflict_down_slight",
    "dimension": "conflict",
    "direction": "down",
    "strength": "slight",
    "text": "刚冒出的火气退了一点。"
  },
  {
    "id": "conflict_down_medium",
    "dimension": "conflict",
    "direction": "down",
    "strength": "medium",
    "text": "你们终于又能听见对方在说什么。"
  },
  {
    "id": "conflict_down_strong",
    "dimension": "conflict",
    "direction": "down",
    "strength": "strong",
    "text": "持续已久的僵持终于松开了。"
  }
];

export const entjFeedbackTextById = Object.fromEntries(
  entjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
