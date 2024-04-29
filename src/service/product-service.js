const Product = require("../sequelize/models/products");
const { Op } = require("sequelize");
const { RESPONSE_CODE_ENUM, STATUS_FIELD } = require("../lib/enum");
const { ResponseError } = require("../error/response-error");
const fs = require("fs");
const path = require("path");
async function unlinkFile(src) {
  return new Promise((resolve) => {
    const filePath = path.resolve("public/uploads", src);
    fs.access(filePath, async (err) => {
      if (err) {
        resolve(false);
        return;
      }
      await fs.promises.unlink(filePath);
      resolve(true);
    });
  });
}

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
    fields: ["product_name", "price", "image"],
  });

  return {
    code: RESPONSE_CODE_ENUM.Inserted,
    message: "successfully added",
    data: result,
  };
};

const update = async (id, payload) => {
  const prevData = await Product.findOne({ where: { id } });
  if (prevData.image && payload.image) {
    await unlinkFile(prevData.image);
  }
  await Product.update(payload, {
    where: { id },
  });

  const data = await Product.findOne({ where: { id } });

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully update",
    data,
  };
};

const softDelete = async (id) => {
  const data = await Product.findOne({ where: { id } });
  if (data.is_active === STATUS_FIELD.Inactive) {
    throw new ResponseError(400, "already soft deleted");
  }
  await Product.update(
    { is_active: "0" },
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
  await Product.update(
    { is_active: "1" },
    {
      where: { id },
    }
  );
  const data = await Product.findOne({ where: { id } });

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully restored",
    data,
  };
};

const destroy = async (id) => {
  const prevData = await Product.findOne({ where: { id } });

  if (prevData.image) {
    await unlinkFile(prevData.image);
  }
  const result = await Product.destroy({
    where: { id },
  });

  return {
    code: RESPONSE_CODE_ENUM.Ok,
    message: "successfully deleted",
    data: result,
  };
};
module.exports = { get, insert, update, destroy, softDelete, restore };
