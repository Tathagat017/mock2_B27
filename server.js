const jsonServer = require("json-server");
const server = jsonServer.create();
const router = server.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);
server.use("", router);
server.listen(process.env.PORT || 3000, () => {
  console.log("server listening on port ");
});
