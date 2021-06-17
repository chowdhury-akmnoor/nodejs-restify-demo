// Simple Node.js API application using restify.
var restify = require('restify');
var ping = require('jjg-ping');
const { PORT = 8000 } = process.env
var server = restify.createServer();

// Greeting endpoint.
server.get('/hello/:name', function(req, res, next) {
  res.send('Welcome ' + req.params.name);
  next();
});

// Ping endpoint.
server.get('/ping/:server', function(req, res, next) {
  ping.system.ping(req.params.server, function(latency, status) {
    if (status) {
      res.send(req.params.server + ' is reachable (' + latency + ' ms ping).');
    }
    else {
      res.send(req.params.server + ' is unreachable.');
    }
    next();
  });
});

server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
