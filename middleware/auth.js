//Imports
const jwt = require('jsonwebtoken');
const config = require('config');

//API Access Auth function
function auth(req, res, next) {

    //Grab token stored in request header
    const token = req.header('x-auth-token');

    //If token is not present, reject -- Error 401 response, access denied
    if (!token) return res.status(401).send('Access denied. No token provided.')

    //Decode and verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;
        return next();
    }
    catch (err) {
        return res.status(400).send('Invalid token.')
    }
}

//Exports
module.exports = auth;