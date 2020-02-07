const pgp = require('pg-promise')();
const log = require('../logger')(__filename.slice(__dirname.length + 1));

// Database connection details;
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'testdb',
    user: 'postgres',
    password: 'postgres'
};

// Create db connection and verify it
var db = pgp(process.env.DATABASE_URL || cn);
db.one('Select version()')
    .then(data => {
        log.info('Connected: ', data);
    })
    .catch(error => {
        log.error("Error connecting to db", error);
    });

// 
db.findById = (table, id) => {
    log.debug('read ', table, id);
    return db.one('Select * from ' + table + ' where id = $1', id);
};

// extension methods
db.executeScript = (file, callback) => {
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

module.exports = db;

// {
//     hives: require('./db.hive')(db, log),
//     yards: require('./db.yard')(db, log),
//     inspections: require('./db.inspection')(db, log),
//     todos: require('./db.todo')(db, log),
//     users: require('./db.user')(db, log)
// }