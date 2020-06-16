const express = require('express');
const routes = require('./routes');
const controllers = require('./controllers');
const db = require('./models');
const bodyParser = require('body-parser');
const pug = require('pug');
const faker = require('faker');
const dotenv = require("dotenv").config('env.js');
const _ = require('lodash');


// API ENDPOINTS

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use('pug');

apiPost(app, db);
apiAuthor(app, db);

db.sequelize.sync().then(() => {
    // populate author table with dummy data
    db.author.bulkCreate(
        times(10, () => ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        }))
    );
    // populate post table with dummy data
    db.post.bulkCreate(
        times(10, () => ({
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            authorId: random(1, 10)
        }))
    );
    app.listen(8080, () => console.log("App listening on port 8080!"));
});

module.import('index', './routes/');
module.import('index', "./models");
module.import('index', './controllers/');
module.import('connection', './config');
module.import('models', './db/');
module.import('./config/env');