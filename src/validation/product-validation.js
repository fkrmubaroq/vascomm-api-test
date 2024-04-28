const Joi = require("joi");

const createProductValidation = Joi.object({
  product_name: Joi.string().max(255).required(),
  image: Joi.string().max(255).optional(),
  price: Joi.number().positive().default(0),
});

const updateProductValidation = Joi.object({
  product_name: Joi.string().max(255).optional(),
  image: Joi.string().max(255).optional(),
  price: Joi.number().positive().optional(),
});

const productIdValidation = Joi.number().max(255).positive().required();

module.exports = {
  createProductValidation,
  updateProductValidation,
  productIdValidation,
};

