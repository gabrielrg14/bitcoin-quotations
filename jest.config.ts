import type { Config } from "jest"

const config: Config = {
  preset: "react-native",
  setupFilesAfterEnv: ["./jest-setup.ts"],
  modulePathIgnorePatterns: ["mocks"],
  transformIgnorePatterns: [
    "./node_modules/(?!(@react-native|react-native|react-native-chart-kit/dist)/)",
  ],
}

export default config
