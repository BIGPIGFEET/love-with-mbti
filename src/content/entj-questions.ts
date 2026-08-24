import entjQuestionDraft from "../../content/questions/entj-ten-question-draft.json" with { type: "json" };
import type { Question } from "./schema.ts";

// Keep the approved Stage-06 question source as the single content projection.
export const entjQuestions = entjQuestionDraft as unknown as readonly Question[];

// Stable export consumed by the repository traceability validator.
export const questions = entjQuestions;
