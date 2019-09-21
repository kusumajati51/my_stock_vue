var http = require('http');

var server = http.createServer(function (req, res){
  res.end("Heloo World");
});

server.listen(4000);
console.log("lagi jalan di localhost:4000");