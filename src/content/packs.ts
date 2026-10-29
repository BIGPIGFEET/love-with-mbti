// Offline validators need every pack; the browser uses load-pack.ts on demand.
import { TYPE_DESCRIPTIONS } from "./content-pack.ts";
import type { AvailableMbtiType, ContentPack } from "./content-pack.ts";
import { enfpEndings, enfpFuzzyFeedback, enfpRelationshipEvaluations } from "./enfp-endings.ts";
import { enfpQuestions } from "./enfp-questions.ts";
import { enfjEndings, enfjFuzzyFeedback, enfjRelationshipEvaluations } from "./enfj-endings.ts";
import { enfjQuestions } from "./enfj-questions.ts";
import { esfjEndings, esfjFuzzyFeedback, esfjRelationshipEvaluations } from "./esfj-endings.ts";
import { esfjQuestions } from "./esfj-questions.ts";
import { esfpEndings, esfpFuzzyFeedback, esfpRelationshipEvaluations } from "./esfp-endings.ts";
import { esfpQuestions } from "./esfp-questions.ts";
import { entjEndings, entjFuzzyFeedback, entjRelationshipEvaluations } from "./entj-endings.ts";
import { entjQuestions } from "./entj-questions.ts";
import { estjEndings, estjFuzzyFeedback, estjRelationshipEvaluations } from "./estj-endings.ts";
import { estjQuestions } from "./estj-questions.ts";
import { estpEndings, estpFuzzyFeedback, estpRelationshipEvaluations } from "./estp-endings.ts";
import { estpQuestions } from "./estp-questions.ts";
import {
  entpEndings,
  entpFuzzyFeedback,
  entpRelationshipEvaluations,
} from "./entp-endings.ts";
import { entpQuestions } from "./entp-questions.ts";
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
import { istpEndings, istpFuzzyFeedback, istpRelationshipEvaluations } from "./istp-endings.ts";
import { istpQuestions } from "./istp-questions.ts";
import { intpEndings, intpFuzzyFeedback, intpRelationshipEvaluations } from "./intp-endings.ts";
import { intpQuestions } from "./intp-questions.ts";
import { validateContent } from "./schema.ts";

export const contentPacks = {
  INTJ: {
    type: "INTJ",
    description: TYPE_DESCRIPTIONS.INTJ,
    questions: intjQuestions,
    endings: intjEndings,
    relationshipEvaluations: intjRelationshipEvaluations,
    fuzzyFeedback: intjFuzzyFeedback,
  },
  ENTJ: {
    type: "ENTJ",
    description: TYPE_DESCRIPTIONS.ENTJ,
    questions: entjQuestions,
    endings: entjEndings,
    relationshipEvaluations: entjRelationshipEvaluations,
    fuzzyFeedback: entjFuzzyFeedback,
  },
  ESTJ: {
    type: "ESTJ",
    description: TYPE_DESCRIPTIONS.ESTJ,
    questions: estjQuestions,
    endings: estjEndings,
    relationshipEvaluations: estjRelationshipEvaluations,
    fuzzyFeedback: estjFuzzyFeedback,
  },
  ESTP: {
    type: "ESTP",
    description: TYPE_DESCRIPTIONS.ESTP,
    questions: estpQuestions,
    endings: estpEndings,
    relationshipEvaluations: estpRelationshipEvaluations,
    fuzzyFeedback: estpFuzzyFeedback,
  },
  ENTP: {
    type: "ENTP",
    description: TYPE_DESCRIPTIONS.ENTP,
    questions: entpQuestions,
    endings: entpEndings,
    relationshipEvaluations: entpRelationshipEvaluations,
    fuzzyFeedback: entpFuzzyFeedback,
  },
  ENFP: {
    type: "ENFP",
    description: TYPE_DESCRIPTIONS.ENFP,
    questions: enfpQuestions,
    endings: enfpEndings,
    relationshipEvaluations: enfpRelationshipEvaluations,
    fuzzyFeedback: enfpFuzzyFeedback,
  },
  ENFJ: {
    type: "ENFJ",
    description: TYPE_DESCRIPTIONS.ENFJ,
    questions: enfjQuestions,
    endings: enfjEndings,
    relationshipEvaluations: enfjRelationshipEvaluations,
    fuzzyFeedback: enfjFuzzyFeedback,
  },
  ESFJ: {
    type: "ESFJ",
    description: TYPE_DESCRIPTIONS.ESFJ,
    questions: esfjQuestions,
    endings: esfjEndings,
    relationshipEvaluations: esfjRelationshipEvaluations,
    fuzzyFeedback: esfjFuzzyFeedback,
  },
  ESFP: {
    type: "ESFP",
    description: TYPE_DESCRIPTIONS.ESFP,
    questions: esfpQuestions,
    endings: esfpEndings,
    relationshipEvaluations: esfpRelationshipEvaluations,
    fuzzyFeedback: esfpFuzzyFeedback,
  },
  INTP: {
    type: "INTP",
    description: TYPE_DESCRIPTIONS.INTP,
    questions: intpQuestions,
    endings: intpEndings,
    relationshipEvaluations: intpRelationshipEvaluations,
    fuzzyFeedback: intpFuzzyFeedback,
  },
  INFJ: {
    type: "INFJ",
    description: TYPE_DESCRIPTIONS.INFJ,
    questions: infjQuestions,
    endings: infjEndings,
    relationshipEvaluations: infjRelationshipEvaluations,
    fuzzyFeedback: infjFuzzyFeedback,
  },
  INFP: {
    type: "INFP",
    description: TYPE_DESCRIPTIONS.INFP,
    questions: infpQuestions,
    endings: infpEndings,
    relationshipEvaluations: infpRelationshipEvaluations,
    fuzzyFeedback: infpFuzzyFeedback,
  },
  ISTJ: {
    type: "ISTJ",
    description: TYPE_DESCRIPTIONS.ISTJ,
    questions: istjQuestions,
    endings: istjEndings,
    relationshipEvaluations: istjRelationshipEvaluations,
    fuzzyFeedback: istjFuzzyFeedback,
  },
  ISFJ: {
    type: "ISFJ",
    description: TYPE_DESCRIPTIONS.ISFJ,
    questions: isfjQuestions,
    endings: isfjEndings,
    relationshipEvaluations: isfjRelationshipEvaluations,
    fuzzyFeedback: isfjFuzzyFeedback,
  },
  ISFP: {
    type: "ISFP",
    description: TYPE_DESCRIPTIONS.ISFP,
    questions: isfpQuestions,
    endings: isfpEndings,
    relationshipEvaluations: isfpRelationshipEvaluations,
    fuzzyFeedback: isfpFuzzyFeedback,
  },
  ISTP: {
    type: "ISTP",
    description: TYPE_DESCRIPTIONS.ISTP,
    questions: istpQuestions,
    endings: istpEndings,
    relationshipEvaluations: istpRelationshipEvaluations,
    fuzzyFeedback: istpFuzzyFeedback,
  },
} as const satisfies Record<AvailableMbtiType, ContentPack>;

Object.values(contentPacks).forEach((pack) => validateContent(pack));

export function getContentPack(type: AvailableMbtiType): ContentPack {
  return contentPacks[type];
}
