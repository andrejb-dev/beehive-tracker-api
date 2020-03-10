var express = require('express');
var router = express.Router();

require('./user').attachHandlers(router);
require('./hive').attachHandlers(router);
require('./inspection').attachHandlers(router);
require('./yard').attachHandlers(router);
//    require('./yard')(router);

router.route('/')
    .get(function (req, res) {
        res.render('index', { title: 'Home' });
    });

module.exports = router;