/// <reference path='../definitions/node.d.ts' />
/// <reference path='../definitions/ws.d.ts' />
/// <reference path='UserMessage.ts' />


'use strict';

import WebSocket = require('ws');

var port: number = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
	ws.on('message', message => {
		server.broadcast(new Models.UserMessage(message));
	});
});

server.broadcast = data => {
	server.clients.forEach(client => {
		client.send(data);
	});	
};

server.on('connection', ws => {
	ws.on('message', message => {
		server.broadcast
	});
});

console.log('Server is running on port', port);