function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, ${this.name}`);
  };
}

const user1 = new Person('Peter', 23);
console.log(user1);
const user2 = new Person('Alice', 21);
console.log(user2);
user1.sayHello();
user2.sayHello();
