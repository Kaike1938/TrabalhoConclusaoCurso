import xadrez from "../../images/logimg.png";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";
import "../../global.css";
export default function Signin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/site";

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await signIn({ user, password });
      navigate(from, { replace: true });
    } catch (error) {
      console.log("Erro de login");
      setUser("");
      setPassword("");
    }
  };
  const handleLimpar = (evt) => {
    evt.preventDefault();
    setUser("");
    setPassword("");
  };
  return (
    <div class="Menu-caixa">
      <div class="Lesquerdo">
        <div class="subtitulo">
          <h2>Faça login</h2>
          <h2>E desafie tudo e todos</h2>
        </div>
        <img src={xadrez} alt="logo" />
      </div>
      <div class="Ldireito">
        <div class="caixa-login">
          <h1>Login</h1>
          <div class="input-login">
            <h5>usuário</h5>

            <input
              value={user}
              onChange={(evt) => setUser(evt.target.value)}
              placeholder="Usuário"
            />
          </div>
          <div class="input-login">
            <h5>senha</h5>
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>
          <br />
          <br />
          <button class="botaologin" onClick={handleSubmit}>
            Acessar
          </button>
          <button class="botaologin" onClick={handleLimpar}>
            Limpar
          </button>
          <Link to="/signup" class="botaologin">
            cadastrar-se
          </Link>
        </div>
      </div>
    </div>
  );
}
