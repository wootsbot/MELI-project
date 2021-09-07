module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/pages/_*.js',
    '!coverage/**',
    '!src/.next/**',
    '!<rootDir>/next.config.js',
    '!<rootDir>/config/',
    '!<rootDir>/mocks/',
    '!<rootDir>/src/utils/seo.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/.next',
    '<rootDir>/node_modules/',
    '<rootDir>/next.config.js',
    '<rootDir>/coverage/',
    '<rootDir>/config/',
    '<rootDir>/mocks/',
    '<rootDir>/src/utils/seo.js',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/config/jest/style-mock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/config/jest/file-mock.js`,
    // Handle module aliases
    '^@design-system/(.*)$': '<rootDir>/src/@design-system/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-dom-extend-expect.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
