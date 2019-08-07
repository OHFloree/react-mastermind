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
  let counter = 0;

  var gameover = false;
  const colorService = require('./services/colorService')
  const colors = new colorService;
  const solution = colors.getSolution(8);
  const colorPool = colors.getColors();

  const feedbackService = require('./services/feedbackService')
  const feedback = new feedbackService(solution);

  socket.emit('colors', {colorPool});
  socket.on('placement', (placement) => {
    let checked = feedback.checkPlacement(placement.placement);
    if (checked) {
      counter +=1;
      if (counter<12) {
        let attempts = feedback.getAttempts(placement.placement);
        socket.emit('attempts', {attempts});
      }
      else {
        gameover = true;
      }
      if(gameover) {
        socket.emit('gameover', {solution, disabled: true})
      }
    }
    else {
      socket.emit('invalid', 'Please select all four colors')
    }
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
