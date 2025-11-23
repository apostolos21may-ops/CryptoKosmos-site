// ======================
// REAL-TIME BINANCE WEBSOCKETS
// ======================

// Τα νομίσματα που θα δείχνουμε στην ενότητα "Ζωντανές τιμές"
const COINS = [
  { id: "BTCUSDT", symbol: "BTC", name: "Bitcoin" },
  { id: "ETHUSDT", symbol: "ETH", name: "Ethereum" },
  { id: "SOLUSDT", symbol: "SOL", name: "Solana" }
];

// Container για τις κάρτες αγοράς
const marketWrap = document.getElementById("market-cards");

// Δημιουργία DOM καρτών ΜΙΑ φορά
function createCards() {
  marketWrap.innerHTML = "";

  COINS.forEach((coin) => {
    const card = document.createElement("article");
    card.className = "card";
    card.id = `card-${coin.symbol}`;

    card.innerHTML = `
      <h4>${coin.name} (${coin.symbol})</h4>
      <div class="row">
        <span class="price" id="price-${coin.symbol}">-</span>
        <span class="change" id="change-${coin.symbol}">-</span>
      </div>
      <div class="muted small">
        Ζωντανά από Binance WebSocket
      </div>
    `;

    marketWrap.appendChild(card);
  });
}

createCards();


// ======================
// BINANCE LIVE WebSocket
// ======================

COINS.forEach((coin) => {
  const ws = new WebSocket(
    `wss://stream.binance.com:9443/ws/${coin.id.toLowerCase()}@ticker`
  );

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    const price = parseFloat(data.c);     // current price
    const open  = parseFloat(data.o);     // open price
    const changePercent = ((price - open) / open) * 100;

    const priceEl = document.getElementById(`price-${coin.symbol}`);
    const changeEl = document.getElementById(`change-${coin.symbol}`);

    // Ενημέρωση τιμών
    priceEl.textContent = "$" + price.toLocaleString();
    changeEl.textContent = `${changePercent >= 0 ? "↑" : "↓"} ${changePercent.toFixed(2)}%`;

    // Χρώματα
    if (changePercent >= 0) {
      changeEl.classList.remove("down");
      changeEl.classList.add("up");
    } else {
      changeEl.classList.remove("up");
      changeEl.classList.add("down");
    }
  };

  ws.onerror = () => console.warn("Binance WebSocket error:", coin.symbol);
});