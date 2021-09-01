const init = async () => {
  switch (window.location.pathname) {
    case "/github-user": {
      let githubUser = await import("./github-user");
      return githubUser.default();
    }
    default: {
      let controller = await import("./controller");
      return controller.default();
    }
  }
};

init();
export {};
