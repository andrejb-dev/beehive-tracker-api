var server = require('./src/server').createServer(),
    configuration = require('./bin/configuration');

configuration.applyConfiguration(server);

server.listen(configuration.port, configuration.ipaddress, function () {
    console.log('Node server started on %s:%d ...', configuration.ipaddress, configuration.port);
    console.log('Accepting incoming requests: ', server.settings.env);  
    console.log("Accepting incoming requests: %s", server.settings.env);  
    console.info("sdfsdfdsfsfs");  
    console.warn("warn");  
    console.error("ssss");  
});