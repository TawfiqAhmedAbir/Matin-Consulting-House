(function () {
  "use strict";

  var BRAND_NAME = "Matin Consulting House";
  /* Bump query when replacing logo-matin.png so browsers skip stale cache */
  var LOGO_ASSET = "logo-matin.png?v=dedf6326";
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

  var ABOUT_MAIN_MARKUP =
    '<section class="about about-redesign">' +
    '<div class="about-layout">' +
    '<header class="about-head">' +
    '<h1 class="about-title">About Matin Consulting House</h1>' +
    '<p class="mch-page-intro about-intro">' +
    "Matin Consulting House is an independent consultancy supporting SMEs across strategy and delivery, turning objectives into shipped solutions. We provide data-driven recommendations and engineer the BI pipeline to fuel them. Advisory services are offered pro bono for NPOs." +
    "</p>" +
    "</header>" +
    '<div class="mch-rich-copy about-body">' +
    '<div class="about-columns">' +
    '<article class="about-column about-card">' +
    "<p><strong>Retained on a 6-figure, CEO-sponsored digital transformation (boutique luxury travel concierge):</strong></p>" +
    '<ul class="mch-side-list">' +
    "<li>RevOps diagnostics and funnel insights</li>" +
    "<li>MarTech strategy and implementation design</li>" +
    "<li>Executive advisory and delivery governance</li>" +
    "</ul>" +
    "</article>" +
    '<article class="about-column about-card">' +
    "<p><strong>Pro bono advisory for Aspierations (CIC for autistic professionals):</strong></p>" +
    '<ul class="mch-side-list">' +
    "<li>5-figure GTM strategy and revenue forecasting</li>" +
    "<li>Market positioning and operational cost modelling</li>" +
    "</ul>" +
    "</article>" +
    "</div>" +
    '<p class="about-footnote">Additional engagements: NHS (Royal Free London) and Bright Futures (with UCL Research Consultancy Clinic)</p>' +
    "</div>" +
    "</div>" +
    "</section>";

  /* Appended last to <head> so it wins over CRA/style-in-JS that loads after brand-overrides.css */
  /* About redesign typography tuned for one-screen fit */
  var ABOUT_TYPOGRAPHY_LAYER_CSS =
    "#about-text-zone.mch-about-tuned .about-title{font-size:clamp(2.35rem,4vw,3.15rem)!important;line-height:1.15!important;margin:0!important;text-align:center!important;white-space:normal!important;overflow-wrap:break-word!important;word-wrap:break-word!important;max-width:100%!important;box-sizing:border-box!important}" +
    "#about-text-zone.mch-about-tuned .about-intro{font-size:clamp(1.2rem,1.75vw,1.56rem)!important;line-height:1.5!important;margin:0 auto!important;max-width:58rem!important}" +
    "#about-text-zone.mch-about-tuned .about-card>p{font-size:clamp(1.12rem,1.44vw,1.34rem)!important;line-height:1.42!important;margin:0 0 .55rem!important}" +
    "#about-text-zone.mch-about-tuned .about-card li{font-size:clamp(1.04rem,1.24vw,1.2rem)!important;line-height:1.4!important}" +
    "#about-text-zone.mch-about-tuned .about-footnote{font-size:clamp(1.04rem,1.2vw,1.24rem)!important;line-height:1.42!important;margin:0 auto!important;max-width:60rem!important;text-align:center!important}" +
    "#about-text-zone.mch-about-tuned .about-card .mch-side-list li::before{width:7px!important;height:7px!important;top:.58em!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-title{font-size:clamp(1.82rem,3.15vmin,2.45rem)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-intro{font-size:clamp(1rem,1.72vmin,1.2rem)!important;line-height:1.42!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-card>p{font-size:clamp(.96rem,1.46vmin,1.12rem)!important;line-height:1.34!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-card li{font-size:clamp(.9rem,1.28vmin,1.04rem)!important;line-height:1.28!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-footnote{font-size:clamp(.88rem,1.2vmin,1.02rem)!important;line-height:1.32!important}" +
    "@media (max-width:768px){" +
    "#about-text-zone.mch-about-tuned .about-title{font-size:clamp(1.96rem,6vw,2.66rem)!important}" +
    "#about-text-zone.mch-about-tuned .about-intro{font-size:clamp(1.04rem,3.7vw,1.24rem)!important}" +
    "#about-text-zone.mch-about-tuned .about-card>p{font-size:clamp(.96rem,3.35vw,1.16rem)!important}" +
    "#about-text-zone.mch-about-tuned .about-card li{font-size:clamp(.9rem,3.1vw,1.08rem)!important}" +
    "#about-text-zone.mch-about-tuned .about-footnote{font-size:clamp(.9rem,3vw,1.06rem)!important}" +
    "}" +
    "@media (max-height:700px){" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-title{font-size:clamp(1.54rem,2.65vmin,2.08rem)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-intro{font-size:clamp(.88rem,1.45vmin,1.04rem)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-card>p{font-size:clamp(.84rem,1.22vmin,.98rem)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-card li{font-size:clamp(.78rem,1.1vmin,.92rem)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-footnote{font-size:clamp(.78rem,1.06vmin,.9rem)!important}" +
    "}";

  /* Grid + spacing layer: compact, centered, and single-screen friendly */
  var ABOUT_LAYOUT_LAYER_CSS =
    "html.mch-about-one-screen #root{display:flex!important;flex-direction:column!important}" +
    "html.mch-about-one-screen #root>*{flex:1 1 0!important;min-height:0!important;display:flex!important;flex-direction:column!important}" +
    "html.mch-about-one-screen .page.mch-page-about{margin-top:var(--mch-nav-height)!important;padding:0!important;min-height:calc(100dvh - var(--mch-nav-height))!important;max-height:calc(100dvh - var(--mch-nav-height))!important;height:calc(100dvh - var(--mch-nav-height))!important;display:flex!important;justify-content:flex-start!important;align-items:center!important;overflow:hidden!important}" +
    "html.mch-about-one-screen .page.mch-page-about .mch-about-shell{flex:1 1 0!important;min-height:0!important;width:100%!important;max-width:100%!important;display:flex!important;flex-direction:column!important;justify-content:flex-start!important;align-items:center!important;padding:clamp(2px,.7dvh,9px) clamp(10px,2.2vw,18px)!important;gap:0!important;overflow:hidden!important}" +
    "html.mch-about-one-screen .mch-page-about .mch-about-shell #about-text-zone{flex:1 1 0!important;min-height:0!important;width:100%!important;max-width:min(72rem,96vw)!important;overflow:hidden!important;padding:clamp(2px,.7dvh,8px) 0 clamp(8px,1.3dvh,14px)!important;text-align:center!important}" +
    "#about-text-zone.mch-about-tuned .about-layout{display:grid!important;grid-template-columns:1fr!important;row-gap:clamp(12px,1.8vh,18px)!important;column-gap:0!important;justify-items:center!important;align-items:start!important;max-width:min(74rem,100%)!important;margin:0 auto!important;width:100%!important;min-width:0!important}" +
    "#about-text-zone.mch-about-tuned .about-head{display:grid!important;gap:clamp(10px,1.4vh,16px)!important;justify-items:center!important;width:100%!important}" +
    "#about-text-zone.mch-about-tuned .about-body{display:grid!important;gap:clamp(10px,1.4vh,16px)!important;justify-items:center!important;width:100%!important}" +
    "#about-text-zone.mch-about-tuned .about-columns{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:clamp(12px,2.2vw,22px)!important;width:100%!important;max-width:min(66rem,100%)!important;margin:0 auto!important;align-items:stretch!important}" +
    "#about-text-zone.mch-about-tuned .about-card{display:flex!important;flex-direction:column!important;gap:clamp(7px,1.1vh,12px)!important;padding:clamp(12px,1.7vh,18px) clamp(14px,2.2vw,20px)!important;border:1px solid rgba(243,232,211,.12)!important;border-radius:16px!important;background:linear-gradient(180deg,rgba(9,30,60,.12),rgba(6,21,43,.18))!important;-webkit-backdrop-filter:blur(12px)!important;backdrop-filter:blur(12px)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 12px 40px rgba(0,0,0,.12)!important;text-align:left!important}" +
    "#about-text-zone.mch-about-tuned .about-card .mch-side-list{margin:.15rem 0 0!important;padding-left:1.05rem!important;text-align:left!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-layout{row-gap:clamp(6px,.95vh,10px)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-head{gap:clamp(5px,.78vh,8px)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-body{gap:clamp(6px,.9vh,10px)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-columns{gap:clamp(6px,1.15vw,10px)!important}" +
    "html.mch-about-one-screen #about-text-zone.mch-about-tuned .about-card{padding:clamp(7px,1vh,10px) clamp(9px,1.2vw,12px)!important;border-radius:12px!important}" +
    "@media (max-width:768px){" +
    "#about-text-zone.mch-about-tuned .about-columns{grid-template-columns:1fr!important;gap:clamp(16px,2.5vh,24px)!important}" +
    "}";

  var CONTACT_MAIN_MARKUP =
    "<h1>Contact Us</h1>" +
    '<p class="mch-page-intro">A thoughtful first conversation is often the best place to start.</p>' +
    '<div class="mch-rich-copy">' +
    "<p>Matin Consulting House is open to professional enquiries related to strategy, transformation, data-led decision support, and delivery-focused advisory work.</p>" +
    "<p>The preferred first step is a LinkedIn message, which keeps outreach simple and gives us a clear starting point for the discussion.</p>" +
    "</div>" +
    '<div class="mch-contact-actions">' +
    '<a class="mch-button mch-button-primary" href="' +
    LINKEDIN_URL +
    '" target="_blank" rel="noreferrer">Start a Conversation</a>' +
    '<a class="mch-button mch-button-secondary" href="/" data-mch-route="/">Learn More About Us</a>' +
    "</div>";

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
      '<a class="mch-hero-btn mch-hero-btn--primary" href="' +
      LINKEDIN_URL +
      '" target="_blank" rel="noopener noreferrer" aria-label="' +
      HERO_PRIMARY_ARIA_LABEL.replace(/"/g, "&quot;") +
      '">' +
      primaryCtaInnerHTML() +
      "</a>" +
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
    if (!aboutText.querySelector(".about-layout")) {
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

  function updateProjects() {
    var container = query("#portfolio-container");
    if (!container) return;

    var page = container.closest(".page");
    if (page) page.classList.add("mch-page-projects");
    container.classList.add("mch-projects-shell");

    var heading = query("h1", container);
    setText(heading, NAV_LABEL_PORTFOLIO);

    var intro = query(".mch-projects-intro", container);
    if (!intro) {
      intro = document.createElement("p");
      intro.className = "mch-projects-intro";
      container.insertBefore(intro, container.querySelector("div"));
    }
    setText(intro, PROJECTS_INTRO_COPY);

    queryAll(".images-container .btn", container).forEach(function (button) {
      setText(button, "View project");
    });

    queryAll(PROJECT_TEXT_NODES_SELECTOR, container).forEach(function (node) {
      if (node.textContent && node.textContent.trim() === BRAND_NAME) {
        node.textContent = BRAND_NAME;
      }
    });
  }

  function updateContact() {
    var container = query("#contact-container");
    if (!container) return;

    var page = container.closest(".page");
    var textZone = query(".text-zone", container);
    var info = query(".info-map", container);
    var mapWrap = query(".map-wrap", container);

    if (page) page.classList.add("mch-page-contact");
    container.classList.add("mch-contact-shell");

    if (textZone) {
      setHTML(textZone, CONTACT_MAIN_MARKUP);
    }

    if (info) {
      info.className = "mch-contact-side";
      setHTML(info, CONTACT_SIDE_MARKUP);
    }

    if (mapWrap) {
      mapWrap.classList.add("mch-contact-map-hidden");
    }
  }

  function cleanupRouteArtifacts() {
    if (window.location.pathname !== HOME_ROUTE) {
      queryAll(".mch-home-sections").forEach(removeEl);
    }
  }

  function normalizePathname() {
    var p = window.location.pathname || "/";
    while (p.length > 1 && p.charAt(p.length - 1) === "/") {
      p = p.slice(0, -1);
    }
    return p || "/";
  }

  function syncAboutOneScreenClass() {
    document.documentElement.classList.toggle(
      "mch-about-one-screen",
      normalizePathname() === ABOUT_ROUTE
    );
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

    var targetId = hash.slice(1);
    if (!targetId) return;

    window.setTimeout(function () {
      scrollToSection(targetId);
    }, 120);
  }

  function applyBranding() {
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

  window.addEventListener("popstate", function () {
    syncHomeOneScreenClass();
    syncAboutOneScreenClass();
    scheduleApply();
  });

  window.addEventListener("DOMContentLoaded", function () {
    initBackgroundParallax();
    applyBranding();
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", scheduleApply);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        scheduleApply();
      });
    }
  });
})();
