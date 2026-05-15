const { defineConfig } = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const eslintConfigPrettier = require('eslint-config-prettier');
const { fixupPluginRules } = require('@eslint/compat');

const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {}
    },

    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'react-hooks': fixupPluginRules(reactHooks)
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/display-name': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node
      },

      sourceType: 'script',
      parserOptions: {}
    },

    files: ['**/.eslintrc.{js,cjs}', 'eslint.config.cjs'],

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'off'
    }
  },
  eslintConfigPrettier
]);
