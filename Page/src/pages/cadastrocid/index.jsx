import logo from "../../images/2torres.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { object, string, ref } from "yup";

export default function Cidades() {
  const [cidade, setcidNome] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let baseURL = "https://il3tuv.sse.codesandbox.io/api/cidades";

    const usuario = {
      cid_nome: cidade,
      cid_estado: estado
    };

    let usuarioSchema = object({
      cid_nome: string().required("entre com o nome da Cidade"),

      cid_estado: string().required("Entre com o Estado")
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
  };
  return (
    <div class="reg-tela">
      <div class="imga">
        <img src={logo} alt="logo" />
      </div>
      <center>
        <div class="caixa-de-reg">
          <h2>Entre hoje mesmo para o MyChess ♜</h2>

          <form>
            <div class="usu">
              Cidades
              <input
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setcidNome(e.target.value)}
              />
              Estados
              <select
                id="estado"
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="">Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </div>
            <div class="botao">
              <div class="botao1">
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                  Cadastrar
                </button>
              </div>
              <div class="botao2">
                <Link to="/" class="linko" type="reset">
                  Voltar
                </Link>
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}
