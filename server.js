var app = require('../app');
var http = require('http');

app.set('port', 3000);

var server = http.createServer(app);

server.listen(3000);