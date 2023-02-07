/**
 *
 */
//importar a bliblioteca de servidor
const express = require("express");
const { server: api } = require("./src/api/index");
const routes = require("./src/routes/index");
const cors = require("cors");
//criando o servidor
const app = express();
const PORT = process.env.PORT || 8080;
//criando uma rota no endereço base
app.get("/", function (req, res) {
  //res.send("BACKEND - Servidor Turma B Savant" + new Date().toISOString());
  res.sendFile("/sandbox/public/index.html");
});
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/api", api);

//criando uma rota no endereço base
// app.get("/alternativa", function (req, res) {
//   res.send("Rota Alternativa");
// });
//iniciar o servidor "ouvindo a porta 8080"
app.listen(PORT, (error) => {
  if (error) console.log(" 😒 Erro de Servidor");
  console.info(" 😁 Servidor funcionando \n\n", new Date().toISOString());
});

/**
 * Problema 1: quanto a porta
 * Problema 2: testar uma rota alternativa
 */

// const express = require("express");
// const app = express();
// const { server: api } = require("./src/api/index");
// const cors = require("cors");
// const routes = require("./src/routes/index");
// const PORT = process.env.PORT || 8080;

// app.get("/", function (req, res) {
//   res.send("ETEC - Turma B - 12/04/2022");
// });

// app.get("/alternativa", function (req, res) {
//   res.send("Rota Alternativa");
// });
// app.use(express.json());
// app.use(cors());
// app.use(routes);
// app.use("/api", api);

// app.listen(PORT, (error) => {
//   if (error) console.info("😭 Servidor com erro🗿");
//   else console.info("🦆👌👌 Servidor funcionando👌");
// });
