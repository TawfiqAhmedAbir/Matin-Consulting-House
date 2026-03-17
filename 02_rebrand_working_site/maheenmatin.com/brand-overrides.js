(function () {
  "use strict";

  /**
   * Junior-dev guide:
   * - Brand text/content updates: edit constants and section updaters below.
   * - Visual styling updates: edit brand-overrides.css (not this file).
   * - Avoid editing static/js/main.*.js (compiled vendor/app bundle).
   */

  // -----------------------------
  // Brand content constants
  // -----------------------------
  var BRAND_NAME = "Matin Consulting House";
  var HERO_TITLE_PRIMARY = "Matin";
  var HERO_TITLE_SECONDARY = "CONSULTING HOUSE";
  var HERO_HEADLINE = "Strategy. Data. Execution.";
  var HERO_SUBLINE =
    "We help organisations turn ambitious strategy into measurable outcomes through data-driven advisory and implementation.";
  var CTA_LABEL = "CONTACT US";
  var HOME_ROUTE = "/";
  var ABOUT_ROUTE = "/about";
  var PROJECTS_ROUTE = "/projects";
  var CONTACT_ROUTE = "/contact";
  var HOME_LINK_SELECTOR = ".nav-container nav a:not(.about-link):not(.projects-link):not(.contact-link)";
  var ABOUT_LINK_SELECTOR = ".nav-container nav a.about-link";
  var PROJECTS_LINK_SELECTOR = ".nav-container nav a.projects-link";
  var CONTACT_LINK_SELECTOR = ".nav-container nav a.contact-link";

  // -----------------------------
  // Shared helpers
  // -----------------------------
  function setText(el, value) {
    if (el && el.textContent !== value) {
      el.textContent = value;
    }
  }

  function buildLetterMarkup(value, letterClass) {
    var html = "";
    for (var i = 0; i < value.length; i += 1) {
      var ch = value.charAt(i);
      if (ch === " ") {
        html += '<span class="' + letterClass + ' mch-space">&nbsp;</span>';
      } else {
        html += '<span class="' + letterClass + '">' + ch + "</span>";
      }
    }
    return html;
  }

  function closeMobileMenu() {
    document.body.classList.remove("mch-mobile-menu-open");
  }

  function navigateInternalRoute(route, selector) {
    var targetRoute = route || HOME_ROUTE;
    var navLink = selector ? document.querySelector(selector) : null;

    // Primary path: trigger the original React Router link handler.
    if (navLink) {
      navLink.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
    }

    // Fallback path: force SPA history navigation without full reload.
    window.setTimeout(function () {
      if (window.location.pathname === targetRoute) return;
      try {
        window.history.pushState({}, "", targetRoute);
        window.dispatchEvent(new PopStateEvent("popstate"));
      } catch (err) {
        // Avoid full reload here to prevent deep-route asset path issues.
      }
    }, 50);
  }

  function iconMarkupFromLink(link, fallbackChar) {
    var svg = link ? link.querySelector("svg") : null;
    if (svg) return svg.outerHTML;
    return '<span class="mch-mobile-menu-fallback-icon">' + fallbackChar + "</span>";
  }

  function setMobileMenuItem(item, iconMarkup, label, href, isInternal, externalTarget, route, selector) {
    if (!item) return;

    var iconSlot = item.querySelector(".mch-mobile-menu__icon");
    var labelSlot = item.querySelector(".mch-mobile-menu__label");
    if (iconSlot) iconSlot.innerHTML = iconMarkup;
    if (labelSlot) labelSlot.textContent = label;

    item.setAttribute("href", href);
    item.setAttribute("data-internal", isInternal ? "1" : "0");
    item.setAttribute("data-route", route || "");
    item.setAttribute("data-selector", selector || "");

    if (externalTarget) {
      item.setAttribute("target", externalTarget);
      item.setAttribute("rel", "noreferrer");
    } else {
      item.removeAttribute("target");
      item.removeAttribute("rel");
    }
  }

  function ensureMobileMenu(homeLink, aboutLink, servicesLink, contactLink, githubLink, linkedinLink) {
    var navContainer = document.querySelector(".nav-container");
    if (!navContainer) return;

    var toggle = document.querySelector(".mch-mobile-menu-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "mch-mobile-menu-toggle";
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.innerHTML =
        '<span class="mch-mobile-menu-toggle__bar"></span>' +
        '<span class="mch-mobile-menu-toggle__bar"></span>' +
        '<span class="mch-mobile-menu-toggle__bar"></span>';
      document.body.appendChild(toggle);
    }

    if (toggle.dataset.mchBound !== "1") {
      function toggleHandler(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        document.body.classList.toggle("mch-mobile-menu-open");
      }

      toggle.dataset.mchBound = "1";
      toggle.addEventListener("click", toggleHandler, { passive: false });
      toggle.addEventListener("touchend", toggleHandler, { passive: false });
    }

    var menu = document.querySelector(".mch-mobile-menu");
    if (!menu) {
      menu = document.createElement("div");
      menu.className = "mch-mobile-menu";
      menu.innerHTML =
        '<div class="mch-mobile-menu__backdrop" data-close="1"></div>' +
        '<div class="mch-mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">' +
        '<button type="button" class="mch-mobile-menu__close" aria-label="Close navigation" data-close="1">&times;</button>' +
        '<a class="mch-mobile-menu__link mch-mobile-menu__link--home"><span class="mch-mobile-menu__icon"></span><span class="mch-mobile-menu__label"></span></a>' +
        '<a class="mch-mobile-menu__link mch-mobile-menu__link--about"><span class="mch-mobile-menu__icon"></span><span class="mch-mobile-menu__label"></span></a>' +
        '<a class="mch-mobile-menu__link mch-mobile-menu__link--projects"><span class="mch-mobile-menu__icon"></span><span class="mch-mobile-menu__label"></span></a>' +
        '<a class="mch-mobile-menu__link mch-mobile-menu__link--contact"><span class="mch-mobile-menu__icon"></span><span class="mch-mobile-menu__label"></span></a>' +
        '<a class="mch-mobile-menu__link mch-mobile-menu__link--github"><span class="mch-mobile-menu__icon"></span><span class="mch-mobile-menu__label"></span></a>' +
        '<a class="mch-mobile-menu__link mch-mobile-menu__link--linkedin"><span class="mch-mobile-menu__icon"></span><span class="mch-mobile-menu__label"></span></a>' +
        "</div>";
      document.body.appendChild(menu);
    }

    if (menu.dataset.mchBound !== "1") {
      menu.dataset.mchBound = "1";
      menu.addEventListener("click", function (event) {
        var closeEl = event.target.closest("[data-close='1']");
        if (closeEl) {
          closeMobileMenu();
          return;
        }

        var linkEl = event.target.closest(".mch-mobile-menu__link");
        if (!linkEl) return;

        if (linkEl.getAttribute("data-internal") === "1") {
          event.preventDefault();
          closeMobileMenu();
          navigateInternalRoute(linkEl.getAttribute("data-route"), linkEl.getAttribute("data-selector"));
          return;
        }

        closeMobileMenu();
      });
    }

    var homeItem = menu.querySelector(".mch-mobile-menu__link--home");
    var aboutItem = menu.querySelector(".mch-mobile-menu__link--about");
    var projectsItem = menu.querySelector(".mch-mobile-menu__link--projects");
    var contactItem = menu.querySelector(".mch-mobile-menu__link--contact");
    var githubItem = menu.querySelector(".mch-mobile-menu__link--github");
    var linkedinItem = menu.querySelector(".mch-mobile-menu__link--linkedin");

    var homeHref = HOME_ROUTE;
    var aboutHref = ABOUT_ROUTE;
    var projectsHref = PROJECTS_ROUTE;
    var contactHref = CONTACT_ROUTE;

    setMobileMenuItem(
      homeItem,
      iconMarkupFromLink(homeLink, "H"),
      "Home",
      homeHref,
      true,
      null,
      HOME_ROUTE,
      HOME_LINK_SELECTOR
    );
    setMobileMenuItem(
      aboutItem,
      iconMarkupFromLink(aboutLink, "A"),
      "About",
      aboutHref,
      true,
      null,
      ABOUT_ROUTE,
      ABOUT_LINK_SELECTOR
    );
    setMobileMenuItem(
      projectsItem,
      iconMarkupFromLink(servicesLink, "P"),
      "Projects",
      projectsHref,
      true,
      null,
      PROJECTS_ROUTE,
      PROJECTS_LINK_SELECTOR
    );
    setMobileMenuItem(
      contactItem,
      iconMarkupFromLink(contactLink, "C"),
      "Contact",
      contactHref,
      true,
      null,
      CONTACT_ROUTE,
      CONTACT_LINK_SELECTOR
    );

    setMobileMenuItem(
      githubItem,
      iconMarkupFromLink(githubLink, "G"),
      "GitHub",
      githubLink ? githubLink.getAttribute("href") || "https://github.com" : "https://github.com",
      false,
      "_blank",
      "",
      ""
    );

    setMobileMenuItem(
      linkedinItem,
      iconMarkupFromLink(linkedinLink, "in"),
      "LinkedIn",
      linkedinLink ? linkedinLink.getAttribute("href") || "https://www.linkedin.com" : "https://www.linkedin.com",
      false,
      "_blank",
      "",
      ""
    );
  }

  // -----------------------------
  // Home page updates
  // -----------------------------
  function updateHome() {
    var heading = document.querySelector(".home-container h1");
    if (heading) {
      heading.classList.add("mch-hero-title");

      if (!heading.querySelector(".mch-title-primary")) {
        heading.innerHTML =
          '<span class="mch-title-primary">' +
          buildLetterMarkup(HERO_TITLE_PRIMARY, "mch-letter mch-letter-primary") +
          '</span><br><span class="mch-title-secondary">' +
          buildLetterMarkup(HERO_TITLE_SECONDARY, "mch-letter mch-letter-secondary") +
          "</span>";
      }
    }

    var subtitle = document.querySelector(".home-container .text-zone > h2");
    if (subtitle && !subtitle.classList.contains("mch-headline")) {
      subtitle.style.display = "none";
    }

    var cta = document.querySelector(".home-container .flat-button");
    if (!cta) return;

    setText(cta, CTA_LABEL);

    var zone = cta.closest(".text-zone");
    if (!zone) return;

    var valueProp = zone.querySelector(".mch-value-prop");
    if (!valueProp) {
      valueProp = document.createElement("div");
      valueProp.className = "mch-value-prop";
      valueProp.innerHTML = '<h2 class="mch-headline"></h2><p class="mch-subline"></p>';
      zone.insertBefore(valueProp, cta);
    }

    setText(valueProp.querySelector(".mch-headline"), HERO_HEADLINE);
    setText(valueProp.querySelector(".mch-subline"), HERO_SUBLINE);
  }

  // -----------------------------
  // Navigation/header updates
  // -----------------------------
  function updateNavBranding() {
    var logoImgs = document.querySelectorAll(".nav-container .logo img");
    if (logoImgs.length > 0) {
      logoImgs[0].src = "logo-matin.png";
      logoImgs[0].alt = BRAND_NAME;
    }
    if (logoImgs.length > 1) {
      logoImgs[1].style.display = "none";
    }

    var homeLink = document.querySelector(HOME_LINK_SELECTOR);
    var aboutLink = document.querySelector(ABOUT_LINK_SELECTOR);
    var servicesLink = document.querySelector(PROJECTS_LINK_SELECTOR);
    var contactLink = document.querySelector(CONTACT_LINK_SELECTOR);
    var githubLink = document.querySelector('.nav-container .external-links a[href*="github.com"]');
    var linkedinLink = document.querySelector('.nav-container .external-links a[href*="linkedin.com"]');

    if (homeLink) homeLink.setAttribute("data-label", "Home");
    if (aboutLink) aboutLink.setAttribute("data-label", "About");
    if (servicesLink) servicesLink.setAttribute("data-label", "Projects");
    if (contactLink) contactLink.setAttribute("data-label", "Contact");

    if (githubLink) {
      var githubIcon = githubLink.querySelector("svg");
      if (githubIcon) githubIcon.style.display = "";
      githubLink.setAttribute("target", "_blank");
      githubLink.setAttribute("rel", "noreferrer");
      githubLink.setAttribute("data-label", "GitHub");
    }

    if (linkedinLink) {
      linkedinLink.setAttribute("target", "_blank");
      linkedinLink.setAttribute("rel", "noreferrer");
      linkedinLink.setAttribute("data-label", "LinkedIn");
    }

    ensureMobileMenu(homeLink, aboutLink, servicesLink, contactLink, githubLink, linkedinLink);
  }

  // -----------------------------
  // About page updates
  // -----------------------------
  function updateAbout() {
    var aboutHeading =
      document.querySelector("#about-container h1") ||
      document.querySelector("#about-text-zone h1") ||
      document.querySelector(".about-page h1");
    setText(aboutHeading, "About Us");

    var paragraphs = document.querySelectorAll("#about-text-zone .arrow-text-pair p");
    if (paragraphs.length >= 3) {
      setText(
        paragraphs[0],
        "Matin Consulting House delivers strategy and transformation consulting for growing businesses."
      );
      setText(
        paragraphs[1],
        "We partner with teams to build clear plans and measurable outcomes across operations, brand, and digital initiatives."
      );
      setText(
        paragraphs[2],
        "Our approach combines insight, execution, and long-term partnership so every engagement stays practical and results-driven."
      );
    }

    var subtitle = document.querySelector(".cube-container #subtitle p");
    setText(subtitle, "These are some of the focus areas we help clients with.");
  }

  // -----------------------------
  // Contact page updates
  // -----------------------------
  function updateContact() {
    var contactHeading = document.querySelector("#contact-container h1");
    setText(contactHeading, "Contact Us");

    var contactParagraph = document.querySelector("#contact-container .text-zone p");
    setText(
      contactParagraph,
      "Feel free to reach out with any professional enquiries! We are particularly interested in advisory and transformation engagements. Let's connect!"
    );

    setText(document.getElementById("popup"), BRAND_NAME);

    var info = document.querySelector("#contact-container .info-map");
    if (info) {
      info.innerHTML = "Matin Consulting House<br>Gower Street<br>London<br>WC1E 6BT";
    }
  }

  // -----------------------------
  // Projects page updates
  // -----------------------------
  function updateProjects() {
    var nodes = document.querySelectorAll(".images-container .image-box .content *");
    for (var i = 0; i < nodes.length; i += 1) {
      if (nodes[i].textContent && nodes[i].textContent.trim() === "MaheenIO") {
        nodes[i].textContent = BRAND_NAME;
      }
    }
  }

  // -----------------------------
  // Apply on load + rerenders
  // -----------------------------
  function applyBranding() {
    document.title = BRAND_NAME;
    updateNavBranding();
    updateHome();
    updateAbout();
    updateContact();
    updateProjects();
  }

  var scheduled = false;

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
  });
})();
