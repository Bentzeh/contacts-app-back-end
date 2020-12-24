/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
	extends: [
		'prettier',
		// 'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	plugins: ['prettier'],
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		// "no-shadow": "warn",
		// "@typescript-eslint/explicit-member-accessibility": "off",
		// "@typescript-eslint/explicit-function-return-type": "off",
		// "@typescript-eslint/indent": "off",
		// "@typescript-eslint/no-explicit-any": "off",
		// "@typescript-eslint/no-non-null-assertion": "off",
		// "@typescript-eslint/camelcase": "off",
		// "@typescript-eslint/array-type": "off",
		// "@typescript-eslint/no-object-literal-type-assertion": "off"
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: { 'prettier/prettier': ['warn', prettierOptions] },
		},
	],
};

/*

eslint.json
{
	"extends": ["prettier", "plugin:@typescript-eslint/recommended"],
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": ["error"]
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2020,
		"sourceType": "module"
	}
}



*/
