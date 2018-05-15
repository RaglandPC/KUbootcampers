"use strict";

module.exports = (Sequelize, DataTypes) => {
  const Session = Sequelize.define("Session", {
    name: {
      type: DataTypes.STRING
    }
  });

  Session.associate = models => {
    Session.belongsToMany(models.User, {
      through: "UserSession",
      onDelete: "CASCADE"
    });
  };

  return Session;
};
