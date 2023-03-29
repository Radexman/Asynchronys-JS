const postBodyInput = document.querySelector('#post-body-input');
const postTitleInput = document.querySelector('#post-title-input');
const savePostButton = document.querySelector('#save-post-button');
const renderPostButton = document.querySelector('#render-post-btn');
const postsSection = document.querySelector('.posts-section');
const posts = [];

function savePost(e) {
	if (postTitleInput.value !== '' && postBodyInput.value !== '') {
		e.preventDefault();
		const titleValue = postTitleInput.value;
		const bodyValue = postBodyInput.value;
		posts.push({ title: titleValue, body: bodyValue });
		console.log(posts);
		savePostConfirm();
		postTitleInput.value = '';
		postBodyInput.value = '';
	} else {
		alert('Please Create Post');
	}
}

function savePostConfirm() {
	alert('Post Saved');
}

function deletePost() {
	posts.pop();
}

function renderPost() {
	setTimeout(() => {
		posts.forEach((post) => {
			const div = document.createElement('div');
			div.classList = 'posts';

			const h2 = document.createElement('h2');
			const h2Text = document.createTextNode(`${post.title}`);
			h2.classList = 'post-title-content';
			h2.appendChild(h2Text);

			const p = document.createElement('p');
			const pText = document.createTextNode(`${post.body}`);
			p.classList = 'post-body-content';
			p.appendChild(pText);

			div.appendChild(h2);
			div.appendChild(p);
			document.body.appendChild(div);
			deletePost();
		});
	}, 1000);
}

savePostButton.addEventListener('click', savePost);
renderPostButton.addEventListener('click', renderPost);
