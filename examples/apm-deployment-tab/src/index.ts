const init = async () => {
  switch (window.location.pathname) {
    case "/deployment-downloads": {
      let deploymentDownloads = await import("./deployment-downloads");
      return deploymentDownloads.default();
    }

    default: {
      let controller = await import("./controller");
      return controller.default();
    }
  }
};

init();
export {};
