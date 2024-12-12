#include "crypto.h"
#include <iostream>
#include <vector>

int main() {
    // Example cryptos
    std::vector<Crypto> cryptos = {
        Crypto("Bitcoin", "BTC"),
        Crypto("Ethereum", "ETH"),
        Crypto("Ripple", "XRP"),
        Crypto("Cardano", "ADA"),
        Crypto("Solana", "SOL")
    };

    // Simulated data
    std::vector<std::vector<double>> prices = {
        {45000, 47000, 46000, 48000, 47000, 49000},
        {3000, 3200, 3100, 3300, 3200, 3400},
        {0.8, 0.9, 0.85, 0.87, 0.88, 0.9},
        {1.2, 1.3, 1.25, 1.28, 1.29, 1.3},
        {100, 105, 110, 120, 115, 125}
    };

    for (size_t i = 0; i < cryptos.size(); ++i) {
        cryptos[i].setPrices(prices[i]);
        cryptos[i].display();
    }

    return 0;
}
