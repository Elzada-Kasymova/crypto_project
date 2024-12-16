import fetch from "node-fetch";
import fs from "fs";

// API URL
const url = "https://api.coingecko.com/api/v3/coins/";

const cryptos = ["cardano", "solana", "polkadot", "bitcoin", "ethereum", "ripple"];  // Добавлены новые криптовалюты
const outputFile = "prices.json";

// API ключ
const apiKey = "CG-QvP6CpSjC9W4eECCpbzTddBk";  // Замените на свой API ключ

const params = new URLSearchParams({
  vs_currency: "usd",
  days: "365",  // Данные за год
  interval: "daily",
});

async function fetchPrices(cryptoId) {
  try {
    const response = await fetch(`${url}${cryptoId}/market_chart?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,  // Использование API ключа
      }
    });
    const data = await response.json();

    if (!data.prices || !Array.isArray(data.prices)) {
      console.error(`No prices data for ${cryptoId}`);
      return [];
    }

    return data.prices.map(entry => entry[1]);
  } catch (error) {
    console.error(`Error fetching data for ${cryptoId}:`, error);
    return [];
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllPrices(cryptoIds) {
  const pricesData = {};

  for (const cryptoId of cryptoIds) {
    console.log(`Fetching data for ${cryptoId}...`);
    const prices = await fetchPrices(cryptoId);
    pricesData[cryptoId.toUpperCase()] = prices;

    // Задержка между запросами
    await sleep(1000);  // Задержка в 1 секунду
  }

  fs.writeFileSync(outputFile, JSON.stringify(pricesData, null, 2));
  console.log(`Prices saved to ${outputFile}`);
}

fetchAllPrices(cryptos);
