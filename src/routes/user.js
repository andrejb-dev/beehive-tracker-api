const controller = require('../controllers/user.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    router.route('/users')
        .post(controller.create);
};