import { contactContent } from "@/content/contact";
import { siteMetadata } from "@/content/site";

function ExternalLinkIcon() {
  return (
    <span className="button__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" focusable="false">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </span>
  );
}

export function ContactOverview() {
  return (
    <section className="shell contact-layout contact-page-shell">
      <div className="contact-layout__primary">
        <h1 className="contact-title">
          <span className="contact-title__word">Contact</span>
          <span className="contact-title__word">Us</span>
        </h1>
        <p className="page-copy page-copy--large contact-lead">{contactContent.lead}</p>
        <div className="contact-actions">
          <a
            className="button button--primary contact-cta"
            href={siteMetadata.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start a conversation, opens LinkedIn in a new tab"
          >
            <span className="button__label">Start a conversation</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
      <aside className="contact-card">
        <p className="eyebrow">{contactContent.detailsCard.label}</p>
        <h2>{contactContent.detailsCard.title}</h2>
        <p>{contactContent.detailsCard.body}</p>
        <div className="note-card contact-side-note">
          <span>{contactContent.detailsCard.bestFitLabel}</span>
          <strong>{contactContent.detailsCard.bestFit}</strong>
        </div>
        <div className="contact-detail-group">
          {contactContent.detailsCard.details.map((detail) => {
            const lines = detail.value.split("\n");

            return (
              <div key={detail.label} className="contact-detail">
                <span>{detail.label}</span>
                <strong>
                  {lines.map((line, index) => (
                    <span key={`${detail.label}-${index}`}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </strong>
              </div>
            );
          })}
        </div>
      </aside>
    </section>
  );
}
