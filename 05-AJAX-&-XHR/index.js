// ==================== 05 AJAX & XHR ==================== //

const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');

xhr.onreadystatechange = function () {
	if (this.status === 200 && this.readyState === 4) {
		// console.log(JSON.parse(this.responseText));
		const data = JSON.parse(this.responseText);

		data.forEach((movie) => {
			const li = document.createElement('li');
			li.innerHTML = `<strong> ${movie.title}  </strong> - ${movie.year}`;
			document.querySelector('.results').appendChild(li);
		});
	}
};

xhr.send();
