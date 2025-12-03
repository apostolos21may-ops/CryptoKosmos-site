(function () {

  // --------------------------------------------------
  // 1) DETECT LANGUAGE OR LOAD SAVED
  // --------------------------------------------------
  let saved = localStorage.getItem("ck-lang");
  let currentLang = saved || (navigator.language.startsWith("en") ? "en" : "el");
  localStorage.setItem("ck-lang", currentLang);

  // --------------------------------------------------
  // 2) FIND ELEMENTS
  // --------------------------------------------------
  const langBtn   = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const langIcon  = document.getElementById("lang-icon");

  const mobBtn   = document.getElementById("mobile-lang-toggle");
  const mobLabel = document.getElementById("mobile-lang-label");
  const mobIcon  = document.getElementById("mobile-lang-icon");

  // --------------------------------------------------
  // 3) SAFE PATH FUNCTION FOR ICONS
  // --------------------------------------------------
  function iconPath(filename) {
    // Αν η σελίδα βρίσκεται σε subfolder (blockchain.html, wallets.html, solana.html)
    // τότε location.pathname περιέχει ένα "/"
    if (location.pathname.includes("/guides/") || location.pathname.includes("/pages/") || location.pathname.includes("blockchain") || location.pathname.includes("wallets") || location.pathname.includes("solana")) {
      return "../" + filename;
    }
    // Αν είμαστε στο index.html (root)
    return "./" + filename;
  }

  // --------------------------------------------------
  // 4) APPLY LANGUAGE
  // --------------------------------------------------
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("ck-lang", lang);

    const dict = window.TRANSLATIONS[lang];
    if (!dict) return;

    // textContent translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    updatePCButtonUI(lang);
    updateMobileButtonUI(lang);

    // notify glossary and other modules
    document.dispatchEvent(new Event("languageChanged"));
  }

  // --------------------------------------------------
  // 5) UPDATE PC LANGUAGE BUTTON
  // --------------------------------------------------
  function updatePCButtonUI(lang) {
    if (!langLabel || !langIcon) return;

    if (lang === "el") {
      langLabel.textContent = "GR";
      langIcon.src = iconPath("IMG_5542.png");
    } else {
      langLabel.textContent = "EN";
      langIcon.src = iconPath("IMG_5543.png");
    }
  }

  // --------------------------------------------------
  // 6) UPDATE MOBILE BUTTON UI
  // --------------------------------------------------
  function updateMobileButtonUI(lang) {
    if (!mobLabel || !mobIcon) return;

    if (lang === "el") {
      mobLabel.textContent = "GR";
      mobIcon.src = iconPath("IMG_5542.png");
    } else {
      mobLabel.textContent = "EN";
      mobIcon.src = iconPath("IMG_5543.png");
    }
  }

  // --------------------------------------------------
  // 7) BUTTON EVENT LISTENERS
  // --------------------------------------------------
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = currentLang === "el" ? "en" : "el";
      applyLang(next);
    });
  }

  if (mobBtn) {
    mobBtn.addEventListener("click", () => {
      const next = currentLang === "el" ? "en" : "el";
      applyLang(next);

      // Κλείνουμε mobile menu μετά την αλλαγή
      document.getElementById("menu-toggle")?.classList.remove("open");
      document.getElementById("mobile-menu")?.classList.remove("open");
    });
  }

  // --------------------------------------------------
  // INITIAL LOAD
  // --------------------------------------------------
  applyLang(currentLang);

})();