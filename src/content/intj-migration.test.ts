import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { contentPacks } from "./packs.ts";
import { intjEndings, intjFuzzyFeedback, intjRelationshipEvaluations } from "./intj-endings.ts";
import { intjQuestions } from "./intj-questions.ts";
import { validateContent } from "./schema.ts";

describe("INTJ formal data migration", () => {
  it("projects the approved drafts into the website content pack", () => {
    const questionDraft = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/intj-ten-question-draft.json"), "utf8"),
    );
    const endingDraft = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/endings/intj-ending-content-draft.json"), "utf8"),
    );

    expect(intjQuestions).toEqual(questionDraft);
    expect(intjEndings).toEqual(endingDraft.endings);
    expect(intjRelationshipEvaluations).toEqual(endingDraft.relationshipEvaluations);
    expect(intjFuzzyFeedback).toEqual(endingDraft.fuzzyFeedback);
    expect(contentPacks.INTJ).toMatchObject({
      type: "INTJ",
      questions: intjQuestions,
      endings: intjEndings,
      relationshipEvaluations: intjRelationshipEvaluations,
      fuzzyFeedback: intjFuzzyFeedback,
    });
    expect(() => validateContent(contentPacks.INTJ)).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const saved = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/intj-balance-report.json"), "utf8"),
    );
    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        "scripts/intj-choice-paths-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.completeChoiceSpace).toBe(1_048_576);
    expect(saved.balance.finalClassifier.byGroup.dangerous_lovers.weightedConditionalPercentage).toBe(2.652);
    expect(saved.balance.finalClassifier.byGroup.unresolved_ambiguity.weightedConditionalPercentage).toBe(54.282);
    expect(saved.fixedPositions.some(({ ending }: { ending: string }) => ending.startsWith("confirmed_relationship"))).toBe(false);
  });

  it("passes INTJ traceability validation", () => {
    const output = execFileSync(
      process.execPath,
      [
        "scripts/validate-question-traceability.mjs",
        "content/traceability/intj-question-traceability.json",
        "src/content/intj-questions.ts",
        "content/traceability/intj-formal-sequence.json",
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
