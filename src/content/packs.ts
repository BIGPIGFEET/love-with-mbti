import type { AvailableMbtiType, ContentPack } from "./content-pack.ts";
import { endings, fuzzyFeedback, relationshipEvaluations } from "./endings.ts";
import { intpEndings, intpFuzzyFeedback, intpRelationshipEvaluations } from "./intp-endings.ts";
import { intpQuestions } from "./intp-questions.ts";
import { questions } from "./questions.ts";
import { validateContent } from "./schema.ts";

export const contentPacks = {
  ENTP: {
    type: "ENTP",
    description: "十次新鲜感、边界、信任与长期兑现之间的取舍。",
    questions,
    endings,
    relationshipEvaluations,
    fuzzyFeedback,
  },
  INTP: {
    type: "INTP",
    description: "十次思想火花、表达节奏、共同边界与独立空间之间的取舍。",
    questions: intpQuestions,
    endings: intpEndings,
    relationshipEvaluations: intpRelationshipEvaluations,
    fuzzyFeedback: intpFuzzyFeedback,
  },
} as const satisfies Record<AvailableMbtiType, ContentPack>;

Object.values(contentPacks).forEach((pack) => validateContent(pack));

export function getContentPack(type: AvailableMbtiType): ContentPack {
  return contentPacks[type];
}
