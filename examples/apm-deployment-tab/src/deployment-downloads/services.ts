export interface Deployment {
  downloads: number;
}

export interface Service {
  deployments: { [index: string]: Deployment };
  description: string;
  name: string;
}

export const services: { [index: string]: Service } = {
  "dd-sdk-ios": {
    deployments: {
      "0.9.3": {
        downloads: 5_000,
      },
      "0.9.2": {
        downloads: 10_000,
      },
      "0.9.1": {
        downloads: 2_500,
      },
      "0.9.0": {
        downloads: 1_250,
      },
    },
    description: "Datadog SDK for iOS - Swift and Objective-C.",
    name: "Datadog SDK for iOS",
  },
  "dd-sdk-swift-testing": {
    deployments: {
      "0.9.3": {
        downloads: 2_000,
      },
      "0.9.2": {
        downloads: 1_000,
      },
      "0.9.1": {
        downloads: 12_500,
      },
      "0.9.0": {
        downloads: 250,
      },
    },
    description: "Datadog Test Instrumentation framework for Swift / ObjC",
    name: "Datadog SDK for Swift testing",
  },
};
