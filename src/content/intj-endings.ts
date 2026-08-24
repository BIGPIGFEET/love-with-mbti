import intjEndingDraft from "../../content/endings/intj-ending-content-draft.json" with { type: "json" };
import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const intjEndings = intjEndingDraft.endings as unknown as readonly EndingContent[];
export const intjRelationshipEvaluations =
  intjEndingDraft.relationshipEvaluations as unknown as readonly RelationshipEvaluationContent[];
export const intjFuzzyFeedback =
  intjEndingDraft.fuzzyFeedback as unknown as readonly FuzzyFeedbackContent[];

export const intjFeedbackTextById = Object.fromEntries(
  intjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
