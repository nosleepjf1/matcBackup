#!/usr/bin/env bash

#mkdir -p sandbox/{client/app/{css,js,partials}}
#mkdir -p sandbox/{server/{bin/www,models,public/{images,javascript,stylesheets},routes,views}}
mkdir -p sandbox/client
mkdir -p sandbox/server
# creating files under the client directory
touch sandbox/client/{.bowerrc,bower.json,package.json,web-server.js}
touch sandbox/server/{app.js,package.json}