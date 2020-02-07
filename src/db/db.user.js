module.exports = function (db, log) {
    return {
        one: userEmail => {
            log.debug('read user', userEmail);
            return db.oneOrNone('SELECT * FROM users WHERE email eq $1', userEmail);
        },
        add: user => {
            log.debug('insert user', user);
            // return db.none({
            //     text: 'INSERT INTO user(login, password) VALUES($1,$2)',
            //     values: [user.login, user.password]
            // });
        },
        all: () => {
            log.debug('read all users');
            return db.any('SELECT * FROM users');
        }
    };
}