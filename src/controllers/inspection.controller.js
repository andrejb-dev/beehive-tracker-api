var db = require('../db/db');
const log = require('../logger')(__filename.slice(__dirname.length + 1));

module.exports = {
    create: function (req, res, next) {
        log.info('create inspection', req.body);
        db.inspections.add(req.body)
            .then(() => {
                res.status(201);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    read: function (req, res, next) {
        log.info('read inspection', req.params);
        db.inspections.one(req.params.inspectionId)
            .then(inspection => {
                if (!inspection) {
                    next();
                    return;
                }
                log.debug('returning', inspection);
                res.send(inspection);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    },
    readAll: function (req, res, next) {
        log.info('read all inspections');
        db.inspections.all()
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
        log.info('update inspection', req.params, req.body);
        res.send('TBD');
    }
}