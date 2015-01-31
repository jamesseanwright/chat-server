# Chat Server

A very simple Node server written in TypeScript to receive and push chat room messages via WebSockets.

## Running the server
Run build.sh (`./build.sh`). This script will install the TypeScript compiler if it's missing from the system, an operation for which you'll need to be root/an administrative user.

Upon successful compilation, start the server with `node build/server`