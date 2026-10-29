import { useEffect, useState } from "react";
import { FeedbackScreen } from "./components/FeedbackScreen.tsx";
import { EndingScreen } from "./components/EndingScreen.tsx";
import { QuestionScreen } from "./components/QuestionScreen.tsx";
import { TypeSelectScreen } from "./components/TypeSelectScreen.tsx";
import { loadContentPack } from "./content/load-pack.ts";
import type { AvailableMbtiType, ContentPack } from "./content/content-pack.ts";
import type { EndingContent, QuestionOption, RelationshipEvaluationContent, RelationState } from "./content/schema.ts";
import { applyEffects, INITIAL_STATE, resolveEnding } from "./game/rules.ts";
import type { EndingResult } from "./game/rules.ts";

type Screen = "select" | "question" | "feedback" | "ending";

function findEnding(endings: readonly EndingContent[], id: EndingResult["endingId"]): EndingContent {
  const ending = endings.find((item) => item.id === id);
  if (!ending) throw new Error(`Missing ending content: ${id}`);
  return ending;
}

function findEvaluation(
  evaluations: readonly RelationshipEvaluationContent[],
  id: EndingResult["evaluationId"],
): RelationshipEvaluationContent | undefined {
  if (!id) return undefined;
  return evaluations.find((item) => item.id === id);
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("select");
  const [content, setContent] = useState<ContentPack | null>(null);
  const [loadingType, setLoadingType] = useState<AvailableMbtiType | null>(null);
  const [loadError, setLoadError] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [relationState, setRelationState] = useState<RelationState>(() => ({ ...INITIAL_STATE }));
  const [selectedOption, setSelectedOption] = useState<QuestionOption | null>(null);
  const [pendingEnding, setPendingEnding] = useState<EndingResult | null>(null);

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

  const startGame = async (type: AvailableMbtiType) => {
    setLoadingType(type);
    setLoadError("");
    try {
      setContent(await loadContentPack(type));
      resetGame("question");
    } catch {
      setLoadError("故事加载失败，请检查网络后重新选择类型。");
    } finally {
      setLoadingType(null);
    }
  };

  if (screen === "select" || !content) {
    return <TypeSelectScreen onStart={startGame} loadingType={loadingType} loadError={loadError} />;
  }

  const question = content.questions[questionIndex];

  const handleChoose = (option: QuestionOption) => {
    const nextState = applyEffects(relationState, option.effects);
    const ending = resolveEnding(question.order, nextState);
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

  if (screen === "question") {
    return (
      <QuestionScreen
        question={question}
        mbtiType={content.type}
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
        ending={findEnding(content.endings, pendingEnding.endingId)}
        mbtiType={content.type}
        evaluation={findEvaluation(content.relationshipEvaluations, pendingEnding.evaluationId)}
        state={relationState}
        completedQuestion={question.order}
        onRestart={() => resetGame("question")}
        onBack={() => resetGame("select")}
      />
    );
  }

  return null;
}
