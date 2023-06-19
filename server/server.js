const bodyParser = require('body-parser');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5002; //Line 3
const seed = require('./seed')

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

var postRoutes = require('./apis/posts');
var userRoutes = require('./apis/posts');
var commentRoutes = require('./apis/posts');

module.exports = app
