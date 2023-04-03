//  ============ 09 Callback Promise Refactor =============  //

// const posts = [
// 	{ title: 'Post One', body: 'Post One Body' },
// 	{ title: 'Post Two', body: 'Post Two Body' },
// 	{ title: 'Post Three', body: 'Post Three Body' },
// ];

// const createPost = (post) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			let error = false;

// 			if (!error) {
// 				posts.push(post);
// 				resolve();
// 			} else {
// 				reject('Something went wrong');
// 			}
// 		}, 2000);
// 	});
// };

// const getPosts = () => {
// 	setTimeout(() => {
// 		posts.forEach((post) => {
// 			const div = document.createElement('div');
// 			div.innerHTML = `<strong> ${post.title} </strong> - ${post.body}`;
// 			document.querySelector('#posts').appendChild(div);
// 		});
// 	}, 1000);
// };

// const showError = (error) => {
// 	const h3 = document.createElement('h3');
// 	h3.innerHTML = `<strong> ${error} </strong>`;
// 	document.getElementById('posts').appendChild(h3);
// };

// createPost({ title: 'Post Four', body: 'Post Four Body' }).then(getPosts).catch(showError);

const getUserData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('1. Get user data');
			resolve({ name: 'Emilia', id: 4 });
		}, 800);
	});
};

const validateData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// console.log('2. Validate');
			// resolve();
			reject('Something went wrong');
		}, 900);
	});
};
const registerUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('3. Register');
			resolve();
		}, 400);
	});
};
const sendEmail = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('4. Send Email');
			resolve('Email has been sent');
		}, 200);
	});
};

getUserData()
	.then((response) => {
		console.log(`${response.name} id: ${response.id}`);
	})
	.then(validateData)
	.then(registerUser)
	.then(sendEmail)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	});

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('working...');
// 		resolve(2);
// 	}, 800);
// })
// 	.then((response) => {
// 		console.log('End');
// 		console.log(response);
// 		return response * 2;
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	});
