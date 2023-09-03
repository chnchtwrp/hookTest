import React, { useContext } from 'react'
import { UserContext } from '../../BtContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const {userLogout} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    // e.preventDefault();
    userLogout();
    navigate("/login");
  };

  return (
    <>
    <h1>Login Success...</h1>
    <button onClick={(e)=> handleLogout(e)}>Logout</button>
    </>
  )
}

export default Logout;