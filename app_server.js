var nodeThinkGear = require('node-thinkgear')
  , sha1 = require('sha1')
  , WebSocketServer = require('ws').Server;

/*************************************/
// THINK GEAR

var tgClient = nodeThinkGear.createClient({
  appName: 'My Great Application',
  appKey: sha1("My Great Application")
});

/**************************************/
// WEB SOCKETS

var ws_send = function(ws, data) {
  ws.send(data);
};

var wss = new WebSocketServer({port: 8080});

var connected = false; // keep track of connections

wss.on('connection', function(ws) {
  console.log("WS connection");

  ws.on('message', function(message) {
    console.log('WS message: %s', message);
  });

  // ws.send('WebSockets Hello Hello?!');

  // THINK GEAR
  if (connected == false) {

    tgClient.on('data', function(data){
      console.log(data);
      ws_send(ws, JSON.stringify(data));
    });

    tgClient.connect();
    connected = true;

  }

});

