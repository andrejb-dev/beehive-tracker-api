const db = require('../db');
const sql = require('../sql').harvests;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createHarvest(req, res, next) {
    log.info('create harvest', req.body);
    if (!req.body.hive_id) {
        log.debug('inserting hive_id to harvest');
        req.body.hive_id = req.params.hiveId;
    }
    db.one(sql.insert, req.body)
        .then((harvest) => {
            res.status(201).send(harvest);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readHarvest(req, res, next) {
    log.info('read harvest', req.params);
    db.oneOrNone(sql.select, { id: req.params.harvestId })
        .then(harvest => {
            if (!harvest) {
                log.debug('harvest not found', req.params);
                res.status(404).send('harvest not found')
                return;
            }
            log.debug('returning', harvest);
            res.send(harvest);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function readHarvestsForHive(req, res, next) {
    log.info('read all harvests', req.params);
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
    log.info('update harvest', req.params, req.body);
    res.send('TBD');
};

function deleteHive(req, res, next) {
    log.info('delete harvest', req.params, req.body);
    res.send('TBD');
};

module.exports = {
    create: createHarvest,
    read: readHarvest,
    readAll: readHarvestsForHive,
    update: updateHive,
    delete: deleteHive
}