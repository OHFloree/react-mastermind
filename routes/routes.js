const colorService = require('../services/colorService')
const colors = new colorService();

const router = (app) => {
  app.get("/solution", (req, res) => {
    const solution = colors.getSolution(8);
    res.status(200).send(solution);
  });
}

module.exports = router;
