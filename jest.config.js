/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {

  clearMocks: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: 'coverage'

}
