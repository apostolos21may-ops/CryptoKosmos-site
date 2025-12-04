(function () {

  // =====================================================
  // 1) DETECT / LOAD LANGUAGE
  // =====================================================
  let saved = localStorage.getItem("ck-lang");
  let currentLang = saved || (navigator.language.startsWith("en") ? "en" : "el");
  localStorage.setItem("ck-lang", currentLang);

  // =====================================================
  // 2) ELEMENTS
  // =====================================================
  const langBtn   = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const langIcon  = document.getElementById("lang-icon");

  const mobBtn   = document.getElementById("mobile-lang-toggle");
  const mobLabel = document.getElementById("mobile-lang-label");
  const mobIcon  = document.getElementById("mobile-lang-icon");

  // =====================================================
  // 3) PATH FIX
  // =====================================================
  function iconPath(filename) {
    if (location.pathname.includes("/guides/") ||
        location.pathname.includes("/pages/") ||
        location.pathname.includes("blockchain") ||
        location.pathname.includes("wallets") ||
        location.pathname.includes("solana")) {
      return "../" + filename;
    }
    return "./" + filename;
  }

  // =====================================================
  // 4) APPLY LANGUAGE TO ELEMENTS
  // =====================================================
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("ck-lang", lang);

    const dict = window.TRANSLATIONS[lang];
    if (!dict) return;

    // --- STANDARD TEXTS ---
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // --- PLACEHOLDERS ---
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // --- SPECIAL CASES: LOGIN / SIGNUP / VERIFY ---
    forceModalTranslations(dict);

    updatePCButtonUI(lang);
    updateMobileButtonUI(lang);

    document.dispatchEvent(new Event("languageChanged"));
  }

  // =====================================================
  // 5) TRANSLATE MODALS (LOGIN / SIGNUP / VERIFY)
  // =====================================================
  function forceModalTranslations(dict) {
    // LOGIN MODAL
    setText("login_title", ".modal-title");
    setText("login_btn", ".modal-submit");
    setText("login_no_account", "#no-account");
    setText("login_create_account", "#signup-btn");

    setPlaceholder("login_email", "#login-email");
    setPlaceholder("login_password", "#login-pass");

    // SIGNUP MODAL
    setText("signup_title", "#signup-modal .modal-title");
    setText("signup_btn", "#signup-create");
    setText("signup_error", "#signup-error");
    setText("signup_have_account", "#signup-modal .modal-hint span[data-i18n='signup_have_account']");
    setText("signup_back", "#back-to-login");

    setPlaceholder("signup_email", "#signup-email");
    setPlaceholder("signup_pass1", "#signup-pass1");
    setPlaceholder("signup_pass2", "#signup-pass2");

    // VERIFY MODAL
    setText("verify_title", "#verify-modal .modal-title");
    setText("verify_subtitle", "#verify-modal .muted");
    setText("verify_error", "#verify-error");
    setText("verify_btn", "#verify-submit");

    setPlaceholder("verify_code", "#verify-code");

    function setText(key, selector) {
      const el = document.querySelector(selector);
      if (el && dict[key] !== undefined) el.textContent = dict[key];
    }

    function setPlaceholder(key, selector) {
      const el = document.querySelector(selector);
      if (el && dict[key] !== undefined) el.placeholder = dict[key];
    }
  }

  // =====================================================
  // 6) UPDATE BUTTONS UI
  // =====================================================
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

  // =====================================================
  // 7) BUTTON EVENTS
  // =====================================================
  langBtn?.addEventListener("click", () => {
    applyLang(currentLang === "el" ? "en" : "el");
  });

  mobBtn?.addEventListener("click", () => {
    applyLang(currentLang === "el" ? "en" : "el");
    document.getElementById("mobile-menu")?.classList.remove("open");
    document.getElementById("menu-toggle")?.classList.remove("open");
  });

  // =====================================================
  // INITIAL LANGUAGE LOAD
  // =====================================================
  applyLang(currentLang);

})();