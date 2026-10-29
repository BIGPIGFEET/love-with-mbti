import { AppHeader } from "./AppHeader.tsx";
import { AVAILABLE_MBTI_TYPES, TYPE_DESCRIPTIONS, type AvailableMbtiType } from "../content/content-pack.ts";

export function TypeSelectScreen({ onStart, loadingType, loadError }: {
  onStart: (type: AvailableMbtiType) => void;
  loadingType: AvailableMbtiType | null;
  loadError: string;
}) {
  return (
    <main className="page-shell select-page">
      <AppHeader />
      <section className="select-intro">
        <h1>你想先认识哪一种人？</h1>
        <p>不是标准答案，也不是心理诊断。你将面对十次具体的相处选择，看关系会走到哪里。</p>
        {loadingType ? <p role="status">正在加载 {loadingType} 的故事……</p> : null}
        {loadError ? <p role="alert">{loadError}</p> : null}
      </section>

      <section className="available-types" aria-label="已开放类型">
        {AVAILABLE_MBTI_TYPES.map((type) => {
          const titleId = `${type.toLowerCase()}-title`;
          return (
            <article className="featured-type" aria-labelledby={titleId} key={type}>
              <div>
                <span className="availability">已开放类型</span>
                <h2 id={titleId}>{type}</h2>
                <p>{TYPE_DESCRIPTIONS[type]}</p>
              </div>
              <button className="primary-button" type="button" disabled={loadingType !== null} onClick={() => onStart(type)}>
                {loadingType === type ? `正在加载 ${type}…` : `开始认识 ${type}`}
              </button>
            </article>
          );
        })}
      </section>

      <p className="disclaimer">角色是娱乐化的网络刻板印象集合体，不代表现实中的所有人格类型。</p>
    </main>
  );
}
