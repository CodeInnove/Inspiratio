// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const angular = require("@angular-eslint/eslint-plugin");

module.exports = [
  // Configuração para arquivos TypeScript (.ts)
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/stylistic",
      "plugin:@angular-eslint/recommended",
    ],
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },

  // Configuração para Prettier com TypeScript e JavaScript
  {
    files: ["*.ts", "*.js"], // Aplica o Prettier a arquivos .ts e .js
    plugins: ["prettier"],
    extends: ["plugin:prettier/recommended"], // Extende o Prettier
    rules: {
      "prettier/prettier": ["error"], // Exibe erros de formatação do Prettier como erros no ESLint
    },
  },

  // Configuração para arquivos HTML
  {
    files: ["**/*.html"],
    extends: [
      "plugin:@angular-eslint/template/recommended",
      "plugin:@angular-eslint/template/accessibility",
    ],
    rules: {},
  },
];
