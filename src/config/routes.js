const { homeRouter } = require('../controllers/home');

function configureRoutes(app) {
    app.use(homeRouter);
}

module.exports = { configureRoutes };