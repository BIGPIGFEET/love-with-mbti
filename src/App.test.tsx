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
