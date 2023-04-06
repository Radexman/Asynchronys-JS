//  ============ 09 Callback Promise Refactor =============  //

const posts = [
	{ title: 'Post One', body: 'Post one body' },
	{ title: 'Post Two', body: 'Post two body' },
	{ title: 'Post Three', body: 'Post three body' },
];

const createPost = (post) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let error = true;

			if (!error) {
				posts.push(post);
				resolve();
			} else {
				reject('Error: something went wrong');
			}
		}, 2000);
	});
};

const getPosts = () => {
	setTimeout(() => {
		posts.forEach((post) => {
			const div = document.createElement('div');
			div.innerHTML = `<strong> ${post.title} </strong> - ${post.body}`;
			document.querySelector('#posts').appendChild(div);
		});
	}, 1000);
};

const showError = (error) => {
	const h2 = document.createElement('h2');
	const h2Text = document.createTextNode(error);
	h2.appendChild(h2Text);
	document.querySelector('#posts').appendChild(h2);
};

createPost({ title: 'Post Four', body: 'Post four body' }).then(getPosts).catch(showError);
