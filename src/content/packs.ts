import type { AvailableMbtiType, ContentPack } from "./content-pack.ts";
import { endings, fuzzyFeedback, relationshipEvaluations } from "./endings.ts";
import { infpEndings, infpFuzzyFeedback, infpRelationshipEvaluations } from "./infp-endings.ts";
import { infpQuestions } from "./infp-questions.ts";
import { isfpEndings, isfpFuzzyFeedback, isfpRelationshipEvaluations } from "./isfp-endings.ts";
import { isfpQuestions } from "./isfp-questions.ts";
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
  INFP: {
    type: "INFP",
    description: "十次真实表达、理想落地、边界确认与关系维护之间的取舍。",
    questions: infpQuestions,
    endings: infpEndings,
    relationshipEvaluations: infpRelationshipEvaluations,
    fuzzyFeedback: infpFuzzyFeedback,
  },
  ISFP: {
    type: "ISFP",
    description: "十次具体体验、安静边界、隐私责任与共同修复之间的取舍。",
    questions: isfpQuestions,
    endings: isfpEndings,
    relationshipEvaluations: isfpRelationshipEvaluations,
    fuzzyFeedback: isfpFuzzyFeedback,
  },
} as const satisfies Record<AvailableMbtiType, ContentPack>;

Object.values(contentPacks).forEach((pack) => validateContent(pack));

export function getContentPack(type: AvailableMbtiType): ContentPack {
  return contentPacks[type];
}
