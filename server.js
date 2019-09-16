const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const path = require('path');
const PORT = process.env.PORT || 8000;

const db = require('./config/keys.js').mongoURI;
mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected...')
  })
  .catch(err => console.log(err))

const Score = require('./models/scoreModel.js')

// @ GET api/score
app.get('/api/scoreboard', (req,res) => {
  Score.find()
    .then(score => res.json(score));
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})


io.on('connection', (socket) => {
  console.log(`player connected: ${socket.id}`);
  let counter = 0;
  const colorService = require('./services/colorService')
  const colors = new colorService;
  const solution = colors.getSolution();
  const colorPool = colors.getColors();

  const feedbackService = require('./services/feedbackService')
  const feedback = new feedbackService(solution);
  const scoreService = require('./services/ScoreService')
  const score = new scoreService

  var gameover = false;
  let won = false;
  let isTimerRunning = false;
  // Colors
  socket.emit('colors', {colorPool});
  // Placement
  socket.on('placement', (placement) => {
    let checked = feedback.checkPlacement(placement.placement);
    if (checked) {
      socket.emit('placementCb', null)
      if (!isTimerRunning) {
        score.startTimer()
        isTimerRunning = true;
      }
      counter +=1;
      if (counter<12) {
        let attempts = feedback.getAttempts(placement.placement);
        gameover = feedback.won(placement.placement);
        won = feedback.won(placement.placement);
        let feedbackObject = feedback.getFeedback(placement.placement);
        socket.emit('feedback', {attempts, feedback: feedbackObject});
      }
      else {
        gameover = true;
        score.stopTimer(() => {
          isTimerRunning = false;
        })
      }
      if(gameover) {
        socket.emit('gameover', {solution, disabled: true, won})
      }
    }
    else {
      socket.emit('invalid', 'Please select all four colors')
    }
  })

  // Scores
  socket.on('score', () => {
    let scoreboard = Score.find({})
    .then(scoreboard => socket.emit('scoreCb', scoreboard))
  })
  socket.on('newScore', (data) => {
    let newScore = new Score({
      user: data.name,
      score: score.getScore(feedback.getAttempts())
    })
    newScore.save();
  })
})
