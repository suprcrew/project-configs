module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupFilesAfterEnv": [
    "jest-extended"
  ],
  "testRegex": "((\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "testPathIgnorePatterns": [
    "systemTests"
  ],
  "rootDir": "../../../../../",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": -10
    }
  },
  "globals": {
    "ts-jest": {
      "tsconfig": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "module": "commonjs",
        "declaration": true,
        "target": "es6",
        "downlevelIteration": true,
        "outDir": "./lib"
      }
    }
  }
};
