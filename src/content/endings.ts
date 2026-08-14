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
    reasonCopy: "本局多次把观点分歧、玩笑越界或规则争议升级成讽刺、压制和公开难堪；胜负感最终挤掉了修复意愿。",
    stateSummary: "冲突已高到足以终止关系；残留的火花和吸引不能把伤害改写成默契。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "相处只剩压力",
    coreCopy: "TA 的反应仍然很快，只是每句话出口前都多了一次自我审查。原本能自由跳跃的对话变成了随时可能踩线的测试，TA 选择离开。",
    reasonCopy: "本局多次追着索取回应、替 TA 定义感受，或在边界已经说清后继续加码，使相处失去放松和拒绝的空间。",
    stateSummary: "舒适已经低到无法继续接触；热闹、聪明的对话或单项高分都不能抵销持续压力。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任正式破产",
    coreCopy: "TA 依然能和你聊观点、抛新点子，却不再把真实安排和脆弱部分放进对话。火花还留在表面，可信的下一步已经被撤回。",
    reasonCopy: "本局反复出现失约、利用坦诚、回避明确承诺，或把越界后的后果留给对方承担的选择。",
    stateSummary: "信任已经跌破继续关系的底线；吸引和聊得来都不能代替兑现与尊重。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "没有第二次约会",
    coreCopy: "第一场有新鲜话题，也有几次漂亮接球；但当 TA 问起下一站，你们谁都没有真的把时间留出来。“改天”最后只剩一种礼貌说法。",
    reasonCopy: "初识中对临时变化、时间边界和互动节奏的处理，没有积累够再次见面的可靠感与舒适感，或已留下过多摩擦。",
    stateSummary: "第一次聊得有趣不等于关系会继续；这个阶段看的是双方是否愿意放心地再约一次。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系渐渐降温",
    coreCopy: "聊天框一度每天都能长出新分支，后来每个分支都停在“等会儿继续”。热闹没有突然结束，只是再也没变成下一次见面。",
    reasonCopy: "接触阶段的观点交锋、玩笑和暧昧，没有转化为稳定的信任、舒适与可兑现安排，继续主动逐渐失去依据。",
    stateSummary: "火花可能还在，但中段关系基础不足；频繁聊天不能单独证明关系正在靠近。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系止于熟人",
    coreCopy: "见面时你们依旧能迅速把场子聊热，也会互相丢几个新点子。只是邀请重新回到群聊，不再有人把彼此单独写进计划。",
    reasonCopy: "熟悉阶段的支持错位、责任承担和冲突修复，没有共同累积到进入暧昧所需的吸引、信任与舒适。",
    stateSummary: "只靠有趣或单项高分还不够；这段关系停在认识、合得来，但不再单独靠近的位置。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "走完仍成陌路",
    coreCopy: "你们把十次互动走完，话题甚至还剩几个没辩完；可下一条消息已经没有发送的理由。TA 没有拉黑你，只把这段关系从未来计划里删掉。",
    reasonCopy: "走到最后时，信任或舒适已经过低，或未修复的冲突仍然过高；持续互动没有自动修好这些基础。",
    stateSummary: "完成所有相处不等于建立关系；严重恶化的基础状态优先于残留吸引。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "恋爱正式开场",
    coreCopy: "TA 翻完你们刚排好的固定见面和各自时间，笑了一下：“看来这次不是临时起意。那就正式一点——我们在一起。”",
    reasonCopy: "你们把玩笑和分歧谈出了边界，把关心说成对方接得住的方式，也让自由、排他与日常安排有了共同答案。",
    stateSummary: "高吸引推动关系确认；足够的信任、舒适和可控冲突让恋爱不只停在火花里。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋但未站稳",
    coreCopy: "你们决定恋爱，心动和下一次冒险都来得很快。只是那些没修好的边界、承诺或争执也一起上车；下一次转弯会不会翻车，谁都还不能保证。",
    reasonCopy: "吸引已经强到推动恋爱，但信任、舒适或冲突没有同时达到确认关系的稳固条件；火花先替基础做了决定。",
    stateSummary: "这是已经靠近却风险显著的恋爱，不是比稳定关系更刺激、更高级的隐藏结局。",
  },
  {
    id: "friends",
    kind: "final",
    title: "合拍成为朋友",
    coreCopy: "TA 仍会第一时间把荒唐点子和新发现发给你，也认真接住你的反驳。你们不再把这种默契误读成恋爱，却都愿意让它长期存在。",
    reasonCopy: "你们建立了可靠、放松、能容纳不同意见的相处方式，只是恋爱吸引没有累积到改变关系性质。",
    stateSummary: "这不是降级或候补结局；信任与舒适让关系以明确的朋友形式继续。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧仍未定案",
    coreCopy: "你们有火花、有下一次，也谈过自由和排他；每当关系快要落成一句确定的话，又会被一个新问题岔开。对话没有结束，定义仍停在草稿。",
    reasonCopy: "关系没有坏到终止，也没有形成恋爱、危险恋人或朋友的明确组合；靠近的动力与尚未谈妥的条件同时存在。",
    stateSummary: "暧昧仍有可能，也仍有误读成本；它不会自动升级，下一步需要双方继续澄清和选择。",
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
    copy: "你们确实确认了恋爱，但某些边界、节奏或旧摩擦还没有谈完。火花让关系开场了，不能替你们兑现承诺或完成下一次修复。",
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
