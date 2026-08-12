import { describe, expect, it } from "vitest";
import { endings, fuzzyFeedback, relationshipEvaluations } from "./endings.ts";
import { contentPacks } from "./packs.ts";
import { questions } from "./questions.ts";
import { validateContent, type Question, type QuestionOption } from "./schema.ts";

function questionsWithTerminalOptions(optionIds: readonly string[]): readonly Question[] {
  const terminalOptionIds = new Set(optionIds);

  return questions.map((question) => ({
    ...question,
    options: question.options.map((rawOption) => {
      const option: QuestionOption = rawOption;
      const { terminalEndingId: _currentTerminalEndingId, ...optionWithoutTerminal } = option;

      return terminalOptionIds.has(option.id)
        ? { ...optionWithoutTerminal, terminalEndingId: "blocked_immediately" as const }
        : optionWithoutTerminal;
    }),
  }));
}

function validateQuestions(nextQuestions: readonly Question[]): void {
  validateContent({
    questions: nextQuestions,
    endings,
    relationshipEvaluations,
    fuzzyFeedback,
  });
}

describe("validateContent scripted terminal options", () => {
  it("keeps every registered content pack valid", () => {
    Object.values(contentPacks).forEach((pack) => {
      expect(() => validateContent(pack)).not.toThrow();
    });
  });

  it("allows the single scripted terminal option to appear outside Q04", () => {
    expect(() => validateQuestions(questionsWithTerminalOptions(["q07_mock_publicly"]))).not.toThrow();
  });

  it("allows a question set without a scripted terminal option", () => {
    expect(() => validateQuestions(questionsWithTerminalOptions([]))).not.toThrow();
  });

  it("rejects multiple scripted terminal options", () => {
    expect(() =>
      validateQuestions(questionsWithTerminalOptions(["q01_go_now", "q07_mock_publicly"])),
    ).toThrow(/最多只能配置 1 个剧情指定结束选项.*q01_go_now, q07_mock_publicly/);
  });
});
