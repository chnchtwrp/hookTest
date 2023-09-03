import React, { useContext } from "react";
import { ButtonContext, UserContext } from "../../BtContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { btw, setBtw } = useContext(ButtonContext);
  const { user, userLogout } = useContext(UserContext);
  const { name, auth } = user;

  return (
    <>
      <nav>
        <div className="navBar">
          {auth ? (
            <img src="/logout.png" width="100px;" height="100px;" />
          ) : (
            <>
              <button onClick={() => setBtw("world")}>{btw}</button>
              <a href="/login">Login</a>
            </>
          )}

          {/* <div className="links">
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
          </div> */}
          {/* <button>top</button> */}

          {/* <div className="links">
            <h1>{name}</h1>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
