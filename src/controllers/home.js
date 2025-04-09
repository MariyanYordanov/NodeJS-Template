const { Router } = require('express');
const { login } = require('../services/user');
const { createToken } = require('../services/jwt');

// TODO Replace with real router
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    console.log(req.user);

    // This code creates a token and saves it in a cookie
    // TODO Replace with real login logic
    // const result = await login('Ana', '1234');
    // console.log('Login result:', result);

    // const token = createToken(result);
    // res.cookie('token', token);
    // console.log('Token:', token);

    res.render('home');
});

module.exports = { homeRouter };