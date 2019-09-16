class ScoreService {
  constructor()  {
    this.time = 0
    this.score = 10000
  }

  startTimer() {
    var timer = setInterval(() => {
      this.time += 10;
    }, 10)
  }

  stopTimer(cb) {
    clearInterval(timer)
    cb();
  }

  getTime () {
    return this.time
  }

  getScore(time, attempts) {
    let time = this.time
    this.score = (this.score - time) / attempts;
    return this.score
  }
}

module.exports = ScoreService;
