
require("dotenv/config");
const web = require("./config/web.js");

web.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})