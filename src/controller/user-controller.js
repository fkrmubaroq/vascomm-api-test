const { RESPONSE_CODE_ENUM, STATUS_FIELD } = require("../lib/enum");
const userService = require("../service/user-service");
const url = require("url");
const validate = require("../validation");
const {
  createUserValidation,
  updateUserValidation,
  userIdValidation,
  loginUserValidation,
} = require("../validation/user-validation");
const { queryParamValidation } = require("../validation/global-validation");

const login = async (req, res, next) => {
  try {
    const payload = validate(loginUserValidation, req.body);
    const result = await userService.login(payload);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const query = validate(
      queryParamValidation,
      url.parse(req.url, true)?.query
    );

    const result = await userService.get({
      ...query,
      is_active: STATUS_FIELD.Active,
    });
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const getTrashUser = async (req, res, next) => {
  try {
    const query = url.parse(req.url, true)?.query;

    const result = await userService.get({
      ...query,
      is_active: STATUS_FIELD.Inactive,
    });
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const insertUser = async (req, res, next) => {
  try {
    const payload = validate(createUserValidation, req.body);

    const result = await userService.insert(payload);

    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = validate(updateUserValidation, req.body);
    const result = await userService.update(id, payload);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const softDeleteUser = async (req, res, next) => {
  try {
    const id = validate(userIdValidation, +req.params.id);
    const result = await userService.softDelete(id);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    console.log(e)
    next(e);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = validate(userIdValidation, +req.params.id);
    const result = await userService.destroy(id);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const restoreUser = async (req, res, next) => {
  try {
    const id = validate(userIdValidation, +req.params.id);
    const result = await userService.restore(id);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
  getUsers,
  getTrashUser,
  insertUser,
  updateUser,
  softDeleteUser,
  restoreUser,
  deleteUser,
};
