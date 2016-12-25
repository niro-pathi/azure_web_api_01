'use strict';

var Hapi = require('hapi');
var app = require('./routes/routes.js');
 
var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';
var server = new Hapi.Server(host,port,{ cors: true });

server.route(routes); //add routes
 
server.start(function() {
    console.log("Hapi server started @ " + server.info.uri);
});