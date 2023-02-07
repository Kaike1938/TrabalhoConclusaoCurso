import logo from "../../images/telimg.png";
import { useAuth } from "../../context/Auth/index";
import { Link, useNavigate } from "react-router-dom";
import "../../global.css";
export default function Tela1() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div class="Menu-caixa">
      <div class="Lesquerdo">
        <div class="subtitulo">
          <h2>Bem-Vindo Ao OnChess</h2>
          <h2>Vamos Jogar?</h2>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div class="Ldireito">
        <div class="caixa-login">
          <h2>Escolha o modo de jogo</h2>
          <Link to="/sobremim" class="botaologin">
            Sobre Nos
          </Link>

          <Link to="/ContraAmigo" class="botaologin">
            Jogo VS Amigo
          </Link>

          <Link to="/TelaGame" class="botaologin">
            Jogo VS Savant
          </Link>
          <Link to="/usuarios" class="botaologin">
            usuários
          </Link>
          <br />

          {user?.id ? (
            <button class="botaologin" onClick={signOut}>
              Sair
            </button>
          ) : (
            <button class="botaologin" onClick={() => navigate("/signin")}>
              Entrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
