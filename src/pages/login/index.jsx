import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import"./style.css"
function Login() {
    const[email, setemail]= useState();
    const[password, setpassword]= useState();
    const handlelogin =()=>
    alert("Log in succefull")

  return (
    <div className="form-container">
    <form className="login-form">
      <img src={process.env.PUBLIC_URL + 'https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?size=626&ext=jpg&ga=GA1.1.1175997183.1699068191&semt=ais'} alt="Login Image" className="form-img" />
      <h2>Login</h2>
      <input type="email" placeholder="Email" required onChange={(e)=>{setemail(e.target.value)}}/>
      <input type="password" placeholder="Password" required onChange={(e)=>{setpassword(e.target.value)}}/>
      <button type="submit" onClick={()=>{handlelogin()}}>Login</button>
     <div> Not have an account<Link to="/register">Signup </Link></div>
    </form>
  </div>
  )
}

export default Login
