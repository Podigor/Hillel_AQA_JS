const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// imperative approach
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// declarative approach
for (const num of numbers) {
  sum += num;
}

console.log(sum);

// better way of declarative approach
const sum1 = numbers.reduce((acc, num) => acc + num);

console.log(sum);
