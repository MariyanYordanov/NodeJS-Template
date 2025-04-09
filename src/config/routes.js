const { homeRouter } = require('../controllers/home');

function configRoutes(app) {
    app.use(homeRouter);
    //TODO add routes
}

module.exports = { configRoutes };