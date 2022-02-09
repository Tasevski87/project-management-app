// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection
const sequelize = require('../config/connection.js')


// Initialize model (table) by extending off Sequelize's Model class
class Project extends Model { }


// set up fields and rules for model
Project.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    project_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'project'
  }
);


module.exports = Project; 