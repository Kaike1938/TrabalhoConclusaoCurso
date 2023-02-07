import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const signIn = async ({ user, password }) => {
    let baseURL = "https://il3tuv.sse.codesandbox.io";
    let myInitRequest = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user, password })
    };
    const page = await fetch(`${baseURL}/api/auth`, myInitRequest);
    if (parseInt(page.status, 10) !== 200) throw new Error("system error");
    const data = await page.json();
    if (data.length === 0) throw new Error("system error");
    setUser(data);
    // setUser({ id: 1, usu_nome: user });
  };

  const signOut = () => {
    setUser({});
  };

  return (
    <>
      <AuthContext.Provider value={{ user, signIn, signOut }}>
        {/* {user?.id ? "logado" : "não logado"}
        <button onClick={signIn}>Entrar</button>
        <button onClick={signOut}>Sair</button> */}
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("useAuth must by used within AuthProvider");
  return authContext;
}
