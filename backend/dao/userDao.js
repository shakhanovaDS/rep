const User = require('../models/user')
module.exports.create = async (name, lastName, age) => {
    await User.create({
        'name': name,
        'lastName': lastName,
        'age': age,
    })
}
module.exports.getByName = async (name) => {
    return await User.findOne({where: {
            'name': name
        }});
}
module.exports.getById = async (id) => {
    return await User.findByPk(id);
}