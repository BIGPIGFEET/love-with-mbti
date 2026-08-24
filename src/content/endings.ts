import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const endings = [
  {
    id: "conflict_break",
    kind: "global",
    title: "关系当场决裂",
    coreCopy: "你们还在轮流抛出更锋利的下一句，却已经没人回答上一句真正受伤的地方。TA 收起最后一个反驳：“到这儿吧，这次不是谁赢的问题。”",
    reasonCopy: "观点分歧、玩笑越界和规则争议一次次变成讽刺、压制和公开难堪；争输赢最终挤掉了修复意愿。",
    stateSummary: "冲突已高到足以终止关系；残留的火花和吸引不能把伤害改写成默契。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "相处只剩压力",
    coreCopy: "TA 的反应仍然很快，只是每句话出口前都多了一次自我审查。原本能自由跳跃的对话变成了随时可能踩线的测试，TA 选择离开。",
    reasonCopy: "追着索取回应、替TA定义感受，或在拒绝已经说清后继续加码，让相处失去了放松和说不的空间。",
    stateSummary: "相处已经只剩防备，TA不愿再继续见面。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任正式破产",
    coreCopy: "TA 依然能和你聊观点、抛新点子，却不再把真实安排和脆弱部分放进对话。火花还留在表面，可信的下一步已经被撤回。",
    reasonCopy: "失约、利用坦诚、回避承诺，以及把越界后的后果留给对方承担，一次次消耗了TA愿意交出来的信任。",
    stateSummary: "信任已经跌破继续关系的底线；吸引和聊得来都不能代替兑现与尊重。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "没有第二次约会",
    coreCopy: "第一场有新鲜话题，也有几次漂亮接球；但当 TA 问起下一站，你们谁都没有真的把时间留出来。“改天”最后只剩一种礼貌说法。",
    reasonCopy: "临时变化发生时，你们没有找到双方都舒服的走法；有人把拒绝听成扫兴，也有人把勉强藏到最后。第一次见面因此没有留下明确的下一次。",
    stateSummary: "第一次聊得有趣不等于关系会继续；这个阶段看的是双方是否愿意放心地再约一次。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系渐渐降温",
    coreCopy: "聊天框一度每天都能长出新分支，后来每个分支都停在“等会儿继续”。热闹没有突然结束，只是再也没变成下一次见面。",
    reasonCopy: "观点和玩笑一直有来有回，真正的邀请却常停在半路；暧昧没有被说清，答应过的安排也没有稳定落地。",
    stateSummary: "聊天曾经很热闹，却没有变成彼此都愿意兑现的下一次。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系止于熟人",
    coreCopy: "见面时你们依旧能迅速把场子聊热，也会互相丢几个新点子。只是邀请重新回到群聊，不再有人把彼此单独写进计划。",
    reasonCopy: "需要安慰时常常只得到办法，越界后的责任也没有被好好接住。你们仍能聊热场子，却不再愿意单独向前。",
    stateSummary: "你们依然聊得来，关系却只会留在偶尔见面的熟人之间。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "走完仍成陌路",
    coreCopy: "你们把十次互动走完，话题甚至还剩几个没辩完；可下一条消息已经没有发送的理由。TA 没有拉黑你，只把这段关系从未来计划里删掉。",
    reasonCopy: "走到最后，边界和承诺仍然反复落空，几次争执也没有真正收尾。剩下的话题已经不足以成为继续见面的理由。",
    stateSummary: "完成所有相处不等于建立关系；严重恶化的基础状态优先于残留吸引。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "恋爱正式开场",
    coreCopy: "TA 翻完你们刚排好的固定见面和各自时间，笑了一下：“看来这次不是临时起意。那就正式一点——我们在一起。”",
    reasonCopy: "玩笑越界时有人会停，难受时也能说清要陪伴还是要办法；自由、排他和见面节奏终于得到了两个人的回答。",
    stateSummary: "你们都愿意把这份心动认真过进接下来的日常。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋但未站稳",
    coreCopy: "你们决定恋爱，心动和下一次冒险都来得很快。只是那些没修好的边界、承诺或争执也一起上车；下一次转弯会不会翻车，谁都还不能保证。",
    reasonCopy: "心动把关系推得很快，但边界、承诺和争执后的修复仍有不少空白。你们已经开始恋爱，却还没学会怎样在失速时接住彼此。",
    stateSummary: "恋爱已经开始，下一次转弯能不能站稳仍是未知数。",
  },
  {
    id: "friends",
    kind: "final",
    title: "合拍成为朋友",
    coreCopy: "TA 仍会第一时间把荒唐点子和新发现发给你，也认真接住你的反驳。你们不再把这种默契误读成恋爱，却都愿意让它长期存在。",
    reasonCopy: "你们愿意兑现约定，也能容纳不同意见，只是彼此都没有把这种默契理解成恋爱。朋友是双方给出的答案。",
    stateSummary: "这不是降级或候补结局；信任与舒适让关系以明确的朋友形式继续。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧仍未定案",
    coreCopy: "你们有火花、有下一次，也谈过自由和排他；每当关系快要落成一句确定的话，又会被一个新问题岔开。对话没有结束，定义仍停在草稿。",
    reasonCopy: "你们还愿意见面，也还会心动，只是自由、排他和日常节奏始终没有得到同一个答案。",
    stateSummary: "关系仍停在暧昧里；下一步要靠两个人继续说清，而不是靠热闹猜出来。",
  },
] as const satisfies readonly EndingContent[];

export const relationshipEvaluations = [
  {
    id: "romance_stable",
    title: "稳定落进日常",
    copy: "你们既能继续制造新鲜感，也能把边界、承诺和见面安排落到日常。分歧不必决出输赢，关系也不再靠临时起意维持。",
    badge: "关系评价：稳定落进日常",
  },
  {
    id: "romance_hidden_risk",
    title: "热恋背有隐患",
    copy: "你们确实确认了恋爱，只是几处旧摩擦还留在身后。下一次节奏被打乱时，承诺能不能兑现、争执后能不能回来，仍要靠行动回答。",
    badge: "关系评价：热恋背有隐患",
  },
] as const satisfies readonly RelationshipEvaluationContent[];

export const fuzzyFeedback = [
  feedback("attraction_up_slight", "attraction", "up", "slight", "TA看你的眼神多停了一会儿。"),
  feedback("attraction_up_medium", "attraction", "up", "medium", "你明显勾起了TA继续靠近的兴趣。"),
  feedback("attraction_up_strong", "attraction", "up", "strong", "TA几乎没打算掩饰这一下的心动。"),
  feedback("attraction_down_slight", "attraction", "down", "slight", "TA对这次互动少了一点期待。"),
  feedback("attraction_down_medium", "attraction", "down", "medium", "TA看起来没刚才那么想靠近了。"),
  feedback("attraction_down_strong", "attraction", "down", "strong", "TA似乎已经不想再把这种感觉理解成心动。"),
  feedback("trust_up_slight", "trust", "up", "slight", "TA愿意多相信你一点。"),
  feedback("trust_up_medium", "trust", "up", "medium", "TA开始认真把你的话算进之后的安排。"),
  feedback("trust_up_strong", "trust", "up", "strong", "TA把一部分主动权放心地交给了你。"),
  feedback("trust_down_slight", "trust", "down", "slight", "TA对你的说法留下了一个问号。"),
  feedback("trust_down_medium", "trust", "down", "medium", "TA开始怀疑你会不会真的兑现。"),
  feedback("trust_down_strong", "trust", "down", "strong", "TA不再愿意把重要的事交到你手里。"),
  feedback("comfort_up_slight", "comfort", "up", "slight", "TA在你面前放松了一点。"),
  feedback("comfort_up_medium", "comfort", "up", "medium", "TA明显不再需要斟酌每一句话。"),
  feedback("comfort_up_strong", "comfort", "up", "strong", "这一刻，和你相处几乎不需要防备。"),
  feedback("comfort_down_slight", "comfort", "down", "slight", "气氛里多了一点不自然。"),
  feedback("comfort_down_medium", "comfort", "down", "medium", "TA开始下意识地和你保持距离。"),
  feedback("comfort_down_strong", "comfort", "down", "strong", "TA已经很难在这段互动里放松下来。"),
  feedback("conflict_up_slight", "conflict", "up", "slight", "空气里多了一点火药味。"),
  feedback("conflict_up_medium", "conflict", "up", "medium", "你们的分歧已经不只是观点不同。"),
  feedback("conflict_up_strong", "conflict", "up", "strong", "这场互动正在迅速失控。"),
  feedback("conflict_down_slight", "conflict", "down", "slight", "刚才的摩擦缓和了一些。"),
  feedback("conflict_down_medium", "conflict", "down", "medium", "你们找到了让分歧停下来的方式。"),
  feedback("conflict_down_strong", "conflict", "down", "strong", "积着的火药味终于散了下去。"),
] as const satisfies readonly FuzzyFeedbackContent[];

function feedback(
  id: FuzzyFeedbackContent["id"],
  dimension: FuzzyFeedbackContent["dimension"],
  direction: FuzzyFeedbackContent["direction"],
  strength: FuzzyFeedbackContent["strength"],
  text: string,
): FuzzyFeedbackContent {
  return { id, dimension, direction, strength, text };
}
