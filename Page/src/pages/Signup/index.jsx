import logo from "../../images/regimg.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { object, string, ref } from "yup";

export default function Signup() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [contraSenha, setContraSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let baseURL = "https://il3tuv.sse.codesandbox.io/api/usuarios";

    const usuario = {
      usu_nome: nomeCompleto.trim(),
      usu_email: email,
      usu_senha: senha,
      usu_contrasenha: contraSenha
    };

    let usuarioSchema = object({
      usu_nome: string()
        .required("entre com o nome")
        .min(7, "O nome tem que ter pelo menos 7 caracteres")
        .matches(/\s/, "o nome tem que ter pelo menos um espaço"),
      usu_email: string()
        .email("Entre com um e-mail valido")
        .required("Entre com um e-mail"),

      usu_senha: string()
        .min(6, "A senha deve ter no minimo 6 digitos")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          "Um maiusculo, um minusculo, um numero e um caracter"
        ),
      usu_contrasenha: string()
        .required("Entre com contra senha")
        .oneOf(
          [ref("usu_senha"), null],
          "Senha e contra senha precisam ser iguais"
        )
    });

    try {
      await usuarioSchema.validate(usuario);
    } catch (error) {
      alert(error.message);
      return false;
    }
    let myInitRequest = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(usuario)
    };

    const page = await fetch(baseURL, myInitRequest);
    if (parseInt(page.status, 10) !== 201) throw new Error("system error");
    const data = await page.json();
    if (data.length === 0) throw new Error("system error");
    //console
    alert("Cadastro efetuado com sucesso");
    setNomeCompleto("");
    setEmail("");
    setSenha("");
    setContraSenha("");
    navigate("/", { replace: true });
  };
  return (
    <div class="Menu-caixa">
      <div class="Lesquerdo">
        <div class="subtitulo">
          <h2>Entre hoje mesmo para o OnChess</h2>
          <h2>Faça parte da nossa equipe</h2>
        </div>
        <img src={logo} alt="logo" />
      </div>

      <div class="Ldireito">
        <div class="caixa-login">
          <h1>Cadastre-se</h1>
          <div class="input-login">
            Nome Completo
            <input
              placeholder="Nome Completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </div>
          <div class="input-login">
            Email
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="input-login">
            Senha
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div class="input-login">
            Conta senha
            <input
              type="password"
              placeholder="Contra Senha"
              value={contraSenha}
              onChange={(e) => setContraSenha(e.target.value)}
            />
          </div>
          <br />
          <br />

          <button
            class="botaologin"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Cadastrar
          </button>

          <Link class="botaologin" to="/" type="reset">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
