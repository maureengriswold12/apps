import { APMTraceTabContext, init, UiAppEventType } from "@datadog/ui-apps-sdk";
import "milligram";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";

import "./../index.css";

import { GitHubUser } from "./GitHubUser";
import { NoUser } from "./NoUser";

interface Metadata {
  [key: string]: string;
}

interface User {
  avatar_url: string;
  html_url: string;
  login: string;
}

const makeURI = (email: string): string => {
  const params = new URLSearchParams();
  params.set("q", `${email} in:email`);

  return `https://api.github.com/search/users?${params}`;
};

const client = init({ debug: true });

const App = () => {
  const [context, setContext] = useState<APMTraceTabContext>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    client.getContext().then((context) => {
      setContext(context.apmTraceTab);
    });

    const unsubscribeContextChange = client.events.on(
      UiAppEventType.CONTEXT_CHANGE,
      (context) => {
        setContext(context.apmTraceTab);
      }
    );

    return () => {
      unsubscribeContextChange();
    };
  }, [setContext]);

  useEffect(() => {
    const meta = context?.meta as Metadata;
    const email = meta?.["git.commit.committer.email"];
    if (!email) {
      setUser(undefined);
      return;
    }

    const controller = new AbortController();
    fetch(makeURI(email), {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then((body) => {
        const newUser = body.items[0];
        setUser(newUser);
      });

    return () => {
      controller.abort();
    };
  }, [context]);

  if (!user) {
    return <NoUser />;
  }

  return <GitHubUser {...user} />;
};

export default function render() {
  ReactDOM.render(
    <React.StrictMode>{<App />}</React.StrictMode>,
    document.getElementById("root")
  );
}
