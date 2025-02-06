const { homeRouter } = require('../controllers/home');

function configureRoutes(app) {
    app.use(homeRouter);
    //TODO add routes
}

module.exports = { configureRoutes };