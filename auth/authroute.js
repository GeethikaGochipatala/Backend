const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authuserSchema = require('../auth/authuser')
const secretKey = "ghgff!@#$%6fJhgfvvFGHJKKJHGF"
const verifyToken = require('../verifyToken')
router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    await authuserSchema.findOne({ email: email }).then(existUser => {
        if (existUser && existUser._id) {
            bcrypt.compare(password, existUser.password, function (err, response) {
                if (!err) {
                    if (response) {
                        const authToken = jwt.sign({ _id: existUser._id, email: existUser.email }, secretKey, {
                            expiresIn: '1h'
                        })
                        res.json({ status: 'ok', data: { authToken, response, existUser } })
                    }
                    else if (!response) {
                        res.json({ status: 'ok', data: { existUser, response } })
                    }
                }
            })
        }
    }).catch(err => {
        res.json({ status: 'error', data: 'something went wrong' })
    })
})
router.get('/home', verifyToken, async (req, res) => {
    if (req && req.decodedToken) {
        res.json({ status: "ok", data: 'ok' })
    }
})
router.post('/register', async (req, res) => {
    const registerUserData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber
    }
    const salt = await bcrypt.genSalt(10)
    await bcrypt.hash(req.body.password, salt).then(hashedPassword => {
        if (hashedPassword) {
            console.log('hashed password', hashedPassword)
            registerUserData.password = hashedPassword
        }
    })
    await authuserSchema.create(registerUserData).then(userStoreData => {
        if (userStoreData && userStoreData._id) {
            console.log('user stored data', userStoreData)
            res.json({ status: 'ok', data: userStoreData })
        }
    })
        .catch(err => {
            if (err) {
                res.json({ status: 'error', data: err })
            }
        })
})
module.exports = router