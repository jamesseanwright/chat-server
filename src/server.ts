/// <reference path='../definitions/node.d.ts' />
/// <reference path='../definitions/ws.d.ts' />
'use strict';

import WebSocket = require('ws');
import models = require('./models');

var port: number = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
	ws.on('message', message => {
		broadcast(JSON.stringify(new models.UserMessage(message)));
	});
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});	
};

console.log('Server is running on port', port);