module.exports = function (db, log) {
    return {
        one: hiveId => {
            log.debug('read hive [%s]', hiveId);
            return db.oneOrNone('SELECT * FROM hives WHERE id = $1', hiveId);
        },
        add: hive => {
            log.debug('insert hive', hive);
            // return db.none({
            //     text: 'INSERT INTO hive(login, password) VALUES($1,$2)',
            //     values: [hive.login, hive.password]
            // });
        },
        all: () => {
            log.debug('read all hives');
            return db.any('SELECT * FROM hives');
        }
    };
}