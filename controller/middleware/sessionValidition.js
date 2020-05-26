module.exports.validateSession = (req, res, next) => {
    if (!req.session.solution) {
        return res.status(404).json({
            message: 'please start a game first'
        })
    }
    next()
}