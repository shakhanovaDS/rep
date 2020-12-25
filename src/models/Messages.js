const Sequelize = require('sequelize')
const db = require('../config/db')
module.exports = db.define('messages',{ //определяем таблицу (название-users) и какие поля в ней будут
    id1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
})