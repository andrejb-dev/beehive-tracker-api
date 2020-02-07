module.exports = function (db, log) {
    return {
        one: (userEmail, yardId) => {
            log.debug('read yard', userEmail, yardId);
            return db.oneOrNone('SELECT y.* FROM yards y INNER JOIN users u ON (u.id = y.user_id) WHERE y.id = $1 AND u.email eq $2', yardId, userEmail);
        },
        add: (userEmail, yard) => {
            log.debug('insert yard', userEmail, yard);
            // return db.none({
            //     text: 'INSERT INTO yard(login, password) VALUES($1,$2)',
            //     values: [yard.login, yard.password]
            // });
        },
        all: userEmail => {
            log.debug('read all yards', userEmail);
            return db.any('SELECT * FROM yards');
        },
        update: (userEmail, yardId, yard) => {
            log.debug('update yard', userEmail, yardId, yard);
        }
    };
}