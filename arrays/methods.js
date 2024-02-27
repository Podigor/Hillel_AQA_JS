// split & join
const sentence = 'Some text for testing';
const words = sentence.split(' ');
console.log(words);
console.log(words.join('_'));

// indexof
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(40));
console.log(numbers.indexOf(4000)); // -1

// includes
const colors = ['red', 'blue', 'green'];
const hasGreen = colors.includes('green');
console.log(hasGreen);

// push
const stack = [1, 2];
stack.push('hello', 'bye');
console.log(stack);

// pop - remove last element
const stack1 = [1, 2, 3, 4];
const poppedValue = stack1.pop();
console.log(poppedValue);
console.log(stack1);

// shift - remove first element
const queue = [1, 2, 3, 4];
const shiftedValue = stack1.shift();
console.log(shiftedValue);
console.log(queue);

// unshift
const queue1 = [1, 2, 3, 4];
const unshiftedValue = queue1.unshift('A', 'B');
queue1.unshift('C');
console.log(unshiftedValue); // return index of added element
console.log(queue1); // [ 'C', 'A', 'B', 1, 2, 3, 4]

// slice - truncates arrays by specified indexes (returns new array)
const numbers1 = [1, 2, 3, 4, 5];
const newNumbers = numbers1.slice(1, 3);
console.log(numbers1);
console.log(newNumbers);
console.log(numbers1.slice(2));
console.log(numbers1.slice());

// splice - mutates orginal array
const colors1 = ['red', 'blue', 'green'];
colors1.splice(1, 0, 'yellow', 'pink'); // 1 - start index, 0 - how many elements should be removed, "yellow", "pink" - inserted values
console.log(colors1); // [ 'red', 'yellow', 'pink', 'blue', 'green' ]

const colors2 = ['red', 'blue', 'green', 'yellow'];
colors2.splice(1, 2);
console.log(colors2); // [ 'red', 'yellow' ]

const colors3 = ['red', 'blue', 'green', 'yellow'];
colors3.splice(1, 2, 'pink', 'purple');
console.log(colors3); // [ 'red', 'pink', 'purple', 'yellow' ]

// concat
const array1 = [1, 2];
const array2 = [3, 4];
const concatedArray = array1.concat(array2);
console.log(concatedArray); // [ 1, 2, 3, 4 ]
