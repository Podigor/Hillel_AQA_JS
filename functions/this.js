const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
  greet2() {
    console.log(`Hi, ${this.name}!`);
  },
  sayHello(greetingText) {
    console.log(`${greetingText}, ${this.name}!`);
  },
};
person.greet();

// const person2 = {
//     name: 'Alice',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`) // 'this' doesn't work for arrow function
//     }
// }
// person2.greet()

const person3 = {
  name: 'Peter',
  sayHello() {
    person.greet();
  },
};
person3.sayHello();
console.log('------------');

// soft override context
person.greet.call(person3);
person.sayHello.apply(person3, ['Hello']);
person.sayHello('Hi');

// hard override context
const sayHello = person.sayHello.bind(person3);
sayHello('Hello');

const greetFunction = person.sayHello.bind(person3, ['Q']);
greetFunction();
