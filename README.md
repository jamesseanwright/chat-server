# Chat Server

A very simple Node server written in TypeScript to receive and push chat room messages via WebSockets.

## Running the server
Run build.sh (`./build.sh`). This script will install the TypeScript compiler if it's missing from the system, an operation for which you'll need to be root/an administrative user. On Windows, this script can be run with MinGW's [MSYS](http://www.mingw.org/) interpreter or [Cygwin](https://www.cygwin.com/).

Upon successful compilation, start the server with `node build/server`

## Tutorial
I developed this server as part of a tutorial I wrote for CodeProject: [Writing a chat server using Node.js, TypeScript, and WebSockets](http://www.codeproject.com/Articles/871622/Writing-a-chat-server-using-Node-js-TypeScript-and). It demonstrates how to develop this project from scratch.
