const express = require('express');
const routes = require('./routes');
const log = require('./logger')(__filename.slice(__dirname.length + 1));

module.exports.createInstance = createServer;

function createServer() {
    
    var server = express();

    log.debug('Setting up basic startup configuration...');
    // config.applyConfiguration(server);
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    
    // attach router handlers
    routes.attachHandlers(server);

    // setup general error handler
    server.use(function (err, req, res, next) {
        if (!err.logged) {
            log.error('Express default error handler:', err);
        }
        res.status(500).send('Something broke!')
    });
    // setup 404 error handler
    server.use(function (req, res, next) {
        res.status(404).send({ error: 'Not found' });
    });
    
    return server;    
};