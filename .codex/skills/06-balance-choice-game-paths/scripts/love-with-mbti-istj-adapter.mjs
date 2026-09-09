import { istjQuestions } from "../../../../src/content/istj-questions.ts";
import {
  applyEffects,
  INITIAL_STATE,
  resolveEnding,
} from "../../../../src/game/rules.ts";
import { toAnalyzerResult } from "./love-with-mbti-contract.mjs";

export {
  balanceConfig,
  effectConstraints,
  expectedEndingIds,
  expectedOutcomeIds,
} from "./love-with-mbti-contract.mjs";

export const initialState = { ...INITIAL_STATE };

export const dimensionDirections = {
  attraction: "max",
  trust: "max",
  comfort: "max",
  conflict: "min",
};

export const questions = istjQuestions;

export function applyChoice(state, _question, option) {
  return applyEffects(state, option.effects);
}

export function evaluateAfterChoice({ state, question }) {
  if (question.order === istjQuestions.length) return null;
  return toAnalyzerResult(resolveEnding(question.order, state));
}

export function evaluateFinal({ state }) {
  const lastQuestion = istjQuestions.at(-1);
  const result = resolveEnding(lastQuestion.order, state);
  if (!result) throw new Error("Production rules did not return a final result");
  return toAnalyzerResult(result);
}
