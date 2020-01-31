var db = require('../db/db');
const log = require('../logger')(__filename.slice(__dirname.length + 1));

module.exports = {
    create: function (req, res, next) {
        log.info('create user', req.body);
        db.users.add(req.body)
            .then(() => {
                res.status(201);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    read: function (req, res, next) {
        log.info('read user', req.params);
        db.users.one(req.params.userId)
            .then(user => {
                if (!user) {
                    next();
                    return;
                }
                log.debug('returning', user);
                res.send(user);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    },
    readAll: function (req, res, next) {
        log.info('read all users');
        db.users.all()
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
        log.info('update user', req.params, req.body);
        res.send('TBD');
    }
}