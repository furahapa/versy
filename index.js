class Crypto {
    constructor(name, symbol, price) {
      this.name = name;
      this.symbol = symbol;
      this.price = price;
    }
  
    updatePrice(newPrice) {
      this.price = newPrice;
      console.log(`${this.name} (${this.symbol}) price updated to $${this.price}`);
    }
  
    displayInfo() {
      console.log(`${this.name} (${this.symbol}): Current Price - $${this.price}`);
    }
  }
  
  // Example usage
  const bitcoin = new Crypto('Bitcoin', 'BTC', 50000);
  const ethereum = new Crypto('Ethereum', 'ETH', 3000);
  
  bitcoin.displayInfo();
  ethereum.displayInfo();
  
  bitcoin.updatePrice(52000);
  ethereum.updatePrice(3200);
  
  bitcoin.displayInfo();
  ethereum.displayInfo();
  