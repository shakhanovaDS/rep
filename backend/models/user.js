const Sequelize = require('sequelize')
const db = require('../db')
module.exports = db.define('users',{ //определяем таблицу (название-users) и какие поля в ней будут
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

})
