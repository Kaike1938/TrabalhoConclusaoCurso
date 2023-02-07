import { useEffect, useState } from "react";
import { Container, Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Usuarios() {
  const [data, setData] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(5);
  const [queryNome, setQueryNome] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [tipoPesquisa, setTipoPesquisa] = useState("email");
  const [total, setTotal] = useState(1);
  const baseURL = "https://db3k2c.sse.codesandbox.io";
  useEffect(() => {
    const fetchData = async () => {
      let finalURL = `${baseURL}/api/usuarios?_page=${pagina}&_limit=${limite}`;
      if (tipoPesquisa === "nome" && queryNome && queryNome.length >= 3)
        finalURL += `&usu_nome_like=${queryNome}`;
      if (tipoPesquisa === "email" && queryEmail && queryEmail.length >= 3)
        finalURL += `&usu_email_like=${queryEmail}`;
      try {
        const page = await fetch(finalURL);
        if (page.status !== 200) throw new Error("Erro de consulta");
        const pageData = await page.json();
        setData(pageData);
        const _total = parseInt(await page.headers.get("x-total-count"), 10);
        setTotal(_total);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, [pagina, limite, queryNome, queryEmail]);
  return (
    <Container class="usuariocaixa">
      Gestão de Usuários
      {tipoPesquisa === "nome" && (
        <div>
          Nome:{" "}
          <input
            value={queryNome}
            onChange={(e) => setQueryNome(e.target.value)}
          />
        </div>
      )}
      {tipoPesquisa === "email" && (
        <div>
          E-mail:{" "}
          <input
            value={queryEmail}
            onChange={(e) => setQueryEmail(e.target.value)}
            class="usuariospesq"
          />
        </div>
      )}
      <br />
      <Table striped bordered hover>
        <thead class="usutable">
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((usuario) => {
              return (
                <tr key={usuario.id} class="usutable">
                  <td>{usuario.id}</td>
                  <td>{usuario.usu_nome}</td>
                  <td>{usuario.usu_email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={(e) => setPagina(1)} />
        <Pagination.Prev
          onClick={(e) => setPagina((prev) => parseInt(prev, 10) - 1)}
        />

        {Array.from({ length: Math.ceil(total / limite) }, (v, k) => k + 1).map(
          (page) => {
            return (
              <Pagination.Item
                active={page === pagina}
                onClick={(e) => setPagina(page)}
              >
                {page}
              </Pagination.Item>
            );
          }
        )}

        <Pagination.Next
          onClick={(e) => setPagina((prev) => parseInt(prev, 10) + 1)}
        />
        <Pagination.Last
          onClick={(e) => setPagina(Math.ceil(total / limite))}
          href="#"
          _msthash="2258295"
        />
      </Pagination>
      <center>
        <Link to="/site" class="botaologin">
          voltar
        </Link>
      </center>
    </Container> //
  );
}
