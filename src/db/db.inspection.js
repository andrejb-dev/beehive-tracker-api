module.exports = function (db, log) {
    return {
        one: inspectionId => {
            log.debug('read inspection [%s]', inspectionId);
            return db.oneOrNone('SELECT * FROM inspections WHERE id = $1', inspectionId);
        },
        add: inspection => {
            log.debug('insert inspection', inspection);
            // return db.none({
            //     text: 'INSERT INTO inspection(login, password) VALUES($1,$2)',
            //     values: [inspection.login, inspection.password]
            // });
        },
        all: () => {
            log.debug('read all inspections');
            return db.any('SELECT * FROM inspections');
        }
    };
}