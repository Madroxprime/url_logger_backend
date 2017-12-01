
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port:3000});

wss.on('connection',function(ws){
    ws.on('message', function(message){
        console.log("Recieved: %s",message);
    });
});
