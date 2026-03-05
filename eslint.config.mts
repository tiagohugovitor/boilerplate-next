// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import configPrettier from "eslint-config-prettier";
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [{
  files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  languageOptions: {
    globals: { ...globals.browser, ...globals.node }
  }
}, js.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended, ...compat.extends('next/core-web-vitals'), configPrettier, {
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/explcit-module-boundary-types': 'off'
  }
}, ...storybook.configs["flat/recommended"]];
