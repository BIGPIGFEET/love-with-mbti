import { describe, expect, it } from "vitest";

import { intpQuestions } from "../content/intp-questions.ts";
import { entpQuestions } from "../content/entp-questions.ts";
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
    [entpQuestions, 3, "q04_expose_in_return"],
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
    [2, { attraction: 25, trust: 20, comfort: 20, conflict: 20 }, null],
    [2, { attraction: 24, trust: 20, comfort: 20, conflict: 20 }, { endingId: "no_second_meeting" }],
    [2, { attraction: 25, trust: 19, comfort: 20, conflict: 20 }, { endingId: "no_second_meeting" }],
    [2, { attraction: 25, trust: 20, comfort: 19, conflict: 20 }, { endingId: "no_second_meeting" }],
    [2, { attraction: 25, trust: 20, comfort: 20, conflict: 21 }, { endingId: "no_second_meeting" }],
    [5, { attraction: 35, trust: 30, comfort: 25, conflict: 45 }, null],
    [5, { attraction: 34, trust: 30, comfort: 25, conflict: 45 }, { endingId: "fade_out" }],
    [5, { attraction: 35, trust: 29, comfort: 25, conflict: 45 }, { endingId: "fade_out" }],
    [5, { attraction: 35, trust: 30, comfort: 24, conflict: 45 }, { endingId: "fade_out" }],
    [5, { attraction: 35, trust: 30, comfort: 25, conflict: 46 }, { endingId: "fade_out" }],
    [8, { attraction: 45, trust: 40, comfort: 35, conflict: 45 }, null],
    [8, { attraction: 44, trust: 40, comfort: 35, conflict: 45 }, { endingId: "stay_acquaintances" }],
    [8, { attraction: 45, trust: 39, comfort: 35, conflict: 45 }, { endingId: "stay_acquaintances" }],
    [8, { attraction: 45, trust: 40, comfort: 34, conflict: 45 }, { endingId: "stay_acquaintances" }],
    [8, { attraction: 45, trust: 40, comfort: 35, conflict: 46 }, { endingId: "stay_acquaintances" }],
  ] as const)("applies the Q%s stage boundary %#", (order, state, expected) => {
    expect(resolveEnding(order, state)).toEqual(expected);
  });

  it.each([
    [{ attraction: 100, trust: 34, comfort: 100, conflict: 0 }, { endingId: "strangers_after_all" }],
    [{ attraction: 100, trust: 100, comfort: 34, conflict: 0 }, { endingId: "strangers_after_all" }],
    [{ attraction: 100, trust: 100, comfort: 100, conflict: 51 }, { endingId: "strangers_after_all" }],
    [{ attraction: 84, trust: 35, comfort: 35, conflict: 50 }, { endingId: "unresolved_ambiguity" }],
    [{ attraction: 85, trust: 75, comfort: 70, conflict: 15 }, { endingId: "confirmed_relationship", evaluationId: "romance_stable" }],
    [{ attraction: 85, trust: 65, comfort: 60, conflict: 25 }, { endingId: "confirmed_relationship", evaluationId: "romance_hidden_risk" }],
    [{ attraction: 85, trust: 74, comfort: 70, conflict: 15 }, { endingId: "confirmed_relationship", evaluationId: "romance_hidden_risk" }],
    [{ attraction: 85, trust: 75, comfort: 69, conflict: 15 }, { endingId: "confirmed_relationship", evaluationId: "romance_hidden_risk" }],
    [{ attraction: 85, trust: 75, comfort: 70, conflict: 16 }, { endingId: "confirmed_relationship", evaluationId: "romance_hidden_risk" }],
    [{ attraction: 90, trust: 64, comfort: 60, conflict: 25 }, { endingId: "dangerous_lovers" }],
    [{ attraction: 90, trust: 65, comfort: 59, conflict: 25 }, { endingId: "dangerous_lovers" }],
    [{ attraction: 90, trust: 34, comfort: 60, conflict: 25 }, { endingId: "strangers_after_all" }],
    [{ attraction: 89, trust: 64, comfort: 60, conflict: 25 }, { endingId: "unresolved_ambiguity" }],
    [{ attraction: 64, trust: 50, comfort: 45, conflict: 40 }, { endingId: "friends" }],
    [{ attraction: 65, trust: 50, comfort: 45, conflict: 40 }, { endingId: "unresolved_ambiguity" }],
    [{ attraction: 84, trust: 65, comfort: 60, conflict: 25 }, { endingId: "unresolved_ambiguity" }],
  ] as const)("classifies Q10 boundary state %#", (state, expected) => {
    expect(resolveEnding(10, state)).toEqual(expected);
  });
});
