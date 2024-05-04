const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "index.ts",
    "config",
    "queries",
    "repositories",
    "providers",
  ],
  moduleNameMapper: {
    "@/queries/(.*)": "<rootDir>/queries/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
