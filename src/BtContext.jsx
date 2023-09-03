import React from "react";
import { createContext, useState } from "react";

export const ButtonContext = createContext();
export const UserContext = createContext(null);

// export const UserContext = createContext(null);

export const BtContext = ({ children }) => {
  const [btw, setBtw] = useState("hello");

  return (
    <ButtonContext.Provider value={{ btw, setBtw }}>
      {/* {props.children} */}
      {children}
    </ButtonContext.Provider>
  );
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: false });

  const userLogin = ({ username }) => {
    setUser((user) => ({ ...user, name: username, auth: true }));
    console.log(user);
  };

  const userLogout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  const contextValue = {
    user,
    userLogin,
    userLogout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
