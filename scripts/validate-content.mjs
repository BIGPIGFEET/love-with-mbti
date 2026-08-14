import { contentPacks } from "../src/content/packs.ts";
import { validateContent } from "../src/content/schema.ts";

console.log(JSON.stringify({
  valid: true,
  packs: Object.fromEntries(Object.entries(contentPacks).map(([type, pack]) => {
    const effectBudgetWarnings = validateContent(pack);
    return [type, {
      questions: pack.questions.length,
      options: pack.questions.reduce((total, question) => total + question.options.length, 0),
      endings: pack.endings.length,
      relationshipEvaluations: pack.relationshipEvaluations.length,
      fuzzyFeedback: pack.fuzzyFeedback.length,
      effectBudgetWarnings,
    }];
  })),
}, null, 2));
