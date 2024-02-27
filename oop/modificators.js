class Student {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const student = new Student('Alice');

console.log(student.name);
student.introduce();

// PROTECTED
// class BankAccount {
//     constructor(balance) {
//         this._balance = balance
//     }
//     _getBalance() { //protected method, we shouldn't call it outside the class
//         return this._balance
//     }

//     printBalance() {
//         console.log(`Your account balance is ${this._balance} UAH`)
//     }

//     withdraw(amount) {
//         this._balance -=amount
//     }
// }
// const acc = new BankAccount(100)
// console.log(acc._balance)
// acc.withdraw(10)
// acc.printBalance()
// console.log(acc)

// PRIVATE
class BankAccount {
  #balance;

  constructor(balance) {
    this.bankName = 'Hillel';
    this.#balance = balance;
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

const acc = new BankAccount(100);

acc.printBalance();

class EBankAccount extends BankAccount {
  constructor() {
    super();
  }
  // printEBalance() {
  //     console.log(`Your account balance is ${this.#balance} UAH`) //can't access from extended class
  // }
}
const eBankAcc = new EBankAccount();
console.log(eBankAcc.bankName);
