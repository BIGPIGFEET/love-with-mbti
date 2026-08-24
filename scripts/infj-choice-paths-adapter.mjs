import { infjQuestions } from "../src/content/infj-questions.ts";
import {
  applyEffects,
  INITIAL_STATE,
  resolveEnding,
} from "../src/game/rules.ts";
import { toAnalyzerResult } from "../.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-contract.mjs";

export {
  balanceConfig,
  effectConstraints,
  expectedEndingIds,
  expectedOutcomeIds,
} from "../.codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-contract.mjs";

export const initialState = { ...INITIAL_STATE };

export const dimensionDirections = {
  attraction: "max",
  trust: "max",
  comfort: "max",
  conflict: "min",
};

export const questions = infjQuestions;

export function applyChoice(state, _question, option) {
  return applyEffects(state, option.effects);
}

export function evaluateAfterChoice({ state, question }) {
  if (question.order === questions.length) return null;
  return toAnalyzerResult(resolveEnding(question.order, state));
}

export function evaluateFinal({ state }) {
  const result = resolveEnding(questions.at(-1).order, state);
  if (!result) throw new Error("Production rules did not return a Q10 ending");
  return toAnalyzerResult(result);
}
