import React, { useContext } from "react";
import { ButtonContext } from "../BtContext";

const Footer = () => {
  const { btw, setBtw } = useContext(ButtonContext);

  return(
  <> 
    <button onClick={() => setBtw("hello")}>{btw}</button>
  </>
  )
};

export default Footer;
