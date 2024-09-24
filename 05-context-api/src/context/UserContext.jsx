import { createContext, useState } from "react";
export const UserContext = createContext();



export const UserProvider = ({ children }) => {

  const [user, setUser] = useState("Jesse Hall");
  const data = {user}

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}



