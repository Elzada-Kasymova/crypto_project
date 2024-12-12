// Используем асинхронную функцию для загрузки данных и построения графиков
async function loadChartData() {
    const ctxBitcoin = document.getElementById("bitcoinChart").getContext("2d");

    // Получаем данные о ценах для Bitcoin с API
    const prices = await fetchPrices("bitcoin");  // Для Bitcoin

    // Генерация меток для оси X (например, каждый день)
    const labels = prices.map((_, i) => `Day ${i + 1}`);

    // Создание графика для Bitcoin
    new Chart(ctxBitcoin, {
        type: "line",
        data: {
            labels: labels,  // Месяцы или дни, в зависимости от данных
            datasets: [{
                label: "Bitcoin Price (USD)",
                data: prices,  // Цены Bitcoin
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2
            }]
        }
    });
}

// Функция для получения данных через CoinGecko API
async function fetchPrices(cryptoId) {
    const url = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`;
    const params = new URLSearchParams({
        vs_currency: "usd", // Валюта для сравнения (например, USD)
        days: "180",        // Количество дней (например, последние 180 дней)
        interval: "daily",  // Интервал (например, ежедневно)
    });

    try {
        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();

        // Получаем только цены из данных
        const prices = data.prices.map(entry => entry[1]); // Второй элемент в массиве — это цена
        return prices;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Вызов функции для загрузки и отображения данных
loadChartData();
