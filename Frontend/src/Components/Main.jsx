import React from "react";
import "../Style/Main.css";

export default function Main() {
  return (
    <>
      <div id="Heading">
        <h1 className="line1">All your business on</h1>
        <div id="style">
          <div className="Style1"></div>
          <div className="Style2"></div>
          <div className="Style3"></div>
        </div>
        <h1 className="line2">one platform.</h1>
        <h1 className="line3">Simple, efficient, yet affordable!</h1>
        <div id="button">
          <button className="btn1">Start now - It's free</button>
          <button className="btn2">Meet an advisor</button>
        </div>
      </div>
    </>
  );
}
