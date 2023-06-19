const { Sequelize } = require('sequelize');

const db = new Sequelize('first_chrome_extension', 'seth', 'Poiop90lik8!', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
    logging: false
})

module.exports = db
