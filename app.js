// ======================
// Βασικές ρυθμίσεις
// ======================

// Τα νομίσματα που θα δείχνουμε στην ενότητα "Ζωντανές τιμές"
const COINS = [
  { id: "bitcoin",  symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana",   symbol: "SOL", name: "Solana" }
];

// Container για τις κάρτες αγοράς
const marketWrap = document.getElementById("market-cards");

// ======================
// Ζωντανές τιμές (CoinGecko)
// ======================

// Φτιάχνει HTML κάρτες με τις τιμές
function renderMarket(data) {
  if (!marketWrap) return;
  marketWrap.innerHTML = "";

  data.forEach((coin) => {
    const card = document.createElement("article");
    card.className = "card";

    const change = coin.changeUsd;
    const isUp = typeof change === "number" && change >= 0;
    const changeText =
      typeof change === "number"
        ? `${isUp ? "↑" : "↓"} ${change.toFixed(2)}%`
        : "-";

    card.innerHTML = `
      <h4>${coin.name} (${coin.symbol})</h4>
      <div class="row">
        <span class="price">$${coin.usd?.toLocaleString() ?? "-"}</span>
        <span class="change ${isUp ? "up" : "down"}">${changeText}</span>
      </div>
      <div class="muted small">
        €${coin.eur?.toLocaleString() ?? "-"} | 24h μεταβολή σε USD
      </div>
    `;

    marketWrap.appendChild(card);
  });
}

// Κάνει fetch από CoinGecko
async function fetchPrices() {
  try {
    const ids = COINS.map((c) => c.id).join(",");
    const url =
      `https://api.coingecko.com/api/v3/simple/price` +
      `?ids=${ids}&vs_currencies=usd,eur&include_24hr_change=true`;

    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();

    const mapped = COINS.map((c) => ({
      id: c.id,
      name: c.name,
      symbol: c.symbol,
      usd: json[c.id]?.usd ?? null,
      eur: json[c.id]?.eur ?? null,
      changeUsd: json[c.id]?.usd_24h_change ?? null
    }));

    renderMarket(mapped);
  } catch (e) {
    console.warn("CoinGecko error:", e);
  }
}

// Κλήσεις
fetchPrices();
setInterval(fetchPrices, 60_000); // κάθε 60 δευτερόλεπτα

// ======================
// TradingView Chart
// ======================

let tvWidget = null;

// Φτιάχνει / αλλάζει το γράφημα
function initTradingView(symbol) {
  // Αν η βιβλιοθήκη δεν έχει φορτώσει ακόμα, ξαναδοκίμασε σε λίγο
  if (typeof TradingView === "undefined") {
    setTimeout(() => initTradingView(symbol), 500);
    return;
  }

  // Αν υπάρχει ήδη γράφημα, καθάρισέ το
  if (tvWidget && typeof tvWidget.remove === "function") {
    tvWidget.remove();
  }

  tvWidget = new TradingView.widget({
    symbol: symbol,                // π.χ. "BINANCE:BTCUSDT"
    interval: "60",                // 1 hour candles
    autosize: true,
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    enable_publishing: false,
    hide_legend: false,
    hide_side_toolbar: false,
    container_id: "tradingview_chart"
  });
}

// Συνδέουμε τα κουμπιά BTC/ETH/SOL
const pairButtons = document.querySelectorAll(".pair");

pairButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    pairButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const symbol = btn.dataset.symbol; // από το data-symbol στο HTML
    initTradingView(symbol);
  });
});

// Όταν φορτώσει η σελίδα, ξεκίνα με το active κουμπί (BTC/USDT)
window.addEventListener("load", () => {
  const activeBtn = document.querySelector(".pair.active");
  if (activeBtn) {
    initTradingView(activeBtn.dataset.symbol);
  }
});