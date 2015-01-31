/// <reference path='../definitions/node.d.ts' />

'use strict';

import http = require('http');

var port = process.env.PORT || 3000;

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end('{ "msg": "hello world" }');
}).listen(port, () => {
	console.log('Server is running on port', port);
});