const Sequelize = require('sequelize')
const db = require('../database/database')

const Url = db.define('url', {
  url: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  post_type: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Url