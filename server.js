const express = require("express");
var db = require("./models");

const app = express();
app.use(express.static('public'))

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require("path");

  app.get("/classes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/classes.html"));
  });
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/profile.html"));
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

  app.post("/user/create", function(req, res) {
    console.log(req.body);
    let user = {
      profile_picture_url: req.body.profile_picture_url,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email:req.body.email,
      phone_number:req.body.phone_number,
      bio:req.body.bio,
    };

    // respond with something( don't know what to do here)
   });

const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
