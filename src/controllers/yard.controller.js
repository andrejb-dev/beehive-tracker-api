const db = require('../db/db');
const sql = require('../sql').yards;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createYard(req, res, next) {
    log.info('create yard', req.params, req.body);
    if (!req.body.user_id) {
        log.debug('inserting user_id to yard');
        req.body.user_id = req.params.userId;
    }
    db.one(sql.insert, req.body)
        .then((yard) => {
            res.status(201).send(yard);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readYard(req, res, next) {
    log.info('read yard', req.params);
    db.oneOrNone(sql.select, { user_id: req.params.userId, id: req.params.yardId })
        .then(yard => {
            if (!yard) {
                log.debug('yard not found', req.params);
                res.status(404).send('yard not found')
                return;
            }
            log.debug('returning', yard);
            res.send(yard);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function readYardsForUser(req, res, next) {
    log.info('read all yards', req.params);
    db.any(sql.selectAll, { user_id: req.params.userId })
        .then((yards) => {
            log.debug('returning', yards);
            res.send(yards);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function updateYard(req, res, next) {
    log.info('update yard', req.params, req.body);
    db.none(sql.update, req.params.yardId)
        .then(() => {
            log.debug('yard updated', req.params);
            res.status(204).end();
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function deleteYard(req, res, next) {
    log.info('update yard', req.params, req.body);
    db.none(sql.delete, req.params.yardId)
        .then(() => {
            log.debug('yard deleted', req.params);
            res.status(204).end();
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

module.exports = {
    create: createYard,
    read: readYard,
    readAll: readYardsForUser,
    update: updateYard,
    delete: deleteYard
}