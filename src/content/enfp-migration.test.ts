import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { enfpEndings, enfpFuzzyFeedback, enfpRelationshipEvaluations } from "./enfp-endings.ts";
import { enfpQuestions } from "./enfp-questions.ts";
import { contentPacks } from "./packs.ts";
import { validateContent } from "./schema.ts";

describe("ENFP production content", () => {
  it("registers the inline TypeScript content in the website content pack", () => {
    expect(contentPacks.ENFP).toMatchObject({
      type: "ENFP",
      questions: enfpQuestions,
      endings: enfpEndings,
      relationshipEvaluations: enfpRelationshipEvaluations,
      fuzzyFeedback: enfpFuzzyFeedback,
    });
    expect(() => validateContent(contentPacks.ENFP)).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const saved = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/enfp-balance-report.json"), "utf8"),
    );
    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        "scripts/enfp-choice-paths-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.completeChoiceSpace).toBe(1_048_576);
    expect(saved.coverage.endings.missing).toEqual([]);
    expect(saved.coverage.outcomes.missing).toEqual([]);
    expect(saved.balance.globalDanger.combined.weightedPercentage).toBe(7.885);
    expect(saved.balance.stageGates.map(({ status }: { status: string }) => status)).toEqual([
      "within_recommended",
      "within_recommended",
      "within_recommended",
    ]);
    expect(saved.balance.finalClassifier.weightedReachPercentage).toBe(26.77);
    expect(
      saved.balance.finalClassifier.byGroup.unresolved_ambiguity.weightedConditionalPercentage,
    ).toBe(45.337);
    expect(
      saved.fixedPositions.some(({ ending }: { ending: string }) =>
        ending.startsWith("confirmed_relationship"),
      ),
    ).toBe(false);
  });

  it("passes ENFP traceability validation", () => {
    const output = execFileSync(
      process.execPath,
      [
        "scripts/validate-question-traceability.mjs",
        "content/traceability/enfp-question-traceability.json",
        "src/content/enfp-questions.ts",
        "content/traceability/enfp-formal-sequence.json",
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
