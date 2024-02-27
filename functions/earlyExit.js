function withdraw(amount, balance) {
	if (amount === 0) {
		console.log('text1');
	} else if (amount > balance) {
		console.log('text2');
	} else {
		console.log('text3');
	}
}

function withdraw(amount, balance) {
	if (amount === 0) {
		console.log('text1');
		return;
	}
	if (amount > balance) {
		console.log('text2');
		return;
	}
	console.log('text3');
}
