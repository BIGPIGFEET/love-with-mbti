import type { StageId } from "../content/schema.ts";

const stages: Array<{ id: StageId; label: string }> = [
  { id: "first_meeting", label: "初识" },
  { id: "contact", label: "接触" },
  { id: "familiarity", label: "熟悉" },
  { id: "ambiguity", label: "暧昧" },
];

export function StageProgress({ stage, order }: { stage: StageId; order: number }) {
  const activeIndex = stages.findIndex((item) => item.id === stage);

  return (
    <div className="stage-block" aria-label={`当前阶段：${stages[activeIndex].label}，第 ${order} 题，共 10 题`}>
      <ol className="stage-progress">
        {stages.map((item, index) => (
          <li className={index <= activeIndex ? "is-reached" : ""} key={item.id}>
            <span className="stage-dot" aria-hidden="true" />
            <span>{item.label}</span>
          </li>
        ))}
      </ol>
      <p className="question-count">
        第 <strong>{order}</strong> / 10 题
      </p>
    </div>
  );
}
