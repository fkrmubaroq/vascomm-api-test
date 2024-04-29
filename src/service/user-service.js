const User = require("../sequelize/models/user");
const { Op } = require("sequelize");
const { RESPONSE_CODE_ENUM, STATUS_FIELD } = require("../lib/enum");
const { ResponseError } = require("../error/response-error");

const login = async (payload) => {};

const get = async (query) => {
  const { take, skip, search } = query;

  const filters = {
    offset: +skip || 0,
    where: {},
    order: [["id", "DESC"]],
  };

   if (take) {
     filters.limit = take;
   }
  if (search) {
    filters.where.full_name = {
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
    where: { email: payload.email },
  });
  if (data?.email) {
    throw new ResponseError(
      RESPONSE_CODE_ENUM.BadRequest,
      `email already exist`
    );
  }
  if (data?.telp) {
    throw new ResponseError(
      RESPONSE_CODE_ENUM.BadRequest,
      `phone already exist`
    );
  }
  const result = await User.create(payload, {
    fields: ["email", "telp", "full_name", "password", "role"],
    attributes: { exclude: ["password"] },
  });

  return {
    code: RESPONSE_CODE_ENUM.Inserted,
    message: "successfully added",
    data: result,
  };
};

const update = async (id, payload) => {
  const findEmail = await User.findOne({
    where: {
     telp: payload.telp
    },
  });
  const findTelp = await User.findOne({
    where: {
     telp: payload.telp
    },
  });

  if (findEmail?.email) {
    throw new ResponseError(
      RESPONSE_CODE_ENUM.BadRequest,
      "email already exist"
    );
  }
  if (findTelp?.telp) {
    throw new ResponseError(
      RESPONSE_CODE_ENUM.BadRequest,
      "phone already exist"
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
