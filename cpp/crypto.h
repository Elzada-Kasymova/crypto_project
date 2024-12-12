#ifndef CRYPTO_H
#define CRYPTO_H

#include <string>
#include <vector>

class Crypto {
private:
    std::string name;
    std::string symbol;
    std::vector<double> prices;

public:
    // Constructor
    Crypto(const std::string& name, const std::string& symbol);

    // Set prices
    void setPrices(const std::vector<double>& prices);

    // Getters
    std::string getName() const;
    std::string getSymbol() const;
    const std::vector<double>& getPrices() const;

    // Display info
    void display() const;
};

#endif
