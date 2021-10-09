/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  coverageReporters: ['json-summary', 'lcov'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest"
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    }
  },
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
  },
  rootDir: "src",
  testRegex: ".*\\.test\\.ts$",
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node"
}
