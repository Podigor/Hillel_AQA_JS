const fruits = ['apple', 'pineapple', 'banana', 111, true];

for (let i = 0; i < fruits.length; i++) {
  const item = fruits[i];
  console.log(`${i} ${item}`);
}

// forof cycle it's recomended when we don't need access to index
for (const fruit of fruits) {
  console.log(fruit);
}
