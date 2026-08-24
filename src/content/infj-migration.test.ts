import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { contentPacks } from "./packs.ts";
import { infjEndings, infjFuzzyFeedback, infjRelationshipEvaluations } from "./infj-endings.ts";
import { infjQuestions } from "./infj-questions.ts";
import { validateContent } from "./schema.ts";

describe("INFJ formal data migration", () => {
  it("projects the approved drafts into the website content pack", () => {
    const questionDraft = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/infj-ten-question-draft.json"), "utf8"),
    );
    const endingDraft = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/endings/infj-ending-content-draft.json"), "utf8"),
    );

    expect(infjQuestions).toEqual(questionDraft);
    expect(infjEndings).toEqual(endingDraft.endings);
    expect(infjRelationshipEvaluations).toEqual(endingDraft.relationshipEvaluations);
    expect(infjFuzzyFeedback).toEqual(endingDraft.fuzzyFeedback);
    expect(contentPacks.INFJ).toMatchObject({
      type: "INFJ",
      questions: infjQuestions,
      endings: infjEndings,
      relationshipEvaluations: infjRelationshipEvaluations,
      fuzzyFeedback: infjFuzzyFeedback,
    });
    expect(() => validateContent(contentPacks.INFJ)).not.toThrow();
  });

  it("preserves the approved exhaustive path report", () => {
    const saved = JSON.parse(
      readFileSync(resolve(process.cwd(), "content/questions/infj-balance-report.json"), "utf8"),
    );
    const analyzerOutput = execFileSync(
      process.execPath,
      [
        ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
        "scripts/infj-choice-paths-adapter.mjs",
        "--json",
      ],
      { cwd: process.cwd(), encoding: "utf8" },
    );

    expect(JSON.parse(analyzerOutput)).toEqual(saved);
    expect(saved.completeChoiceSpace).toBe(1_048_576);
    expect(saved.coverage.endings.missing).toEqual([]);
    expect(saved.coverage.outcomes.missing).toEqual([]);
    expect(saved.balance.stageGates.map(({ status }: { status: string }) => status)).toEqual([
      "within_recommended",
      "within_recommended",
      "within_recommended",
    ]);
    expect(saved.balance.finalClassifier.reachStatus).toBe("within_recommended");
    expect(
      Object.values(saved.balance.finalClassifier.byGroup).map(
        (group) => (group as { status: string }).status,
      ),
    ).toEqual([
      "within_recommended",
      "within_recommended",
      "within_recommended",
      "within_recommended",
      "within_recommended",
    ]);
  });

  it("passes INFJ traceability validation", () => {
    const output = execFileSync(
      process.execPath,
      [
        "scripts/validate-question-traceability.mjs",
        "content/traceability/infj-question-traceability.json",
        "src/content/infj-questions.ts",
        "content/traceability/infj-formal-sequence.json",
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
