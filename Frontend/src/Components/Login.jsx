import React from "react";
import { useState } from "react";
import "../Style/Login.css";
import arrow from "../img/arrow.png"
import logo from "../img/odoo_logo.webp";

import { useNavigate } from "react-router-dom";

export default function Login() {
const Navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleSubmit(){
  Navigate("/home");
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div id="login">
        <div id="imgs1">
          <img className="arrow1" onClick={()=>Navigate("/")} src={arrow} alt="arrow" />
          <img className="odoologo2" src={logo} alt="logo" />
        </div>
        <div id="infoLogin">
          <h1>Access and manage your instances from <br/> this Odoo account.</h1>
        </div>
        <div id="input">
          <h3 className="email">Email: </h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="int1InLogin" type="email" placeholder="    Email" />
          <div id="pw">
            <label className="password">Password: </label>
            <button className="btn3InLogin">Reset Password</button>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="int2InLogin" type="password" placeholder="    Password" />
          </div>
          <div id="signin">
            <button id="btn4">SIGN IN</button>
          </div>
          <button className="notAcc" onClick={()=>Navigate("/Signup")}>Don't have an account?</button>
        </div>
      </div>
    </form>
    </>
  );
}
