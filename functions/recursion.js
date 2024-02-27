function countToZero(startValue) {
  for (let i = startValue; i >= 0; i--) {
    console.log(i);
  }
}
countToZero(5);

function countToZeroRecursion(startValue) {
  console.log(startValue);
  if (startValue > 0) {
    countToZeroRecursion(startValue - 1);
  }
}
countToZeroRecursion(5);
