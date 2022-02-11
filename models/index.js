// Import models
const Project = require('./Project');
const Task = require('./Task');
const User = require('./User');
const Comment = require('./Comment');


//create relationships
Task.belongsTo(Project, {
    foreignKey: 'task_id',
})

Project.hasMany(Task, {
    foreignKey: 'task_id',
})

Project.hasMany(Comment, {
    foreignKey:''
})


Comment.belongsTo(Project, {
    foreignKey: 'project_id',
    onDelete: 'SET NULL'
})
Comment.belongsTo(Task, {
    foreignKey: 'task_id',
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




module.exports = { Project, Task, Comment};
