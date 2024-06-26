/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	displayName: 'unit test',
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRunner: 'jest-circus/runner',
	testMatch: ['<rootDir>/tests/**/*.test.ts'],
	setupFilesAfterEnv: ['jest-extended/all'],
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tests/tsconfig.json'
		}
	}
};

export default config;
