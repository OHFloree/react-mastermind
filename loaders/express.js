const router = require('../controller')
const session = require('express-session')
const bodyParser = require('body-parser')
const sessionConfig = require('../config/session')

module.exports.load = (app) => {
    app.use(session(sessionConfig(session)))
    app.use(bodyParser.json())
    app.use('/api', router)
}
