const ColorService = require('./colorService')

module.exports = class SolutionService {
    constructor() {
        this.colorService = new ColorService
    }

    async generateSolution() {
        let solution = []
        const allColors = await this.colorService.getAllColors()

        for(let i = 0; i<4;i++) {
            let randomNum = await this.generateRandomNumber(allColors.length)
            let randomColor = allColors[randomNum]
            solution.push(randomColor)    
        }

        return solution
    }

    async generateRandomNumber(max) {
        return Math.floor(Math.random() * max)
    }
}