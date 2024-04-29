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
        email: faker.internet.email(),
        telp: faker.number.int({ min: 1000000000, max: 9999999999 }),
        full_name: faker.person.fullName(),
        password,
        role: i === total-1 ? "ADM" : "USR",
        is_active: 1,
        created_at: faker.date.between({ from: "2024-01-01", to: "2024-12-31" }),
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
