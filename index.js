require('dotenv').config() 
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT;

async function startServer() {
  require('./loaders').init(app)

  app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
  })
}

startServer()

/*if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});*/
