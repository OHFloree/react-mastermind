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
    let correctColors = [];
    let correctPositions = [];
    for(let i=0; i<placement.length; i++) {
      if(this.solution.includes(placement[i])) {
        correctColors.push(placement[i]);
      }
    }
    for(let i=0;i<correctColors.length;i++) {
      for(let j=i;j<correctColors.length;j++) {
        console.log(i, j);
      }

    }
    this.feedback.push([correctPositions.length,correctColors.length])
    console.log(`
      solution: ${this.solution}
      placement: ${placement}
      ${correctPositions}, ${correctColors}
      `);
    return this.feedback
  }
}

module.exports = FeedbackService;
