// ========================================
// UNIVERSAL APP.JS (CryptoKosmos)
// Υποστηρίζει ΟΛΕΣ τις σελίδες
// ========================================


// ==========================
// 1) LOAD USER FROM STORAGE
// ==========================
function loadUser() {
    try {
        return JSON.parse(localStorage.getItem("ck-user")) || null;
    } catch {
        return null;
    }
}

function saveUser(user) {
    if (user) localStorage.setItem("ck-user", JSON.stringify(user));
    else localStorage.removeItem("ck-user");
}

let currentUser = loadUser();




function closeBurgerMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("open"); // το κάνει ≡
    mobileMenu.classList.remove("open"); // κλείνει το menu
}


// ==========================
// 2) THEME SYSTEM (GLOBAL)
// ==========================
const themeBtn   = document.getElementById("theme-toggle");
const themeIcon  = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");
const siteLogo   = document.getElementById("site-logo");

function applyTheme(light) {

    if (light) {
        document.body.classList.add("light-theme");
        localStorage.setItem("ck-theme", "light");

        if (themeIcon) themeIcon.src = "./IMG_5299.png";
        if (themeLabel) themeLabel.textContent = "Light";
        if (siteLogo) siteLogo.src = "./logo.png";

    } else {
        document.body.classList.remove("light-theme");
        localStorage.setItem("ck-theme", "dark");

        if (themeIcon) themeIcon.src = "./IMG_5300.png";
        if (themeLabel) themeLabel.textContent = "Dark";
        if (siteLogo) siteLogo.src = "./black logo.png";
    }
}

// φορτώνει τι είχαμε αποθηκεύσει
applyTheme(localStorage.getItem("ck-theme") === "light");

// button toggle
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const isLight = !document.body.classList.contains("light-theme");
        applyTheme(isLight);
    });
}


// ==========================
// 3) LOGIN UI UPDATE
// ==========================
const authBtn   = document.getElementById("auth-btn");
const authLabel = document.getElementById("auth-label");
const authIcon  = document.getElementById("auth-icon");

function updateAuthUI() {
    if (!authBtn || !authLabel || !authIcon) return;

    if (currentUser) {
        authLabel.textContent = "Logout";
        authBtn.dataset.state = "logout";
        authIcon.src = "./IMG_5367.png";
    } else {
        authLabel.textContent = "Login";
        authBtn.dataset.state = "login";
        authIcon.src = "./IMG_5301.png";
    }
}
updateAuthUI();


// ==========================
// 4) LOGIN / SIGNUP / VERIFY
// ==========================
const loginModal  = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const verifyModal = document.getElementById("verify-modal");

const loginForm  = document.getElementById("login-form");
const signupBtn  = document.getElementById("signup-btn");
const signupClose = document.querySelector(".signup-close");
const signupCreate = document.getElementById("signup-create");
const backToLogin = document.getElementById("back-to-login");

const verifySubmit = document.getElementById("verify-submit");
const verifyClose  = document.querySelector(".verify-close");

const noAccountMsg = document.getElementById("no-account");
const signupError  = document.getElementById("signup-error");
const verifyError  = document.getElementById("verify-error");

let tempUser = null;
let verificationCode = null;


// Helper modal functions
function openLogin() {
    if (!loginModal) return;
    loginForm?.reset();
    noAccountMsg && (noAccountMsg.style.display = "none");
    signupBtn && (signupBtn.style.display = "none");
    signupModal?.classList.add("hidden");
    verifyModal?.classList.add("hidden");
    loginModal.classList.remove("hidden");
}
function closeLogin() { loginModal?.classList.add("hidden"); }

function openSignup() {
    signupModal?.classList.remove("hidden");
}
function closeSignup() { signupModal?.classList.add("hidden"); }

function openVerify() { verifyModal?.classList.remove("hidden"); }
function closeVerify() { verifyModal?.classList.add("hidden"); }


// NAVBUTTON LOGIN / LOGOUT
if (authBtn) {
    authBtn.addEventListener("click", () => {
        if (authBtn.dataset.state === "login") openLogin();
        else {
            currentUser = null;
            saveUser(null);
            updateAuthUI();
        }
    });
}

// Close login modal
document.getElementById("login-close")?.addEventListener("click", closeLogin);

// Click outside modal
loginModal?.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) closeLogin();
});

// Login submit
loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const pass  = document.getElementById("login-pass").value.trim();
    const saved = loadUser();

    if (!saved || saved.email !== email || saved.pass !== pass) {
        noAccountMsg.style.display = "block";
        signupBtn.style.display = "block";
        return;
    }

    currentUser = saved;
    updateAuthUI();
    closeLogin();
});

// "Δημιουργία λογαριασμού" → Open Signup
signupBtn?.addEventListener("click", () => {
    closeLogin();
    noAccountMsg.style.display = "none";
    signupBtn.style.display = "none";
    openSignup();
});

// Signup close
signupClose?.addEventListener("click", closeSignup);

// Back to login
backToLogin?.addEventListener("click", () => {
    closeSignup();
    openLogin();
});

// Signup create
signupCreate?.addEventListener("click", () => {
    const email = document.getElementById("signup-email").value.trim();
    const pass1 = document.getElementById("signup-pass1").value.trim();
    const pass2 = document.getElementById("signup-pass2").value.trim();

    if (!email || !pass1 || !pass2) return;

    if (pass1 !== pass2) {
        signupError.style.display = "block";
        return;
    }

    signupError.style.display = "none";

    // fake code
    verificationCode = String(Math.floor(100000 + Math.random() * 900000));
    console.log("Verification:", verificationCode);

    tempUser = { email, pass: pass1 };

    closeSignup();
    openVerify();
});

// Verify
verifySubmit?.addEventListener("click", () => {
    const code = document.getElementById("verify-code").value.trim();
    if (code !== verificationCode) {
        verifyError.style.display = "block";
        return;
    }
    verifyError.style.display = "none";

    saveUser(tempUser);
    currentUser = tempUser;
    updateAuthUI();
    closeVerify();
    alert("Ο λογαριασμός δημιουργήθηκε!");
});

verifyClose?.addEventListener("click", closeVerify);


// ==========================
// 5) PASSWORD EYE (universal)
// ==========================
function setupPasswordToggle(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon  = document.getElementById(iconId);
    if (!input || !icon) return;

    icon.addEventListener("click", () => {
        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        icon.src = isHidden ? "./IMG_5381.png" : "./IMG_5380.png";
    });
}

// LOGIN
setupPasswordToggle("login-pass", "login-pass-toggle");
// SIGNUP
setupPasswordToggle("signup-pass1", "signup-pass1-toggle");
setupPasswordToggle("signup-pass2", "signup-pass2-toggle");


// ==========================
// 6) HERO RANKING (ONLY INDEX)
// ==========================
const rankBox = document.querySelector(".hero-rank-box");
const rankWrap = document.getElementById("hero-rank-inner");

async function loadHeroRanking() {
    if (!rankBox || !rankWrap) return; // don't load on blockchain.html

    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
        );
        const data = await res.json();
        rankWrap.innerHTML = "";

        data.forEach((coin, idx) => {
            const row = document.createElement("div");
            row.className = "hero-rank-row";
            row.innerHTML = `
                <span class="hr-pos">${idx + 1}</span>
                <div class="hr-icon-wrap">
                    <img src="${coin.image}" class="hr-icon">
                    <span class="hr-symbol">${coin.symbol.toUpperCase()}</span>
                </div>
                <span class="hr-change ${coin.price_change_percentage_24h >= 0 ? "hr-up" : "hr-down"}">
                  ${coin.price_change_percentage_24h >= 0 ? "▲" : "▼"} 
                  ${coin.price_change_percentage_24h.toFixed(2)}%
                </span>
                <span class="hr-price">$${coin.current_price.toLocaleString()}</span>
            `;
            rankWrap.appendChild(row);
        });

        rankWrap.innerHTML += rankWrap.innerHTML;
        startHeroScroll();
    } catch (err) {
        console.warn("Hero ranking error:", err);
    }
}

function startHeroScroll() {
    if (!rankBox || !rankWrap) return;
    let pos = 0;
    setInterval(() => {
        pos += 0.45;
        if (pos >= rankWrap.scrollHeight / 2) pos = 0;
        rankBox.scrollTop = pos;
    }, 30);
}

loadHeroRanking();


// ==========================
// 7) TRADINGVIEW (ONLY INDEX)
// ==========================
if (document.getElementById("tradingview_chart")) {
    const s = document.createElement("script");
    s.src = "https://s3.tradingview.com/tv.js";
    s.onload = () =>
        new TradingView.widget({
            autosize: true,
            symbol: "BINANCE:BTCUSDT",
            interval: "60",
            timezone: "Europe/Athens",
            theme: "dark",
            style: "1",
            toolbar_bg: "#0f1216",
            container_id: "tradingview_chart",
        });
    document.body.appendChild(s);
}

// ========================================
// Glossary (ασφαλές για όλες τις σελίδες)
// ========================================
const TERMS = [
  {k:"Blockchain", v:"Κοινόχρηστο ψηφιακό βιβλίο συναλλαγών — ασφαλές, διαφανές, αποκεντρωμένο."},
  {k:"Wallet",     v:"Πορτοφόλι crypto: custodial ή non-custodial."},
  {k:"Seed phrase",v:"12/24 λέξεις ανάκτησης. Μην τη μοιράζεσαι ποτέ."},
  {k:"Gas/Fees",   v:"Κόστη για την εκτέλεση συναλλαγών στο blockchain."},
  {k:"DCA",        v:"Σταδιακές αγορές για μείωση ρίσκου."},
  {k:"DeFi",       v:"Αποκεντρωμένα χρηματοοικονομικά."},
  {k:"NFT",        v:"Μοναδικά ψηφιακά assets."},
  {k:"SOL",        v:"Το νόμισμα του δικτύου Solana."}
];

const gList   = document.getElementById("glossary-list");
const gSearch = document.getElementById("glossary-search");

function renderTerms(q) {
  // Αν η σελίδα δεν έχει γλωσσάρι, απλά μην κάνεις τίποτα
  if (!gList) return;

  const query = (q || "").toLowerCase();
  gList.innerHTML = "";

  TERMS
    .filter(t => (t.k + " " + t.v).toLowerCase().includes(query))
    .forEach(t => {
      const el = document.createElement("div");
      el.className = "term";
      el.innerHTML = `<h5>${t.k}</h5><p class="muted">${t.v}</p>`;
      gList.appendChild(el);
    });
}

// Μόνο αν υπάρχει λίστα στη σελίδα (π.χ. index.html)
if (gList) {
  renderTerms("");
}

// Μόνο αν υπάρχει search input
if (gSearch) {
  gSearch.addEventListener("input", e => renderTerms(e.target.value));
}

// ===============================
// CLEAN BURGER MENU (CSS ONLY)
// ===============================

const burger = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function closeBurger() {
  burger.classList.remove("open");
  mobileMenu.classList.remove("open");
}

// Toggle open/close
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

// Close burger on modal close
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-backdrop")) {
    closeBurger();
  }
});

// When pressing login in mobile menu
document.getElementById("mobile-auth-btn")?.addEventListener("click", () => {
  document.getElementById("auth-btn")?.click();
  closeBurger();
});

// When pressing theme in mobile menu
document.getElementById("mobile-theme-toggle")?.addEventListener("click", () => {
  document.getElementById("theme-toggle")?.click();
  closeBurger();
});

// When login/signup/verify modals close
document.getElementById("login-close")?.addEventListener("click", closeBurger);
document.querySelector(".signup-close")?.addEventListener("click", closeBurger);
document.querySelector(".verify-close")?.addEventListener("click", closeBurger);