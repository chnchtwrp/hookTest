import React, { useContext, useState } from "react";
import { UserContext } from "../../BtContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
    console.log(name);
  };

  const handleSubmit = (e, name) => {
    userLogin(name);
    navigate("/logout");
  };
  return (
    <>
      <h1>Login</h1>
      <div>
        {/* <form onSubmit={handleSubmit}> */}
        <label htmlFor="username">Username : </label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <button onClick={(e) => handleSubmit(e, name)}>Login</button>
        {/* </form> */}
      </div>
    </>
  );
};

export default Login;
