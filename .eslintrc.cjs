module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react", "react-refresh", "prettier"],
  rules: {
    "consistent-return": "warn",
    "import/no-cycle": "warn",
    "react/no-array-index-key": "warn",
    "react/no-unstable-nested-components": "warn",
    "react/jsx-no-bind": "warn",
    "react/jsx-props-no-spreading": "warn",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
    quotes: ["error", "double"],
    "react/no-unused-state": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-unused-expressions": "error",
    "react/prop-types": "warn",
    "import/order": "error",
    complexity: "error",
    eqeqeq: "error",
    "react/jsx-no-target-blank": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
      },
    ],
  },
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
};
