//  ============ 09 Callback Promise Refactor =============  //

const posts = [
	{ title: 'Post One', body: 'Post One Body' },
	{ title: 'Post Two', body: 'Post Two Body' },
	{ title: 'Post Three', body: 'Post Three Body' },
];

function createPost(post, cb) {
	setTimeout(() => {
		posts.push(post);
		cb();
	}, 2000);
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

createPost({ title: 'Post Four', body: 'Post Four Body' }, getPosts);
