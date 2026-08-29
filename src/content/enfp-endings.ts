import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const enfpEndings: readonly EndingContent[] = [
  {
    "id": "conflict_break",
    "kind": "global",
    "title": "冲突终止关系",
    "coreCopy": "话题还在飞快往前，你们却已经不再回答对方真正受伤的部分。玩笑变成公开难堪，解释变成下一轮反击，连暂停都被当作输赢。TA 收住最后一句：\"到这里吧。继续说只会让伤害更多。\"",
    "reasonCopy": "互动中反复出现人格贬损、当众替 TA 定义关系或感受、强迫证明，以及用攻击替沟通。想保护关系、争取答案或替 TA 出头，都不能抵消持续升级造成的伤害。",
    "stateSummary": "未解决冲突已经达到终止关系的程度；仍有火花、善意或共同经历，都不能把伤害改写成默契。"
  },
  {
    "id": "strong_discomfort",
    "kind": "global",
    "title": "不再继续相处",
    "coreCopy": "TA 原本会把新点子、低落和没想好的部分都留在对话里。后来，每次沉默都会被追问，每个拒绝都需要重新证明，连热情也像必须持续交付的表演。TA 不再愿意在这段相处里消耗下去。",
    "reasonCopy": "连续越过回复节奏、私人披露、独处和社交边界，让 TA 失去安全说不与降低能量的空间。关心、兴奋或想靠近的意图，不能取消这些行为带来的压力。",
    "stateSummary": "舒适感已经低到无法继续自在表达、拒绝和退出的程度。"
  },
  {
    "id": "trust_broken",
    "kind": "global",
    "title": "信任彻底断裂",
    "coreCopy": "TA 仍然能礼貌回应，也还会在人群里接住你的话，但重要安排、私人状态和关系意图不再交给你。那些曾经愿意共同确认的事情，被一件件撤回到安全距离。",
    "reasonCopy": "互动中多次出现表面答应后突然改变、未经同意公开私人时刻或关系称呼、隐藏真实需求，以及用热度跳过协议。可靠性、隐私和共同决定因此失去依据。",
    "stateSummary": "信任已经跌破继续托付、协商和修复的底线；联系频率与表达强度不能代替兑现和同意。"
  },
  {
    "id": "no_second_meeting",
    "kind": "stage_gate",
    "title": "没有下次见面",
    "coreCopy": "第一次见面有笑声，也有几个差点继续聊下去的话题。可聚会散场后，单独的下一次始终没有被确认；你们把彼此留在了那晚的人群和礼貌道别里。",
    "reasonCopy": "聚会上的热情接话没有变成单独邀约，半开玩笑的否定也留下了些尴尬。散场后，双方都没有把下一次说出口。",
    "stateSummary": "关系停在第一次见面；双方没有形成继续单独了解所需的共同意愿与安全感。"
  },
  {
    "id": "fade_out",
    "kind": "stage_gate",
    "title": "联系慢慢退场",
    "coreCopy": "聊天框曾像烟花一样长出许多分支，临时活动、晚间回复和没讲完的私人话题也都留下过入口。后来，入口越来越多，真正落地的下一次却越来越少，联系没有决裂，只是慢慢退出日常。",
    "reasonCopy": "临时活动、密集消息和没讲完的私人话题一直在增加，真正落地的约定却越来越少。热闹慢慢退出了日常。",
    "stateSummary": "消息还留着，彼此却不再主动把话题接下去。"
  },
  {
    "id": "stay_acquaintances",
    "kind": "stage_gate",
    "title": "只做普通熟人",
    "coreCopy": "以后在人群里见面，TA 仍可能把你拉进话题，也会分享一个刚发现的新点子。但低能量时的空间、受挫时的支持和失约后的修复，还没有变成双方都信得过的习惯。邀请重新回到群体，关系不再单独向前。",
    "reasonCopy": "善意失约后的等待、低能量时需要的空间，以及受挫时怎样陪伴，都还没有成为双方信得过的习惯。",
    "stateSummary": "关系保留在普通熟人范围，没有进入暧昧或更深的相互托付。"
  },
  {
    "id": "strangers_after_all",
    "kind": "final",
    "title": "最后回到陌生",
    "coreCopy": "你们走到了谈排他、公开、联系频率和社交边界的时刻，却发现过去的热度已经没有足够的信任与自在来承接答案。TA 没否认那些真实发生过的靠近，只是不再把彼此写进未来。",
    "reasonCopy": "走到最后，热闹已经遮不住那些没被尊重的停顿、失约和社交边界。你们不再愿意把彼此放进下一次安排。",
    "stateSummary": "共同话题还在，继续往来的安心却已经没有了。"
  },
  {
    "id": "confirmed_relationship",
    "kind": "final",
    "title": "正式成为恋人",
    "coreCopy": "那些突然冒出的新计划还会继续出现，聊天也不会从此只剩一条直线。但你们已经谈清怎样改动安排、何时需要安静、什么算友好或暧昧，也让排他、公开和联系节奏得到双向确认。TA 笑着把最后一项划定：\"这次不用猜了——我们在恋爱。\"",
    "reasonCopy": "你们把热情翻译成可确认的意图，把探索放进可协商的安排，把支持交还给真正需要的人，也愿意为失约与越界承担影响。明确的双向同意让关系获得共同名称。",
    "stateSummary": "你们把热情过成了双方都愿意承认和照顾的恋爱。"
  },
  {
    "id": "dangerous_lovers",
    "kind": "final",
    "title": "失衡开始恋爱",
    "coreCopy": "你们决定以恋人身份继续，消息、邀约和下一次心动来得很快。只是有些沉默仍会被误读，有些边界还靠热度带过去，关系变化时也没有可靠的修复方法。恋爱是真的，失衡也是真的。",
    "reasonCopy": "热度让你们很快确认了恋爱，但沉默是否会被尊重、失约后能否补回来、社交边界是否对等，仍有不少空白。",
    "stateSummary": "恋爱已经开始，热度退下来以后能否站稳仍要再看。"
  },
  {
    "id": "friends",
    "kind": "final",
    "title": "确定成为朋友",
    "coreCopy": "TA 仍会把刚发现的活动和荒唐点子发给你，也知道你什么时候只想安静走一段。你们不再让友善、深聊或高频联系替关系命名，而是共同确认：这份可靠又自在的靠近叫朋友。",
    "reasonCopy": "你们愿意继续分享新点子，也知道什么时候别追问，只是双方都没有把这种靠近理解成恋爱。",
    "stateSummary": "关系以清楚、可靠且舒适的朋友形式继续；这不是失败、候补或等待转正。"
  },
  {
    "id": "unresolved_ambiguity",
    "kind": "final",
    "title": "暧昧仍未落定",
    "coreCopy": "你们仍有下一次，也还愿意继续谈那几项关系条件。只是热度、社交边界与长期维护还没有形成一个双方都确认的版本；消息会继续亮起，关系名称仍停在草稿。",
    "reasonCopy": "你们还愿意见面，消息也会继续亮起，只是热度、社交边界和长期节奏没有得到同一个答案。",
    "stateSummary": "关系仍停在暧昧里，下一步要等两个人真正说定。"
  }
];

export const enfpRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    "id": "romance_stable",
    "title": "稳定恋爱关系",
    "copy": "你们不只确认了关系，也形成了可反复使用的相处方式：新计划会先说明成本，消息节奏可以调整，支持会先问需要，社交边界遵守同一套规则。热情仍在，但不再替承诺作答。",
    "badge": "关系评价：稳定恋爱关系"
  },
  {
    "id": "romance_hidden_risk",
    "title": "恋爱仍藏风险",
    "copy": "你们已经明确相恋，也愿意继续投入；只是某些联系节奏、社交边界、履约方式或修复责任还没有充分经受变化。关系名称给出了下一步，不会替双方自动完成维护。",
    "badge": "关系评价：恋爱仍藏风险"
  }
];

export const enfpFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    "id": "attraction_up_slight",
    "dimension": "attraction",
    "direction": "up",
    "strength": "slight",
    "text": "TA看向你时笑意多停了一会儿。"
  },
  {
    "id": "attraction_up_medium",
    "dimension": "attraction",
    "direction": "up",
    "strength": "medium",
    "text": "TA已经开始期待下一次一起冒出来的新点子。"
  },
  {
    "id": "attraction_up_strong",
    "dimension": "attraction",
    "direction": "up",
    "strength": "strong",
    "text": "TA几乎藏不住想继续靠近你的心思。"
  },
  {
    "id": "attraction_down_slight",
    "dimension": "attraction",
    "direction": "down",
    "strength": "slight",
    "text": "TA眼里的兴奋淡了一点。"
  },
  {
    "id": "attraction_down_medium",
    "dimension": "attraction",
    "direction": "down",
    "strength": "medium",
    "text": "TA不再像刚才那样期待下一次见面。"
  },
  {
    "id": "attraction_down_strong",
    "dimension": "attraction",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经不想把这阵情绪起伏当成心动。"
  },
  {
    "id": "trust_up_slight",
    "dimension": "trust",
    "direction": "up",
    "strength": "slight",
    "text": "TA愿意把刚冒出来的念头多告诉你一点。"
  },
  {
    "id": "trust_up_medium",
    "dimension": "trust",
    "direction": "up",
    "strength": "medium",
    "text": "TA开始自然地把你放进接下来的计划。"
  },
  {
    "id": "trust_up_strong",
    "dimension": "trust",
    "direction": "up",
    "strength": "strong",
    "text": "TA已经放心把最在意的事说给你听。"
  },
  {
    "id": "trust_down_slight",
    "dimension": "trust",
    "direction": "down",
    "strength": "slight",
    "text": "TA对这句话迟疑了一下。"
  },
  {
    "id": "trust_down_medium",
    "dimension": "trust",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始拿不准你的回应是不是认真的。"
  },
  {
    "id": "trust_down_strong",
    "dimension": "trust",
    "direction": "down",
    "strength": "strong",
    "text": "TA不再把重要心事交到你这里。"
  },
  {
    "id": "comfort_up_slight",
    "dimension": "comfort",
    "direction": "up",
    "strength": "slight",
    "text": "TA在你面前更自在了一点。"
  },
  {
    "id": "comfort_up_medium",
    "dimension": "comfort",
    "direction": "up",
    "strength": "medium",
    "text": "TA说话时不再先猜你的反应。"
  },
  {
    "id": "comfort_up_strong",
    "dimension": "comfort",
    "direction": "up",
    "strength": "strong",
    "text": "这一刻，TA不必收着情绪。"
  },
  {
    "id": "comfort_down_slight",
    "dimension": "comfort",
    "direction": "down",
    "strength": "slight",
    "text": "原本轻松的气氛卡了一下。"
  },
  {
    "id": "comfort_down_medium",
    "dimension": "comfort",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始把热情一点点收回去。"
  },
  {
    "id": "comfort_down_strong",
    "dimension": "comfort",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经很难在你面前自然地做自己。"
  },
  {
    "id": "conflict_up_slight",
    "dimension": "conflict",
    "direction": "up",
    "strength": "slight",
    "text": "一句玩笑里忽然多了点刺。"
  },
  {
    "id": "conflict_up_medium",
    "dimension": "conflict",
    "direction": "up",
    "strength": "medium",
    "text": "你们的情绪已经盖过了原本的话题。"
  },
  {
    "id": "conflict_up_strong",
    "dimension": "conflict",
    "direction": "up",
    "strength": "strong",
    "text": "这场互动正迅速变成彼此伤人的拉扯。"
  },
  {
    "id": "conflict_down_slight",
    "dimension": "conflict",
    "direction": "down",
    "strength": "slight",
    "text": "刚才冒出的刺软下去了一点。"
  },
  {
    "id": "conflict_down_medium",
    "dimension": "conflict",
    "direction": "down",
    "strength": "medium",
    "text": "你们终于从情绪里找回了要说的事。"
  },
  {
    "id": "conflict_down_strong",
    "dimension": "conflict",
    "direction": "down",
    "strength": "strong",
    "text": "那股互相顶着的劲终于散了。"
  }
];

export const enfpFeedbackTextById = Object.fromEntries(
  enfpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
