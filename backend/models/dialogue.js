const Sequelize = require('sequelize')
const db = require('../db')
module.exports = db.define('dialogues',{
    id_1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    msg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
})
