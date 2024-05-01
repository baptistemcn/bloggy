const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["index.ts"],
};

module.exports = createJestConfig(customJestConfig);
