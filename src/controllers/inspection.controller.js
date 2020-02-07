const db = require('../db/db');
const sql = require('../sql').inspections;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createInspection(req, res, next) {
    log.info('create inspection', req.body);
    if (!req.body.hive_id) {
        log.debug('inserting hive_id to inspection');
        req.body.hive_id = req.params.hiveId;
    }
    db.one(sql.insert, req.body)
        .then((inspection) => {
            res.status(201).send(inspection);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readInspection(req, res, next) {
    log.info('read inspection', req.params);
    db.oneOrNone(sql.select, { id: req.params.inspectionId })
        .then(inspection => {
            if (!inspection) {
                log.debug('inspection not found', req.params);
                res.status(404).send('inspection not found')
                return;
            }
            log.debug('returning', inspection);
            res.send(inspection);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function readInspectionsForHive(req, res, next) {
    log.info('read all inspections', req.params);
    db.any(sql.selectAll, { hive_id: req.params.hiveId })
        .then((hives) => {
            log.debug('returning', hives);
            res.send(hives);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function updateHive(req, res, next) {
    log.info('update inspection', req.params, req.body);
    res.send('TBD');
};

function deleteHive(req, res, next) {
    log.info('update inspection', req.params, req.body);
    res.send('TBD');
};

module.exports = {
    create: createInspection,
    read: readInspection,
    readAll: readInspectionsForHive,
    update: updateHive,
    delete: deleteHive 
}