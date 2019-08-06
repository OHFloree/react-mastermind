const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'max', saveUnitialized: false, resave: false}));

const colorService = require('./services/colorService')
const colors = new colorService;
const solution = colors.getSolution(8);

var won = false;

app.get('/solution', (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  if(won) {
    res.json(solution)
  }
  else {
    res.json([,,,,])
  }
})

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})
