const jsdoc = require("eslint-plugin-jsdoc");

module.exports = [
  {
    files: ["**/*.js"],
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error"
    }
  }
];