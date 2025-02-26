import React, {useState} from "react";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";

import logo from "../img/odoo_logo.webp";
import SigninInHeader from "./SigninInHeader";
import ProfileUserInHeader from "./ProfileUserInHeader";

export default function Header() {
const Navigate = useNavigate();
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);
const [count3, setCount3] = useState(0);
const [count4, setCount4] = useState(0);
const [count5, setCount5] = useState(0);
//  document.title = "Odoo - Home" 

function handleApps(){
  setCount(count+1)
  count%2==0 ? Navigate("/AppInHeader") : Navigate("/");
}

function handleIndustries(){
  setCount2(count2+1)
  count2%2==0 ? Navigate("/IndustriesInHeader") : Navigate("/");
}

function handleCommunity(){
  setCount3(count3+1)
  count3%2==0 ? Navigate("/CommunityInHeader") : Navigate("/");
}

function handlePricing(){
  setCount4(count4+1)
  count4%2==0 ? Navigate("/PricingInHeader") : Navigate("/");
}

function handleContact(){
  setCount5(count5+1)
  count5%2==0 ? Navigate("/ContactInHeader") : Navigate("/");
}

  return (
    <>
    <div className="main">
      <div id="header">
        <img id="odoologo" src={logo} alt="logo" />
        <nav id="navbar">
          <button className="h1" onClick={handleApps}>Apps</button>
          <button className="h2" onClick={handleIndustries}>Industries</button>
          <button className="h3" onClick={handleCommunity}>Community</button>
          <button className="h4" onClick={handlePricing}>Pricing</button>
          <button className="h5" onClick={handleContact}>Contact</button>
        </nav>
        {(document.title === "Odoo - Home" ) ? <ProfileUserInHeader/> : <SigninInHeader/>}
        <button className="Tryitfree" onClick={()=>Navigate("/error")}>Try it free</button>
      </div>
      <div id="blurInHeader"></div>
    </div>
    </>
  );
};