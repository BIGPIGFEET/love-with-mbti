import { TYPE_DESCRIPTIONS, type AvailableMbtiType, type ContentPack } from "./content-pack.ts";
import { validateContent } from "./schema.ts";

const loaders = {
  INTJ: async () => {
    const [{ intjQuestions: questions }, {
      intjEndings: endings,
      intjRelationshipEvaluations: relationshipEvaluations,
      intjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./intj-questions.ts"),
      import("./intj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ENTJ: async () => {
    const [{ entjQuestions: questions }, {
      entjEndings: endings,
      entjRelationshipEvaluations: relationshipEvaluations,
      entjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./entj-questions.ts"),
      import("./entj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ESTJ: async () => {
    const [{ estjQuestions: questions }, {
      estjEndings: endings,
      estjRelationshipEvaluations: relationshipEvaluations,
      estjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./estj-questions.ts"),
      import("./estj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ESTP: async () => {
    const [{ estpQuestions: questions }, {
      estpEndings: endings,
      estpRelationshipEvaluations: relationshipEvaluations,
      estpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./estp-questions.ts"),
      import("./estp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ENTP: async () => {
    const [{ entpQuestions: questions }, {
      entpEndings: endings,
      entpRelationshipEvaluations: relationshipEvaluations,
      entpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./entp-questions.ts"),
      import("./entp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ENFP: async () => {
    const [{ enfpQuestions: questions }, {
      enfpEndings: endings,
      enfpRelationshipEvaluations: relationshipEvaluations,
      enfpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./enfp-questions.ts"),
      import("./enfp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ENFJ: async () => {
    const [{ enfjQuestions: questions }, {
      enfjEndings: endings,
      enfjRelationshipEvaluations: relationshipEvaluations,
      enfjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./enfj-questions.ts"),
      import("./enfj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ESFJ: async () => {
    const [{ esfjQuestions: questions }, {
      esfjEndings: endings,
      esfjRelationshipEvaluations: relationshipEvaluations,
      esfjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./esfj-questions.ts"),
      import("./esfj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ESFP: async () => {
    const [{ esfpQuestions: questions }, {
      esfpEndings: endings,
      esfpRelationshipEvaluations: relationshipEvaluations,
      esfpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./esfp-questions.ts"),
      import("./esfp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  INTP: async () => {
    const [{ intpQuestions: questions }, {
      intpEndings: endings,
      intpRelationshipEvaluations: relationshipEvaluations,
      intpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./intp-questions.ts"),
      import("./intp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  INFJ: async () => {
    const [{ infjQuestions: questions }, {
      infjEndings: endings,
      infjRelationshipEvaluations: relationshipEvaluations,
      infjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./infj-questions.ts"),
      import("./infj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  INFP: async () => {
    const [{ infpQuestions: questions }, {
      infpEndings: endings,
      infpRelationshipEvaluations: relationshipEvaluations,
      infpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./infp-questions.ts"),
      import("./infp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ISTJ: async () => {
    const [{ istjQuestions: questions }, {
      istjEndings: endings,
      istjRelationshipEvaluations: relationshipEvaluations,
      istjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./istj-questions.ts"),
      import("./istj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ISFJ: async () => {
    const [{ isfjQuestions: questions }, {
      isfjEndings: endings,
      isfjRelationshipEvaluations: relationshipEvaluations,
      isfjFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./isfj-questions.ts"),
      import("./isfj-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ISFP: async () => {
    const [{ isfpQuestions: questions }, {
      isfpEndings: endings,
      isfpRelationshipEvaluations: relationshipEvaluations,
      isfpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./isfp-questions.ts"),
      import("./isfp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
  ISTP: async () => {
    const [{ istpQuestions: questions }, {
      istpEndings: endings,
      istpRelationshipEvaluations: relationshipEvaluations,
      istpFuzzyFeedback: fuzzyFeedback,
    }] = await Promise.all([
      import("./istp-questions.ts"),
      import("./istp-endings.ts"),
    ]);
    return { questions, endings, relationshipEvaluations, fuzzyFeedback };
  },
} satisfies Record<AvailableMbtiType, () => Promise<Omit<ContentPack, "type" | "description">>>;

export async function loadContentPack(type: AvailableMbtiType): Promise<ContentPack> {
  const content = await loaders[type]();
  validateContent(content);
  return { type, description: TYPE_DESCRIPTIONS[type], ...content };
}
