const controller = require('../controllers/yard.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userId/yards')
        .get(controller.readAll)
        .post(controller.create);

    router.route('/users/:userId/yards/:yardId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);
};