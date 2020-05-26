const path = require('path')
const express = require('express')
const router = require('../controller')
const session = require('express-session')
const sessionConfig = require('../config/session')

module.exports.load = (app) => {
    app.use(session(sessionConfig(session)))
    app.use(express.json())
    app.use('/api', router)
    app.use(express.static(path.join(__dirname, '../client/build')))
}
