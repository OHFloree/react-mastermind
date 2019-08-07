const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;


/*app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})*/

server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})

io.on('connection', (socket) => {
  console.log(`player connected: ${socket.id}`);
  socket.emit('news', {greeting: 'Hello World'});
})

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const colorService = require('./services/colorService')
const colors = new colorService;
const solution = colors.getSolution(8);
const colorPool = colors.getColors();

const feedbackService = require('./services/feedbackService')
var feedback = new feedbackService(solution);

var won = false;
var attempts;

//SOLUTION
app.get('/solution', (req,res) => {
  if(won) {
    res.json(solution)
  }
  else {
    res.json([,,,,])
  }
})

//COLORS
app.get('/colors', (req, res) => {
  res.json(colorPool)
})

//PLACEMENT
app.post('/placement', (req,res) => {
  let placement = req.body.placement;
  attempts = feedback.getAttempts(placement);

})*/
