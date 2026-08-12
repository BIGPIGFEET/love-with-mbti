import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { intpQuestions } from "./intp-questions.ts";
import { intpEndings, intpFuzzyFeedback, intpRelationshipEvaluations } from "./intp-endings.ts";
import { validateContent } from "./schema.ts";
import { applyEffects, endingResultKey, INITIAL_STATE, resolveEnding } from "../game/rules.ts";

interface SavedEnding {
  trajectories: number;
  weightedPaths: number;
  examplePath: string[];
  exampleState: Record<string, number>;
}

interface SavedReport {
  completeChoiceSpace: number;
  terminalTrajectories: number;
  weightedTotal: number;
  endings: Record<string, SavedEnding>;
}

function enumerateFormalIntpData() {
  const endings = new Map<string, SavedEnding>();
  let terminalTrajectories = 0;

  function visit(questionIndex: number, state: typeof INITIAL_STATE, path: string[]): void {
    const question = intpQuestions[questionIndex];
    question.options.forEach((option) => {
      const nextState = applyEffects(state, option.effects);
      const nextPath = [...path, option.id];
      const result = resolveEnding(question.order, option, nextState);
      if (result) {
        const key = endingResultKey(result);
        const current = endings.get(key) ?? {
          trajectories: 0,
          weightedPaths: 0,
          examplePath: nextPath,
          exampleState: nextState,
        };
        current.trajectories += 1;
        current.weightedPaths += 4 ** (intpQuestions.length - questionIndex - 1);
        endings.set(key, current);
        if (questionIndex < intpQuestions.length - 1) terminalTrajectories += 1;
        return;
      }
      visit(questionIndex + 1, nextState, nextPath);
    });
  }

  visit(0, { ...INITIAL_STATE }, []);
  return {
    terminalTrajectories,
    endings: Object.fromEntries([...endings.entries()].sort(([a], [b]) => a.localeCompare(b))),
  };
}

describe("INTP formal data migration", () => {
  it("passes the shared runtime content validator", () => {
    expect(() =>
      validateContent({
        questions: intpQuestions,
        endings: intpEndings,
        relationshipEvaluations: intpRelationshipEvaluations,
        fuzzyFeedback: intpFuzzyFeedback,
      }),
    ).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const reportPath = resolve(process.cwd(), "content/questions/intp-balance-report.json");
    const saved = JSON.parse(readFileSync(reportPath, "utf8")) as SavedReport;
    const actual = enumerateFormalIntpData();

    expect(4 ** intpQuestions.length).toBe(saved.completeChoiceSpace);
    expect(saved.weightedTotal).toBe(saved.completeChoiceSpace);
    expect(actual.terminalTrajectories).toBe(saved.terminalTrajectories);
    expect(actual.endings).toEqual(saved.endings);
  });
});
