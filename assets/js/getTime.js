self.addEventListener("message",function(e){var t="N/A",n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=JSON.parse(n.responseText),s=new Date(1e3*e.st);t=s.toLocaleString()}},n.open("GET","https://ntp-a1.nict.go.jp/cgi-bin/json",!1),n.send(null),self.postMessage({timeX:t})});