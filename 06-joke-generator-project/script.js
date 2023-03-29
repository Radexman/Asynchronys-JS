const buttonEl = document.querySelector('.button');
const jokeContent = document.querySelector('.joke-content');

function generateJoke() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.readyState === 200) {
			const data = JSON.parse(this.responseText).value;
			jokeContent.textContent = data;
		} else {
			jokeContent.textContent = 'Something went wrong (Not Funny)';
		}
	};

	xhr.send();
}

buttonEl.addEventListener('click', generateJoke);
