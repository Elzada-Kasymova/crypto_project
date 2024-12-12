import fetch from "node-fetch";

async function fetchPrices(cryptoId) {
  const url = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`;
  const params = new URLSearchParams({
    vs_currency: "usd", // Валюта (например, USD)
    days: "180",        // Количество дней (например, последние 180 дней)
    interval: "daily",  // Интервал данных (например, ежедневный)
  });

  try {
    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();

    // Получаем только цены
    const prices = data.prices.map((entry) => entry[1]); // Второй элемент — это цена
    console.log(`Prices for ${cryptoId}:`, prices);
    return prices;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Пример вызова функции
fetchPrices("bitcoin").then((prices) => console.log(prices)); // Для Bitcoin
fetchPrices("ethereum").then((prices) => console.log(prices)); // Для Ethereum
