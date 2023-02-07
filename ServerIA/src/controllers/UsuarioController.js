const { apiEndpoints } = require("../api/index");
class UsuarioController {
  async auth(req, res, next) {
    const { user, password } = req.body;

    let usuario = await apiEndpoints.db
      .get("usuarios")
      .find({ usu_email: user })
      .cloneDeep()
      .value();
    console.log(usuario);
    if (!usuario) return res.status(400).json({ Error: "Wrong user/password" });

    if (usuario.usu_senha !== password)
      return res.status(400).json({ Error: "Wrong user/password" });

    delete usuario.usu_senha;
    delete usuario.usu_emailkey;
    delete usuario.usu_emailcheck_at;
    delete usuario.usu_cadastroativo;
    delete usuario.cidade_id;

    return res.status(200).json(usuario);
  }
  async store(req, res, next) {
    req.body = {
      ...req.body,
      id: 1,
      usu_nome: "",
      usu_email: "",
      usu_senha: "",
      usu_cadastroativo: true,
      usu_telefone: "",
      usu_cpf: "",
      usu_nivel: "comum",
      created_at: "",
      update_at: ""
    };
    next();
  }
  async update(req, res, next) {
    req.body = { ...req.body, created_at: new Date(), updated_at: "" };
    next();
  }
}

module.exports = new UsuarioController();
