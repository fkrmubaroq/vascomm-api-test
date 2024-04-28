const { RESPONSE_CODE_ENUM, STATUS_FIELD } = require("../lib/enum");
const productService = require("../service/product-service");
const url = require("url");
const validate = require("../validation");
const { createProductValidation, updateProductValidation, productIdValidation } = require("../validation/product-validation");
const { queryParamValidation } = require("../validation/global-validation");

const getProducts = async (req, res, next) => {
  try {
    const query = validate(queryParamValidation, url.parse(req.url, true)?.query);

    const result = await productService.get({ ...query, is_active: STATUS_FIELD.Active });
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const getTrashProducts = async (req, res, next) => {
  try {
    const query = url.parse(req.url, true)?.query;

    const result = await productService.get({ ...query, is_active: STATUS_FIELD.Inactive });
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const insertProduct = async (req, res, next) => {
  try {
    const payload = validate(createProductValidation, req.body);
    const result = await productService.insert(payload);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = validate(updateProductValidation, req.body);
    const result = await productService.update(id,payload);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const softDeleteProduct = async (req, res, next) => {
  try {
    const id = validate(productIdValidation, +req.params.id);
    const result = await productService.softDelete(id);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const id = validate(productIdValidation, +req.params.id);
    const result = await productService.destroy(id);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

const restoreProduct = async (req, res, next) => {
  try {
    const id = validate(productIdValidation, +req.params.id);
    const result = await productService.restore(id);
    res.status(RESPONSE_CODE_ENUM.Ok).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getProducts,
  getTrashProducts,
  insertProduct,
  updateProduct,
  deleteProduct,
  restoreProduct,
  softDeleteProduct,
};
