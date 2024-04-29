"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0,
    },
    is_active: {
      type: DataTypes.ENUM("1", "0"),
      defaultValue: "1",
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    timestamps: false,
  }
);
module.exports = Product;
