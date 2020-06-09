const FeedbackService = require('./feedbackService')

module.exports = class GuessService {
    constructor() {
        this.feedbackService = new FeedbackService()
    }

    async makeGuess(guesses, solution) {
        const guess = guesses[guesses.length - 1]
        const gameState = await this.determinateGamestate(guesses, solution)
        const feedback = await this.feedbackService.generateFeedback(
            guess,
            solution
        )
        return { feedback, gameState }
    }

    async determinateGamestate(guesses, solution) {
        const guess = guesses[guesses.length - 1]
        if (guesses.length >= 10) {
            return 'LOST'
        }
        if (await this.checkWin(guess, solution)) {
            return 'WON'
        }
        return 'PLAYING'
    }

    async checkWin(guess, solution) {
        for (let i = 0; i < solution.length; i++) {
            if (guess[i] !== solution[i]) {
                return false
            }
        }
        return true
    }
}