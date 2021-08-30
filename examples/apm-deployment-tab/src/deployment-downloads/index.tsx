import {
  APMDeploymentTabContext,
  init,
  UiAppEventType,
} from "@datadog/ui-apps-sdk";
import "milligram";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";

import "./../index.css";

import { services } from "./services";
import { NoService } from "./NoService";
import { GeneralInformation } from "./GeneralInformation";
import { VersionInformation } from "./VersionInformation";

const client = init({ debug: true });

function DeploymentDownloads() {
  const [context, setContext] = useState<APMDeploymentTabContext>();

  useEffect(() => {
    client.getContext().then((context) => {
      setContext(context.apmDeploymentTab);
    });

    const unsubscribeContextChange = client.events.on(
      UiAppEventType.CONTEXT_CHANGE,
      (context) => {
        setContext(context.apmDeploymentTab);
      }
    );

    return () => {
      unsubscribeContextChange();
    };
  }, [setContext]);

  if (!context) {
    return <NoService />;
  }

  const name = context.service;
  const service = services[name];
  if (!service) {
    return <NoService name={name} />;
  }

  return (
    <>
      <GeneralInformation service={service} />
      <hr />
      <VersionInformation service={service} version={context.mainVersion} />
      <VersionInformation service={service} version={context.targetVersion} />
    </>
  );
}

export default function render() {
  ReactDOM.render(
    <React.StrictMode>{<DeploymentDownloads />}</React.StrictMode>,
    document.getElementById("root")
  );
}
