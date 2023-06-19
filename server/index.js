const db = require('./database/database')
const User = require('../server/models/User')
const Post = require('../server/models/Post')
const Url = require('../server/models/Url')

const seed = async () =>{
  try {
    await db.authenticate();
    console.log('Connected to database.');
    (async () => {
      await db.sync({ force: true });
      var user1 = await User.create({
        username: 'seth',
        password: 'king'
      })
     console.log('User seeded in database.')
    })();
  }
  catch(err){
    console.log(err)
  }
}

module.exports = seed