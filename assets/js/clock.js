var x = 'N/A';
var worker = new Worker('assets/js/clock.js');

worker.addEventListener('msg', function(e) {
    var t = new XMLHttpRequest;
	t.onreadystatechange = function() {
		if (4 == t.readyState && 200 == t.status) {
			var e = JSON.parse(t.responseText),
				n = new Date(1e3 * e.st);
				document.getElementById("clock").textContent = x = n.toLocaleString()
		}
	}, t.open("GET", "https://ntp-a1.nict.go.jp/cgi-bin/json", !1), t.send(null)
  }, false);
  
  
  window.onload = fClock = function() {
	worker.postMessage('a');
}, setInterval(fClock, 950);

