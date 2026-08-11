import type { Question, QuestionOption, RelationState } from "../content/schema.ts";
import { AppHeader } from "./AppHeader.tsx";
import { Icon } from "./Icons.tsx";
import { RelationMeters } from "./RelationMeters.tsx";
import { StageProgress } from "./StageProgress.tsx";

interface FeedbackScreenProps {
  question: Question;
  option: QuestionOption;
  state: RelationState;
  willEnd: boolean;
  onContinue: () => void;
  onBack: () => void;
}

export function FeedbackScreen({ question, option, state, willEnd, onContinue, onBack }: FeedbackScreenProps) {
  return (
    <main className="page-shell game-page feedback-page">
      <AppHeader backLabel="返回类型选择" onBack={onBack} />
      <StageProgress stage={question.stage} order={question.order} />
      <RelationMeters state={state} />

      <section className="feedback-sheet" aria-live="polite">
        <div className="chosen-response">
          <Icon name="check" />
          <div>
            <span>你的回应</span>
            <p>{option.text}</p>
          </div>
        </div>
        <div className="npc-reaction">
          <span className="sheet-label">TA 的反应</span>
          <blockquote>{option.npcResponse}</blockquote>
        </div>
        <ul className="feedback-notes">
          {option.feedbackText.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </section>

      <button className="primary-button continue-button" type="button" onClick={onContinue}>
        {willEnd ? "查看结局" : "继续下一题"}
      </button>
    </main>
  );
}
