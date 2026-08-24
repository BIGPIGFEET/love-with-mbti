import infjEndingDraft from "../../content/endings/infj-ending-content-draft.json" with { type: "json" };
import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const infjEndings = infjEndingDraft.endings as unknown as readonly EndingContent[];
export const infjRelationshipEvaluations =
  infjEndingDraft.relationshipEvaluations as unknown as readonly RelationshipEvaluationContent[];
export const infjFuzzyFeedback =
  infjEndingDraft.fuzzyFeedback as unknown as readonly FuzzyFeedbackContent[];

export const infjFeedbackTextById = Object.fromEntries(
  infjFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
