const { Router } = require('express');
const { login, register } = require('../services/user');
const { createToken } = require('../services/jwt');
// TODO Replace with real router
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    
    // const result = await login('Ana', '1234');
    // const token = createToken(result);
    // res.cookie('token', token);

    // console.log(token);

    res.render('home');
});

module.exports = { homeRouter };