const originalObject = {
  name: 'Jhon',
  age: 30,
};

const copiedObject = { name: 'Alice', ...originalObject };
const copiedObject2 = structuredClone(originalObject); // preferred since it copies inserted objects

console.log(copiedObject);
console.log(copiedObject2);

const user2 = {
  name: 'Jhon',
  age: 30,
};

const user = new Map();
user.set('userName', 'Jhon');
user.set('userAge', 30);
user.set(user2, 'Jhon Doe'); // in map key can be anything, not only string

console.log(user);
