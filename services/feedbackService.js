class FeedbackService {
  constructor(solution) {
    this.solution = solution;
    this.attempts = [];
    this.correctPositions = 0;
    this.correctColors = 0;
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
  getFeedback() {
    return { correctColors :this.correctColors, correctPositions: this.correctPositions}
  }
}

module.exports = FeedbackService;
