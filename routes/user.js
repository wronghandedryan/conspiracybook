
const multer = require('multer');
const upload = multer({dest: 'uploads/'});


const user = require('../models/user');


process.env.SECRET_KEY = 'secret'

user.post('/register', (req, res) => {
//const today = new Date();
var userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: Today

}

user.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            const hash = bcrypt.hashSync(userData.password, 10)
            userData.password = hash
            User.create(user => {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                        expiresIn: 1440
                    })
                res.json({
                    token: token
                })
            })
        .catch((err) => {
            res.send('error: ', err)
        })
        }else {
                res.send('User Does Already Exist.')
            }
            
    })

});



users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    user.findOne({
            where: {
                id: decoded.id
            }
        })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('User Does Not Exist.')
            }
        })
        .catch((err) => {
            res.send('error: ', err)
        })
});

users.post('/login', (req, res) => {
    user.findOne({
        where: {
            email: req.body.email
        }})
        .then(user => {
            if (!user) {
                const hash = bcrypt.compareSync(userData.password, 10)
                userData.password = hash
                user.create(user => {
                        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                            expiresIn: 1440
                        })
                    res.json({
                        token: token
                    });
                })
            .catch((err) => res.send('error: ', err))
            } else {
                res.send('User Does Not Exist.')
            }
            
        })
    
});

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
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
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})
//uploads
upload.databaseStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '../db/upload.json')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
})
var cpUpload = upload.fields([{
    name: 'avatar',
    maxCount: 1
}, {
    name: 'gallery',
    maxCount: 8
}])
app.post('../db/', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
});

module.exports('profile');

module.exports = users;