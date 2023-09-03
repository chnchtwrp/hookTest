import React, { useContext } from "react";
import { ButtonContext } from "../BtContext";

const Footer = () => {
  const { btw, setBtw } = useContext(ButtonContext);

  return (
    <>
      <div className="footer">
        <button onClick={() => setBtw("hello")}>{btw}</button>
      </div>
    </>
  );
};

export default Footer;
