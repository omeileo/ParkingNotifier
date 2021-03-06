module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "env": {
        "jest": true
    },

    "plugins": [
        "flowtype-errors",
        "react"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            "arrowFunctions": true,
            "jsx": true
        }
    },

    "rules": {
        "array-bracket-spacing": "error",
        "arrow-spacing": "error",
        "brace-style": "error",
        "camelcase": "off",
        "consistent-return": "warn",
        "curly": "warn",
        "generator-star-spacing": "warn",
        "indent": "error",
        "no-var": "error", 
        "no-empty": "error",
        "no-unused-vars": "error",
        "semi": "error"
    },

    "globals": {
        "fetch": true
    }
};