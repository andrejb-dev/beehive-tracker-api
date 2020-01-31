var db = require('../db/db');
const log = require('./logger')(__filename.slice(__dirname.length + 1));

module.exports = {
    create: function (req, res, next) {
        log.info('create yard', req.body);
        db.yards.add(req.body)
            .then(() => {
                res.status(201);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    read: function (req, res, next) {
        log.info('read yard', req.params);
        db.yards.one(req.params.yardId)
            .then(yard => {
                if (!yard) {
                    next();
                    return;
                }
                log.debug('returning', yard);
                res.send(yard);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    },
    readAll: function (req, res, next) {
        log.info('read all yards');
        db.yards.all()
            .then((data) => {
                log.debug('returning', data);
                res.send(data);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    update: function (req, res, next) {
        log.info('update yard', req.params, req.body);
        res.send('TBD');
    }
}