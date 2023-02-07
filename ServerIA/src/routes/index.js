const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const routes = new Router();
routes.put("/api/*", (req, res) => {
  return res.status(400).json({ error: "method not allowed" });
});
routes.get("/api/db", (req, res) => {
  return res.status(404).json({ error: "route not found" });
});

routes.post("/api/auth", UsuarioController.auth);
routes.post("/api/usuarios", UsuarioController.store);
routes.patch("/api/usuarios/:id", UsuarioController.update);

module.exports = routes;
