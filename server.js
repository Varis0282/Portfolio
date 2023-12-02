const express = require('express');
const app = express();
require('dotenv').config();
const dbconfig = require('./dbconfig');
const port = process.env.PORT || 5000 ;
const path = require('path');

require('./Models/user-model');
require('./Models/portfolio-model');

app.use(express.json());
app.use(require('./Routes/portfolioRoutes'));

// deployment config
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/front-end/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "front-end", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log('App listening on port '+ port);
});
