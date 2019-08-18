const path = require('path');

module.exports = {
  roots: ['./src'],
  testEnvironment: 'node',
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    '**/__tests__/*+(spec|test).[jt]s?(x)'
  ],
  moduleNameMapper: {
    '@shared/(.*)': path.resolve('./src/shared/$1')
  }
};
