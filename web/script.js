async function loadChartData() {
    const cryptos = ["bitcoin", "ethereum", "ripple", "cardano", "solana"];
    const cryptoSymbols = ["BTC", "ETH", "XRP", "ADA", "SOL"];

    try {
        const url = 'https://api.coingecko.com/api/v3/coins/';
        const pricesData = {};

        for (let i = 0; i < cryptos.length; i++) {
            const crypto = cryptos[i];
            const symbol = cryptoSymbols[i];

            // Получение данных через API
            const response = await fetch(`${url}${crypto}/market_chart?vs_currency=usd&days=365&interval=daily`);
            const data = await response.json();

            if (data && data.prices) {
                pricesData[symbol] = data.prices.map(entry => entry[1]);
            } else {
                console.error(`No prices data for ${crypto}`);
            }
        }

        // Создание графиков для каждого криптоактива
        cryptos.forEach((crypto, index) => {
            const canvasId = `${crypto}Chart`;
            const ctx = document.getElementById(canvasId)?.getContext("2d");

            if (!ctx) {
                console.error(`Canvas with id '${canvasId}' not found.`);
                return;
            }

            const prices = pricesData[cryptoSymbols[index]] || [];
            if (prices.length === 0) {
                console.warn(`No prices data for ${cryptoSymbols[index]}.`);
                return;
            }

            const labels = prices.map((_, i) => `Day ${i + 1}`);

            new Chart(ctx, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [{
                        label: `${crypto.charAt(0).toUpperCase() + crypto.slice(1)} Price (USD)`,
                        data: prices,
                        borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
                        borderWidth: 2
                    }]
                }
            });
        });
    } catch (error) {
        console.error("Error loading prices data:", error);
    }
}

loadChartData(); // Загружаем данные и строим графики
