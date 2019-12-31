fClock = function setTime() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      var data = JSON.parse(req.responseText);
      var tm = new Date(data.st * 1000);
      document.getElementById("clock").textContent = tm.toLocaleString()
    }
  };
  req.open("GET", 'https://ntp-a1.nict.go.jp/cgi-bin/json', false);
  req.send(null);
}
window.onload = fClock
setInterval(fClock, 950);