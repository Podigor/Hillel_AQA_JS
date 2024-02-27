function bar() {
  console.log('bar'); // first order
  throw new Error('Some error');
}
function foo() {
  console.log('foo'); // third order
  bar(); // second order
}
foo(); // fifth order
