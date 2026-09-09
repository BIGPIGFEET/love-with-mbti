import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App.tsx";

describe("Love with MBTI primary flow", () => {
  it("starts an ENTP game and moves from a choice to feedback", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ENTP" }));
    expect(
      screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题"),
    ).toBeInTheDocument();
    expect(screen.getByText(/附近有家刚开的小店/)).toBeInTheDocument();
    expect(screen.queryByText("25 / 100")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先打个电话问问/ }));
    expect(screen.getByText("TA 的反应")).toBeInTheDocument();
    expect(screen.getByText(/你负责兜底/)).toBeInTheDocument();
  });

  it("starts the migrated INTP game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 INTP" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/如果今天的记忆可以剪掉十分钟/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INTP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /盐当糖/ }));
    expect(screen.getByText(/保留证据/)).toBeInTheDocument();
  });

  it("starts the balanced INFP game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 INFP" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/冷门小说/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INFP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /我没读过/ }));
    expect(screen.getByText(/只讲这一段/)).toBeInTheDocument();
  });

  it("starts the balanced ISFP game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ISFP" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/小型手作展/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ISFP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /进去看那一件/ }));
    expect(screen.getByText(/你不喜欢也可以直接说/)).toBeInTheDocument();
  });

  it("starts the balanced INTJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 INTJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末开放的夜间展/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /各给一个方案一起选/ }));
    expect(screen.getByText(/两个人的计划/)).toBeInTheDocument();
  });

  it("starts the balanced ENTJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ENTJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/ENTJ 是不是都自带老板气场/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ENTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /承认自己把四个字母说得太满/ }));
    expect(screen.getByText(/从自己特别容易迷路说起/)).toBeInTheDocument();
  });

  it("starts the balanced ESTJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ESTJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末的城市寻宝体验/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ESTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先接下自己愿意做的部分/ }));
    expect(screen.getByText(/这样才算真的分好/)).toBeInTheDocument();
  });

  it("starts the balanced INFJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 INFJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/第一次见面的书店咖啡区/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 INFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /愿意分享的联想/ }));
    expect(screen.getByText(/这一层就很好/)).toBeInTheDocument();
  });

  it("starts the balanced ENFP game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ENFP" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周五晚的小型主题聚会上/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ENFP/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先说想听完大家这段/ }));
    expect(screen.getByText(/等这段收住我再来找你/)).toBeInTheDocument();
  });

  it("starts the balanced ENFJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ENFJ" }));
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

  it("starts the balanced ESFJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ESFJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/周末活动散场时突然下起大雨/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ESFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /一起撑到前面的路口/ }));
    expect(screen.getByText(/这样你不会淋太久/)).toBeInTheDocument();
  });

  it("starts the balanced ISFJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ISFJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/朋友组织的桌游局/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ISFJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /先在这张小桌继续聊/ }));
    expect(screen.getByText(/安静一会儿也算一起待着/)).toBeInTheDocument();
  });

  it("starts the balanced ISTJ game with its own formal content", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "开始认识 ISTJ" }));
    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/列出周六下午和周日上午两个时段/)).toBeInTheDocument();
    expect(screen.getByText(/不代表现实中的所有 ISTJ/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /把排队的店换成附近另一家/ }));
    expect(screen.getByText(/两边的限制都写进去了/)).toBeInTheDocument();
  });

  it("returns to the type selector from the question screen", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "开始认识 ENTP" }));
    fireEvent.click(screen.getByRole("button", { name: "返回类型选择" }));
    expect(screen.getByRole("heading", { name: "你想先认识哪一种人？" })).toBeInTheDocument();
  });

  it("resets the run when switching from ENTP to INTP", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "开始认识 ENTP" }));
    fireEvent.click(screen.getByRole("button", { name: /先打个电话问问/ }));
    fireEvent.click(screen.getByRole("button", { name: "返回类型选择" }));
    fireEvent.click(screen.getByRole("button", { name: "开始认识 INTP" }));

    expect(screen.getByLabelText("当前阶段：初识，第 1 题，共 10 题")).toBeInTheDocument();
    expect(screen.getByText(/如果今天的记忆可以剪掉十分钟/)).toBeInTheDocument();
    expect(screen.queryByText(/附近有家刚开的小店/)).not.toBeInTheDocument();
  });

  it("disables smooth scrolling when reduced motion is requested", () => {
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
