const { RESPONSE_CODE_ENUM } = require("../lib/enum");
const productService = require("../service/product-service");
const url = require("url");
const validate = require("../validation");
const { createProductValidation } = require("../validation/product-validation");

const getProducts = async (req, res, next) => {
  try {
    const query = url.parse(req.url, true)?.query;
    const result = await productService.get(query);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const insertProducts = async (req, res, next) => {
  try {
    const payload = validate(createProductValidation, req.body);
    const result = await productService.insert(payload);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = { getProducts, insertProducts };
