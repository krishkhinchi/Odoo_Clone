import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import "../Style/Home.css";

export default function Home() {
  // document.title = "Odoo - Home" 

  return (
    <>
      <div id="BodyHome">
        <div id="setHeaderinHome">
          <Header />
        </div>
        <div id="setChatBotinHome">
          {(document.title == "Odoo - Home") ? <ChatBot/> : <Header />}
        </div>
        <div id="setMaininHome">
          <Main />
        </div>
        <div id="setFooterinHome">
          <Footer />
        </div>
      </div>
    </>
  );
}
