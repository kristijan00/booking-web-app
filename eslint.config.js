import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "semi": ["error", "always"],
      "jsx-quotes": ["error", "prefer-double"],
      "quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
      "comma-dangle": ["error", "always-multiline"],
      "brace-style": "error",
      "indent": ["error", 2, {"SwitchCase": 1}],
      "keyword-spacing": "error",
      "func-call-spacing": ["error", "never"],
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "warn",
      "react-hooks/exhaustive-deps": "off"
    },
  },
)
