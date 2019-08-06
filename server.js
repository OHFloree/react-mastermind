const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const colorService = require('./services/colorService')
const colors = new colorService;
const solution = colors.getSolution(8);
const colorPool = colors.getColors();

var won = false;

app.get('/', (req,res) => {
})

app.get('/solution', (req,res) => {
  if(won) {
    res.json(solution)
  }
  else {
    res.json([,,,,])
  }
})

app.get('/colors', (req, res) => {
  res.json(colorPool)
})

app.post('/placement', urlencodedParser, (req,res) => {
  console.log(req.body);
})

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})
