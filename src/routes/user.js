const controller = require('../controllers/user.controller');

module.exports.attachHandlers = (router) => {

    router.get('/users/:userId', controller.read);

    router.route('/users')
        .get(controller.readAll)
        .post(controller.create);

};