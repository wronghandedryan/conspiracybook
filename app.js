const express = require('express');
const routes = require('./routes');
//const controllers = require('./controllers');
//const db = require('./db/db.js');
const db = require('./models');
const bodyParser = require('body-parser');
const pug = require('pug');
// const faker = require('faker');
//const dotenv = require("dotenv").config('');
//const _ = require('lodash');

// API ENDPOINTS

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'))
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
    db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
            // populate author table with dummy data
    // db.User.bulkCreate(
    //     times(10, () => ({
    //         firstName: faker.name.firstName(),
    //         lastName: faker.name.lastName()
    //     }))
    // );
    // // populate post table with dummy data
    // db.Post.bulkCreate(
    //     times(10, () => ({
    //         title: faker.lorem.sentence(),
    //         content: faker.lorem.paragraph(),
    //        // authorId: Math.ceil(Math.random() * 10)
    //     }))
    // );
    app.listen(8080, () => console.log("App listening on port 8080!"));
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
});
