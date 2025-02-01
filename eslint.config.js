import globals from "globals";
import pluginJs from "@eslint/js";
import jest from 'eslint-plugin-jest';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    plugins: { jest },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      semi: "error"
      // You can override or add specific rules here
    }
  }
];
