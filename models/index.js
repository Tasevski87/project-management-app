const Project = require("./Project");
const Task = require("./Task");
const User = require("./User");
const Comment = require("./Comment");

//create relationships
User.hasMany(Project, {
  foreignKey: "user_id",
});

Project.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Project, {
  foreignKey: "project_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Project.hasMany(Comment, {
  foreignKey: "project_id",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Task.belongsTo(Project, {
  foreignKey: "project_id",
  onDelete: "SET NULL",
});

User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Project.hasMany(Task, {
  foreignKey: "project_id",
});

module.exports = { Project, Task, Comment, User };
