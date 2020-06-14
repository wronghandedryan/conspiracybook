const fs = require('fs');

const db = require('../config/db.config.js');
const Image = db.images;

// Upload a Multipart-File then saving it to MySQL database
exports.upload = (req, res) => {
    Image.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(__basedir + '/resources/static/assets/uploads/' + req.file.filename)
    }).then(image => {
        try {
            fs.writeFileSync(__basedir + '/resources/static/assets/tmp/' + image.name, image.data);

            // exit node.js app
            res.json({
                'msg': 'File uploaded successfully!',
                'file': req.file
            });
        } catch (e) {
            console.log(e);
            res.json({
                'err': e
            });
        }
    })
};