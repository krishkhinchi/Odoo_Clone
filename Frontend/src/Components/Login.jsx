import React from "react";
import axios from "axios";
import { useState } from "react";
import "../Style/Login.css";
import arrow from "../img/arrow.png";
import logo from "../img/odoo_logo.webp";
// import Reset_password from "./Reset_password";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const divert = () => {
    document.title = "Odoo - Signup";
    Navigate('/Signup')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);
    const Data = {
      email,
      password
    };

    try {
      const response = await axios.post("http://localhost:5000/Login", Data);
      if (response.status === 200) {
        if (showToast) {
          toast(response.data.message, { autoClose: 3000 });
        }
        if (response.data.message === "Login Successfull") {
          document.title = "Odoo - Home";
          Navigate("/Home");
        }
      }
    } catch (err) {
      toast(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="login">
          <div id="img1InLogin">
            <img className="odoologo2" src={logo} alt="logo" />
          </div>
          <div id="infoLogin">
            <h1>
              Access and manage your instances from <br /> this Odoo account.
            </h1>
          </div>
          <div id="input">
            <h3 className="email">Email: </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="int1InLogin"
              type="email"
              placeholder="    Email"
            />
            <div id="pw">
              <label className="password">Password: </label>
              <button
                className="btn3InLogin"
                onClick={() => Navigate("/Reset_password")}
              >
                Reset Password
              </button>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="int2InLogin"
                type="password"
                placeholder="    Password"
              />
            </div>
            <div id="signin">
              <button id="btn4" type="submit" onClick={handleSubmit}>
                SIGN IN
              </button>
            </div>
            <button className="notAcc" onClick={() => divert()}>
              Don't have an account?
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
