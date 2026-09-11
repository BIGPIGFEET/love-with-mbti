import { estpQuestions } from "../../../../src/content/estp-questions.ts";
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

export const questions = estpQuestions;

export function applyChoice(state, _question, option) {
  return applyEffects(state, option.effects);
}

export function evaluateAfterChoice({ state, question }) {
  if (question.order === estpQuestions.length) return null;
  return toAnalyzerResult(resolveEnding(question.order, state));
}

export function evaluateFinal({ state }) {
  const lastQuestion = estpQuestions.at(-1);
  const result = resolveEnding(lastQuestion.order, state);
  if (!result) throw new Error("Production rules did not return a final result");
  return toAnalyzerResult(result);
}
