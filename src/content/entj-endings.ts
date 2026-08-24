import entjEndingDraft from "../../content/endings/entj-ending-content-draft.json" with { type: "json" };
import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const entjEndings = entjEndingDraft.endings as unknown as readonly EndingContent[];
export const entjRelationshipEvaluations =
  entjEndingDraft.relationshipEvaluations as unknown as readonly RelationshipEvaluationContent[];
export const entjFuzzyFeedback =
  entjEndingDraft.fuzzyFeedback as unknown as readonly FuzzyFeedbackContent[];

export const entjFeedbackTextById = Object.fromEntries(
  entjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
