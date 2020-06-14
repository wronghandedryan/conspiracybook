const Sequelize = require('sequelize');

Project.findById(123).then(function (project) {
    // project will be an instance of Project and stores the content of the table entry
    // with id 123. if such an entry is not defined you will get null
})

// search for attributes
Users.findOne({
    where: {
        title: 'conspbook_db'
    }
}).then(function (_app) {
    // project will be the first entry of the Projects table with the title 'aProject' || null
});


Project.findOne({
    where: {
        title: 'aProject'
    },
    attributes: ['id', ['name', 'title']]
}).then(function (project) {
    // project will be the first entry of the Projects table with the title 'aProject' || null
    // project.title will contain the name of the project
})
