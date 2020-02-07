const controller = require('../controllers/hive.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userId/yards/:yardId/hives')
        .get(controller.readAll)
        .post(controller.create);

    router.route('/users/:userId/yards/:yardId/hives/:hiveId')
        .get(controller.read)
        .put(controller.update);
};