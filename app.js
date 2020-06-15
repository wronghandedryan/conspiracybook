const express = require('express');
const routes = require('./routes');
const controllers = require('./controllers');
//const db = require('./models');
const bodyParser = require('body-parser');
const pug = require('pug');
require("dotenv").config();

// API ENDPOINTS

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'pug');

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

module.import { index.js } from "models";