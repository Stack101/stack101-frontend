module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      arrays: 'never',
      functions: 'never',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
    }],
	  'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'semi': ['error', 'always'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true,
      },
    }
  ],
};
