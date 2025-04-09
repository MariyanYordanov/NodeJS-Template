const express = require('express');
const { configDatabase } = require('./config/database');
const { configHbs } = require('./config/hbs');
const { configExpress } = require('./config/express');
const { configRoutes } = require('./config/routes');
const { verifyToken } = require('./services/jwt');
const { login } = require('./services/user');
const { createToken } = require('./services/jwt');

start();

async function start() {

    const app = express();
    const port = 3000;

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}