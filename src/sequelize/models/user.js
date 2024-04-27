"use strict";
const { Model } = require("sequelize");


const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    email_telp: {
      type: Sequelize.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM("ADM", "USR"),
      defaultValue: "USR",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = User;

