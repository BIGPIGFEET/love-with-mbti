import { endings, fuzzyFeedback, relationshipEvaluations } from "../src/content/endings.ts";
import { questions } from "../src/content/questions.ts";
import { validateContent } from "../src/content/schema.ts";

validateContent({ questions, endings, relationshipEvaluations, fuzzyFeedback });

console.log(
  JSON.stringify(
    {
      valid: true,
      questions: questions.length,
      options: questions.reduce((total, question) => total + question.options.length, 0),
      endings: endings.length,
      relationshipEvaluations: relationshipEvaluations.length,
      fuzzyFeedback: fuzzyFeedback.length,
    },
    null,
    2,
  ),
);
