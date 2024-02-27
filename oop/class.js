class Person {
  color = '#eeefff';

  constructor(name, age) {
    this.name = name;
    this.age = age + 1;
    this.color = 'black';
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
  }
}

const user = new Person('Jhon', 33);
console.log(user);
user.greet();

const user2 = new Person('Anna', 25);
user2.greet();
