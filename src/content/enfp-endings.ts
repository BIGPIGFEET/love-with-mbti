import enfpEndingDraft from "../../content/endings/enfp-ending-content-draft.json" with { type: "json" };
import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const enfpEndings = enfpEndingDraft.endings as unknown as readonly EndingContent[];
export const enfpRelationshipEvaluations =
  enfpEndingDraft.relationshipEvaluations as unknown as readonly RelationshipEvaluationContent[];
export const enfpFuzzyFeedback =
  enfpEndingDraft.fuzzyFeedback as unknown as readonly FuzzyFeedbackContent[];

export const enfpFeedbackTextById = Object.fromEntries(
  enfpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
