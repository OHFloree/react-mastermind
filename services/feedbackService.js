module.exports = class FeedbackService {
    async generateFeedback(guess, solution) {
        const solutionCopy = solution.slice()
        const guessCopy = guess.slice()

        const correctPositions = await this.getCorrectPositions(
            guessCopy,
            solutionCopy
        )
        const correctColors = await this.getCorrectColors(
            guessCopy,
            solutionCopy
        )
        const feedback = [correctPositions, correctColors]

        return feedback
    }

    async getCorrectPositions(guess, solution) {
        let correctPositions = 0
        solution.forEach((color, i) => {
            if (guess[i] === color) {
                correctPositions++
                solution[i] = 'GUESSED'
                guess[i] = 'USED'
            }
        })

        return correctPositions
    }

    async getCorrectColors(guess, solution) {
        let correctColors = 0
        solution.forEach((color, i) => {
            if (guess.includes(color)) {
                correctColors++
            }
        })

        return correctColors
    }
}
