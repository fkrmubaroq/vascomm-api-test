const { RESPONSE_CODE_ENUM } = require("../lib/enum");

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  res
    .status(err?.status || RESPONSE_CODE_ENUM.BadRequest)
    .json({
      code: RESPONSE_CODE_ENUM.BadRequest,
      errors: err.message || err || "error",
    })
    .end();
  
};

module.exports = { errorMiddleware };
