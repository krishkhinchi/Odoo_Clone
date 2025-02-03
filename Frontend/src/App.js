import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Startfree from "./Components/Startfree";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Footer" element={<Footer/>} />
      <Route path="/Startfree" element={<Startfree/>} />
      <Route path="/error" element={<PageNotFound/>} />
    </Routes>
  </BrowserRouter>
  </>
}