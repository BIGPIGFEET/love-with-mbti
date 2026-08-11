import { AppHeader } from "./AppHeader.tsx";

const types = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

export function TypeSelectScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="page-shell select-page">
      <AppHeader />
      <section className="select-intro">
        <h1>你想先认识哪一种人？</h1>
        <p>不是标准答案，也不是心理诊断。你将面对十次具体的相处选择，看关系会走到哪里。</p>
      </section>

      <section className="featured-type" aria-labelledby="entp-title">
        <div>
          <span className="availability">首个开放类型</span>
          <h2 id="entp-title">ENTP</h2>
          <p>十次新鲜感、边界、信任与长期兑现之间的取舍。</p>
        </div>
        <button className="primary-button" type="button" onClick={onStart}>
          开始认识 ENTP
        </button>
      </section>

      <section className="type-list" aria-labelledby="more-types-title">
        <div className="section-heading-row">
          <h2 id="more-types-title">其他类型</h2>
          <span>内容研究与平衡中</span>
        </div>
        <div className="type-grid">
          {types.map((type) =>
            type === "ENTP" ? null : (
              <button key={type} type="button" disabled aria-label={`${type}，筹备中`}>
                <strong>{type}</strong>
                <span>筹备中</span>
              </button>
            ),
          )}
        </div>
      </section>

      <p className="disclaimer">角色是娱乐化的网络刻板印象集合体，不代表现实中的所有 ENTP。</p>
    </main>
  );
}
