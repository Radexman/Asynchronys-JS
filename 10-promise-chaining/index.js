const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;

		if (!error) {
			resolve('Everything went well');
		} else {
			reject('Something went wrong');
		}
	}, 1000);
});

promise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
