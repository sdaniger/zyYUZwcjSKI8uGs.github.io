var worker = new Worker('assets/js/getTime.js');

worker.addEventListener('message', function(e) {
document.getElementById("clock").textContent = e.data.timeX;
}, false);

window.onload = fClock = function() {
	worker.postMessage('');
}, setInterval(fClock, 950);
