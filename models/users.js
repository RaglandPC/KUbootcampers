"use strict";

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-z0-9\_\-]+$/i
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_picture_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = models => {
    User.belongsToMany(models.Session, {
      through: "UserSession",
      onDelete: "CASCADE"
    });
  };
  return User;
};
