import type { Config } from 'jest';

const config: Config = {
  preset: "react-native",
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};

export default config;
