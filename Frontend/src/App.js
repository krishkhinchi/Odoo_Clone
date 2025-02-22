import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import ChatBot from "./Components/ChatBot";
import Startfree from "./Components/Startfree";
import PageNotFound from "./Components/PageNotFound";
import Reset_password from "./Components/Reset_password";
import DownloadTheApp from "./Components/DownloadTheApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Footer" element={<Footer/>} />
      <Route path="/Reset_password" element={<Reset_password/>} />
      <Route path="/DownloadTheApp" element={<DownloadTheApp/>} />
      <Route path="/Startfree" element={<Startfree/>} />
      <Route path="/error" element={<PageNotFound/>} />
      <Route path="/ChatBot" element={<ChatBot/>} />
    </Routes>
  </BrowserRouter>
  </>
}