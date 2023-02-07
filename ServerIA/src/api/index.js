const { create, defaults, router } = require("json-server");
const path = require("path");

const server = create();
const apiEndpoints = router(
  path.join(__dirname, "..", "..", "data", "db.json")
);

const middLewars = defaults();

server.use(middLewars);
server.use(apiEndpoints);

module.exports = { server, apiEndpoints };
