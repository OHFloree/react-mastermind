const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'max', saveUnitialized: false, resave: false}));

const colorService = require('./services/colorService')
const colors = new colorService;
const solution = colors.getSolution(8);

app.get('/solution', (req,res) => {
  res.json(solution)
})

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})
