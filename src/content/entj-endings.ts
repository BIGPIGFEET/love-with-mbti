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
    "coreCopy": "你们已经不再讨论原来的事，只剩下谁能压过谁、谁必须先让步。TA 关掉还没改完的共同清单：‘到这里吧。继续争出一个赢家，也不会让这段关系重新安全。’",
    "reasonCopy": "不同节奏、拒绝和修复要求一次次变成逼迫、人格指责和单方面控制。想尽快解决问题，最终变成了只想压过对方。",
    "stateSummary": "争胜已经盖过了原来的问题，这段关系到此为止。"
  },
  {
    "id": "strong_discomfort",
    "kind": "global",
    "title": "不再继续相处",
    "coreCopy": "TA 仍然能把安排说得清楚，却不再把真实偏好放进对话。每次表达都像要先证明自己不是在接受管理、参加测试或欠下一份回应。TA 最终选择退出。",
    "reasonCopy": "替TA决定、连续追问、把帮助变成服从条件，或在暂停已经说清后继续加码，让相处失去了自在和退出的空间。",
    "stateSummary": "舒适已经低到无法继续接触；表面的配合不能被误读成同意或亲近。"
  },
  {
    "id": "trust_broken",
    "kind": "global",
    "title": "信任耗尽告别",
    "coreCopy": "TA 不再把重要安排、失误和下一步选择交到你手里。曾经共同写下的条件还在，可信的合作却已经撤回：‘没有共同决定，就没有值得继续投入的未来。’",
    "reasonCopy": "用试探代替回答、擅自公开关系、隐藏关键需要，或让道歉和承诺只停在口头，一次次耗掉了TA的托付。",
    "stateSummary": "信任已经跌破关系底线；行动投入和强烈吸引都不能代替可靠与尊重。"
  },
  {
    "id": "no_second_meeting",
    "kind": "stage_gate",
    "title": "初识没有下次",
    "coreCopy": "九十分钟结束时，你们仍能礼貌地说再见，却没有谁再打开日历。TA 没把这次见面判成失败，只是没有把第二次安排写进之后的时间。",
    "reasonCopy": "第一次见面里，类型玩笑和紧凑行程没有找到双方都舒服的节奏。日历最终没有再打开第二次。",
    "stateSummary": "关系停在第一次见面；一次普通的不匹配不等于任何一方有问题。"
  },
  {
    "id": "fade_out",
    "kind": "stage_gate",
    "title": "联系逐渐淡去",
    "coreCopy": "你们曾经很快定下下一次，也交换过清单、建议和关心。后来每个明确计划都少了一个真正愿意执行的人，消息从‘几点见’慢慢退回‘有空再说’。",
    "reasonCopy": "邀约、清单和解决办法来得很快，真正需要的节奏和陪伴却常常错位。后来，谁都没有再把计划往下推进。",
    "stateSummary": "计划定得再快，也没有变成双方都愿意继续的下一次。"
  },
  {
    "id": "stay_acquaintances",
    "kind": "stage_gate",
    "title": "关系停在熟人",
    "coreCopy": "你们仍能在需要时交换资料，也能在群体活动里自然说话。只是共同安排不再进入私人日历，冲突后的回返也没有积累成更亲密的把握。",
    "reasonCopy": "事情往往有方案，受伤的部分却未必谈完。几次暂停和回谈没有让你们更放心地靠近。",
    "stateSummary": "关系保留在熟人位置，有礼貌和合作，但不再单独向亲密推进。"
  },
  {
    "id": "strangers_after_all",
    "kind": "final",
    "title": "最终不再往来",
    "coreCopy": "你们确实一起做过计划，也认真谈过排他、公开和个人时间。最后，那些讨论没有变成足够安全、可信的日常。TA 撤掉预留的位置，你们不再出现在彼此之后的安排里。",
    "reasonCopy": "走到最后，你们仍无法放心把决定交给彼此，也无法在不同意时安全停下来。做过的计划没有变成可继续的日常。",
    "stateSummary": "最终关系断开；完成十次互动不能覆盖已经恶化的关系基础。"
  },
  {
    "id": "confirmed_relationship",
    "kind": "final",
    "title": "双方确认恋爱",
    "coreCopy": "你们没有让一张票、一份帮助或一句‘我想继续’替双方作答。排他、公开、联系频率和个人时间被逐项说清，TA 把共同决定后的版本推到你面前：‘这次，计划里有我们两个人的答案。’",
    "reasonCopy": "计划改变时有人会先问，支持错位时也能停下来重来。最后，双方都清楚说出了愿意怎样进入恋爱。",
    "stateSummary": "双方已确认恋爱关系；具体稳定程度由附带的关系评价继续说明。"
  },
  {
    "id": "dangerous_lovers",
    "kind": "final",
    "title": "热恋仍未站稳",
    "coreCopy": "你们决定靠得更近，心动和未来安排都推进得很快。可是，谁能决定、承诺是否算数、暂停后会不会回来，仍有一部分没有可靠答案。关系已经开始，基础却还在摇晃。",
    "reasonCopy": "投入和行动让你们很快进入恋爱，但谁能决定、承诺是否算数、争执后怎样回来，仍有几件事没有谈稳。",
    "stateSummary": "恋爱已经开始，但下一次有人改计划或拒绝时，关系能否站稳仍没有把握。"
  },
  {
    "id": "friends",
    "kind": "final",
    "title": "明确成为朋友",
    "coreCopy": "TA 仍会把值得一起做的事发给你，你也能直接说预算、精力和不同意见。你们不再把可靠合作、记住细节或实际帮助自动翻译成恋爱，却愿意认真保留彼此的位置。",
    "reasonCopy": "双方建立了可信、自在、能够协商与修复的相处方式，只是浪漫吸引没有累积到改变关系性质。友谊由明确选择成立，而不是恋爱的候补状态。",
    "stateSummary": "双方形成稳定友谊；没有确认恋爱并不降低这段关系的价值。"
  },
  {
    "id": "unresolved_ambiguity",
    "kind": "final",
    "title": "暧昧尚无定论",
    "coreCopy": "预留的位置还可以取消，下一次见面也没有被撤回。你们谈到了未来、边界和关系名称，却仍有条件没有得到共同答案。TA 没替你决定，这段关系也仍停在草案。",
    "reasonCopy": "下一次见面没有取消，预留的位置也还在，只是关系名称和几项重要条件仍没有得到同一个答案。",
    "stateSummary": "暧昧仍然开放但没有定性；之后可能继续、改变或结束，不承诺自动升级。"
  }
];

export const entjRelationshipEvaluations: readonly RelationshipEvaluationContent[] = [
  {
    "id": "romance_stable",
    "title": "恋爱稳步落地",
    "copy": "你们的稳定不来自一个人把所有事安排妥当，而来自双方都能补充条件、拒绝不合适的版本，并在暂停后按约回来。共同计划因此能够落进日常。",
    "badge": "关系评价：恋爱稳步落地"
  },
  {
    "id": "romance_hidden_risk",
    "title": "恋爱仍有隐患",
    "copy": "你们已经确认恋爱，但有些‘都行’仍可能藏着真实需要，有些道歉也只在这一次奏效。下一次计划改变时，能不能听见彼此仍要靠行动回答。",
    "badge": "关系评价：恋爱已确认，仍有隐患"
  }
];

export const entjFuzzyFeedback: readonly FuzzyFeedbackContent[] = [
  {
    "id": "attraction_up_slight",
    "dimension": "attraction",
    "direction": "up",
    "strength": "slight",
    "text": "TA看你的眼神里多了一点欣赏。"
  },
  {
    "id": "attraction_up_medium",
    "dimension": "attraction",
    "direction": "up",
    "strength": "medium",
    "text": "TA明显开始期待和你一起做下一件事。"
  },
  {
    "id": "attraction_up_strong",
    "dimension": "attraction",
    "direction": "up",
    "strength": "strong",
    "text": "TA已经不太掩饰想把你留在身边的意思。"
  },
  {
    "id": "attraction_down_slight",
    "dimension": "attraction",
    "direction": "down",
    "strength": "slight",
    "text": "TA对继续并肩少了一点兴趣。"
  },
  {
    "id": "attraction_down_medium",
    "dimension": "attraction",
    "direction": "down",
    "strength": "medium",
    "text": "TA不再像刚才那样想把你放进计划里。"
  },
  {
    "id": "attraction_down_strong",
    "dimension": "attraction",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经不想把这种较量误认成心动。"
  },
  {
    "id": "trust_up_slight",
    "dimension": "trust",
    "direction": "up",
    "strength": "slight",
    "text": "TA愿意把你的判断加入下一步。"
  },
  {
    "id": "trust_up_medium",
    "dimension": "trust",
    "direction": "up",
    "strength": "medium",
    "text": "TA开始按你们谈好的方式安排行动。"
  },
  {
    "id": "trust_up_strong",
    "dimension": "trust",
    "direction": "up",
    "strength": "strong",
    "text": "TA愿意把关键环节直接交给你负责。"
  },
  {
    "id": "trust_down_slight",
    "dimension": "trust",
    "direction": "down",
    "strength": "slight",
    "text": "TA对你的说法保留了一点。"
  },
  {
    "id": "trust_down_medium",
    "dimension": "trust",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始怀疑你说过的话能不能兑现。"
  },
  {
    "id": "trust_down_strong",
    "dimension": "trust",
    "direction": "down",
    "strength": "strong",
    "text": "TA把重要安排从你这里收了回去。"
  },
  {
    "id": "comfort_up_slight",
    "dimension": "comfort",
    "direction": "up",
    "strength": "slight",
    "text": "TA在你面前松开了一点紧绷。"
  },
  {
    "id": "comfort_up_medium",
    "dimension": "comfort",
    "direction": "up",
    "strength": "medium",
    "text": "TA说话时不再处处留后手。"
  },
  {
    "id": "comfort_up_strong",
    "dimension": "comfort",
    "direction": "up",
    "strength": "strong",
    "text": "这一刻，你们不必争着掌控局面。"
  },
  {
    "id": "comfort_down_slight",
    "dimension": "comfort",
    "direction": "down",
    "strength": "slight",
    "text": "气氛里多了一点针锋相对。"
  },
  {
    "id": "comfort_down_medium",
    "dimension": "comfort",
    "direction": "down",
    "strength": "medium",
    "text": "TA开始主动缩短和你共事的时间。"
  },
  {
    "id": "comfort_down_strong",
    "dimension": "comfort",
    "direction": "down",
    "strength": "strong",
    "text": "TA已经不想再与你并肩处理这件事。"
  },
  {
    "id": "conflict_up_slight",
    "dimension": "conflict",
    "direction": "up",
    "strength": "slight",
    "text": "你们的话里多了一点较劲。"
  },
  {
    "id": "conflict_up_medium",
    "dimension": "conflict",
    "direction": "up",
    "strength": "medium",
    "text": "分歧正在变成一场输赢。"
  },
  {
    "id": "conflict_up_strong",
    "dimension": "conflict",
    "direction": "up",
    "strength": "strong",
    "text": "这场对话已经逼近彻底翻脸。"
  },
  {
    "id": "conflict_down_slight",
    "dimension": "conflict",
    "direction": "down",
    "strength": "slight",
    "text": "刚才的较劲稍微松了下来。"
  },
  {
    "id": "conflict_down_medium",
    "dimension": "conflict",
    "direction": "down",
    "strength": "medium",
    "text": "你们重新找到了一条都能执行的路。"
  },
  {
    "id": "conflict_down_strong",
    "dimension": "conflict",
    "direction": "down",
    "strength": "strong",
    "text": "僵持终于结束，可以继续往前走了。"
  }
];

export const entjFeedbackTextById = Object.fromEntries(
  entjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
