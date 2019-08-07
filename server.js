const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})


io.on('connection', (socket) => {
  console.log(`player connected: ${socket.id}`);

  const colorService = require('./services/colorService')
  const colors = new colorService;
  const solution = colors.getSolution(8);
  const colorPool = colors.getColors();

  const feedbackService = require('./services/feedbackService')
  const feedback = new feedbackService(solution);

  socket.emit('colors', {colorPool});
  socket.on('placement', (placement) => {
    let attempts = feedback.getAttempts(placement.placement);
    socket.emit('attempts', {attempts});
  })
})

/*

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
