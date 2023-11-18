/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
  },
};
