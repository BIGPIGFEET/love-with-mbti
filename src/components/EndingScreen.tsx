import { useState } from "react";
import type { EndingContent, RelationshipEvaluationContent, RelationState } from "../content/schema.ts";
import type { AvailableMbtiType } from "../content/content-pack.ts";
import { AppHeader } from "./AppHeader.tsx";
import { Icon } from "./Icons.tsx";
import { RelationMeters } from "./RelationMeters.tsx";

interface EndingScreenProps {
  ending: EndingContent;
  mbtiType: AvailableMbtiType;
  evaluation?: RelationshipEvaluationContent;
  state: RelationState;
  completedQuestion: number;
  onRestart: () => void;
  onBack: () => void;
}

export async function copyCurrentLink(): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(window.location.href);
    return;
  }

  const input = document.createElement("textarea");
  input.value = window.location.href;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  const didCopy = document.execCommand("copy");
  input.remove();

  if (!didCopy) {
    throw new Error("The browser rejected the clipboard fallback.");
  }
}

export function EndingScreen({
  ending,
  mbtiType,
  evaluation,
  state,
  completedQuestion,
  onRestart,
  onBack,
}: EndingScreenProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleCopy = async () => {
    try {
      await copyCurrentLink();
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <main className="page-shell ending-page">
      <AppHeader backLabel="返回类型选择" onBack={onBack} />

      <article className="ending-sheet">
        <p className="ending-progress">{mbtiType} · {completedQuestion === 10 ? "完成十题" : `第 ${completedQuestion} 题后结束`}</p>
        <h1>{ending.title}</h1>
        {evaluation ? <span className="evaluation-stamp">{evaluation.title}</span> : null}

        <blockquote className="ending-core-copy">{ending.coreCopy}</blockquote>
        <RelationMeters state={state} exact />

        <section className="ending-explanation">
          <h2>这段关系为什么走到这里</h2>
          <p>{ending.reasonCopy}</p>
          <h2>{evaluation ? "最终评价" : "关系结语"}</h2>
          <p>{evaluation?.copy ?? ending.stateSummary}</p>
        </section>
      </article>

      <div className="ending-actions">
        <button className="primary-button" type="button" onClick={onRestart}>
          <Icon name="restart" />
          重新挑战
        </button>
        <button className="secondary-button" type="button" onClick={handleCopy}>
          <Icon name="copy" />
          {copyStatus === "copied" ? "链接已复制" : "复制当前链接"}
        </button>
        {copyStatus === "error" ? <p className="copy-error">复制失败，请从浏览器地址栏复制。</p> : null}
        <button className="text-button" type="button" onClick={onBack}>
          <Icon name="arrow-left" />
          返回类型选择
        </button>
      </div>

      <p className="disclaimer">角色是娱乐化的网络刻板印象集合体，不代表现实中的所有 {mbtiType}。</p>
    </main>
  );
}
