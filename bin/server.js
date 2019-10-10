const app = require("../src/app");
const port = process.env.PORT || "80";

app.server.listen(port, () => {
  console.log(`Server stated on port ${port}`);
});
