Crypto Price Charts Project

This project is a web application that displays charts of popular cryptocurrencies' price changes over the past year. Cryptocurrency price data is retrieved through an API and visualized using the Chart.js library.

Project Structure

The project includes the following directories and files:

crypto_project/
js/                       # JavaScript scripts for API interaction
│   ├── fetch.js          # Script to fetch cryptocurrency price data from API
│   └── .env              # File with API key (should not be public)
├── web/                  # Web page with charts
│   ├── index.html        # HTML file for displaying charts
│   └── script.js         # Script for displaying charts using Chart.js
└── prices.json           # File with cryptocurrency price data (generated automatically)
Installation and Setup

1. Clone the repository
Clone the repository to your local machine:

git clone https://github.com/Elzada-Kasymova/crypto_project.git
cd crypto_project
2. Install dependencies
To work with the API and fetch data, make sure you have Node.js and npm installed. Then, install all dependencies:

npm install
3. Start the local server
Start a local server using http-server:

http-server
The server will be available at http://127.0.0.1:8080.

4. Open the web page
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