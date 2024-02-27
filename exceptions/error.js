// const temp = 100

// console.log("Start")

// if (temp >= 100) {
//  //   console.log("Water is boiling")
//  // throw "My custom error string"

//  throw new Error("My custom error")
// }

// console.log("Finish")

const temp = 100;
console.log('Start');

// try {
//     if (temp >= 100) {
//         //   console.log("Water is boiling")
//         // throw "My custom error string"

//         throw new Error("My custom error")
//        }
//        console.log("This line will not execute")
// } catch (e) {
//     console.log("some error has happend:", e.message)
// }
// console.log("Finish")

try {
  if (temp >= 100) {
    //   console.log("Water is boiling")
    // throw "My custom error string"

    throw new Error('My custom error');
  }
  console.log('End of try block');
} catch (e) {
  console.log('some error has happend:', e.message);
} finally {
  console.log('Finally block');
}
console.log('Finish');
