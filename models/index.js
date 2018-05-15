const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const db = {};
const env = process.env.NODE_ENV || "development";
const sequelizeConfig = require(path.resolve(`${__dirname}/\config.json`))[env];

const ORM = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  sequelizeConfig
);

db.User = ORM.import(path.join(__dirname, "users.js"));
db.Session = ORM.import(path.join(__dirname, "sessions.js"));

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = ORM;
db.Sequelize = Sequelize;

module.exports = db;
