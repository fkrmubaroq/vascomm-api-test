"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  generateData(total) {
    const data = [];
    for (let i = 1; i < total; i++) {
      data.push({
        product_name: faker.lorem.words(3),
        image: faker.image.url(),
        price: faker.number.int({ min: 12000, max: 1000000 }),
        is_active: 1
      });
    }
    return data;
  },
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", this.generateData(50), {});
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.bulkDelete("products", null, {});
  },
};
