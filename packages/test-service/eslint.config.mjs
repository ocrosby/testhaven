import config from "eslint-config-standard";

export default {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  rules: {
    // your rules here
  },
  overrides: [
    {
      files: ["*.js", "*.mjs"],
      ...config,
    },
  ],
};