"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    email_telp: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("ADM", "USR"),
      defaultValue: "USR",
      allowNull: false,
    },
    is_active: {
      type: DataTypes.ENUM("1", "0"),
      defaultValue: "1",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = User;
