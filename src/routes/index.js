exports.attachHandlers = function attachHandlers (server) {
    
    require('./user').attachHandlers(server);
    require('./hive').attachHandlers(server);
    require('./inspection').attachHandlers(server);
    require('./yard').attachHandlers(server);
//    require('./yard')(server);
    
    server.route('/')
        .get(function (req, res) {
            res.render('index', { title: 'Home' });
        });
};