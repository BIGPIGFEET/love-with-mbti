import type { Question } from "./schema.ts";

export const entjQuestions: readonly Question[] = [
  {
    "id": "Q01",
    "order": 1,
    "stage": "first_meeting",
    "title": "先别给我配办公室",
    "scene": "第一次见面刚坐下，你拿“ENTJ 都是霸总和天生领导”开了个玩笑。TA 把菜单放到一边，没有顺着这个身份继续表演。",
    "npcQuote": "我做过很果断的决定，也拖延过、搞砸过，还会主动放弃不适合的目标。要不先跳过高管面试？",
    "prompt": "你会怎样接住这次对类型标签的修正？",
    "conflictDimensions": [
      "ENTJ-K01"
    ],
    "researchRefs": [
      "ENTJ-S04",
      "ENTJ-S05",
      "ENTJ-S06",
      "ENTJ-S07",
      "ENTJ-S26",
      "ENTJ-S27"
    ],
    "tags": [
      "初识",
      "反刻板",
      "个体差异",
      "类型标签"
    ],
    "designNote": "对应 ENTJ-SC01；主测玩家能否修正霸总/CEO 概括。F11 只提供待拆解触发，效果来自是否尊重具体个体。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q01_wait_for_proof",
        "strategy": "risky",
        "strategyLabel": "继续等TA自证",
        "text": "笑着说“没关系，等你升职以后我再验证”，继续拿职业和气场给TA打分。",
        "effects": {
          "attraction": -5,
          "trust": -10,
          "comfort": -15,
          "conflict": 10
        },
        "npcResponse": "TA 没接这个梗：‘如果今晚是测评中心，你至少该提前告诉应聘者。’",
        "feedbackIds": [
          "comfort_down_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "TA整个人都绷了起来。",
          "TA把这句话先放进了待验证区。"
        ]
      },
      {
        "id": "q01_own_the_label",
        "strategy": "honest",
        "strategyLabel": "承认概括过头",
        "text": "承认自己把标签说满了，改问TA希望别人先认识自己的哪一面。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 点点头，把刚才绷着的那点劲松开了：‘这问题比“你管多少人”好答。’",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA当场把计划改了一处。",
          "TA的语气松快了些。"
        ]
      },
      {
        "id": "q01_compare_examples",
        "strategy": "negotiate",
        "strategyLabel": "交换真实例子",
        "text": "提议把标签只当开场梗，各说一件符合和一件完全不符合测试结果的经历。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 10,
          "conflict": 0
        },
        "npcResponse": "TA 接受了这个玩法，先讲了一次失败得很普通的计划：‘轮到你了，别只交优点。’",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA顺手把下一次排进了日程。",
          "TA不再预演你会怎么回。"
        ]
      },
      {
        "id": "q01_drop_the_topic",
        "strategy": "accommodate",
        "strategyLabel": "换个具体话题",
        "text": "不再追问类型，直接聊今天最想做、也最可能临时改变的一件事。",
        "effects": {
          "attraction": 5,
          "trust": 5,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 顺势把话题拉回今天：‘很好，终于不用先提交人格简历。’",
        "feedbackIds": [
          "comfort_up_medium",
          "attraction_up_slight"
        ],
        "feedbackText": [
          "TA把想说的话直接说完了。",
          "TA看你时少了几分审视。"
        ]
      }
    ]
  },
  {
    "id": "Q02",
    "order": 2,
    "stage": "first_meeting",
    "title": "九十分钟，三个地点",
    "scene": "你们只剩九十分钟。TA 看了眼地图，提出先逛展、再去河边，若时间不够就删掉最后一站。你其实更想找个地方慢慢聊。",
    "npcQuote": "这是我想到的版本，不是命令。你最想保留哪一段，或者干脆只选一个地方？",
    "prompt": "你会怎样决定这段有限的见面时间？",
    "conflictDimensions": [
      "ENTJ-K02",
      "ENTJ-K06"
    ],
    "researchRefs": [
      "ENTJ-S03",
      "ENTJ-S04",
      "ENTJ-S05",
      "ENTJ-S06",
      "ENTJ-S17",
      "ENTJ-S26"
    ],
    "tags": [
      "初识",
      "主动规划",
      "共同节奏",
      "时间容量"
    ],
    "designNote": "对应 ENTJ-SC02；主测效率是否允许删减、休息和共同改写。计划能力不自动等于正确或吸引力。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q02_keep_two_parts",
        "strategy": "negotiate",
        "strategyLabel": "共同删减",
        "text": "保留展览和一段散步，把最后一站删掉，并约好走累了随时停。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 当场删掉一站：‘成交。计划能改，人才不用配合计划硬撑。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA没有跳过你的条件。",
          "刚才的火气退下去一点。"
        ]
      },
      {
        "id": "q02_follow_for_today",
        "strategy": "accommodate",
        "strategyLabel": "这次跟着走",
        "text": "说自己今天精力还够，愿意先照这个版本走，但不保证每次都喜欢紧凑行程。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 10,
          "conflict": 0
        },
        "npcResponse": "TA 收下了这次的同意，也听见了后半句：‘好，下次不默认复制。’",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA已经开始问下一次什么时候继续。",
          "TA在你面前少了一点戒备。"
        ]
      },
      {
        "id": "q02_choose_one_place",
        "strategy": "honest",
        "strategyLabel": "说出真实节奏",
        "text": "直说自己更想只找一个地方坐下聊天，不想把初次见面变成打卡任务。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": 5
        },
        "npcResponse": "TA 看了一眼路线，把手机锁屏：‘明白。你拒绝的是密度，不是我。’",
        "feedbackIds": [
          "comfort_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA没再反复确认你会不会误会。",
          "对话里开始有了输赢的味道。"
        ]
      },
      {
        "id": "q02_make_them_responsible",
        "strategy": "risky",
        "strategyLabel": "把结果都算给TA",
        "text": "说“你安排就好，搞砸了算你的”，把自己的状态和选择都交给TA负责。",
        "effects": {
          "attraction": -5,
          "trust": -5,
          "comfort": 0,
          "conflict": 15
        },
        "npcResponse": "TA 没接下这份全责：‘我可以提方案，但不能替你拥有体力和偏好。’",
        "feedbackIds": [
          "trust_down_slight",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA没有立刻接受这套说法。",
          "争论已经开始压过原来的问题。"
        ]
      }
    ]
  },
  {
    "id": "Q03",
    "order": 3,
    "stage": "contact",
    "title": "不是猜谜的第二次见面",
    "scene": "见面后的第二天，TA 发来一个具体邀请：周六下午看展，预计两小时，也注明如果你更想慢一点可以换活动。",
    "npcQuote": "我想再见你。周六两点到四点可以吗？不合适就改，不用猜我为什么发消息。",
    "prompt": "你会怎样回应这份明确、但仍然可拒绝的邀请？",
    "conflictDimensions": [
      "ENTJ-K02",
      "ENTJ-K03"
    ],
    "researchRefs": [
      "ENTJ-S03",
      "ENTJ-S04",
      "ENTJ-S15",
      "ENTJ-S17"
    ],
    "tags": [
      "接触",
      "明确邀请",
      "主动",
      "拒绝权"
    ],
    "designNote": "对应 ENTJ-SC03；主测直接邀请是否保留玩家节奏、改期和拒绝。主动不等于命令、告白或排他。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q03_answer_and_reschedule",
        "strategy": "honest",
        "strategyLabel": "明确回应并改期",
        "text": "告诉TA自己也想再见，但周六不行；给出周日或下周两个真实可用时间。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 很快选了周日：‘清楚的“不行”比含糊的“再看”省心得多。’",
        "feedbackIds": [
          "attraction_up_medium",
          "trust_up_slight"
        ],
        "feedbackText": [
          "TA主动给下一次留出了时间。",
          "TA愿意让你继续参与后面的安排。"
        ]
      },
      {
        "id": "q03_accept_the_invite",
        "strategy": "accommodate",
        "strategyLabel": "接住这次主动",
        "text": "确认时间合适，也愿意看展；把这次邀请先当作继续认识彼此。",
        "effects": {
          "attraction": 10,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 定下时间，没有顺手替关系命名：‘好，那就周六见。’",
        "feedbackIds": [
          "comfort_up_slight",
          "attraction_up_medium"
        ],
        "feedbackText": [
          "TA肩上的力松了一点。",
          "TA把下一次见面直接定进计划。"
        ]
      },
      {
        "id": "q03_set_a_slower_pace",
        "strategy": "negotiate",
        "strategyLabel": "协商更慢节奏",
        "text": "说自己愿意再见，但想把活动缩短，也希望以后双方都能提出邀请和调整。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 把时长改成一小时：‘可以。主动不该变成只有一个人掌舵。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA把你的意见放进了决定里。",
          "两个人的声音都慢了下来。"
        ]
      },
      {
        "id": "q03_delay_as_a_test",
        "strategy": "risky",
        "strategyLabel": "故意拖着观察",
        "text": "明明看到了消息，却故意两天不回，想看TA会不会追问来证明在意。",
        "effects": {
          "attraction": -5,
          "trust": -15,
          "comfort": -5,
          "conflict": 15
        },
        "npcResponse": "TA 没参加这场隐形测试，只补了一句：‘需要时间可以说，我不会靠追问猜规则。’",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA把决定重新收回自己手里。",
          "TA不想再继续这一轮对话。"
        ]
      }
    ]
  },
  {
    "id": "Q04",
    "order": 4,
    "stage": "contact",
    "title": "一份没有附带条款的清单",
    "scene": "你上次提过要换住处，却被信息弄得头大。TA 发来一页标着更新时间和来源的对比清单，并把自己能继续帮忙的范围写在末尾。",
    "npcQuote": "我顺手整理了，你只拿有用的部分。要是需要我联系中介，先告诉我；我不会替你决定。",
    "prompt": "TA把清单发来后，你会怎么回应？",
    "conflictDimensions": [
      "ENTJ-K02",
      "ENTJ-K04"
    ],
    "researchRefs": [
      "ENTJ-S04",
      "ENTJ-S08",
      "ENTJ-S09",
      "ENTJ-S11",
      "ENTJ-S24"
    ],
    "tags": [
      "接触",
      "实际帮助",
      "帮助边界",
      "意图确认"
    ],
    "designNote": "对应 ENTJ-SC04；主测实际帮助能否保持可拒绝、可确认且不形成关系债务。行动不是固定爱语。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q04_take_what_helps",
        "strategy": "accommodate",
        "strategyLabel": "接住有用部分",
        "text": "具体告诉TA哪几项帮到了自己，采用清单，但把最终选择留在自己手里。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 没追问你为什么没全用：‘能少踩一个坑，这份表就没白做。’",
        "feedbackIds": [
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA不再一直绷着身体。"
        ]
      },
      {
        "id": "q04_name_the_boundary",
        "strategy": "honest",
        "strategyLabel": "说明帮助边界",
        "text": "坦白自己很感动，也说明涉及联系别人或花钱的帮助必须先征得同意。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 把这条边界记了下来：‘合理。帮忙不该靠先斩后奏制造惊喜。’",
        "feedbackIds": [
          "comfort_up_slight",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA靠回椅背，语气缓了下来。",
          "TA停下来重新问了你的想法。"
        ]
      },
      {
        "id": "q04_make_a_help_rule",
        "strategy": "negotiate",
        "strategyLabel": "约定帮忙方式",
        "text": "一起定个简单规则：先问、可以拒绝、不记人情，大事由当事人最后决定。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 很快回了句‘可以’：‘下次我先问。省下来的时间，不值得拿你的决定权来换。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA愿意照新的办法推进。",
          "这次没有继续硬碰硬。"
        ]
      },
      {
        "id": "q04_expand_the_assignment",
        "strategy": "risky",
        "strategyLabel": "把帮忙升级成义务",
        "text": "顺势再丢给TA三件事，说“既然都开始了，不如帮我一次做完”。",
        "effects": {
          "attraction": -5,
          "trust": -10,
          "comfort": -20,
          "conflict": 10
        },
        "npcResponse": "TA 把新增事项退了回来：‘我愿意帮，不代表你可以替我扩充职责。’",
        "feedbackIds": [
          "comfort_down_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "TA说话时明显多了防备。",
          "TA没有再默认你会说到做到。"
        ]
      }
    ]
  },
  {
    "id": "Q05",
    "order": 5,
    "stage": "contact",
    "title": "现在先别修",
    "scene": "你刚经历一次很糟的汇报，话还没说完，TA 已经打开备忘录，开始拆原因和下一步。发现你沉默后，TA 停下了。",
    "npcQuote": "我可能太快进入解决模式了。你现在要我听、一起想办法、实际做点什么，还是先让你安静？",
    "prompt": "你会怎样说明自己此刻需要的支持？",
    "conflictDimensions": [
      "ENTJ-K05"
    ],
    "researchRefs": [
      "ENTJ-S02",
      "ENTJ-S03",
      "ENTJ-S07",
      "ENTJ-S10",
      "ENTJ-S13",
      "ENTJ-S16",
      "ENTJ-S17"
    ],
    "tags": [
      "接触",
      "情绪支持",
      "方案",
      "需求协商"
    ],
    "designNote": "对应 ENTJ-SC05；主测方案、倾听、协助和空间能否按当前需要切换。任何方式都不是类型本能或唯一正确答案。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q05_ask_for_ten_minutes",
        "strategy": "honest",
        "strategyLabel": "先要十分钟陪伴",
        "text": "请TA先听自己把委屈说完，十分钟后再一起看哪些问题值得解决。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 合上备忘录：‘好，十分钟内我不抢修，也不替你总结。’",
        "feedbackIds": [
          "comfort_up_medium",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA的语气松快了些。",
          "TA把原先的版本往回收了一步。"
        ]
      },
      {
        "id": "q05_call_them_heartless",
        "strategy": "confront",
        "strategyLabel": "把错位定性为无情",
        "text": "说“你根本不在乎感受，只想证明自己会解决问题”，拒绝说明还需要什么。",
        "effects": {
          "attraction": -10,
          "trust": -5,
          "comfort": -15,
          "conflict": 20
        },
        "npcResponse": "TA 没继续辩解方案，只指出这句话把一次错位判成了整个人：‘你可以说我没接住，但别替我宣布没有感情。’",
        "feedbackIds": [
          "conflict_up_strong",
          "comfort_down_strong"
        ],
        "feedbackText": [
          "气氛一下变得很僵。",
          "TA开始先确认自己能不能退出。"
        ]
      },
      {
        "id": "q05_choose_support_together",
        "strategy": "negotiate",
        "strategyLabel": "一起选支持方式",
        "text": "说清现在先需要倾听，再问TA今天还有多少精力，约定稍后是否继续看方案。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -10
        },
        "npcResponse": "TA 给出自己能陪的时间，也把方案留到之后：‘这样我不用猜，你也不用一个人扛完整流程。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA没有再替你先做决定。",
          "这场争论终于有了一个暂停点。"
        ]
      },
      {
        "id": "q05_take_the_plan_for_now",
        "strategy": "accommodate",
        "strategyLabel": "先收下方案",
        "text": "告诉TA自己现在说不动，先把建议收下，等有精力时再决定要不要讨论。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 把文件发给你，没有要求当场执行：‘收到。它先待着，不追着你跑。’",
        "feedbackIds": [
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA终于没再维持那副紧绷。"
        ]
      }
    ]
  },
  {
    "id": "Q06",
    "order": 6,
    "stage": "familiarity",
    "title": "先别把偏好填进底线栏",
    "scene": "你们准备一次需要预约和预算的共同活动。TA 把安静、可退款列为必要条件，把餐厅和路线列为可调整项；你的预算与休息节奏还没有写进去。",
    "npcQuote": "这些是我在意的，不是自动生效的共同标准。把你的底线加上，我们再决定订不订。",
    "prompt": "这份安排里还没有你的条件，你会怎么补？",
    "conflictDimensions": [
      "ENTJ-K02",
      "ENTJ-K07"
    ],
    "researchRefs": [
      "ENTJ-S03",
      "ENTJ-S04",
      "ENTJ-S11",
      "ENTJ-S12",
      "ENTJ-S17",
      "ENTJ-S28"
    ],
    "tags": [
      "熟悉",
      "高标准",
      "共同决定",
      "计划弹性"
    ],
    "designNote": "对应 ENTJ-SC06；主测标准、成本和弹性能否区分个人偏好、共同底线与决定权。高标准不证明成熟或正确。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q06_merge_the_constraints",
        "strategy": "negotiate",
        "strategyLabel": "合并双方条件",
        "text": "补上自己的预算和休息需求，一起标出不可妥协、可调整和可以取消的部分。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -10
        },
        "npcResponse": "TA 把你的预算拖到最上面：‘好，现在这份计划才不只是我一个人的。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA当场把计划改了一处。",
          "你们及时停住了越说越硬的势头。"
        ]
      },
      {
        "id": "q06_accept_their_standard",
        "strategy": "accommodate",
        "strategyLabel": "先照TA的标准订",
        "text": "觉得这次省事最重要，接受TA的版本，但暂时不提自己其实想压低预算。",
        "effects": {
          "attraction": 10,
          "trust": 0,
          "comfort": -5,
          "conflict": 0
        },
        "npcResponse": "TA 没立刻下单：‘你说“都行”的速度太快了。预算真的没有问题吗？’",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_down_slight"
        ],
        "feedbackText": [
          "TA很快提出了下一步安排。",
          "原本顺畅的节奏卡了一下。"
        ]
      },
      {
        "id": "q06_reject_everything",
        "strategy": "confront",
        "strategyLabel": "用反对夺回控制",
        "text": "说“不想被你管理”，故意把TA列出的条件全部推翻，也不说明自己的替代方案。",
        "effects": {
          "attraction": -5,
          "trust": -10,
          "comfort": -10,
          "conflict": 20
        },
        "npcResponse": "TA 关掉预订页面：‘你可以拒绝我的方案，但反着来不是共同决定。’",
        "feedbackIds": [
          "conflict_up_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "你们正在把分歧说成胜负。",
          "TA把你的承诺打了个折扣。"
        ]
      },
      {
        "id": "q06_name_the_management_feeling",
        "strategy": "honest",
        "strategyLabel": "说明被管理感",
        "text": "坦白这份表让自己有点像待优化项目，请TA先听完，再一起改决定方式。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 停下了正在改的表：‘好，你先说。可能不是表的问题，是我刚才把你也排进去了。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA没有跳过你的条件。",
          "意见开始顶在了一起。"
        ]
      }
    ]
  },
  {
    "id": "Q07",
    "order": 7,
    "stage": "familiarity",
    "title": "暂停不是失踪",
    "scene": "关于共同安排的争论开始重复，双方语气都在升高。TA 提出暂停到明晚九点，期间只处理已经订下的必要事项。",
    "npcQuote": "我现在继续只会想赢。明晚九点我回来；如果要改时间，我会提前说。今晚只处理必须确认的预订，可以吗？",
    "prompt": "TA想停到明晚九点，你会怎么回？",
    "conflictDimensions": [
      "ENTJ-K08"
    ],
    "researchRefs": [
      "ENTJ-S02",
      "ENTJ-S10",
      "ENTJ-S13",
      "ENTJ-S14",
      "ENTJ-S16"
    ],
    "tags": [
      "熟悉",
      "冲突暂停",
      "返回时间",
      "必要联系"
    ],
    "designNote": "对应 ENTJ-SC07；主测暂停是否包含期限、必要联系和改期责任。暂停不能写成冷处理或无限等待。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q07_accept_the_pause",
        "strategy": "accommodate",
        "strategyLabel": "按约暂停",
        "text": "同意今晚停下，只处理必要预订，等明晚九点再继续谈。",
        "effects": {
          "attraction": 0,
          "trust": 5,
          "comfort": 15,
          "conflict": -15
        },
        "npcResponse": "TA 把返回时间留在聊天里：‘好。今晚到这里，明晚我会出现。’",
        "feedbackIds": [
          "comfort_up_strong",
          "conflict_down_strong"
        ],
        "feedbackText": [
          "TA没有再预演你的反应。",
          "刚才绷着的劲松开了。"
        ]
      },
      {
        "id": "q07_state_the_waiting_limit",
        "strategy": "honest",
        "strategyLabel": "说明等待边界",
        "text": "接受暂停，也说明如果需要延期，希望TA提前告知；自己不能接受无期限失联。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 没把这当催促：‘这个边界合理。延期不是消失的别名。’",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA把你的意见放进了决定里。",
          "TA说话时不再处处防着你的反应。"
        ]
      },
      {
        "id": "q07_define_the_return",
        "strategy": "negotiate",
        "strategyLabel": "约定回谈结构",
        "text": "确认明晚时间、延期通知和回谈顺序：先说影响，再核对事实，最后谈调整。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": -10
        },
        "npcResponse": "TA 记下那三件事：‘可以。明晚别再从声音最大的时候重新吵。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA停下来重新问了你的想法。",
          "问题暂时回到了可以处理的范围。"
        ]
      },
      {
        "id": "q07_force_an_answer_now",
        "strategy": "risky",
        "strategyLabel": "逼TA现在解决",
        "text": "连续打电话和发长消息，要求TA今晚给出结论，否则就当作不在乎。",
        "effects": {
          "attraction": -10,
          "trust": -5,
          "comfort": -20,
          "conflict": 20
        },
        "npcResponse": "TA 不再进入具体争论，只重复返回安排：‘你可以不同意暂停，但不能用轰炸替我同意继续。’",
        "feedbackIds": [
          "comfort_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA不再觉得这场对话可以放心继续。",
          "这件事已经越说越伤人。"
        ]
      }
    ]
  },
  {
    "id": "Q08",
    "order": 8,
    "stage": "familiarity",
    "title": "回来以后，不只交新方案",
    "scene": "明晚九点，TA 按时回来。TA 承认自己先前替你决定、语气也压人，但仍认为预算与取消成本需要认真讨论。",
    "npcQuote": "昨天我替你定了，这件事是我不对；说话也压人。成本问题还在，但我不能假装换个更漂亮的方案就算解决了。",
    "prompt": "TA认了自己的问题，你想先谈哪一部分？",
    "conflictDimensions": [
      "ENTJ-K08"
    ],
    "researchRefs": [
      "ENTJ-S02",
      "ENTJ-S03",
      "ENTJ-S10",
      "ENTJ-S11",
      "ENTJ-S12",
      "ENTJ-S13",
      "ENTJ-S16",
      "ENTJ-S17"
    ],
    "tags": [
      "熟悉",
      "冲突修复",
      "承担影响",
      "共同决定"
    ],
    "designNote": "对应 ENTJ-SC08；主测是否按事实、影响、责任和调整完成修复。解释、礼物与新方案都不能替代道歉。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q08_separate_repair_steps",
        "strategy": "negotiate",
        "strategyLabel": "分开处理四件事",
        "text": "分别核对事实、越界影响、各自责任和下次决定方式，再讨论剩余成本。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": -15
        },
        "npcResponse": "TA 没再抢着总结：‘好。先说我昨天哪一步让你最难受，方案放后面。’",
        "feedbackIds": [
          "conflict_down_strong",
          "trust_up_medium"
        ],
        "feedbackText": [
          "这场较劲终于停了下来。",
          "TA愿意照新的办法推进。"
        ]
      },
      {
        "id": "q08_not_ready_to_forgive",
        "strategy": "honest",
        "strategyLabel": "承认仍然受伤",
        "text": "认可TA按时回来，也说明自己还没准备好原谅，希望先看到决定方式真正改变。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 点了点头：‘你不用因为我回来，就现在说没事。’",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA把原先的版本往回收了一步。",
          "你们的话锋又硬了一点。"
        ]
      },
      {
        "id": "q08_demand_total_control",
        "strategy": "confront",
        "strategyLabel": "要求全面交出决定权",
        "text": "抓住TA承认越界，要求以后所有共同安排都由自己决定，TA不得再提出反对。",
        "effects": {
          "attraction": -10,
          "trust": -10,
          "comfort": -15,
          "conflict": 20
        },
        "npcResponse": "TA 皱起眉：‘这次是我替你决定了，我认。但以后全由你说了算，也不是办法。’",
        "feedbackIds": [
          "conflict_up_strong",
          "comfort_down_strong"
        ],
        "feedbackText": [
          "争论已经开始压过原来的问题。",
          "TA整个人都绷了起来。"
        ]
      },
      {
        "id": "q08_skip_with_flirting",
        "strategy": "risky",
        "strategyLabel": "用亲近跳过回谈",
        "text": "用拥抱和调情把气氛带过去，说“都回来了就别谈这些”，不再核对责任。",
        "effects": {
          "attraction": 15,
          "trust": -15,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 没拒绝靠近，却把话题拉了回来：‘亲近可以是真的，没修好的部分也一样是真的。’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_down_strong"
        ],
        "feedbackText": [
          "TA听完后明显笑了一下。",
          "TA不再让你碰后面的安排。"
        ]
      }
    ]
  },
  {
    "id": "Q09",
    "order": 9,
    "stage": "ambiguity",
    "title": "明天前还可以取消",
    "scene": "TA 发现一场几个月后才举办、你曾说很想看的活动，暂时保留了两个位置。预订明天前可以无损取消。",
    "npcQuote": "我给两个人留了位置，但这只是邀请，不是替你答应，也不是替我们定义关系。时间、预算和期待都可以谈。",
    "prompt": "TA留了两个位置，你会怎么回应？",
    "conflictDimensions": [
      "ENTJ-K04",
      "ENTJ-K06",
      "ENTJ-K10"
    ],
    "researchRefs": [
      "ENTJ-S04",
      "ENTJ-S08",
      "ENTJ-S09",
      "ENTJ-S14",
      "ENTJ-S15",
      "ENTJ-S17",
      "ENTJ-S24",
      "ENTJ-S28"
    ],
    "tags": [
      "暧昧",
      "未来投入",
      "共同计划",
      "承诺信号"
    ],
    "designNote": "对应 ENTJ-SC09；主测未来投入仍需确认时间、关系含义和退出条件。F10 的忠诚脚本只作风险护栏。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q09_accept_as_an_activity",
        "strategy": "accommodate",
        "strategyLabel": "先接受这次同行",
        "text": "确认自己愿意去，把它先当作一次具体同行，不急着替双方赋予更多含义。",
        "effects": {
          "attraction": 20,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 保留了位置：‘好。它可以先只是一件我们都想做的事。’",
        "feedbackIds": [
          "attraction_up_strong",
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA没藏住这一刻的高兴。",
          "TA整个人松快了一些。"
        ]
      },
      {
        "id": "q09_confirm_the_terms",
        "strategy": "negotiate",
        "strategyLabel": "逐项确认投入",
        "text": "一起确认时间、预算和取消责任，也问这项计划是否带着额外的关系期待。",
        "effects": {
          "attraction": 5,
          "trust": 15,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 先回答安排，再回答期待：‘我希望继续靠近，但这需要你自己同意。’",
        "feedbackIds": [
          "trust_up_strong",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA没有独自敲定最后的方案。",
          "TA把想说的话直接说完了。"
        ]
      },
      {
        "id": "q09_talk_before_investing",
        "strategy": "honest",
        "strategyLabel": "投入前先谈关系",
        "text": "说自己很想去，但若双方理解不同，希望先谈清关系再投入几个月后的安排。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": 5
        },
        "npcResponse": "TA 没把谨慎叫作扫兴：‘那就先谈。票能退，误解未必能。’",
        "feedbackIds": [
          "comfort_up_medium",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA在你面前少了一点戒备。",
          "TA没有再替你先做决定。"
        ]
      },
      {
        "id": "q09_announce_a_relationship",
        "strategy": "risky",
        "strategyLabel": "替双方公开定义",
        "text": "把留票当作默认确认关系，立刻向朋友宣布你们几个月后要一起过“纪念日”。",
        "effects": {
          "attraction": -10,
          "trust": -20,
          "comfort": -10,
          "conflict": 20
        },
        "npcResponse": "TA 要求你先撤下公开说法：‘我给的是选择，不是替你获得公布关系的许可。’",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA开始避开需要彼此托付的事。",
          "TA不想再继续这一轮对话。"
        ]
      }
    ]
  },
  {
    "id": "Q10",
    "order": 10,
    "stage": "ambiguity",
    "title": "这次不替关系做决定",
    "scene": "在持续相处和几次认真修复后，你们终于坐下来谈关系。TA 没用之前的帮助、脆弱分享或未来计划替双方作答。",
    "npcQuote": "我想继续。但排他、公开、联系频率和个人时间，不能靠我一个人列完。你可以拒绝，也可以说现在还不确定。",
    "prompt": "TA说完了。轮到你，你会怎么回答？",
    "conflictDimensions": [
      "ENTJ-K04",
      "ENTJ-K09",
      "ENTJ-K10"
    ],
    "researchRefs": [
      "ENTJ-S08",
      "ENTJ-S09",
      "ENTJ-S14",
      "ENTJ-S15",
      "ENTJ-S17",
      "ENTJ-S24",
      "ENTJ-S28"
    ],
    "tags": [
      "暧昧",
      "关系定义",
      "排他",
      "联系节奏"
    ],
    "designNote": "对应 ENTJ-SC10；主测明确、可拒绝的关系确认。接受、拒绝、延后和不同节奏都必须合法，选项不直接选择结局。数值为 Stage 04 初始假设。",
    "options": [
      {
        "id": "q10_give_a_real_answer",
        "strategy": "honest",
        "strategyLabel": "给出真实答案",
        "text": "清楚说明自己是否想确认关系和无法接受的边界，不要求TA立刻给出相同答案。",
        "effects": {
          "attraction": 20,
          "trust": 15,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 没急着抹平不同之处：‘至少现在，我知道你答应和没答应的分别是什么。’",
        "feedbackIds": [
          "trust_up_strong",
          "attraction_up_strong"
        ],
        "feedbackText": [
          "TA把最终拍板的位置分给了你。",
          "TA看你的眼神热了些。"
        ]
      },
      {
        "id": "q10_build_an_agreement",
        "strategy": "negotiate",
        "strategyLabel": "拆成可执行协议",
        "text": "分别谈排他、公开、联系和个人时间，先确认双方真正愿意且能够兑现的部分。",
        "effects": {
          "attraction": 0,
          "trust": 15,
          "comfort": 15,
          "conflict": -5
        },
        "npcResponse": "TA 把四件事逐项记下：‘这比一句“顺其自然”更像共同决定。’",
        "feedbackIds": [
          "trust_up_strong",
          "comfort_up_strong"
        ],
        "feedbackText": [
          "TA等着和你一起定下最后一步。",
          "TA没有再预演你的反应。"
        ]
      },
      {
        "id": "q10_follow_everything",
        "strategy": "accommodate",
        "strategyLabel": "全部顺着TA",
        "text": "只说“按你想要的来”，把自己的排他、公开和联系需求暂时藏起来。",
        "effects": {
          "attraction": 20,
          "trust": -20,
          "comfort": 0,
          "conflict": 10
        },
        "npcResponse": "TA 没接这句‘都行’：‘我想听你的答案，不是让你挑最省事的说法。’",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_down_strong"
        ],
        "feedbackText": [
          "TA听完后明显笑了一下。",
          "TA撤回了原本留给你的参与位置。"
        ]
      },
      {
        "id": "q10_test_by_disappearing",
        "strategy": "risky",
        "strategyLabel": "用消失测试感情",
        "text": "不回答具体问题，提议彼此消失两天，看谁先联系，以此判断感情深浅。",
        "effects": {
          "attraction": 0,
          "trust": -20,
          "comfort": -10,
          "conflict": 20
        },
        "npcResponse": "TA 拒绝了这场测试：‘你可以不确定，但不能把不知情变成考题。’",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA把决定重新收回自己手里。",
          "气氛一下变得很僵。"
        ]
      }
    ]
  }
];

export const questions = entjQuestions;
