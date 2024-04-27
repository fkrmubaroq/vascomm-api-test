"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      price: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
