import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const isfpEndings: readonly EndingContent[] = [
  {
    "id": "conflict_break",
    "kind": "global",
    "title": "冲突分开",
    "coreCopy": "你们本来愿意把不舒服说出来，后来每一次开口却都像在为下一次反击找证据。暂停、解释和不同意见都失去了安全的落点，TA 选择不再继续这段会让彼此不断防御的关系。",
    "reasonCopy": "互动中反复出现强迫当场回答、人格化指责、反咬责任或把边界变成审讯。善意或着急没有抵消这些行为造成的影响，未解决的冲突持续累积。",
    "stateSummary": "冲突已高到无法继续协商；继续靠近不再是安全选择。"
  },
  {
    "id": "strong_discomfort",
    "kind": "global",
    "title": "停止相处",
    "coreCopy": "TA 原本愿意把安静、犹豫和还没想清楚的话留在你面前。现在，每一次停顿都可能换来追问、标签或逼迫，连说出“不想”都要先判断代价。TA 选择结束这段无法自在相处的关系。",
    "reasonCopy": "连续追问、强制排他、否定已表达的暂停权，或把具体边界当成过度敏感，持续压低了相处安全感。出发点不决定结果，压力已经超过了关系能承受的范围。",
    "stateSummary": "舒适感降至无法保留真实表达和退出权的程度。"
  },
  {
    "id": "trust_broken",
    "kind": "global",
    "title": "信任断裂",
    "coreCopy": "那些本来只交给你看的记录、已经说好的回谈和下一次安排，都不再有可以托付的地方。TA 不再相信自己的边界会被按原意理解，也不愿把修复继续押在新的承诺上。",
    "reasonCopy": "淡化隐私影响、推卸传播责任、把行动关心当作欠债，或反复让对方猜测安排和意图，使可靠性和保密感被消耗殆尽。",
    "stateSummary": "信任已经无法支持新的托付、解释或修复。"
  },
  {
    "id": "no_second_meeting",
    "kind": "stage_gate",
    "title": "不再约见",
    "coreCopy": "第一次见面没有发展成下一次约定。你们也许都没有做错某一件足以被记住的大事，只是在具体体验、安静时刻和退出节奏里，没有找到彼此都能接受的相处方式。",
    "reasonCopy": "手作展和那段安静的路没有找到双方都舒服的节奏。第一次见面结束后，也没有形成一个真正想兑现的下一次。",
    "stateSummary": "关系停在初识，双方没有建立下一次见面的共同意愿。"
  },
  {
    "id": "fade_out",
    "kind": "stage_gate",
    "title": "渐失联络",
    "coreCopy": "你们并非突然翻脸，只是行动里的关心、临时安排和价值分歧没有慢慢变成可依赖的理解。聊天还留着，下一次见面却总是被没有说清的期待推远。",
    "reasonCopy": "充电线的心意、临时改计划的成本和那次价值分歧都没有被好好说开。下一次见面因此越来越远。",
    "stateSummary": "下一次见面越来越远，联系慢慢淡了下去。"
  },
  {
    "id": "stay_acquaintances",
    "kind": "stage_gate",
    "title": "止于相识",
    "coreCopy": "你们认识了彼此的一些喜好，也一起度过过不坏的时刻，但支持方式、隐私责任或冲突后的回谈始终没有变成共同习惯。关系没有恶意，只是还不足以进入更亲密的位置。",
    "reasonCopy": "支持怎样给、隐私怎样守、暂停后怎样回来，都还没有变成双方能放心依靠的习惯。",
    "stateSummary": "关系保留在熟人范围，没有进入暧昧或更深的托付。"
  },
  {
    "id": "strangers_after_all",
    "kind": "final",
    "title": "回到陌生",
    "coreCopy": "你们曾经靠得很近，也认真谈过一些本来不轻易交出去的话。可到了最后，信任、自在或冲突里至少有一项没有留下可继续使用的余地。没有谁需要替过去否认，只是未来不再适合一起走。",
    "reasonCopy": "最后的关系状态显示：有些边界没有被修复，有些需求仍靠猜测，或冲突已超过双方愿意承担的程度。亲近的记忆不能自动替代可靠的相处。",
    "stateSummary": "曾经的靠近还在记忆里，彼此的生活却不再留位置。"
  },
  {
    "id": "confirmed_relationship",
    "kind": "final",
    "title": "确认相恋",
    "coreCopy": "这次回谈结束前，TA 没有再让关系停在暗示里，而是明确问你是否愿意把这段关系叫作恋爱。你们都给出了可以被听见的“愿意”。相处节奏、隐私边界和暂停后如何回来，也被说成了双方愿意承担的安排。",
    "reasonCopy": "你们既保留了具体体验与各自空间，也用说明、兑现、边界确认和修复行动回应了彼此。亲近不再只靠猜测，明确的双向同意让关系获得了共同名称。",
    "stateSummary": "你们都愿意把这份靠近叫作恋爱，也知道今后该怎样照顾彼此的节奏。"
  },
  {
    "id": "dangerous_lovers",
    "kind": "final",
    "title": "失衡恋爱",
    "coreCopy": "你们都明确愿意以恋人身份继续靠近，强烈的吸引也让下一次见面几乎不用谁先开口。但关系里有些重要的话仍没有被真正说清：一方在等对方猜，另一方在用靠近掩盖不安。恋爱是真的，失衡也是真的。",
    "reasonCopy": "行动和心动让你们进入了恋爱，但拒绝能否被听见、隐私能否被守住、暂停后能否回来，仍有几处没有答案。",
    "stateSummary": "恋爱已经开始，靠近背后的不安仍没有放下。"
  },
  {
    "id": "friends",
    "kind": "final",
    "title": "成为朋友",
    "coreCopy": "你们已经知道怎样尊重彼此的节奏：可以坦诚拒绝，也可以一起体验；有分歧时不必把对方变成问题。最后，你们也把关系说清楚——继续以朋友身份认真来往，不把照顾和亲近默认解释成恋爱。",
    "reasonCopy": "你们愿意继续照顾小事、尊重安静和坦诚拒绝，只是双方都没有把这种亲近理解成恋爱。朋友是共同给出的答案。",
    "stateSummary": "关系以可靠、舒适、低冲突的朋友状态持续。"
  },
  {
    "id": "unresolved_ambiguity",
    "kind": "final",
    "title": "关系未定",
    "coreCopy": "你们没有消失，也没有替彼此把关系说死。下一次见面、一次更清楚的提问，或一次真正被兑现的回谈，都可能改变方向。现在能确定的只是：靠近还在，答案还需要两个人一起给。",
    "reasonCopy": "你们没有走到必须分开的地步，也还没把亲近、排他和以后怎么见面说成同一个答案。",
    "stateSummary": "关系保留在可继续观察和协商的暧昧状态。"
  }
];

export const isfpRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    "id": "romance_stable",
    "title": "稳定相恋",
    "copy": "你们已经确认关系，也把具体相处方式落到了可见行动上。临时变化会说明，暂停会回来，关心不再全靠猜测。差异还会出现，但双方知道怎样一起处理。",
    "badge": "共同维护"
  },
  {
    "id": "romance_hidden_risk",
    "title": "相恋有隙",
    "copy": "你们确认了关系，也仍然愿意靠近。但有些安排还靠猜，有些不舒服会先收起来。下一次临时变化或暂停发生时，能不能照说好的方式回来，还需要行动回答。",
    "badge": "仍需磨合"
  }
];

export const isfpFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    "id": "attraction_up_slight",
    "dimension": "attraction",
    "direction": "up",
    "strength": "slight",
    "text": "TA望向你时多停了一会儿。"
  },
  {
    "id": "attraction_up_medium",
    "dimension": "attraction",
    "direction": "up",
    "strength": "medium",
    "text": "TA开始期待下一次自然地待在一起。"
  },
  {
    "id": "attraction_up_strong",
    "dimension": "attraction",
    "direction": "up",
    "strength": "strong",
    "text": "TA已经藏不住想让你继续靠近的心思。"
  },
  {
    "id": "attraction_down_slight",
    "dimension": "attraction",
    "direction": "down",
    "strength": "slight",
    "text": "TA对这次相处少了一点期待。"
  },
  {
    "id": "attraction_down_medium",
    "dimension": "attraction",
    "direction": "down",
    "strength": "medium",
    "text": "TA没有刚才那么想和你靠近了。"
  },
  {
    "id": "attraction_down_strong",
    "dimension": "attraction",
    "direction": "down",
    "strength": "strong",
    "text": "TA不再想把这份亲近理解成心动。"
  },
  {
    "id": "trust_up_slight",
    "dimension": "trust",
    "direction": "up",
    "strength": "slight",
    "text": "TA愿意把手边的小事多交给你一点。"
  },
  {
    "id": "trust_up_medium",
    "dimension": "trust",
    "direction": "up",
    "strength": "medium",
    "text": "TA开始自然地把你的习惯留进安排里。"
  },
  {
    "id": "trust_up_strong",
    "dimension": "trust",
    "direction": "up",
    "strength": "strong",
    "text": "TA愿意让你靠近那些很私人的部分。"
  },
  {
    "id": "trust_down_slight",
    "dimension": "trust",
    "direction": "down",
    "strength": "slight",
    "text": "TA对你的说法有了一点迟疑。"
  },
  {
    "id": "trust_down_medium",
    "dimension": "trust",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始怀疑你是否会尊重刚说好的界线。"
  },
  {
    "id": "trust_down_strong",
    "dimension": "trust",
    "direction": "down",
    "strength": "strong",
    "text": "TA不再愿意让你碰那些珍重的东西。"
  },
  {
    "id": "comfort_up_slight",
    "dimension": "comfort",
    "direction": "up",
    "strength": "slight",
    "text": "TA在你身边松弛了一点。"
  },
  {
    "id": "comfort_up_medium",
    "dimension": "comfort",
    "direction": "up",
    "strength": "medium",
    "text": "TA不再时时留意自己有没有越界。"
  },
  {
    "id": "comfort_up_strong",
    "dimension": "comfort",
    "direction": "up",
    "strength": "strong",
    "text": "这一刻，并肩待着也很舒服。"
  },
  {
    "id": "comfort_down_slight",
    "dimension": "comfort",
    "direction": "down",
    "strength": "slight",
    "text": "你们之间多了一点不自在。"
  },
  {
    "id": "comfort_down_medium",
    "dimension": "comfort",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始悄悄拉开和你的距离。"
  },
  {
    "id": "comfort_down_strong",
    "dimension": "comfort",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经很难在你身边放松下来。"
  },
  {
    "id": "conflict_up_slight",
    "dimension": "conflict",
    "direction": "up",
    "strength": "slight",
    "text": "空气里多了一点闷着的火气。"
  },
  {
    "id": "conflict_up_medium",
    "dimension": "conflict",
    "direction": "up",
    "strength": "medium",
    "text": "这已经不只是做法不同。"
  },
  {
    "id": "conflict_up_strong",
    "dimension": "conflict",
    "direction": "up",
    "strength": "strong",
    "text": "这场互动正在逼近彻底关门。"
  },
  {
    "id": "conflict_down_slight",
    "dimension": "conflict",
    "direction": "down",
    "strength": "slight",
    "text": "刚才那点闷气散了一些。"
  },
  {
    "id": "conflict_down_medium",
    "dimension": "conflict",
    "direction": "down",
    "strength": "medium",
    "text": "你们找到了彼此都舒服的退让方式。"
  },
  {
    "id": "conflict_down_strong",
    "dimension": "conflict",
    "direction": "down",
    "strength": "strong",
    "text": "僵着的气氛终于彻底松开了。"
  }
];

export const isfpFeedbackTextById = Object.fromEntries(
  isfpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
