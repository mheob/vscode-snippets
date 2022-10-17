/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	root: true,
	extends: ['@mheob/eslint-config'],
	rules: {
		'unicorn/no-array-reduce': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-object-from-entries': 'off',
	},
};
