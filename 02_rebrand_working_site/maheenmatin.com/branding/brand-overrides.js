(function () {
  "use strict";

  var BRAND_NAME = "Matin Consulting House";
  /* Bump query when replacing logo-matin.png so browsers skip stale cache */
  var LOGO_ASSET = "assets/images/logo-matin.png?v=dedf6326";
  var LINKEDIN_URL = "https://www.linkedin.com/company/matin-consulting-house/";
  var HOME_ROUTE = "/";
  var ABOUT_ROUTE = "/about";
  var PROJECTS_ROUTE = "/projects";
  var PORTFOLIO_PUBLIC_PATH = "/portfolio";
  var CONTACT_ROUTE = "/contact";

  var HOME_LINK_SELECTOR = ".nav-container nav a:not(.about-link):not(.projects-link):not(.contact-link)";
  var ABOUT_LINK_SELECTOR = ".nav-container nav a.about-link";
  var PROJECTS_LINK_SELECTOR = ".nav-container nav a.projects-link";
  var CONTACT_LINK_SELECTOR = ".nav-container nav a.contact-link";
  var PROJECT_TEXT_NODES_SELECTOR = ".images-container .image-box .content *";

  var NAV_LABEL_HOME = "Home";
  var NAV_LABEL_ABOUT = "About";
  var NAV_LABEL_PORTFOLIO = "Portfolio";
  var NAV_LABEL_CONTACT = "Contact";

  function buildNavIconSvg(innerPaths) {
    return (
      '<svg class="mch-nav-link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      innerPaths +
      "</svg>"
    );
  }

  var SVG_NAV_HOME = buildNavIconSvg(
    '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
  );
  var SVG_NAV_ABOUT = buildNavIconSvg(
    '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  );
  var SVG_NAV_PORTFOLIO = buildNavIconSvg(
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="2" y1="13" x2="22" y2="13"/>'
  );
  var SVG_NAV_CONTACT = buildNavIconSvg(
    '<path d="M22 17V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/><path d="M2 7l10 7 10-7"/>'
  );

  var HERO_HEADLINE =
    "Independent consultancy pairing digital strategy with business intelligence for SMEs and NPOs";
  var HERO_PRIMARY_CTA = "Start a conversation";
  var HERO_SECONDARY_CTA = "View Our Work";
  var HERO_PRIMARY_ARIA_LABEL = "Start a conversation, opens LinkedIn in a new tab";
  var HERO_STAGGER_SESSION_KEY = "mch_hero_stagger_seen";
  var PROJECTS_DATA = [
    {
      name: "Luxury Travel Concierge",
      description: "SME with international presence"
    },
    {
      name: "Aspierations",
      description: "CIC empowering autistic professionals"
    },
    {
      name: "NHS",
      description: "Royal Free London"
    },
    {
      name: "Bright Futures",
      description: "NPO for children with long-term illness"
    }
  ];

  var ABOUT_MAIN_MARKUP =
    '<main class="about-page">' +
    '<section class="about-layout">' +
    '<div class="about-copy">' +
    '<h1 class="about-title">About Matin Consulting House</h1>' +
    '<p class="mch-page-intro about-intro">' +
    "Matin Consulting House is an independent consultancy supporting SMEs across strategy and delivery, turning objectives into shipped solutions. We provide data-driven recommendations and engineer the BI pipeline to fuel them. Advisory services are offered pro bono for NPOs." +
    "</p>" +
    "</div>" +
    '<div class="about-panels">' +
    '<article class="about-panel">' +
    "<p><strong>Retained on a 6-figure, CEO-sponsored digital transformation (boutique luxury travel concierge):</strong></p>" +
    '<ul class="mch-side-list">' +
    "<li>RevOps diagnostics and funnel insights</li>" +
    "<li>MarTech strategy and implementation design</li>" +
    "<li>Executive advisory and delivery governance</li>" +
    "</ul>" +
    "</article>" +
    '<article class="about-panel">' +
    "<p><strong>Pro bono advisory for Aspierations (CIC for autistic professionals):</strong></p>" +
    '<ul class="mch-side-list">' +
    "<li>5-figure GTM strategy and revenue forecasting</li>" +
    "<li>Market positioning and operational cost modelling</li>" +
    "</ul>" +
    "</article>" +
    '<p class="about-body-footnote">Additional engagements: NHS (Royal Free London) and Bright Futures (with UCL Research Consultancy Clinic)</p>' +
    "</div>" +
    "</section>" +
    "</main>";

  /* Appended last to <head> so it wins over CRA/style-in-JS that loads after brand-overrides.css */
  var ABOUT_TYPOGRAPHY_LAYER_CSS =
    "#about-text-zone.mch-about-tuned main.about-page .about-title{font-size:clamp(2.9rem,6vw,4.7rem)!important;line-height:1.02!important;font-weight:700!important;margin:0!important;letter-spacing:-0.04em!important;color:var(--mch-text)!important;text-align:left!important;text-shadow:0 10px 32px rgba(0,0,0,.28),0 0 18px rgba(215,184,126,.08)!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-intro{font-size:clamp(1.05rem,1.1vw + .7rem,1.22rem)!important;line-height:1.8!important;margin:1.35rem 0 0!important;max-width:31rem!important;padding-left:0!important;color:var(--mch-text-soft)!important;text-align:left!important;font-weight:500!important;border-left:none!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel>p{font-size:1.08rem!important;line-height:1.6!important;margin:0 0 .85rem!important;color:var(--mch-text)!important;text-align:left!important;letter-spacing:-.01em!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel>p strong{font-weight:700!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel .mch-side-list li{font-size:.99rem!important;line-height:1.72!important;color:var(--mch-text-soft)!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-body-footnote{font-size:.95rem!important;line-height:1.65!important;margin:.35rem 0 0!important;padding:1rem 1.1rem 0!important;color:var(--mch-text-muted)!important;text-align:left!important;letter-spacing:.01em!important}" +
    "@media (max-width:960px){" +
    "#about-text-zone.mch-about-tuned main.about-page .about-title{font-size:clamp(2.35rem,8vw,3.4rem)!important;text-align:center!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-intro{font-size:clamp(1rem,2.8vw,1.12rem)!important;max-width:none!important;text-align:center!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel>p{font-size:1.02rem!important}" +
    "}";

  var ABOUT_LAYOUT_LAYER_CSS =
    "#about-text-zone.mch-about-tuned{text-align:left!important;padding-top:0!important}" +
    "#about-text-zone.mch-about-tuned main.about-page{width:100%!important;min-width:0!important;margin:0!important;padding:0!important;background:transparent!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-layout{display:grid!important;grid-template-columns:minmax(0,1.02fr) minmax(340px,.98fr)!important;align-items:start!important;column-gap:clamp(30px,4vw,64px)!important;row-gap:clamp(22px,3vh,34px)!important;max-width:min(1160px,100%)!important;margin:0 auto!important;padding:clamp(2.4rem,6vh,4.5rem) 1.5rem 4.5rem!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-copy{position:relative!important;display:flex!important;flex-direction:column!important;justify-content:flex-start!important;align-self:center!important;min-width:0!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-copy::before{content:''!important;position:absolute!important;inset:-4rem auto auto -3rem!important;width:18rem!important;height:18rem!important;border-radius:999px!important;background:radial-gradient(circle,rgba(214,183,126,.16) 0%,rgba(214,183,126,.06) 35%,rgba(214,183,126,0) 72%)!important;filter:blur(18px)!important;pointer-events:none!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panels{position:relative!important;display:grid!important;grid-template-columns:1fr!important;gap:clamp(18px,2.4vh,26px)!important;min-width:0!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panels::before{content:''!important;position:absolute!important;inset:6% -8% auto auto!important;width:14rem!important;height:14rem!important;border-radius:999px!important;background:radial-gradient(circle,rgba(198,169,108,.13) 0%,rgba(41,92,86,.12) 38%,rgba(0,0,0,0) 72%)!important;filter:blur(22px)!important;pointer-events:none!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel{position:relative!important;overflow:hidden!important;padding:clamp(18px,2.2vh,24px) clamp(18px,2.4vw,26px)!important;border:1px solid rgba(201,175,122,.28)!important;border-radius:18px!important;background:linear-gradient(180deg,rgba(18,49,47,.9),rgba(8,23,28,.92))!important;box-shadow:0 22px 52px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,233,194,.06)!important;-webkit-backdrop-filter:blur(8px)!important;backdrop-filter:blur(8px)!important;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease,background .28s ease!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel::before{content:''!important;position:absolute!important;inset:0!important;background:linear-gradient(180deg,rgba(255,236,205,.12),rgba(255,236,205,0) 28%,rgba(255,255,255,0) 100%)!important;pointer-events:none!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel::after{content:''!important;position:absolute!important;inset:auto -18% -45% auto!important;width:12rem!important;height:12rem!important;border-radius:999px!important;background:radial-gradient(circle,rgba(214,183,126,.14) 0%,rgba(214,183,126,0) 70%)!important;filter:blur(8px)!important;pointer-events:none!important;opacity:.9!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel>p::before{content:''!important;display:block!important;width:2.4rem!important;height:1px!important;margin:0 0 .9rem!important;background:linear-gradient(90deg,rgba(225,198,142,.95),rgba(225,198,142,0))!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel:hover{transform:translateY(-4px)!important;border-color:rgba(225,198,142,.42)!important;box-shadow:0 28px 64px rgba(0,0,0,.34),0 0 0 1px rgba(255,232,192,.05) inset,0 0 28px rgba(214,183,126,.08)!important;background:linear-gradient(180deg,rgba(21,56,53,.94),rgba(9,25,30,.96))!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel .mch-side-list{margin:0!important;padding-left:0!important;list-style:none!important;text-align:left!important;display:grid!important;gap:.42rem!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel .mch-side-list li{position:relative!important;padding-left:1.25rem!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel .mch-side-list li::before{left:.2rem!important;top:.55em!important;width:8px!important;height:8px!important;background:rgba(212,190,154,.88)!important;opacity:1!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-body-footnote{position:relative!important;border-top:1px solid rgba(201,175,122,.18)!important;background:linear-gradient(180deg,rgba(255,236,205,.03),rgba(255,236,205,0))!important;border-radius:10px!important}" +
    "@media (prefers-reduced-motion:reduce){" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel{transition:none!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-panel:hover{transform:none!important}" +
    "}" +
    "@media (max-width:960px){" +
    "#about-text-zone.mch-about-tuned main.about-page .about-layout{grid-template-columns:1fr!important;max-width:min(44rem,100%)!important;padding:2.8rem 1.25rem 3.5rem!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-copy{align-self:stretch!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-copy::before{left:50%!important;transform:translateX(-50%)!important;inset:-3rem auto auto 50%!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-copy::after{display:none!important}" +
    "#about-text-zone.mch-about-tuned main.about-page .about-body-footnote{text-align:center!important}" +
    "}";

  var CONTACT_SIDE_MARKUP =
    "<p class=\"mch-side-card-label\">Contact details</p>" +
    "<h2>Business enquiries</h2>" +
    "<p>Strategy, delivery, BI pipeline thinking, and advisory conversations for SMEs.</p>" +
    '<div class="mch-contact-detail-group">' +
    '<div class="mch-contact-detail"><span>Location</span><strong>London</strong></div>' +
    '<div class="mch-contact-detail"><span>Address</span><strong>Gower Street<br>London<br>WC1E 6BT</strong></div>' +
    '<div class="mch-contact-detail"><span>Special note</span><strong>Pro bono advisory may be available for NPOs where there is a strong fit.</strong></div>' +
    "</div>";

  var PROJECTS_INTRO_COPY = "A concise selection of build work that reflects execution capability across product, web, and digital delivery.";

  var MOBILE_MENU_MARKUP =
    '<div class="mch-mobile-menu__backdrop" data-close="1"></div>' +
    '<div class="mch-mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">' +
    '<button type="button" class="mch-mobile-menu__close" aria-label="Close navigation" data-close="1">&times;</button>' +
    '<a class="mch-mobile-menu__link" href="/" data-route="/"><span class="mch-nav-link-icon-wrap" aria-hidden="true">' +
    SVG_NAV_HOME +
    '</span><span class="mch-nav-link-text">' +
    NAV_LABEL_HOME +
    "</span></a>" +
    '<a class="mch-mobile-menu__link" href="/about" data-route="/about"><span class="mch-nav-link-icon-wrap" aria-hidden="true">' +
    SVG_NAV_ABOUT +
    '</span><span class="mch-nav-link-text">About</span></a>' +
    '<a class="mch-mobile-menu__link" href="' +
    PORTFOLIO_PUBLIC_PATH +
    '" data-route="' +
    PROJECTS_ROUTE +
    '"><span class="mch-nav-link-icon-wrap" aria-hidden="true">' +
    SVG_NAV_PORTFOLIO +
    '</span><span class="mch-nav-link-text">Portfolio</span></a>' +
    '<a class="mch-mobile-menu__link" href="/contact" data-route="/contact"><span class="mch-nav-link-icon-wrap" aria-hidden="true">' +
    SVG_NAV_CONTACT +
    '</span><span class="mch-nav-link-text">Contact</span></a>' +
    "</div>";

  var scheduled = false;

  function query(selector, root) {
    return (root || document).querySelector(selector);
  }

  function queryAll(selector, root) {
    return (root || document).querySelectorAll(selector);
  }

  function setText(el, value) {
    if (el && el.textContent !== value) {
      el.textContent = value;
    }
  }

  function setHTML(el, value) {
    if (el && el.innerHTML !== value) {
      el.innerHTML = value;
    }
  }

  function removeEl(el) {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  function hrefIsLinkedInContact(a) {
    var h = ((a && a.getAttribute("href")) || "").toLowerCase();
    return h.indexOf("linkedin.com") !== -1;
  }

  /* CRA contact route injects a default <p> (“Feel free to reach out…”) that React may re-append after we rewrite .text-zone. */
  function stripStrayContactParagraphs(container) {
    if (!container) return;
    queryAll(".text-zone", container).forEach(function (zone) {
      queryAll("p", zone).forEach(function (p) {
        if (p.classList.contains("mch-page-intro")) return;
        if (p.closest(".mch-contact-actions")) return;
        removeEl(p);
      });
      queryAll(".mch-rich-copy", zone).forEach(removeEl);
    });
  }

  /* Single outbound CTA (LinkedIn). Strip stray React buttons / “Learn more” links anywhere in #contact-container. */
  function enforceContactOnlyLinkedInCTA(container) {
    if (!container) return;
    var linkedinKept = false;
    queryAll("a", container).forEach(function (a) {
      if (hrefIsLinkedInContact(a)) {
        if (linkedinKept) removeEl(a);
        else linkedinKept = true;
      } else {
        removeEl(a);
      }
    });
    queryAll(
      "button, [role='button'], input[type='submit'], input[type='button']",
      container
    ).forEach(removeEl);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function buildProjectsGridMarkup() {
    return PROJECTS_DATA.map(function (project) {
      return (
        '<article class="image-box mch-project-card">' +
        '<div class="portfolio-image mch-project-placeholder" aria-hidden="true"></div>' +
        '<div class="content">' +
        '<h3 class="title">' +
        escapeHtml(project.name) +
        "</h3>" +
        '<p class="description">' +
        escapeHtml(project.description) +
        "</p>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  function setAttrs(el, attrs) {
    if (!el || !attrs) return;
    Object.keys(attrs).forEach(function (key) {
      var value = attrs[key];
      if (value === null || value === undefined) {
        el.removeAttribute(key);
      } else if (el.getAttribute(key) !== String(value)) {
        el.setAttribute(key, value);
      }
    });
  }

  function routeSelectorFor(route) {
    if (route === ABOUT_ROUTE) return ABOUT_LINK_SELECTOR;
    if (route === PROJECTS_ROUTE || route === PORTFOLIO_PUBLIC_PATH) {
      return PROJECTS_LINK_SELECTOR;
    }
    if (route === CONTACT_ROUTE) return CONTACT_LINK_SELECTOR;
    return HOME_LINK_SELECTOR;
  }

  function navigateInternalRoute(route, selector) {
    var targetRoute = route || HOME_ROUTE;
    var navLink = selector ? query(selector) : null;

    if (navLink) {
      navLink.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
    }

    window.setTimeout(function () {
      if (window.location.pathname === targetRoute) return;
      try {
        window.history.pushState({}, "", targetRoute);
        window.dispatchEvent(new PopStateEvent("popstate"));
      } catch (err) {
        window.location.href = targetRoute;
      }
    }, 40);
  }

  function scrollToSection(sectionId) {
    if (!sectionId) return;

    var attempts = 0;

    function runScroll() {
      var target = document.getElementById(sectionId);
      if (!target) {
        attempts += 1;
        if (attempts < 20) {
          window.setTimeout(runScroll, 60);
        }
        return;
      }

      var navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--mch-nav-height"), 10) || 86;
      var top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - navHeight - 28);
      window.scrollTo({ top: top, behavior: "smooth" });
    }

    runScroll();
  }

  function navigateToRouteAndSection(route, selector, sectionId) {
    var targetRoute = route || HOME_ROUTE;

    if (window.location.pathname === targetRoute) {
      scrollToSection(sectionId);
      return;
    }

    navigateInternalRoute(targetRoute, selector);
    window.setTimeout(function () {
      scrollToSection(sectionId);
    }, 120);
  }

  function bindRouteLinks(root) {
    queryAll("[data-mch-route]", root || document).forEach(function (link) {
      if (link.dataset.mchBound === "1") return;
      link.dataset.mchBound = "1";
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var route = link.getAttribute("data-mch-route");
        var scrollTarget = link.getAttribute("data-mch-scroll-target");
        if (scrollTarget) {
          navigateToRouteAndSection(route, routeSelectorFor(route), scrollTarget);
          return;
        }
        navigateInternalRoute(route, routeSelectorFor(route));
      });
    });
  }

  function ensureMainNavLink(link, label, iconSvgString) {
    if (!link) return;

    queryAll("svg", link).forEach(removeEl);
    var oldWrap = link.querySelector(".mch-nav-link-icon-wrap");
    if (oldWrap) removeEl(oldWrap);

    var labelEl = link.querySelector(".mch-nav-link-text");
    if (!labelEl) {
      labelEl = document.createElement("span");
      labelEl.className = "mch-nav-link-text";
      link.appendChild(labelEl);
    }

    setText(labelEl, label);
    link.setAttribute("data-label", label);

    var wrapHtml =
      '<span class="mch-nav-link-icon-wrap" aria-hidden="true">' + iconSvgString + "</span>";
    labelEl.insertAdjacentHTML("beforebegin", wrapHtml);
  }

  function ensureNavBrand() {
    var logo = query(".nav-container .logo");
    if (!logo) return;

    logo.innerHTML = "";

    setAttrs(logo, {
      "aria-hidden": "true",
      tabindex: "-1",
      "aria-label": null
    });
  }

  function applyHeroStaggerPreference() {
    try {
      if (window.sessionStorage && sessionStorage.getItem(HERO_STAGGER_SESSION_KEY) === "1") {
        document.documentElement.classList.add("mch-hero-skip-entrance");
      }
    } catch (err) {
      /* storage unavailable */
    }
  }

  function markHeroStaggerSeenIfHome() {
    if (window.location.pathname !== HOME_ROUTE) return;
    try {
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (window.sessionStorage) sessionStorage.setItem(HERO_STAGGER_SESSION_KEY, "1");
        document.documentElement.classList.add("mch-hero-skip-entrance");
        return;
      }
      if (window.sessionStorage && sessionStorage.getItem(HERO_STAGGER_SESSION_KEY) === "1") {
        return;
      }
      window.setTimeout(function () {
        try {
          if (window.sessionStorage) sessionStorage.setItem(HERO_STAGGER_SESSION_KEY, "1");
        } catch (e) {
          /* ignore */
        }
        document.documentElement.classList.add("mch-hero-skip-entrance");
      }, 850);
    } catch (err) {
      /* ignore */
    }
  }

  function primaryCtaInnerHTML() {
    return (
      '<span class="mch-hero-btn__label">' +
      HERO_PRIMARY_CTA +
      "</span>" +
      '<span class="mch-hero-btn__icon" aria-hidden="true">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" focusable="false">' +
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
      '<polyline points="15 3 21 3 21 9"/>' +
      '<line x1="10" y1="14" x2="21" y2="3"/>' +
      "</svg></span>"
    );
  }

  function buildHeroPrimaryLinkedInAnchor() {
    return (
      '<a class="mch-hero-btn mch-hero-btn--primary" href="' +
      LINKEDIN_URL +
      '" target="_blank" rel="noopener noreferrer" aria-label="' +
      HERO_PRIMARY_ARIA_LABEL.replace(/"/g, "&quot;") +
      '">' +
      primaryCtaInnerHTML() +
      "</a>"
    );
  }

  function getContactMainMarkup() {
    return (
      "<h1>Contact Us</h1>" +
      '<p class="mch-page-intro">A thoughtful first conversation is often the best place to start.</p>' +
      '<div class="mch-contact-actions">' +
      '<div class="mch-hero-buttons">' +
      buildHeroPrimaryLinkedInAnchor() +
      "</div></div>"
    );
  }

  function ensureMobileMenuToggle(navContainer) {
    var toggle = query(".mch-mobile-menu-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "mch-mobile-menu-toggle";
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.innerHTML =
        '<span class="mch-mobile-menu-toggle__bar"></span>' +
        '<span class="mch-mobile-menu-toggle__bar"></span>' +
        '<span class="mch-mobile-menu-toggle__bar"></span>';
      navContainer.appendChild(toggle);
    } else if (toggle.parentElement !== navContainer) {
      navContainer.appendChild(toggle);
    }
    return toggle;
  }

  function bindMobileMenuToggle(toggle) {
    if (!toggle || toggle.dataset.mchBound === "1") return;
    toggle.dataset.mchBound = "1";
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.toggle("mch-mobile-menu-open");
    });
  }

  function ensureMobileMenu() {
    var menu = query(".mch-mobile-menu");
    if (!menu) {
      menu = document.createElement("div");
      menu.className = "mch-mobile-menu";
      menu.innerHTML = MOBILE_MENU_MARKUP;
      document.body.appendChild(menu);
    } else {
      setHTML(menu, MOBILE_MENU_MARKUP);
    }
    return menu;
  }

  function bindMobileMenu(menu) {
    if (!menu || menu.dataset.mchBound === "1") return;
    menu.dataset.mchBound = "1";
    menu.addEventListener("click", function (event) {
      var closeEl = event.target.closest("[data-close='1']");
      if (closeEl) {
        document.body.classList.remove("mch-mobile-menu-open");
        return;
      }

      var routeLink = event.target.closest("[data-route]");
      if (!routeLink) return;

      event.preventDefault();
      document.body.classList.remove("mch-mobile-menu-open");
      var route = routeLink.getAttribute("data-route");
      var scrollTarget = routeLink.getAttribute("data-scroll-target");
      if (scrollTarget) {
        navigateToRouteAndSection(route, routeSelectorFor(route), scrollTarget);
        return;
      }
      navigateInternalRoute(route, routeSelectorFor(route));
    });
  }

  function updateNavigation() {
    var navContainer = query(".nav-container");
    if (!navContainer) return;

    ensureNavBrand();

    var homeLink = query(HOME_LINK_SELECTOR);
    if (homeLink) {
      homeLink.classList.remove("mch-nav-home-hidden");
      homeLink.removeAttribute("tabindex");
      homeLink.removeAttribute("aria-hidden");
      ensureMainNavLink(homeLink, NAV_LABEL_HOME, SVG_NAV_HOME);
    }

    ensureMainNavLink(query(ABOUT_LINK_SELECTOR), NAV_LABEL_ABOUT, SVG_NAV_ABOUT);
    ensureMainNavLink(query(PROJECTS_LINK_SELECTOR), NAV_LABEL_PORTFOLIO, SVG_NAV_PORTFOLIO);
    ensureMainNavLink(query(CONTACT_LINK_SELECTOR), NAV_LABEL_CONTACT, SVG_NAV_CONTACT);

    removeEl(query(".nav-container .external-links"));

    bindMobileMenuToggle(ensureMobileMenuToggle(navContainer));
    bindMobileMenu(ensureMobileMenu());
  }

  function buildHomeHeroMarkup() {
    return (
      '<div class="mch-hero-stack">' +
      '<div class="mch-hero-logo-wrap">' +
      '<img class="mch-hero-logo" src="' +
      LOGO_ASSET +
      '" alt="' +
      BRAND_NAME.replace(/"/g, "&quot;") +
      '" />' +
      "</div>" +
      '<h1 class="mch-hero-headline">' +
      HERO_HEADLINE +
      "</h1>" +
      '<div class="mch-hero-buttons">' +
      buildHeroPrimaryLinkedInAnchor() +
      '<a class="mch-hero-btn mch-hero-btn--secondary" href="' +
      PORTFOLIO_PUBLIC_PATH +
      '" data-mch-route="' +
      PROJECTS_ROUTE +
      '">' +
      HERO_SECONDARY_CTA +
      "</a>" +
      "</div></div>"
    );
  }

  function updateHome() {
    var page = query(".page.home");
    var container = query(".home-container");
    var textZone = query(".home-container .text-zone");

    if (!page || !container || !textZone) return;

    page.classList.add("mch-page-home");
    container.classList.add("mch-home-hero");

    Array.from(container.children).forEach(function (child) {
      if (child !== textZone) removeEl(child);
    });

    if (!query(".mch-hero-stack", textZone)) {
      setHTML(textZone, buildHomeHeroMarkup());
    } else {
      removeEl(query(".mch-hero-company", textZone));
      var stack = query(".mch-hero-stack", textZone);
      var heroLogo = stack && query(".mch-hero-logo", stack);
      if (heroLogo && heroLogo.getAttribute("src") !== LOGO_ASSET) {
        heroLogo.setAttribute("src", LOGO_ASSET);
      }
      if (heroLogo && !query(".mch-hero-logo-wrap", stack) && heroLogo.parentNode === stack) {
        var logoWrap = document.createElement("div");
        logoWrap.className = "mch-hero-logo-wrap";
        stack.insertBefore(logoWrap, heroLogo);
        logoWrap.appendChild(heroLogo);
      }
      setText(query(".mch-hero-headline", textZone), HERO_HEADLINE);
      var primaryBtn = query(".mch-hero-btn--primary", textZone);
      var secondaryBtn = query(".mch-hero-btn--secondary", textZone);
      if (primaryBtn) {
        primaryBtn.innerHTML = primaryCtaInnerHTML();
        setAttrs(primaryBtn, {
          href: LINKEDIN_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": HERO_PRIMARY_ARIA_LABEL
        });
      }
      if (secondaryBtn) {
        setText(secondaryBtn, HERO_SECONDARY_CTA);
        setAttrs(secondaryBtn, { href: PORTFOLIO_PUBLIC_PATH });
        secondaryBtn.setAttribute("data-mch-route", PROJECTS_ROUTE);
      }
    }

    queryAll(".mch-home-sections").forEach(removeEl);
  }

  function updateAbout() {
    if (normalizePathname() !== ABOUT_ROUTE) return;

    var aboutText = query("#about-text-zone");
    if (!aboutText) return;

    var page = aboutText.closest(".page");
    var container = aboutText.closest(".container");
    var side = query(".cube-container", container);

    if (page) page.classList.add("mch-page-about");
    if (container) container.classList.add("mch-about-shell");
    /* Remove legacy right rail (cube / social icons); content uses full shell width */
    if (side) removeEl(side);

    aboutText.classList.add("mch-about-tuned");
    /* React can replace this node after we run; only write when our structure is missing (avoids innerHTML === string churn). */
    if (!aboutText.querySelector("main.about-page")) {
      aboutText.innerHTML = ABOUT_MAIN_MARKUP;
    }
  }

  function scheduleAboutReconcile() {
    if (normalizePathname() !== ABOUT_ROUTE) return;

    function tick() {
      if (normalizePathname() !== ABOUT_ROUTE) return;
      updateAbout();
      syncAboutTypographyLayer();
    }

    window.queueMicrotask(tick);
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(tick);
    });
    [0, 40, 120, 280, 600, 1400].forEach(function (ms) {
      window.setTimeout(tick, ms);
    });
  }

  function scheduleContactReconcile() {
    if (normalizePathname() !== CONTACT_ROUTE) return;

    function tick() {
      if (normalizePathname() !== CONTACT_ROUTE) return;
      updateContact();
    }

    window.queueMicrotask(tick);
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(tick);
    });
    [0, 40, 120, 280, 600, 1400].forEach(function (ms) {
      window.setTimeout(tick, ms);
    });
  }

  function updateProjects() {
    var container = query("#portfolio-container");
    if (!container) return;

    var page = container.closest(".page");
    if (page) page.classList.add("mch-page-projects");
    container.classList.add("mch-projects-shell");

    var heading = query("h1", container);
    setText(heading, NAV_LABEL_PORTFOLIO);

    var intro = query(".mch-projects-intro", container);
    if (intro) {
      removeEl(intro);
    }

    var grid = query(".images-container", container);
    if (!grid) {
      grid = document.createElement("div");
      grid.className = "images-container";
      container.appendChild(grid);
    }
    setHTML(grid, buildProjectsGridMarkup());

    queryAll(".images-container .btn", container).forEach(function (button) {
      removeEl(button);
    });
  }

  function updateContact() {
    var container = query("#contact-container");
    if (!container) return;

    var page = container.closest(".page");
    var info = query(".info-map", container);
    var mapWrap = query(".map-wrap", container);

    if (page) page.classList.add("mch-page-contact");
    container.classList.add("mch-contact-shell");

    queryAll(".text-zone", container).forEach(function (zone) {
      zone.innerHTML = getContactMainMarkup();
    });

    if (info) {
      info.className = "mch-contact-side";
      setHTML(info, CONTACT_SIDE_MARKUP);
    }

    if (mapWrap) {
      mapWrap.classList.add("mch-contact-map-hidden");
    }

    enforceContactOnlyLinkedInCTA(container);
    stripStrayContactParagraphs(container);

    /* Run after React commit so the default contact <p> does not linger one frame (or reappear). */
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        if (normalizePathname() !== CONTACT_ROUTE) return;
        var c = query("#contact-container");
        if (!c) return;
        stripStrayContactParagraphs(c);
        var zone = query(".text-zone", c);
        if (zone && !query(".mch-contact-actions", zone)) {
          zone.innerHTML = getContactMainMarkup();
        }
        enforceContactOnlyLinkedInCTA(c);
        stripStrayContactParagraphs(c);
      });
    });
  }

  function cleanupRouteArtifacts() {
    if (normalizePathname() !== HOME_ROUTE) {
      queryAll(".mch-home-sections").forEach(removeEl);
    }
  }

  function normalizePathname() {
    var h = window.location.hash || "";
    if (h.length >= 2 && h.charAt(0) === "#" && h.charAt(1) === "/") {
      var hp = h.slice(1);
      var qi = hp.indexOf("?");
      if (qi !== -1) hp = hp.slice(0, qi);
      while (hp.length > 1 && hp.charAt(hp.length - 1) === "/") {
        hp = hp.slice(0, -1);
      }
      if (hp) return hp;
    }
    var p = window.location.pathname || "/";
    while (p.length > 1 && p.charAt(p.length - 1) === "/") {
      p = p.slice(0, -1);
    }
    return p || "/";
  }

  function syncAboutOneScreenClass() {
    document.documentElement.classList.remove("mch-about-one-screen");
  }

  function syncHomeOneScreenClass() {
    document.documentElement.classList.toggle(
      "mch-home-one-screen",
      normalizePathname() === HOME_ROUTE
    );
  }

  function syncAboutTypographyLayer() {
    var id = "mch-about-type-layer";
    var onAbout = normalizePathname() === ABOUT_ROUTE;
    var zone = query("#about-text-zone");
    var existing = document.getElementById(id);
    if (!onAbout || !zone) {
      if (existing) existing.remove();
      return;
    }
    var st = existing;
    if (!st) {
      st = document.createElement("style");
      st.id = id;
    }
    st.textContent = ABOUT_TYPOGRAPHY_LAYER_CSS + ABOUT_LAYOUT_LAYER_CSS;
    document.head.appendChild(st);
  }

  function handleSectionHash() {
    var hash = window.location.hash || "";
    if (!hash || hash.charAt(0) !== "#") return;
    if (hash.length >= 2 && hash.charAt(1) === "/") return;

    var targetId = hash.slice(1);
    if (!targetId) return;

    window.setTimeout(function () {
      scrollToSection(targetId);
    }, 120);
  }

  function syncContactRouteBodyClass() {
    document.body.classList.toggle("mch-on-contact", normalizePathname() === CONTACT_ROUTE);
  }

  function applyBranding() {
    syncContactRouteBodyClass();
    applyHeroStaggerPreference();
    document.title = BRAND_NAME;
    cleanupRouteArtifacts();
    updateNavigation();
    updateHome();
    markHeroStaggerSeenIfHome();
    updateAbout();
    updateProjects();
    updateContact();
    bindRouteLinks(document);
    handleSectionHash();
    syncHomeOneScreenClass();
    syncAboutOneScreenClass();
    syncAboutTypographyLayer();
    scheduleAboutReconcile();
    scheduleContactReconcile();
    window.queueMicrotask(syncAboutTypographyLayer);
    window.setTimeout(syncAboutTypographyLayer, 0);
    window.setTimeout(syncAboutTypographyLayer, 100);
    window.setTimeout(syncAboutTypographyLayer, 320);
  }

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      applyBranding();
    });
  }

  function initBackgroundParallax() {
    var layer = query(".mch-bg-pattern");
    if (!layer) return;

    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      layer.style.transform = "";
      layer.style.willChange = "auto";
      return;
    }

    var factor = 0.24;
    var ticking = false;

    function update() {
      var y = window.scrollY || window.pageYOffset || 0;
      layer.style.transform = "translate3d(0, " + Math.round(y * factor) + "px, 0)";
      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    update();
  }

  var observer = new MutationObserver(function () {
    scheduleApply();
  });

  var historyHookInstalled = false;
  function installHistoryNavigationHook() {
    if (historyHookInstalled) return;
    historyHookInstalled = true;
    var push = history.pushState;
    var replace = history.replaceState;
    function onSpaLocationChange() {
      syncContactRouteBodyClass();
      syncHomeOneScreenClass();
      syncAboutOneScreenClass();
      scheduleApply();
    }
    history.pushState = function () {
      var ret = push.apply(history, arguments);
      onSpaLocationChange();
      return ret;
    };
    history.replaceState = function () {
      var ret = replace.apply(history, arguments);
      onSpaLocationChange();
      return ret;
    };
    window.addEventListener("hashchange", onSpaLocationChange);
  }

  window.addEventListener("popstate", function () {
    syncContactRouteBodyClass();
    syncHomeOneScreenClass();
    syncAboutOneScreenClass();
    scheduleApply();
  });

  function bootBrandOverrides() {
    if (bootBrandOverrides.done) return;
    bootBrandOverrides.done = true;
    installHistoryNavigationHook();
    initBackgroundParallax();
    applyBranding();
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", scheduleApply);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        scheduleApply();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootBrandOverrides);
  } else {
    bootBrandOverrides();
  }
})();
