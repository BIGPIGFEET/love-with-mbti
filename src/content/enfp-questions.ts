import enfpQuestionDraft from "../../content/questions/enfp-ten-question-draft.json" with { type: "json" };
import type { Question } from "./schema.ts";

export const enfpQuestions = enfpQuestionDraft as unknown as readonly Question[];

export const questions = enfpQuestions;
