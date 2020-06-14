// @ts-ignore
const express = require('express');
const users = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = multer({ dest: '.profile/uploads/upload.js' });

// @ts-ignore
const User = require('../models/User')
users.use(cors());

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    //const today = new Date();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: Today

    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
   
    .then(user => {
        if (!user) {
            const hash = bcrypt.hashSync(userData.password, 10)
            userData.password = hash
            // @ts-ignore
            User.create(user => {
                // @ts-ignore
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,
                    // @ts-ignore
                    expiresIn: 1440
                // @ts-ignore
                })
                 // @ts-ignore
                 res.json({ token: token});
            } else {
                res.send('User Does Already Exist.')
            // @ts-ignore
            })
            // @ts-ignore
            .catch((err) => {
                // @ts-ignore
                res.send('error: ', err)
            });
        })
    // @ts-ignore
    })
// @ts-ignore
});

users.get('/profile', (req,res) => {
    // @ts-ignore
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where: {
            // @ts-ignore
            id: decoded.id
        }
    })
    // @ts-ignore
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.send('User Does Not Exist.')
        }
    })
    // @ts-ignore
    .catch((err) => {
        // @ts-ignore
        res.send('error: ', err)
    })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
        // @ts-ignore
        .then(user => {
        if (!user) {
            // @ts-ignore
            const hash = bcrypt.compareSync(userData.password, 10)
            // @ts-ignore
            userData.password = hash
            // @ts-ignore
            User.create(user => {
                // @ts-ignore
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,
                    // @ts-ignore
                    expiresIn: 1440
                // @ts-ignore
                })
                 // @ts-ignore
                 res.json({ token: token });
            } else {
                res.send('User Does Not Exist.')
            // @ts-ignore
            })
            // @ts-ignore
            .catch((err) => {
                // @ts-ignore
                res.send('error: ', err)
            })
        })
    })
// @ts-ignore
});

users.get('/profile', (req, res) => {
    var decoded =jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        where: {
            id: decoded.id
        }
    })
    .then(user => {
        if (user) {
             res.json(user)
        } else {
            res.send('User DOes Not Exist')
        }
    })
    .catch((err) => {
        res.send('error: ', err)
    })
});
app.post('/upload-avatar', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = Users