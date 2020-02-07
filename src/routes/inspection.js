const controller = require('../controllers/inspection.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userId/inspections')
        .get(controller.readAll)
        .post(controller.create);

    router.route('/users/:userId/inspections/:inspectionId')
        .get(controller.read)
        .put(controller.update);
};