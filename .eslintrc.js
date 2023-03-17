module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'prettier', 'eslint:recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	globals: {
		React: true,
		google: true,
		mount: true,
		mountWithRouter: true,
		shallow: true,
		shallowWithRouter: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		// note you must disable the base rule as it can report incorrect errors
		'no-use-before-define': 'off',
		'no-unused-vars': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
