module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  bail: 0,
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}', '!.**/node_modules/**'],
  coverageReporters: ['text', 'lcov'],
  setupFilesAfterEnv: ['./jestDomImport.js'],
  rootDir: '.',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|mov|webm|wav|mp3|m4a|aac|oga|zip)$':
      '<rootDir>/imageMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^app(.*)$': '<rootDir>/src$1',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
}
