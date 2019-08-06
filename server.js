const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`)
})
