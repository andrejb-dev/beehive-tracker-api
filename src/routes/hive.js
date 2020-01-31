const controller = require('../controllers/hive.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userEmail/hives')
        .get(controller.readAll)
        .post(controller.create);

    router.route('/users/:userEmail/hives/:hiveId')
        .get(controller.read)
        .put(controller.update);
};