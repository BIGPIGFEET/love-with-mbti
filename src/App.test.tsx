import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App.tsx";
import * as contentLoader from "./content/load-pack.ts";
import type { AvailableMbtiType, ContentPack } from "./content/content-pack.ts";

async function startGame(type: AvailableMbtiType) {
  fireEvent.click(screen.getByRole("button", { name: `开始认识 ${type}` }));
  await screen.findByLabelText("当前阶段：初识，第 1 题，共 10 题");
}

describe("Love with MBTI primary flow", () => {
  it("shows loading, prevents duplicate starts, and allows retry after failure", async () => {
    let rejectLoad!: (reason: Error) => void;
    const pendingLoad = new Promise<ContentPack>((_resolve, reject) => { rejectLoad = reject; });
    const load = vi.spyOn(contentLoader, "loadContentPack").mockReturnValueOnce(pendingLoad);

    try {
      render(<App />);
      fireEvent.click(screen.getByRole("button", { name: "开始认识 ENTP" }));
      expect(screen.getByRole("status")).toHaveTextContent("正在加载 ENTP");
      expect(screen.getByRole("button", { name: "正在加载 ENTP…" })).toBeDisabled();
      expect(screen.getByRole("button", { name: "开始认识 INTP" })).toBeDisabled();
      expect(load).toHaveBeenCalledTimes(1);

      await act(async () => { rejectLoad(new Error("Network unavailable")); });
      expect(screen.getByRole("alert")).toHaveTextContent("故事加载失败");
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
      expect(screen.getByRole("button", { name: "开始认识 ENTP" })).toBeEnabled();

      await startGame("ENTP");
      expect(screen.getByText(/附近有家刚开的小店/)).toBeInTheDocument();
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    } finally {
      load.mockRestore();
    }
  });

  it("finishes ten real questions, shows the ending, and resets on restart", async () => {
    render(<App />);
    await startGame("ENTP");

    const choices = [0, 0, 0, 1, 0, 0, 0, 0, 2, 0];
    choices.forEach((choice, index) => {
      expect(screen.getByLabelText(new RegExp(`第 ${index + 1} 题，共 10 题`))).toBeInTheDocument();
      fireEvent.click(within(screen.getByRole("group")).getAllByRole("button")[choice]);
      expect(screen.getByText("TA 的反应")).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: index === 9 ? "查看结局" : "继续下一题" }));
    });

    expect(screen.getByText("ENTP · 完成十题")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("恋爱正式开场");
    expect(screen.getByText("热恋背有隐患")).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "吸引 90 / 100，越高越有火花" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "信任 65 / 100，越高越放心" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重新挑战" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "吸引：有些兴趣，越高越有火花" })).toHaveStyle({ "--meter-scale": "0.25" });
    expect(screen.getByRole("img", { name: "信任：开始相信，越高越放心" })).toHaveStyle({ "--meter-scale": "0.25" });
    expect(screen.getByRole("img", { name: "舒适：稍有拘谨，越高越自在" })).toHaveStyle({ "--meter-scale": "0.25" });
    expect(screen.getByRole("img", { name: "冲突：气氛平静，越低越平静" })).toHaveStyle({ "--meter-scale": "0.1" });
  });

  it("ends after the second question and returns to the type selector", async () => {
    render(<App />);
    await startGame("ENTP");
    fireEvent.click(screen.getByRole("button", { name: /走啊，关门了就当散步/ }));
    fireEvent.click(screen.getByRole("button", { name: "继续下一题" }));
    fireEvent.click(within(screen.getByRole("group")).getAllByRole("button")[2]);
    fireEvent.click(screen.getByRole("button", { name: "查看结局" }));

    expect(screen.getByText("ENTP · 第 2 题后结束")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("没有第二次约会");
    expect(screen.queryByText("继续下一题")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "重新挑战" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /先打个电话问问/ }));
    fireEvent.click(screen.getByRole("button", { name: "继续下一题" }));
    expect(screen.getByLabelText("当前阶段：初识，第 2 题，共 10 题")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button", { name: "返回类型选择" })[0]);
    expect(screen.getByRole("heading", { name: "你想先认识哪一种人？" })).toBeInTheDocument();
    await startGame("INTP");
    expect(screen.getByText(/如果今天的记忆可以剪掉十分钟/)).toBeInTheDocument();
  });

  it("starts an ENTP game and moves from a choice to feedback", async () => {
    render(<App />);

    await startGame("ENTP");
    expect(
      screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题"),
    ).toBeInTheDocument();
    expect(screen.getByText(/附近有家刚开的小店/)).toBeInTheDocument();
    expect(screen.queryByText("25 / 100")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先打个电话问问/ }));
    expect(screen.getByText("TA 的反应")).toBeInTheDocument();
    expect(screen.getByText(/你负责兜底/)).toBeInTheDocument();
  });

  it("starts the migrated INTP game with its own formal content", async () => {
    render(<App />);

    await startGame("INTP");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/如果今天的记忆可以剪掉十分钟/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INTP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /盐当糖/ }));
    expect(screen.getByText(/保留证据/)).toBeInTheDocument();
  });

  it("starts the balanced INFP game with its own formal content", async () => {
    render(<App />);

    await startGame("INFP");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/冷门小说/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INFP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /我没读过/ }));
    expect(screen.getByText(/只讲这一段/)).toBeInTheDocument();
  });

  it("starts the balanced ISFP game with its own formal content", async () => {
    render(<App />);

    await startGame("ISFP");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/小型手作展/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ISFP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /进去看那一件/ }));
    expect(screen.getByText(/你不喜欢也可以直接说/)).toBeInTheDocument();
  });

  it("starts the balanced INTJ game with its own formal content", async () => {
    render(<App />);

    await startGame("INTJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末开放的夜间展/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /各给一个方案一起选/ }));
    expect(screen.getByText(/两个人的计划/)).toBeInTheDocument();
  });

  it("starts the balanced ENTJ game with its own formal content", async () => {
    render(<App />);

    await startGame("ENTJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/ENTJ 是不是都自带老板气场/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ENTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /承认自己把四个字母说得太满/ }));
    expect(screen.getByText(/从自己特别容易迷路说起/)).toBeInTheDocument();
  });

  it("starts the balanced ESTJ game with its own formal content", async () => {
    render(<App />);

    await startGame("ESTJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末的城市寻宝体验/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ESTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先接下自己愿意做的部分/ }));
    expect(screen.getByText(/这样才算真的分好/)).toBeInTheDocument();
  });

  it("starts the balanced ESTP game with its own formal content", async () => {
    render(<App />);

    await startGame("ESTP");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周六下午，你们第一次单独见面/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ESTP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先说好预算和最晚回去的时间/ }));
    expect(screen.getByText(/按你的时间来/)).toBeInTheDocument();
  });

  it("starts the balanced INFJ game with its own formal content", async () => {
    render(<App />);

    await startGame("INFJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/第一次见面的书店咖啡区/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /愿意分享的联想/ }));
    expect(screen.getByText(/这一层就很好/)).toBeInTheDocument();
  });

  it("starts the balanced ENFP game with its own formal content", async () => {
    render(<App />);

    await startGame("ENFP");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周五晚的小型主题聚会上/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ENFP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先说想听完大家这段/ }));
    expect(screen.getByText(/等这段收住我再来找你/)).toBeInTheDocument();
  });

  it("starts the balanced ENFJ game with its own formal content", async () => {
    render(<App />);

    await startGame("ENFJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末的桌游体验局/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ENFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先回应自己最有把握的一点/ }));
    expect(screen.getByText(/自然地把选择留给了旁边的人/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "继续下一题" }));
    expect(screen.getByText(/正在犹豫要不要报名一项持续数月的课程/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /今晚只想把顾虑说完/ }));
    fireEvent.click(screen.getByRole("button", { name: "继续下一题" }));

    expect(screen.getByLabelText("当前阶段：接触，第 3 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/我不是在催你给答案/)).toBeInTheDocument();
    expect(screen.getByText(/这不自动代表排他或长期承诺/)).toBeInTheDocument();
  });

  it("starts the balanced ESFJ game with its own formal content", async () => {
    render(<App />);

    await startGame("ESFJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末活动散场时突然下起大雨/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ESFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /一起撑到前面的路口/ }));
    expect(screen.getByText(/这样你不会淋太久/)).toBeInTheDocument();
  });

  it("starts the balanced ISFJ game with its own formal content", async () => {
    render(<App />);

    await startGame("ISFJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/朋友组织的桌游局/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ISFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先在这张小桌继续聊/ }));
    expect(screen.getByText(/安静一会儿也算一起待着/)).toBeInTheDocument();
  });

  it("starts the balanced ISTJ game with its own formal content", async () => {
    render(<App />);

    await startGame("ISTJ");
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/列出周六下午和周日上午两个时段/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ISTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /把排队的店换成附近另一家/ }));
    expect(screen.getByText(/两边的限制都写进去了/)).toBeInTheDocument();
  });

  it("returns to the type selector from the question screen", async () => {
    render(<App />);
    await startGame("ENTP");
    fireEvent.click(screen.getByRole("button", { name: "返回类型选择" }));
    expect(screen.getByRole("heading", { name: "你想先认识哪一种人？" })).toBeInTheDocument();
  });

  it("resets the run when switching from ENTP to INTP", async () => {
    render(<App />);
    await startGame("ENTP");
    fireEvent.click(screen.getByRole("button", { name: /先打个电话问问/ }));
    fireEvent.click(screen.getByRole("button", { name: "返回类型选择" }));
    await startGame("INTP");

    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/如果今天的记忆可以剪掉十分钟/)).toBeInTheDocument();
    expect(screen.queryByText(/附近有家刚开的小店/)).not.toBeInTheDocument();
  });

  it("disables smooth scrolling when reduced motion is requested", async () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    render(<App />);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "auto" });
  });
});
