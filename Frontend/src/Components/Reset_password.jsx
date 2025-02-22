import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import "../Style/Reset_password.css";
import arrow from "../img/arrow.png";
import logo from "../img/odoo_logo.webp";
import { useNavigate } from "react-router-dom";

export default function Reset_password() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleBackToLogin = () => {
    document.title = "Odoo - Login";
    Navigate("/Login");
  };

  return (
    <>
      <form>
        <div id="Reset_password">
          <div id="imgs1InResetPassword">
            <img
              className="arrow1InResetPassword"
              onClick={handleBackToLogin}
              src={arrow}
              alt="arrow"
            />
            <img className="odoologo2InResetPassword" src={logo} alt="logo" />
          </div>
          <div id="inputInResetPassword">
            <h3 className="email">Email: </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="int1InResetPassword"
              type="email"
              placeholder="    Email"
            />
            <div id="BtnInResetPassword">
              <button id="btn4InResetPassword" type="submit">
                RESET PASSWORD
              </button>
            </div>
            <button className="BackToLogin" onClick={() => Navigate("/Login")}>
              Back to Login
            </button>
          </div>
        </div>
      </form>
      <div id="footerInResetPassword">
        <Footer/>
      </div>
    </>
  );
}
