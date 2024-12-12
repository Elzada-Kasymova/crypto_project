Crypto Price Charts Project

Этот проект представляет собой веб-приложение, которое отображает графики изменения цен популярных криптовалют за последний год. Данные о ценах криптовалют получаются через API и визуализируются с помощью библиотеки Chart.js.

Структура проекта

Проект включает в себя несколько папок и файлов:

crypto_project/
├── cpp/                  # Исходный код на C++
│   ├── crypto.h          # Заголовочный файл для работы с криптовалютами
│   ├── crypto.cpp        # Реализация класса Crypto
│   └── main.cpp          # Основная программа на C++
├── js/                   # Скрипты на JavaScript для работы с API
│   ├── fetch.js          # Скрипт для получения данных о ценах криптовалют через API
│   └── .env              # Файл с API ключом (не должен быть публичным)
├── web/                  # Веб-страница с графиками
│   ├── index.html        # HTML файл с разметкой для отображения графиков
│   └── script.js         # Скрипт для отображения графиков с использованием Chart.js
└── prices.json           # Файл с данными о ценах криптовалют (генерируется автоматически)
Установка и запуск

1. Клонирование репозитория
Склонируйте репозиторий на вашу локальную машину:

git clone https://github.com/your-username/crypto_project.git
cd crypto_project
2. Установка зависимостей
Для работы с API и загрузки данных, убедитесь, что у вас установлен Node.js и npm. Затем установите все зависимости:

npm install
3. Запуск локального сервера
Запустите локальный сервер с помощью http-server:

http-server
Сервер будет доступен по адресу http://127.0.0.1:8080.

4. Получение данных о ценах
Если вы хотите получить актуальные данные о криптовалютах, запустите скрипт fetch.js, который получит данные через API CoinGecko и сохранит их в файл prices.json:

node js/fetch.js
5. Открытие веб-страницы
Теперь, перейдя по адресу http://127.0.0.1:8080, вы увидите графики цен криптовалют на протяжении последнего года.

Технологии

JavaScript — для работы с API и визуализации данных.
Chart.js — для отображения графиков цен.
Node.js — для получения данных с внешнего API.
C++ — для работы с криптовалютами в отдельной части проекта (не используется на веб-странице, но полезно для реализации более сложной логики).
API

Данные о ценах криптовалют получаются с помощью API CoinGecko. Для использования API необходимо передавать правильный API_KEY в файле .env.

Структура данных

Данные о ценах сохраняются в файле prices.json в следующем формате:

{
  "BTC": [45000, 47000, 46000, 48000, 47000, 49000],
  "ETH": [3000, 3200, 3100, 3300, 3200, 3400],
  "XRP": [0.5, 0.52, 0.51, 0.53, 0.52, 0.54],
  "ADA": [1.2, 1.3, 1.25, 1.35, 1.3, 1.4],
  "SOL": [35, 36, 35.5, 37, 36.5, 38]
}
Где:

BTC, ETH, XRP, ADA, SOL — это символы криптовалют.
Массивы цен — это список цен в долларах США за последние 6 месяцев (данные за 365 дней).
Возможные ошибки и их решения

CORS ошибка: Если вы получаете ошибку CORS, попробуйте запустить сервер с помощью http-server, как описано в разделе "Запуск локального сервера".
Ошибка 404: Проверьте, существует ли файл prices.json в директории проекта и правильно ли указаны пути для его получения через API.
Ошибка загрузки данных: Убедитесь, что у вас правильно настроен .env файл с API ключом и что ваше подключение к интернету стабильно.
Контрибьюция

Пожалуйста, сделайте форк репозитория, чтобы внести изменения, и отправьте пулл-реквест с описанием ваших улучшений. Будем рады видеть вашу помощь!

English Version
Crypto Price Charts Project

This project is a web application that displays charts of popular cryptocurrencies' price changes over the past year. Cryptocurrency price data is retrieved through an API and visualized using the Chart.js library.

Project Structure

The project includes the following directories and files:

crypto_project/
├── cpp/                  # C++ source code
│   ├── crypto.h          # Header file for cryptocurrency operations
│   ├── crypto.cpp        # Implementation of Crypto class
│   └── main.cpp          # Main C++ program
├── js/                   # JavaScript scripts for API interaction
│   ├── fetch.js          # Script to fetch cryptocurrency price data from API
│   └── .env              # File with API key (should not be public)
├── web/                  # Web page with charts
│   ├── index.html        # HTML file for displaying charts
│   └── script.js         # Script for displaying charts using Chart.js
└── prices.json           # File with cryptocurrency price data (generated automatically)
Installation and Setup

1. Clone the repository
Clone the repository to your local machine:

git clone https://github.com/your-username/crypto_project.git
cd crypto_project
2. Install dependencies
To work with the API and fetch data, make sure you have Node.js and npm installed. Then, install all dependencies:

npm install
3. Start the local server
Start a local server using http-server:

http-server
The server will be available at http://127.0.0.1:8080.

4. Fetch cryptocurrency price data
If you want to get up-to-date cryptocurrency data, run the fetch.js script, which fetches data from the CoinGecko API and saves it in the prices.json file:

node js/fetch.js
5. Open the web page
Now, open http://127.0.0.1:8080 to view the cryptocurrency price charts for the past year.

Technologies

JavaScript — for API interaction and data visualization.
Chart.js — for displaying price charts.
Node.js — for fetching data from an external API.
C++ — for working with cryptocurrencies in a separate part of the project (not used on the web page, but useful for more complex logic).
API

Cryptocurrency price data is fetched via the CoinGecko API. You will need to provide the correct API_KEY in the .env file to use the API.

Data Structure

Price data is saved in the prices.json file in the following format:

{
  "BTC": [45000, 47000, 46000, 48000, 47000, 49000],
  "ETH": [3000, 3200, 3100, 3300, 3200, 3400],
  "XRP": [0.5, 0.52, 0.51, 0.53, 0.52, 0.54],
  "ADA": [1.2, 1.3, 1.25, 1.35, 1.3, 1.4],
  "SOL": [35, 36, 35.5, 37, 36.5, 38]
}
Where:

BTC, ETH, XRP, ADA, SOL — cryptocurrency symbols.
Price arrays are lists of prices in USD for the last 6 months (365 days data).
Possible Errors and Solutions

CORS error: If you encounter a CORS error, try running the server using http-server as described in the "Starting Local Server" section.
404 error: Check if the prices.json file exists in the project directory and ensure that the paths for fetching data through the API are correct.
Data loading error: Make sure your .env file is correctly set up with the API key and that your internet connection is stable.
Contributing

Please fork the repository to make changes and submit a pull request with a description of your improvements. We look forward to your contributions!