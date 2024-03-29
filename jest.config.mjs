import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    /* react: 'next/dist/compiled/react/cjs/react.development.js', */
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironmentOptions: {},
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
