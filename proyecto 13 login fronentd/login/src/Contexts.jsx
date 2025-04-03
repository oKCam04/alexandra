import { createContext, useState } from "react";

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <AppContext.Provider value={{ userEmail, setUserEmail, userPassword, setUserPassword }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
