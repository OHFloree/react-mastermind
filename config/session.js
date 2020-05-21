const connectMongo = require('connect-mongo')

module.exports = (session) => {
  const MongoStore = connectMongo(session)
  return {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: process.env.MONGO_URL,
      ttl: 30 * 60
    })
  }
}
