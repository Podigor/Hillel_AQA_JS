// const person = {
//     name1: "Alice",
//     age: 30,
//     city: "Dnipro",
//     zipcode: 123
// }

// // const name1 = person.name1
// // const age = person.age

// // const zipcode = person.zipcode ?? 1000

// const {name1, age, course, gender = "male", zipcode = 1000, city : town} = person //destructing

// console.log(name1)
// console.log(age)
// console.log(course) //undefined
// console.log(gender) //male
// console.log(zipcode) //123
// // console.log(city) //ReferenceError: city is not defined
// console.log(town) //Dnipro

const people = [
  { name: 'Jhon', age: 30 },
  { name: 'Jane', age: 31 },
  { name: 'Joel', age: 32 },
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

for (const { name, age } of people) {
  console.log(`${name} is ${age} years old`);
}

printUserInfo({
  age: 30,
  name: 'Alice',
  email: 'ihor@odore.com',
});

function printUserInfo(name, age, email = 'unknown') {
  console.log(`User "${name}" is ${age} y. o. and has "${email}" email address`);
}

const person4 = {
  userName: 'Alice',
  age: 30,
  address: {
    city: 'Dnipro',
    country: 'Ukraine',
  },
};

const {
  userName,
  age,
  address: { city, country },
} = person4;
console.log(userName);
console.log(age);
console.log(city);

const numbers = [1, 2, 3];

const [first, second, third, hello] = numbers;

const [, , test, , last = 1000] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(hello);
console.log(test); // 3
console.log(last); // 1000

// let a = 1
// let b = 2

// [a, b] = [b, a] // assign a to b and b to a

const person5 = {
  name: 'Ihor',
  address: {
    city: 'dnipro',
  },
};

const { name, ...rest } = person5;
console.log(rest);
