const Sequelize = require('sequelize')
const db = require('../db')
module.exports = db.define('friends', { //определяем таблицу (название-users) и какие поля в ней будут
    id_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})