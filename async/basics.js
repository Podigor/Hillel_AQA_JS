// sync code
console.log('Line 1');
console.log('Line 2');
console.log('Line 3');

// async code
console.log('Line 1');
setTimeout(() => console.log('Line 2'), 0); // will be executed last
console.log('Line 3');
