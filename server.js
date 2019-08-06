const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'max', saveUnitialized: false, resave: false}));

const colorService = require('./services/colorService')
const colors = new colorService;
const solution = colors.getSolution(8);
const colorPool = colors.getColors();

var won = false;

app.get('/', (req,res) => {
})

app.get('/solution', (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  if(won) {
    res.json(solution)
  }
  else {
    res.json([,,,,])
  }
})

app.get('/colors', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(colorPool)
})

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})
