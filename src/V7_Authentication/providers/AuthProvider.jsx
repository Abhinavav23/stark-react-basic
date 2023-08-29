import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hooks
export const useAuth = () => {
  return useContext(AuthContext);
};

/* function test1(){
    return 100
}

function test(){
    return test1()
}

test() */
