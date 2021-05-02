var { Client } = require('whatsapp-web.js');
var client = new Client();
var http = require("http");
var express = require('express');

var app = express();

var port = normalizePort(process.env.PORT || '3000');

var server = http.createServer(app);

server.listen(port, () => {
    console.log("Listening on port", port);
});



app.get('/', function(req, res, next) {

    res.write('starting');
    res.end();

    client.on('qr', (qr) => {
        res.write(qr);
        res.end();
    });

    client.on('ready', () => {
        res.write('Ready');
        res.end();
    });
    
    client.on('message', msg => {
        res.write(msg);
        res.end();
    });
    
    client.initialize();

    
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

module.exports = app;

