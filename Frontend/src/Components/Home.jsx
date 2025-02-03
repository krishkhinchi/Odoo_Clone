import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import "../Style/Home.css";

export default function Home() {
  return (
    <>
      <div id="BodyHome">
        <div id="setHeaderinHome">
          <Header />
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
