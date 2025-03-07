import React, { useState } from "react";
import axios from "axios";
import '../Style/Addbusiness.css';
import Footer from "./Footer";
import arrow from "../img/arrow.png";
import logo from "../img/odoo_logo.webp";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Addbusiness() {
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
      const response = await axios.post("http://localhost:5000/Business", Data);
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
      <div id="Addbusiness">
        <div id="imgs1InAddbusiness">
          <img
            className="arrow1InAddbusiness"
            onClick={() => Navigate("/")}
            src={arrow}
            alt="arrow"
          />
          <img className="odoologo3InAddbusiness" src={logo} alt="logo" />
        </div>
        <div id="infoAddbusiness">
          <h1>Access and manage your instances from <br/> this Odoo account.</h1>
        </div>
        <div id="inputInAddbusiness">
          <h1 className="NameInAddbusiness">Business Name: </h1>
          <input className="int1InAddbusiness" value={name} onChange={(e) => setName(e.target.value)} type="Name" placeholder="" />
          <h1 className="EmailInAddbusiness">Business Email: </h1>
          <input className="int2InAddbusiness" value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="" />
          <h1 className="PasswordInAddbusiness">Password: </h1>
          <input className="int1InAddbusiness" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" />
          <h1 className="CPInAddbusiness">Confirm Password: </h1>
          <input className="int2InAddbusiness" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="" />
          <div id="onAddbusiness">
            <button id="btn4InAddbusiness" type="submit" onClick={handleSubmit}>ADD BUSINESS</button>
          </div>
        </div>
      </div>
    </form>
    <ToastContainer/>
    <div id="footerInAddbusiness">
      <Footer/>
    </div>
    </>
  );
}