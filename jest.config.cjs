/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,ts,jsx,tsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^lucide-react/dynamic$": "<rootDir>/src/__mocks__/lucide-react.ts",
    "^lucide-react$": "<rootDir>/src/__mocks__/lucide-react.ts",
    "^react-router$": "<rootDir>/src/__mocks__/react-router.tsx"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(lucide-react|.*\\.mjs$))"
  ]
};

module.exports = config;