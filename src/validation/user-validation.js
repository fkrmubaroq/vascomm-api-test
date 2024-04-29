const Joi = require("joi");
const { USER_RULE_ENUM } = require("../lib/enum");

const createUserValidation = Joi.object({
  email: Joi.string().max(255).required(),
  telp: Joi.string().max(20).required(),
  full_name: Joi.string().max(255).required(),
  password: Joi.string().max(255).default("123"),
  role: Joi.string()
    .valid(USER_RULE_ENUM.Admin, USER_RULE_ENUM.User)
    .default(USER_RULE_ENUM.User),
});

const updateUserValidation = Joi.object({
  email: Joi.string().max(255).optional(),
  telp: Joi.string().max(20).optional(),
  full_name: Joi.string().max(255).optional(),
  password: Joi.string().max(255).optional(),
  role: Joi.string()
    .valid(USER_RULE_ENUM.Admin, USER_RULE_ENUM.User)
    .optional(),
});

const userIdValidation = Joi.number().max(255).positive().required();

const loginUserValidation = Joi.object({
  email_telp: Joi.string().max(255).required(),
  password: Joi.string().max(255).required(),
});
module.exports = {
  loginUserValidation,
  createUserValidation,
  updateUserValidation,
  userIdValidation,
};
