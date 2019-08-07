class FeedbackService {
  constructor(solution) {
    this.solution = solution;
    this.attempts = [];
    this.correctPositions = 0;
    this.correctColors = 0;
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
