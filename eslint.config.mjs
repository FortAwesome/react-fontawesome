import eslint from '@eslint/js'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettierConfigRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const config = tseslint.config(
  { ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.eslintRecommended,
      ...tseslint.configs.recommendedTypeChecked,
      eslintPluginImport.flatConfigs.recommended,
      eslintPluginImport.flatConfigs.react,
      eslintPluginImport.flatConfigs.typescript,
      eslintPluginJest.configs['flat/recommended'],
      eslintPluginJsxA11y.flatConfigs.recommended,
      eslintPluginPrettierConfigRecommended,
      eslintPluginReact.configs.flat.recommended,
      eslintPluginReactHooks.configs['recommended-latest'],
      eslintPluginTestingLibrary.configs['flat/react'],
      eslintPluginUnicorn.configs.all,
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-nested-ternary': 'error',

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],

          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],

          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
        },
      ],
    },
  },
)

export default config
