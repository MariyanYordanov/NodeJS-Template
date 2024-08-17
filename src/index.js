const express = require('express');
const { configDatabase } = require('./config/database');
const { configHbs } = require('./config/hbs');
const { configExpress } = require('./config/express');
const { configureRoutes } = require('./config/routes');

start();

async function start() {

  const app = express();
  const port = 3000;

  await configDatabase();
  configHbs(app);
  configExpress(app);
  configureRoutes(app);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}