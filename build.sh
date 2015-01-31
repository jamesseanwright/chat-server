#!/usr/bin/sh
tsc -v > /dev/null || { 
	echo "Installing TypeScript compiler..."
	npm install -g typescript > /dev/null || {
		echo "Couldn't install the compiler. Run this script as root/an administrator"
		exit 1
	}
}

echo "Building..."

rm build/server.js

tsc --removeComments --module commonjs --target ES5 --outDir build src/* || {
	echo "Compilation errors detected."
	exit 1
}

echo "Done! Run the server with node build/server"