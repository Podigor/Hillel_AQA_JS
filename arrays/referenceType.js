let a = 2;
const b = a;
a = 5;
console.log('a', a); // 5
console.log('b', b); // 2

const fruits = ['apple', 'pineapple', 'banana', 111, true];
const freshfruits = fruits;

fruits[0] = 'raspberry';
console.log('fruits', fruits);
console.log('freshfruits', freshfruits);

function printFruits(fruitsList) {
  const newArray = structuredClone(fruitsList); // recommended way to copy array and objects to not mutate original item
  newArray[0] = 'lemon';
  console.log('fruitsList', newArray);
}

console.log('fruits', fruits);

printFruits(fruits);

console.log('fruits', fruits);
