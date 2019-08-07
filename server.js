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
        socket.emit('feedback', {attempts});
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
