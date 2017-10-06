module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'plugins': [
    'vue', 'html'
  ],
  'extends': [
    'eslint:recommended',
    'vue'
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
  "rules": {
    "no-empty": [
      2,
      {
        "allowEmptyCatch": true
      }
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "no-multiple-empty-lines": 2,
    "one-var": [
      2,
      {
        "uninitialized": "always",
        "initialized": "never"
      }
    ],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "space-unary-ops": [
      2,
      {
        "words": false,
        "nonwords": false
      }
    ],
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-function-paren": [
      2,
      "never"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "no-spaced-func": 2,
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "no-trailing-spaces": 2,
    "no-var": 2,
    "camelcase": 0,
    "comma-style": [
      2,
      "last"
    ],
    "curly": [
      2,
      "all"
    ],
    "dot-notation": 2,
    "object-shorthand": 2,
    "operator-linebreak": [
      2,
      "after"
    ],
    "arrow-parens": 0,
    "semi": [
      2,
      "always"
    ],
    "space-infix-ops": 2,
    "keyword-spacing": [
      2,
      {
        "overrides": {
          "else": {
            "before": true
          },
          "while": {
            "before": true
          },
          "catch": {
            "before": true
          }
        }
      }
    ],
    "spaced-comment": [
      2,
      "always"
    ],
    "space-before-blocks": [
      2,
      "always"
    ],
    "array-bracket-spacing": [
      2,
      "always"
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true
      }
    ]
  }
};
