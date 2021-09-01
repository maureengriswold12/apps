import "milligram";
import React from "react";
import "typeface-roboto";

import "./github-user.css";

export interface GitHubUserProps {
  avatar_url: string;
  html_url: string;
  login: string;
}

export const GitHubUser = (props: GitHubUserProps) => {
  return (
    <div className="github-user-container">
      <img alt="avatar" src={props.avatar_url} width={50} />
      This span is associated with&nbsp;
      <a href={props.html_url}>{props.login}</a>.
    </div>
  );
};
