const Product = require("../sequelize/models/products");
const { Op } = require("sequelize");
const { RESPONSE_CODE_ENUM } = require("../lib/enum");

const get = async (query) => {
  const { take, skip, search } = query

  const filters = {
    limit: take && take > 50 ? 50 : +take || 20,
    offset: +skip || 0,
    where: {},
  };

  if (search) {
    filters.where.product_name = {
      [Op.substring]: search,
    };
  }

  const results = await Product.findAll(filters);
  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "ok",
    data: results,
  };
};

const insert = async (payload) => {
  const result = await Product.create(payload, {
    fields: ["product_name", "price", "image"]
  });

  return {
    code: RESPONSE_CODE_ENUM.Inserted,
    message: "successfully added",
    data: result
  }
};
module.exports = { get, insert} ;