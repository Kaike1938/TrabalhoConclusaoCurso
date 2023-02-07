import Tela from "../../IA";
import Header from "../../components/Header/index";
import { Link } from "react-router-dom";

import "../../global.css";
export default function Main() {
  return (
    <>
      <Header />
      <center>
        <h1>SAVANT</h1>
      </center>
      <Tela />
      <center>
        <div>
          <Link to="/site" class="botaologin">
            voltar
          </Link>
        </div>
      </center>
    </>
  );
}
