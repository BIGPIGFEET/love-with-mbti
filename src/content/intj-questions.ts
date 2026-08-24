import intjQuestionDraft from "../../content/questions/intj-ten-question-draft.json" with { type: "json" };
import type { Question } from "./schema.ts";

// Keep the approved Stage-06 question source as the single content projection.
export const intjQuestions = intjQuestionDraft as unknown as readonly Question[];

// Stable export consumed by the repository traceability validator.
export const questions = intjQuestions;
