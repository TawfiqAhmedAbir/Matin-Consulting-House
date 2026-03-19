(function () {
  "use strict";

  var BRAND_NAME = "Matin Consulting House";
  var LINKEDIN_URL = "https://www.linkedin.com/company/matin-consulting-house/";
  var HOME_ROUTE = "/";
  var ABOUT_ROUTE = "/about";
  var PROJECTS_ROUTE = "/projects";
  var CONTACT_ROUTE = "/contact";
  var HOME_ABOUT_SECTION_ID = "mch-home-overview";

  var HOME_LINK_SELECTOR = ".nav-container nav a:not(.about-link):not(.projects-link):not(.contact-link)";
  var ABOUT_LINK_SELECTOR = ".nav-container nav a.about-link";
  var PROJECTS_LINK_SELECTOR = ".nav-container nav a.projects-link";
  var CONTACT_LINK_SELECTOR = ".nav-container nav a.contact-link";
  var NAV_CONTAINER_SELECTOR = ".nav-container";
  var MOBILE_MENU_TOGGLE_SELECTOR = ".mch-mobile-menu-toggle";
  var MOBILE_MENU_SELECTOR = ".mch-mobile-menu";
  var HOME_HEADING_SELECTOR = ".home-container h1";
  var HOME_SUBTITLE_SELECTOR = ".home-container .text-zone > h2";
  var HOME_CTA_SELECTOR = ".home-container .flat-button";
  var PROJECT_TEXT_NODES_SELECTOR = ".images-container .image-box .content *";

  var NAV_LABEL_HOME = "Home";
  var NAV_LABEL_PROJECTS = "Our Work";
  var NAV_LABEL_CONTACT = "Contact";

  var HERO_TITLE_SECONDARY = "CONSULTING HOUSE";
  var HERO_LABEL = "Independent consultancy for SMEs";
  var HERO_HEADLINE = "";
  var HERO_SUBLINE =
    "Matin Consulting House supports SMEs across strategy and delivery, pairing data-led recommendations with the BI foundations needed to act on them.";
  var HERO_PRIMARY_CTA = "Start a Conversation";
  var HERO_SECONDARY_CTA = "View Our Work";

  var HERO_ASIDE_TITLE = "What clients can expect";
  var HERO_ASIDE_COPY =
    "A calm, analytical approach that connects strategic direction with the operational and reporting foundations needed to deliver.";
  var HERO_ASIDE_POINTS = [
    "Strategy and transformation support for growing businesses",
    "Data-led recommendations backed by practical BI thinking",
    "Delivery-conscious advice shaped for real team capacity"
  ];
  var HERO_ASIDE_NOTE = "Advisory services are offered pro bono for NPOs.";

  var ABOUT_SIDE_MARKUP =
    '<div class="mch-side-card">' +
    "<p class=\"mch-side-card-label\">Focus areas</p>" +
    "<h2>Where we add value</h2>" +
    '<ul class="mch-side-list">' +
    "<li>Strategy and transformation support</li>" +
    "<li>Data-led recommendations and BI thinking</li>" +
    "<li>Practical delivery planning for SMEs</li>" +
    "</ul>" +
    "</div>" +
    '<div class="mch-side-card">' +
    "<p class=\"mch-side-card-label\">Working style</p>" +
    "<h2>How we operate</h2>" +
    '<ul class="mch-side-list">' +
    "<li>Structured thinking without unnecessary complexity</li>" +
    "<li>Measured communication and realistic sequencing</li>" +
    "<li>Long-term usefulness over short-term theatre</li>" +
    "</ul>" +
    "</div>" +
    '<div class="mch-side-card mch-side-card-accent">' +
    "<p class=\"mch-side-card-label\">Client fit</p>" +
    "<h2>Best suited to teams that need clarity and delivery discipline.</h2>" +
    "<p>We work particularly well with organisations looking to connect strategic intent with decisions, reporting, and implementation.</p>" +
    '<a class="mch-button mch-button-secondary" href="' +
    LINKEDIN_URL +
    '" target="_blank" rel="noreferrer">Connect on LinkedIn</a>' +
    "</div>";

  var HOME_SECTIONS_MARKUP =
    '<section class="mch-section mch-section-services" id="' +
    HOME_ABOUT_SECTION_ID +
    '" aria-labelledby="mch-services-title">' +
    '<div class="mch-section-heading mch-section-heading-wide">' +
    '<p class="mch-section-label">What we do</p>' +
    '<h2 id="mch-services-title">Independent consulting for SMEs that need clearer direction, stronger data, and steadier delivery.</h2>' +
    '<p class="mch-section-copy">We help teams turn objectives into practical decisions, stronger reporting, and shipped work.</p>' +
    '<div class="mch-rich-copy mch-home-overview-copy">' +
    '<p>Our work combines advisory thinking with practical follow-through, shaped for the pace and capacity of growing organisations.</p>' +
    "</div>" +
    '<div class="mch-inline-note mch-home-overview-note">' +
    '<span class="mch-inline-note-label">Approach</span>' +
    '<p>Clear framing, evidence-led thinking, and recommendations designed to be used.</p>' +
    "</div>" +
    "</div>" +
    "</section>" +
    '<section class="mch-section mch-section-approach" aria-labelledby="mch-approach-title">' +
    '<div class="mch-section-heading">' +
    '<p class="mch-section-label">Strategy / Data / Execution</p>' +
    '<h2 id="mch-approach-title">A connected model from decision to delivery.</h2>' +
    "</div>" +
    '<div class="mch-card-grid mch-card-grid-compact">' +
    '<article class="mch-card">' +
    '<p class="mch-card-label">Strategy</p>' +
    "<h3>Clarify priorities</h3>" +
    "<p>Frame the decision, align priorities, and sequence work realistically.</p>" +
    "</article>" +
    '<article class="mch-card">' +
    '<p class="mch-card-label">Data</p>' +
    "<h3>Support better decisions</h3>" +
    "<p>Use reporting and BI thinking to make insight dependable and usable.</p>" +
    "</article>" +
    '<article class="mch-card">' +
    '<p class="mch-card-label">Execution</p>' +
    "<h3>Turn plans into delivery</h3>" +
    "<p>Translate recommendations into scoped actions, momentum, and delivery discipline.</p>" +
    "</article>" +
    "</div>" +
    "</section>" +
    '<section class="mch-section mch-section-value" aria-labelledby="mch-value-title">' +
    '<div class="mch-section-heading">' +
    '<p class="mch-section-label">Why clients work with us</p>' +
    '<h2 id="mch-value-title">Structured support without unnecessary process.</h2>' +
    "</div>" +
    '<div class="mch-approach-grid mch-approach-grid-compact">' +
    '<article class="mch-approach-step"><span class="mch-step-number">01</span><h3>Practical recommendations</h3><p>Advice is shaped around delivery constraints, not abstract frameworks.</p></article>' +
    '<article class="mch-approach-step"><span class="mch-step-number">02</span><h3>Measured progress</h3><p>We focus on clear priorities, usable outputs, and decisions that can be acted on.</p></article>' +
    '<article class="mch-approach-step"><span class="mch-step-number">03</span><h3>Steady partnership</h3><p>Clients get composed thinking, direct communication, and a bias toward execution.</p></article>' +
    "</div>" +
    "</section>" +
    '<section class="mch-section mch-section-npo" aria-labelledby="mch-npo-title">' +
    '<div class="mch-highlight-panel">' +
    '<p class="mch-section-label">For NPOs</p>' +
    '<h2 id="mch-npo-title">Pro bono advisory is available for non-profit organisations.</h2>' +
    '<p>Where there is a strong fit, advisory support can be offered pro bono to help mission-led organisations access clear thinking across strategy and delivery.</p>' +
    "</div>" +
    "</section>" +
    '<section class="mch-section mch-section-cta" aria-labelledby="mch-cta-title">' +
    '<div class="mch-cta-panel">' +
    '<div class="mch-cta-copy">' +
    '<p class="mch-section-label">Start the conversation</p>' +
    '<h2 id="mch-cta-title">Discuss your objectives with Matin Consulting House.</h2>' +
    '<p>If you are looking for strategic clarity, stronger reporting foundations, or support moving from plan to execution, connect on LinkedIn.</p>' +
    "</div>" +
    '<div class="mch-cta-actions">' +
    '<a class="mch-button mch-button-primary" href="' +
    LINKEDIN_URL +
    '" target="_blank" rel="noreferrer">Start a Conversation</a>' +
    '<a class="mch-button mch-button-secondary" href="/contact" data-mch-route="/contact">Contact Page</a>' +
    "</div>" +
    "</div>" +
    "</section>";

  var ABOUT_MAIN_MARKUP =
    "<h1>About Matin Consulting House</h1>" +
    '<p class="mch-page-intro">Independent consulting for SMEs that need clearer direction, stronger data, and steadier delivery.</p>' +
    '<div class="mch-rich-copy">' +
    "<p>Matin Consulting House supports growing businesses across strategy and delivery, helping teams move from ambition to implementation with sharper priorities and more dependable execution.</p>" +
    "<p>Our work combines advisory thinking with practical follow-through. Recommendations are informed by delivery reality, and data work includes the BI and reporting foundations that make insight useful in day-to-day decision-making.</p>" +
    "<p>We are best suited to organisations that want calm, rigorous support, concise communication, and solutions proportionate to the pace and scale of the business.</p>" +
    "</div>" +
    '<div class="mch-inline-note">' +
    '<span class="mch-inline-note-label">Approach</span>' +
    "<p>Clear framing, evidence-led thinking, and recommendations designed to be used rather than admired.</p>" +
    "</div>";

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
    '<a class="mch-button mch-button-secondary" href="/" data-mch-route="/" data-mch-scroll-target="mch-home-overview">Learn More About Us</a>' +
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
    '<a class="mch-mobile-menu__link mch-mobile-menu__link--home" href="/" data-route="/">Home</a>' +
    '<a class="mch-mobile-menu__link mch-mobile-menu__link--projects" href="/projects" data-route="/projects">Our Work</a>' +
    '<a class="mch-mobile-menu__link mch-mobile-menu__link--contact" href="/contact" data-route="/contact">Contact</a>' +
    "</div>";

  var brandMarkMarkup = "";
  var scheduled = false;
  var heroSyncScheduled = false;

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

  function ensureElement(tagName, className, parent, beforeNode) {
    if (!parent) return null;

    var selector = className ? "." + className.split(" ").join(".") : tagName;
    var existing = query(selector, parent);
    if (existing) return existing;

    var el = document.createElement(tagName);
    if (className) el.className = className;

    if (beforeNode && beforeNode.parentNode === parent) {
      parent.insertBefore(el, beforeNode);
    } else {
      parent.appendChild(el);
    }

    return el;
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
    if (route === ABOUT_ROUTE) return HOME_LINK_SELECTOR;
    if (route === PROJECTS_ROUTE) return PROJECTS_LINK_SELECTOR;
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

  function ensureMainNavTextLink(link, label) {
    if (!link) return;

    var svg = link.querySelector("svg");
    if (svg) {
      svg.style.display = "none";
      svg.setAttribute("aria-hidden", "true");
    }

    var labelEl = link.querySelector(".mch-nav-link-text");
    if (!labelEl) {
      labelEl = document.createElement("span");
      labelEl.className = "mch-nav-link-text";
      link.appendChild(labelEl);
    }

    setText(labelEl, label);
    link.setAttribute("data-label", label);
  }

  function ensureNavBrand() {
    var logo = query(".nav-container .logo");
    if (!logo) return;

    var markup =
      '<img class="mch-nav-logo" src="logo-matin.png" alt="' + BRAND_NAME + '">';

    if (logo.innerHTML !== markup) {
      logo.innerHTML = markup;
    }

    setAttrs(logo, {
      "aria-label": BRAND_NAME
    });
  }

  function ensureMobileMenuToggle(navContainer) {
    var toggle = query(MOBILE_MENU_TOGGLE_SELECTOR);
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
    var menu = query(MOBILE_MENU_SELECTOR);
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
    var navContainer = query(NAV_CONTAINER_SELECTOR);
    if (!navContainer) return;

    ensureNavBrand();
    ensureMainNavTextLink(query(HOME_LINK_SELECTOR), NAV_LABEL_HOME);
    ensureMainNavTextLink(query(PROJECTS_LINK_SELECTOR), NAV_LABEL_PROJECTS);
    ensureMainNavTextLink(query(CONTACT_LINK_SELECTOR), NAV_LABEL_CONTACT);

    removeEl(query(ABOUT_LINK_SELECTOR));
    removeEl(query(".nav-container .external-links"));

    bindMobileMenuToggle(ensureMobileMenuToggle(navContainer));
    bindMobileMenu(ensureMobileMenu());
  }

  function getBrandMarkMarkup() {
    if (brandMarkMarkup) return brandMarkMarkup;

    var source = query("#logo-svg");
    if (!source) return "";

    var clone = source.cloneNode(true);
    clone.removeAttribute("id");
    clone.classList.add("mch-brand-mark-svg");

    var shadow = clone.querySelector("#shadow");
    if (shadow) {
      shadow.classList.add("mch-brand-shadow");
      shadow.removeAttribute("id");
    }

    var letter = clone.querySelector("#letter");
    if (letter) {
      letter.classList.add("mch-brand-letter");
      letter.removeAttribute("id");
    }

    brandMarkMarkup = clone.outerHTML;
    return brandMarkMarkup;
  }

  function ensureHeroTitleStructure(heading) {
    if (!heading) return;

    var primary = heading.querySelector(".mch-title-primary");
    if (!primary) {
      heading.innerHTML =
        '<span class="mch-title-primary">' +
        '<span class="mch-logo-rest">Matin</span>' +
        "</span>" +
        '<span class="mch-title-secondary">' +
        HERO_TITLE_SECONDARY +
        "</span>";
      primary = heading.querySelector(".mch-title-primary");
    }

    heading.classList.add("mch-hero-title");
    setText(primary.querySelector(".mch-logo-rest") || primary, "Matin");
    setText(heading.querySelector(".mch-title-secondary"), HERO_TITLE_SECONDARY);
  }

  function syncHeroWordmarkWidth(heading) {
    if (!heading) return;

    var primary = heading.querySelector(".mch-title-primary");
    var secondary = heading.querySelector(".mch-title-secondary");
    if (!primary || !secondary) return;

    var measured = Math.ceil(primary.getBoundingClientRect().width);
    if (!measured) return;

    var target = measured + 18;
    secondary.style.width = target + "px";
    secondary.style.minWidth = target + "px";
    secondary.style.maxWidth = target + "px";

    var secondaryText = (secondary.textContent || "").trim();
    if (secondaryText.length > 1) {
      var style = window.getComputedStyle(secondary);
      var probe = document.createElement("span");
      probe.textContent = secondaryText;
      probe.style.position = "absolute";
      probe.style.visibility = "hidden";
      probe.style.whiteSpace = "nowrap";
      probe.style.fontFamily = style.fontFamily;
      probe.style.fontSize = style.fontSize;
      probe.style.fontWeight = style.fontWeight;
      probe.style.letterSpacing = "0px";
      probe.style.textTransform = style.textTransform;
      document.body.appendChild(probe);

      var naturalTextWidth = Math.ceil(probe.getBoundingClientRect().width);
      probe.remove();
      if (!naturalTextWidth) return;

      var charGaps = Math.max(1, secondaryText.length - 1);
      var desiredTextWidth = target - 2;
      var nextSpacing = (desiredTextWidth - naturalTextWidth) / charGaps;
      if (nextSpacing < 3.8) nextSpacing = 3.8;
      if (nextSpacing > 8.4) nextSpacing = 8.4;
      secondary.style.letterSpacing = nextSpacing.toFixed(2) + "px";
    }
  }

  function scheduleHeroWordmarkSync(heading) {
    if (!heading || heroSyncScheduled) return;
    heroSyncScheduled = true;
    window.requestAnimationFrame(function () {
      heroSyncScheduled = false;
      syncHeroWordmarkWidth(heading);
    });
  }

  function ensureHeroBrand(textZone, heading) {
    if (!textZone || !heading) return null;

    var brand = ensureElement("div", "mch-hero-brand", textZone, heading);
    var markShell = ensureElement("div", "mch-brand-mark-shell", brand);
    var wordmarkShell = ensureElement("div", "mch-wordmark-shell", brand);

    if (!markShell.innerHTML) {
      setHTML(markShell, getBrandMarkMarkup());
    }

    if (heading.parentElement !== wordmarkShell) {
      wordmarkShell.appendChild(heading);
    }

    return brand;
  }

  function ensureHomeValueProp(zone, cta) {
    if (!zone || !cta) return null;

    var valueProp = query(".mch-value-prop", zone);
    if (!valueProp) {
      valueProp = document.createElement("div");
      valueProp.className = "mch-value-prop";
      valueProp.innerHTML =
        '<p class="mch-hero-label"></p>' +
        '<h2 class="mch-headline"></h2>' +
        '<p class="mch-subline"></p>';
      zone.insertBefore(valueProp, cta);
    }

    return valueProp;
  }

  function ensureHeroWordmark(zone, beforeNode) {
    if (!zone) return null;

    var wordmark = query(".mch-hero-wordmark", zone);
    if (!wordmark) {
      wordmark = document.createElement("div");
      wordmark.className = "mch-hero-wordmark";
      wordmark.innerHTML =
        '<span class="mch-hero-wordmark-primary">Matin</span>' +
        '<span class="mch-hero-wordmark-secondary">Consulting House</span>';
      if (beforeNode && beforeNode.parentNode === zone) {
        zone.insertBefore(wordmark, beforeNode);
      } else {
        zone.insertBefore(wordmark, zone.firstChild);
      }
    }

    setAttrs(wordmark, {
      "aria-label": BRAND_NAME
    });

    return wordmark;
  }

  function ensureHeroActions(zone, primaryAction) {
    if (!zone || !primaryAction) return null;

    var actions = query(".mch-hero-actions", zone);
    if (!actions) {
      actions = document.createElement("div");
      actions.className = "mch-hero-actions";
      zone.insertBefore(actions, primaryAction.nextSibling);
    }

    if (primaryAction.parentElement !== actions) {
      actions.appendChild(primaryAction);
    }

    var secondaryAction = query(".mch-secondary-cta", actions);
    if (!secondaryAction) {
      secondaryAction = document.createElement("a");
      secondaryAction.className = "mch-button mch-button-secondary mch-secondary-cta";
      secondaryAction.href = PROJECTS_ROUTE;
      secondaryAction.setAttribute("data-mch-route", PROJECTS_ROUTE);
      actions.appendChild(secondaryAction);
    }

    setText(secondaryAction, HERO_SECONDARY_CTA);
    return actions;
  }

  function ensureHeroAside(container) {
    if (!container) return;

    var markup =
      '<div class="mch-hero-aside-card">' +
      "<h2>" +
      HERO_ASIDE_TITLE +
      "</h2>" +
      "<p>" +
      HERO_ASIDE_COPY +
      "</p>" +
      '<div class="mch-hero-aside-points">' +
      HERO_ASIDE_POINTS.map(function (point) {
        return '<div class="mch-hero-point"><span class="mch-hero-point-marker"></span><p>' + point + "</p></div>";
      }).join("") +
      "</div>" +
      '<div class="mch-hero-aside-note">' +
      HERO_ASIDE_NOTE +
      "</div>" +
      "</div>";

    container.classList.add("mch-hero-aside");
    setHTML(container, markup);
  }

  function updateHome() {
    var page = query(".page.home");
    var container = query(".home-container");
    var textZone = query(".home-container .text-zone");
    var heading = query(HOME_HEADING_SELECTOR);
    var subtitle = query(HOME_SUBTITLE_SELECTOR);
    var primaryAction = query(HOME_CTA_SELECTOR);

    if (!page || !container || !textZone || !heading || !primaryAction) return;

    page.classList.add("mch-page-home");
    container.classList.add("mch-home-hero");

    removeEl(query(".mch-hero-brand", textZone));
    if (subtitle) subtitle.style.display = "none";

    var valueProp = ensureHomeValueProp(textZone, primaryAction);
    ensureHeroWordmark(textZone, valueProp);

    removeEl(heading);

    if (valueProp) {
      setText(query(".mch-hero-label", valueProp), HERO_LABEL);
      var heroHeadline = query(".mch-headline", valueProp);
      if (heroHeadline) {
        if (HERO_HEADLINE) {
          setText(heroHeadline, HERO_HEADLINE);
          heroHeadline.style.display = "";
        } else {
          heroHeadline.style.display = "none";
        }
      }
      setText(query(".mch-subline", valueProp), HERO_SUBLINE);
    }

    primaryAction.className = "mch-button mch-button-primary flat-button";
    primaryAction.href = LINKEDIN_URL;
    primaryAction.target = "_blank";
    primaryAction.rel = "noreferrer";
    setText(primaryAction, HERO_PRIMARY_CTA);

    ensureHeroActions(textZone, primaryAction);

    Array.prototype.slice.call(container.children).forEach(function (child) {
      if (child !== textZone) removeEl(child);
    });

    var sections = ensureElement("div", "mch-home-sections", page);
    setHTML(sections, HOME_SECTIONS_MARKUP);
  }

  function updateAbout() {
    var aboutText = query("#about-text-zone");
    if (!aboutText) return;

    var page = aboutText.closest(".page");
    var container = aboutText.closest(".container");
    var side = query(".cube-container", container);

    if (page) page.classList.add("mch-page-about");
    if (container) container.classList.add("mch-about-shell");
    if (side) side.className = "mch-about-side";

    setHTML(aboutText, ABOUT_MAIN_MARKUP);
    if (side) setHTML(side, ABOUT_SIDE_MARKUP);
  }

  function updateProjects() {
    var container = query("#portfolio-container");
    if (!container) return;

    var page = container.closest(".page");
    if (page) page.classList.add("mch-page-projects");
    container.classList.add("mch-projects-shell");

    var heading = query("h1", container);
    setText(heading, NAV_LABEL_PROJECTS);

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

  function redirectAboutRouteIfNeeded() {
    if (window.location.pathname !== ABOUT_ROUTE) return false;

    window.location.replace(HOME_ROUTE + "#" + HOME_ABOUT_SECTION_ID);
    return true;
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
    if (redirectAboutRouteIfNeeded()) return;
    document.title = BRAND_NAME;
    cleanupRouteArtifacts();
    updateNavigation();
    updateHome();
    updateAbout();
    updateProjects();
    updateContact();
    bindRouteLinks(document);
    handleSectionHash();
  }

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      applyBranding();
    });
  }

  var observer = new MutationObserver(function () {
    scheduleApply();
  });

  window.addEventListener("DOMContentLoaded", function () {
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
