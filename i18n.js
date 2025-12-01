(function () {

  // -----------------------------
  // 1) AUTO-DETECT on first visit
  // -----------------------------
  let stored = localStorage.getItem("ck-lang");

  let currentLang =
    stored ||
    (navigator.language.startsWith("en") ? "en" : "el");

  localStorage.setItem("ck-lang", currentLang);

  // -----------------------------
  // BUTTON ELEMENTS
  // -----------------------------
  const langBtn   = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const langIcon  = document.getElementById("lang-icon");

  // -----------------------------
  // APPLY LANGUAGE
  // -----------------------------
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

    // placeholder translations
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // update button UI
    if (lang === "el") {
      langLabel.textContent = "GR";
      langIcon.src = "./IMG_5542.png";
    } else {
      langLabel.textContent = "EN";
      langIcon.src = "./IMG_5543.png";
    }

    // 🔥 Ενημερώνει το Glossary
    document.dispatchEvent(new Event("languageChanged"));
  }

  // -----------------------------
  // BUTTON CLICK
  // -----------------------------
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "el" ? "en" : "el");
    });
  }




// -----------------------------
  // MOBILE LANGUAGE BUTTON
  // -----------------------------
  const mobBtn   = document.getElementById("mobile-lang-toggle");
  const mobLabel = document.getElementById("mobile-lang-label");
  const mobIcon  = document.getElementById("mobile-lang-icon");

  function updateMobileLangUI(lang) {
    if (lang === "el") {
      mobLabel.textContent = "GR";
      mobIcon.src = "./IMG_5542.png";
    } else {
      mobLabel.textContent = "EN";
      mobIcon.src = "./IMG_5543.png";
    }
  }

  updateMobileLangUI(currentLang);

  if (mobBtn) {
    mobBtn.addEventListener("click", () => {
      const next = currentLang === "el" ? "en" : "el";
      applyLang(next);
      updateMobileLangUI(next);

      // Κλείνει το mobile menu όταν αλλάξει γλώσσα
      document.getElementById("menu-toggle")?.classList.remove("open");
      document.getElementById("mobile-menu")?.classList.remove("open");
    });
  }


  // -----------------------------
  // INITIAL LOAD
  // -----------------------------
  applyLang(currentLang);

})();

  