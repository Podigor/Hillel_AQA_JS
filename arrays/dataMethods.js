const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((number) => {
  console.log(number * 2);
});

// filter
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((el) => el % 2 === 0);
// const evenNumbers2 = numbers.filter((el, index) => el %2 === 0) // acces to element index (other methods also have access to index)
console.log(evenNumbers);

// map - returns new array
const numbers3 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers3.map((el) => el ** 2);
console.log(doubledNumbers);

// sort
const fruits = ['apple', 'pineapple', 'banana', 111, true];
fruits.sort();
console.log(fruits);

const arr = [2, 8, 1, 10, 98];
arr.sort();
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);

// reduce
const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((acc, item) => acc + item);
console.log(sum);
const sum2 = numbers4.reduce((acc, item) => acc + item, 5);
console.log(sum2);

// reverse
const numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5.reverse());

// every
const users = ['Jhon', 'Jhane', 'Jim'];
const allNames = users.every((name) => name === 'Jimmy');
console.log(allNames);

// some
const users2 = ['Jhon', 'Jhane', 'Jim'];
const allNames2 = users.some((name) => name === 'Jimmy');
console.log(allNames2);
