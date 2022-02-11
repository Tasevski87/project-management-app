// Import models
const Project = require('./Project');
const Service = require('./Service');

// const User = require('./User');



//create relationships
Service.belongsTo(Project, {
    foreignKey: 'service_id',
})

Project.hasMany(Service, {
    foreignKey: 'service_id',
})

Project.hasMany(Comment, {
    foreignKey:''
})


Comment.belongsTo(Project, {
    foreignKey: 'project_id',
    onDelete: 'SET NULL'
})
Comment.belongsTo(Service, {
    foreignKey: 'service_id',
    onDelete: 'SET NULL'
})


// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'

// });




module.exports = { Project, Service, Comment};
