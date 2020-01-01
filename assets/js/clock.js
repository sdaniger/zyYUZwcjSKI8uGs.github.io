var worker = new Worker('js/getTime.js');

worker.addEventListener('message', function(e) {
document.getElementById("clock").textContent = n.toLocaleString() = e.data.timeX;
}, false);

window.onload = fClock = function() {
	worker.postMessage('');
}, setInterval(fClock, 950);
