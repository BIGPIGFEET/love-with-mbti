import type { AvailableMbtiType, ContentPack } from "./content-pack.ts";
import { enfpEndings, enfpFuzzyFeedback, enfpRelationshipEvaluations } from "./enfp-endings.ts";
import { enfpQuestions } from "./enfp-questions.ts";
import { entjEndings, entjFuzzyFeedback, entjRelationshipEvaluations } from "./entj-endings.ts";
import { entjQuestions } from "./entj-questions.ts";
import { estjEndings, estjFuzzyFeedback, estjRelationshipEvaluations } from "./estj-endings.ts";
import { estjQuestions } from "./estj-questions.ts";
import { endings, fuzzyFeedback, relationshipEvaluations } from "./endings.ts";
import { infjEndings, infjFuzzyFeedback, infjRelationshipEvaluations } from "./infj-endings.ts";
import { infjQuestions } from "./infj-questions.ts";
import { infpEndings, infpFuzzyFeedback, infpRelationshipEvaluations } from "./infp-endings.ts";
import { infpQuestions } from "./infp-questions.ts";
import { intjEndings, intjFuzzyFeedback, intjRelationshipEvaluations } from "./intj-endings.ts";
import { intjQuestions } from "./intj-questions.ts";
import { istjEndings, istjFuzzyFeedback, istjRelationshipEvaluations } from "./istj-endings.ts";
import { istjQuestions } from "./istj-questions.ts";
import { isfjEndings, isfjFuzzyFeedback, isfjRelationshipEvaluations } from "./isfj-endings.ts";
import { isfjQuestions } from "./isfj-questions.ts";
import { isfpEndings, isfpFuzzyFeedback, isfpRelationshipEvaluations } from "./isfp-endings.ts";
import { isfpQuestions } from "./isfp-questions.ts";
import { intpEndings, intpFuzzyFeedback, intpRelationshipEvaluations } from "./intp-endings.ts";
import { intpQuestions } from "./intp-questions.ts";
import { questions } from "./questions.ts";
import { validateContent } from "./schema.ts";

export const contentPacks = {
  INTJ: {
    type: "INTJ",
    description: "十次结构协商、直接表达、独处边界与关系确认之间的取舍。",
    questions: intjQuestions,
    endings: intjEndings,
    relationshipEvaluations: intjRelationshipEvaluations,
    fuzzyFeedback: intjFuzzyFeedback,
  },
  ENTJ: {
    type: "ENTJ",
    description: "十次目标协作、直接表达、权力边界与共同确认之间的取舍。",
    questions: entjQuestions,
    endings: entjEndings,
    relationshipEvaluations: entjRelationshipEvaluations,
    fuzzyFeedback: entjFuzzyFeedback,
  },
  ESTJ: {
    type: "ESTJ",
    description: "十次计划协商、实际照顾、边界修复与关系确认之间的取舍。",
    questions: estjQuestions,
    endings: estjEndings,
    relationshipEvaluations: estjRelationshipEvaluations,
    fuzzyFeedback: estjFuzzyFeedback,
  },
  ENTP: {
    type: "ENTP",
    description: "十次新鲜感、边界、信任与长期兑现之间的取舍。",
    questions,
    endings,
    relationshipEvaluations,
    fuzzyFeedback,
  },
  ENFP: {
    type: "ENFP",
    description: "十次热情表达、探索变化、私人边界与关系确认之间的取舍。",
    questions: enfpQuestions,
    endings: enfpEndings,
    relationshipEvaluations: enfpRelationshipEvaluations,
    fuzzyFeedback: enfpFuzzyFeedback,
  },
  INTP: {
    type: "INTP",
    description: "十次思想火花、表达节奏、共同边界与独立空间之间的取舍。",
    questions: intpQuestions,
    endings: intpEndings,
    relationshipEvaluations: intpRelationshipEvaluations,
    fuzzyFeedback: intpFuzzyFeedback,
  },
  INFJ: {
    type: "INFJ",
    description: "十次深度交流、隐私边界、支持互惠与明确关系之间的取舍。",
    questions: infjQuestions,
    endings: infjEndings,
    relationshipEvaluations: infjRelationshipEvaluations,
    fuzzyFeedback: infjFuzzyFeedback,
  },
  INFP: {
    type: "INFP",
    description: "十次真实表达、理想落地、边界确认与关系维护之间的取舍。",
    questions: infpQuestions,
    endings: infpEndings,
    relationshipEvaluations: infpRelationshipEvaluations,
    fuzzyFeedback: infpFuzzyFeedback,
  },
  ISTJ: {
    type: "ISTJ",
    description: "十次共同安排、行动关心、承诺边界与关系确认之间的取舍。",
    questions: istjQuestions,
    endings: istjEndings,
    relationshipEvaluations: istjRelationshipEvaluations,
    fuzzyFeedback: istjFuzzyFeedback,
  },
  ISFJ: {
    type: "ISFJ",
    description: "十次社交节奏、实际照顾、角色边界与关系确认之间的取舍。",
    questions: isfjQuestions,
    endings: isfjEndings,
    relationshipEvaluations: isfjRelationshipEvaluations,
    fuzzyFeedback: isfjFuzzyFeedback,
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
