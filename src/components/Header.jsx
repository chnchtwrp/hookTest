import React, { useContext } from "react";
import { ButtonContext } from "../BtContext";

const Header = () => {
  const {btw,setBtw} = useContext(ButtonContext);

  return (
    <>
      <button onClick={()=> setBtw("world")}>{btw}</button>
      {/* <button>top</button> */}
    </>
  );
};

export default Header;
