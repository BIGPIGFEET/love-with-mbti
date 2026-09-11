import { AppHeader } from "./AppHeader.tsx";
import { AVAILABLE_MBTI_TYPES, type AvailableMbtiType } from "../content/content-pack.ts";
import { contentPacks } from "../content/packs.ts";

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

      <p className="disclaimer">角色是娱乐化的网络刻板印象集合体，不代表现实中的所有人格类型。</p>
    </main>
  );
}
