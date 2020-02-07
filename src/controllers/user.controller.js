var db = require('../db');
var sql = require('../sql').users;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createUser(req, res, next) {
    log.info('create user', req.body);
    db.none(sql.insert, req.body)
        .then(() => {
            res.status(201).json(req.body);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readUser(req, res, next) {
    log.info('read user', req.params);
    db.oneOrNone(sql.select, req.params.userId)
        .then(user => {
            if (!user) {
                log.debug(`user with params ${req.params} not found`);
                res.status(404).send('user not found');
                return;
            }
            log.debug('returning', user);
            res.send(user);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function updateUser(req, res, next) {
    log.info('update user', req.params, req.body);
    res.send('TBD');
};

function loginUser(req, res, next) {
    log.info('update user', req.params, req.body);
    res.send('TBD');
};

function deleteUser(req, res, next) {
    log.info('delete user', req.params);
    res.send('TBD');
};

module.exports = {
    create: createUser,
    read: readUser,
    login: loginUser,
    update: updateUser,
    delete: deleteUser
}