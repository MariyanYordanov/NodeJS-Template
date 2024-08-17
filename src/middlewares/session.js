const token = require('jsonwebtoken');
const { verifyToken } = require('../services/jwt');

const secret = 'mysecret';

function session(req, res, next) {

    return function (req, res, next) {

        const token = req.cookies?.token;
        if (token) {

            try{

                const sessionData = verifyToken(token);
                req.user = {
                    email: sessionData.email,
                    _id: sessionData._id,
                };
                res.locals.hasUser = true;
            } catch (err) {

                res.clearCookie('token');
                res.redirect('/login');

                return;
            }
            
        }

        next();
    }
}

module.exports = { session };