module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier", "react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    quotes: ["error", "backtick"],
    "react/jsx-sort-props": ["error"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
