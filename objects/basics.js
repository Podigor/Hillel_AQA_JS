// const user = {
//     name1: "Alice",
//     age: 25
// }
// console.log(user)
// console.log(user.name1)
// console.log(user.age)

// user.age = user.age + 1

// console.log(user)

// const user2 = {
//     name1: "Alice",
//     age: 25,
//     sayHello(targetPersonName) {
//         console.log(`Hi ${targetPersonName}! I'm ${this.name1}!`)
//     }
// }
// user2.sayHello("Joel")

// const user2 = {
//     name1: {
//         firstName: "Alice",
//         lastName: "Doe"
//     },
//     age: 25,
//     sayHello(targetPersonName) {
//         console.log(`Hi ${targetPersonName}! I'm ${this.name1.firstName}!`)
//     }
// }
// user2.sayHello("Joel")

// const user = {
//     name1: "Alice",
//     age: 25
// }
// console.log(user.courses)
// console.log(user)
// user.courses = ["QA manual", "QA Auto"]
// console.log(user)

// delete user.age
// console.log(user)

// const name1 = "Peter"
// const courses = ["QA manual", "QA Auto"]

// const users = { //recommended
//     name1,
//     courses,
//     age: 22
// }

// const users2 = { //not recommended
//     name1: name1,
//     courses: courses,
//     age: 22
// }

const users = {
  // recommended
  name1: 'Alice',
  age: 22,
  'average grade': 78,
};
console.log(users.name1);
console.log(users.name1); // computed property
console.log(users['average grade']); // computed property syntax it allows to refer to property if it has space, but in othe rcases not recommended
