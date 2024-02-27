// function hof(callback) {
//     console.log("High order function")
//     callback()
// }

// const sayHello = () => console.log("Hello from callback")
// const sayBye = () => console.log("Bye from callback")

// hof(sayHello)
// hof(sayBye)

function processPayment(onSuccess, onFailure) {
  try {
    if (Date.now() % 2 === 0) {
      throw new Error('Error payment');
    }
    onSuccess();
  } catch (e) {
    onFailure(e);
  }
}

function onPaymentSuccess() {
  console.log('Payment has been processed');
}
function onPaymentError(error) {
  console.log(`Payment error has happened: ${error.message}`);
}

processPayment(onPaymentSuccess, onPaymentError);

// for home task
function divide(num1, num2) {}

try {
  divide(1, 5);
} catch (e) {}
