import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const esfpEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突分开",
    coreCopy:
      "你们原本都愿意把话说清，也试过给变化、分歧和暂停留下余地。后来，说明逐渐变成定性，追问变成围堵，修复也被拿来要求服从。TA 不再把继续争下去当成认真，而是选择离开这段不断升级的关系。",
    reasonCopy:
      "互动中出现了嘲讽消费偏好、贬低谈话方式、指责社交动机、阻止离场或以定位和随时回复证明认真。着急解决问题不能抵消强迫、羞辱和控制造成的影响。",
    stateSummary: "冲突已高到无法安全协商；分开成为保护彼此边界的选择。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "停止相处",
    coreCopy:
      "TA 曾经愿意邀请你一起体验，也愿意在热闹、安静、靠近和暂停之间说明自己的需要。现在，每一次拒绝或停顿都可能被误读，每一次离开都要先争取许可。TA 选择结束这段让人无法自在表达的相处。",
    reasonCopy:
      "要求 TA 负责气氛、接管支持、默认身体与公开许可，或取消暂停和退出权，让相处持续失去安全感。亲近、担心或热烈都不能替代当下明确的同意。",
    stateSummary: "舒适感已不足以容纳真实偏好、拒绝和退出。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任断裂",
    coreCopy:
      "从一次小活动到一份关系约定，TA 一直在确认：说出口的范围会不会被尊重，临时变化会不会被说明，约好的回谈会不会真的发生。如今这些答案都失去了可靠性，TA 不再愿意把新的安排和边界交给这段关系。",
    reasonCopy:
      "隐藏真实代价、让对方猜需求、替 TA 决定公开与排他，或把修复变成监控要求，反复削弱了承诺、边界和说明的可信度。新的保证已经不足以支撑继续托付。",
    stateSummary: "信任已经无法支持新的约定、公开决定或关系修复。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "不再约见",
    coreCopy:
      "河边的印章点和宵夜桌上的短暂热闹都成了第一次见面的片段，却没有自然地接到下一次。你们没有必要把谁判成无趣或不合格，只是没有找到双方都愿意继续尝试的节奏。",
    reasonCopy:
      "初识时，共同体验、真实偏好和安静空间没有同时得到照顾。第一次见面结束后，双方没有形成足够明确而自在的再次见面意愿。",
    stateSummary: "关系停在初识，没有形成下一次约见的共同动力。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "渐失联络",
    coreCopy:
      "你们仍会偶尔分享新发现，也还记得那次差点改掉的电影计划、临时救回的演示文件和没有预约的玻璃工坊。只是每一次安排都留下了一点没说清的代价，联系便慢慢从期待变成了想起才回应。",
    reasonCopy:
      "临场变化与既有约定、实际帮助与情绪需要、体验价格与预算边界没有形成可持续的协商方式。没有一次突然告别，只有越来越难兑现的下一次。",
    stateSummary: "联系逐渐变淡，关系没有进入稳定往来。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "止于相识",
    coreCopy:
      "你们能聊项目、参加聚会，也知道彼此有不同的思考入口和社交节奏。但表达失落、暂停争执和按约回谈仍不够可靠。双方保留了礼貌与好感，没有把它们继续推进成更深的托付。",
    reasonCopy:
      "现实经验与抽象意义的差异、群体中的连接需要，以及冲突后怎样暂停和回来，都还没有变成双方能放心复用的相处方式。",
    stateSummary: "关系留在熟人范围，尚不足以进入暧昧或更深承诺。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "回到陌生",
    coreCopy:
      "你们认真谈过公开、接触、排他和未来，也按约回到那场没说完的争执里。可走到最后，有些话虽然说过了，心里还是没底。一起经历过的那些时刻都是真的，只是你们不再继续走进彼此的生活。",
    reasonCopy:
      "终局仍存在未被尊重的边界、无法兑现的修复，或让一方持续防御的冲突。曾经的热度和靠近不能自动替代信任与安全。",
    stateSummary: "关系曾经靠近，最终仍失去了继续往来的基础。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "确认相恋",
    coreCopy:
      "你们没有因为牵过手、拍过合照，就默认所有事都算答应。照片要不要发、是不是只和对方约会，你们都一件件聊过；那次吵架以后，也学会了改计划先说，想冷静就约好什么时候回来。最后，这段恋爱是两个人一起点的头。",
    reasonCopy:
      "相处里有说走就走的兴致，也有说不时能停下的余地。计划变了会交代，话说重了会回来处理，亲近不再只靠热度和猜测。",
    stateSummary: "双方明确选择恋爱，并愿意共同维护边界、说明和修复。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "失衡恋爱",
    coreCopy:
      "你们的吸引很强，共同体验和每次靠近都让关系迅速升温，也愿意把彼此称作恋人。但有些重要范围仍靠默认，有些不安仍靠追问或让步压下。恋爱已经开始，安全和可靠却没有跟上它的速度。",
    reasonCopy:
      "强烈靠近推动了关系确认，但公开与接触是否逐项同意、计划变化是否承担影响、暂停后能否可靠回来，仍缺少足够稳固的共同答案。",
    stateSummary: "恋爱关系成立，但吸引与信任、舒适之间仍明显失衡。",
  },
  {
    id: "friends",
    kind: "final",
    title: "成为朋友",
    coreCopy:
      "你们可以一起发现新活动，也能坦诚说今天不想赶、这次预算不合适，或此刻只想安静一会儿。相处里有尊重、可靠和继续联系的意愿，只是双方没有把这种连接定义成恋爱。朋友不是退而求其次，而是共同说清的关系。",
    reasonCopy:
      "你们能协商体验、资源、支持和冲突节奏，也允许彼此拒绝；与此同时，浪漫吸引或排他意愿没有形成双方都愿意确认的程度。",
    stateSummary: "关系以自在、可信、低冲突的朋友状态继续。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "关系未定",
    coreCopy:
      "你们没有散开，下一次见面也仍值得期待。只是照片是否公开、关系是否排他、一次修复能否变成长期习惯，都还需要新的回答。现在的靠近是真的，尚未共同命名也是真的。",
    reasonCopy:
      "双方保留了兴趣和继续协商的空间，却还没有在关系定义、边界或修复方式上形成完整一致的选择。",
    stateSummary: "关系停在仍可推进的暧昧中，答案尚未由双方共同确认。",
  },
];

export const esfpRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "稳定相恋",
    copy:
      "你们不只确认了恋爱，也没把热烈过成一团乱。临时有变会提前说，不想去可以直接拒绝，吵到需要冷静时也会约好什么时候回来。以后当然还会有分歧，但你们已经知道怎么把话接着说下去。",
    badge: "共同维护",
  },
  {
    id: "romance_hidden_risk",
    title: "相恋有隙",
    copy:
      "你们确认了恋爱，也仍然真心想靠近。不过有些安排还依赖临场猜测，有些边界虽然说过，却尚未经过下一次变化或冲突的检验。关系已经有名字，稳定仍需要双方用行动补全。",
    badge: "仍需磨合",
  },
];

export const esfpFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA 对下一次一起做点什么多了一分兴趣。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA 已经在认真期待下一次共同体验。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA 很难再把想继续靠近你的心思藏住。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA 对继续靠近少了一点兴致。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA 不再像刚才那样期待下一次见面。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA 已经不想把这份靠近继续理解成心动。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA 愿意把一个小安排多交给你一点。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA 开始相信你会把说好的事放在心上。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "TA 明显更愿意把边界和重要决定交给你一起谈。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA 对你的回应多了一点保留。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA 开始怀疑你会不会尊重说好的范围。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA 不再相信你会按约定回应边界和影响。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA 在你身边放松了一点。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA 不必一边靠近，一边提防拒绝被误解。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA 可以自在表达喜欢、犹豫或离开，不必担心被逼迫。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "你们之间多了一点不自在。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA 开始收起原本自然的表达。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA 已经很难在你身边保有安全和退出空间。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "一句没说开的别扭留在了空气里。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "分歧已经从事情本身转成了彼此防御。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "冲突正在把这段关系推向彻底中止。",
  },
  {
    id: "conflict_down_slight",
    dimension: "conflict",
    direction: "down",
    strength: "slight",
    text: "刚才那点别扭缓下来了一些。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "你们把分歧放回了可以协商的范围。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "原本紧绷的对峙被清楚的说明和修复化开了。",
  },
];

export const esfpFeedbackTextById = Object.fromEntries(
  esfpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
