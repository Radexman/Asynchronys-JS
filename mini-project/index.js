const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
let intervalID;

function start() {
	if (!intervalID) {
		intervalID = setInterval(createCard, 2000);
	}
}

function stop() {
	clearInterval(intervalID);
}

const quotes = [
	{ name: 'James Hetfield', quote: 'Yeeeyeeah.' },
	{ name: 'Barack Obama', quote: 'Fuck, lets go to Irak.' },
	{ name: 'Elon Musk', quote: 'I will be first president of Mars.' },
	{ name: 'Marylin Manson', quote: 'We are chaos.' },
	{ name: 'Andrzej Duda', quote: 'O chuj.' },
];

function getRandomQuote() {
	const rng = Math.floor(Math.random() * quotes.length);
	return rng;
}

function createCard() {
	randomNum = getRandomQuote();

	const div = document.createElement('div');
	div.classList = 'card';

	const h1 = document.createElement('h1');
	h1.classList = 'philosopher';
	const h1Text = document.createTextNode(quotes[randomNum].name);
	h1.appendChild(h1Text);

	const p = document.createElement('p');
	p.classList = 'quote';
	const pText = document.createTextNode(quotes[randomNum].quote);
	p.appendChild(pText);

	div.appendChild(h1);
	div.appendChild(p);
	document.body.appendChild(div);
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
