import Amigo from "../../Amigo";
import logo from "../../images/2torres.png";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
export default function ContraAmigo() {
  return (
    <div>
      <Header />
      <center>
        <div>
          <center>
            <h1>JOGAR COM UM AMIGO</h1>
          </center>
          <Amigo />
        </div>
      </center>
      <center>
        <div>
          <Link to="/site" class="botaologin">
            voltar
          </Link>
        </div>
      </center>
    </div>
  );
}
