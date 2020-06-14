const fs = require('fs');

const db = require('../config/database.js');
const Image = db.images;

// Upload a Multipart-File then saving it to MySQL database
 exports.upload = (req, res) => {
   Image.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(__basedir + '../config/uploads.js' + req.file.filename)
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

module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    type: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
    },
  });

  return Image;
};