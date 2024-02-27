// Procedure programming
function calculateSum(a, b) {
  return a + b;
}

function double(a) {
  return a * 2;
}

const sum = calculateSum(5, 3);
const doubled = double(sum);
console.log(sum); // 8
console.log(doubled); // 16

// Functional programming
const calculateSumFunctional = (a, b) => a + b;
const doubleFunctional = (a) => a * 2;

console.log(doubleFunctional(calculateSumFunctional(5, 3)));

// OOP
class Calculator {
  constructor() {
    this.PI = Math.PI;
  }

  sum(a, b) {
    return a + b;
  }

  double(num) {
    return num * 2;
  }
}
const calc = new Calculator();
const calcSum = calc.sum(5, 3);
const calcDouble = calc.double(calcSum);

console.log(calc);
console.log(calcSum);
console.log(calcDouble);
console.log(calc.PI);
