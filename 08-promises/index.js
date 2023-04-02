// ===================== 09 Promises ====================== //

// Create a promise
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;

		if (!error) {
			resolve({ name: 'Jonh', age: 30 });
		} else {
			reject('Error: Something went wrong');
		}
	}, 1000);
})
	.then((user) => {
		console.log(user);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log('The promise has ben resolved or rejected');
	});

console.log('Hello from global scope');
