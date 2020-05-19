const SolutionService = require('../../services/solutionService.js')


module.exports = (app) => {
    app.get('/create', async (req,res) => {
        try {
            const solutionService = new SolutionService
            let solution =  await solutionService.generateSolution()
            res.json(solution)
        }
        catch(e) {
            res.status(404).json({
                message: e
            })
        }
    })
} 