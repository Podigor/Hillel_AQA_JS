// function calculateSum1(num1, num2) {
//       return num1 + num2
//     }
// console.log(calculateSum1(3)) // will return NaN since  3 + undefined = NaN

// function calculateSum2(num1 = 10, num2 = 12) {
//     return num1 + num2
//   }
// console.log(calculateSum2(3)) // will return 3 + 12 = 15
// console.log(calculateSum2(3, 46)) // will return 3 + 46 = 49
// console.log(calculateSum2()) // will return 10 + 12 = 22
// console.log(calculateSum2(undefined, 5)) // will return 10 + 5 = 15

// function calculateSum3(...numbers) {
//     console.log(numbers)
//   }
// console.log(calculateSum3(10, 23, 15))

// function calculateSum4(...numbers) {
//     return numbers.reduce((acc, item)=> acc + item)
//   }
//   console.log(calculateSum4(10, 23, 15))

// const printUserInfo = (age, name, ...rest) => {
//     console.log("User age", age)
//     console.log("User name", name)
//     console.log("Additional args", rest)
// }
// printUserInfo(25, "Jhonny")
// console.log("-----------------")
// printUserInfo(21, "Anna", "Lawyer", "PhD")

// function printUserInfo (age, name, ...rest) {
//     console.log(arguments)
//     console.log([...arguments])
//     console.log("Additional arguments", rest)
//     // console.log("User age", age)
//     // console.log("User name", name)
//     // console.log("Additional args", rest)
// }

const printUserInfo = function (age, name, ...rest) {
  console.log(arguments);
  console.log([...arguments]);
  console.log('Additional arguments', rest);
};
printUserInfo(25, 'Jhonny');
console.log('-----------------');
printUserInfo(21, 'Anna', 'Lawyer', 'PhD');
