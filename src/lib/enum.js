const RESPONSE_CODE_ENUM = {
  Ok: 200,
  Inserted: 201,
  BadRequest: 400,
  Unauthorized: 401,
}

const STATUS_FIELD = {
  Active: "1",
  Inactive: "0",
}

const USER_RULE_ENUM = {
  Admin: "ADM",
  User: "USR",
}

module.exports = { RESPONSE_CODE_ENUM, USER_RULE_ENUM, STATUS_FIELD };