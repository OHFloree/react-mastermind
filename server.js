const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})


io.on('connection', (socket) => {
  console.log(`player connected: ${socket.id}`);
  let counter = 0;
  const colorService = require('./services/colorService')
  const colors = new colorService;
  const solution = colors.getSolution();
  console.log(`solution: ${solution}`);
  const colorPool = colors.getColors();

  const feedbackService = require('./services/feedbackService')
  const feedback = new feedbackService(solution);

  var gameover = false;
  socket.emit('colors', {colorPool});
  socket.on('placement', (placement) => {
    let checked = feedback.checkPlacement(placement.placement);
    if (checked) {
      socket.emit('placementCb', null)
      counter +=1;
      if (counter<12) {
        let attempts = feedback.getAttempts(placement.placement);
        gameover = feedback.won(placement.placement);
        let feedbackObject = feedback.getFeedback(placement.placement);
        socket.emit('feedback', {attempts, feedback: feedbackObject});
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
