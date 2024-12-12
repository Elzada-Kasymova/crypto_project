#include "crypto.h"
#include <iostream>
#include <iomanip>

// Constructor
Crypto::Crypto(const std::string& name, const std::string& symbol)
    : name(name), symbol(symbol) {}

// Set prices
void Crypto::setPrices(const std::vector<double>& prices) {
    this->prices = prices;
}

// Getters
std::string Crypto::getName() const {
    return name;
}

std::string Crypto::getSymbol() const {
    return symbol;
}

const std::vector<double>& Crypto::getPrices() const {
    return prices;
}

// Display info
void Crypto::display() const {
    std::cout << "Crypto: " << name << " (" << symbol << ")" << std::endl;
    std::cout << "Prices (last 6 months): ";
    for (const auto& price : prices) {
        std::cout << std::fixed << std::setprecision(2) << price << " ";
    }
    std::cout << std::endl;
}
