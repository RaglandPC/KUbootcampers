const express = require("express");
var db = require("./models");

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
