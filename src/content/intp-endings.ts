import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const intpEndings = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突终止关系",
    coreCopy: "你们还在交换句子，却已经没人接住对方真正说的内容。TA 停下来：“先到这里吧。现在继续，只会多添一件需要修复的事。”这段关系也到此为止。",
    reasonCopy: "本局多次把边界、纠正或节奏分歧推向施压、反击和动机指控，未修复的摩擦最终压过了继续关系的意愿。",
    stateSummary: "冲突已高到终止关系；残留吸引与聊得来都不能让对话安全继续。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "相处只剩紧绷",
    coreCopy: "TA 回复前停顿得越来越久，不是因为在组织一个更准确的答案，而是在判断哪句话不会引来下一轮压力。最后，TA 不再继续这次互动。",
    reasonCopy: "互动中反复出现替 TA 决定、追着索取回应、压下真实边界或让对方承担猜测成本的选择，相处已经很难自然放松。",
    stateSummary: "舒适已低到无法继续接触；其他维度的高分不能抵销持续紧绷。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任已经断线",
    coreCopy: "TA 仍能把事实解释清楚，却不再愿意解释自己。对话停在了最表面的一层，因为更重要的内容已经不适合交给这段关系。",
    reasonCopy: "本局多次出现越过共同同意、把承诺留空、用试探代替说明或把对方的坦诚当成可利用资源的选择。",
    stateSummary: "信任已跌破继续关系的底线；吸引、深聊或实际帮助都不能抵销失信。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "没有第二次见面",
    coreCopy: "那篇文章还留在聊天记录里，第三段也仍然可疑。只是你们没有再约时间验证彼此对它的看法。",
    reasonCopy: "初识阶段没有建立足够的可靠感与舒适感，或者摩擦已高到让第二次见面不再值得安排。",
    stateSummary: "第一次聊得投机不等于会再见；初识更看重双方是否能放心继续了解。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系停在草稿",
    coreCopy: "你们没有正式告别。只是回复越来越像待处理事项，新的话题也不再自动长出来，最后一次“之后再聊”没有之后。",
    reasonCopy: "接触阶段的兴趣、纠正方式、联系节奏和共同决定没有累积成足够的信任与舒适，继续投入逐渐失去依据。",
    stateSummary: "吸引或思想火花可能仍在，但中段关系基础不足以支撑联系继续靠近。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系止于熟人",
    coreCopy: "你们仍留在彼此的联系人里，也许还会偶尔交换有意思的东西，但不再把它理解成约会邀请。你们认识得比陌生人多，却没有再把彼此排进更靠前的位置。",
    reasonCopy: "经历过支持错位、公开体面和冲突暂停后，吸引、信任、舒适或可控冲突至少有一项仍不足以进入暧昧。",
    stateSummary: "这段关系停在熟人位置；四维需要共同过线，单项很高并不足够。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最终回到陌生",
    coreCopy: "你们确实谈到了关系和时间，却没有把下一次见面写进任何人的日历。结束十次互动之后，彼此反而更确定不该继续靠近。",
    reasonCopy: "关系走到最后时，信任或舒适已经过低，或者未修复冲突仍然过高；完成全部问题没有自动修好这些基础。",
    stateSummary: "十次互动后关系仍回到陌生；严重恶化的基础状态优先于吸引和题目完成度。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "确认成为恋人",
    coreCopy: "TA 在共同时间旁边停了一会儿，又把独立日一起保留下来：“那就这样。不是试运行，也不用等系统自动给我们命名——我们在一起。”",
    reasonCopy: "你们不只保留了靠近的动力，也在表达需求、处理分歧、兑现暂停和安排时间时累积了足够的信任与舒适。",
    stateSummary: "关系已经确认；高吸引推动靠近，信任、舒适和低冲突决定它能否站稳。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "恋爱尚未站稳",
    coreCopy: "你们决定继续靠近，心动快得足以盖过几个还没回答的问题。至于下一次摩擦来时谁会留下来修复，现在没有可靠答案。",
    reasonCopy: "吸引极强，但信任、舒适或冲突没有同时达到确认关系的稳定条件；关系由火花推动，而不是由充分基础承托。",
    stateSummary: "这是已经进入却尚未站稳的恋爱，不是比稳定关系更高级的隐藏结局。",
  },
  {
    id: "friends",
    kind: "final",
    title: "确认成为朋友",
    coreCopy: "TA 仍会把刚看到的怪文章发给你，也愿意听你指出第三段的问题。你们不再把每次分享解释成暧昧，却都愿意让这条对话继续。",
    reasonCopy: "你们建立了可靠、放松且能处理分歧的相处方式，只是恋爱吸引没有累积到改变关系性质的程度。",
    stateSummary: "关系已经明确为朋友；低恋爱吸引不等于低价值，信任与舒适让友谊继续。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "关系仍待定义",
    coreCopy: "你们谈过排他、称呼和见面频率，最后仍没有一个完整答案。即使再有下一条消息，它究竟是约会邀请还是又一篇文章，也暂时没人负责说明。",
    reasonCopy: "当前四维没有差到终止联系，也没有组合成确认恋爱、危险恋人或稳定朋友的条件；靠近与保留仍同时存在。",
    stateSummary: "关系仍处于未定义状态；它不承诺之后一定升级，也不等于默认排他或承诺。",
  },
] as const satisfies readonly EndingContent[];

export const intpRelationshipEvaluations = [
  {
    id: "romance_stable",
    title: "有边界的靠近",
    copy: "你们已经能在不假装需求相同的情况下共同安排生活。能说“不”、能暂停、也能按约回来，让亲密不必靠猜测维持。",
    badge: "关系评价：有边界的靠近",
  },
  {
    id: "romance_hidden_risk",
    title: "协议还没覆盖的地方",
    copy: "你们愿意确认关系，但有些语气、节奏或旧摩擦仍未真正解决。定义关系给了下一步，不会替你们完成下一次修复。",
    badge: "关系评价：协议还没覆盖的地方",
  },
] as const satisfies readonly RelationshipEvaluationContent[];

export const intpFuzzyFeedback = [
  feedback("attraction_up_slight", "attraction", "up", "slight", "TA 把原本准备收住的话题又展开了一点。"),
  feedback("attraction_up_medium", "attraction", "up", "medium", "TA 明显更期待下一次单独相处。"),
  feedback("attraction_up_strong", "attraction", "up", "strong", "TA 已经开始主动把“下次”说成具体安排。"),
  feedback("attraction_down_slight", "attraction", "down", "slight", "TA 对下一步少了一点期待。"),
  feedback("attraction_down_medium", "attraction", "down", "medium", "TA 不再像刚才那样想把话题继续下去。"),
  feedback("attraction_down_strong", "attraction", "down", "strong", "TA 已经很难把这种拉扯继续理解成心动。"),
  feedback("trust_up_slight", "trust", "up", "slight", "TA 愿意把你的话多当真一点。"),
  feedback("trust_up_medium", "trust", "up", "medium", "TA 开始认真按你说的边界安排下一步。"),
  feedback("trust_up_strong", "trust", "up", "strong", "TA 相信重要的事可以交给你共同决定。"),
  feedback("trust_down_slight", "trust", "down", "slight", "TA 对你刚才的说法留了一个问号。"),
  feedback("trust_down_medium", "trust", "down", "medium", "TA 开始怀疑这句话之后会不会算数。"),
  feedback("trust_down_strong", "trust", "down", "strong", "TA 不再愿意把重要的事放进这段关系。"),
  feedback("comfort_up_slight", "comfort", "up", "slight", "TA 在你面前少斟酌了一句话。"),
  feedback("comfort_up_medium", "comfort", "up", "medium", "TA 明显更敢直接说出自己的需要。"),
  feedback("comfort_up_strong", "comfort", "up", "strong", "这一刻，你们都不必预演下一句话。"),
  feedback("comfort_down_slight", "comfort", "down", "slight", "对话里多了一点需要小心绕开的地方。"),
  feedback("comfort_down_medium", "comfort", "down", "medium", "TA 开始把原本会说出口的话收回去。"),
  feedback("comfort_down_strong", "comfort", "down", "strong", "TA 已经很难在这段互动里放松下来。"),
  feedback("conflict_up_slight", "conflict", "up", "slight", "这件事留下了一点尚未处理的摩擦。"),
  feedback("conflict_up_medium", "conflict", "up", "medium", "你们已经不只是在讨论不同答案。"),
  feedback("conflict_up_strong", "conflict", "up", "strong", "这场互动正在迅速失去修复空间。"),
  feedback("conflict_down_slight", "conflict", "down", "slight", "刚才的分歧松开了一点。"),
  feedback("conflict_down_medium", "conflict", "down", "medium", "你们找到了让分歧停下来、以后再谈的方法。"),
  feedback("conflict_down_strong", "conflict", "down", "strong", "积着的敌意终于退回到可以好好说话的位置。"),
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

export const intpFeedbackTextById = Object.fromEntries(
  intpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
