import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
