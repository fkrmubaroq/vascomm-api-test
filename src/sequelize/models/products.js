"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Product = sequelize.define("products", {
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
  
}, {
  timestamps:false
});
module.exports = Product;
