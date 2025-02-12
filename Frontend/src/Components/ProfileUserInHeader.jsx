import React, { useState, useEffect } from "react";
import "../Style/ProfileUserInHeader.css";
import profileUser from "../img/ProfilePhoto/profile-user.png";
import idcard from "../img/id-card.png";
import database from "../img/servers.png";
import logout from "../img/logout.png";
import { useNavigate } from "react-router-dom";

export default function ProfileUserInHeader() {
  const Navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    function showTypeFile() {
      document.getElementById("afterClickOnProfileUserInHeader").style.display =
        "block";
    }
    function hideTypeFile() {
      document.getElementById("afterClickOnProfileUserInHeader").style.display =
        "none";
    }
    count % 2 == 0 ? showTypeFile() : hideTypeFile();
  };

  const handleLogout = () => {
    document.title = "Odoo"
    Navigate("/")
  }

  return (
    <>
      <button onClick={handleCount}>
        <img id="profileUserInHeader" src={profileUser} />
      </button>
      <div id="afterClickOnProfileUserInHeader">
        <div id="div1InProfileUserInHeader">
          <img className="idcardInProfileUserInHeader" src={idcard} />
          <button className="accountInProfileUserInHeader">My Account</button>
        </div>
        <div id="div2InProfileUserInHeader">
          <img className="serverInProfileUserInHeader" src={database} />
          <button className="databasesInProfileUserInHeader">My Databases</button>
        </div>
        <div id="thinLineInProfileUserInHeader"></div>
        <div id="div3InProfileUserInHeader" onClick={handleLogout}>
          <img className="logoutInProfileUserInHeader" src={logout} />
          <button className="logoutACInProfileUserInHeader">Logout</button>
        </div>
      </div>
    </>
  );
}
