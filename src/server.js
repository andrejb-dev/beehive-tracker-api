var express = require('express');
var routes = require('./routes');

exports.createServer = function createServer () {
    
    var server = express();
    
    // attach router handlers
    routes.attachHandlers(server);
    
    return server;
    
};