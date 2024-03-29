const jwt = require('jsonwebtoken')
const secretKey = "ghgff!@#$%6fJhgfvvFGHJKKJHGF"

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split('')[1]
    console.log('token is', token)

    if (!token) {
        res.status(403).send("A token is required for authentication")
    } else {
        jwt.verify(token, secretKey, (err, decodedToken) => {
            if (!err) {
                req.decodedToken = decodedToken
            } else if (err) {
                res.status(403).send(err)
            }

        })
    }
    return next();

};
module.exports = verifyToken;
