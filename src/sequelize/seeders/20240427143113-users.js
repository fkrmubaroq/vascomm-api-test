'use strict';
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async generateData(total) {
    const data = [];
    const password = await bcrypt.hash("123", 10);
    for (let i = 1; i < total; i++) {
      data.push({
        email_telp: i % 2 === 0 ? faker.internet.email() : faker.phone.number(),
        password,
        role: i === total-1 ? "ADM" : "USR",
      });
    }
    return data;
  },
  async up(queryInterface, Sequelize) {
    const data = await this.generateData(50);
    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
