import React from "react";

import { Service } from "./services";

export interface VersionInformationProps {
  service: Service;
  version?: string;
}

export const VersionInformation: React.FunctionComponent<VersionInformationProps> =
  (props) => {
    const version = props.version;
    if (!version) {
      return <></>;
    }

    const deployment = props.service.deployments[version];
    if (!deployment) {
      return (
        <p>
          No download information for version <code>{version}</code>
        </p>
      );
    }

    return (
      <p>
        Version <code>{version}</code> was downloaded {deployment.downloads}{" "}
        times.
      </p>
    );
  };
