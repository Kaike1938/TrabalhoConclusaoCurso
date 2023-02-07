import { Outlet } from "react-router-dom";
import Header from "../Header/index";
export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
