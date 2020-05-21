const express = require('./express')

module.exports.init = function (app) {
  express.load(app)
}
