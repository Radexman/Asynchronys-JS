// ==================== 05 Callbacks ======================= //

// const button = document.querySelector('button');

// function toggle(e) {
// 	e.target.classList.toggle('danger');
// }

// button.addEventListener('click', toggle);

// const posts = [
// 	{ title: 'Post One', body: 'Post One Body' },
// 	{ title: 'Post Two', body: 'Post Two Body' },
// 	{ title: 'Post Three', body: 'Post Three Body' },
// ];

// function createPost(post, cb) {
// 	setTimeout(() => {
// 		posts.push(post);
// 		cb();
// 	}, 2000);
// }

// function getPosts() {
// 	setTimeout(() => {
// 		posts.forEach((post) => {
// 			const div = document.createElement('div');
// 			div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
// 			document.querySelector('.posts').appendChild(div);
// 		});
// 	}, 1000);
// }

// createPost({ title: 'Post Four', body: 'Post Four Body' }), createPost;

// function toggle(e) {
// 	e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
	{ title: 'Post 1', body: 'Post 1 body' },
	{ title: 'Post 2', body: 'Post 2 body' },
	{ title: 'Post 3', body: 'Post 3 body' },
	{ title: 'Post 4', body: 'Post 4 body' },
	{ title: 'Post 5', body: 'Post 5 body' },
	{ title: 'Post 6', body: 'Post 6 body' },
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
			document.body.appendChild(div);
		});
	}, 1000);
}

createPost({ title: 'Post 7', body: 'Post 7 body' }, getPosts);

getPosts();
