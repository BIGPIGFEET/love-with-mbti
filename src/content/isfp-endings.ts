import isfpEndingDraft from "../../content/endings/isfp-ending-content-draft.json" with { type: "json" };
import type {
  EndingContent,
  FuzzyFeedbackContent,
  RelationshipEvaluationContent,
} from "./schema.ts";

export const isfpEndings = isfpEndingDraft.endings as unknown as readonly EndingContent[];
export const isfpRelationshipEvaluations =
  isfpEndingDraft.relationshipEvaluations as unknown as readonly RelationshipEvaluationContent[];
export const isfpFuzzyFeedback = isfpEndingDraft.fuzzyFeedback as unknown as readonly FuzzyFeedbackContent[];

export const isfpFeedbackTextById = Object.fromEntries(
  isfpFuzzyFeedback.map((item) => [item.id, item.text]),
) as Readonly<Record<FuzzyFeedbackContent["id"], string>>;
