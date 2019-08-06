var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

const colorService = require('./services/colorService');
const solution = new colorService();
solution.getSolution(8);

app.get('/',(req, res) => {
  res.send(solution.getSolution(8));
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})
