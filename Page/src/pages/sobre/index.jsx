import { Link } from "react-router-dom";
import capa from "../../images/capa.png";
export default function Sobre() {
  return (
    <div>
      <div>
        <div>
          <table
            style={{
              width: "100%",
              height: "70vh",
              color: "white"
            }}
          >
            <tr
              style={{
                height: "40px",
                textAlign: "center",
                fontWeight: "bold",
                border: "solid"
              }}
            >
              <td style={{ width: "50%" }} class="sobre">
                LOGO
              </td>

              <td style={{ width: "50%", textAlign: "center" }} class="sobre">
                SOBRE NOS{" "}
              </td>
            </tr>
            <tr style={{ height: "70vh", border: "solid" }}>
              <td style={{ width: "50%", textAlign: "center" }}>
                <img src={capa} alt="capa da impresa" class="sobre2" />
              </td>
              <td class="sobre">
                <center>
                  <h1>OnChess</h1>
                </center>
                <b>NOME:</b>
                <i>Dream4Codes </i>
                <br />
                <b>DATA :</b>
                <i> 15/02/2022 </i>
                <br />
                <b>CURSO: </b>
                <i>ETIM INFORMÁTICA PARA INTERNET </i>
                <br />
                <b>SÉRIE: </b>
                <u>3 ANO</u>
                <br />

                <b>DADOS DA EMPRESA </b>
                <br />
                <b>EMAIL:</b>
                <t>Dream4Codes@GMAIL.COM</t>
                <br />
                <b>TELEFONE:</b>
                <b>(18) 4578-9989</b>
                <br />
                <b>FINALIDADE: </b>
                <br />

                <p style={{ height: "10%" }}>
                  Desenvolver uma inteligencia Artificial para Xadrez baseada em
                  rede neural sendo feita a partir de analise posicional.
                  <br />
                  <b>DESENVOLVEDORES: </b>
                  Gabriel Rosário Santos, Kaike Soares Neto, Kaique Demarqui e
                  Matheus Rufino Silva Santos.
                </p>
              </td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td colSpan={2}>DESENVOLVIDO PELO DREAM4CODES v.CS_1.6 </td>
            </tr>
          </table>
        </div>
        <center>
          <Link to="/site" class="botaologin">
            voltar
          </Link>
        </center>
      </div>
    </div>
  );
}
