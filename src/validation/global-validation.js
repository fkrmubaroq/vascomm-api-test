const Joi = require("joi");
const { DEFAULT_TAKE, DEFAULT_SKIP } = require("../lib/constant");

const queryParamValidation = Joi.object({
  take: Joi.number().positive().optional().default(DEFAULT_TAKE),
  skip: Joi.number().positive().optional().default(DEFAULT_SKIP),
  search: Joi.string().optional(),
});

module.exports = {
  queryParamValidation,
};
