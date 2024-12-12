#include "crypto.h"
#include <iostream>
#include <vector>

int main() {
    // Example cryptos
    Crypto bitcoin("Bitcoin", "BTC");
    Crypto ethereum("Ethereum", "ETH");

    // Simulated data (to be replaced by Python script fetching real data)
    bitcoin.setPrices({45000, 47000, 46000, 48000, 47000, 49000});
    ethereum.setPrices({3000, 3200, 3100, 3300, 3200, 3400});

    // Display data
    bitcoin.display();
    ethereum.display();

    return 0;
}
