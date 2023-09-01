import React from "react";
import { createContext, useState } from "react";

export const ButtonContext = createContext();

const BtContext = (props) => {
  const [btw, setBtw] = useState("hello");

  return (
    <ButtonContext.Provider value={{ btw, setBtw }}>
      {props.children}
    </ButtonContext.Provider>
  );
};

export default BtContext;
