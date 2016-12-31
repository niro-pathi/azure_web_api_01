'use strict';

var Hapi = require('hapi');
var app = require('./routes/routes.js');
var routes = require('./routes/routes.js'); //require routes

var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';

var server = new Hapi.Server();

server.connection({port: port});

server.register({
    register: require('hapi-swagger'),
    options: {
        apiVersion: "0.0.1" 
    }
}, function (err) {
    if (err) {
        server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
        server.log(['start'], 'hapi-swagger interface loaded')
    }
});

server.route(routes); //add routes
 
server.start(function() {
    console.log("Hapi server started @ " + server.info.uri);
});