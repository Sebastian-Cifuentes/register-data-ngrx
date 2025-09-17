// module.exports = {
//   preset: 'jest-preset-angular',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
//   transform: {
//     '^.+\\.(ts|mjs|html|js)$': [
//       'jest-preset-angular',
//       {
//         tsconfig: '<rootDir>/tsconfig.spec.json',
//         stringifyContentPathRegex: '\\.(html|svg)$',
//       },
//     ],
//     '^.+\\.(css|scss|sass|less)$': 'jest-transform-stub'
//   },
//   moduleFileExtensions: ['ts', 'html', 'js', 'json'],
//   testMatch: ['**/+(*.)+(spec).+(ts)'],
//   collectCoverage: true,
//   coverageReporters: ['html', 'text', 'lcov'],
//   moduleNameMapper: {
//     '^primeng/.*\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
//     '^primeng/resources/.*': '<rootDir>/__mocks__/styleMock.js',
//     '\\.(css|scss|sass|less)$': 'identity-obj-proxy'
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!.*\\.mjs$)',
//     '.*\\.css$'
//   ]
// };
module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|mjs|html|js)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  moduleNameMapper: {
    // 👇 Completely mock PrimeNG CSS
    '^primeng/.*\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^primeng/resources/.*': '<rootDir>/__mocks__/styleMock.js',

    // 👇 Mock all other styles too
    '\\.(css|scss|sass|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)',
    '.*\\.css$',
  ]  
};