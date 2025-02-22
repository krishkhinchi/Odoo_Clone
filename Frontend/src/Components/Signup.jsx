import React, { useState } from "react";
import axios from "axios";
import "../Style/Signup.css";
import Footer from "./Footer";
import arrow from "../img/arrow.png";
import logo from "../img/odoo_logo.webp";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Signup() {
  const Navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");


  const handleBackToLogin=()=>{
      document.title = "Odoo - Login";
      Navigate('/Login')
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);
    const Data = {
      email,
      name,
      password,
      confirmPassword
    };
  
    try{
      const response = await axios.post("http://localhost:5000/Signup", Data);
      if(response.status===200){
        if (showToast) {
          toast(response.data.message, { autoClose: 3000 });
        } 
        if(response.data.message==="User Created Successfully"){
          document.title = "Odoo - Home";
          Navigate("/");
       }
      }
    }
    catch(err){
      toast(err);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div id="Signup">
        <div id="imgs1InSignup">
          <img
            className="arrow1InSignup"
            onClick={() => Navigate("/Login")}
            src={arrow}
            alt="arrow"
          />
          <img className="odoologo3InSignup" src={logo} alt="logo" />
        </div>
        <div id="infoSignup">
          <h1>Access and manage your instances from <br/> this Odoo account.</h1>
        </div>
        <div id="inputInSignup">
          <h1 className="EmailInSignup">Your Email: </h1>
          <input className="int1InSignup" value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="" />
          <h1 className="NameInSignup">Your Name: </h1>
          <input className="int2InSignup" value={name} onChange={(e) => setName(e.target.value)} type="Name" placeholder="    e.g. Krish Khinchi" />
          <h1 className="PasswordInSignup">Password: </h1>
          <input className="int1InSignup" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" />
          <h1 className="CPInSignup">Confirm Password: </h1>
          <input className="int2InSignup" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="" />
          <div id="onSignup">
            <button id="btn4InSignup" type="submit" onClick={handleSubmit}>SIGN UP</button>
          </div>
          <button className="haveAcc" onClick={handleBackToLogin}>I already have an account</button>
        </div>
      </div>
    </form>
    <ToastContainer/>
    <div id="footerInSignup">
      <Footer/>
    </div>
    </>
  );
}