const person = {
  name1: 'Alice',
  age: 30,
  city: 'Dnipro',
};

for (const key in person) {
  console.log(key);
  console.log(person[key]);
  console.log('---------');
}

const person2 = {
  name1: 'Alice',
  age: 30,
  city: 'Dnipro',
};

console.log(person2.hasOwnProperty('courses')); // false
console.log(person2.hasOwnProperty('city')); // true

const animal = {
  legs: 4,
};
const dog = Object.create(animal);

dog.name = 'Duke';
console.log(dog);
console.log(dog.name);
console.log(dog.legs);

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false

const person3 = {
  name1: 'Alice',
  age: 30,
  city: 'Dnipro',
};

const keys = Object.keys(person3); // returns array of keys
console.log(keys);

const values = Object.values(person3); // returns array of values
console.log(values);

const entries = Object.entries(person3); // returns array of keys and values
console.log(entries);
