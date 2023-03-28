// ========= 01 setTimeout & clearTimeout Function ========= //

setTimeout(function () {
	console.log('Hello from callback');
}, 2000);

console.log('Hello from top-level code');

function changeText() {
	document.querySelector('h1').textContent = 'Hello from the callback';
}

const timerID = setTimeout(changeText, 3000);

clearTimeout(timerID);
