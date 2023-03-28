// ========= setInterval and clearInterval Functions ========== //

// setInterval(myCallback, 1000, 'Death');

// function myCallback(a) {
// 	console.log(a, Date.now());
// }

let intervalId;

function startChange() {
	if (!intervalId) {
		intervalId = setInterval(changeBackground, 1000);
	}
}

function changeBackground() {
	if (document.body.style.backgroundColor !== 'black') {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
}

function stopChange() {
	clearInterval(intervalId);
}

document.querySelector('#start-color-change').addEventListener('click', startChange);
document.querySelector('#stop-color-change').addEventListener('click', stopChange);
