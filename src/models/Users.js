const Sequelize = require('sequelize')
const db = require('../db')
module.exports = db.define('users',{ //определяем таблицу (название-users) и какие поля в ней будут
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})