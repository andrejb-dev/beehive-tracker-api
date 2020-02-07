var db = require('../db/db');
const sql = require('../sql').hives;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createHive(req, res, next) {
    log.info('create hive', req.body);
    if (!req.body.yard_id) {
        log.debug('inserting yard_id to hive');
        req.body.yard_id = req.params.yardId;
    }
    db.one(sql.insert, req.body)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readHive(req, res, next) {
    log.info('read hive', req.params);
    db.oneOrNone(sql.select, { id: req.params.hiveId })
        .then(hive => {
            if (!hive) {
                log.debug('hive not found', req.params);
                res.status(404).send('hive not found')
                return;
            }
            log.debug('returning', hive);
            res.send(hive);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function readHivesForYard(req, res, next) {
    log.info('read all hives', req.params);
    db.any(sql.selectAll, { yard_id: req.params.yardId })
        .then((data) => {
            log.debug('returning', data);
            res.send(data);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function updateHive(req, res, next) {
    log.info('update hive', req.params, req.body);
    res.send('TBD');
};

function deleteHive(req, res, next) {
    log.info('update hive', req.params);
    res.send('TBD');
};

module.exports = {
    create: createHive,
    read: readHive,
    readAll: readHivesForYard,
    update: updateHive,
    delete: deleteHive
}