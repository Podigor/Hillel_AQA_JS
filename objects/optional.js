// const user1 = {
//     name1: "Jhon",
//     address: {
//               city: "New York",
//               zipcode: "18001"
//             }
// }

// const user2 = {
//     name1: "Alice",
//     address: null
// }

// const zip = user2 && user2.address && user2.address.zipcode // alternative for ? operator below

// console.log(user2.address?.zipcode) //it's used when object can be missing, otherwise we will get error
// console.log(user2.address?.city)

const user = {
  email: 'ihor@odore.com',
  id: 1,
  //    userName: "Ihor"
};

const greetingMessage = `Hi ${user.userName}`;
console.log(greetingMessage);

const greetingMessage2 = `Hi ${user.userName ?? 'Anonymous'}`;
console.log(greetingMessage2);
