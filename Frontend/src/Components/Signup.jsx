import React from "react";
import "../Style/Signup.css";
import arrow from "../img/arrow.png";
// import Login from "../Components/Login";
import logo from "../img/odoo_logo.webp";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const Navigate = useNavigate();
  return (
    <>
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
          <input className="int1InSignup" type="Email" placeholder="" />
          <h1 className="NameInSignup">Your Name: </h1>
          <input className="int2InSignup" type="Name" placeholder="    e.g. Krish Khinchi" />
          <h1 className="PasswordInSignup">Password: </h1>
          <input className="int1InSignup" type="password" placeholder="" />
          <h1 className="CPInSignup">Confirm Password: </h1>
          <input className="int2InSignup" type="Email" placeholder="" />
          <div id="onSignup">
            <button id="btn4InSignup">SIGN UP</button>
          </div>
          <button className="haveAcc" onClick={()=>Navigate("/Login")}>I already have an account</button>
        </div>
      </div>
    </>
  );
}