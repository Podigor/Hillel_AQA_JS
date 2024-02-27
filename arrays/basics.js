const fruits2 = new Array();

const fruits = ['apple', 'pineapple', 'banana', 111, true];

console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.length);

const arrayLength = fruits.length;
const lastElementIndex = arrayLength - 1;

console.log(fruits[lastElementIndex]);
console.log(fruits[fruits.length - 1]);

const fruits1 = ['apple', 'pineapple', 'banana'];
console.log(fruits1);
fruits1[1] = 'lemon';
console.log(fruits1);

const matrix = [
  [
    'banana', 'apple',

  ],
  [
    'lemon', 'pineapple',
  ],
];
console.log(matrix[0][1]);
