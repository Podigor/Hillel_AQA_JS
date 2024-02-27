// slice can be used for array copy
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();

// concat
const originalArray2 = [1, 2, 3, 4, 5];
const copiedArray2 = [].concat(originalArray2);

// spread - Often used for arrays with primitives
const originalArray3 = [1, 2, 3, 4, 5];
const copiedArray3 = [...originalArray3];

// array from
const originalArray4 = [1, 2, 3, 4, 5];
const copiedArray4 = Array.from(originalArray4);

// structured clone (!!!RECOMMENDED - Only this method allows to copy nested arrays, all other methods above will copy reference for nested arrays)
const originalArray5 = [1, 2, 3, 4, 5];
const copiedArray5 = structuredClone(originalArray5);

// json (NOT RECOMMENDED)
const originalArray6 = [1, 2, 3, 4, 5];
const copiedArray6 = JSON.stringify(originalArray6); // returns String
console.log(JSON.parse(JSON.stringify(originalArray6)));
