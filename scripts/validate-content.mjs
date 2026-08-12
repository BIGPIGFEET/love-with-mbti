import { contentPacks } from "../src/content/packs.ts";

console.log(JSON.stringify({
  valid: true,
  packs: Object.fromEntries(Object.entries(contentPacks).map(([type, pack]) => [type, {
    questions: pack.questions.length,
    options: pack.questions.reduce((total, question) => total + question.options.length, 0),
    endings: pack.endings.length,
    relationshipEvaluations: pack.relationshipEvaluations.length,
    fuzzyFeedback: pack.fuzzyFeedback.length,
  }])),
}, null, 2));
