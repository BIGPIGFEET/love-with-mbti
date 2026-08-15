import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { applyEffects, endingResultKey, INITIAL_STATE, resolveEnding } from "../game/rules.ts";
import { infpEndings, infpFuzzyFeedback, infpRelationshipEvaluations } from "./infp-endings.ts";
import { infpQuestions } from "./infp-questions.ts";
import { validateContent } from "./schema.ts";

interface BalanceReport {
  completeChoiceSpace: number;
  baseline: {
    terminalTrajectories: number;
    earlyTerminalTrajectories: number;
  };
  balanced: {
    terminalTrajectories: number;
    earlyTerminalTrajectories: number;
    weightedPathPercentages: Record<string, number>;
  };
  examplePaths: Record<string, string[]>;
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(resolve(process.cwd(), path), "utf8"));
}

function enumerateInfpData() {
  const outcomes = new Map<string, { weightedPaths: number; examplePath: string[] }>();
  let terminalTrajectories = 0;
  let earlyTerminalTrajectories = 0;

  function visit(questionIndex: number, state: typeof INITIAL_STATE, path: string[]): void {
    const question = infpQuestions[questionIndex];
    question.options.forEach((option) => {
      const nextState = applyEffects(state, option.effects);
      const nextPath = [...path, option.id];
      const result = resolveEnding(question.order, nextState);

      if (result) {
        const key = endingResultKey(result);
        const current = outcomes.get(key) ?? { weightedPaths: 0, examplePath: nextPath };
        current.weightedPaths += 4 ** (infpQuestions.length - questionIndex - 1);
        outcomes.set(key, current);
        terminalTrajectories += 1;
        if (questionIndex < infpQuestions.length - 1) earlyTerminalTrajectories += 1;
        return;
      }

      visit(questionIndex + 1, nextState, nextPath);
    });
  }

  visit(0, { ...INITIAL_STATE }, []);
  const completeChoiceSpace = 4 ** infpQuestions.length;
  return {
    terminalTrajectories,
    earlyTerminalTrajectories,
    weightedPathPercentages: Object.fromEntries(
      [...outcomes.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => [key, Number(((value.weightedPaths / completeChoiceSpace) * 100).toFixed(3))]),
    ),
    examplePaths: Object.fromEntries(
      [...outcomes.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => [key, value.examplePath]),
    ),
  };
}

describe("INFP formal data migration", () => {
  it("projects the approved question and ending drafts without copy drift", () => {
    const questionDraft = readJson("content/questions/infp-ten-question-draft.json");
    const endingDraft = readJson("content/endings/infp-ending-content-draft.json") as {
      endings: unknown;
      relationshipEvaluations: unknown;
      fuzzyFeedback: unknown;
    };

    expect(infpQuestions).toEqual(questionDraft);
    expect(infpEndings).toEqual(endingDraft.endings);
    expect(infpRelationshipEvaluations).toEqual(endingDraft.relationshipEvaluations);
    expect(infpFuzzyFeedback).toEqual(endingDraft.fuzzyFeedback);
    expect(() =>
      validateContent({
        questions: infpQuestions,
        endings: infpEndings,
        relationshipEvaluations: infpRelationshipEvaluations,
        fuzzyFeedback: infpFuzzyFeedback,
      }),
    ).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const report = readJson("content/questions/infp-balance-report.json") as BalanceReport;
    const actual = enumerateInfpData();

    expect(4 ** infpQuestions.length).toBe(report.completeChoiceSpace);
    expect(actual.terminalTrajectories).toBe(report.balanced.terminalTrajectories);
    expect(actual.earlyTerminalTrajectories).toBe(report.balanced.earlyTerminalTrajectories);
    expect(actual.weightedPathPercentages).toEqual(report.balanced.weightedPathPercentages);
    expect(actual.examplePaths).toEqual(report.examplePaths);
  });
});
