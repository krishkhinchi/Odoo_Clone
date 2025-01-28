import React from "react";
import "../Style/Header.css"
import logo from "../img/odoo_logo.webp"

function Header() {
  return (
    <div className="main">
      <div id="header">
        <img id="odoologo" src={logo} alt="logo" />
        <nav id="navbar">
          <h3 className="h1">Apps</h3>
          <h3 className="h2">Industries</h3>
          <h3 className="h3">Community</h3>
          <h3 className="h4">Pricing</h3>
          <h3 className="h5">Contact</h3>
        </nav>
        <button className="Signin">Sign in</button>
        <button className="Tryitfree">Try it free</button>
      </div>
    </div>
  );
}

export default Header;