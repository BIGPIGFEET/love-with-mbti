import type { CSSProperties } from "react";
import type { RelationKey, RelationState } from "../content/schema.ts";

const meterMeta: Array<{ key: RelationKey; label: string; hint: string }> = [
  { key: "attraction", label: "吸引", hint: "越高越有火花" },
  { key: "trust", label: "信任", hint: "越高越放心" },
  { key: "comfort", label: "舒适", hint: "越高越自在" },
  { key: "conflict", label: "冲突", hint: "越低越平静" },
];

function fuzzyState(key: RelationKey, value: number): string {
  if (key === "conflict") {
    if (value <= 20) return "气氛平静";
    if (value <= 40) return "偶有摩擦";
    if (value <= 60) return "有些紧绷";
    if (value < 80) return "冲突升温";
    return "已经失控";
  }

  const labels: Record<Exclude<RelationKey, "conflict">, string[]> = {
    attraction: ["兴趣寥寥", "有些兴趣", "明显靠近", "很被吸引", "几乎心动"],
    trust: ["仍有戒心", "开始相信", "逐渐放心", "相当信任", "完全托付"],
    comfort: ["很不自在", "稍有拘谨", "还算自在", "相处放松", "毫无防备"],
  };
  const index = value <= 20 ? 0 : value <= 40 ? 1 : value <= 60 ? 2 : value <= 80 ? 3 : 4;
  return labels[key][index];
}

export function RelationMeters({ state, exact = false }: { state: RelationState; exact?: boolean }) {
  return (
    <section className={`relation-meters ${exact ? "is-exact" : ""}`} aria-label="四维关系状态">
      {meterMeta.map(({ key, label, hint }) => {
        const value = state[key];
        const style = { "--meter-scale": value / 100 } as CSSProperties;
        const accessibleLabel = exact ? `${label} ${value} / 100，${hint}` : `${label}：${fuzzyState(key, value)}，${hint}`;

        return (
          <div className={`relation-meter meter-${key}`} key={key}>
            <div className="meter-heading">
              <span>{label}</span>
              <strong>{exact ? `${value} / 100` : fuzzyState(key, value)}</strong>
            </div>
            <div
              className="meter-track"
              role={exact ? "progressbar" : "img"}
              aria-valuemin={exact ? 0 : undefined}
              aria-valuemax={exact ? 100 : undefined}
              aria-valuenow={exact ? value : undefined}
              aria-label={accessibleLabel}
              style={style}
            >
              <span className="meter-fill" />
            </div>
            <span className="meter-hint">{hint}</span>
          </div>
        );
      })}
    </section>
  );
}
