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

  getFeedback(placement) {
    let solution = this.solution;
    let correctPositions = [];
    let correctColors = [];
    for(let i = 0;i < solution.length; i++) {
      if(placement[i] == solution[i]) {
        correctPositions.push(solution[i]);
      }
      else if(placement.includes(solution[i])) {
        for(let j = 0;j < solution.length; j++) {
          if(solution[i] == placement[j]) {
            correctColors.push(placement[j])
          }
        }
      }
    }
    this.feedback.push([correctPositions.length, correctColors.length])
    console.log(`placement: ${placement}`);
    console.log(correctPositions);
    console.log(correctColors);
    return this.feedback
  }
}

module.exports = FeedbackService;
