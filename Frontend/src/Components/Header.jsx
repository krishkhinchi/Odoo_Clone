import React from "react";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";

import logo from "../img/odoo_logo.webp";
import SigninInHeader from "./SigninInHeader";
import ProfileUserInHeader from "./ProfileUserInHeader";

export default function Header() {
const Navigate = useNavigate();
//  document.title = "Odoo - Home" 

  return (
    <div className="main">
      <div id="header">
        <img id="odoologo" src={logo} alt="logo" />
        <nav id="navbar">
          <button className="h1">Apps</button>
          <button className="h2">Industries</button>
          <button className="h3">Community</button>
          <button className="h4">Pricing</button>
          <button className="h5">Contact</button>
        </nav>
        {(document.title === "Odoo - Home" ) ? <ProfileUserInHeader/> : <SigninInHeader/>}
        <button className="Tryitfree" onClick={()=>Navigate("/error")}>Try it free</button>
      </div>
      <div id="blurInHeader"></div>
    </div>
  );
};