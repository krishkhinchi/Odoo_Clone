import React from "react";
import "../Style/SigninInHeader.css";
import { useNavigate } from "react-router-dom";

export default function SigninInHeader() {
const Navigate = useNavigate();
  const divert = () => {
    document.title = "Odoo - Login";
    Navigate("/Login");
  };

  return (
    <>
      <button className="Signin" onClick={() => divert()}>
        Sign in
      </button>
    </>
  );
}
