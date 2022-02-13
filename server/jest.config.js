const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper,
  testEnvironment: "node",
};

// module.exports = {
//   preset: "ts-jest",
//   verbose: true,
//   forceExit: true,
//   resetModules: false,
//   testEnvironment: "node",
//   testPathIgnorePatterns: ["./node_modules/", "./tests/", "./build/"],
//   moduleFileExtensions: ["js", "json", "ts", "tsx"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testMatch: ["**/*.test.ts", "**/*.test.js"],
//   globals: {
//     "ts-jest": {
//       tsConfig: "tsconfig.json",
//       diagnostics: {
//         warnOnly: true,
//       },
//     },
//   },
//   setupFilesAfterEnv: ["./test/setup.ts"],
//   coveragePathIgnorePatterns: ["./tests/"],
// };
