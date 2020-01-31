const controller = require('../controllers/inspection.controller');

module.exports.attachHandlers = (router) => {

    router.route('/users/:userEmail/inspections')
        .get(controller.readAll)
        .post(controller.create);

    router.route('/users/:userEmail/inspections/:inspectionId')
        .get(controller.read)
        .put(controller.update);
};