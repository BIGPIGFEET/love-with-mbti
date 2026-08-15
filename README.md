# Love with MBTI

一款面向熟悉 MBTI 的年轻用户的网页文字小游戏。玩家可以选择 ENTP、INTP 或 INFP 模拟对象，通过十道带有冲突和取舍的题目，观察双方能否从初识走向暧昧或恋爱。

MBTI 在本项目中是传播入口和角色标签，不是心理诊断工具。游戏核心是：面对鲜明且带有戏剧性的相处模式，玩家如何选择，以及这些选择如何改变双方关系。

## 当前状态

当前代码版本为 `v0.1.0`。截至 2026-08-15，ENTP、INTP 与 INFP 三套十题内容均已接入网页，并共用关系数值、阶段门槛和结局判定规则。

在线版本（以实际部署内容为准）：[https://mbti.muzichengshan.dpdns.org/](https://mbti.muzichengshan.dpdns.org/)

当前实现包含 React + Vite 网页、类型选择、ENTP/INTP/INFP 各固定十题、正式 TypeScript 内容包、全路径平衡验证和“关系事件记录单”纸张视觉，不包含账号、排行榜、角色立绘、音效或付费功能。其余 13 种类型仍在内容研究与平衡阶段。

当前工作区已通过 TypeScript 检查、53 项自动化测试、内容结构校验、ENTP/INTP/INFP 各 `4^10` 条完整选择路径分析和生产构建。内容校验仍会报告少量“单选项数值总变化超过建议值”的平衡警告；这些警告不阻塞运行，后续需结合叙事和试玩继续复核。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器启动后访问终端显示的本地地址（通常是 `http://127.0.0.1:5173`）。

## 检查、测试与构建

```bash
npm run check
npm test -- --run
node scripts/validate-content.mjs
node scripts/analyze-question-paths.mjs
npm run build
```

生产构建输出位于 `dist/`。

## 可复现演示路径

以下选项位置可完成十题并进入“确认恋爱 / 稳定发展”结局：

```text
ENTP：C → B → D → B → D → D → A → A → C → C
INTP：A → A → A → A → A → A → A → A → A → D
INFP：A → A → A → A → A → A → A → A → B → D
```

预期最终数值：

- ENTP：吸引 100、信任 100、舒适 100、冲突 0。
- INTP：吸引 90、信任 80、舒适 70、冲突 10。
- INFP：吸引 90、信任 95、舒适 95、冲突 0。

## 文档导航

- [第一版 TODO](TODO.md)：ENTP 最小可玩示例的逐步任务清单与验收标准。
- [产品定义](docs/01-product-definition.md)：定位、用户、体验流程、范围与非目标。
- [核心规则](docs/02-core-rules.md)：四维关系状态、阶段门槛、中途结束与最终结局。
- [内容设计规范](docs/03-content-guidelines.md)：角色、题目、选项、反馈和数据格式。
- [ENTP 数据收集计划](docs/04-entp-research-plan.md)：网络信息收集方法与研究产物。
- [MVP 路线图](docs/05-mvp-roadmap.md)：从研究、写题到开发和测试的执行顺序。
- [内容包注册表](src/content/packs.ts)：统一注册当前开放的 ENTP、INTP 与 INFP 内容包。
- [ENTP 正式题目数据](src/content/questions.ts)、[INTP 正式题目数据](src/content/intp-questions.ts) 与 [INFP 正式题目数据](src/content/infp-questions.ts)：网页、测试和路径分析共用的正式数据源。
- [ENTP 正式结局数据](src/content/endings.ts)、[INTP 正式结局数据](src/content/intp-endings.ts) 与 [INFP 正式结局数据](src/content/infp-endings.ts)：中途结局、最终结局、恋爱评价和模糊提示。
- [游戏规则模块](src/game/rules.ts)：四维结算、阶段门槛和结局优先级。
- [ENTP 平衡报告](content/questions/balance-report.md)、[INTP 平衡报告](content/questions/intp-balance-report.md) 与 [INFP 平衡报告](content/questions/infp-balance-report.md)：完整路径枚举、结局覆盖与数值警告。
- [设计系统](DESIGN.md)：关系事件记录单的颜色、排版、布局和组件规则。

## 已确认的核心范围

- 载体：网页小游戏。
- 单局时长：约 10 分钟。
- 单局题量：最多 10 题，允许中途结束。
- 当前开放类型：ENTP、INTP、INFP；其余类型筹备中。
- 关系状态：吸引、信任、舒适、冲突。
- 答题阶段：初识、接触、熟悉、暧昧；相恋只作为结局。
- 选项：每题固定 4 个；同一角色、同一题目、同一选项的数值影响固定。
- 表现：显示模糊进度条和模糊提示，结局页显示准确数值。
- 角色：使用“TA”或“对方”，不设置姓名、性别、取向、职业、立绘和个人经历。
- 基调：清新简约、带黑色幽默、有挑战性，以娱乐为主并提供少量相处启发。
- 商业模式：第一版免费传播。
- 玩家自身 MBTI 的填写、统计与排名均列入后续 TODO，当前不提供入口。

## 重要原则

1. 角色表现来自网络流行刻板印象的整理与创作，不代表现实中的所有 ENTP、INTP、INFP 或其他人格类型。
2. 每道题必须包含真实的价值取舍或关系冲突，不能只是换皮问卷。
3. 不设置永远正确的处理策略；同一策略对不同 MBTI、不同场景的影响可以不同。
4. 数值用于支撑剧情反馈，不替代剧情本身。
5. 当前阶段先验证“每种类型的十题能否形成有趣、可理解、愿意分享的关系体验”，暂不追求完整的 16 型覆盖。
