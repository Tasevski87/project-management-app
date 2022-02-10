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






module.exports = { Project, Service, User};
