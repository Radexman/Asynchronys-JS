const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;

		if (!error) {
			resolve({ name: 'Emilia', age: '20' });
		} else {
			reject('Something went wrong');
		}
	}, 1000);
});

promise
	.then((result) => {
		console.log(result);
		return result.name;
	})
	.then((name) => {
		console.log(name);
		return name.length;
	})
	.then((length) => {
		console.log(length);
	})
	.catch((error) => {
		console.log(error);
		return 123;
	})
	.then((x) => {
		console.log(x);
		console.log('This will run no matter what');
	});
