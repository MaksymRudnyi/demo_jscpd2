module.exports = {
  env: {
    browser: true,
    es6: true,
		jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Rx: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
		"no-shadow": "warn",
		"no-console": "warn",
		"no-plusplus": "warn",
		"consistent-return": "warn",
		"no-unused-expressions": "warn",
		"import/prefer-default-export": "off",
		"import/no-extraneous-dependencies": "off",
		"max-len": [ "warn", { "code": 120 } ],
		"array-bracket-spacing": [ "warn", "always" ],
		"prefer-const": "warn",
		"no-underscore-dangle": "warn",
		"no-use-before-define": "warn",
  },
};
