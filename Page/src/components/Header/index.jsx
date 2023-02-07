import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";
import torres from "../../images/capa.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <Navbar variant="dark" style={{ backgroundColor: "rgb(0,0,0,0.5)" }}>
      <Container>
        <Navbar.Brand>
          <img src={torres} alt="logotipo" width="100" className="me-3" />
          OnChess
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/site">
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/usuarios">
              usuários
            </Nav.Link>
            <Nav.Link as={Link} to="/sobremim">
              sobre
            </Nav.Link>
          </Nav>
          <Nav>
            {user?.id ? (
              <>
                <Navbar.Brand>Olá, {user.usu_nome}</Navbar.Brand>
                <button onClick={signOut}>Sair</button>
              </>
            ) : (
              <button onClick={() => navigate("/signin")}>Entrar</button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
