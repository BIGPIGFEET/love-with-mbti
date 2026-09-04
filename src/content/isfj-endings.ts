import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const isfjEndings: readonly EndingContent[] = [
  {
    id: "conflict_break",
    kind: "global",
    title: "冲突终止关系",
    coreCopy:
      "帮助要不要接受、谁负责收尾、争论何时暂停，本来都可以逐项讨论。后来，这些问题只剩下逼迫、贴标签和互相防御。TA 不再继续争取被理解：‘我们已经不是在解决事情，而是在要求对方放弃自己的边界。到这里吧。’",
    reasonCopy:
      "披露被强迫，暂停被追问打断，照顾劳动被当作爱的义务，关系也被索要永久保证。一次次升级的对抗盖过了具体问题和修复入口。",
    stateSummary: "未解决的压力与防御已经压过沟通空间，关系在冲突中终止。",
  },
  {
    id: "strong_discomfort",
    kind: "global",
    title: "不适终止相处",
    coreCopy:
      "TA 开始回避说出真实答案：想安静、不要帮助、不想拥抱、需要准备或暂时不能谈，都可能再次被解释成冷淡和不够在乎。最终，TA 收回了原本留给你的互动入口，不再继续这段相处。",
    reasonCopy:
      "社交节奏被要求证明兴趣，一次帮助被扩张成照顾职责，礼物、触碰或披露也越过了当下同意。即使靠近的意图存在，实际相处已经失去安心说不的空间。",
    stateSummary: "自在与可拒绝空间已经耗尽，继续接触不再安全或舒适。",
  },
  {
    id: "trust_broken",
    kind: "global",
    title: "失信后的告别",
    coreCopy:
      "TA 不再把真实负荷、脆弱信息和共同安排交给你讨论。曾经说清的借用范围、任务轮换、返回时间和关系条件，没有累积成可以依赖的行动。最后，TA 选择告别。",
    reasonCopy:
      "说好的边界被重新解释，真实限制被全部答应掩盖，或承诺在需要兑现时一再落空。细心、善意和强烈好感都不能替代可靠。",
    stateSummary: "对诚实、边界和兑现的信赖已经跌破继续关系的底线。",
  },
  {
    id: "no_second_meeting",
    kind: "stage_gate",
    title: "初识没有下次",
    coreCopy:
      "桌游局散场后，你们礼貌道别，却没有再约下一次。TA 没把人多时的安静或那根备用充电线赋予更多含义，只让这次相遇停在了当晚。",
    reasonCopy:
      "参与节奏和一次帮助没有形成双方都想延续的兴趣、信任与自在。没有下一次并不证明谁不够热情、体贴或值得被喜欢。",
    stateSummary: "关系停在初识；一次没有延续的见面不构成对任何人的判定。",
  },
  {
    id: "fade_out",
    kind: "stage_gate",
    title: "联系慢慢淡去",
    coreCopy:
      "你们分享过兴趣，也试着靠近彼此的表达和低落时刻。后来，具体邀约退回偶尔问候，礼物、见面和复谈都没有再自然地进入下一次。",
    reasonCopy:
      "类型预设没有完全让位给真实兴趣，表达边界或披露入口也没能变成可持续的相处方式。几次没有修好的落差，让联系逐渐失去方向。",
    stateSummary: "吸引、信任、舒适或冲突状态没有共同支持继续接触，关系自然淡去。",
  },
  {
    id: "stay_acquaintances",
    kind: "stage_gate",
    title: "关系停在熟人",
    coreCopy:
      "你们仍能在群体活动里自然说话，偶尔也会交换近况。但共同事务、临时变化和争执后的返回，不再继续进入更私人的位置。",
    reasonCopy:
      "几次分工没有真正谈拢，社交节奏也总是错开；争吵停下以后，约好的对话有时没有回来。双方仍然尊重彼此，却没有再往更亲密的位置走。",
    stateSummary: "关系保留在熟人层面；可以友好往来，但不再向亲密推进。",
  },
  {
    id: "strangers_after_all",
    kind: "final",
    title: "最终不再往来",
    coreCopy:
      "你们确实走到了关系定义之前，也谈过照顾责任、个人空间和未来安排。最后，这些讨论仍没有变成足够可信、自在的日常。TA 撤下共同计划，你们不再出现在彼此之后的安排里。",
    reasonCopy:
      "完成十次互动没有覆盖已经累积的失信、不适或冲突。稳定见面和实际投入无法替代平等分工、边界与修复，双方最终结束往来。",
    stateSummary: "关系基础不足以继续，最终从彼此生活中退出。",
  },
  {
    id: "confirmed_relationship",
    kind: "final",
    title: "双方确认恋爱",
    coreCopy:
      "回程路上，你们终于没有再让固定周末、礼物或朋友的玩笑替自己开口。想继续约会、愿意排他，都得到了同一个答案。TA 笑得有点不好意思：‘那我们就认真试试。’",
    reasonCopy:
      "你们会问对方需不需要帮忙，也能在不想拥抱、不想出门或忙不过来时直接说。照顾不再靠猜，委屈也不再一声不响地攒着，关系就这样被两个人正式说定。",
    stateSummary: "双方已明确确认恋爱；关系的稳定程度由附带评价继续说明。",
  },
  {
    id: "dangerous_lovers",
    kind: "final",
    title: "热恋尚未站稳",
    coreCopy:
      "你们决定以恋爱关系继续靠近，心动和共同时间都在快速增加。可是，帮助会不会变成默认责任、拒绝能否被接住、真实限制是否会及时说出，仍有部分没有站稳。",
    reasonCopy:
      "强烈吸引推动关系越过了几处尚未解决的信任或舒适问题。用礼物和触碰代替确认、为了留住关系全部答应，或把稳定索取成忠诚保证，都让恋爱成立时仍带着明显风险。",
    stateSummary: "浪漫吸引很高，但可靠与自在仍不足；关系成立同时保留明显风险。",
  },
  {
    id: "friends",
    kind: "final",
    title: "明确成为朋友",
    coreCopy:
      "你们还会聊电影和展览，也会在谁手机没电时递一根线。只是这些细心和稳定联系不再被当成恋爱暗示。想同行就约，不想去也能分开行动，这段友谊反而轻松下来。",
    reasonCopy:
      "你们愿意照顾彼此，也能把不需要的帮助退回去，只是心动没有走到恋爱。没有人拿过去的付出要求一个更亲密的答案。",
    stateSummary: "双方形成稳定友谊；亲密与互惠成立，但没有确认恋爱。",
  },
  {
    id: "unresolved_ambiguity",
    kind: "final",
    title: "暧昧尚无定论",
    coreCopy:
      "下一次见面还会照常去，只是你们依然没有给这段关系起名字。那些体贴不再被自动算成承诺，可要不要只和彼此约会、以后靠多近，答案仍不一样。",
    reasonCopy:
      "彼此都有好感，也舍不得马上走开，但有人还需要时间。你们没有把固定见面当成默认恋爱，先把没有说定的部分留在桌面上。",
    stateSummary: "联系与好感仍在，关系尚未定性；之后可能继续、改变或结束。",
  },
];

export const isfjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    id: "romance_stable",
    title: "恋爱稳步落地",
    copy:
      "不用谁永远记得所有细节，也不用谁总是配合。忙不过来会开口，想独处也不必编理由；争吵暂停以后，约好的电话依然会打来。这样的稳定，才真的进了日常。",
    badge: "关系评价：恋爱稳步落地",
  },
  {
    id: "romance_hidden_risk",
    title: "恋爱仍有隐患",
    copy:
      "你们已经确认恋爱，但有些热烈回应里可能还藏着怕对方失望的勉强。等到下一次有人拒绝帮忙、想换分工或需要安静几天，这段关系才会迎来真正的考验。",
    badge: "关系评价：恋爱已确认，仍有隐患",
  },
];

export const isfjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    id: "attraction_up_slight",
    dimension: "attraction",
    direction: "up",
    strength: "slight",
    text: "TA给下一次单独见面多留了一点位置。",
  },
  {
    id: "attraction_up_medium",
    dimension: "attraction",
    direction: "up",
    strength: "medium",
    text: "TA明显更想把真实兴趣和新的共同时间带给你。",
  },
  {
    id: "attraction_up_strong",
    dimension: "attraction",
    direction: "up",
    strength: "strong",
    text: "TA已经不太掩饰想把这段稳定联系发展成恋爱。",
  },
  {
    id: "attraction_down_slight",
    dimension: "attraction",
    direction: "down",
    strength: "slight",
    text: "TA对下一次单独见面少了一点期待。",
  },
  {
    id: "attraction_down_medium",
    dimension: "attraction",
    direction: "down",
    strength: "medium",
    text: "TA开始把个人邀约收回到普通群体联系。",
  },
  {
    id: "attraction_down_strong",
    dimension: "attraction",
    direction: "down",
    strength: "strong",
    text: "TA不再愿意把这段靠近理解为恋爱可能。",
  },
  {
    id: "trust_up_slight",
    dimension: "trust",
    direction: "up",
    strength: "slight",
    text: "TA愿意让你知道一项具体需要或限制。",
  },
  {
    id: "trust_up_medium",
    dimension: "trust",
    direction: "up",
    strength: "medium",
    text: "TA开始相信拒绝帮助或改变计划不会被惩罚。",
  },
  {
    id: "trust_up_strong",
    dimension: "trust",
    direction: "up",
    strength: "strong",
    text: "累了或不愿意时，TA会直接告诉你。",
  },
  {
    id: "trust_down_slight",
    dimension: "trust",
    direction: "down",
    strength: "slight",
    text: "TA对这次承诺留下了一点疑问。",
  },
  {
    id: "trust_down_medium",
    dimension: "trust",
    direction: "down",
    strength: "medium",
    text: "TA开始怀疑说清范围后是否仍会被尊重。",
  },
  {
    id: "trust_down_strong",
    dimension: "trust",
    direction: "down",
    strength: "strong",
    text: "TA把重要安排和脆弱信息从你这里收了回去。",
  },
  {
    id: "comfort_up_slight",
    dimension: "comfort",
    direction: "up",
    strength: "slight",
    text: "TA不必为这一点真实偏好多作解释。",
  },
  {
    id: "comfort_up_medium",
    dimension: "comfort",
    direction: "up",
    strength: "medium",
    text: "TA可以自然说出想要、不要或需要准备。",
  },
  {
    id: "comfort_up_strong",
    dimension: "comfort",
    direction: "up",
    strength: "strong",
    text: "TA不用一直照顾所有人，也能安心和你待在一起。",
  },
  {
    id: "comfort_down_slight",
    dimension: "comfort",
    direction: "down",
    strength: "slight",
    text: "TA回应前开始多确认一遍你会不会失望。",
  },
  {
    id: "comfort_down_medium",
    dimension: "comfort",
    direction: "down",
    strength: "medium",
    text: "TA开始缩小帮助、分享和靠近的范围。",
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
    text: "一个没有说开的期待又积了下来。",
  },
  {
    id: "conflict_up_medium",
    dimension: "conflict",
    direction: "up",
    strength: "medium",
    text: "帮助、边界和角色分工开始缠成一场拉扯。",
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
    text: "刚才被默认的那一层责任松动了一点。",
  },
  {
    id: "conflict_down_medium",
    dimension: "conflict",
    direction: "down",
    strength: "medium",
    text: "你们把请求、容量和下一步重新分开了。",
  },
  {
    id: "conflict_down_strong",
    dimension: "conflict",
    direction: "down",
    strength: "strong",
    text: "该谁做、什么时候再聊终于说定，争执也停了下来。",
  },
];

export const isfjFeedbackTextById = Object.fromEntries(
  isfjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
