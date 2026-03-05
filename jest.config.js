import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/app/**',
    '!src/**/stories.tsx',
    '!src/lib/registry.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
}

module.exports = createJestConfig(customJestConfig)
