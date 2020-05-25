const SolutionService = require('../../services/solutionService')
const ColorService = require('../../services/colorService')

module.exports = (app) => {
    app.get('/create-game', async (req, res) => {
        try {
            const colorService = new ColorService()
            const solutionService = new SolutionService()
            const solution = await solutionService.generateSolution()
            req.session.solution = solution
            req.session.guesses = []
            res.status(201).json({
                colors: await colorService.getAllColors()
            })
        }
        catch (e) {
            res.status(404).json({
                message: e,
            })
        }
    })
}
