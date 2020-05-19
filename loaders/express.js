const router = require('../controller')
const bodyParser = require('body-parser')

module.exports.load = (app) => {
    app.use(bodyParser.json())
    app.use('/api', router)
}