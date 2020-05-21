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
        if (guesses.length >= 10) {
            return 'LOST'
        }
        if (await this.checkWin(guesses, solution)) {
            return 'WON'
        }
        return 'PLAYING'
    }

    async checkWin(guesses, solution) {
        let flags = []
        for (let i = 0; i < solution.length; i++) {
            if (guesses[i] === solution[i]) {
                flags.push(true)
            } else {
                flags.push(false)
            }
        }

        if (flags.length > 0 && !flags.includes(false)) {
            return true
        }
        return false
    }
}
