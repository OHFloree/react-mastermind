const { body, validationResult } = require('express-validator')
const ColorService = require('../../services/colorService')

module.exports.validationRules = () => {
    const colorService = new ColorService
    const allColors = colorService.getAllColorsSync()
    return ([
        body('guess')
            .exists()
            .isArray({ min: 4, max: 4 })
            .custom(guess => {
                return guess.every(color => allColors.includes(color))
            }).withMessage(`only values of the following are allowed: ${allColors}`)
    ])
}

module.exports.validateGuess = (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        errors = errors.array().map(error => (
            error.msg
        )
        )
        return res.status(406).json({ errors });
    }
    next()
}