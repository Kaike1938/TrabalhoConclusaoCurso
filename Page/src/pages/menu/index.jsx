import logo from "../../images/imgmen.png";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div class="Menu-caixa">
      <div class="Lesquerdo">
        <br />

        <div class="subtitulo">
          <h2>Venha fazer parte do OnChess</h2>
          <h2>e desafie à todos</h2>
        </div>
        <div class="Lesquerdo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div class="Ldireito">
        <div class="caixa-login">
          <h2>Bem-Vindo Ao OnChess</h2>
          <Link to="/signin" class="botaologin">
            logar
          </Link>

          <Link to="/signup" class="botaologin">
            Cadastrar-se
          </Link>
        </div>
      </div>
    </div>
  );
}
