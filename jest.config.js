module.exports = {
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/setupEnzyme.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  modulePaths: ["<rootDir>/__mocks__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  verbose: true,
};
