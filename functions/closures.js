function makeCounter(startValue) {
  let value = startValue;

  return function () {
    console.log(value);
    value++;
  };
}

const count = makeCounter(1);
count();
count();
count();
count();
count();
count();
count();

function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

const double5 = multiplier(5);
console.log(double5(5));
