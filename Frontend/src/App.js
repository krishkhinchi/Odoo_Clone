import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import ChatBot from "./Components/ChatBot";
import Startfree from "./Components/Startfree";
import PageNotFound from "./Components/PageNotFound";
import Reset_password from "./Components/Reset_password";
import DownloadTheApp from "./Components/DownloadTheApp";
import Profile from "./Components/Profile";
import Database from "./Components/Database";
import AppInHeader from "./Components/AppInHeader";
import IndustriesInHeader from "./Components/IndustriesInHeader";
import CommunityInHeader from "./Components/CommunityInHeader";
import PricingInHeader from "./Components/PricingInHeader";
import ContactInHeader from "./Components/ContactInHeader";
import Addbusiness from "./Components/Addbusiness";
import TryItForFree from "./Components/TryItForFree";

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
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Database" element={<Database/>} />
      <Route path="/AppInHeader" element={<AppInHeader/>} />
      <Route path="/IndustriesInHeader" element={<IndustriesInHeader/>} />
      <Route path="/CommunityInHeader" element={<CommunityInHeader/>} />
      <Route path="/PricingInHeader" element={<PricingInHeader/>} />
      <Route path="/ContactInHeader" element={<ContactInHeader/>} />
      <Route path="/Addbusiness" element={<Addbusiness/>} />
      <Route path="/TryItForFree" element={<TryItForFree/>} />
    </Routes>
  </BrowserRouter>
  </>
}