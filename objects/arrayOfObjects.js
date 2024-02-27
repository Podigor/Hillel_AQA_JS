const people = [
  { name: 'Jhon', age: 30 },
  { name: 'Jane', age: 31 },
  { name: 'Joel', age: 32 },
];

console.log(people[1].name);

for (const person of people) {
  console.log(person.name);
}

console.log('----------');

people.forEach((person) => console.log(person.name));
