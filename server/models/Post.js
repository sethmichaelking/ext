const Sequelize = require('sequelize')
const db = require('../database/database')

const Post = db.define('post', {
  create_timestamp: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  update_timestamp: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  css_selector: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  content_string: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Post