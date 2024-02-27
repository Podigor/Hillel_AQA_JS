// const userName = 'Anna'

// function showMessage() {
//     console.log(`Hello ${userName}!`) // external variable userName is in use
// }
// showMessage()

// function showMessage2() {
//     const greeting = "Hi!"
//     if(true){
//         const name1 = "Peter"
//         let name2 = "Jane"
//         var name3 = "Ihor"
//         console.log(userName)
//         console.log(name1)
//         console.log(greeting)
//     }
//     //console.log(name1) - no access to variable
//      //console.log(name2) - no access to variable
//      console.log(name3) // access to variable since it has function scope access
//     console.log(`Hello ${userName}!`) // external variable userName is in use
// }

// console.log(name3) // will return error since it is outside function
// showMessage2()

const userName = 'Anna';

function showMessage3() {
  const userName = 'Alex';
  console.log(userName);
}

showMessage3();

console.log(userName);
