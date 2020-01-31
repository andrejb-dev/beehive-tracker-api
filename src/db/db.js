const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || 'undefined db url');
const log = require('../logger')(__filename.slice(__dirname.length + 1));

db.one('Select version()')
    .then(data => {
        log.info('Connected: ', data);
    })
    .catch(error => {
        log.error(error);
    });

module.exports = {
    findById: (table, id) => {
        log.debug('read ', table, id);
        return db.one('Select * from ' + table + ' where id = $1', id);
    },
    hives: require('./db.hive')(db, log),
    yards: require('./db.yard')(db, log),
    inspections: require('./db.inspection')(db, log),
    users: require('./db.user')(db, log)
}