import React from "react";

export interface NoServiceProps {
  name?: string;
}

export const NoService: React.FunctionComponent<NoServiceProps> = (props) => {
  return (
    <header>
      {props.name && <h3>{props.name}</h3>}
      <p>No information available.</p>
    </header>
  );
};
