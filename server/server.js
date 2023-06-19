const bodyParser = require('body-parser');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5002; //Line 3
const { Sequelize } = require('sequelize');
const db = require('./database/database')
const User = require('../server/models/User')
const Post = require('../server/models/Post')
const Url = require('../server/models/Url')
const seed = require('../server/index')

const init = async () =>{
  try {
    seed()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
init()

//body parser
app.unsubscribe(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.listen(port, console.log('lisetning on port', port))
module.exports = app
