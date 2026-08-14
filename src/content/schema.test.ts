import { describe, expect, it } from "vitest";
import { contentPacks } from "./packs.ts";
import { analyzeEffectBudget, validateContent, type Question } from "./schema.ts";

describe("validateContent registered packs", () => {
  it("keeps every registered content pack valid", () => {
    Object.values(contentPacks).forEach((pack) => {
      expect(() => validateContent(pack)).not.toThrow();
    });
  });

  it("rejects undeclared option fields", () => {
    const pack = contentPacks.ENTP;
    const [firstQuestion, ...remainingQuestions] = pack.questions;
    const [firstOption, ...remainingOptions] = firstQuestion.options;
    const questionsWithUnknownField = [
      {
        ...firstQuestion,
        options: [{ ...firstOption, unexpectedField: "legacy" }, ...remainingOptions],
      },
      ...remainingQuestions,
    ];

    expect(() => validateContent({ ...pack, questions: questionsWithUnknownField })).toThrow(
      /未知选项字段：unexpectedField/,
    );
  });

  it("rejects an ending assigned to an undeclared family", () => {
    const pack = contentPacks.ENTP;
    const [firstEnding, ...remainingEndings] = pack.endings;
    const endingsWithUnknownFamily = [
      { ...firstEnding, kind: "legacy" },
      ...remainingEndings,
    ] as unknown as typeof pack.endings;

    expect(() => validateContent({ ...pack, endings: endingsWithUnknownFamily })).toThrow(
      /conflict_break 的结局类型应为 global，当前为 legacy/,
    );
  });

  it("rejects an option whose total absolute effect exceeds the hard cap", () => {
    const pack = contentPacks.ENTP;
    const [firstQuestion, ...remainingQuestions] = pack.questions;
    const [firstOption, ...remainingOptions] = firstQuestion.options;
    const questionsWithOverBudgetOption = [
      {
        ...firstQuestion,
        options: [
          {
            ...firstOption,
            effects: { attraction: -20, trust: -20, comfort: -20, conflict: 20 },
          },
          ...remainingOptions,
        ],
      },
      ...remainingQuestions,
    ];

    expect(() => validateContent({ ...pack, questions: questionsWithOverBudgetOption as unknown as Question[] })).toThrow(
      /四维绝对变化总和 80 超过硬上限 60/,
    );
  });

  it("reports structured review warnings for valid but unusually strong effects", () => {
    const pack = contentPacks.ENTP;
    const [firstQuestion, ...remainingQuestions] = pack.questions;
    const [firstOption, ...remainingOptions] = firstQuestion.options;
    const questionsWithWarnings = [
      {
        ...firstQuestion,
        options: [
          {
            ...firstOption,
            effects: { attraction: 15, trust: 15, comfort: 15, conflict: 0 },
          },
          ...remainingOptions,
        ],
      },
      ...remainingQuestions,
    ];

    const warnings = analyzeEffectBudget(questionsWithWarnings as unknown as Question[]);
    expect(warnings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "total_absolute_change",
          optionId: firstOption.id,
          actual: 45,
          recommendedMaximum: 40,
        }),
        expect.objectContaining({
          type: "high_magnitude_dimensions",
          optionId: firstOption.id,
          actual: 3,
          recommendedMaximum: 2,
        }),
      ]),
    );
  });
});
