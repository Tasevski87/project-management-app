


// import all models
const Project = require('./Project');
const User = require('./User');
const Task = require('./Task');
const Comment = require('./Comment');

// create associations
User.hasMany(Project, {
  foreignKey: 'user_id'
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Project, {
  through: Task,
  as: 'Taskd_Projects',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Project.belongsToMany(User, {
  through: Task,
  as: 'Taskd_Projects',
  foreignKey: 'Project_id',
  onDelete: 'SET NULL'
});

Task.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Task.belongsTo(Project, {
  foreignKey: 'Project_id',
  onDelete: 'SET NULL'
});

User.hasMany(Task, {
  foreignKey: 'user_id'
});

Project.hasMany(Task, {
  foreignKey: 'Project_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Project, {
  foreignKey: 'Project_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Project.hasMany(Comment, {
  foreignKey: 'Project_id'
});

module.exports = { User, Project, Task, Comment };
