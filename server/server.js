const bodyParser = require('body-parser');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5002; //Line 3
const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.REACT_DATABASE_NAME, process.env.REACT_DATABASE_USER, process.env.REACT_DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
    logging: false
})

//body parser
app.unsubscribe(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.listen(port, console.log('lisetning on port', port))
module.exports = app
