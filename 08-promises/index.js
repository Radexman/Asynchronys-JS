// ===================== 09 Promises ====================== //

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;

		if (!error) {
			resolve({ name: 'John', age: 30 });
		} else {
			reject('Error, something went wrong');
		}
	}, 1000);
})
	.then((user) => {
		console.log(user);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => console.log('The promise has been resolved or rejected'));
