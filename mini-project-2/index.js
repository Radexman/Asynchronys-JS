const postBodyInput = document.querySelector('#post-body-input');
const postTitleInput = document.querySelector('#post-title-input');
const savePostButton = document.querySelector('#save-post-button');
const posts = [];

function savePost(e) {
	e.preventDefault();
	const titleValue = postTitleInput.value;
	const bodyValue = postBodyInput.value;
	posts.push({ title: titleValue, body: bodyValue });
	console.log(posts);
	savePostConfirm();
}

function savePostConfirm() {
	alert('Post Saved');
}

savePostButton.addEventListener('click', savePost);
