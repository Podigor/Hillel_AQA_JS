// const userAge = 11

// switch (userAge) {
//     case 10: //userAge === 10
//         console.log("10 years")
//         break
//     case 11:
//         console.log("11 years")
//         break
//     case 12:
//         console.log("12 years")
//         break
//     default:
//         console.log("unhandled age")
// }

// will return unexpected results since all cases can be printed in the console
// switch (userAge) {
//     case 10: //userAge === 10
//         console.log("10 years")
//     case 11:
//         console.log("11 years")
//     case 12:
//         console.log("12 years")
//     default:
//         console.log("unhandled age")
// }

// const personName = "Ted"

// switch (personName[0]) {
//     case "T":
//     case "A":
//         console.log("You won 100$")
//         break
//     case "B":
//         console.log("You won 1000$")
//         break
//     default:
//         console.log("You are looser")
// }

const isMarried = true;
const yearsInCompany = 2;

switch (true) {
  case isMarried && yearsInCompany > 5:
    console.log('Your salary is 1000$');
    break;
  case isMarried && yearsInCompany > 2:
    console.log('Your salary is 500$');
    break;
  default:
    console.log('You are intern, no money for you, faggot');
}

if (isMarried && yearsInCompany > 5) {
  console.log('Your salary is 1000$');
} else if (isMarried && yearsInCompany > 2) {
  console.log('Your salary is 500$');
} else {
  console.log('You are intern, no money for you, faggot');
}
