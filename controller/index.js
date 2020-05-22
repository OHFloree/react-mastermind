const router = require('express').Router()
const fs = require('fs')
const path = require('path')

fs.readdirSync(path.join(__dirname, 'routes'))
    .forEach(file => {
        require('./routes/' + file)(router)
    })

module.exports = router