self.addEventListener('message', function(e) {

var x = 'N/A'
var t = new XMLHttpRequest;
	t.onreadystatechange = function() {
		if (4 == t.readyState && 200 == t.status) {
			var e = JSON.parse(t.responseText),
			var n = new Date(1e3 * e.st);
			x = n.toLocaleString()
		}
	}, t.open("GET", "https://ntp-a1.nict.go.jp/cgi-bin/json", !1), t.send(null)
	
	self.postMessage({
	timeX:x
});
});

