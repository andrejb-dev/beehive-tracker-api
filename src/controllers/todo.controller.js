const db = require('../db');
const sql = require('../sql').todos;
const log = require('../logger')(__filename.slice(__dirname.length + 1));

function createTodo(req, res, next) {
    log.info('create todo', req.body);
    if (!req.body.hive_id) {
        log.debug('inserting hive_id to todo');
        req.body.hive_id = req.params.hiveId;
    }
    db.one(sql.insert, req.body)
        .then((todo) => {
            res.status(201).send(todo);
        })
        .catch((error) => {
            log.error('Error occured', error);
            next(error);
        });
};

function readTodo(req, res, next) {
    log.info('read todo', req.params);
    db.oneOrNone(sql.select, { id: req.params.todoId })
        .then(todo => {
            if (!todo) {
                log.debug('todo not found', req.params);
                res.status(404).send('todo not found')
                return;
            }
            log.debug('returning', todo);
            res.send(todo);
        })
        .catch((error) => {
            log.error(error);
            next(error);
        });
};

function readTodosForHive(req, res, next) {
    log.info('read all todos', req.params);
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
    log.info('update todo', req.params, req.body);
    res.send('TBD');
};

function deleteHive(req, res, next) {
    log.info('delete todo', req.params, req.body);
    res.send('TBD');
};

module.exports = {
    create: createTodo,
    read: readTodo,
    readAll: readTodosForHive,
    update: updateHive,
    delete: deleteHive 
}