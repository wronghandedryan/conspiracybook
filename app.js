const express = require('express');
const routes = require('./routes');
const controllers = require('./controllers');
const db = require('./db/db.js');
const bodyParser = require('body-parser');
const pug = require('pug');
const faker = require('faker');
const dotenv = require("dotenv").config('env.js');
const _ = require('lodash');
const compiledFunction = pug.compileFile('template.pug');

// API ENDPOINTS

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(routes);



// apiPost(app, db);
// apiAuthor(app, db);
function times(n, callback){
    const output = []
    for(i = 0; i < n; i++){
        output.push(callback())
    }
    return output
}

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
            authorId: Math.ceil(Math.random() * 10)
        }))
    );
    app.listen(8080, () => console.log("App listening on port 8080!"));
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });