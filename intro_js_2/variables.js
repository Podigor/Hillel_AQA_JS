const age = 23;
const name1 = 'Alice';

console.log(age);
console.log(name1);

let percent = 34;
console.log(percent);
percent = 100;
console.log(percent);
percent = true;
console.log(percent);
percent = 'testing';
console.log(percent);

const _apple = 1;
const $apple = 2;

// const 1apple = 3 - invalid since variable name can't be started from number or special chracter

const myAge = 10;
const MYAGE = 11;

console.log('Person name:', name1);

const num1 = 0.1;
const num2 = 0.2;

const sum = num1 + num2;
console.log(sum);

const expected = 0.3;

console.log(sum === expected);
console.log(sum.toFixed(2));
console.log(typeof sum.toFixed(2));
console.log(sum.toFixed(2) === expected);
console.log(Number(sum.toFixed(2)) === expected);
console.log(1.2 + 0.1);

console.log(2 ** 3);
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10)); // random integer number from 0 till 10

const num3 = -123 - -10;
const num4 = 23;

console.log(num3 + num4);
