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

    var homeLink = document.querySelector(
      ".nav-container nav a:not(.about-link):not(.projects-link):not(.contact-link)"
    );
    var aboutLink = document.querySelector(".nav-container nav a.about-link");
    var servicesLink = document.querySelector(".nav-container nav a.projects-link");
    var contactLink = document.querySelector(".nav-container nav a.contact-link");
    var githubLink = document.querySelector('.nav-container .external-links a[href*="github.com"]');
    var linkedinLink = document.querySelector('.nav-container .external-links a[href*="linkedin.com"]');

    if (homeLink) homeLink.setAttribute("data-label", "Home");
    if (aboutLink) aboutLink.setAttribute("data-label", "About");
    if (servicesLink) servicesLink.setAttribute("data-label", "Services");
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
