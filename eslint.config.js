import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
		},
		plugins: { '@typescript-eslint': tseslint },
		rules: {
			// 룰 직접 입력
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
];
