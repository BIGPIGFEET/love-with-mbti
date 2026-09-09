import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { contentPacks } from "./packs.ts";
import {
  istjEndings,
  istjFuzzyFeedback,
  istjRelationshipEvaluations,
} from "./istj-endings.ts";
import { istjQuestions } from "./istj-questions.ts";
import { validateContent } from "./schema.ts";

describe("ISTJ production content", () => {
  it("registers the balanced inline content in the website content pack", () => {
    expect(contentPacks.ISTJ).toMatchObject({
      type: "ISTJ",
      questions: istjQuestions,
      endings: istjEndings,
      relationshipEvaluations: istjRelationshipEvaluations,
      fuzzyFeedback: istjFuzzyFeedback,
    });
    expect(() => validateContent(contentPacks.ISTJ)).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const saved = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/istj-balance-report.json"), "utf8"),
    );
    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        ".codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-istj-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.completeChoiceSpace).toBe(1_048_576);
    expect(saved.weightedTotal).toBe(1_048_576);
    expect(saved.coverage.endings.missing).toEqual([]);
    expect(saved.coverage.outcomes.missing).toEqual([]);
    expect(saved.balance.stageGates.map(({ status }: { status: string }) => status)).toEqual([
      "within_recommended",
      "within_recommended",
      "within_recommended",
    ]);
    expect(saved.balance.finalClassifier.reachStatus).toBe("within_recommended");
    expect(saved.globalStrategyDominance).toEqual([]);
    expect(saved.effectBudgetWarnings).toEqual([]);
  });

  it("passes ISTJ traceability validation", () => {
    const output = execFileSync(
      process.execPath,
      [
        ".codex/skills/04-write-choice-game-questions/scripts/validate-question-traceability.mjs",
        "content/traceability/istj-question-traceability.json",
        "src/content/istj-questions.ts",
        "content/traceability/istj-formal-sequence.json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(output)).toMatchObject({
      valid: true,
      questions: 10,
      traceabilityRecords: 10,
      formalScenes: 10,
    });
  });
});
