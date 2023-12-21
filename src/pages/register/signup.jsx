import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import"./style2.css"
function Signup() {
    const[email, setemail]= useState();
    const[password, setpassword]= useState();
    const[uasername, setusername]= useState();
    const handlesignup =()=>
    alert("signup in succefull")

  return (
    <div className="form-container">
    <form className="signup-form">
      <img src={process.env.PUBLIC_URL + 'https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?size=626&ext=jpg&ga=GA1.1.1175997183.1699068191&semt=ais'} alt="Signup Image" className="form-img" />
      <h2>Signup</h2>
      <input type="text" placeholder="Username" required onChange={(e)=>{setusername(e.target.value)}}/>
      <input type="email" placeholder="Email" required onChange={(e)=>{setemail(e.target.value)}}/>
      <input type="password" placeholder="Password" required onChange={(e)=>{setpassword(e.target.value)}}/>
      <button type="submit" onClick={()=>{handlesignup()}}>signup</button>
     <p> already have an account <Link to="/login">Login </Link></p>
    </form>
  </div>
  )
}

export default Signup
