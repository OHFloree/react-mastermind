const SolutionService = require('../../services/solutionService')
const GuessService = require('../../services/guessService')

module.exports = (app) => {
    app.post('/guess', async (req, res) => {
        try {
            req.session.guesses = [...req.session.guesses, req.body.guess]
            const guessService = new GuessService()
            const { solution, guesses } = req.session
            const { feedback, gameState } = await guessService.makeGuess(
                guesses,
                solution
            )
            res.json({
                feedbackRow: {
                    guess: guesses[guesses.length - 1],
                    feedback,
                },
                gameState,
                solution:
                    gameState === 'WON' || gameState === 'LOST'
                        ? solution
                        : null,
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).json({
                message: e,
            })
        }
    })
}
