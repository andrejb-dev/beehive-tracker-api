var db = require('../db/db');
const log = require('../logger')(__filename.slice(__dirname.length + 1));

module.exports = {
    create: function (req, res, next) {
        log.info('create hive', req.body);
        db.hives.add(req.body)
            .then(() => {
                res.status(201);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    read: function (req, res, next) {
        log.info('read hive', req.params);
        db.hives.one(req.params.hiveId)
            .then(hive => {
                if (!hive) {
                    next();
                    return;
                }
                log.debug('returning', hive);
                res.send(hive);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    },
    readAll: function (req, res, next) {
        log.info('read all hives');
        db.hives.all()
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
        log.info('update hive', req.params, req.body);
        res.send('TBD');
    }
}