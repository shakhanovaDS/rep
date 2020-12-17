const Sequalize = require('sequelize') //импортируем функции(методы) из библиотеки sequelize
module.exports = new Sequalize('dasha', 'postgres', 'postgres',{ //шаблон подключения к бд
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})