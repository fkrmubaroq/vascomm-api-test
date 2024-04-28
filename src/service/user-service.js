const User = require("../sequelize/models/user");
const { Op } = require("sequelize");
const { RESPONSE_CODE_ENUM, STATUS_FIELD } = require("../lib/enum");
const { ResponseError } = require("../error/response-error");

const login = async (payload) => {};

const get = async (query) => {
  const { take, skip, search, is_active } = query;

  const filters = {
    limit: take && take > 50 ? 50 : +take || 20,
    offset: +skip || 0,
    where: { is_active },
  };

  if (search) {
    filters.where.email_telp = {
      [Op.substring]: search,
    };
  }

  const results = await User.findAll({
    ...filters,
    attributes: { exclude: ["password"] },
  });
  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "ok",
    data: results,
  };
};

const insert = async (payload) => {
  const data = await User.findOne({
    where: { email_telp: payload.email_telp },
  });
  if (data?.email_telp) {
    throw new ResponseError(
      RESPONSE_CODE_ENUM.BadRequest,
      "email or phone already exist"
    );
  }

  const result = await User.create(payload, {
    fields: ["email_telp", "password", "role"],
  });

  return {
    code: RESPONSE_CODE_ENUM.Inserted,
    message: "successfully added",
    data: result,
  };
};

const update = async (id, payload) => {
  const findUser = await User.findOne({
    where: { email_telp: payload.email_telp },
  });

  if (findUser?.email_telp) {
    throw new ResponseError(
      RESPONSE_CODE_ENUM.BadRequest,
      "email or phone already exist"
    );
  }

  await User.update(payload, {
    where: { id },
  });

  const data = await User.findOne({ where: { id } });

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully update",
    data,
  };
};

const softDelete = async (id) => {
  const data = await User.findOne({ where: { id } });
  if (data.is_active === STATUS_FIELD.Inactive) {
    throw new ResponseError(400, "already soft deleted");
  }
  await User.update(
    { is_active: STATUS_FIELD.Inactive },
    {
      where: { id },
    }
  );

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully soft deleted",
    data,
  };
};

const restore = async (id) => {
  await User.update(
    { is_active: STATUS_FIELD.Active },
    {
      where: { id },
    }
  );
  const data = await User.findOne({ where: { id } });

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully restored",
    data,
  };
};

const destroy = async (id) => {
  const result = await User.destroy({
    where: { id },
  });

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully deleted",
    data: result,
  };
};
module.exports = { login, get, insert, update, destroy, softDelete, restore };
