const SolutionService = require('../../services/solutionService.js')


module.exports = (app) => {
    app.get('/create-game', async (req,res) => {
        try {
            const solutionService = new SolutionService
            const solution = await solutionService.generateSolution()
            req.session.solution = solution
            res.sendStatus(201)
        }
        catch(e) {
            res.status(404).json({
                message: e
            })
        }
    })
} 