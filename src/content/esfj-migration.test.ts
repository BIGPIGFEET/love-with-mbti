import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { contentPacks } from "./packs.ts";
import {
  esfjEndings,
  esfjFuzzyFeedback,
  esfjRelationshipEvaluations,
} from "./esfj-endings.ts";
import { esfjQuestions } from "./esfj-questions.ts";
import { validateContent } from "./schema.ts";

describe("ESFJ production content", () => {
  it("registers the balanced inline content in the website content pack", () => {
    expect(contentPacks.ESFJ).toMatchObject({
      type: "ESFJ",
      questions: esfjQuestions,
      endings: esfjEndings,
      relationshipEvaluations: esfjRelationshipEvaluations,
      fuzzyFeedback: esfjFuzzyFeedback,
    });
    expect(() => validateContent(contentPacks.ESFJ)).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const saved = JSON.parse(
      readFileSync(
        resolve(process.cwd(), "content/questions/esfj-balance-report.json"),
        "utf8",
      ),
    );
    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        ".codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-esfj-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.completeChoiceSpace).toBe(1_048_576);
    expect(saved.weightedTotal).toBe(1_048_576);
    expect(saved.coverage.endings.missing).toEqual([]);
    expect(saved.coverage.outcomes.missing).toEqual([]);
    expect(
      saved.balance.stageGates.map(
        ({ status }: { status: string }) => status,
      ),
    ).toEqual([
      "below_recommended",
      "within_recommended",
      "within_recommended",
    ]);
    expect(saved.balance.finalClassifier.reachStatus).toBe(
      "above_recommended",
    );
    expect(saved.globalStrategyDominance).toEqual([
      {
        dominantStrategy: "negotiate",
        dominatedStrategy: "risky",
      },
    ]);
    expect(saved.effectBudgetWarnings).toEqual([]);
  });

  it("passes ESFJ traceability validation", () => {
    const output = execFileSync(
      process.execPath,
      [
        ".codex/skills/04-write-choice-game-questions/scripts/validate-question-traceability.mjs",
        "content/traceability/esfj-question-traceability.json",
        "src/content/esfj-questions.ts",
        "content/traceability/esfj-formal-sequence.json",
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
