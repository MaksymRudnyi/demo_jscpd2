.eslintc

{
  "env": {
    "browser": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "rules": {
    "newline-before-return": "warn",
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
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/display-name": "warn",
    "react/prop-types": "error",
    "react/no-unused-prop-types": "error",
    "react/require-default-props": "error",
    "react/destructuring-assignment": "warn"
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],
  "overrides": [
    {
      "files": ["*.spec.js"],
      "rules": {
        "import/no-unresolved": "warn",
        "import/named": "warn",
        "padding-line-between-statements": [
          "error",
          {
            "blankLine": "always",
            "prev": ["const", "let", "var"],
            "next": ["expression"]
          },
          {
            "blankLine": "always",
            "prev": ["multiline-expression"],
            "next": ["multiline-expression"]
          }
        ]
      }
    }
  ]
}




.eslintignore

build
static
public
node
