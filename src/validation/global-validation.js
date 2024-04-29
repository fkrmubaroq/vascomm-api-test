const Joi = require("joi");
const { DEFAULT_SKIP } = require("../lib/constant");

const queryParamValidation = Joi.object({
  take: Joi.number().positive().optional(),
  skip: Joi.number().positive().optional().default(DEFAULT_SKIP),
  search: Joi.string().optional(),
});

module.exports = {
  queryParamValidation,
};
