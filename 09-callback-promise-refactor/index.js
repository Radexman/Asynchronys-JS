//  ============ 09 Callback Promise Refactor =============  //

const posts = [
	{ title: 'Post One', body: 'Post One Body' },
	{ title: 'Post Two', body: 'Post Two Body' },
	{ title: 'Post Three', body: 'Post Three Body' },
];

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let error = false;

			if (!error) {
				posts.push(post);
				resolve();
			} else {
				reject('Something went wrong');
			}
		}, 2000);
	});
}

function getPosts() {
	setTimeout(() => {
		posts.forEach((post) => {
			const div = document.createElement('div');
			div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
			document.querySelector('#posts').appendChild(div);
		});
	}, 1000);
}

function showError(error) {
	const h3 = document.createElement('h3');
	h3.innerHTML = `<strong>${error}</strong>`;
	document.getElementById('posts').appendChild(h3);
}

createPost({ title: 'Post Four', body: 'Post Four Body' }).then(getPosts).catch(showError);
