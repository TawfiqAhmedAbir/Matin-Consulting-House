import Image from "next/image";
import Link from "next/link";

import { homeContent } from "@/content/home";
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

export function Hero() {
  return (
    <section className="shell hero">
      <div className="hero__content">
        <div className="hero__logo-wrap">
          <Image
            src="/images/logo-matin.png"
            alt={siteMetadata.name}
            width={676}
            height={182}
            priority
            className="hero__logo"
          />
        </div>
        <h1 className="hero__headline">{homeContent.headline}</h1>
        <div className="button-row hero__buttons">
          <a
            className="button button--primary"
            href={homeContent.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={homeContent.primaryCta.ariaLabel}
          >
            <span className="button__label">{homeContent.primaryCta.label}</span>
            <ExternalLinkIcon />
          </a>
          <Link className="button button--secondary" href={homeContent.secondaryCta.href}>
            {homeContent.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
