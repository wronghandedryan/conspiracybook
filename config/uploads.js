const multer = require('multer');
//const express = require('express');
//const fs = require('fs');
//const Sequelize = require(sequelize);

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '../models/uploads.js')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});