self.addEventListener('msg', function(e) {
window.onload=fClock=function(){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText),n=new Date(1e3*e.st);document.getElementById("clock").textContent=n.toLocaleString()}},t.open("GET","https://ntp-a1.nict.go.jp/cgi-bin/json",!1),t.send(null)},setInterval(fClock,950);window.onload = fClock = function() {
	var t = new XMLHttpRequest;
	t.onreadystatechange = function() {
		if (4 == t.readyState && 200 == t.status) {
			var e = JSON.parse(t.responseText),
				n = new Date(1e3 * e.st);
			document.getElementById("clock").textContent = n.toLocaleString()
		}
	}, t.open("GET", "https://ntp-a1.nict.go.jp/cgi-bin/json", !1), t.send(null)
}, setInterval(fClock, 950);
self.postMessage(e.data);
}, false);