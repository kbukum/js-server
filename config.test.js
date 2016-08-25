require("babel-register");
const ConfigTest = require("./config/config.test").default;
module.exports = new ConfigTest();