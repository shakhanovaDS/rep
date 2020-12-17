const Sequelize = require('sequelize')
const Dialogue = require('../models/dialogue')
module.exports.create = async (msg, id_1, id_2) => {
    await Dialogue.create({
        'msg': msg,
        'id_1':id_1,
        'id_2':id_2
    });
}