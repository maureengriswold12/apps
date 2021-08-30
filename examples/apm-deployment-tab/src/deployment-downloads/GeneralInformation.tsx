import React from "react";

import { Service } from "./services";

export interface GeneralInformationProps {
  service: Service;
}

export const GeneralInformation: React.FunctionComponent<GeneralInformationProps> =
  (props) => {
    return (
      <header>
        <h3>{props.service.name}</h3>
        <p>{props.service.description}</p>
      </header>
    );
  };
