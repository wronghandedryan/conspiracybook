
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

router.post('/register', (req, res) => {

db.User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            db.User.create({...req.body, passwordHash})
        .catch((err) => {
            res.send('error: ', err)
        })
        }else {
                res.send('User Does Already Exist.')
            }
            
    })

});

// Find log in info
router.post('/login', async (req, res) => {
    console.log(req.body)
    db.User.findOne({ where: { username: req.body.username } }).then(async(user) => {
        console.log(user)
      if(!user){
          res.json("Username Doesn't exist");
      }else{
          const match = await bcrypt.compareSync(req.body.password, user.passwordHash)
          match ? res.json(user) : res.json("Incorrect Password!")
      }
  });
})



router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    db.User.findOne({
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


router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    db.User.findOne({
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

router.post('/upload-avatar', async (req, res) => {
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

router.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
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


router.post('../db/', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
});

module.exports = router;
