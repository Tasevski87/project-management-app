// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection
const sequelize = require('../config/connection.js')


// Initialize model (table) by extending off Sequelize's Model class
class Service extends Model { }

// set up fields and rules for model
Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },


        service_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'service'
    }
);

module.exports = Service;