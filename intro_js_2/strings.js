// const greetings = "Hello JS!"
// console.log(greetings[0])
// console.log(greetings[1])
// console.log(greetings[2])

// console.log("Length", greetings.length)
// console.log("Last symbol", greetings[greetings.length - 1])

// greetings[0] = "R"
// console.log(greetings[0]) // return error since string elements are read only

const greeting = 'Hello';
const name1 = 'Peter';

// const greetingToPerson = greeting + " " + name1
const greetingToPerson = `${greeting} ${name1}!`;
console.log(greetingToPerson);

const num1 = 1;
const num2 = 12;
console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);

const text = 'JavaSript';
console.log(text.length); // 10
console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.charAt(3)); // a
console.log(text.indexOf('Script')); // 4
console.log(text.substring(4, 10)); // Script
console.log(text.startsWith('Java')); // true
console.log(text.endsWith('Script')); // true
console.log(text.slice(4, 7));
console.log(text.replace('Java', 'Type'));
console.log(text.replaceAll('a', 'A'));
console.log(text.includes('Script'));
console.log(text.repeat(2));
