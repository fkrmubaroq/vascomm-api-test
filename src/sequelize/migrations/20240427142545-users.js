"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("users", {
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
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
