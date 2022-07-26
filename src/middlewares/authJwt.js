const jwt = require('jsonwebtoken');
const {LocalStorage} = require('node-localstorage');
localStorage = new LocalStorage('./scratch');
const configToken = require('../config');

const verifyToken = (req, res, next)  => {
    const token = localStorage.getItem('x-access-token');
    if(!token)
    {
        return res.status(400).send("no hay token");
    }

    jwt.verify(token,  configToken.token_secret, (err, decoded) => {
        if(err)
        {
            res.redirect('/auth/login');
            // return res.status(401).send({message: "Token Erroneo"});
        }
        // req.userId = decoded.indexOf;
        // console.log(decoded.user);
        next();
    })
}

module.exports = verifyToken;
