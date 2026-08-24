import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { entjEndings, entjFuzzyFeedback, entjRelationshipEvaluations } from "./entj-endings.ts";
import { entjQuestions } from "./entj-questions.ts";
import { contentPacks } from "./packs.ts";
import { validateContent } from "./schema.ts";

describe("ENTJ formal data migration", () => {
  it("projects the approved drafts into the website content pack", () => {
    const questionDraft = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/entj-ten-question-draft.json"), "utf8"),
    );
    const endingDraft = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/endings/entj-ending-content-draft.json"), "utf8"),
    );

    expect(entjQuestions).toEqual(questionDraft);
    expect(entjEndings).toEqual(endingDraft.endings);
    expect(entjRelationshipEvaluations).toEqual(endingDraft.relationshipEvaluations);
    expect(entjFuzzyFeedback).toEqual(endingDraft.fuzzyFeedback);
    expect(contentPacks.ENTJ).toMatchObject({
      type: "ENTJ",
      questions: entjQuestions,
      endings: entjEndings,
      relationshipEvaluations: entjRelationshipEvaluations,
      fuzzyFeedback: entjFuzzyFeedback,
    });
    expect(() => validateContent(contentPacks.ENTJ)).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const saved = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/entj-balance-report.json"), "utf8"),
    );
    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        "scripts/entj-choice-paths-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.completeChoiceSpace).toBe(1_048_576);
    expect(saved.coverage.endings.missing).toEqual([]);
    expect(saved.coverage.outcomes.missing).toEqual([]);
    expect(saved.balance.globalDanger.combined.weightedPercentage).toBe(6.723);
    expect(saved.balance.finalClassifier.byGroup.unresolved_ambiguity.weightedConditionalPercentage).toBe(48.423);
    expect(saved.balance.stageGates.map(({ status }: { status: string }) => status)).toEqual([
      "within_recommended",
      "within_recommended",
      "within_recommended",
    ]);
    expect(saved.balance.finalClassifier.reachStatus).toBe("within_recommended");
    expect(saved.fixedPositions.some(({ ending }: { ending: string }) => ending.startsWith("confirmed_relationship"))).toBe(false);
  });

  it("passes ENTJ traceability validation", () => {
    const output = execFileSync(
      process.execPath,
      [
        "scripts/validate-question-traceability.mjs",
        "content/traceability/entj-question-traceability.json",
        "src/content/entj-questions.ts",
        "content/traceability/entj-formal-sequence.json",
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
