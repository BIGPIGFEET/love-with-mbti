import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

import { applyEffects, endingResultKey, INITIAL_STATE, resolveEnding } from "../game/rules.ts";
import { isfpEndings, isfpFuzzyFeedback, isfpRelationshipEvaluations } from "./isfp-endings.ts";
import { isfpQuestions } from "./isfp-questions.ts";
import { validateContent } from "./schema.ts";

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
  fixedPositions: Array<{
    position: number;
    ending: string;
    path: string[];
  }>;
}

function enumerateIsfpData() {
  const endings = new Map<string, SavedEnding>();
  let terminalTrajectories = 0;
  let earlyTerminalTrajectories = 0;

  function visit(questionIndex: number, state: typeof INITIAL_STATE, path: string[]): void {
    const question = isfpQuestions[questionIndex];
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
        current.weightedPaths += 4 ** (isfpQuestions.length - questionIndex - 1);
        endings.set(key, current);
        terminalTrajectories += 1;
        if (questionIndex < isfpQuestions.length - 1) earlyTerminalTrajectories += 1;
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

describe("ISFP production content", () => {
  it("validates the inline TypeScript content", () => {
    expect(() =>
      validateContent({
        questions: isfpQuestions,
        endings: isfpEndings,
        relationshipEvaluations: isfpRelationshipEvaluations,
        fuzzyFeedback: isfpFuzzyFeedback,
      }),
    ).not.toThrow();
  });

  it("preserves the approved exhaustive path report and every analyzer diagnostic", () => {
    const saved = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/isfp-balance-report.json"), "utf8"),
    ) as SavedReport;
    const actual = enumerateIsfpData();

    expect(4 ** isfpQuestions.length).toBe(saved.completeChoiceSpace);
    expect(saved.weightedTotal).toBe(saved.completeChoiceSpace);
    expect(actual.terminalTrajectories).toBe(saved.terminalTrajectories);
    expect(actual.earlyTerminalTrajectories).toBe(saved.earlyTerminalTrajectories);
    expect(actual.endings).toEqual(saved.endings);

    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        "scripts/isfp-choice-paths-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );
    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.fixedPositions.map(({ ending }) => ending)).toEqual([
      "friends",
      "stay_acquaintances",
      "strangers_after_all",
      "unresolved_ambiguity",
    ]);
    expect(saved.fixedPositions.filter(({ path }) => path.length === 10)).toHaveLength(3);
    expect(saved.fixedPositions.some(({ ending }) => ending.startsWith("confirmed_relationship"))).toBe(false);
  });

  it("passes the repository content and traceability validators", () => {
    expect(() =>
      execFileSync(process.execPath, ["scripts/validate-content.mjs"], {
        cwd: process.cwd(),
        encoding: "utf8",
      }),
    ).not.toThrow();

    const traceabilityOutput = execFileSync(
      process.execPath,
      ["scripts/validate-question-traceability.mjs"],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(traceabilityOutput)).toMatchObject({
      valid: true,
      questions: 10,
      traceabilityRecords: 10,
      formalScenes: 10,
    });
  });
});
