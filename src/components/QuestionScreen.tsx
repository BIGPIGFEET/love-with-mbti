import type { Question, QuestionOption, RelationState } from "../content/schema.ts";
import { AppHeader } from "./AppHeader.tsx";
import { RelationMeters } from "./RelationMeters.tsx";
import { StageProgress } from "./StageProgress.tsx";

interface QuestionScreenProps {
  question: Question;
  state: RelationState;
  onChoose: (option: QuestionOption) => void;
  onBack: () => void;
}

export function QuestionScreen({ question, state, onChoose, onBack }: QuestionScreenProps) {
  return (
    <main className="page-shell game-page">
      <AppHeader backLabel="返回类型选择" onBack={onBack} />
      <StageProgress stage={question.stage} order={question.order} />
      <RelationMeters state={state} />

      <section className="event-sheet" aria-labelledby="question-prompt">
        <div className="scene-strip">
          <span className="sheet-label">关系事件</span>
          <p>{question.scene}</p>
        </div>
        <blockquote className="npc-quote">{question.npcQuote}</blockquote>

        <fieldset className="response-fieldset">
          <legend id="question-prompt">{question.prompt}</legend>
          <div className="response-list">
            {question.options.map((option, index) => (
              <button className="response-option" key={option.id} type="button" onClick={() => onChoose(option)}>
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span>{option.text}</span>
                <span className="option-mark" aria-hidden="true" />
              </button>
            ))}
          </div>
        </fieldset>
      </section>

      <p className="disclaimer">角色是娱乐化的网络刻板印象集合体，不代表现实中的所有 ENTP。</p>
    </main>
  );
}
