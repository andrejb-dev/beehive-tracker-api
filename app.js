var server = require('./src/server').createServer(),
    configuration = require('./bin/configuration'),
    scribe = require('scribe-js')();

var console = process.console;    

configuration.applyConfiguration(server);

server.listen(configuration.port, configuration.ipaddress, function () {
    console.log('Node server started on %s:%d ...', configuration.ipaddress, configuration.port);
    console.log('Accepting incoming requests: ', server.settings.env);  
    console.log("Accepting incoming requests: %s", server.settings.env);  
    console.info("sdfsdfdsfsfs");  
    console.warning("warn");  
    console.error("ssss");  
});