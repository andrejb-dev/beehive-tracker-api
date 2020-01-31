module.exports = function (db, log) {
    return {
        one: yardId => {
            log.debug('read yard [%s]', yardId);
            return db.oneOrNone('SELECT * FROM yards WHERE id = $1', yardId);
        },
        add: yard => {
            log.debug('insert yard', yard);
            // return db.none({
            //     text: 'INSERT INTO yard(login, password) VALUES($1,$2)',
            //     values: [yard.login, yard.password]
            // });
        },
        all: () => {
            log.debug('read all yards');
            return db.any('SELECT * FROM yards');
        }
    };
}