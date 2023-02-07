import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";
import Menu from "./pages/menu/index";
import Tela from "./pages/tela/index";
import RequireAuth from "./components/RequireAuth/index";
import Sobre from "./pages/sobre/index";
import Money from "./pages/money/index";
import ContraAmigo from "./pages/TelaGame/friend";
import Cidades from "./pages/cadastrocid/index";
import Usuarios from "./pages/Usuarios/index";
import CarregaTabuleiro from "./pages/CarregaTabuleiro/index";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/cadcid" element={<Cidades />} />
        <Route path="/" element={<Menu />} />
        <Route path="/site" element={<RequireAuth element={<Tela />} />} />
        {/* <Route path="/site" element={<Tela1 />} /> */}
        <Route path="/telagame" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/usuarios"
          element={<RequireAuth element={<Usuarios />} />}
        />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/site" element={<Tela1 />} /> */}
        <Route path="/sobremim" element={<Sobre />} />
        <Route path="/money" element={<Money />} />
        <Route path="/contraamigo" element={<ContraAmigo />} />
        <Route path="/tabuleiro" element={<CarregaTabuleiro />} />
      </Routes>
    </>
  );
}
