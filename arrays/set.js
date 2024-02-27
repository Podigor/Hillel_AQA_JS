const arr = [1, 2, 3, 3, 4, 4, 5];
const setFromArray = new Set(arr); // removes duplicates
console.log(setFromArray); // Set(5) { 1, 2, 3, 4, 5 }
console.log(typeof setFromArray); // object
console.log([...setFromArray]); // convert set to array
