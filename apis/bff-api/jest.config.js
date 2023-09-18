const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    transform: {
        '^.+.(t|j)sx?$': ['@swc/jest'],
    },
    clearMocks: true,
    coverageProvider: 'v8',
    collectCoverage: false,
    collectCoverageFrom: [],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    testEnvironment: 'node',
    testMatch: [],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
    }),
};
