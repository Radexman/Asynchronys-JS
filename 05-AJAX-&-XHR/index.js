// ==================== 05 AJAX & XHR ==================== //

const showPosts = () => {
	setTimeout(() => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', 'movies.json');

		xhr.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				const data = JSON.parse(this.responseText);

				data.forEach((movie) => {
					const div = document.createElement('div');
					div.innerHTML = `<strong> ${movie.title} </strong> - ${movie.year}`;
					document.querySelector('.results').appendChild(div);
				});
			}
		};

		xhr.send();
	}, 2000);
};

window.addEventListener('DOMContentLoaded', showPosts);
