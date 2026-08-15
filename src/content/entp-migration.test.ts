import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { applyEffects, endingResultKey, INITIAL_STATE, resolveEnding } from "../game/rules.ts";
import { questions } from "./questions.ts";

interface SavedEnding {
  trajectories: number;
  weightedPaths: number;
  examplePath: string[];
  exampleState: Record<string, number>;
}

interface SavedReport {
  completeChoiceSpace: number;
  terminalTrajectories: number;
  earlyTerminalTrajectories: number;
  weightedTotal: number;
  endings: Record<string, SavedEnding>;
}

function enumerateFormalEntpData() {
  const endings = new Map<string, SavedEnding>();
  let terminalTrajectories = 0;
  let earlyTerminalTrajectories = 0;

  function visit(questionIndex: number, state: typeof INITIAL_STATE, path: string[]): void {
    const question = questions[questionIndex];
    question.options.forEach((option) => {
      const nextState = applyEffects(state, option.effects);
      const nextPath = [...path, option.id];
      const result = resolveEnding(question.order, nextState);
      if (result) {
        const key = endingResultKey(result);
        const current = endings.get(key) ?? {
          trajectories: 0,
          weightedPaths: 0,
          examplePath: nextPath,
          exampleState: nextState,
        };
        current.trajectories += 1;
        current.weightedPaths += 4 ** (questions.length - questionIndex - 1);
        endings.set(key, current);
        terminalTrajectories += 1;
        if (questionIndex < questions.length - 1) earlyTerminalTrajectories += 1;
        return;
      }
      visit(questionIndex + 1, nextState, nextPath);
    });
  }

  visit(0, { ...INITIAL_STATE }, []);
  return {
    terminalTrajectories,
    earlyTerminalTrajectories,
    endings: Object.fromEntries([...endings.entries()].sort(([a], [b]) => a.localeCompare(b))),
  };
}

describe("ENTP formal data migration", () => {
  it("preserves the approved exhaustive path report", () => {
    const reportPath = resolve(process.cwd(), "content/questions/balance-report.json");
    const saved = JSON.parse(readFileSync(reportPath, "utf8")) as SavedReport;
    const actual = enumerateFormalEntpData();

    expect(4 ** questions.length).toBe(saved.completeChoiceSpace);
    expect(saved.weightedTotal).toBe(saved.completeChoiceSpace);
    expect(actual.terminalTrajectories).toBe(saved.terminalTrajectories);
    expect(actual.earlyTerminalTrajectories).toBe(saved.earlyTerminalTrajectories);
    expect(actual.endings).toEqual(saved.endings);
  });
});
