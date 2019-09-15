class FeedbackService {
  constructor(solution) {
    this.solution = solution;
    this.attempts = [];
    this.feedback = [];
  }

  won(placement) {
    let counter = 0;
    for (let i = 0; i<this.solution.length; i++) {
      if (this.solution[i] == placement[i]) {
        counter ++;
      }
    }
    if (counter == 4) {
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
  }

  getFeedback(userPlacement) {
    let solution = this.solution.slice()
    let placement = userPlacement.slice()
    let correctPositions = 0
    let correctColors = 0

    for(let i = 0; i < this.solution.length; i++) {
      if(solution[i] === placement[i]) {
        solution[i] = placement[i] = null;
        correctPositions ++;
      }
    }
    for(let i = 0; i < this.solution.length; i++) {
      for(let j = 0; j < this.solution.length; j++) {
        if(solution[i] && placement[i]) {
          if(placement[i] === solution[j]) {
            solution[j] = placement[i] = null;
            correctColors ++;
          }
        }
      }
    }
    this.feedback.push([correctPositions, correctColors])
    return this.feedback
  }
}

module.exports = FeedbackService;
