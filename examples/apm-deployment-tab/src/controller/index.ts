import { init } from "@datadog/ui-apps-sdk";

export default function setup() {
  init({ debug: true });

  const root = document.getElementById("root");
  if (!root) {
    return;
  }

  root.innerHTML = `
    <div>
      The application controller is running in the background.
    </div>
  `;
}
