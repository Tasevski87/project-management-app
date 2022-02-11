// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection
const sequelize = require('../config/connection.js')


// Initialize model (table) by extending off Sequelize's Model class
class Task extends Model { }

// set up fields and rules for model
Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },


        task_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        task_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'task'
    }
);

module.exports = Task;