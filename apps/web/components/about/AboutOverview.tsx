import { aboutContent } from "@/content/about";

export function AboutOverview() {
  return (
    <section className="shell page-layout about-page-shell">
      <div className="about-layout">
        <div className="about-copy-block">
          <h1 className="about-title">{aboutContent.title}</h1>
          <p className="page-copy page-copy--large about-intro">{aboutContent.intro}</p>
        </div>
        <div className="about-panels">
          {aboutContent.panels.map((panel) => (
            <article key={panel.title} className="panel-card about-panel">
              <p className="panel-card__title">{panel.title}</p>
              <ul className="detail-list">
                {panel.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          <p className="page-footnote about-footnote">{aboutContent.footnote}</p>
        </div>
      </div>
    </section>
  );
}
