exports.attachHandlers = function attachHandlers (server) {
    
    require('./user')(server);
//    require('./yard')(server);
    
};