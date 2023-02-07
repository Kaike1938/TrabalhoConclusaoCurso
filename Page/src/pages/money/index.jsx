import { Link } from "react-router-dom";
import capa from "../../images/capa.png";
export default function Sobre() {
  return (
    <div>
      <center>
        <h1>Apoia o Projeto</h1>
      </center>

      <center>
        <h3>
          NOSSO PROJETO DE IA DE CODE NOME SAVANT APOIA NOSSO PROJETO PARA
          AVANCAR E MELHORA CADA DIA MAIS{" "}
        </h3>
      </center>
      <div>
        <b>
          <left>Chave_pix:</left>
        </b>
      </div>
      <center>
        <img src={capa} alt="capa da impresa" class="sobre2" />
      </center>
      <div>
        <center>
          <Link to="/site" class="botaologin">
            voltar
          </Link>
        </center>
      </div>
    </div>
  );
}
