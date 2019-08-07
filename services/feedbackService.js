class FeedbackService {
  constructor(solution) {
    this.solution = solution;
    this.attempts = [];
    this.feedback = [];
  }

  won(placement) {
    if (this.solution == placement) {
      return true
    }
    else {
      return false
    }
  }

  checkPlacement(placement) {
    let checked = true;
    for(let i = 0; i<placement.length;i++) {
      if (placement[i] == '') {
        checked =  false;
      }
    }
    return checked
  }

  getAttempts(placement) {
    this.attempts.push({placement})
    return this.attempts;
    console.log(this.attempts);
  }

  getFeedback(placement) {
    let correctColors = 0;
    let correctPositions = 0;
    for(let i=0; i<placement.length; i++) {
      if(this.solution.indexOf(placement[i]) == i) {
        correctPositions ++;
      }
    }
    for(let i=0; i<placement.length; i++) {
      if(this.solution.includes(placement[i])) {
        correctColors ++;
      }
    }
    correctColors = correctColors - correctPositions;
    this.feedback.push([correctColors,correctPositions])
    return this.feedback
  }
}

module.exports = FeedbackService;
