(async () => {
  try {
    const App = require("./app").default;
    const app = new App();
    app.listen();
  } catch (err: any) {
    console.error(
      "Something went wrong when initializing the server:\n",
      err.stack
    );
  }
})();
