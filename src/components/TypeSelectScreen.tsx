import { AppHeader } from "./AppHeader.tsx";
import { AVAILABLE_MBTI_TYPES, type AvailableMbtiType } from "../content/content-pack.ts";
import { contentPacks } from "../content/packs.ts";

const types = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

const availableTypes = new Set<string>(AVAILABLE_MBTI_TYPES);

export function TypeSelectScreen({ onStart }: { onStart: (type: AvailableMbtiType) => void }) {
  return (
    <main className="page-shell select-page">
      <AppHeader />
      <section className="select-intro">
        <h1>你想先认识哪一种人？</h1>
        <p>不是标准答案，也不是心理诊断。你将面对十次具体的相处选择，看关系会走到哪里。</p>
      </section>

      <section className="available-types" aria-label="已开放类型">
        {AVAILABLE_MBTI_TYPES.map((type) => {
          const pack = contentPacks[type];
          const titleId = `${type.toLowerCase()}-title`;
          return (
            <article className="featured-type" aria-labelledby={titleId} key={type}>
              <div>
                <span className="availability">已开放类型</span>
                <h2 id={titleId}>{type}</h2>
                <p>{pack.description}</p>
              </div>
              <button className="primary-button" type="button" onClick={() => onStart(type)}>
                开始认识 {type}
              </button>
            </article>
          );
        })}
      </section>

      <section className="type-list" aria-labelledby="more-types-title">
        <div className="section-heading-row">
          <h2 id="more-types-title">其他类型</h2>
          <span>内容研究与平衡中</span>
        </div>
        <div className="type-grid">
          {types.map((type) =>
            availableTypes.has(type) ? null : (
              <button key={type} type="button" disabled aria-label={`${type}，筹备中`}>
                <strong>{type}</strong>
                <span>筹备中</span>
              </button>
            ),
          )}
        </div>
      </section>

      <p className="disclaimer">角色是娱乐化的网络刻板印象集合体，不代表现实中的所有人格类型。</p>
    </main>
  );
}
