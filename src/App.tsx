import { useEffect, useState } from "react";
import { FeedbackScreen } from "./components/FeedbackScreen.tsx";
import { EndingScreen } from "./components/EndingScreen.tsx";
import { QuestionScreen } from "./components/QuestionScreen.tsx";
import { TypeSelectScreen } from "./components/TypeSelectScreen.tsx";
import { endings, fuzzyFeedback, relationshipEvaluations } from "./content/endings.ts";
import { questions } from "./content/questions.ts";
import { validateContent } from "./content/schema.ts";
import type { EndingContent, QuestionOption, RelationshipEvaluationContent, RelationState } from "./content/schema.ts";
import { applyEffects, INITIAL_STATE, resolveEnding } from "./game/rules.ts";
import type { EndingResult } from "./game/rules.ts";

validateContent({ questions, endings, relationshipEvaluations, fuzzyFeedback });

type Screen = "select" | "question" | "feedback" | "ending";

function findEnding(id: EndingResult["endingId"]): EndingContent {
  const ending = endings.find((item) => item.id === id);
  if (!ending) throw new Error(`Missing ending content: ${id}`);
  return ending;
}

function findEvaluation(id: EndingResult["evaluationId"]): RelationshipEvaluationContent | undefined {
  if (!id) return undefined;
  return relationshipEvaluations.find((item) => item.id === id);
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("select");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [relationState, setRelationState] = useState<RelationState>(() => ({ ...INITIAL_STATE }));
  const [selectedOption, setSelectedOption] = useState<QuestionOption | null>(null);
  const [pendingEnding, setPendingEnding] = useState<EndingResult | null>(null);

  const question = questions[questionIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [screen, questionIndex]);

  const resetGame = (nextScreen: Screen) => {
    setQuestionIndex(0);
    setRelationState({ ...INITIAL_STATE });
    setSelectedOption(null);
    setPendingEnding(null);
    setScreen(nextScreen);
  };

  const handleChoose = (option: QuestionOption) => {
    const nextState = applyEffects(relationState, option.effects);
    const ending = resolveEnding(question.order, option, nextState);
    setRelationState(nextState);
    setSelectedOption(option);
    setPendingEnding(ending);
    setScreen("feedback");
  };

  const handleContinue = () => {
    if (pendingEnding) {
      setScreen("ending");
      return;
    }

    setSelectedOption(null);
    setQuestionIndex((index) => index + 1);
    setScreen("question");
  };

  if (screen === "select") {
    return <TypeSelectScreen onStart={() => resetGame("question")} />;
  }

  if (screen === "question") {
    return (
      <QuestionScreen
        question={question}
        state={relationState}
        onChoose={handleChoose}
        onBack={() => resetGame("select")}
      />
    );
  }

  if (screen === "feedback" && selectedOption) {
    return (
      <FeedbackScreen
        question={question}
        option={selectedOption}
        state={relationState}
        willEnd={pendingEnding !== null}
        onContinue={handleContinue}
        onBack={() => resetGame("select")}
      />
    );
  }

  if (screen === "ending" && pendingEnding) {
    return (
      <EndingScreen
        ending={findEnding(pendingEnding.endingId)}
        evaluation={findEvaluation(pendingEnding.evaluationId)}
        state={relationState}
        completedQuestion={question.order}
        onRestart={() => resetGame("question")}
        onBack={() => resetGame("select")}
      />
    );
  }

  return null;
}
