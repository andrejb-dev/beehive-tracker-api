const pgPromise = require('pg-promise');
const log = require('../logger')(__filename.slice(__dirname.length + 1));

const initOptions = {
    extend(obj, dc) {
        // Database Context (dc) is mainly useful when extending multiple databases with different access API-s.

        // Do not use 'require()' here, because this event occurs for every task and transaction being executed,
        // which should be as fast as possible.

        // extension methods
        obj.findById = (table, id) => {
            log.debug('read ', table, id);
            return db.one('Select * from ' + table + ' where id = $1', id);
        };

        obj.executeScript = (file, callback) => {
            const queries = new pgp.QueryFile(file);
            db.any(queries)
                .then(res => {
                    log.debug(`Executed script file ${file}: `, res);
                    if (callback) {
                        callback();
                    }
                })
                .catch(err => {
                    log.error(`Error executing file ${file}`, err);
                })
        };
    }
}

const pgp = pgPromise(initOptions);

// Database connection details;
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'testdb',
    user: 'postgres',
    password: 'postgres'
};
// Create db connection and verify it
const db = pgp(process.env.DATABASE_URL || cn);
db.one('Select version()')
    .then(data => {
        log.info('Connected: ', data);
    })
    .catch(error => {
        log.error("Error connecting to db", error);
    });

module.exports = db;