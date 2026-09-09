import type { Question } from "./schema.ts";

export const entjQuestions: readonly Question[] = [
  {
    "id": "Q01",
    "order": 1,
    "stage": "first_meeting",
    "title": "先别给我配办公室",
    "scene": "第一次见面刚坐下，你笑着问，ENTJ 是不是都自带老板气场。TA 正翻着菜单，手停了一下，抬眼看你。",
    "npcQuote": "这帽子有点大。我也拖延、改主意，还搞砸过不少事。今晚能不能先不面试我？",
    "prompt": "你准备怎么接这句话？",
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
        "text": "接着开玩笑：“没关系，等你升职了我再来验证。”还是拿职业和气场给TA打分。",
        "effects": {
          "attraction": -5,
          "trust": -10,
          "comfort": -15,
          "conflict": 10
        },
        "npcResponse": "TA 扯了下嘴角，低头继续看菜单：“那你慢慢等吧，我今晚不参加考核。”",
        "feedbackIds": [
          "comfort_down_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "TA 往椅背靠了靠，和你隔开一点。",
          "这个玩笑没有让 TA 更放心。"
        ]
      },
      {
        "id": "q01_own_the_label",
        "strategy": "honest",
        "strategyLabel": "承认概括过头",
        "text": "承认自己把四个字母说得太满，再问TA更希望别人先认识自己哪一面。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 愣了一下，笑着从自己特别容易迷路说起。",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA 愿意先讲一点不那么体面的事。",
          "桌上的气氛松了下来。"
        ]
      },
      {
        "id": "q01_compare_examples",
        "strategy": "negotiate",
        "strategyLabel": "交换真实例子",
        "text": "提议把标签只当开场梗：你们各说一件很符合、再说一件完全不像测试结果的事。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 10,
          "conflict": 0
        },
        "npcResponse": "TA 把菜单合上：“行。我先来——有件事我拖了三个月。轮到你时也别只说优点。”",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "这个玩法让 TA 来了兴致。",
          "你们总算不用对着四个字母表演。"
        ]
      },
      {
        "id": "q01_drop_the_topic",
        "strategy": "accommodate",
        "strategyLabel": "换个具体话题",
        "text": "不再追问类型，改聊今天最想做、也最可能临时改变的一件事。",
        "effects": {
          "attraction": 5,
          "trust": 5,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 很快接上话，认真盘算起这场大风会不会让饭后的散步泡汤。",
        "feedbackIds": [
          "comfort_up_medium",
          "attraction_up_slight"
        ],
        "feedbackText": [
          "TA 不用再忙着替自己辩解。",
          "TA 开始认真想你的问题。"
        ]
      }
    ]
  },
  {
    "id": "Q02",
    "order": 2,
    "stage": "first_meeting",
    "title": "九十分钟，三个地点",
    "scene": "你们只剩九十分钟。TA 在地图上圈了展馆、河边和一家小馆，说赶不及就删掉最后一站。你看着那条路线，其实更想找个地方慢慢聊。",
    "npcQuote": "我排了个顺路的走法：先看展，再去河边，最后吃点东西。时间不够就删。你最想留哪段？",
    "prompt": "这九十分钟，你想怎么过？",
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
        "text": "保留展览和一小段散步，删掉最后一站，也说好谁走累了都可以随时停。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 用手指划掉最后一站，肩膀也跟着松了下来。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA 确实把你的体力算了进去。",
          "你们很快找到了都能接受的走法。"
        ]
      },
      {
        "id": "q02_follow_for_today",
        "strategy": "accommodate",
        "strategyLabel": "这次跟着走",
        "text": "说自己今天精力还够，可以照这条路线走，但以后未必每次都喜欢这么赶。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 10,
          "conflict": 0
        },
        "npcResponse": "TA 点点头，又确认了一遍：“好，今天先这么走。下次我不会照抄。”",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA 听起来很期待和你一起出发。",
          "你不必假装自己永远喜欢这种节奏。"
        ]
      },
      {
        "id": "q02_choose_one_place",
        "strategy": "honest",
        "strategyLabel": "说出真实节奏",
        "text": "直说自己更想找个地方坐下聊天，不想把第一次见面过成赶场。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": 5
        },
        "npcResponse": "TA 看了你两秒，把手机锁屏，带你在窗边找了张桌子。",
        "feedbackIds": [
          "comfort_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "你终于不用赶着配合这条路线。",
          "这句直接的拒绝还是让气氛顿了一下。"
        ]
      },
      {
        "id": "q02_make_them_responsible",
        "strategy": "risky",
        "strategyLabel": "把结果都算给TA",
        "text": "说“你安排就好，搞砸了算你的”，不告诉TA自己累不累、想不想去。",
        "effects": {
          "attraction": -5,
          "trust": -5,
          "comfort": 0,
          "conflict": 15
        },
        "npcResponse": "TA 皱起眉：“等等，你什么都不说，怎么最后全算到我头上？”",
        "feedbackIds": [
          "trust_down_slight",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA 开始怀疑你会不会说出真实想法。",
          "路线还没定，火气先冒了出来。"
        ]
      }
    ]
  },
  {
    "id": "Q03",
    "order": 3,
    "stage": "contact",
    "title": "周六见不见",
    "scene": "见面后的第二天，TA 发来一条消息，约你周六下午看展，还附上了时间和地址。末尾又补了一句：不想看展也可以换。",
    "npcQuote": "我还想见你。周六两点看展，两个小时左右，行吗？活动和时间都可以改。",
    "prompt": "你会怎么回复这次邀请？",
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
        "text": "告诉TA自己也想再见，但周六不行；再给出周日或下周两个确实有空的时间。",
        "effects": {
          "attraction": 10,
          "trust": 5,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 很快选了周日，紧接着把新的展览时间发了过来。",
        "feedbackIds": [
          "attraction_up_medium",
          "trust_up_slight"
        ],
        "feedbackText": [
          "TA 回得很快，显然也想再见。",
          "你给出的时间让这次邀约落了地。"
        ]
      },
      {
        "id": "q03_accept_the_invite",
        "strategy": "accommodate",
        "strategyLabel": "接住这次主动",
        "text": "确认周六有空，也愿意看展；先把它当成一次普通的第二次见面。",
        "effects": {
          "attraction": 10,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 发来购票页面和一个笑脸：“好，那就周六见。”",
        "feedbackIds": [
          "comfort_up_slight",
          "attraction_up_medium"
        ],
        "feedbackText": [
          "这句答应让 TA 松了口气。",
          "TA 已经开始期待周六。"
        ]
      },
      {
        "id": "q03_set_a_slower_pace",
        "strategy": "negotiate",
        "strategyLabel": "协商更慢节奏",
        "text": "说自己愿意见面，但想把活动缩短到一小时；以后也希望两个人都可以约时间、改安排。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 把结束时间往前改了一格，又把下一次选地点的机会留给了你。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA 认真照你的节奏改了邀请。",
          "这次调整没有变成谁说了算。"
        ]
      },
      {
        "id": "q03_delay_as_a_test",
        "strategy": "risky",
        "strategyLabel": "故意拖着观察",
        "text": "明明看到了消息，却故意拖两天不回，想看TA会不会追问，以此证明在意。",
        "effects": {
          "attraction": -5,
          "trust": -15,
          "comfort": -5,
          "conflict": 15
        },
        "npcResponse": "两天后，TA 只发来一句：“如果你不想去，直接告诉我就好。”没有继续追问。",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA 不再确定你的沉默是什么意思。",
          "这场没人知情的测试让 TA 很恼火。"
        ]
      }
    ]
  },
  {
    "id": "Q04",
    "order": 4,
    "stage": "contact",
    "title": "那张租房清单",
    "scene": "你上次提过想换住处，又被一堆信息弄得头大。晚上，TA 发来一张对比表，房租、通勤和更新时间都标好了，最后一行写着“还没替你联系中介”。",
    "npcQuote": "我查了一些，你挑有用的看。真要我联系中介，再跟我说一声。",
    "prompt": "看到这张表，你会怎么回？",
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
        "text": "告诉TA其中哪几项正好帮上了忙，留下这张表，但房子还是由自己来选。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 看你圈出几行，明显松了口气，没有追问其他内容为什么没用。",
        "feedbackIds": [
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA 看起来很高兴这份心意没有变成负担。"
        ]
      },
      {
        "id": "q04_name_the_boundary",
        "strategy": "honest",
        "strategyLabel": "说明帮助边界",
        "text": "坦白自己很感动，同时说明：以后如果要联系别人或者花钱，希望TA先问自己。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 停了一下，在表格末尾加了条备注：“记住了。下次先问。”",
        "feedbackIds": [
          "comfort_up_slight",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA 没把你的提醒听成扫兴。",
          "你说清的界线让这份帮忙更让人放心。"
        ]
      },
      {
        "id": "q04_make_a_help_rule",
        "strategy": "negotiate",
        "strategyLabel": "约定帮忙方式",
        "text": "和TA约个简单做法：帮之前先问，被拒绝也没关系，大事还是由当事人自己定。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": -5
        },
        "npcResponse": "TA 回了个“好”，还半开玩笑地提醒你，以后也别突然替TA包办。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_slight"
        ],
        "feedbackText": [
          "TA 愿意认真照这个约定来。",
          "话说开以后，你们都不用再猜对方会不会越界。"
        ]
      },
      {
        "id": "q04_expand_the_assignment",
        "strategy": "risky",
        "strategyLabel": "把帮忙升级成义务",
        "text": "顺势又发去三件事：“既然都开始查了，不如一次帮我做完吧。”",
        "effects": {
          "attraction": -5,
          "trust": -10,
          "comfort": -20,
          "conflict": 10
        },
        "npcResponse": "TA 没点开后面三个链接：“这张表是我想帮你。剩下这些，你至少先问我有没有空。”",
        "feedbackIds": [
          "comfort_down_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "TA 的热心一下收了回去。",
          "TA 开始担心你会把好意当成理所当然。"
        ]
      }
    ]
  },
  {
    "id": "Q05",
    "order": 5,
    "stage": "contact",
    "title": "现在先别修",
    "scene": "你刚经历一次很糟的汇报。话还没说完，TA 已经打开备忘录，开始记问题出在哪。你渐渐没了声音，TA 这才停下。",
    "npcQuote": "等一下，我是不是又急着给办法了？你现在想让我听着，还是一起想想？也可以先不说。",
    "prompt": "你现在最希望TA怎么陪你？",
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
        "text": "请TA先听自己把委屈说完，十分钟以后，再一起看看哪些问题需要处理。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 合上备忘录，把手机也扣在桌上，这次没有打断你。",
        "feedbackIds": [
          "comfort_up_medium",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA 陪你坐稳了，没有再催着往下走。",
          "你愿意说出需要，让 TA 更知道该怎么靠近。"
        ]
      },
      {
        "id": "q05_call_them_heartless",
        "strategy": "confront",
        "strategyLabel": "把错位定性为无情",
        "text": "冲TA说：“你根本不在乎我的感受，只想显得自己什么都能解决。”也不再说明自己需要什么。",
        "effects": {
          "attraction": -10,
          "trust": -5,
          "comfort": -15,
          "conflict": 20
        },
        "npcResponse": "TA 的脸一下沉了：“我刚才确实没听你说完，但你凭什么说我根本不在乎？”",
        "feedbackIds": [
          "conflict_up_strong",
          "comfort_down_strong"
        ],
        "feedbackText": [
          "一句话把争执顶到了最尖的地方。",
          "TA 把椅子往后挪了些，不想再被这样指责。"
        ]
      },
      {
        "id": "q05_choose_support_together",
        "strategy": "negotiate",
        "strategyLabel": "一起选支持方式",
        "text": "说明自己现在更需要有人听，再问TA今天还有多少精力，晚些时候要不要继续聊办法。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -10
        },
        "npcResponse": "TA 看了眼时间，空出接下来一个小时，先听你慢慢说。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA 清楚知道此刻该做什么了。",
          "刚才那点错位慢慢退了下去。"
        ]
      },
      {
        "id": "q05_take_the_plan_for_now",
        "strategy": "accommodate",
        "strategyLabel": "先收下方案",
        "text": "告诉TA自己现在说不动，先收下TA记的东西，等有力气时再决定要不要讨论。",
        "effects": {
          "attraction": 0,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 把备忘录发给你，没有再追问，起身给你倒了杯水。",
        "feedbackIds": [
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA 接受了你现在没有力气继续。"
        ]
      }
    ]
  },
  {
    "id": "Q06",
    "order": 6,
    "stage": "familiarity",
    "title": "订之前再对一遍",
    "scene": "你们准备订一次周末活动。TA 在页面上勾了安静、可以退款，又开着餐厅和路线几个选项。你的预算和需要休息多久，还没有说。",
    "npcQuote": "安静、能退款是我最在意的。吃什么、怎么走都好改。你的预算和休息时间呢？",
    "prompt": "轮到你补充条件了，你会怎么说？",
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
        "text": "说出自己的预算和休息需求，再一起分清哪些必须满足、哪些可以改、哪些不合适就取消。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 10,
          "conflict": -10
        },
        "npcResponse": "TA 把预算拖到最上面，和你一起从头筛了一遍。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA 确实按你的需要重新挑了一遍。",
          "条件摆到桌面上，事情反而好商量了。"
        ]
      },
      {
        "id": "q06_accept_their_standard",
        "strategy": "accommodate",
        "strategyLabel": "先照TA的标准订",
        "text": "觉得省事最重要，先答应TA选的版本，把自己想压低预算这件事藏着不说。",
        "effects": {
          "attraction": 10,
          "trust": 0,
          "comfort": -5,
          "conflict": 0
        },
        "npcResponse": "TA 听见“都行”，很快点进付款页，又停住：“你答得这么快，价格真的没问题？”",
        "feedbackIds": [
          "attraction_up_medium",
          "comfort_down_slight"
        ],
        "feedbackText": [
          "TA 兴致很高，已经开始说接下来去哪。",
          "你心里那句“有点贵”还卡着没说。"
        ]
      },
      {
        "id": "q06_reject_everything",
        "strategy": "confront",
        "strategyLabel": "用反对夺回控制",
        "text": "说“不想被你管”，故意把TA勾的条件全部推翻，却不说自己到底想要什么。",
        "effects": {
          "attraction": -5,
          "trust": -10,
          "comfort": -10,
          "conflict": 20
        },
        "npcResponse": "TA 关掉页面：“你不喜欢可以直说。但我猜不出你把这些全划掉以后想要什么。”",
        "feedbackIds": [
          "conflict_up_strong",
          "trust_down_medium"
        ],
        "feedbackText": [
          "一场商量很快变成了针锋相对。",
          "TA 不太相信你是真的想把事情定下来。"
        ]
      },
      {
        "id": "q06_name_the_management_feeling",
        "strategy": "honest",
        "strategyLabel": "说明被管理感",
        "text": "坦白这一排选项让自己有点像被安排的项目，请TA先听完，再换一种商量方式。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 的手停在鼠标上，脸色有点僵：“这话有点刺。不过你先说，我听完再动。”",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA 没有因为不舒服就跳过你的感受。",
          "这句提醒让气氛紧了一瞬。"
        ]
      }
    ]
  },
  {
    "id": "Q07",
    "order": 7,
    "stage": "familiarity",
    "title": "暂停不是失踪",
    "scene": "你们为了周末的安排来回争了几轮，声音越来越大，谁也没在听。TA 走到窗边站了一会儿，提出先停到明晚九点。",
    "npcQuote": "我现在只想争赢，再说下去会更糟。明晚九点再谈，好吗？要改时间，我提前告诉你。",
    "prompt": "TA想先停下来，你会怎么回应？",
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
        "text": "同意今晚先停，只处理不能拖的预订，其他事情明晚九点再谈。",
        "effects": {
          "attraction": 0,
          "trust": 5,
          "comfort": 15,
          "conflict": -15
        },
        "npcResponse": "TA 把手机扣在桌上，长长呼了口气，刚才绷紧的肩膀终于垮下来。",
        "feedbackIds": [
          "comfort_up_strong",
          "conflict_down_strong"
        ],
        "feedbackText": [
          "TA 终于不用防着下一句话又砸过来。",
          "吵到发紧的空气慢慢松了。"
        ]
      },
      {
        "id": "q07_state_the_waiting_limit",
        "strategy": "honest",
        "strategyLabel": "说明等待边界",
        "text": "接受暂停，同时说明如果要延期，希望TA提前说；自己受不了没有期限的失联。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 回了个“好”：“如果时间有变，我会告诉你。不会让你干等。”",
        "feedbackIds": [
          "trust_up_medium",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA 把你的担心当成了需要回应的事。",
          "说好怎么回来以后，你没那么悬着了。"
        ]
      },
      {
        "id": "q07_define_the_return",
        "strategy": "negotiate",
        "strategyLabel": "约定回谈结构",
        "text": "确认明晚的时间和延期怎么通知，也约好回来后先说各自受了什么影响，再谈怎么改。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 5,
          "conflict": -10
        },
        "npcResponse": "TA 在备忘录里敲下几行，和你确认明晚从哪里重新谈。",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_down_medium"
        ],
        "feedbackText": [
          "TA 愿意和你一起想好怎么重新开口。",
          "这场争执总算有了一个能回来的出口。"
        ]
      },
      {
        "id": "q07_force_an_answer_now",
        "strategy": "risky",
        "strategyLabel": "逼TA现在解决",
        "text": "继续打电话、发长消息，要求TA今晚必须给结论，否则就算TA根本不在乎。",
        "effects": {
          "attraction": -10,
          "trust": -5,
          "comfort": -20,
          "conflict": 20
        },
        "npcResponse": "屏幕亮了几次后，TA 只回了一句：“我说过明晚。今晚我不会再接电话。”",
        "feedbackIds": [
          "comfort_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA 被逼得只想离这场对话远一点。",
          "不停追来的消息让冲突彻底失了控。"
        ]
      }
    ]
  },
  {
    "id": "Q08",
    "order": 8,
    "stage": "familiarity",
    "title": "第二天九点",
    "scene": "第二天九点，TA 准时发来消息。TA 承认昨天替你做了决定，说话也压人；但那笔取消费还摆在那里，谁都绕不过去。",
    "npcQuote": "昨天我越过你替你定了，还把话说得很难听。这两件事我认。钱和取消费，我们还是得谈。",
    "prompt": "TA道了歉，你想从哪里谈起？",
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
        "text": "先把发生了什么、伤到哪里、各自该负责什么说清，再谈以后怎么决定和这次的费用。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": -15
        },
        "npcResponse": "TA 没打开新的表格，只把手放在桌上，等你先说昨天哪一下最难受。",
        "feedbackIds": [
          "conflict_down_strong",
          "trust_up_medium"
        ],
        "feedbackText": [
          "你们终于不再抢着给这场争执定输赢。",
          "TA 的道歉开始落到具体的事上。"
        ]
      },
      {
        "id": "q08_not_ready_to_forgive",
        "strategy": "honest",
        "strategyLabel": "承认仍然受伤",
        "text": "认可TA按时回来，也坦白自己还没准备好原谅；想先看看以后是不是真的会换一种做法。",
        "effects": {
          "attraction": 0,
          "trust": 10,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 的脸僵了一瞬，还是点了点头：“好。我知道准时回来不等于这事已经过去。”",
        "feedbackIds": [
          "trust_up_medium",
          "conflict_up_slight"
        ],
        "feedbackText": [
          "TA 愿意给你时间，也知道要靠行动补上。",
          "“还没原谅”让气氛短暂地紧了起来。"
        ]
      },
      {
        "id": "q08_demand_total_control",
        "strategy": "confront",
        "strategyLabel": "要求全面交出决定权",
        "text": "抓住TA承认越界，要求以后所有共同安排都由自己决定，TA不能再反对。",
        "effects": {
          "attraction": -10,
          "trust": -10,
          "comfort": -15,
          "conflict": 20
        },
        "npcResponse": "TA 皱起眉，身体重新绷紧：“我认这次是我越界。但以后全听你的，我不同意。”",
        "feedbackIds": [
          "conflict_up_strong",
          "comfort_down_strong"
        ],
        "feedbackText": [
          "刚停下的争执又被推回了输赢。",
          "TA 再次觉得自己没有说不的余地。"
        ]
      },
      {
        "id": "q08_skip_with_flirting",
        "strategy": "risky",
        "strategyLabel": "用亲近跳过回谈",
        "text": "靠过去拥抱、调情，说“都回来了就别谈这些了”，想把责任和费用一起略过去。",
        "effects": {
          "attraction": 15,
          "trust": -15,
          "comfort": 5,
          "conflict": 5
        },
        "npcResponse": "TA 回抱了你，手停在你背上，过了一会儿才说：“我也想靠近。但昨天那件事还在。”",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_down_strong"
        ],
        "feedbackText": [
          "TA 没有推开这次靠近。",
          "那句道歉却悬在半空，没有真正被接住。"
        ]
      }
    ]
  },
  {
    "id": "Q09",
    "order": 9,
    "stage": "ambiguity",
    "title": "明天前还可以取消",
    "scene": "TA 发现一场几个月后才举办的活动，正好是你之前说过很想看的。TA 先留了两个位置，明天以前取消不用花钱。",
    "npcQuote": "我先留了两个位置，明天前退掉都不花钱。你想去，我们再确认；不想去也没事。",
    "prompt": "你会怎么回应这次邀请？",
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
        "text": "确认自己愿意去，先把它当作一次一起出门，不急着给这件事加上更多含义。",
        "effects": {
          "attraction": 20,
          "trust": 0,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 笑出了声，立刻把预留页面截给你，怕你反悔似的又发了个笑脸。",
        "feedbackIds": [
          "attraction_up_strong",
          "comfort_up_slight"
        ],
        "feedbackText": [
          "TA 的高兴一点也没藏住。",
          "这次答应听起来轻松，没有附带别的承诺。"
        ]
      },
      {
        "id": "q09_confirm_the_terms",
        "strategy": "negotiate",
        "strategyLabel": "逐项确认投入",
        "text": "一起确认时间、预算和临时取消怎么办，也问TA，这次邀请是不是还带着别的期待。",
        "effects": {
          "attraction": 5,
          "trust": 15,
          "comfort": 10,
          "conflict": -5
        },
        "npcResponse": "TA 先把价格和时间发给你，过了半分钟，才承认自己确实想和你更近一点。",
        "feedbackIds": [
          "trust_up_strong",
          "comfort_up_medium"
        ],
        "feedbackText": [
          "TA 愿意把重要的细节都摊开给你看。",
          "你问出口以后，两个人都不用再装作这只是买票。"
        ]
      },
      {
        "id": "q09_talk_before_investing",
        "strategy": "honest",
        "strategyLabel": "投入前先谈关系",
        "text": "说自己很想去，但担心两个人理解得不一样；希望先谈谈关系，再确认几个月后的同行。",
        "effects": {
          "attraction": 5,
          "trust": 10,
          "comfort": 10,
          "conflict": 5
        },
        "npcResponse": "TA 安静了一会儿，把付款页面关掉：“好。那我们先把彼此的想法讲明白。”",
        "feedbackIds": [
          "comfort_up_medium",
          "trust_up_medium"
        ],
        "feedbackText": [
          "TA 接受了你没有立刻答应。",
          "这份谨慎反而让 TA 更相信你的认真。"
        ]
      },
      {
        "id": "q09_announce_a_relationship",
        "strategy": "risky",
        "strategyLabel": "替双方公开定义",
        "text": "把留票当成默认确认关系，立刻发动态告诉朋友，你们几个月后要一起过“纪念日”。",
        "effects": {
          "attraction": -10,
          "trust": -20,
          "comfort": -10,
          "conflict": 20
        },
        "npcResponse": "TA 看到动态后马上打来电话，声音很冷：“先删掉。我们根本还没说好。”",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA 不敢再把这种重要的选择交给你。",
          "这次擅自公开让 TA 又气又难堪。"
        ]
      }
    ]
  },
  {
    "id": "Q10",
    "order": 10,
    "stage": "ambiguity",
    "title": "把关系说清楚",
    "scene": "相处了一段时间，也吵过、和好过几次以后，你们终于坐下来谈关系。TA 没拿之前的帮助或未来安排当作答案，只看着你，等你开口。",
    "npcQuote": "我想继续和你靠近。但要不要排他、要不要公开、多久联系一次，我不想替你填。你可以拒绝，也可以说还没想好。",
    "prompt": "这场关系谈话，你会怎么开口？",
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
        "text": "坦白自己也想继续靠近，再说清有哪些事不能接受，也允许TA的答案和自己不完全一样。",
        "effects": {
          "attraction": 20,
          "trust": 15,
          "comfort": 5,
          "conflict": 0
        },
        "npcResponse": "TA 听你讲完，没有急着接话。过了一会儿，才问起你们答案不一样的那一项。",
        "feedbackIds": [
          "trust_up_strong",
          "attraction_up_strong"
        ],
        "feedbackText": [
          "TA 相信你说的是自己的真实答案。",
          "TA 看你的眼神明显热了起来。"
        ]
      },
      {
        "id": "q10_build_an_agreement",
        "strategy": "negotiate",
        "strategyLabel": "拆成可执行协议",
        "text": "先不急着给关系命名，把排他、公开、联系频率和个人时间一件件谈开，只答应双方真心愿意、也做得到的部分。",
        "effects": {
          "attraction": 0,
          "trust": 15,
          "comfort": 15,
          "conflict": -5
        },
        "npcResponse": "你们说到一半还改了几次答案。TA 把最后一项记下时笑了：“这下总算不是我一个人在写了。”",
        "feedbackIds": [
          "trust_up_strong",
          "comfort_up_strong"
        ],
        "feedbackText": [
          "TA 愿意把往后的重要选择交给你们两个人。",
          "说到最后，你们都不用藏着真实需要。"
        ]
      },
      {
        "id": "q10_follow_everything",
        "strategy": "accommodate",
        "strategyLabel": "全部顺着TA",
        "text": "靠近TA，说“都按你想要的来”，却把自己对排他、公开和联系的需要藏起来。",
        "effects": {
          "attraction": 20,
          "trust": -20,
          "comfort": 0,
          "conflict": 10
        },
        "npcResponse": "TA 显然被这句靠近打动了，随即又皱起眉：“可这不是你的答案。你到底想要什么？”",
        "feedbackIds": [
          "attraction_up_strong",
          "trust_down_strong"
        ],
        "feedbackText": [
          "这句毫无保留的靠近让 TA 很心动。",
          "可你藏起来的那部分，让 TA 不敢相信这份答应。"
        ]
      },
      {
        "id": "q10_test_by_disappearing",
        "strategy": "risky",
        "strategyLabel": "用消失测试感情",
        "text": "不回答这些问题，提议彼此消失两天，看谁先忍不住联系，用这个判断感情有多深。",
        "effects": {
          "attraction": 0,
          "trust": -20,
          "comfort": -10,
          "conflict": 20
        },
        "npcResponse": "TA 盯着你看了几秒：“我不会参加。你不确定可以直说，别拿失踪考我。”",
        "feedbackIds": [
          "trust_down_strong",
          "conflict_up_strong"
        ],
        "feedbackText": [
          "TA 不再相信你愿意直接面对这段关系。",
          "刚才还靠近的气氛一下冷了下来。"
        ]
      }
    ]
  }
];

export const questions = entjQuestions;
