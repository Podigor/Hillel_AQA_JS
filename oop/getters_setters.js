class BankAccount {
  #balance;

  constructor(balance) {
    this.bankName = 'Hillel';
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount < 0 || typeof amount !== 'number') {
      return;
    }
    this.#balance = amount;
  }

  #getBalance() {
    // private method, it can't be called outside the class
    return this.#balance;
  }

  printBalance() {
    console.log(`Your account balance is ${this.#balance} UAH`);
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
}

const acc = new BankAccount(111);
console.log(acc.balance);
acc.balance = 22;
console.log(acc.balance);
acc.balance = '55'; // will be skipped during setter validation
console.log(acc.balance);

class Temperature {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      console.log('Temperature below zero');
      return;
    }
    this.#celsius = value;
  }

  get farenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature(32);
