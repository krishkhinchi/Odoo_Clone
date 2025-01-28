import React from "react";
import "../Style/Login.css";
import logo from "../img/odoo_logo.webp";

export default function Login() {
  return (
    <>
      <div id="login">
        <img className="odoologo" src={logo} alt="logo" />
        <div id="info">
          <h1>Access and manage your instances from this Odoo account.</h1>
        </div>
        <div id="input">
          <h3 className="email">Email: </h3>
          <input className="int1" type="email" placeholder="Email" />
          <div id="pw">
            <label className="password">Password: </label>
            <button className="btn1">Reset Password</button>
            <input className="int2" type="password" placeholder="Password" />
          </div>
          <div id="signin">
            <button id="btn2">SIGN IN</button>
          </div>
          <h3 className="notAcc">Don't have an account?</h3>
        </div>
      </div>
    </>
  );
}
