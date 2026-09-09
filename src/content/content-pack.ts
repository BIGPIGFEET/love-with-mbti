import type {
  EndingContent,
  FuzzyFeedbackContent,
  Question,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const AVAILABLE_MBTI_TYPES = [
  "INTJ",
  "ENTJ",
  "ESTJ",
  "ENTP",
  "ENFP",
  "ENFJ",
  "ESFJ",
  "INTP",
  "INFJ",
  "INFP",
  "ISTJ",
  "ISFJ",
  "ISFP",
] as const;

export type AvailableMbtiType = (typeof AVAILABLE_MBTI_TYPES)[number];

export interface ContentPack {
  readonly type: AvailableMbtiType;
  readonly description: string;
  readonly questions: readonly Question[];
  readonly endings: readonly EndingContent[];
  readonly relationshipEvaluations: readonly RelationshipEvaluationContent[];
  readonly fuzzyFeedback: readonly FuzzyFeedbackContent[];
}
