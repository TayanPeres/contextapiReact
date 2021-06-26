import React, { useEffect, useState } from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
  });

  useEffect(() => {
      //buscar do meu localStoragr o user
    const userStorage = localStorage.getItem("user")
     //se tiver o user
    if (userStorage) {
     //
      setUser(JSON.parse(userStorage))
    } else {
     // se n existe, passe.
      setUser({
        name: "",
      });
    }
  }, []);

  return (
      
    <AuthContext.Provider value={{ user, setUser }}>
        //aplicaçao react
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
