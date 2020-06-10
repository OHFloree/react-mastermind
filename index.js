require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT

async function startServer() {
	require('./loaders').init(app)

	app.listen(PORT, () => {
		console.log(`listening on PORT: ${PORT}`)
	})
}

startServer()
