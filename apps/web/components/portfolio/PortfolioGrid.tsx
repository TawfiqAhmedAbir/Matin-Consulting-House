import { portfolioContent } from "@/content/portfolio";

export function PortfolioGrid() {
  return (
    <section className="shell page-layout portfolio-page-shell">
      <div className="portfolio-shell">
        <h1 className="portfolio-title">{portfolioContent.title}</h1>
        <div className="portfolio-grid">
          {portfolioContent.items.map((item) => (
            <article key={item.name} className="portfolio-card">
              <div className="portfolio-card__media" aria-hidden="true" />
              <div className="portfolio-card__body">
                <h2 className="portfolio-card__title">{item.name}</h2>
                <p className="portfolio-card__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
