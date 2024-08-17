const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

function configHbs(app){
    const hbs = handlebars.create({
        extname: '.hbs',
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}

module.exports = { configHbs };