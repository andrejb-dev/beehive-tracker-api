const controller = require('../controllers/yard.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userEmail/yards')
        .get(controller.readAll)
        .post(controller.create);

    router.route('/users/:userEmail/yards/:yardId')
        .get(controller.read)
        .put(controller.update);
};