import { describe, expect, it } from "vitest";

import { intpQuestions } from "../content/intp-questions.ts";
import { questions } from "../content/questions.ts";
import type { Question, RelationState } from "../content/schema.ts";
import { applyEffects, resolveEnding } from "./rules.ts";

const HEALTHY_STATE: RelationState = {
  attraction: 80,
  trust: 80,
  comfort: 80,
  conflict: 0,
};

function optionById(questionSet: readonly Question[], questionIndex: number, optionId: string) {
  const option = questionSet[questionIndex].options.find((candidate) => candidate.id === optionId);
  if (!option) throw new Error(`Missing test option: ${optionId}`);
  return option;
}

describe("unified ending resolution", () => {
  it.each([
    [questions, 3, "q04_expose_in_return"],
    [intpQuestions, 6, "q07_expose_in_return"],
  ] as const)("does not let a severe option bypass state rules", (questionSet, questionIndex, optionId) => {
    const question = questionSet[questionIndex];
    const option = optionById(questionSet, questionIndex, optionId);
    const nextState = applyEffects(HEALTHY_STATE, option.effects);

    expect(resolveEnding(question.order, nextState)).toBeNull();
  });

  it("checks global danger before a stage gate", () => {
    const state: RelationState = { attraction: 25, trust: 0, comfort: 0, conflict: 80 };

    expect(resolveEnding(2, state)).toEqual({ endingId: "conflict_break" });
  });

  it("checks global danger before the Q10 final classifier", () => {
    const state: RelationState = { attraction: 100, trust: 80, comfort: 80, conflict: 80 };

    expect(resolveEnding(10, state)).toEqual({ endingId: "conflict_break" });
  });

  it.each([
    [{ attraction: 70, trust: 65, comfort: 60, conflict: 25 }, { endingId: "confirmed_relationship", evaluationId: "romance_stable" }],
    [{ attraction: 70, trust: 50, comfort: 45, conflict: 45 }, { endingId: "confirmed_relationship", evaluationId: "romance_hidden_risk" }],
    [{ attraction: 70, trust: 45, comfort: 45, conflict: 45 }, { endingId: "dangerous_lovers" }],
    [{ attraction: 55, trust: 45, comfort: 45, conflict: 45 }, { endingId: "friends" }],
    [{ attraction: 60, trust: 45, comfort: 45, conflict: 45 }, { endingId: "unresolved_ambiguity" }],
  ] as const)("classifies Q10 boundary state %#", (state, expected) => {
    expect(resolveEnding(10, state)).toEqual(expected);
  });
});
