// ================ 10 Promise Chaining ================= //

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;

		if (!error) {
			resolve({ name: 'Emilia', age: 20 });
		} else {
			reject('Error: Something went wrong');
		}
	}, 1000);
});

promise
	.then((user) => {
		console.log(user);
		return user.name;
	})
	.then((name) => {
		console.log(name);
		return name.length;
	})
	.then((nameLength) => {
		console.log(nameLength);
	})
	.catch((error) => {
		console.log(error);
	})
	.then((x) => {
		console.log('This will run no matter what');
	});
