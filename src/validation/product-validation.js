const Joi = require("joi");

const createProductValidation = Joi.object({
  product_name: Joi.string().max(255).required(),
  image: Joi.string().max(255).optional(),
  price: Joi.number().positive().default(0),
});

const getContactValidation = Joi.number().positive().required();

const updateContactValidateion = Joi.object({
  id: Joi.number().positive().required(),
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).optional(),
  email: Joi.string().max(200).optional(),
  phone: Joi.string().max(20).optional(),
});

const searchContactValidation = Joi.object({
  page: Joi.number().min(1).positive().default(1),
  size: Joi.number().min(1).positive().max(100).default(10),
  name: Joi.string().optional(),
  email: Joi.string().optional(),
  phone: Joi.string().optional(),
});

module.exports = {
  createProductValidation,
  getContactValidation,
  searchContactValidation,
  updateContactValidateion
};

