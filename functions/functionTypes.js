// //Function declaration
// function calculateSum1(num1, num2) {
//   return num1 + num2
// }

// //Function expression
// const calculateSum2 = function (num1, num2) {
//     return num1 + num2
// }

// console.log(calculateSum2(2, 4))

// console.log(calculateSum1(2, 5)) // hoisting works for function declarations
// console.log(calculateSum2(10, 11)) // hoisting doesn't work, error will be returned for function expressions

// function calculateSum1(num1, num2) {
//   return num1 + num2
// }
// const calculateSum2 = function (num1, num2) {
//     return num1 + num2
// }

// Arrow function expression
const calculateSumArrow = (num1, num2) => num1 + num2;
console.log(calculateSumArrow(2, 9));

// Concise arrow function expression
const calculateSumArrow2 = (num1, num2) => num1 + num2;
console.log(calculateSumArrow2(10, 15));
