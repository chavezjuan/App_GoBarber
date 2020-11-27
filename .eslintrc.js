module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    // eslint-disable-next-line quote-props
    camelcase: "off",
    // eslint-disable-next-line quote-props
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
