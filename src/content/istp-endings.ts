import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const istpEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突分开",
    coreCopy:
      "你们已经很难把分歧留在具体事情上。安静被当成拒绝，空间被当成逃避，直接表达又被新的指责顶回去。继续靠近只会让双方更用力防守，于是这段关系在冲突里停下。",
    reasonCopy:
      "反复逼迫当场说完、用类型标签替 TA 下结论，或在受伤后用更重的话还击，让原本可以协商的节奏、帮助和边界变成了对抗。",
    stateSummary: "冲突盖过了理解，双方选择停止继续接触。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "停止相处",
    coreCopy:
      "TA 在这段相处里越来越难说不，也越来越难安静待一会儿。每次沉默都要被追问，想暂停也得先解释到让你满意。久而久之，TA 只想把距离拉开，不再继续。",
    reasonCopy:
      "短暂沉默、独处安排或九十分钟暂停没有被当作可以确认的边界，而是多次遭到填满、质疑或强行取消。",
    stateSummary: "相处已缺少基本自在，TA 明确退出这段关系。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "信任断裂",
    coreCopy:
      "你们曾经试着把帮助范围、返回时间和关系期待说清楚，但这些约定没有成为可以依靠的东西。TA 不再相信边界会被尊重，也不愿继续把重要的决定交进这段关系。",
    reasonCopy:
      "账号与操作边界、暂停后的返回、伤害后的修复或关系承诺屡次被忽略；具体约定失去了可信度。",
    stateSummary: "信任已经耗尽，关系没有继续托付的基础。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "不再约见",
    coreCopy:
      "从地铁口分别后，你们没有约下一次。短句和安静没能变成彼此可理解的节奏，那个“冷脸独行侠”的梗也没有真正被放下。第一次见面就停在这里。",
    reasonCopy:
      "初识时，你们还没有建立足够的兴趣、信任与自在，也没找到一种不靠类型标签猜测对方的交流方式。",
    stateSummary: "关系停在初见，没有形成再次约见的共同意愿。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "渐失联络",
    coreCopy:
      "你们没有正式告别，只是消息间隔越来越长。一起处理购票、接住那只转接头的心意，以及安排周末空间，本来都可以让关系更具体，却没有积成双方愿意继续投入的节奏。",
    reasonCopy:
      "帮助的范围、关心的含义和共同时间都留下了没说开的负担；联系因此慢慢失去下一步。",
    stateSummary: "往来逐渐变淡，下一次见面没有再被落实。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "止于相识",
    coreCopy:
      "你们知道了彼此的一些兴趣，也经历过不算轻的分歧，但还没有形成可以进入亲密关系的相处方式。分享能不能被认真听见、直接反馈怎样不伤人、暂停后是否可靠回来，都仍不稳定。",
    reasonCopy:
      "夜景分享、文档冲突和九点回谈之前的暂停，没有共同建立起足够安全、可信的修复习惯。",
    stateSummary: "关系保留在熟人范围，没有继续走向暧昧。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "回到陌生",
    coreCopy:
      "你们认真靠近过，也把一些原本模糊的需要摆到桌面上。但谈到最终关系时，信任、自在或处理冲突的能力仍不足以承住下一步。曾经的具体关心是真的，分开也同样清楚。",
    reasonCopy:
      "准时回来和一次道歉没有自动修复全部影响；空间、联系、排他或公开方式仍缺少双方都能依靠的答案。",
    stateSummary: "靠近没有变成可持续的关系，双方回到各自生活。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "确认相恋",
    coreCopy:
      "这一次，你们没有靠默契猜答案。TA 说想认真发展，你也给出了自己的选择。多久见面、各自要留多少独处时间、要不要报平安，连排他和公开都谈清楚了。你们都愿意把这段关系叫作恋爱。",
    reasonCopy:
      "从帮忙时不越过对方，到吵累了也会说好几点回来，再到把各自真正能答应的事讲明白，这段靠近终于得到了两个人清楚的回应。",
    stateSummary: "双方确认恋爱，并愿意共同维护具体边界与承诺。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "失衡相恋",
    coreCopy:
      "你们都选择以恋人身份继续，强烈的吸引让这一步显得顺理成章。但关系里的安全感还没有跟上：一些边界仍靠试探，一些不舒服仍被心动压住。恋爱已经开始，失衡也没有消失。",
    reasonCopy:
      "具体关心与靠近推高了心动，但暂停能否被尊重、承诺能否兑现、受伤后能否稳定修复，仍缺少足够可靠的答案。",
    stateSummary: "双方进入恋爱，信任或自在仍存在明显缺口。",
  },
  {
    id: "friends",
    kind: "final",
    title: "成为朋友",
    coreCopy:
      "你们已经能一起解决具体问题，也能尊重沉默、兴趣和各自的时间。最后，双方都没有把这些照顾自动解释成爱情，而是把关系说成了可靠的朋友。这个答案并不含糊。",
    reasonCopy:
      "相处中保留了信任、自在和低冲突，但心动没有走到恋爱的位置；双方仍愿意以朋友身份继续来往。",
    stateSummary: "关系稳定在可信、自在的朋友状态。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "关系未定",
    coreCopy:
      "你们没有离开彼此，也没有急着用一个名称覆盖所有差异。共同时间、独处、联系或公开方式里仍有几项需要继续确认。下一次具体行动可能让答案更清楚，现在的靠近仍保留选择。",
    reasonCopy:
      "双方有继续发展的意愿，却还没有对投入方式和关系范围给出同一个明确答案。",
    stateSummary: "关系仍在靠近与观察之间，尚未完成共同定义。",
  },
];

export const istpRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "稳定相恋",
    copy:
      "你们不只确认了关系，也知道日子具体怎么过：想自己待会儿会说一声，计划有变会提前通知，话说重了也会回来收拾。分歧不会消失，但至少不用再靠猜。",
    badge: "共同维护",
  },
  {
    id: "romance_hidden_risk",
    title: "相恋有隙",
    copy:
      "你们确认了关系，也真心想继续靠近。不过，有些需要仍会先藏起来，有些安排还靠对方猜。下一次暂停、临时变化或尖锐反馈发生时，能否按说好的方式处理，还需要行动验证。",
    badge: "仍需磨合",
  },
];

export const istpFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA 的目光在你身上多停了一会儿。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA 开始把下一次相处放进自己的安排里。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA 已经明确想让这份靠近继续向前。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA 对下一次靠近少了一点期待。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA 不再像刚才那样想把距离拉近。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA 不再把这份相处理解成心动。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA 愿意让你参与更多一点。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA 开始相信说好的边界会被记住。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "TA 愿意把更重要的顾虑交给你一起处理。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA 对你的回应多了一点迟疑。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA 开始怀疑具体约定能不能被兑现。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA 不再相信你会守住边界和承诺。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA 在你身边稍微放松了一些。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "安静或说真话都不再需要小心防备。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA 可以自在地留下，也可以安心说出需要。",
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
    text: "TA 开始为自己留出更远的距离。",
  },
  {
    id: "comfort_down_strong",
    dimension: "comfort",
    direction: "down",
    strength: "strong",
    text: "TA 已经很难在这段相处里放松。",
  },
  {
    id: "conflict_up_slight",
    dimension: "conflict",
    direction: "up",
    strength: "slight",
    text: "这句话留下了一点没有散开的火气。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "分歧开始从具体做法变成彼此对抗。",
  },
  {
    id: "conflict_up_strong",
    dimension: "conflict",
    direction: "up",
    strength: "strong",
    text: "这场互动已经逼近彻底关门。",
  },
  {
    id: "conflict_down_slight",
    dimension: "conflict",
    direction: "down",
    strength: "slight",
    text: "刚才那点紧绷稍微松开了。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "分歧重新变成了可以一起处理的问题。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "对抗终于停下，双方都能重新开口。",
  },
];

export const istpFeedbackTextById = Object.fromEntries(
  istpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
