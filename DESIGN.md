---
name: Love with MBTI
description: 以温暖纸张记录十次关系选择的文字互动游戏
colors:
  paper: "#f3efe4"
  paper-deep: "#eae3d3"
  canvas: "#d8d2c3"
  pine-ink: "#1c2b2a"
  ink-muted: "#5f6762"
  terracotta: "#b9603e"
  terracotta-deep: "#8f432d"
  muted-teal: "#6f958b"
  teal-deep: "#365f57"
  focus-blue: "#155f8a"
typography:
  display:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(3rem, 11vw, 6.2rem)"
    fontWeight: 950
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(1.35rem, 4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.55
  body:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "12px"
  surface: "14px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "44px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#fffaf0"
    rounded: "{rounded.control}"
    padding: "13px 24px"
    height: "52px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.teal-deep}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
    height: "52px"
  event-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.surface}"
---

# Design System: Love with MBTI

## Overview

**Creative North Star: "关系事件记录单"**

界面像一张可以被翻阅、批注和盖章的关系桌游记录单：温暖纤维纸承载全部页面，松墨黑负责叙事，陶土橙标记选择与进展，灰青绿表达较平静的关系变化。它保留参考界面的信息结构，但不沿用深色 Boss 挑战卡语言。

密度随叙事层级变化：状态区紧凑，场景与 TA 原话更舒展，选项保持连续而可扫描。纸张纹理与轻微裁切用于建立世界感，不能牺牲正文对比度。

**Key Characteristics:**

- 单一主纸面贯穿选择、题目、反馈和结局。
- 2×2 四维关系条始终作为一组出现；过程定性，结局定量。
- 陶土橙表示行动和吸引，灰青绿表示信任与舒适。
- 细边线、虚线分隔和克制阴影模拟记录单而非通用仪表盘。

## Colors

配色以纸张中性色为底，只使用两种低饱和强调色。

### Primary

- **陶土印泥**：用于主按钮、当前阶段、吸引条和印章，承担行动与结果确认。
- **深陶土**：用于主色的边框、悬停和需要更强对比的文本。

### Secondary

- **灰青记录墨**：用于信任、舒适进度和辅助状态。
- **深松石墨**：用于场景条、反馈选择块、次按钮文本和主要绿色表面。

### Neutral

- **纤维纸白**：主页面和大部分内容表面。
- **旧纸米色**：引语纸条和更深一层的纸面。
- **松墨黑**：标题、正文和结构线的基准色。
- **褪色墨灰**：解释、标签和免责声明。

**The Two-Ink Rule.** 一个组件最多使用陶土与灰青中的一种作为主强调；不要让两种强调色竞争同一操作。

## Typography

**Display Font:** 系统中文无衬线栈
**Body Font:** 系统中文无衬线栈

**Character:** 通过极粗标题、紧字距和舒展正文形成“印刷标题 + 手册正文”的对比；当前构建没有自托管品牌字体。

### Hierarchy

- **Display**：仅用于类型代号和结局名称，极粗、紧凑。
- **Headline**：用于 TA 原话和反馈反应，字重高于正文但保留足够行距。
- **Body**：场景、选项和说明文本，中文行高约 1.7–1.8。
- **Label**：关系事件、阶段与状态提示，小字号高字重，必要时增加字距。

**The Narrative First Rule.** 场景与 TA 原话的字号必须高于状态解释，四维数据不能抢过叙事主线。

## Layout

主纸面最大宽度为 860px，桌面居中并显露外层纸色；手机宽度下占满视口。页面水平内边距使用 `clamp(22px, 6vw, 54px)`。四阶段横向排列，四维关系条在所有支持宽度保持 2×2；类型选择网格从四列降为三列，再在 390px 降为两列。

主要垂直节奏由 12、18、24 和 44px 组成。长叙事不使用多栏；选项始终单列，保证选择顺序清楚。

## Elevation & Depth

系统默认平坦，以纸色差、边线和纹理分层。主纸面使用一层环境阴影；引语纸条和主按钮允许较浅的局部阴影，其他容器不堆叠卡片阴影。

### Shadow Vocabulary

- **主纸面环境影** (`0 18px 48px rgba(28, 43, 42, 0.18)`)：只用于页面与外层画布分离。
- **操作提起影** (`0 8px 20px rgba(143, 67, 45, 0.2)`)：只用于主按钮。
- **纸条投影** (`0 12px 22px rgba(28, 43, 42, 0.16)`)：只用于独立引语纸条。

**The Flat Record Rule.** 普通信息容器通过 1px 线框分组，不为每块内容增加悬浮阴影。

## Shapes

控件采用 12px 圆角，主要容器采用 14px 圆角，进度条使用完整胶囊圆角。圆角只负责易用性；事件纸条可使用轻微不规则 `clip-path`，但正文和点击目标保持规则边界。

## Components

### Buttons

- **Primary:** 陶土底、浅纸色文字、52px 最小高度；悬停转深陶土。
- **Secondary:** 透明纸面、深青描边和文字；悬停仅增加淡青底色。
- **Text:** 无边框，用于返回类型选择等低优先动作。
- **Focus:** 所有按钮使用 3px 蓝色可见轮廓和 3px 外偏移。

### Cards / Containers

- **事件单:** 场景条使用深青底，TA 原话落在浅纸条上，四个回应连续排列。
- **反馈单:** 选择摘要为深青实底，TA 反应保持大号文本，变化原因以虚线分隔。
- **结局单:** 标题与印章优先，TA 结语独立成纸条，精确四维与原因说明分为两个线框区域。

### Navigation

页头固定为居中产品名与左侧返回；手机端隐藏返回文字但保留 44px 点击目标和无障碍名称。

### Relation Meters

过程页使用定性短语而不显示数值；结局页使用 `x / 100` 和原生进度语义。冲突项必须同时出现“越低越平静”，不允许仅靠颜色表达好坏。

## Do's and Don'ts

### Do:

- **Do** 保持四维关系条为 2×2，并在每项下方解释方向。
- **Do** 先呈现场景和 TA 原话，再让用户读取选项。
- **Do** 用细线、虚线和纸色差建立层级，保持正文高对比。
- **Do** 为键盘焦点、禁用状态和减少动态偏好提供明确处理。

### Don't:

- **Don't** 在答题过程中显示精确四维数字。
- **Don't** 引入深色霓虹挑战卡、排名或未经证实的胜率数据。
- **Don't** 把所有信息都做成独立阴影卡片。
- **Don't** 用图标代替“吸引、信任、舒适、冲突”的文字标签。

