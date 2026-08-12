import { intpQuestions } from "../src/content/intp-questions.ts";
import {
  INITIAL_STATE,
  applyEffects,
  resolveEnding,
} from "../src/game/rules.ts";

export const initialState = { ...INITIAL_STATE };

export const dimensionDirections = {
  attraction: "max",
  trust: "max",
  comfort: "max",
  conflict: "min",
};

export const questions = intpQuestions;

export function applyChoice(state, _question, option) {
  return applyEffects(state, option.effects);
}

export function evaluateAfterChoice({ state, question, option }) {
  if (question.order === 10) return null;
  return resolveEnding(question.order, option, state)?.endingId ?? null;
}

export function evaluateFinal({ state, path }) {
  const question = questions.at(-1);
  const optionId = path.at(-1)?.optionId;
  const option = question.options.find((candidate) => candidate.id === optionId);
  const result = resolveEnding(question.order, option, state);
  if (!result) throw new Error("Production rules did not return a Q10 ending");
  return result.evaluationId
    ? `${result.endingId}:${result.evaluationId}`
    : result.endingId;
}
