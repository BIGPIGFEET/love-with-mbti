import type { Question } from "./schema.ts";

export const infjQuestions: readonly Question[] = [
  {
    "id": "Q01",
    "order": 1,
    "stage": "first_meeting",
    "title": "书页之外",
    "scene": "第一次见面的书店咖啡区，你们刚聊完一本都读过的小说。窗外开始下雨，TA 没有立刻追问你的私人经历，只把话题停在可选择的位置。",
    "npcQuote": "我有点想知道，你为什么会记住那一段。要是今天只想聊书本身，也完全可以。",
    "prompt": "TA这样问时，你会怎么接？",
    "conflictDimensions": [
      "INFJ-K01"
    ],
    "researchRefs": [
      "INFJ-S03",
      "INFJ-S04",
      "INFJ-S05",
      "INFJ-S11"
    ],
    "tags": [
      "初识",
      "深度交流",
      "话题节奏",
      "自愿披露"
    ],
    "designNote": "对应 INFJ-SC01 / INFJ-C02；主测深入话题是否保留玩家节奏。深聊不等于灵魂共振或恋爱证明。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q01_share_one_layer",
        "strategy": "negotiate",
        "strategyLabel": "分享一层",
        "text": "说一件自己愿意分享的联想，再问TA要不要也讲讲；更私人的部分留到以后。",
        "effects": {
          "attraction": 15,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 没再往下追问：‘这一层就很好，今天说到这里就够了。’",
        "feedbackIds": [
          "attraction_up_strong",
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA眼里的高兴一下亮了起来。",
          "TA接话时没有再小心试探。"
        ]
      },
      {
        "id": "q01_follow_deeper",
        "strategy": "accommodate",
        "strategyLabel": "顺着深聊",
        "text": "顺着问题讲下去，即使自己今天有点累，也暂时不提想放轻松。",
        "effects": {
          "attraction": 10,
          "trust": 0,
          "comfort": -5,
          "conflict": 0
        },
        "npcResponse": "TA 听得很认真，也注意到你中途揉了揉眉心：‘我们可以停，不用为了把话聊深而硬撑。’",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_down_slight"
        ],
        "feedbackText": [
          "TA主动提起了下一次见面。",
          "沉默里多了一点迟疑。"
        ]
      },
      {
        "id": "q01_keep_it_light",
        "strategy": "honest",
        "strategyLabel": "说明今天的节奏",
        "text": "坦白说今天更想轻松一点，但愿意约下次再聊这个问题。",
        "effects": {
          "attraction": 5,
          "trust": 0,
          "comfort": 15,
          "conflict": 0
        },
        "npcResponse": "TA 把问题收了回去，转而和你研究窗外哪把伞最像电影道具：‘那就下次。’",
        "feedbackIds": [
          "attraction_up_slight",
          "comfort_up_strong"
        ],
        "feedbackText": [
          "TA没有立刻移开视线。",
          "TA不再提前准备怎样拒绝你。"
        ]
      },
      {
        "id": "q01_mock_the_question",
        "strategy": "risky",
        "strategyLabel": "把邀请当审问",
        "text": "笑说这听起来像心理访谈，让TA别一上来就试图分析你，然后低头看手机。",
        "effects": {
          "attraction": -10,
          "trust": 0,
          "comfort": -10,
          "conflict": 0
        },
        "npcResponse": "TA 没再追问，只把话题换回天气。刚才那点好奇还在，但已经不太想递给你了。",
        "feedbackIds": [
          "attraction_down_medium",
          "comfort_down_medium"
        ],
        "feedbackText": [
          "TA想继续靠近的念头淡了一些。",
          "TA悄悄收回了刚才的靠近。"
        ]
      }
    ]
  },
  {
    "id": "Q02",
    "order": 2,
    "stage": "first_meeting",
    "title": "一句可能猜错的话",
    "scene": "准备离开时，你连续两次只回了很短的句子。TA 停住脚步，没有把你的沉默直接解释成生气。",
    "npcQuote": "我可能猜错了——你是累了，还是刚才哪个话题让你不舒服？不想解释也可以，只要纠正我就行。",
    "prompt": "TA这样问时，你会怎么回答？",
    "conflictDimensions": [
      "INFJ-K06"
    ],
    "researchRefs": [
      "INFJ-S04",
      "INFJ-S10"
    ],
    "tags": [
      "初识",
      "观察",
      "询问校验",
      "隐私"
    ],
    "designNote": "对应 INFJ-SC02 / INFJ-C03；主测观察能否停留在可错假设。不得把直觉写成读心、识谎或诊断。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q02_name_your_state",
        "strategy": "honest",
        "strategyLabel": "说明真实状态",
        "text": "告诉TA你只是有点累，并说明今晚不想继续展开，但不是在生气。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 点点头，没有把你的解释再加工：‘收到。那我送你到门口就停。’",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA记住了你刚才划出的范围。",
          "TA说话时少了一次停顿。"
        ]
      },
      {
        "id": "q02_correct_the_method",
        "strategy": "negotiate",
        "strategyLabel": "校正并约定",
        "text": "说清真正原因，也请TA以后先问，不要把停顿当成需要立即解释的信号。",
        "effects": {
          "attraction": 0,
          "trust": 15,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 点点头：‘好。下次我先问一句，不追着你的停顿猜。’",
        "feedbackIds": [
          "trust_up_strong",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA没有替你决定接下来该怎么走。",
          "刚才那层紧张薄了一些。"
        ]
      },
      {
        "id": "q02_make_them_guess",
        "strategy": "risky",
        "strategyLabel": "让TA继续猜",
        "text": "夸TA不是很会看人吗，让TA猜到你满意为止，自己不给任何确认。",
        "effects": {
          "attraction": 0,
          "trust": -5,
          "comfort": 0,
          "conflict": 10
        },
        "npcResponse": "TA 没接这个测试：‘我能注意到变化，不代表我有权替你写答案。’",
        "feedbackIds": [
          "trust_down_slight",
          "conflict_up_medium"
        ],
        "feedbackText": [
          "TA没有马上相信这个答案。",
          "你们之间已经不只是理解不同。"
        ]
      },
      {
        "id": "q02_agree_to_avoid_awkwardness",
        "strategy": "accommodate",
        "strategyLabel": "顺着错误猜测",
        "text": "其实并没有不舒服，但为了快点结束尴尬，还是点头承认TA猜对了。",
        "effects": {
          "attraction": 0,
          "trust": -5,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 暂时停下了问题，却对这个过快的答案有点拿不准：‘好，我先按你说的理解。’",
        "feedbackIds": [
          "trust_down_slight",
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA听完后仍有些迟疑。",
          "TA的语气比刚才自然了一些。"
        ]
      }
    ]
  },
  {
    "id": "Q03",
    "order": 3,
    "stage": "contact",
    "title": "那张整理表",
    "scene": "几天后，你提过的旧电脑突然彻底罢工。TA 记得这件事，发来三家维修点的营业时间、价格区间和避坑备注。",
    "npcQuote": "我顺手查了一下。你需要就拿去用，不需要也没关系；决定还是你来。",
    "prompt": "你会怎样接住这份具体、但没有附带交换条件的帮助？",
    "conflictDimensions": [
      "INFJ-K04",
      "INFJ-K05"
    ],
    "researchRefs": [
      "INFJ-S01",
      "INFJ-S07",
      "INFJ-S13",
      "INFJ-S14",
      "INFJ-S16",
      "INFJ-S28"
    ],
    "tags": [
      "接触",
      "实际帮助",
      "关心信号",
      "可拒绝"
    ],
    "designNote": "对应 INFJ-SC03 / INFJ-C05；主测实际帮助的意图、接收和边界。帮助不等于告白、债务或治疗能力。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q03_receive_the_help",
        "strategy": "accommodate",
        "strategyLabel": "具体接住帮助",
        "text": "谢谢TA记得这件事，选一家自己联系，并告诉TA这份整理具体帮到了哪里。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 10,
          "conflict": 0
        },
        "npcResponse": "TA 没接管后续，只提醒你确认保修：‘能派上用场就好。’",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA主动提起了下一次见面。",
          "TA把原本会藏住的话说了出来。"
        ]
      },
      {
        "id": "q03_ask_what_it_means",
        "strategy": "honest",
        "strategyLabel": "说出感动并确认",
        "text": "坦白说被TA记住让你很感动，也想知道这只是举手之劳，还是带着更特别的在意。",
        "effects": {
          "attraction": 15,
          "trust": 10,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 没用含糊话吊着你：‘是特别在意，但这份表本身不要求你回应同样的感情。’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA看你的眼神明显停了一会儿。",
          "TA真的按你的话停了一步。"
        ]
      },
      {
        "id": "q03_set_a_help_boundary",
        "strategy": "negotiate",
        "strategyLabel": "约定帮助边界",
        "text": "收下资料，同时约定以后若要替你预约、付款或联系别人，先问过你。",
        "effects": {
          "attraction": 10,
          "trust": 15,
          "comfort": 10,
          "conflict": 0
        },
        "npcResponse": "TA 把界线记得很清楚：‘查资料可以，替你行动之前先拿到许可。’",
        "feedbackIds": [
          "trust_up_strong",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA把下一步也摊开来问你的意思。",
          "TA终于不必先揣测你会不会误解。"
        ]
      },
      {
        "id": "q03_call_it_a_debt",
        "strategy": "confront",
        "strategyLabel": "先认定有所图",
        "text": "质问TA是不是想用这些准备换取好感，要求TA先说清你以后要还什么。",
        "effects": {
          "attraction": -10,
          "trust": -5,
          "comfort": -20,
          "conflict": 0
        },
        "npcResponse": "TA 把文件保留，却不再追加解释：‘你可以拒绝，但别替我虚构一张欠条。’",
        "feedbackIds": [
          "trust_down_slight",
          "comfort_down_strong"
        ],
        "feedbackText": [
          "TA暂时不知道该不该把这句话当真。",
          "TA重新把真正的感受藏了起来。"
        ]
      }
    ]
  },
  {
    "id": "Q04",
    "order": 4,
    "stage": "contact",
    "title": "只说到这里",
    "scene": "散步回去的路上，你问起TA最近为何几次拒绝聚会。TA愿意说明自己的安排和当前状态，但不想谈涉及其他人的细节。",
    "npcQuote": "我能告诉你这段时间需要少一点社交，也不会临时放你鸽子。具体发生了什么，我现在只想说到这里。",
    "prompt": "TA只愿意说到这里，你会怎么办？",
    "conflictDimensions": [
      "INFJ-K02",
      "INFJ-K10"
    ],
    "researchRefs": [
      "INFJ-S05",
      "INFJ-S06",
      "INFJ-S07",
      "INFJ-S11",
      "INFJ-S12",
      "INFJ-S13"
    ],
    "tags": [
      "接触",
      "有限披露",
      "隐私",
      "关系透明"
    ],
    "designNote": "对应 INFJ-SC04 / INFJ-C08；主测隐私范围与玩家可预期需要。有限披露不是欺骗，亲近也不授予继续追问权。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q04_confirm_relevant_facts",
        "strategy": "negotiate",
        "strategyLabel": "确认必要信息",
        "text": "尊重TA不谈细节，只确认近期约定、临时变动和你需要知道的边界。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 把接下来几次约定说清楚：‘这些会影响到你，我应该告诉你。其他的先让我留着。’",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA把你的需要放进了下一次安排。",
          "TA在你面前松下来一点。"
        ]
      },
      {
        "id": "q04_name_your_need",
        "strategy": "honest",
        "strategyLabel": "说明透明需求",
        "text": "说你不需要完整故事，但若状态会影响你们的约定，希望TA尽早告诉你。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 听见了你的底线：‘这部分合理。隐私不能变成让你一直猜安排。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA没有替你补上没说的答案。",
          "一句话里多了点没有说破的不满。"
        ]
      },
      {
        "id": "q04_investigate_anyway",
        "strategy": "risky",
        "strategyLabel": "绕过边界调查",
        "text": "嘴上答应不问，回去后却联系共同认识的人，试图拼出TA没说的那部分。",
        "effects": {
          "attraction": 0,
          "trust": -15,
          "comfort": -5,
          "conflict": 15
        },
        "npcResponse": "TA 很快发现消息绕了一圈回来：‘我说不谈，不是邀请你换一条路进去。’",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA开始把重要的部分从你这里收回去。",
          "这场对话已经开始伤人。"
        ]
      },
      {
        "id": "q04_never_ask_again",
        "strategy": "accommodate",
        "strategyLabel": "彻底避开问题",
        "text": "立刻表示以后什么都不会问，即使变化会影响你，也由自己默默适应。",
        "effects": {
          "attraction": 0,
          "trust": -5,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 放松了一点，却没有把你的需要一起抹掉：‘你可以问与你有关的事，不必走到另一个极端。’",
        "feedbackIds": [
          "trust_down_slight",
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA把疑问留在了那里。",
          "TA终于不用每句话都停一下。"
        ]
      }
    ]
  },
  {
    "id": "Q05",
    "order": 5,
    "stage": "contact",
    "title": "笑过之后的边界",
    "scene": "上次和朋友见面时，你拿TA不擅长热场这件事开了个玩笑。TA当时跟着笑了，第二天却发来消息，说那句话让自己不舒服。",
    "npcQuote": "我昨天笑了，但那不代表我真的接受。现在才说是我的延迟；以后别在别人面前拿这件事开玩笑。",
    "prompt": "你会怎样处理这条来得稍晚、但已经明确的边界？",
    "conflictDimensions": [
      "INFJ-K07"
    ],
    "researchRefs": [
      "INFJ-S04",
      "INFJ-S06",
      "INFJ-S08",
      "INFJ-S09",
      "INFJ-S16"
    ],
    "tags": [
      "接触",
      "延迟表达",
      "公开玩笑",
      "边界"
    ],
    "designNote": "对应 INFJ-SC05 / INFJ-C10；主测当前边界与先前信息不足能否同时处理。玩家不负责读心，但需回应已明确的影响。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q05_own_the_assumption",
        "strategy": "honest",
        "strategyLabel": "承认误判",
        "text": "为公开玩笑道歉，承认自己把当场的笑误当成同意，并答应不再重复。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 没要求你为不知道的部分负责，只确认这次边界被听见：‘这样就够我们往下谈。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA愿意照新的方式再试一次。",
          "压在话里的火气淡了一些。"
        ]
      },
      {
        "id": "q05_stop_without_discussion",
        "strategy": "accommodate",
        "strategyLabel": "先停止再消化",
        "text": "先明确以后不再这样开玩笑，暂时不追问为什么昨晚没有当场说。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 确认你已经停下，也给彼此留了晚一点复盘的空间。",
        "feedbackIds": [
          "comfort_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA没有反复修改自己的措辞。",
          "两个人的声音都缓了下来。"
        ]
      },
      {
        "id": "q05_build_a_signal",
        "strategy": "negotiate",
        "strategyLabel": "约定更早的信号",
        "text": "道歉并确认哪些话题不能公开，同时约一个当场不方便说时也能使用的停止信号。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -10
        },
        "npcResponse": "TA 提出一个很短的暗号：‘我会更早说，你也别把我一时的笑当成永久许可。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA把你说的时间留了下来。",
          "这场分歧终于有了停下来的地方。"
        ]
      },
      {
        "id": "q05_use_the_laugh_as_proof",
        "strategy": "confront",
        "strategyLabel": "拿当场反应反驳",
        "text": "坚持TA当时既然笑了就不能事后改口，要求TA为让你误会负责。",
        "effects": {
          "attraction": 0,
          "trust": -5,
          "comfort": -5,
          "conflict": 20
        },
        "npcResponse": "TA 没撤回边界：‘我会为晚说负责，但你不能把一次笑变成以后都有效的同意。’",
        "feedbackIds": [
          "trust_down_slight",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA没有马上相信这个答案。",
          "TA不想再继续这一轮争执。"
        ]
      }
    ]
  },
  {
    "id": "Q06",
    "order": 6,
    "stage": "familiarity",
    "title": "树洞也需要出口",
    "scene": "最近几周，你常在深夜找TA复盘工作和人际烦恼。今晚TA听了几分钟后停下来，第一次说起：最近的聊天常常只剩你在倒情绪，TA自己的近况很少有位置。",
    "npcQuote": "我在意你，但今晚没有容量继续听两个小时。我也希望有时候是你问问我，而不是默认我总能接住。",
    "prompt": "TA说今晚听不动了，你会怎么回应？",
    "conflictDimensions": [
      "INFJ-K04",
      "INFJ-K07"
    ],
    "researchRefs": [
      "INFJ-S01",
      "INFJ-S04",
      "INFJ-S06",
      "INFJ-S07",
      "INFJ-S08",
      "INFJ-S09",
      "INFJ-S13",
      "INFJ-S14",
      "INFJ-S16",
      "INFJ-S28"
    ],
    "tags": [
      "熟悉",
      "情绪支持",
      "容量",
      "互惠"
    ],
    "designNote": "对应 INFJ-SC06 / INFJ-C11；主测长期支持结构的容量与互惠。共情不是义务，没有容量也不等于不关心。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q06_make_support_mutual",
        "strategy": "negotiate",
        "strategyLabel": "重做支持方式",
        "text": "先停下今晚的话题，约定以后先问容量，也固定留出彼此都能说近况的时间。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -10
        },
        "npcResponse": "TA 摇摇头：‘我不是在算次数。我只是也想有一天，你先问问我过得怎么样。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA没有略过你的那部分。",
          "你们终于没有让那句话继续压下去。"
        ]
      },
      {
        "id": "q06_call_it_scorekeeping",
        "strategy": "confront",
        "strategyLabel": "指责TA计较",
        "text": "反问真正关心的人为什么还要算容量，指责TA把倾听变成一笔交换。",
        "effects": {
          "attraction": 0,
          "trust": -5,
          "comfort": -5,
          "conflict": 20
        },
        "npcResponse": "TA 把杯子推开：‘我今晚真的听不动了。不是不在乎，是我也快撑不住了。’",
        "feedbackIds": [
          "conflict_up_strong",
          "trust_down_slight"
        ],
        "feedbackText": [
          "你们已经很难听见对方原来的意思。",
          "TA听完后仍有些迟疑。"
        ]
      },
      {
        "id": "q06_find_other_support",
        "strategy": "honest",
        "strategyLabel": "承认失衡",
        "text": "承认自己最近依赖过多，今晚先找别的支持，也问TA现在是否想说自己的事。",
        "effects": {
          "attraction": 0,
          "trust": 5,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 没要求你立刻反过来照顾自己：‘先让今晚停下来。你问了，我会在想说的时候告诉你。’",
        "feedbackIds": [
          "trust_up_slight",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA愿意下次再把这段话接下去。",
          "你们之间绷着的那根线松了下来。"
        ]
      },
      {
        "id": "q06_never_share_again",
        "strategy": "accommodate",
        "strategyLabel": "把需求全部收回",
        "text": "立刻保证以后什么烦恼都不再告诉TA，把调整变成彻底沉默。",
        "effects": {
          "attraction": 0,
          "trust": -10,
          "comfort": 0,
          "conflict": 5
        },
        "npcResponse": "TA 叹了口气：‘我没让你以后都别说。下次先问我一句就好。’",
        "feedbackIds": [
          "trust_down_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA开始怀疑你是否真的听懂了那句话。",
          "沉默里压进了一点火气。"
        ]
      }
    ]
  },
  {
    "id": "Q07",
    "order": 7,
    "stage": "familiarity",
    "title": "九点再谈",
    "scene": "一次关于临时取消安排的争论越说越快，双方已经开始重复同一句话。TA看了一眼时间，提出先停两个小时。",
    "npcQuote": "我现在继续说只会更伤人。九点我给你打电话；有必须处理的安排就发文字，如果要晚一点，我会提前告诉你。",
    "prompt": "TA说九点回来，你会怎么回应？",
    "conflictDimensions": [
      "INFJ-K08"
    ],
    "researchRefs": [
      "INFJ-S03",
      "INFJ-S11"
    ],
    "tags": [
      "熟悉",
      "冲突暂停",
      "返回时间",
      "联系协议"
    ],
    "designNote": "对应 INFJ-SC07 / INFJ-C12；主测暂停是否可预期。暂停不是提门或冷处理，玩家也不必接受无限等待。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q07_accept_the_pause",
        "strategy": "accommodate",
        "strategyLabel": "按时停下",
        "text": "接受两小时暂停，不再追加争论，只在确有必要时使用约好的文字入口。",
        "effects": {
          "attraction": 0,
          "trust": 5,
          "comfort": 10,
          "conflict": -15
        },
        "npcResponse": "TA 放下手机前再次确认了九点：‘谢谢你让我先把这句话停住。’",
        "feedbackIds": [
          "comfort_up_medium",
          "conflict_down_strong"
        ],
        "feedbackText": [
          "TA说话时少了一次停顿。",
          "压着的情绪松开了一些。"
        ]
      },
      {
        "id": "q07_state_your_waiting_limit",
        "strategy": "honest",
        "strategyLabel": "说明等待底线",
        "text": "接受暂停，也说明若九点没有更新，你会停止等待，改到明天再处理。",
        "effects": {
          "attraction": 0,
          "trust": 5,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 认可你也有结束等待的权利：‘如果有变化，我会在九点前说。’",
        "feedbackIds": [
          "trust_up_slight",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA没有把未说完的部分彻底关上。",
          "那点没有说破的不满慢慢散了。"
        ]
      },
      {
        "id": "q07_force_an_answer_now",
        "strategy": "confront",
        "strategyLabel": "逼出当场结论",
        "text": "连续打电话，要求TA现在就证明还在乎，否则暂停本身就是答案。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": -20,
          "conflict": 20
        },
        "npcResponse": "TA 没再解释，只重复了一遍：‘我九点回来。现在我真的不能再说了。’",
        "feedbackIds": [
          "comfort_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA已经很难在你面前放下戒备。",
          "气氛一下绷到了极点。"
        ]
      },
      {
        "id": "q07_confirm_the_return",
        "strategy": "negotiate",
        "strategyLabel": "确认暂停协议",
        "text": "一起确认九点、必要联系的范围和改期告知，再各自停下来整理要说的重点。",
        "effects": {
          "attraction": 0,
          "trust": 5,
          "comfort": 5,
          "conflict": -15
        },
        "npcResponse": "TA 把暂停变成了双方都能检查的约定：‘九点见。我们回来谈，不是消失。’",
        "feedbackIds": [
          "trust_up_slight",
          "conflict_down_strong"
        ],
        "feedbackText": [
          "TA给下一次谈得更深留了位置。",
          "你们终于不再隔着那层误解说话。"
        ]
      }
    ]
  },
  {
    "id": "Q08",
    "order": 8,
    "stage": "familiarity",
    "title": "准时回来的谈话",
    "scene": "九点整，TA按约打来电话。TA先承认自己在取消安排前没有尽早说明，也承认争论中提高了声音；同时希望讨论你反复追问造成的压力。",
    "npcQuote": "我想先把那天发生的事说清楚，再说我们各自哪里难受。今晚谈不完也可以，但别假装已经没事。",
    "prompt": "电话接通后，你想先说什么？",
    "conflictDimensions": [
      "INFJ-K07",
      "INFJ-K08"
    ],
    "researchRefs": [
      "INFJ-S03",
      "INFJ-S04",
      "INFJ-S06",
      "INFJ-S08",
      "INFJ-S09",
      "INFJ-S11",
      "INFJ-S16"
    ],
    "tags": [
      "熟悉",
      "按时返回",
      "责任",
      "修复"
    ],
    "designNote": "对应 INFJ-SC08 / INFJ-C13；主测事实、影响、责任和调整能否分开处理。按时回来不自动抵消伤害或要求原谅。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q08_not_ready_to_forgive",
        "strategy": "honest",
        "strategyLabel": "承认返回但保留感受",
        "text": "肯定TA按时回来，也坦白自己还没有消化完，不愿为了完成修复而假装已经原谅。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 0,
          "conflict": 10
        },
        "npcResponse": "TA 没催你说没事：‘我按时回来，不是要你现在就原谅我。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_up_medium"
        ],
        "feedbackText": [
          "TA记住了你刚才划出的范围。",
          "误解开始碰到彼此真正介意的地方。"
        ]
      },
      {
        "id": "q08_three_part_repair",
        "strategy": "negotiate",
        "strategyLabel": "分三部分修复",
        "text": "先对齐事实，再分别说影响和责任，最后只约定一两项下次能观察到的改变。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -15
        },
        "npcResponse": "TA 没再用动机覆盖后果。你们留下的不是漂亮总结，而是下一次能做到的两件事。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_strong"
        ],
        "feedbackText": [
          "TA真的按你的话停了一步。",
          "刚才僵住的气氛慢慢软了下来。"
        ]
      },
      {
        "id": "q08_skip_to_closeness",
        "strategy": "accommodate",
        "strategyLabel": "用亲近跳过复盘",
        "text": "说TA肯回来就够了，立刻转到轻松话题，把自己仍在意的部分暂时压下去。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "气氛暂时软了下来，但TA没有把未谈完的部分当作消失：‘我们可以休息，不能假装它不存在。’",
        "feedbackIds": [
          "comfort_up_slight",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA说话时少了那层紧张。",
          "你们的语气都多了一点防备。"
        ]
      },
      {
        "id": "q08_demand_total_surrender",
        "strategy": "confront",
        "strategyLabel": "要求全面认输",
        "text": "抓住TA已经认错，要求TA承担全部责任，并保证以后不能再提出暂停。",
        "effects": {
          "attraction": 0,
          "trust": -5,
          "comfort": -5,
          "conflict": 20
        },
        "npcResponse": "TA 停了一下：‘我会认我做错的部分。但以后不许暂停，我答应不了。’",
        "feedbackIds": [
          "conflict_up_strong",
          "trust_down_slight"
        ],
        "feedbackText": [
          "这场对话已经开始伤人。",
          "TA暂时不知道该不该把这句话当真。"
        ]
      }
    ]
  },
  {
    "id": "Q09",
    "order": 9,
    "stage": "ambiguity",
    "title": "理想要落在哪一天",
    "scene": "一次长谈结束前，你们聊到如果继续靠近，希望关系长成什么样。TA说起真实、共同成长和深度连接，也同时保留独处与不同意见。",
    "npcQuote": "这些是我向往的，不是你必须通过的考试。我们可以把它们拆成现实里的时间、联系和选择，再看看合不合。",
    "prompt": "TA说完这些期待，你会怎么回答？",
    "conflictDimensions": [
      "INFJ-K01",
      "INFJ-K09",
      "INFJ-K10"
    ],
    "researchRefs": [
      "INFJ-S03",
      "INFJ-S04",
      "INFJ-S05",
      "INFJ-S06",
      "INFJ-S11",
      "INFJ-S15"
    ],
    "tags": [
      "暧昧",
      "关系愿景",
      "现实条件",
      "不匹配"
    ],
    "designNote": "对应 INFJ-SC09 / INFJ-C17；主测理想能否拆成现实期待并允许不匹配。不得写成灵魂伴侣、道德标准或改造许可。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q09_translate_the_ideal",
        "strategy": "negotiate",
        "strategyLabel": "把理想拆具体",
        "text": "分别谈每周相处、独处、冲突处理和未来投入，找出真正重合与需要再想的部分。",
        "effects": {
          "attraction": 20,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 想了想：‘听起来都很好。那先说下周吧，我们各自能留出多少时间？’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA听完后轻轻笑了。",
          "TA把你的需要放进了下一次安排。"
        ]
      },
      {
        "id": "q09_state_the_mismatch",
        "strategy": "honest",
        "strategyLabel": "说出不一致",
        "text": "坦白自己也重视真诚，但需要更慢的节奏，且目前不能承诺同样程度的未来投入。",
        "effects": {
          "attraction": -10,
          "trust": 15,
          "comfort": 0,
          "conflict": 5
        },
        "npcResponse": "TA 没把不同步解释成敷衍：‘这可能不合适，但至少不是让我爱上一个你演出来的答案。’",
        "feedbackIds": [
          "attraction_down_medium",
          "trust_up_strong"
        ],
        "feedbackText": [
          "TA望向你时多了一点退意。",
          "TA等着你一起决定之后的方向。"
        ]
      },
      {
        "id": "q09_echo_the_ideal",
        "strategy": "accommodate",
        "strategyLabel": "先复述同一个理想",
        "text": "不检查自己的容量，直接说TA想要的也正是你想要的，具体安排以后再说。",
        "effects": {
          "attraction": 20,
          "trust": -10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 被这份同步打动了一瞬，又追问了最普通的问题：‘那下周呢？我们从哪一件事开始？’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "TA听完时没忍住笑了一下。",
          "TA不知道这份承诺能不能当真。"
        ]
      },
      {
        "id": "q09_declare_soulmates",
        "strategy": "risky",
        "strategyLabel": "直接宣布命定",
        "text": "说既然能聊到这里就已经证明你们是灵魂伴侣，现实差异都会被感情自动解决。",
        "effects": {
          "attraction": 20,
          "trust": -10,
          "comfort": -5,
          "conflict": 20
        },
        "npcResponse": "TA 沉默了一会儿：‘我也喜欢刚才那段话。但现实要是全不用谈，你喜欢的也许只是想象。’",
        "feedbackIds": [
          "attraction_up_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA看你的眼神明显停了一会儿。",
          "TA不想再继续这一轮争执。"
        ]
      }
    ]
  },
  {
    "id": "Q10",
    "order": 10,
    "stage": "ambiguity",
    "title": "默契之外的答案",
    "scene": "深聊、互相帮助和几次认真修复之后，你们坐下来谈这段关系。TA没有用此前的亲近替双方下结论。",
    "npcQuote": "我愿意继续靠近，但想把恋爱、排他、联系频率和各自的空间分开问。你可以说愿意、不同意，或者现在还不确定。",
    "prompt": "TA等着你的答案，你会怎么说？",
    "conflictDimensions": [
      "INFJ-K02",
      "INFJ-K09",
      "INFJ-K10"
    ],
    "researchRefs": [
      "INFJ-S04",
      "INFJ-S05",
      "INFJ-S06",
      "INFJ-S07",
      "INFJ-S11",
      "INFJ-S13",
      "INFJ-S15"
    ],
    "tags": [
      "暧昧",
      "关系定义",
      "排他",
      "联系节奏"
    ],
    "designNote": "对应 INFJ-SC10 / INFJ-C16；主测明确且可拒绝的关系确认。接受、拒绝、延后和提出不同节奏都应保持合法；选项不直接选择结局。数值已于 Stage 06 完成路径平衡。",
    "options": [
      {
        "id": "q10_give_your_answer",
        "strategy": "honest",
        "strategyLabel": "给出真实答案",
        "text": "清楚说明自己是否想确认关系、仍不确定什么，以及不能接受的最低边界；不要求TA立刻一致。",
        "effects": {
          "attraction": 20,
          "trust": 10,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 没急着抹平差异：‘现在我知道哪些是你的答案，哪些还不是。’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA听完后轻轻笑了。",
          "TA没有替你补上没说的答案。"
        ]
      },
      {
        "id": "q10_follow_their_preference",
        "strategy": "accommodate",
        "strategyLabel": "全部顺着TA",
        "text": "只说按TA喜欢的方式来，把自己的排他、联系和空间需求暂时藏起来。",
        "effects": {
          "attraction": 15,
          "trust": -10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 没有因此轻松：‘别只说按我的来。我想知道你自己要什么。’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "TA的目光里明显多了欢喜。",
          "TA把你的回答留在了观察里。"
        ]
      },
      {
        "id": "q10_claim_default_exclusivity",
        "strategy": "risky",
        "strategyLabel": "把默契当默认同意",
        "text": "认为此前的深聊和分享已经等于排他，要求今晚就公开关系，不接受继续考虑。",
        "effects": {
          "attraction": -5,
          "trust": -20,
          "comfort": 0,
          "conflict": 15
        },
        "npcResponse": "TA 摇头：‘以前那些靠近都是真的。但我还没有答应今晚就公开。’",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA不再愿意让你靠近真正要紧的事。",
          "你们已经很难听见对方原来的意思。"
        ]
      },
      {
        "id": "q10_build_a_real_agreement",
        "strategy": "negotiate",
        "strategyLabel": "逐项形成约定",
        "text": "分别谈恋爱、排他、公开、联系和独处，先确认双方真正愿意兑现的部分，并约定以后复查。",
        "effects": {
          "attraction": 15,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 把你们说定的几件事记下来：‘好。没谈拢的先留着，谈拢的从今天开始算。’",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA愿意照新的方式再试一次。",
          "TA把原本会藏住的话说了出来。"
        ]
      }
    ]
  }
];

export const questions = infjQuestions;
